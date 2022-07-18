(ns ui-cljs.events
  (:require
   [re-frame.core :as re-frame]
   [ui-cljs.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
