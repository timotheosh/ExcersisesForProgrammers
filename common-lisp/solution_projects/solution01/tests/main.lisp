(defpackage saying-hello/tests
  (:use :cl
   :saying-hello
        :fiveam))
(in-package :saying-hello/tests)

;; NOTE: To run this test file, execute `(asdf:test-system :project_name)' in your Lisp.

(def-suite all-tests
  :description "The master suite of all run-testing tests.")

(in-suite all-tests)

(test greetings
      "Test greetings function."
      (is (string-equal "Hello, Polycarp!" (saying-hello::greetings "Polycarp")))
      (is (string-equal "Hello, world!" (saying-hello::greetings))))
