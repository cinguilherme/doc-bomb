(ns ui-cljs.ui-components.file-response
  (:require [clojure.walk :refer [keywordize-keys]]))

(def li-command
  (fn [x] (let [data (-> x js->clj keywordize-keys)]
            [:li {:key (:id data)}
             (str (:command data))])))

(defn file-response-decomp [file-response]
  [:ul
   (map li-command file-response)])

(defn file-response-comp [file-response]
  [:div.container.px-4 {:style {:margin 80}}
   [:div
    [:p "displays contents returned from backend (using re-frame db to integrate between components)"]
    [:div (file-response-decomp file-response)]]])
