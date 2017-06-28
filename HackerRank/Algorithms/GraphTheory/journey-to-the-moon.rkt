#lang racket

(define (get-data inputs)
  (let ((pairs '()))
    (for ([n inputs])
      (let ((new-pair (map string->number (string-split (read-line)))))
        (set! pairs (cons new-pair
                          pairs))
        (println pairs)))
    pairs))

(define (consolidate lists)
  (let ((new-list '()))
    (for ([n lists])
      (for ([m (rest lists)])
        (if (or (member (first n) m)
                (member (second n) m))
            (set! new-list (cons
                            (remove-duplicates (append n m))
                            new-list))
            )))))

(get-data 3)
