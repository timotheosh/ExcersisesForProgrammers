#lang racket

(define (print-list alist)
  (for ([a (length alist)])
    (display (format "~A " (list-ref alist a))))
  (displayln ""))

(define test-data
  '(
    ((6 1)
     (-1 0 1 -1 2 3))
    ((7 3)
     (-1 0 1 2 3 4 5))
    ((5 3)
     (-1 9 9 10 0))
    ((4 2)
     (0 -1 2 1))
    ((3 3)
     (-1 0 1))))

(displayln 5)
(for ([x (length test-data)])
  (print-list (first (list-ref test-data x)))
  (print-list (second (list-ref test-data x))))
