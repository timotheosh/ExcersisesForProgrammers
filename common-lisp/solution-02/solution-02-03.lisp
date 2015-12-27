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

(defparameter *famous-quotes*
  '(
    ("Lord Acton" "Power tends to corrupt and absolute power corrupts absolutely.")
    ("Francis Bacon" "Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.")
    ("Nikolaus von Jacquin" "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of
   genius.")
    ("Vince Lombardi" "The quality of a person's life is in direct proportion to their commitment to excellence, regardless of their chosen field of endeavor.")
    ("Teresa Calcutta" "If we have no peace, it is because we have forgotten that we belong to each other.")
    ("Andre Gide" "Believe those who are seeking the truth. Doubt those who find it.")
    ("Edith Sitwell" "I am patient with stupidity but not with those who are proud of it.")
    ("Albert Einstein" "Any man who reads too much and uses his own brain too little falls into lazy habits of thinking")))

(defun print-quotes (quotes)
    "Takes a list of lists. Each list has a car of the author's name and the quote in the cdr."
  (dolist (quote quotes)
    (format t "~a~%" (quote-quote (cadr quote) (car quote)))))
