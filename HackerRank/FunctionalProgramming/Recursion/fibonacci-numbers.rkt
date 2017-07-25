#lang racket

(define (fibonacci n)
  (cond [(= n 1) 0]
        [(= n 2) 1]
        [else (+ (fibonacci (- n 1)) (fibonacci (- n 2)))]))

(let ((num (string->number (read-line))))
  (displayln (fibonacci num)))
