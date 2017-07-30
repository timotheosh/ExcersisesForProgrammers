;; Remove duplicates

(format t "~A~%" (remove-duplicates (read-line)
                                    :test #'char-equal
                                    :from-end t))
