#lang racket

(let ((size (string->number (read-line))))
  (for ([i size])
    (display
     (format "~A" (~a
                   (make-string (+ i 1) #\#)
                   #:min-width size #:align 'right #:left-pad-string " ")))
    (display (format "~%"))))
