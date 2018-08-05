#lang racket
(let ((in1 (string->number (read-line)))
      (in2 (read-line)))
  (printf (~a  (* in1 2) "\n"))
  (printf (~a in2 "\n")))
