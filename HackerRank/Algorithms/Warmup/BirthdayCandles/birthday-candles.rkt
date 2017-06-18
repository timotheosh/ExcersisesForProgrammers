#lang racket

(define garbage (read-line))
(let* ((candles (sort (map string->number
                           (string-split (read-line))) <))
       (num (last candles)))
  (display
   (format "~A~%"
           (length (memv num candles)))))
