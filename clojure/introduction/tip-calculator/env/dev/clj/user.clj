(ns user
  (:require [mount.core :as mount]
            [tip-calculator.figwheel :refer [start-fw stop-fw cljs]]
            tip-calculator.core))

(defn start []
  (mount/start-without #'tip-calculator.core/repl-server))

(defn stop []
  (mount/stop-except #'tip-calculator.core/repl-server))

(defn restart []
  (stop)
  (start))


