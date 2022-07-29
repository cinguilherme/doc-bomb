(ns ui-cljs.ui-components.greet
  (:require [ui-cljs.tauri-infra.infra :refer [invoke]] 
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer [<p!]]))

(defn greet-backend []
  (->> #js {"name" "world"}
       (invoke "greet")))


(def greet-comp
  [:button
   {:on-click (fn [_] (go (let [response (-> (greet-backend) <p! js->clj)]
                            (println response))))}
   "Click me!"])
