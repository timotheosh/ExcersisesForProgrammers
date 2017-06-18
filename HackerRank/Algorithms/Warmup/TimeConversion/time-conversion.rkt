#lang racket

(let* ((input (read-line))
       (dd (string-split input ":"))
       (hour (first dd))
       (minute (second dd))
       (second (substring (third dd) 0 2))
       (ampm (substring (last dd) 2 4)))
  (cond [(and (string=? "PM" ampm)
              (< (string->number hour) 12))
         (set! hour (+ (string->number hour) 12))]
        [(and (string=? "AM" ampm)
              (string=? hour "12"))
         (set! hour "00")])
  (display
   (format "~A:~A:~A" hour minute second)))
