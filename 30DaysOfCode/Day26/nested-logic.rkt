#lang racket

(define (calculate-fines date-returned due-date)
  (cond [(> (last date-returned) (last due-date))
         10000]
        [(< (last date-returned) (last due-date))
         0]
        [else
         (cond [(> (second date-returned) (second due-date))
                (* (- (second date-returned) (second due-date)) 500)]
               [(< (second date-returned) (second due-date))
                0]
               [else
                (if (> (first date-returned) (first due-date))
                    (* (- (first date-returned) (first due-date)) 15)
                    0)])]))

(let ((return-date (map string->number (string-split (read-line))))
      (due-date (map string->number (string-split (read-line)))))
  (displayln (calculate-fines return-date due-date)))
