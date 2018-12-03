(ns user
  (:require [webapp.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [webapp.core :refer [start-app]]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'webapp.core/repl-server))

(defn stop []
  (mount/stop-except #'webapp.core/repl-server))

(defn restart []
  (stop)
  (start))


