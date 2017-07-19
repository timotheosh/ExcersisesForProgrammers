#lang racket

(let ((alist '())
      (total 0))
  (let loop ([prompt #f])
    (cond [(false? prompt) (loop (read-line))]
          [(and (not (eof-object? prompt))
                (> (string-length prompt) 0))
           (begin
             (when (odd? (string->number prompt))
               (set! total (+ (string->number prompt) total)))
             (loop (read-line)))]))
  (displayln total))
