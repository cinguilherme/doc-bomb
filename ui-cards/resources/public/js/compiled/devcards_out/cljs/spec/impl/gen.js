// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35187 = arguments.length;
var i__25924__auto___35188 = (0);
while(true){
if((i__25924__auto___35188 < len__25923__auto___35187)){
args__25930__auto__.push((arguments[i__25924__auto___35188]));

var G__35189 = (i__25924__auto___35188 + (1));
i__25924__auto___35188 = G__35189;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35186){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35186));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35192 = arguments.length;
var i__25924__auto___35193 = (0);
while(true){
if((i__25924__auto___35193 < len__25923__auto___35192)){
args__25930__auto__.push((arguments[i__25924__auto___35193]));

var G__35194 = (i__25924__auto___35193 + (1));
i__25924__auto___35193 = G__35194;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35190){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35190));
});

var g_QMARK__35195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35196 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35195){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35195))
,null));
var mkg_35197 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35195,g_35196){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35195,g_35196))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35195,g_35196,mkg_35197){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35195).call(null,x);
});})(g_QMARK__35195,g_35196,mkg_35197))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35195,g_35196,mkg_35197){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35197).call(null,gfn);
});})(g_QMARK__35195,g_35196,mkg_35197))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35195,g_35196,mkg_35197){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35196).call(null,generator);
});})(g_QMARK__35195,g_35196,mkg_35197))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35158__auto___35218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35158__auto___35218){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35219 = arguments.length;
var i__25924__auto___35220 = (0);
while(true){
if((i__25924__auto___35220 < len__25923__auto___35219)){
args__25930__auto__.push((arguments[i__25924__auto___35220]));

var G__35221 = (i__25924__auto___35220 + (1));
i__25924__auto___35220 = G__35221;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35218))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35218){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35218),args);
});})(g__35158__auto___35218))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35158__auto___35218){
return (function (seq35198){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35198));
});})(g__35158__auto___35218))
;


var g__35158__auto___35222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35158__auto___35222){
return (function cljs$spec$impl$gen$list(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35223 = arguments.length;
var i__25924__auto___35224 = (0);
while(true){
if((i__25924__auto___35224 < len__25923__auto___35223)){
args__25930__auto__.push((arguments[i__25924__auto___35224]));

var G__35225 = (i__25924__auto___35224 + (1));
i__25924__auto___35224 = G__35225;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35222))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35222){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35222),args);
});})(g__35158__auto___35222))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35158__auto___35222){
return (function (seq35199){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35199));
});})(g__35158__auto___35222))
;


var g__35158__auto___35226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35158__auto___35226){
return (function cljs$spec$impl$gen$map(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35227 = arguments.length;
var i__25924__auto___35228 = (0);
while(true){
if((i__25924__auto___35228 < len__25923__auto___35227)){
args__25930__auto__.push((arguments[i__25924__auto___35228]));

var G__35229 = (i__25924__auto___35228 + (1));
i__25924__auto___35228 = G__35229;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35226))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35226){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35226),args);
});})(g__35158__auto___35226))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35158__auto___35226){
return (function (seq35200){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35200));
});})(g__35158__auto___35226))
;


var g__35158__auto___35230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35158__auto___35230){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35231 = arguments.length;
var i__25924__auto___35232 = (0);
while(true){
if((i__25924__auto___35232 < len__25923__auto___35231)){
args__25930__auto__.push((arguments[i__25924__auto___35232]));

var G__35234 = (i__25924__auto___35232 + (1));
i__25924__auto___35232 = G__35234;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35230))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35230),args);
});})(g__35158__auto___35230))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35158__auto___35230){
return (function (seq35201){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35201));
});})(g__35158__auto___35230))
;


var g__35158__auto___35235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35158__auto___35235){
return (function cljs$spec$impl$gen$set(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35236 = arguments.length;
var i__25924__auto___35237 = (0);
while(true){
if((i__25924__auto___35237 < len__25923__auto___35236)){
args__25930__auto__.push((arguments[i__25924__auto___35237]));

var G__35238 = (i__25924__auto___35237 + (1));
i__25924__auto___35237 = G__35238;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35235))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35235),args);
});})(g__35158__auto___35235))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35158__auto___35235){
return (function (seq35203){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35203));
});})(g__35158__auto___35235))
;


