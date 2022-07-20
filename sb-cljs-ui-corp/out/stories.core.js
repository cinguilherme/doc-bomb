var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var stories=$CLJS.stories || ($CLJS.stories = {});

$CLJS.SHADOW_ENV.setLoaded("stories.core.js");

goog.provide('stories.core');

//# sourceMappingURL=stories.core.js.map
