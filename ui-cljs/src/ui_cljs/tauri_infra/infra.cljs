(ns ui-cljs.tauri-infra.infra)

(defn tap [v] (println v) v)

(def tauri-checker
  (if (nil? (. js/window -__TAURI_INVOKE__))
    "Tauri is not running or not available in the browser"
    "Tauri is running"))

(def invoke (. js/window -__TAURI_INVOKE__))