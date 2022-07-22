(ns ui-cljs.ui-components.greet
  (:require [ui-cljs.tauri-infra.infra :refer [invoke]]
            [ui-cljs.util.util :refer [evt-value]]
            [cljs.core.async :refer [go <! >! chan]]
            [cljs.core.async.interop :refer [<p!]]))

(defn greet-backend []
  (->> #js {"name" "world"}
       (invoke "greet")))


(def greet-comp
  [:button
   {:on-click (fn [_] (do (println "invoked click!")
                          (go (let [response (<p! (greet-backend))]
                                (println response)))))}
   "Click me!"])
