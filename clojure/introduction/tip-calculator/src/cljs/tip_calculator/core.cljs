(ns tip-calculator.core
  (:require [tip-calculator.ajax :refer [load-interceptors!]]
            [ajax.core :refer [GET]]
            [cljsjs.jquery]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [hoplon.core
             :as h
             :include-macros true]
            [hoplon.jquery]
            [javelin.core
             :refer [cell defc]
             :refer-macros [cell= dosync defc=]]
            [markdown.core :refer [md->html]]
            [secretary.core :as secretary])
  (:import goog.History))

(defonce selected-page (cell :home))

(defonce docs (cell nil))

(defn nav-link [uri title page expanded?]
  (h/li :class (cell= {:active (= page selected-page)
                       :nav-item true})
    (h/a :class "nav-link"
         :href uri
         :click #(do
                   (reset! expanded? false)
                   (secretary/dispatch! uri))
         title)))

(defn navbar []
  (let [expanded? (cell false)]
    (h/nav :class "navbar navbar-dark bg-primary"
      (h/button :class "navbar-toggler hidden-sm-up"
                :click #(swap! expanded? not)
                "☰")
      (h/div :class (cell= {:collapse true
                            :navbar-toggleable-xs true
                            :in expanded?})
       (h/a :class "navbar-brand" :href "/" "tip-calculator")
       (h/ul {:class "nav navbar-nav"}
         (nav-link "#/" "Home" :home expanded?)
         (nav-link "#/about" "About" :about expanded?))))))

(defn about []
  (h/div :class "container"
    (h/div :class "row"
      (h/div :class "col-md-12"
        (h/img :src (str js/context "/img/warning_clojure.png"))))))

(defn tip-calc
  [cost per]
  (* cost per 0.01))

(defn home []
  (defc mcost 0)
  (defc tipper 0)
  (defc= tiptotal (* mcost tipper 0.01))
  (defc= total (+ mcost (* mcost tipper 0.01)))
  (h/div :class "container"
         (h/div
          :html
          (h/table
            (h/tr
             (h/td :css {:text-align "right"}
                   (h/label "Meal cost:"))
             (h/td
              (h/input :text :name "mcost" :value mcost :size 4
                       :change #(reset! mcost @%))))
            (h/tr
             (h/td :css {:text-align "right"}
                   (h/label "Tip %:"))
             (h/td
              (h/input :text :name "tipper" :value tipper :size 4
                       :change #(reset! tipper @%))))
            (h/tr
             (h/td :css {:text-align "right"}
              (h/label "Total Tip:"))
             (h/td
              (h/input :text :css {:readonly "true"} :name "tiptotal"
                       :value tiptotal :size 4
                       :change #(reset! tiptotal @%))))
            (h/tr
             (h/td :css {:text-align "right"}
                   (h/label "Total:"))
             (h/td
              (h/input :text :css {:readonly "true"} :name total
                       :value total :size 4)))))))


(h/defelem page []
  (h/div :id "app"
    (navbar)
    (cell=
     (case selected-page
       :home (home)
       :about (about)))))

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
 (reset! selected-page :home))

(secretary/defroute "/about" []
 (reset! selected-page :about))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
 (doto (History.)
   (events/listen
     HistoryEventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
   (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(reset! docs %)}))

(defn mount-components []
  (js/jQuery #(.replaceWith (js/jQuery "#app") (page))))

(defn init! []
  (load-interceptors!)
  (hook-browser-navigation!)
  (mount-components)
  (fetch-docs!))
