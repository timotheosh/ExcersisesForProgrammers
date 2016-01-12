;; Simple Math
(defun prompt-read (prompt)
  (format *query-io* "~&~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

(defun enter-number (prompt-text)
  "Entering the first number in which to do various calculations."
  (let ((fnum))
    (loop
         (if (or (null fnum) (minusp fnum))
             (progn
               (setf fnum (or
                           (parse-integer
                            (prompt-read
                             (format nil "~A" prompt-text))
                            :junk-allowed t)
                           -1))
               (when (or (null fnum) (minusp fnum))
                 (format t "Invalid number! Number must be a positive integer.~%")))
             (return)))
    fnum))

(defun simple-math ()
  (let ((fnum) (snum))
    (setf fnum (enter-number "What is the first number?"))
    (setf snum (enter-number "What is the second number?"))
    (format t "~a + ~a = ~a~%~a - ~a = ~a~%~a * ~a = ~a~%~a / ~a = ~a~%"
            fnum snum (+ fnum snum)
            fnum snum (- fnum snum)
            fnum snum (* fnum snum)
            fnum snum (/ fnum snum))))
