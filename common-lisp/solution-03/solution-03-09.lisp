;; Paint calculator
(defun prompt-read (prompt)
  (format *query-io* "~&~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

(defun enter-number (prompt-text)
  "Entering an integer in which to do various calculations."
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

(defun parse-float (string)
  "Return a float read from string, and the index to the remainder of string."
  (multiple-value-bind (integer i)
      (parse-integer string :junk-allowed t)
    (if (= (length string) i)
        (values integer i)
        (multiple-value-bind (fraction j)
            (parse-integer string :start (+ i 1) :junk-allowed t)
          (if (null fraction)
              (values integer i)
              (values (float (+ integer (/ fraction (expt 10 (- j i 1))))) j))))))