var g__35158__auto___35239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35158__auto___35239){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35240 = arguments.length;
var i__25924__auto___35241 = (0);
while(true){
if((i__25924__auto___35241 < len__25923__auto___35240)){
args__25930__auto__.push((arguments[i__25924__auto___35241]));

var G__35242 = (i__25924__auto___35241 + (1));
i__25924__auto___35241 = G__35242;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35239))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35239),args);
});})(g__35158__auto___35239))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35158__auto___35239){
return (function (seq35204){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35204));
});})(g__35158__auto___35239))
;


var g__35158__auto___35243 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35158__auto___35243){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35244 = arguments.length;
var i__25924__auto___35245 = (0);
while(true){
if((i__25924__auto___35245 < len__25923__auto___35244)){
args__25930__auto__.push((arguments[i__25924__auto___35245]));

var G__35246 = (i__25924__auto___35245 + (1));
i__25924__auto___35245 = G__35246;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35243))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35243){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35243),args);
});})(g__35158__auto___35243))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35158__auto___35243){
return (function (seq35205){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35205));
});})(g__35158__auto___35243))
;


var g__35158__auto___35247 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35158__auto___35247){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35248 = arguments.length;
var i__25924__auto___35249 = (0);
while(true){
if((i__25924__auto___35249 < len__25923__auto___35248)){
args__25930__auto__.push((arguments[i__25924__auto___35249]));

var G__35250 = (i__25924__auto___35249 + (1));
i__25924__auto___35249 = G__35250;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35247))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35247){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35247),args);
});})(g__35158__auto___35247))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35158__auto___35247){
return (function (seq35206){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35206));
});})(g__35158__auto___35247))
;


var g__35158__auto___35251 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35158__auto___35251){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35253 = arguments.length;
var i__25924__auto___35254 = (0);
while(true){
if((i__25924__auto___35254 < len__25923__auto___35253)){
args__25930__auto__.push((arguments[i__25924__auto___35254]));

var G__35255 = (i__25924__auto___35254 + (1));
i__25924__auto___35254 = G__35255;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35251))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35251){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35251),args);
});})(g__35158__auto___35251))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35158__auto___35251){
return (function (seq35207){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35207));
});})(g__35158__auto___35251))
;


var g__35158__auto___35256 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35158__auto___35256){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35257 = arguments.length;
var i__25924__auto___35258 = (0);
while(true){
if((i__25924__auto___35258 < len__25923__auto___35257)){
args__25930__auto__.push((arguments[i__25924__auto___35258]));

var G__35259 = (i__25924__auto___35258 + (1));
i__25924__auto___35258 = G__35259;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35256))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35256){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35256),args);
});})(g__35158__auto___35256))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35158__auto___35256){
return (function (seq35208){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35208));
});})(g__35158__auto___35256))
;


var g__35158__auto___35260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35158__auto___35260){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35261 = arguments.length;
var i__25924__auto___35262 = (0);
while(true){
if((i__25924__auto___35262 < len__25923__auto___35261)){
args__25930__auto__.push((arguments[i__25924__auto___35262]));

var G__35263 = (i__25924__auto___35262 + (1));
i__25924__auto___35262 = G__35263;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35260))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35260){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35260),args);
});})(g__35158__auto___35260))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35158__auto___35260){
return (function (seq35209){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35209));
});})(g__35158__auto___35260))
;


var g__35158__auto___35264 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35158__auto___35264){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35265 = arguments.length;
var i__25924__auto___35266 = (0);
while(true){
if((i__25924__auto___35266 < len__25923__auto___35265)){
args__25930__auto__.push((arguments[i__25924__auto___35266]));

var G__35267 = (i__25924__auto___35266 + (1));
i__25924__auto___35266 = G__35267;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35264))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35264){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35264),args);
});})(g__35158__auto___35264))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35158__auto___35264){
return (function (seq35210){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35210));
});})(g__35158__auto___35264))
;


