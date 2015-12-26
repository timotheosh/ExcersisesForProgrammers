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
  (format *query-io* "~&~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

(defun enter-bill-amount ()
  "Enter the bill amount."
  (let ((bill-amount nil))
    (loop
       (if (or (null bill-amount) (minusp bill-amount))
           (progn
             (setf bill-amount (parse-float (prompt-read "Enter bill amount")))
             (when (or (not bill-amount) (and bill-amount (< bill-amount 0)))
               (format t "That is not a valid amount! Digits only (no negative numbers), please.~%")))
           (return)))
    (setf bill-amount (read-from-string (format nil "~$" bill-amount)))))


;; This function is broken. SBCL reports unreachable code
(defun enter-tip-rate-old ()
  "Enter tip rate."
  (let ((tip-rate nil))
    (loop
       (if (or (null tip-rate) (minusp tip-rate))
           (let ((line
                  (prompt-read "Enter the tip rate (without the %, default is 15)")))
             (when (zerop (length (string-trim #(#\space #\tab) line)))
               (setf tip-rate 15)
               (return))
             (setf line (parse-float line))
             (if (not line)
                 (format t "That is not a valid amount! Digits only, please.~%")
                 (progn
                   (setf tip-rate line)
                   (return))))))
    (/ tip-rate 100.0)))

(defun enter-tip-rate ()
  "Enter tip rate."
  (let ((tip-rate nil))
    (loop
      (let ((line (prompt-read "Enter the tip rate (without the %, default is 15)")))
        (when (zerop (length (string-trim #(#\space #\tab) line)))
          (setf tip-rate 15)
          (return))
        (setf tip-rate (parse-float line))
        (if (and tip-rate (minusp tip-rate))
            (format t "That is not a valid amount! Digits only, please.~%")
            (return))))
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

(tip-calculator)
