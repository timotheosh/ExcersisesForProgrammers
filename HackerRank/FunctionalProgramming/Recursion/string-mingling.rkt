#lang racket

(let ((str1 (read-line))
      (str2 (read-line)))
  (for ([n (string-length str1)])
    (display (format "~A" (string-ref str1 n)))
    (display (format "~A" (string-ref str2 n))))
  (displayln ""))
