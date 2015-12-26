(defun prompt-read (prompt)
  (format *query-io* "~&~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

(defun get-name ()
  (prompt-read "What is your name?"))

(defun get-greeting ()
  (format nil "Hello, ~A, nice to meet you!~%" (get-name)))

(defun say-hello ()
  (format t "~A" (get-greeting)))
