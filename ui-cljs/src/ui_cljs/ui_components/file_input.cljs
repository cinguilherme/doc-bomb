(ns ui-cljs.ui-components.file-input
  (:require [web.files.File :as File]
            [ui-cljs.tauri-infra.infra :refer [tap]]
            [ui-cljs.util.util :refer [evt-value]]))

(defn get-file-text-async [e]
  (-> e .-target .-files (aget 0) File/text))

(def file-input-comp
  [:div.container.px-4
   [:br]

   [:p "Choose a file with json data to generate commands"]

   [:label "Input file"]

   [:input {:type "file"
            :accept ".json"

            :on-change (fn [e]
                         (println "File changed, load file text")
                         (.then (get-file-text-async e)
                                #(println %)))}]])