#lang racket

(let ((garbage (read-line))
      (input (apply + (map string->number (string-split (read-line))))))
  (display (format "~A" input)))
