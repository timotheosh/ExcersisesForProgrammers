#lang racket

(let* ((cost (string->number (read-line)))
       (tip (string->number (read-line)))
       (tax (string->number (read-line)))
       (total (+ cost
                 (* cost 0.01 tip)
                 (* cost 0.01 tax))))
  (display
   (format "The total meal cost is ~A dollars."
           (inexact->exact (round total)))))
