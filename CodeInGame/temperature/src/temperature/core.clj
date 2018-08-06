(ns temperature.core
  (:gen-class))

(defn abs [n] (max n (- n)))

(defn -main
  [& args]
  ;; Auto-generated code below aims at helping you parse
  ;; the standard input according to the problem statement.

  (let [n (read)
        sm (atom 5526)]
    ;; n: the number of temperatures to analyse
    (when-not (pos? n)
      (reset! sm 0))
    (loop [i n]
      (when (pos? i)
        (let [t (read)]
          ;; t: a temperature expressed as an integer ranging from -273 to 5526
          (cond
            (< (abs t) (abs @sm)) (reset! sm t)
            (= (abs t) (abs @sm)) (reset! sm (max @sm t)))
          (recur (dec i)))))

    ;; (binding [*out* *err*]
    ;;   (println "Debug messages..."))

    ;; Write answer to stdout
    (println @sm)))
