#lang racket

(let ((input (string->number (read-line))))
  (for ([i input])
    (display
     (format "Hello World~%"))))
