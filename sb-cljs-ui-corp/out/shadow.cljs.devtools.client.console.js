var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var stories=$CLJS.stories || ($CLJS.stories = {});

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.console.js");

goog.provide('shadow.cljs.devtools.client.console');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__9769 = cljs.core.seq(item);
var chunk__9770 = null;
var count__9771 = (0);
var i__9772 = (0);
while(true){
if((i__9772 < count__9771)){
var it = chunk__9770.cljs$core$IIndexed$_nth$arity$2(null,i__9772);
arr.push(it);


var G__9812 = seq__9769;
var G__9813 = chunk__9770;
var G__9814 = count__9771;
var G__9815 = (i__9772 + (1));
seq__9769 = G__9812;
chunk__9770 = G__9813;
count__9771 = G__9814;
i__9772 = G__9815;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__9769);
if(temp__5804__auto__){
var seq__9769__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9769__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__9769__$1);
var G__9816 = cljs.core.chunk_rest(seq__9769__$1);
var G__9817 = c__5568__auto__;
var G__9818 = cljs.core.count(c__5568__auto__);
var G__9819 = (0);
seq__9769 = G__9816;
chunk__9770 = G__9817;
count__9771 = G__9818;
i__9772 = G__9819;
continue;
} else {
var it = cljs.core.first(seq__9769__$1);
arr.push(it);


var G__9820 = cljs.core.next(seq__9769__$1);
var G__9821 = null;
var G__9822 = (0);
var G__9823 = (0);
seq__9769 = G__9820;
chunk__9770 = G__9821;
count__9771 = G__9822;
i__9772 = G__9823;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9777){
var vec__9780 = p__9777;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9780,(1),null);
return [cljs.core.name(k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__9786 = struct;
var seq__9787 = cljs.core.seq(vec__9786);
var first__9788 = cljs.core.first(seq__9787);
var seq__9787__$1 = cljs.core.next(seq__9787);
var tag = first__9788;
var first__9788__$1 = cljs.core.first(seq__9787__$1);
var seq__9787__$2 = cljs.core.next(seq__9787__$1);
var attrs = first__9788__$1;
var children = seq__9787__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__9789_9824 = cljs.core.seq(children);
var chunk__9790_9825 = null;
var count__9791_9826 = (0);
var i__9792_9827 = (0);
while(true){
if((i__9792_9827 < count__9791_9826)){
var child_9828 = chunk__9790_9825.cljs$core$IIndexed$_nth$arity$2(null,i__9792_9827);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_9828) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_9828)));


var G__9829 = seq__9789_9824;
var G__9830 = chunk__9790_9825;
var G__9831 = count__9791_9826;
var G__9832 = (i__9792_9827 + (1));
seq__9789_9824 = G__9829;
chunk__9790_9825 = G__9830;
count__9791_9826 = G__9831;
i__9792_9827 = G__9832;
continue;
} else {
var temp__5804__auto___9833 = cljs.core.seq(seq__9789_9824);
if(temp__5804__auto___9833){
var seq__9789_9834__$1 = temp__5804__auto___9833;
if(cljs.core.chunked_seq_QMARK_(seq__9789_9834__$1)){
var c__5568__auto___9835 = cljs.core.chunk_first(seq__9789_9834__$1);
var G__9836 = cljs.core.chunk_rest(seq__9789_9834__$1);
var G__9837 = c__5568__auto___9835;
var G__9838 = cljs.core.count(c__5568__auto___9835);
var G__9839 = (0);
seq__9789_9824 = G__9836;
chunk__9790_9825 = G__9837;
count__9791_9826 = G__9838;
i__9792_9827 = G__9839;
continue;
} else {
var child_9840 = cljs.core.first(seq__9789_9834__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_9840) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_9840)));


var G__9841 = cljs.core.next(seq__9789_9834__$1);
var G__9842 = null;
var G__9843 = (0);
var G__9844 = (0);
seq__9789_9824 = G__9841;
chunk__9790_9825 = G__9842;
count__9791_9826 = G__9843;
i__9792_9827 = G__9844;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$console$iter__9801(s__9802){
return (new cljs.core.LazySeq(null,(function (){
var s__9802__$1 = s__9802;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__9802__$1);
if(temp__5804__auto__){
var s__9802__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9802__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__9802__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__9804 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__9803 = (0);
while(true){
if((i__9803 < size__5522__auto__)){
var value = cljs.core._nth(c__5521__auto__,i__9803);
cljs.core.chunk_append(b__9804,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__9845 = (i__9803 + (1));
i__9803 = G__9845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9804),shadow$cljs$devtools$client$console$iter__9801(cljs.core.chunk_rest(s__9802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9804),null);
}
} else {
var value = cljs.core.first(s__9802__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__9801(cljs.core.rest(s__9802__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(s);
})()], null));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter");

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
(shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$console$iter__9805(s__9806){
return (new cljs.core.LazySeq(null,(function (){
var s__9806__$1 = s__9806;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__9806__$1);
if(temp__5804__auto__){
var s__9806__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9806__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__9806__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__9808 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__9807 = (0);
while(true){
if((i__9807 < size__5522__auto__)){
var key = cljs.core._nth(c__5521__auto__,i__9807);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__9808,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__9846 = (i__9807 + (1));
i__9807 = G__9846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9808),shadow$cljs$devtools$client$console$iter__9805(cljs.core.chunk_rest(s__9806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9808),null);
}
} else {
var key = cljs.core.first(s__9806__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__9805(cljs.core.rest(s__9806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e9809){var e = e9809;
return k;
}})());
})()], null));
}));

(shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter");

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter");

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter");

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
(shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
}));

(shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter");

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5804__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var G__9810 = f;
G__9810.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__9810.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__9810.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__9810.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__9810.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__9810;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__9811_SHARP_){
return goog.object.get(p1__9811_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();
Object.defineProperty(module.exports, "SymbolFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.SymbolFormatter; } });
Object.defineProperty(module.exports, "KeywordFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.KeywordFormatter; } });
Object.defineProperty(module.exports, "__GT_SeqFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_SeqFormatter; } });
Object.defineProperty(module.exports, "clj__GT_jsonml", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.clj__GT_jsonml; } });
Object.defineProperty(module.exports, "keyword_style", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.keyword_style; } });
Object.defineProperty(module.exports, "__GT_SymbolFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_SymbolFormatter; } });
Object.defineProperty(module.exports, "push_all", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.push_all; } });
Object.defineProperty(module.exports, "map__GT_style", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.map__GT_style; } });
Object.defineProperty(module.exports, "object_ref", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.object_ref; } });
Object.defineProperty(module.exports, "DerefFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.DerefFormatter; } });
Object.defineProperty(module.exports, "remove_all_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.remove_all_BANG_; } });
Object.defineProperty(module.exports, "MapFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.MapFormatter; } });
Object.defineProperty(module.exports, "SeqFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.SeqFormatter; } });
Object.defineProperty(module.exports, "__GT_KeywordFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_KeywordFormatter; } });
Object.defineProperty(module.exports, "install_all_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.install_all_BANG_; } });
Object.defineProperty(module.exports, "__GT_MapFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_MapFormatter; } });
Object.defineProperty(module.exports, "__GT_DerefFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_DerefFormatter; } });
//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
