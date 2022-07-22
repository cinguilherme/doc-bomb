(ns ui-cljs.events
  (:require
   [re-frame.core :as re-frame]
   [ui-cljs.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::file-response
 (fn [cofx [_ fx]] 
   (assoc cofx :file-response fx)))