;; Area of a rectangular room
(defun prompt-read (prompt)
  (format *query-io* "~&~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

(defun enter-number (prompt-text)
  "Entering the first number in which to do various calculations."
  (let ((fnum))
    (loop
         (if (or (null fnum) (minusp fnum))
             (progn
               (setf fnum (or
                           (parse-integer
                            (prompt-read
                             (format nil "~A" prompt-text))
                            :junk-allowed t)
                           -1))
               (when (or (null fnum) (minusp fnum))
                 (format t "Invalid number! Number must be a positive integer.~%")))
             (return)))
    fnum))

(defun pizza-party ()
  (let ((number-people (enter-number "How many people are attending?"))
        (number-pizzas (enter-number "How many pizzas do you have?"))
        (number-slices)
        (piece-per-person)
        (piece-leftover)
        (pieces-plural "pieces")
        (people-plural "people")
        (pizza-plural "pizzas"))
    (setf number-slices (* 8 number-pizzas))
    (setf piece-per-person (truncate (/ number-slices number-people)))
    (when (> 2 piece-per-person)
      (setf pieces-plural "piece"))
    (when (> 2 number-people)
      (setf people-plural "person"))
    (when (> 2 number-pizzas)
      (setf pizza-plural "pizza"))
    (setf piece-leftover (mod number-slices number-people))
    (format t "~d ~a with ~d ~a~%"
            number-people people-plural number-pizzas pizza-plural)
    (format t "Each person gets ~d ~a of pizza.~%"
            piece-per-person pieces-plural)
    (format t "There are ~d leftover pieces."
            piece-leftover)))
