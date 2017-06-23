#lang racket

(define (day-of-the-programmer year)
  (define normal-year "13.09")
  (define leap-year "12.09")
  (define y-1918 "26.09")
  (cond [(< year 1918)
         (if (= (modulo year 4) 0)
             leap-year
             normal-year)]
        [(> year 1918)
         (if (or (= (modulo year 400) 0)
                 (and (= (modulo year 4) 0)
                      (not (= (modulo year 100) 0))))
             leap-year
             normal-year)]
        [else y-1918]))

(let ((year (string->number (read-line))))
  (display (format "~A.~A" (day-of-the-programmer year) year)))
