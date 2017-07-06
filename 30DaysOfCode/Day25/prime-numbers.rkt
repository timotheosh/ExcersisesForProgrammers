#lang racket

(define (square x)
  (* x x))

(define (divides? a b)
  (= (remainder b a) 0))

(define (find-divisor n test-divisor)
  (cond [(> (square test-divisor) n) n]
        [(divides? test-divisor n) test-divisor]
        [else (find-divisor n (+ test-divisor 1))]))

(define (smallest-divisor n)
  (find-divisor n 2))

(define (prime? n)
  (if (= (abs n) 1)
      #f
      (= n (smallest-divisor n))))

(for ([num (string->number (read-line))])
  (let ((message "Not prime"))
    (when (prime? (string->number (read-line)))
      (set! message "Prime"))
    (displayln (format "~A" message))))
