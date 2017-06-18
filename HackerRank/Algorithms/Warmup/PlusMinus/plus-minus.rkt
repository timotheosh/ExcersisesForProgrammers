#lang racket

(define (valid-number lst)
  (let ((pos 0)
        (neg 0)
        (zer 0))
    (for ([n  lst])
      (cond [(> n 0) (set! pos (+ pos 1))]
            [(< n 0) (set! neg (+ neg 1))]
            [else (set! zer (+ zer 1))]))
    (list pos neg zer)))

(let* ((garbage (read-line))
       (input (map string->number
                   (string-split (read-line))))
       (denominator (length input))
       (numerators (valid-number input)))
  (display
   (format "~A~%~A~%~A~%"
           (exact->inexact (/ (first numerators) denominator))
           (exact->inexact (/ (second numerators) denominator))
           (exact->inexact (/ (third numerators) denominator)))))
