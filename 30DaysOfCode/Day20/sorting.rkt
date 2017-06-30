#lang racket

(define (swap array index1 index2)
  (let ((one (list-ref array index1))
        (two (list-ref array index2)))
    (set! array (list-set array index1 two))
    (set! array (list-set array index2 one))
    array))

(define (swap-count a)
  (let ((n (length a))
        (num-swaps 0))
    (for ([i n])
      (for ([j (- n 1)])
        (when (> (list-ref a j) (list-ref a (+ j 1)))
          (begin (set! a (swap a j (+ j 1)))
                 (set! num-swaps (add1 num-swaps))))))
    (displayln (format "Array is sorted in ~A swaps." num-swaps))
    (displayln (format "First Element: ~A" (first a)))
    (displayln (format "Last Element: ~A" (last a)))))

(define garbage (read-line))
(swap-count (map string->number (string-split (read-line))))
