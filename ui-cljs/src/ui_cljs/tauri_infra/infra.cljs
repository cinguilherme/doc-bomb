(ns ui-cljs.tauri-infra.infra)

(defn tap [v] (println v) v)

(def invoke (. js/window -__TAURI_INVOKE__))