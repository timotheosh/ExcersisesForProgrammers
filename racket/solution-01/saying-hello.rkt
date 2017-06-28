#lang racket
;; Saying Hello

(define (say-hello)
  (display "What is your name? ")
  (let ((name (read)))
    (display (format "Hello, ~A, nice to meet you!~%" name))))
