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
  (setf bill-amount "")
  (loop
     (if (zerop (length bill-amount))
       (progn (princ "Enter the bill amount: ")
              (setf bill-amount (read-line)))
       (return)))
  (setf bill-amount (read-from-string (format nil "~$" (read-from-string bill-amount)))))

(defun enter-tip-rate ()
  (princ "Enter the tip rate (without the %, default is 15): ")
  (let ((tip-rate (read-line)))
    (if (zerop (length tip-rate))
        0.15
        (/ (read-from-string tip-rate) 100.00))))

(defun get-total (bill tip-rate)
  "bill and tip rate should be floats. tip rate should be a
   percentage, already divided by 100"
  (read-from-string (format nil "~$" (* bill (+ 1 tip-rate)))))

(defun tip-calculator ()
  (setf bill (enter-bill-amount))
  (fresh-line)
  (setf tip-rate (enter-tip-rate))
  (format t "The total is ~A" (get-total bill tip-rate)))

(defun enter-bill ()
  (setf bill "")
  (loop
       (when (zerop (length bill))
         (princ "Enter bill amount: ")
         (setf bill (read-line))
         (fresh-line)))
  bill)
