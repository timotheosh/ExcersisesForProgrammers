(ns clj-filter-positions-array.core
  (:gen-class))

(fn [lst] (map second (partition 2 lst)))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
