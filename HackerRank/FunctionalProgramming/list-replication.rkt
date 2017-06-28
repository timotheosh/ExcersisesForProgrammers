#lang racket

(define (f replicate rlist)
  (for ([l rlist])
    (for ([r replicate])
      (display (format "~A~%" l)))))

(let ((number (string->number (read-line)))
      (alist '()))
  (let loop ([prompt #f])
    (cond [(false? prompt) (loop (read-line))]
          [(and (not (eof-object? prompt))
                (> (string-length prompt) 0))
           (begin
             (set! alist (cons (string->number prompt) alist))
             (loop (read-line)))]))
  (f number (reverse alist)))
