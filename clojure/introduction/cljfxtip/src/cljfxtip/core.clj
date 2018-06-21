(ns cljfxtip.core
  (:require [fn-fx.fx-dom :as dom]
            [fn-fx.diff :refer [component defui render should-update?]]
            [fn-fx.controls :as ui])
  (:gen-class
   :name cljfxtip.core
   :extends javafx.application.Application))

(def firebrick
  (ui/color :red 0.69 :green 0.13 :blue 0.13))

;; The main login window component, notice the authed? parameter, this defines a function
;; we can use to construct these ui components, named "login-form"
(defui TipCalculator
  (render [this {:keys [clicked? total]}]
          (ui/grid-pane
           :alignment :center
           :hgap 10
           :vgap 10
           :padding (ui/insets
                     :bottom 25
                     :left 25
                     :right 25
                     :top 25)
           :children [(ui/text
                       :text "Tip Calculator"
                       :font (ui/font
                              :family "Tahoma"
                              :weight :normal
                              :size 20)
                       :grid-pane/column-index 0
                       :grid-pane/row-index 0
                       :grid-pane/column-span 2
                       :grid-pane/row-span 1)

                      (ui/label
                       :text "Meal Cost:"
                       :grid-pane/column-index 0
                       :grid-pane/row-index 1)

                      (ui/text-field
                       :id :meal-cost
                       :grid-pane/column-index 1
                       :grid-pane/row-index 1)

                      (ui/label :text "Tip Rate:"
                                :grid-pane/column-index 0
                                :grid-pane/row-index 2)

                      (ui/text-field
                       :id :tip-rate
                       :grid-pane/column-index 1
                       :grid-pane/row-index 2)

                      (ui/h-box
                       :spacing 10
                       :alignment :bottom-right
                       :children [(ui/button
                                   :text "Calculate"
                                   :on-action {:event :calculate
                                               :fn-fx/include {:meal-cost #{:text}
                                                               :tip-rate #{:text}}})]
                       :grid-pane/column-index 1
                       :grid-pane/row-index 4)

                      (ui/text
                       :text (if clicked? (str "Meal total: " total) "")
                       :fill firebrick
                       :grid-pane/column-index 1
                       :grid-pane/row-index 6)])))

;; Wrap our login form in a stage/scene, and create a "stage" function
(defui Stage
  (render [this args]
          (ui/stage
           :title "Tip Calculator"
           :shown true
           :scene (ui/scene
                   :root (tip-calculator args)))))

(defn- calculate
  [meal-cost tip-rate]
  (let [mcost (Float/parseFloat meal-cost)
        tipr (Integer/parseInt tip-rate)
        tip (* mcost (/ tipr 100))]
    (str (+ mcost tip))))

(defn start []
  (let [;; Data State holds the business logic of our app
        data-state (atom {:clicked? false :total "0.00"})

        ;; handler-fn handles events from the ui and updates the data state
        handler-fn (fn [{:keys [event] :as all-data}]
                     (println "UI Event" (:fn-fx/includes all-data))
                     (case event
                       :calculate (let [data (:fn-fx/includes all-data)
                                        meal-cost (get (:meal-cost data) :text "0.0")
                                        tip-rate (get (:tip-rate data) :text "15")]
                                    (println "meal-cost: " meal-cost)
                                    (println "tip-rate: " tip-rate)
                                    (swap! data-state assoc :clicked? true)
                                    (swap! data-state assoc :total (calculate meal-cost tip-rate)))
                       (println "Unknown UI event" event all-data)))

        ;; ui-state holds the most recent state of the ui
        ui-state (agent (dom/app (stage @data-state) handler-fn))]

    ;; Every time the data-state changes, queue up an update of the UI
    (add-watch data-state :ui (fn [_ _ _ _]
                                (send ui-state
                                      (fn [old-ui]
                                        (dom/update-app old-ui (stage @data-state))))))))
