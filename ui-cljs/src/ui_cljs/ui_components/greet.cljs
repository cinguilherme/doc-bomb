(ns ui-cljs.ui-components.greet
  (:require [ui-cljs.tauri-infra.infra :refer [invoke]]
            [ui-cljs.util.util :refer [evt-value]]))

(defn greet-backend []
  (->> #js {"name" "world"}
       (invoke "greet")))


(def greet-comp
  [:button
   {:on-click (fn [_] (do (println "invoked click!")
                          (-> (greet-backend)
                              (.then  #(println %)))))}
   "Click me!"])
