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

(defconstant +foot2-meter2+ 0.09290304)

(defun area-of-rectangle-room ()
  (let* ((length (enter-number "What is the length of the room in feet?"))
         (width (enter-number "What is the width of the room in feet?"))
         (area-feet (* length width))
         (area-meters (* area-feet +foot2-meter2+)))
    (format t "You entered dimensions of ~d feet by ~d feet.~%"
            length width)
    (format t "The area is~%~d square feet~%~d square meters~%"
            area-feet area-meters)))
