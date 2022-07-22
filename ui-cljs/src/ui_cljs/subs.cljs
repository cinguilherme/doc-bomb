(ns ui-cljs.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::file-response
 (fn [db]
   (:file-response db))) 
