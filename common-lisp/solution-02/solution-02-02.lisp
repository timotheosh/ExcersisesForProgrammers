(defun prompt-read (prompt)
  (format *query-io* "~&~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

(defun character-count ()
  (let ((input (prompt-read "What is the input string?")))
    (loop
         (if (zerop (length (string-trim #(#\space #\tab) input)))
             (setf input (prompt-read "You must enter an input string!"))
             (progn
               (format t "~A has ~D characters.~%" input (length input))
               (return))))))
