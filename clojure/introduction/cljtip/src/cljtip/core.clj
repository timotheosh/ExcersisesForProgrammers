(ns cljtip.core
  (:require [seesaw.core :as s]
            [seesaw.font :refer [font]])
  (:gen-class))

(defn my-label
  [text]
  (s/label
   :text text
   :font (font :name :sans-serif
               :size 16)))

(defn tip-gui
  []
  (s/frame
   :title "Tip Calculator"
   :content (s/grid-panel
             )))


(def f (s/frame
        :title "Get to know Seesaw"
        :content "Get to know Seesaw"))

(def lbl (s/label
          :text "I'm another label"
          :background :pink
          :foreground "#00f"
          :font (font
                 :name :sans-serif
                 :style #{:bold :italic}
                 :size 18)))

(def b (s/button :text "Click Me"))

(defn display [content]
  (s/config! f :content content)
  content)

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (s/invoke-later
   (-> (s/frame :title "Hello"
                :content "Hello, Seesaw"
                :on-close :exit)
       s/pack!
       s/show!)))
