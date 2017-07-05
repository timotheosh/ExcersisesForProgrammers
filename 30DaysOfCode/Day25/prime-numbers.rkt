#lang racket

(define (is-prime n)
  (let loop ((x n)
             (y 2))
    (cond [(or (< x 2)
               (= x y))
           #t]
          [(= (modulo x y) 0)
           #f]
          [else
           (loop x (+ y 1))])))

(for ([num (string->number (read-line))])
  (let ((message "Not prime"))
    (when (is-prime (string->number (read-line)))
      (set! message "Prime"))
    (displayln (format "~A" message))))
