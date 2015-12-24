;; Solution 1

(defun enter-bill-amount ()
  (princ "Enter the bill amount: ")
  (let ((bill-amount (read-line)))
    (unless (zerop (length bill-amount))
      (read-from-string bill-amount))))

(defun enter-tip-rate ()
  (princ "Enter the tip rate (without the %, default is 15): ")
  (let ((tip-rate (read-line)))
    (if (zerop (length tip-rate))
        0.15
        (/ (read-from-string tip-rate) 100.00))))

(defun get-total (bill tip-rate)
  "bill and tip rate should be floats. tip rate should be a
   percentage, already divided by 100"
  (* bill (+ 1 tip-rate)))

(defun tip-calculator ()
  (setf bill (enter-bill-amount))
  (fresh-line)
  (setf tip-rate (enter-tip-rate))
  (format t "The total is ~A" (get-total bill tip-rate)))
