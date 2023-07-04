(defpackage counting-characters/tests
  (:use :cl
        :counting-characters
        :fiveam))
(in-package :counting-characters/tests)

;; NOTE: To run this test file, execute `(asdf:test-system :counting-characters)' in your Lisp.
;; 

(def-suite all-tests
  :description "The master suite of all run-testing tests.")

(in-suite all-tests)
