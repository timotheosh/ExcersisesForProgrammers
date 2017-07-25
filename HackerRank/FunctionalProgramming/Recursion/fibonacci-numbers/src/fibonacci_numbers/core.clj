(ns fibonacci-numbers.core
  (:gen-class))

(defn fibonacci
  [n]
  (cond
    (= n 1) 0
    (= n 2) 1
    :else (+ (fibonacci (- n 1)) (fibonacci (- n 2)))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (let [num (read-string (read-line))]
    (println (fibonacci num))))
