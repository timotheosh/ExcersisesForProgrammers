(ns solution-02.core
  (:gen-class))

(defn -main
  "Print the length of entered strings."
  [& args]
  (print "What is the input string? ")
  (flush)
  (loop [input (read-line)]
    (if (= (count input) 0)
        (do
          (print "You must enter something! What is the input string? ")
          (flush)
          (recur (read-line)))
        (do
          (println
           (format "%s has %s characters." input (count input)))
          (flush)))))
