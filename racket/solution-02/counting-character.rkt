#lang racket

(display "What is the input string? ")
(let loop ((input (read-line)))
  (if (= (string-length input) 0)
      (begin
        (display "You must enter a something! What is the input string? ")
        (loop (read-line)))
      (display (format "~A has ~A characters.~%" input (string-length input)))))
