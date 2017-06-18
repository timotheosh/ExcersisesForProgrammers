#lang racket

(define (grade g)
  (let ((h (* (round (exact->inexact (/ g 5))) 5)))
    (cond [(or (= h g)
               (< h g)
               (< g 38))
           g]
          [else (inexact->exact h)])))

(let ((num (string->number (read-line)))
      (nlist '()))
  (for ([n num])
    (set! nlist (cons (string->number (read-line)) nlist)))
  (for ([n (reverse nlist)])
    (display
     (format "~A~%" (grade n)))))
