#lang racket

(define (input)
  (map string->number (string-split (read-line))))

(define (solution n)
  (apply
   +
   (flatten
    (let ((ij (input)))
      (for/list ([index (in-range (length ij))])
        (let* ((i (list-ref ij index)))
          (filter
           number?
           (for/list ([j (remove i ij)])
             (when (and (< i j)
                        (= (modulo (+ i j) n) 0))
               1)))))))))

(let ((n (string->number (second (string-split (read-line))))))
  (solution n))