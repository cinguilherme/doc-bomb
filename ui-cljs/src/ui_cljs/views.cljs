(ns ui-cljs.views
  (:require [web.files.File :as File]
            [re-frame.core :as re-frame]
            [ui-cljs.subs :as subs]
            [ui-cljs.ui-components.fib :refer [fib-inpt]]
            [ui-cljs.ui-components.greet :refer [greet-comp]]
            [ui-cljs.ui-components.file-input :refer [file-input-comp]]))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div.container.px-4 {:style {:margin 80}}

     [:h1
      "Hello from " @name]

     [:h2 "yes!"]

     [:div greet-comp]

     [:br]

     [:div fib-inpt]

     [:div file-input-comp]]))
