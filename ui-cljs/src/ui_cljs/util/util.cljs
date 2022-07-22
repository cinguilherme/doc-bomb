(ns ui-cljs.util.util)

(defn evt-value [e]
  (. (. e -target) -value))