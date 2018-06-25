(ns bdaychoco.core
  (:gen-class))

; Complete the solve function below.
(defn solve [s d m]
  (apply + 
    (filter integer? 
      (for [x (partition m 1 s)]
         (when (= (apply + x) d)
           1)))))

(def fptr (get (System/getenv) "OUTPUT_PATH"))

(def n (Integer/parseInt (clojure.string/trim (read-line))))

(def s (vec (map #(Integer/parseInt %) (clojure.string/split (read-line) #" "))))


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
