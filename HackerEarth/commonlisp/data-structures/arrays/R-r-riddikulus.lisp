(defun delimiterp (c)
  (or (char= c #\Space)
      (char= c #\linefeed)))

(defun string-split (string &key (delimiterp #'delimiterp))
  (loop :for beg = (position-if-not delimiterp string)
     :then (position-if-not delimiterp string :start (1+ end))
     :for end = (and beg (position-if delimiterp string :start beg))
     :when beg :collect (subseq string beg end)
     :while end))


(defun rotate (seq times)
  (if (<= times 0)
      seq
      (rotate (concatenate 'list (cdr seq) (list (car seq))) (- times 1))))

(defun main ()
  (let ((string (read-line)))
    (multiple-value-bind (size i)
        (parse-integer string :junk-allowed t)
      (multiple-value-bind (times j)
          (parse-integer string  :start (+ i 1) :junk-allowed t)
        (let ((array (string-split (read-line))))
          (format t "~{~a ~}~%" (rotate array times)))))))