var g__35158__auto___35268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35158__auto___35268){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35269 = arguments.length;
var i__25924__auto___35270 = (0);
while(true){
if((i__25924__auto___35270 < len__25923__auto___35269)){
args__25930__auto__.push((arguments[i__25924__auto___35270]));

var G__35272 = (i__25924__auto___35270 + (1));
i__25924__auto___35270 = G__35272;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35268))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35268){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35268),args);
});})(g__35158__auto___35268))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35158__auto___35268){
return (function (seq35211){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35211));
});})(g__35158__auto___35268))
;


var g__35158__auto___35273 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35158__auto___35273){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35274 = arguments.length;
var i__25924__auto___35275 = (0);
while(true){
if((i__25924__auto___35275 < len__25923__auto___35274)){
args__25930__auto__.push((arguments[i__25924__auto___35275]));

var G__35276 = (i__25924__auto___35275 + (1));
i__25924__auto___35275 = G__35276;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35273))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35273){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35273),args);
});})(g__35158__auto___35273))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35158__auto___35273){
return (function (seq35212){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35212));
});})(g__35158__auto___35273))
;


var g__35158__auto___35277 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35158__auto___35277){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35278 = arguments.length;
var i__25924__auto___35279 = (0);
while(true){
if((i__25924__auto___35279 < len__25923__auto___35278)){
args__25930__auto__.push((arguments[i__25924__auto___35279]));

var G__35280 = (i__25924__auto___35279 + (1));
i__25924__auto___35279 = G__35280;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35277))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35277){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35277),args);
});})(g__35158__auto___35277))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35158__auto___35277){
return (function (seq35213){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35213));
});})(g__35158__auto___35277))
;


var g__35158__auto___35281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35158__auto___35281){
return (function cljs$spec$impl$gen$return(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35282 = arguments.length;
var i__25924__auto___35283 = (0);
while(true){
if((i__25924__auto___35283 < len__25923__auto___35282)){
args__25930__auto__.push((arguments[i__25924__auto___35283]));

var G__35284 = (i__25924__auto___35283 + (1));
i__25924__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35281))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35281){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35281),args);
});})(g__35158__auto___35281))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35158__auto___35281){
return (function (seq35215){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35215));
});})(g__35158__auto___35281))
;


var g__35158__auto___35285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35158__auto___35285){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35286 = arguments.length;
var i__25924__auto___35287 = (0);
while(true){
if((i__25924__auto___35287 < len__25923__auto___35286)){
args__25930__auto__.push((arguments[i__25924__auto___35287]));

var G__35288 = (i__25924__auto___35287 + (1));
i__25924__auto___35287 = G__35288;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35285))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35285){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35285),args);
});})(g__35158__auto___35285))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35158__auto___35285){
return (function (seq35216){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35216));
});})(g__35158__auto___35285))
;


var g__35158__auto___35289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__35158__auto___35289){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35290 = arguments.length;
var i__25924__auto___35291 = (0);
while(true){
if((i__25924__auto___35291 < len__25923__auto___35290)){
args__25930__auto__.push((arguments[i__25924__auto___35291]));

var G__35292 = (i__25924__auto___35291 + (1));
i__25924__auto___35291 = G__35292;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35158__auto___35289))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35158__auto___35289){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35158__auto___35289),args);
});})(g__35158__auto___35289))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__35158__auto___35289){
return (function (seq35217){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35217));
});})(g__35158__auto___35289))
;

var g__35171__auto___35314 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35171__auto___35314){
return (function cljs$spec$impl$gen$any(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35315 = arguments.length;
var i__25924__auto___35316 = (0);
while(true){
if((i__25924__auto___35316 < len__25923__auto___35315)){
args__25930__auto__.push((arguments[i__25924__auto___35316]));

var G__35317 = (i__25924__auto___35316 + (1));
i__25924__auto___35316 = G__35317;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35314))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35314){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35314);
});})(g__35171__auto___35314))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35171__auto___35314){
return (function (seq35293){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35293));
});})(g__35171__auto___35314))
;


