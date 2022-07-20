(ns ui-cljs.views
  (:require-macros [devcards.core :as dc :refer [defcard deftest]])
  (:require [re-frame.core :as re-frame]
            [ui-cljs.subs :as subs]))

(def invoke (. js/window -__TAURI_INVOKE__))

(defn ->js-object [m]
  (js/object m))

(def ob #js {"name" "world!"})

(defcard card [:h1 "hey"])

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div.container.px-4 {:style {:margin 80}}
     [:h1
      "Hello from " @name]
     [:h2 "yes!"]

     [:button
      {:on-click (fn [_] (-> (invoke "greet" ob)
                             (.then  #(println %))))}
      "Click me!"]]))
