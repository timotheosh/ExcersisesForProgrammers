#lang racket

(define (my-gcd g l)
  (displayln (format "~A ~A" g l))
  (if (= (modulo g l) 0)
      l
      (gcd l (modulo g l))))

(let ((nums (map string->number (string-split (read-line)))))
  (gcd (apply max nums) (apply min nums)))
