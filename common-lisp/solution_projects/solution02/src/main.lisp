(defpackage counting-characters
  (:use :cl)
  (:export :-main))
(in-package :counting-characters)

(defun prompt-string (&optional reprompt)
  (when reprompt
    (format t "ERROR: string cannot be empty!~%"))
  (format t "Please enter a string: ")
  (finish-output *standard-output*)
  (let ((input (read-line)))
    (if (zerop (length input))
        (prompt-string t)
        (format t "~A has ~R characters.~%" input (length input)))))

(opts:define-opts
    (:name :help
     :description "print this help text"
     :short #\h
     :long "help"))

(defun unknown-option (condition)
  (format t "warning: ~s option is unknown!~%" (opts:option condition))
  (invoke-restart 'opts:skip-option))

(defun -main (&rest args)
  (declare (ignorable args))
  (multiple-value-bind (options args)
      (handler-case
          (handler-bind ((opts:unknown-option #'unknown-option))
            (opts:get-opts)))
    (cond ((getf options :help) 
           (progn (opts:describe
                   :prefix (format nil "counting-characters Create a program that prompts for an input string and displays output that shows the input string and the number of characters the string contains.")
                   :usage-of "counting-characters")
                  (opts:exit 1)))
          ((not (zerop (length args)))
           (progn (format t "Does not take any arguments!")
                  (opts:describe
                   :prefix (format nil "counting-characters Create a program that prompts for an input string and displays output that shows the input string and the number of characters the string contains.")
                   :usage-of "counting-characters INPUT")
                  (opts:exit 1)))
          (t      (prompt-string)))))
