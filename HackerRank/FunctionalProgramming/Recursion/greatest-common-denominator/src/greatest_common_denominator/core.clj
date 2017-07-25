(ns greatest-common-denominator.core
  (:gen-class))

;;(defn gcd [g l]
;;  (if (= (mod g l) 0)
;;    l
;;    (gcd l (mod g l))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (let [f (fn [a b]
            (loop [g (max a b)
                   l (min a b)]
               (if (= (mod g l) 0)
                 l
                 (recur l (mod g l))))) [m n]
        (map read-string (re-seq #"\d+" (read-line)))] (println (f m  n))))
