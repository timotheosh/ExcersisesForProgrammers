#lang racket

(define (reverse-list lst)
  (let loop ((lst lst)
             (lst-reversed '()))
    (if (empty? lst)
        lst-reversed
        (loop (rest lst) (cons (first lst) lst-reversed)))))

(reverse-list '(1 2 3 4))
