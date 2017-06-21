#lang racket
(define (highest-sum vect)
  (define sum '())
  (for ([i 4])
    (for ([j 4])
      (set! sum (cons
                 (+ (vector-ref (vector-ref vect i) j)
                    (vector-ref (vector-ref vect i) (+ j 1))
                    (vector-ref (vector-ref vect i) (+ j 2))
                    (vector-ref (vector-ref vect (+ i 1)) (+ j 1))
                    (vector-ref (vector-ref vect (+ i 2)) j)
                    (vector-ref (vector-ref vect (+ i 2)) (+ j 1))
                    (vector-ref (vector-ref vect (+ i 2)) (+ j 2)))
                 sum))))
  (first (sort sum >)))

(define arr (make-vector 6 0))
(for ([r 6])
  (vector-set! arr r (list->vector (map string->number (string-split (read-line))))))
(display
 (format "~A~%" (highest-sum arr)))
