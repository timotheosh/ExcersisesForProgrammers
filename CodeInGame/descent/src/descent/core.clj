(ns descent.core
  (:gen-class))

(defn find-tallest
  []
  (let [hmax (atom 0)
        imax (atom 0)]
    (loop [i 0]
      (when (< i 8)
        (let [mountainH (read)]
          (when (> mountainH @hmax)
            (reset! hmax mountainH)
            (reset! imax i)))
        (recur (inc i))))
    @imax))

(defn -main [& args]
  (while true
    (println (find-tallest))))
