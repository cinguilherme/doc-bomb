(ns ui-cljs.views
  (:require
   [re-frame.core :as re-frame]
   [ui-cljs.subs :as subs]
   ))



(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div.container.px-4 {:style {:margin 80}}
     [:h1
      "Hello from " @name]
     [:h2 "yes!"]]))
