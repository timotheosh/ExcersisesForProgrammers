#lang racket

(define (factorial n)
  (if (= n 0)
      1
      (* n (factorial (- n 1)))))

(define (solution n)
  (exact->inexact
   (apply +
          (for/list ([x 10])
            (/ (expt n x) (factorial x))))))

;; Looking for 2423600.1887
;;(solution 20)

(let* ((num (string->number (read-line)))
       (data (for/list ([x num])
               (string->number (read-line)))))
  (for ([x data])
    (displayln (solution x))))

