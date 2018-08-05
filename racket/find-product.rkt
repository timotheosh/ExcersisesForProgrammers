#lang racket
;; https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/find-product/
(define (process ans n)
  (modulo (* ans n) (+ (expt 10 9) 7)))

(let ((garbage (read-line))
      (array (map string->number (string-split (read-line)))))
  (let loop ([a 1] ))array)
