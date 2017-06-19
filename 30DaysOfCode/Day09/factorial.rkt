#lang racket

(define (factorial n)
  (if (= n 0)
      1
      (* n (factorial (- n 1)))))

(let ((num (string->number (read-line))))
  (display
   (format "~A~%" (factorial num))))
