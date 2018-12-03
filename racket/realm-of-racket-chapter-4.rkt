#lang racket

(struct point (x y) #:transparent)


(define (distance-to-origin p)
  (sqrt (+ (sqr (point-x p))
           (sqr (point-y p)))))

(define pt1 (point -1 2))
(define pt2 (point -1 2))
