(ns find-product.core
  (:gen-class))

(defn -main
  "Problem found at https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/find-product/"
  [& args]
  (let [garbage (read-line)
        arr (map read-string (clojure.string/split (read-line) #" "))]
    arr))
