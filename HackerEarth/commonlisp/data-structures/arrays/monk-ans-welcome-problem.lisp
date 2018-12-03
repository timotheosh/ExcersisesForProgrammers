(read-line)

(defun get-array()
  (read-from-string (concatenate 'string "(" (read-line) ")")))

(format t "~{~a ~}" (mapcar #'+ (get-array) (get-array)))
