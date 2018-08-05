#lang racket

(let ((k (second (map string->number (string-split (read-line)))))
      (items (map string->number (string-split (read-line))))
      (charge (string->number (read-line))))
  (let* ((allergy (list-ref items k))
         (bill-split (/ (apply + (remove allergy items)) 2)))
    (if (> charge bill-split)
        (displayln (- charge bill-split))
        (displayln "Bon Appetit"))))
