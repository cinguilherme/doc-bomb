(ns ui-cljs.views
  (:require [re-frame.core :as re-frame]
            [ui-cljs.subs :as subs]
            [ui-cljs.tauri-infra.infra :refer [tauri-checker]]
            [ui-cljs.ui-components.fib :refer [fib-inpt]]
            [ui-cljs.ui-components.greet :refer [greet-comp]]
            [ui-cljs.ui-components.file-input :refer [file-input-comp]]
            [ui-cljs.ui-components.file-response :refer [file-response-comp]]))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        file-response (re-frame/subscribe [::subs/file-response])]
    [:div.container.px-4 {:style {:margin 80}}

     [:div
      [:p tauri-checker]]

     [:h1
      "Hello from " @name]

     [:h2 "yes!"]

     [:div greet-comp]

     [:br]

     [:div fib-inpt]

     [:div file-input-comp]
     [:div (file-response-comp @file-response)]
     ]))
