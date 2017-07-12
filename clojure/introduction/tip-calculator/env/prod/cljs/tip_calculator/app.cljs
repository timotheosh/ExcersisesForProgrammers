(ns tip-calculator.app
  (:require [tip-calculator.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
