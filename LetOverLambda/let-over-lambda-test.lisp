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
