#lang racket

(define factorial
  (lambda (n)
    (if (= n 0)
        1
        (* n (factorial (- n 1))))))

(define teval
  (lambda (n x)
    (/ (expt n x) (factorial x))))

(let ((n 5.0000)
      (t 0.00))
  (for ([x (map add1 (build-list 10 values))])
    (set! t (+ t (teval n x))))
  t)
