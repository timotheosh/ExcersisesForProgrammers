#lang racket

(let ((num (string->number (read-line)))
      (numbers '()))
  (for ([n num])
    (set! numbers (cons (string->number (read-line)) numbers)))
  (for ([n (sort numbers <)])
    (display (format "~A~%" n))))
