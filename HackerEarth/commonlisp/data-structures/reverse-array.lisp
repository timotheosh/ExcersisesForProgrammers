(let ((size (parse-integer (read-line) :junk-allowed t)))
  (let ((array (loop
                  for x from 0
                  below size
                  collect (parse-integer (read-line) :junk-allowed t))))
    (mapcar (lambda (x) (format t "~a~%" x)) (reverse array))))
