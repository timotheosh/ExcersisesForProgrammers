#lang racket

(let ((alist '()))
  (let loop ([prompt #f])
    (cond [(false? prompt) (loop (read-line))]
          [(and (not (eof-object? prompt))
                (> (string-length prompt) 0))
           (begin
             (set! alist (cons (string->number prompt) alist))
             (loop (read-line)))]))
  (for ([i alist])
    (displayln i)))
