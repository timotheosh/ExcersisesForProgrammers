(ns hello-world-n-times.core
  (:gen-class))

(defn hello_word_n_times[n]
    ; Write your code here
  (dotimes [x n]
    (println "Hello World")))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (hello_word_n_times (Integer/parseInt (read-line))))
