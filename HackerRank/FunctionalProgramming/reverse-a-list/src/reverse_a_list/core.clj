(ns reverse-a-list.core
  (:gen-class))

(defn reverse-list [lst]
  (if (empty? lst)
    []
    (conj (reverse-list (rest lst)) (first lst))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
