(ns ui-cljs.ui-components.file-response
  (:require
   [re-frame.core :as re-frame]
   [ui-cljs.db :as db]
   [ui-cljs.events :as events]
   [ui-cljs.subs :as subs]
   [ui-cljs.header :as header]))

(defn file-response-comp [file-response]
  [:div.container.px-4 {:style {:margin 80}}
   [:div
    [:p "displays contents returned from backend (using re-frame db to integrate between components)"]
    [:p file-response]]])