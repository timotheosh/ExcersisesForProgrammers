#lang racket
;; Followed the logic in someone else's Python3 submission.
(let ((numtests (string->number (read-line))))
  (for ([num numtests])
    (let ((test (map string->number (string-split (read-line)))))
      (if (<= (bitwise-ior (sub1 (second test)) (second test)) (first test))
          (displayln (sub1 (second test)))
          (displayln (- (second test) 2))))))
