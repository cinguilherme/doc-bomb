(ns ui-cljs.ui-components.fib
  (:require [ui-cljs.tauri-infra.infra :refer [invoke]]
            [ui-cljs.util.util :refer [evt-value]]
            [cljs.core.async.interop :refer [<p!]]
            [cljs.core.async :refer [go]]))

(defn fibonacci-backend [n]
  (int n)
  (->> #js {"n" (int n)}
       (invoke "fib")))

(def fib-inpt
  [:div.container.px-4
   [:label "Fibonacci Calc"]
   [:input

    {:type "number"
     :on-change (fn [e] (go (-> (evt-value e)
                                fibonacci-backend <p!
                                println)))}]])