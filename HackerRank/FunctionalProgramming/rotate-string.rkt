#lang racket

(define (rotate-list lst)
  (if (null? lst)
      '()
      (append (cdr lst)
              (list (car lst)))))

(define (rotate-string s)
  (list->string
   (rotate-list (string->list s))))

(define (print-rotations s)
  (let ((i 1))
    (let loop ([str (rotate-string s)])
      (printf "~A " str)
      (when (< i (string-length s))
        (begin
          (set! i (add1 i))
          (loop (rotate-string str))))))
  (displayln ""))

(let ((num (string->number (read-line))))
  (for ([n num])
    (print-rotations (read-line))))
