#lang racket

(let ((num (string->number (read-line)))
      (words '()))
  (for ([n num])
    (set! words (cons (read-line) words)))
  (for ([w (reverse words)])
    (for ([c (in-range 0 (string-length w) 2)])
      (display (string-ref w c)))
    (display " ")
    (for ([c (in-range 1 (string-length w) 2)])
      (display (string-ref w c)))
    (display (format "~%"))))
