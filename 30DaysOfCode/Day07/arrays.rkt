#lang racket

(define garbage (read-line))

(let ((array (map string->number (string-split (read-line)))))
  (for ([n (reverse array)])
    (display (format "~A " n)))
  (display (format "~%")))
