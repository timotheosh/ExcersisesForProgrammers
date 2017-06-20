#lang racket
(define (bits n)
  (let loop ((n n) (acc '()))
    (cond
      [(and (= 0 n)
            (= 0 (length acc))) '(0)]
      [(= 0 n) acc]
      [else (loop (arithmetic-shift n -1) (cons (bitwise-and n 1) acc))])))

(define (seq-1 bits)
  (let ((ones 0)
        (max 0))
    (for ([b bits])
      (if (= 1 b)
          (set! ones (add1 ones))
          (set! ones 0))
      (when (> ones max)
        (set! max ones)))
    max))

(display (format "~A~%" (seq-1 (bits (string->number (read-line))))))
