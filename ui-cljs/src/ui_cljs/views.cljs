(ns ui-cljs.views
  (:require
   [re-frame.core :as re-frame]
   [ui-cljs.subs :as subs]))

(defn window->tauri []
  (println "window->tauri"))

(def invoke (. js/window -__TAURI_INVOKE__))

(def ob #js {"name" "world!"})

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        greetx (window->tauri)]
    [:div.container.px-4 {:style {:margin 80}}
     [:h1
      "Hello from " @name]
     [:h2 "yes!"]
     
     [:button 
      {:on-click (fn [_] (.then (invoke "greet" ob) #(println %)))} 
      "Click me!"]]))
