;; Fibonacci Numbers
(defun fibonacci (n)
  (cond
    ((eq n 1) 0)
    ((eq n 2) 1)
    ((+ (fibonacci (- n 1)) (fibonacci (- n 2))))))

(let ((num (parse-integer (read-line))))
  (format t "~A~%" (fibonacci num)))
