#lang racket

(let ((lst (sort (map string->number
                      (string-split (read-line))) <)))
  (display
   (format "~A ~A"
           (apply + (cdr (reverse lst)))
           (apply + (cdr lst)))))
