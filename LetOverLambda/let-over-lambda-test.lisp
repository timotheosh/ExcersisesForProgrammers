(defvar global-string "This is a global string")

(defun test-global()
  (format t "~a~%" global-string))

(defun lambda-returner ()
  (lambda (x) (+ 1 x)))

(defun let-over-lambda-returner ()
  (let ((y 1))
    (lambda (x)
      (incf y x))))

(progn
  (compile 'let-over-lambda-returner)
  (time (let-over-lambda-returner)))

(defun counter-class ()
  (let ((counter 0))
    (lambda (x)
      (incf counter))))

(defun block-scanner (trigger-string)
  (let* ((trig (coerce trigger-string 'list))
         (curr trig))
    (lambda (data-string)
      (let ((data (coerce data-string 'list)))
        (dolist (c data)
          (if curr
              (setq curr
                    (if (char= (car curr) c)
                        (cdr curr) ; next char
                        trig))))   ; start over
        (not curr))))) ; return t if found

(defvar scanner
  (block-scanner "jihad"))

(funcall scanner "We will start ")
;; => NIL
(funcall scanner "the ji")
;; => NIL
(funcall scanner "had tomorrow")
;; => T

(let ((direction 'up))
  (defun toggle-counter-direction ()
    (setq direction
          (if (eq direction 'up)
              'down
              'up)))

  (defun counter-class ()
    (let ((counter 0))
      (lambda ()
        (if (eq direction 'up)
            (incf counter)
            (decf counter))))))

(defun sleep-units% (value unit)
  (sleep
    (* value
       (case unit
         ((s) 1)
         ((m) 60)
         ((h) 3600)
         ((d) 86400)
         ((ms) 1/1000)
         ((us) 1/1000000)))))

(defun unit-of-time% (value unit)
  (* value
     (case unit
       ((s) 1)
       ((m) 60)
       ((h) 3600)
       ((d) 86400)
       ((ms) 1/1000)
       ((us) 1/1000000))))

(defmacro unit-of-time (value unit)
  `(* ,value
      ,(case unit
             ((s) 1)
             ((m) 60)
             ((h) 3600)
             ((d) 86400)
             ((ms) 1/1000)
             ((us) 1/1000000))))

(defmacro nlet (n letargs &rest body)
  `(labels ((,n ,(mapcar #'car letargs)
              ,@body))
     (,n ,@(mapcar #'cadr letargs))))

(defun nlet-fact (n)
  (nlet fact ((n n))
    (if (zerop n)
      1
      (* n (fact (- n 1))))))
