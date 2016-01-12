(defun prompt-read (prompt)
  (format *query-io* "~&~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

;; Story 01 The band had slowed some in recent years, canceling tour
;; dates because of Mr. Kilmister’s ailments.
(defparameter *story01* '(format nil "The ~a had ~a some in recent years, canceling tour dates because of ~a ~a." noun-01 past-tense-verb-01 noun-02 noun-03))

(defun madlib01 ()
  (let ((noun-01) (past-tense-verb-01) (noun-02) (noun-03))
    (setf noun-01 (prompt-read "Give me a noun"))
    (setf past-tense-verb-01 (prompt-read "Give me a past-tense verb"))
    (setf noun-02 (prompt-read "Give me a noun"))
    (setf noun-03 (prompt-read "Give me a noun"))
    (format t "The ~a had ~a some in recent years, canceling tour dates because of ~a ~a.~%" noun-01 past-tense-verb-01 noun-02 noun-03)))
