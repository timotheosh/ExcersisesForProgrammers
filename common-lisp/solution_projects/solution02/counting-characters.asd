(defsystem "counting-characters"
  :version "0.1.0"
  :author "Tim Hawes <trhawes@gmail.com>"
  :license "MIT"
  :depends-on ("cl-ppcre"
               "unix-opts")
  :components ((:module "src"
                :components
                ((:file "main"))))
  :description "Create a program that prompts for an input string and displays output that shows the input string and the number of characters the string contains."
  :build-operation "asdf:program-op"
  :build-pathname "target/counting-characters"
  :entry-point "counting-characters:-main"
  :in-order-to ((test-op (test-op "counting-characters/tests"))))

(defsystem "counting-characters/tests"
  :author "Tim Hawes <trhawes@gmail.com>"
  :license "MIT"
  :depends-on ("counting-characters"
               "fiveam")
  :components ((:module "tests"
                :components
                ((:file "main"))))
  :description "Test system for counting-characters"
  :perform (test-op (op c) (symbol-call :fiveam :run! (find-symbol* :all-tests :counting-characters/tests))))
