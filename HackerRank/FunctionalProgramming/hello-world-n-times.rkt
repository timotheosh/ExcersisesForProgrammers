#lang racket
(define (hello-world-n-times n)
  (for ([i (in-range n)])
    (displayln "Hello World")))


(hello-world-n-times (read))
