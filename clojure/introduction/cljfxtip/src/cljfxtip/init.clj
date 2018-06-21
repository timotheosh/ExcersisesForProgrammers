(ns cljfxtip.init
  (:require [cljfxtip.core :as core])
  (:gen-class
   :extends javafx.application.Application))

(defn -start [app stage]
  (core/start))

(defn -main [& args]
  (javafx.application.Application/launch
   cljfxtip.init
   (into-array String args)))
