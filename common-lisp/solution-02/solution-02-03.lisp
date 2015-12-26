;; Constraints for this exercise:
;; • Use a single output statement to produce this output, using
;;   appropriate string-escaping techniques for quotes.
;; • If your language supports string interpolation or string substitution,
;;   don’t use it for this exercise. Use string concatenation instead.

(defun prompt-read (prompt)
  (format *query-io* "~&~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

(defun get-quote ()
  (let ((quote) (author))
    (loop
       (cond ((null quote)
              (setf quote (prompt-read "What is the quote?")))
             ((zerop (length (string-trim #(#\space #\tab) quote)))
              (setf quote (prompt-read "Please enter a quote")))
             ((null author)
              (setf author (prompt-read "Who said it?")))
             ((zerop (length (string-trim #(#\space #\tab) author)))
              (setf author (prompt-read "Please enter who you are quoting")))
             (t
              (princ (quote-quote quote author))
              (fresh-line)
              (return))))))

(defun quote-quote (quote author)
  (concatenate 'string author
               (concatenate 'string " says, "
                            (concatenate 'string "\""
                                         (concatenate 'string quote
                                                      "\"")))))
;; (get-quote)

;; Challenge: In Chapter 7, Data Structures , you’ll practice working
;; with lists of data. Modify this program so that instead of
;; prompting for quotes from the user, you create a structure that
;; holds quotes and their associated attributions and then display all
;; of the quotes using the format in the example. An array of maps
;; would be a good choice.
