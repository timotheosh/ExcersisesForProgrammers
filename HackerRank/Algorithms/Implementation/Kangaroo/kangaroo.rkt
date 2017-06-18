#lang racket

(define (can-pass k1 k1-inc k2 k2-inc)
  (cond [(or (and (> k1 k2)
                  (> k1-inc k2-inc))
             (and (> k2 k1)
                  (> k2-inc k1-inc))
             (and (not (= k1 k2))
                  (= k1-inc k2-inc)))
         "NO"]
        [(= k1 k2)
         "YES"]
        [else (begin
                (set! k1 (+ k1 k1-inc))
                (set! k2 (+ k2 k2-inc)))
              (can-pass k1 k1-inc k2 k2-inc)]))

(define input (map string->number (string-split (read-line))))
(let ((k1 (first input))
      (k1-inc (second input))
      (k2 (third input))
      (k2-inc (fourth input)))
  (display (format "~A~%" (can-pass k1 k1-inc k2 k2-inc))))
