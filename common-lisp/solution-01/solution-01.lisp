;;;; Solution 1

;;;; Utility functions
(defun parse-float (string)
  "Return a float read from string, and the index to the remainder of string."
  (multiple-value-bind (integer i)
      (parse-integer string :junk-allowed t)
    (if (= (length string) i)
        (values integer i)
        (multiple-value-bind (fraction j)
            (parse-integer string :start (+ i 1) :junk-allowed t)
          (if (null fraction)
              (values integer i)
              (values (float (+ integer (/ fraction (expt 10 (- j i 1))))) j))))))

(defun prompt-read (prompt)
  (format *query-io* "~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

(defun enter-bill-amount ()
  "Enter the bill amount."
  (let ((bill-amount 0))
    (loop
       (if (zerop bill-amount)
           (progn
             (setf bill-amount (or
                                (parse-float (prompt-read "Enter bill amount"))
                                0))
             (when (zerop bill-amount)
               (format t "~%That is not a valid amount! Digits only, please.~%")))
           (return)))
    (setf bill-amount (read-from-string (format nil "~$" bill-amount)))))

(defun enter-tip-rate ()
  "Enter tip rate."
  (let ((tip-rate nil))
    (loop
       (if (not tip-rate)
           (let ((d (prompt-read "Enter the tip rate (without the %, default is 15)")))
             (when (zerop (length d))
               (progn
                 (setf tip-rate 15)
                 (return)))
             (setf d (or (parse-float d) nil))
             (if (not d)
                 (format t "~%That is not a valid amount! Digits only, please.~%")
                 (progn
                   (setf tip-rate d)
                   (return))))))
    (/ tip-rate 100.0)))

(defun tip-amount (bill tip-rate)
  "Return the tip amount. The bill and tip-rate should be floats. The
tip-rate is a percentage, already divided by 100."
  (parse-float (format nil "~,2F" (* bill tip-rate))))

(defun tip-calculator ()
  (let* ((bill (enter-bill-amount))
         (tip-rate (enter-tip-rate))
         (tip (tip-amount bill tip-rate)))
    (format t "The tip is ~,2F~%" tip)
    (format t "The total is ~,2F" (+ bill (* bill tip-rate)))))
