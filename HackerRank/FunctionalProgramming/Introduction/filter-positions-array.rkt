#lang racket

(define (f lst)
  (let ((new-list '()))
    (for ([l (length lst)])
      (when (odd? l)
        (set! new-list (cons (list-ref lst l) new-list))))
    (reverse new-list)))

(let ((alist '()))
  (let loop ([prompt #f])
    (cond [(false? prompt) (loop (read-line))]
          [(and (not (eof-object? prompt))
                (> (string-length prompt) 0))
           (begin
             (set! alist (cons (string->number prompt) alist))
             (loop (read-line)))]))
  (for ([i (f (reverse alist))])
    (displayln i)))
