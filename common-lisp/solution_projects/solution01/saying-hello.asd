(defsystem "saying-hello"
  :version "0.1.0"
  :author "Tim Hawes <trhawes@gmail.com"
  :license "MIT"
  :depends-on ("cl-ppcre"
               "unix-opts")
  :components ((:module "src"
                :components
                ((:file "main"))))
  :description "A Hello World program."
  :build-operation "asdf:program-op"
  :build-pathname "target/saying-hello"
  :entry-point "saying-hello:-main"
  :in-order-to ((test-op (test-op "saying-hello/tests"))))

(defsystem "saying-hello/tests"
  :author "Tim Hawes <trhawes@gmail.com"
  :license "MIT"
  :depends-on ("saying-hello"
               "fiveam")
  :components ((:module "tests"
                :components
                ((:file "main"))))
  :description "Test system for saying-hello"
  :perform (test-op (op c) (symbol-call :fiveam :run! (find-symbol* :all-tests :saying-hello/tests))))
