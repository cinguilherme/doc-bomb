(ns ui-cards.components.header
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [reagent.core :as r])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(defn header
  [title]
  [:div
   [:h1 title]])