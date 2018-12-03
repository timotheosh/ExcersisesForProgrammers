
(defun number-to-increment (array min)
  "Given the number min, returns the number of times the array must be
  incremented to where all numbers in the array are equal to or
  greater than min."
  (let ((amin (car (sort array #'<))))
    (if (>= amin min)
        0
        (- min amin))))

(defun main()
  (let ((num-tests (parse-integer (read-line) :junk-allowed t)))
    (let ((answers
           (loop
              for x from 0
              below num-tests
              collect
                (let ((min
                       (car (last (read-from-string
                                   (concatenate 'string "(" (read-line) ")"))))))
                  (number-to-increment
                   (mapcar #'parse-integer (string-split (read-line)))
                   min)))))
      (format t "~{~a~%~}" answers))))

(main)
