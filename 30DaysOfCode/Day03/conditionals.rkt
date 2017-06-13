#lang racket

(let ((n (string->number (read-line))))
  (cond [(or (odd? n)
             (and (> n 5)
                  (< n 21)))
         (display "Weird")]
        [(or (and (> n 1)
                  (< n 5))
             (> n 19))
         (display "Not Weird")]
        [else (display "Invalid Entry")]))
