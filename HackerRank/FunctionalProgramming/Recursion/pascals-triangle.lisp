;; Pascals Triangle

(defun newrow (l)
  (if (> 2 (length l))
      '(1)
      (cons (+ (car l) (cadr l)) (newrow (cdr l)))))

(defun genrow (n l)
  (when (< 0 n)
    (progn
      (mapcar #'(lambda (x) (format t "~A " x)) l)
      (format t "~%"))
    (genrow (1- n) (cons 1 (newrow l)))))

(defun pascal (n)
  (genrow n '(1)))

(let ((num (parse-integer (read-line))))
  (pascal num))
