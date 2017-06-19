#lang racket

(let ((number (string->number (read-line)))
      (contacts (make-hash)))
  (for ([num number])
    (let ((entry (string-split (read-line))))
      (hash-set! contacts (first entry) (second entry))))
  (let loop ([prompt #f])
    (cond [(false? prompt) (loop (read-line))]
          [(and (not (eof-object? prompt))
                (> (string-length prompt) 0))
           (begin
             (if (not (hash-has-key? contacts prompt))
                 (display (format "Not found~%"))
                 (display (format "~A=~A~%" prompt (hash-ref contacts prompt))))
             (loop (read-line)))])))
