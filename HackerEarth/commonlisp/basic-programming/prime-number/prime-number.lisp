;; List prime numbers

(defun factors (num &optional (fac1 1) (fac2 num))
  "Returns a list of all the factors of num, starting with fac1."
  (cond ((>= fac1 fac2) nil)
        ((zerop (mod num fac1))
         (let ((x (+ fac1 1))
               (y (/ num fac1)))
           (if (= fac1 y)
               (list fac1)
               (cons fac1
                     (cons y
                           (factors num x y))))))
        (t (factors num (+ fac1 1) fac2))))

(setq number (read-line))

(multiple-value-bind (integer i)
    (parse-integer number :junk-allowed t)
  (factors integer))
