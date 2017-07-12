(ns tip-calculator.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [tip-calculator.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[tip-calculator started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[tip-calculator has shut down successfully]=-"))
   :middleware wrap-dev})
