(ns ui-cljs.ui-components.file-input
  (:require [web.files.File :as File]
            [ui-cljs.tauri-infra.infra :refer [invoke]] 
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer [<p!]]))

(defn get-file-text-async [e]
  (-> e .-target .-files (aget 0) File/text))

(defn text->array-obj [json]
  (.parse js/JSON json))

(defn invoke-jshell-backend [text]
  (->> #js {"list" text}
       (invoke "jshell")))

(def file-input-comp
  [:div.container.px-4
   [:br]

   [:p "Choose a file with json data to generate commands"]

   [:label "Input file"]

   [:input {:type "file"
            :accept ".json"

            :on-change (fn [e]
                         (println "File changed, load file text")
                         (go (let [resp (-> e
                                            get-file-text-async <p!
                                            text->array-obj
                                            invoke-jshell-backend <p!)]
                               (println resp))))}]])