;; Retirement Calculator
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

(defun get-date ()
  (multiple-value-bind
	(second minute hour date month year day-of-week dst-p tz)
      (get-decoded-time)
    (list second minute hour date month year day-of-week dst-p tz)))

(defun retirement-calculator ()
  (let* ((current-year (sixth (get-date)))
         (current-age (enter-number "What is your current age?"))
         (retire-age  (enter-number "What age would you like to retire?"))
         (retire-in (- retire-age current-age))
         (retire-year (+ current-year retire-in)))
    (if (minusp retire-in)
        (format t "It's ~a, so you could have retired in ~a." current-year retire-year)
        (format t "It's ~a, so you can retire in ~a." current-year retire-year))))
