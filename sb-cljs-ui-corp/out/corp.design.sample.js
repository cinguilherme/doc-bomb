var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var corp=$CLJS.corp || ($CLJS.corp = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var stories=$CLJS.stories || ($CLJS.stories = {});

$CLJS.SHADOW_ENV.setLoaded("corp.design.sample.js");

goog.provide('corp.design.sample');
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hi"], 0));

//# sourceMappingURL=corp.design.sample.js.map
