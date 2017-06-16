#lang racket

(let ((n (string->number (read-line))))
  (for ([m 10])
    (display
     (format "~A x ~A = ~A~%" n (+ m 1) (* n (+ m 1))))))
