(ns thor.core
  (:gen-class))

(defn -main [& args]
  (loop [lightX (read) lightY (read) initialTX (read) initialTY (read)]
                                        ; lightX: the X position of the light of power
                                        ; lightY: the Y position of the light of power
                                        ; initialTX: Thor's starting X position
                                        ; initialTY: Thor's starting Y position
    (let [remainingTurns 1]
                                        ; remainingTurns: The remaining amount of turns Thor can move. Do not remove this line.
      (let [Y (cond
                (> initialTY lightY) "N"
                (< initialTY lightY) "S"
                :else "")
            X (cond
                (> initialTX lightX) "W"
                (< initialTX lightX) "E"
                :else "")]

                                        ; (binding [*out* *err*]
                                        ;   (println "Debug messages..."))

                                        ; A single line providing the move to be made: N NE E SE S SW W or NW
        (when (not-empty (str Y X))
          (println (str Y X))
          (let [newY (cond
                       (> initialTY lightY) (dec initialTY)
                       (< initialTY lightY) (inc initialTY)
                       :else initialTY)
                newX (cond
                       (> initialTX lightX) (dec initialTX)
                       (< initialTX lightX) (inc initialTX)
                       :else initialTX)]
            (recur lightX lightY  newX newY)))))))
