#lang racket

(define garbage (read-line))

(let* ((scores (map string->number (string-split (read-line))))
       (record-wins 0)
       (record-losses 0)
       (high-score (first scores))
       (low-score (first scores)))
  (for ([i scores])
    (when (> i high-score)
      (begin
        (set! record-wins (add1 record-wins))
        (set! high-score i)))
    (when (< i low-score)
      (begin
        (set! record-losses (add1 record-losses))
        (set! low-score i))))
  (display (format "~A ~A" record-wins record-losses)))
