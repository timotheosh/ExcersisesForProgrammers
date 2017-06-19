#lang racket

;; Function with recursion for prompting until only enter is returned.
(define (add-key searches)
  (let ((key (read-line)))
    (if (and (not (eof-object? key))
             (> (string-length key) 0))
        (begin
          (set! searches (cons key searches))
          (add-key searches))
            searches)))

(let ((number (string->number (read-line)))
      (contacts '()))
  (for ([num number])
    (set! contacts (cons (string-split (read-line)) contacts)))
  (let ((searches (reverse (add-key '()))))
    (for ([key searches])
      (let ((result (assoc key contacts)))
        (if (not result)
            (display (format "Not found~%"))
            (display (format "~A=~A~%" (first result) (second result))))))))