var g__35171__auto___35318 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35171__auto___35318){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35319 = arguments.length;
var i__25924__auto___35320 = (0);
while(true){
if((i__25924__auto___35320 < len__25923__auto___35319)){
args__25930__auto__.push((arguments[i__25924__auto___35320]));

var G__35321 = (i__25924__auto___35320 + (1));
i__25924__auto___35320 = G__35321;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35318))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35318){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35318);
});})(g__35171__auto___35318))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35171__auto___35318){
return (function (seq35294){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35294));
});})(g__35171__auto___35318))
;


var g__35171__auto___35322 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35171__auto___35322){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35323 = arguments.length;
var i__25924__auto___35324 = (0);
while(true){
if((i__25924__auto___35324 < len__25923__auto___35323)){
args__25930__auto__.push((arguments[i__25924__auto___35324]));

var G__35325 = (i__25924__auto___35324 + (1));
i__25924__auto___35324 = G__35325;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35322))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35322){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35322);
});})(g__35171__auto___35322))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35171__auto___35322){
return (function (seq35295){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35295));
});})(g__35171__auto___35322))
;


var g__35171__auto___35326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35171__auto___35326){
return (function cljs$spec$impl$gen$char(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35327 = arguments.length;
var i__25924__auto___35328 = (0);
while(true){
if((i__25924__auto___35328 < len__25923__auto___35327)){
args__25930__auto__.push((arguments[i__25924__auto___35328]));

var G__35329 = (i__25924__auto___35328 + (1));
i__25924__auto___35328 = G__35329;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35326))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35326){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35326);
});})(g__35171__auto___35326))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35171__auto___35326){
return (function (seq35296){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35296));
});})(g__35171__auto___35326))
;


var g__35171__auto___35330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35171__auto___35330){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35331 = arguments.length;
var i__25924__auto___35332 = (0);
while(true){
if((i__25924__auto___35332 < len__25923__auto___35331)){
args__25930__auto__.push((arguments[i__25924__auto___35332]));

var G__35333 = (i__25924__auto___35332 + (1));
i__25924__auto___35332 = G__35333;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35330))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35330){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35330);
});})(g__35171__auto___35330))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35171__auto___35330){
return (function (seq35297){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35297));
});})(g__35171__auto___35330))
;


var g__35171__auto___35334 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35171__auto___35334){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35335 = arguments.length;
var i__25924__auto___35336 = (0);
while(true){
if((i__25924__auto___35336 < len__25923__auto___35335)){
args__25930__auto__.push((arguments[i__25924__auto___35336]));

var G__35337 = (i__25924__auto___35336 + (1));
i__25924__auto___35336 = G__35337;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35334))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35334){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35334);
});})(g__35171__auto___35334))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35171__auto___35334){
return (function (seq35298){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35298));
});})(g__35171__auto___35334))
;


var g__35171__auto___35338 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35171__auto___35338){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35339 = arguments.length;
var i__25924__auto___35340 = (0);
while(true){
if((i__25924__auto___35340 < len__25923__auto___35339)){
args__25930__auto__.push((arguments[i__25924__auto___35340]));

var G__35341 = (i__25924__auto___35340 + (1));
i__25924__auto___35340 = G__35341;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35338))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35338){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35338);
});})(g__35171__auto___35338))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35171__auto___35338){
return (function (seq35299){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35299));
});})(g__35171__auto___35338))
;


var g__35171__auto___35342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35171__auto___35342){
return (function cljs$spec$impl$gen$double(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35343 = arguments.length;
var i__25924__auto___35344 = (0);
while(true){
if((i__25924__auto___35344 < len__25923__auto___35343)){
args__25930__auto__.push((arguments[i__25924__auto___35344]));

var G__35345 = (i__25924__auto___35344 + (1));
i__25924__auto___35344 = G__35345;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35342))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35342){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35342);
});})(g__35171__auto___35342))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35171__auto___35342){
return (function (seq35300){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35300));
});})(g__35171__auto___35342))
;


