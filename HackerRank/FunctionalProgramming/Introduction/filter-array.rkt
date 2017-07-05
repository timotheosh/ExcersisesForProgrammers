#lang racket

(define (f delim alist)
  (let ((new-list '()))
    (for ([i alist])
      (when (< i delim)
        (set! new-list (cons i new-list))))
    new-list))

(let ((number (string->number (read-line)))
      (alist '()))
  (let loop ([prompt #f])
    (cond [(false? prompt) (loop (read-line))]
          [(and (not (eof-object? prompt))
                (> (string-length prompt) 0))
           (begin
             (set! alist (cons (string->number prompt) alist))
             (loop (read-line)))]))
  (for ([i (f number alist)])
    (displayln i)))
