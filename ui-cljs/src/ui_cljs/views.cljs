(ns ui-cljs.views
  (:require [re-frame.core :as re-frame]
            [ui-cljs.subs :as subs]))

(defn tap [v] (println v) v)

(def invoke (. js/window -__TAURI_INVOKE__))

(defn evt-value [e]
  (. (. e -target) -value))

(defn fibonacci-backend [n]
  (int n)
  (->> #js {"n" (int n)}
       tap 
       (invoke "fib")
       tap))

(defn greet-backend []
  (->> #js {"name" "world"}
       tap 
       (invoke "greet")
       tap))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div.container.px-4 {:style {:margin 80}}
     
     [:h1
      "Hello from " @name]
     
     [:h2 "yes!"]

     [:button
      {:on-click (fn [_] (do (println "invoked click!")
                             (-> (greet-backend)
                                 (.then  #(println %)))))}
      "Click me!"]

     [:br]

     [:div.container.px-4
      [:label "Fibonacci Calc"]
      [:input

       {:type "number"
        :on-change (fn [e] (-> (evt-value e)
                               fibonacci-backend
                               (.then  #(println %))
                               (.catch #(println "unable to resolve promise: " %))))}]]]))