var g__35171__auto___35346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35171__auto___35346){
return (function cljs$spec$impl$gen$int(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35347 = arguments.length;
var i__25924__auto___35348 = (0);
while(true){
if((i__25924__auto___35348 < len__25923__auto___35347)){
args__25930__auto__.push((arguments[i__25924__auto___35348]));

var G__35349 = (i__25924__auto___35348 + (1));
i__25924__auto___35348 = G__35349;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35346))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35346){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35346);
});})(g__35171__auto___35346))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35171__auto___35346){
return (function (seq35301){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35301));
});})(g__35171__auto___35346))
;


var g__35171__auto___35350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35171__auto___35350){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35351 = arguments.length;
var i__25924__auto___35352 = (0);
while(true){
if((i__25924__auto___35352 < len__25923__auto___35351)){
args__25930__auto__.push((arguments[i__25924__auto___35352]));

var G__35353 = (i__25924__auto___35352 + (1));
i__25924__auto___35352 = G__35353;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35350))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35350){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35350);
});})(g__35171__auto___35350))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35171__auto___35350){
return (function (seq35302){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35302));
});})(g__35171__auto___35350))
;


var g__35171__auto___35354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35171__auto___35354){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35355 = arguments.length;
var i__25924__auto___35356 = (0);
while(true){
if((i__25924__auto___35356 < len__25923__auto___35355)){
args__25930__auto__.push((arguments[i__25924__auto___35356]));

var G__35357 = (i__25924__auto___35356 + (1));
i__25924__auto___35356 = G__35357;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35354))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35354){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35354);
});})(g__35171__auto___35354))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35171__auto___35354){
return (function (seq35303){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35303));
});})(g__35171__auto___35354))
;


var g__35171__auto___35358 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35171__auto___35358){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35359 = arguments.length;
var i__25924__auto___35360 = (0);
while(true){
if((i__25924__auto___35360 < len__25923__auto___35359)){
args__25930__auto__.push((arguments[i__25924__auto___35360]));

var G__35361 = (i__25924__auto___35360 + (1));
i__25924__auto___35360 = G__35361;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35358))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35358){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35358);
});})(g__35171__auto___35358))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35171__auto___35358){
return (function (seq35304){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35304));
});})(g__35171__auto___35358))
;


var g__35171__auto___35362 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35171__auto___35362){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35363 = arguments.length;
var i__25924__auto___35364 = (0);
while(true){
if((i__25924__auto___35364 < len__25923__auto___35363)){
args__25930__auto__.push((arguments[i__25924__auto___35364]));

var G__35365 = (i__25924__auto___35364 + (1));
i__25924__auto___35364 = G__35365;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35362))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35362){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35362);
});})(g__35171__auto___35362))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35171__auto___35362){
return (function (seq35305){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35305));
});})(g__35171__auto___35362))
;


var g__35171__auto___35366 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35171__auto___35366){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35367 = arguments.length;
var i__25924__auto___35368 = (0);
while(true){
if((i__25924__auto___35368 < len__25923__auto___35367)){
args__25930__auto__.push((arguments[i__25924__auto___35368]));

var G__35369 = (i__25924__auto___35368 + (1));
i__25924__auto___35368 = G__35369;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35366))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35366){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35366);
});})(g__35171__auto___35366))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35171__auto___35366){
return (function (seq35306){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35306));
});})(g__35171__auto___35366))
;


var g__35171__auto___35370 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35171__auto___35370){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35371 = arguments.length;
var i__25924__auto___35372 = (0);
while(true){
if((i__25924__auto___35372 < len__25923__auto___35371)){
args__25930__auto__.push((arguments[i__25924__auto___35372]));

var G__35373 = (i__25924__auto___35372 + (1));
i__25924__auto___35372 = G__35373;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35370))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35370){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35370);
});})(g__35171__auto___35370))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35171__auto___35370){
return (function (seq35307){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35307));
});})(g__35171__auto___35370))
;


