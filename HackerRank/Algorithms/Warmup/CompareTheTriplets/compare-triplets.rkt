#lang racket

(define (constraint x)
  (if (or (< x 1)
          (> x 100))
      #f
      #t))

(define (compare-pairs x y)
  (cond
    [(> x y) '(1 0)]
    [(< x y) '(0 1)]
    [else '(0 0)]))

(let ((alice 0)
      (bob 0))
  (let ((x (read-line))
        (y (read-line)))
    (define a (map string->number (string-split x)))
    (define b (map string->number (string-split y)))
    (for ([i (map compare-pairs a b)])
      (set! alice (+ (car i) alice))
      (set! bob (+ (car (cdr i)) bob)))
    (display
     (format "~A ~A ~%" alice bob))))
