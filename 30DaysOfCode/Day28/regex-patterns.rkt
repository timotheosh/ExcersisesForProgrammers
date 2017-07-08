#lang racket

(define (gmail-filter mail-list)
  (let ((new-list '()))
    (for ([entry mail-list])
      (when (regexp-match? #rx"@gmail.com" (second entry))
        (set! new-list (cons (first entry) new-list))))
    new-list))

(let ((number (string->number (read-line)))
      (alist '()))
  (for ([num number])
    (set! alist (cons (string-split (read-line)) alist)))
  (for ([entry (sort (gmail-filter alist) string<?)])
    (displayln entry)))