var g__35171__auto___35374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35171__auto___35374){
return (function cljs$spec$impl$gen$string(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35375 = arguments.length;
var i__25924__auto___35376 = (0);
while(true){
if((i__25924__auto___35376 < len__25923__auto___35375)){
args__25930__auto__.push((arguments[i__25924__auto___35376]));

var G__35377 = (i__25924__auto___35376 + (1));
i__25924__auto___35376 = G__35377;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35374))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35374){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35374);
});})(g__35171__auto___35374))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35171__auto___35374){
return (function (seq35308){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35308));
});})(g__35171__auto___35374))
;


var g__35171__auto___35378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35171__auto___35378){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35379 = arguments.length;
var i__25924__auto___35380 = (0);
while(true){
if((i__25924__auto___35380 < len__25923__auto___35379)){
args__25930__auto__.push((arguments[i__25924__auto___35380]));

var G__35381 = (i__25924__auto___35380 + (1));
i__25924__auto___35380 = G__35381;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35378))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35378){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35378);
});})(g__35171__auto___35378))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35171__auto___35378){
return (function (seq35309){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35309));
});})(g__35171__auto___35378))
;


var g__35171__auto___35382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35171__auto___35382){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35383 = arguments.length;
var i__25924__auto___35384 = (0);
while(true){
if((i__25924__auto___35384 < len__25923__auto___35383)){
args__25930__auto__.push((arguments[i__25924__auto___35384]));

var G__35385 = (i__25924__auto___35384 + (1));
i__25924__auto___35384 = G__35385;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35382))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35382){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35382);
});})(g__35171__auto___35382))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35171__auto___35382){
return (function (seq35310){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35310));
});})(g__35171__auto___35382))
;


var g__35171__auto___35386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35171__auto___35386){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35387 = arguments.length;
var i__25924__auto___35388 = (0);
while(true){
if((i__25924__auto___35388 < len__25923__auto___35387)){
args__25930__auto__.push((arguments[i__25924__auto___35388]));

var G__35389 = (i__25924__auto___35388 + (1));
i__25924__auto___35388 = G__35389;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35386))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35386){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35386);
});})(g__35171__auto___35386))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35171__auto___35386){
return (function (seq35311){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35311));
});})(g__35171__auto___35386))
;


var g__35171__auto___35390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35171__auto___35390){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35391 = arguments.length;
var i__25924__auto___35392 = (0);
while(true){
if((i__25924__auto___35392 < len__25923__auto___35391)){
args__25930__auto__.push((arguments[i__25924__auto___35392]));

var G__35393 = (i__25924__auto___35392 + (1));
i__25924__auto___35392 = G__35393;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35390))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35390){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35390);
});})(g__35171__auto___35390))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35171__auto___35390){
return (function (seq35312){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35312));
});})(g__35171__auto___35390))
;


var g__35171__auto___35394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35171__auto___35394){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35395 = arguments.length;
var i__25924__auto___35396 = (0);
while(true){
if((i__25924__auto___35396 < len__25923__auto___35395)){
args__25930__auto__.push((arguments[i__25924__auto___35396]));

var G__35397 = (i__25924__auto___35396 + (1));
i__25924__auto___35396 = G__35397;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});})(g__35171__auto___35394))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35171__auto___35394){
return (function (args){
return cljs.core.deref.call(null,g__35171__auto___35394);
});})(g__35171__auto___35394))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35171__auto___35394){
return (function (seq35313){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35313));
});})(g__35171__auto___35394))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25930__auto__ = [];
var len__25923__auto___35400 = arguments.length;
var i__25924__auto___35401 = (0);
while(true){
if((i__25924__auto___35401 < len__25923__auto___35400)){
args__25930__auto__.push((arguments[i__25924__auto___35401]));

var G__35402 = (i__25924__auto___35401 + (1));
i__25924__auto___35401 = G__35402;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35398_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35398_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35399){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35399));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35403_SHARP_){
return (new Date(p1__35403_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1658328682972