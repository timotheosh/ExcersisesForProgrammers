(ns solution-03.core
  (:gen-class))

(defn print-quote
  [quote author]
  (println
   (str author " says, \"" quote "\""))
  (flush))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (print "What is the quote? ")
  (flush)
  (loop [input (read-line)]
    (if (= (count input) 0)
        (do
          (print "You must enter something! What is the input string? ")
          (flush)
          (recur (read-line)))
        (do
          (print "Who said it? ")
          (flush)
          (def name (read-line))
          (when (= (count name) 0)
            (set! name "anonymous"))
          (print-quote input name)))))
