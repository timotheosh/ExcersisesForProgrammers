#lang racket

(define (make-matrix)
  (let ((size_larr (string->number (read-line)))
        (larr '()))
    (for ([i size_larr])
      (set! larr (append larr
                         (list (map string->number
                                    (string-split (read-line)))))))
    larr))

(define larr
  (make-matrix))

(let ((x1 0)
      (x2 0)
      (count 0))
  (for ([r larr])
    (set! x1 (+ x1 (list-ref r count)))
    (set! x2 (+ x2 (list-ref r (- (length r) count 1))))
    (set! count (+ count 1)))
  (display
   (format "~A" (abs (- x1 x2)))))
