// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__32243__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32240 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32241 = cljs.core.seq.call(null,vec__32240);
var first__32242 = cljs.core.first.call(null,seq__32241);
var seq__32241__$1 = cljs.core.next.call(null,seq__32241);
var tag = first__32242;
var body = seq__32241__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32244__i = 0, G__32244__a = new Array(arguments.length -  0);
while (G__32244__i < G__32244__a.length) {G__32244__a[G__32244__i] = arguments[G__32244__i + 0]; ++G__32244__i;}
  args = new cljs.core.IndexedSeq(G__32244__a,0);
} 
return G__32243__delegate.call(this,args);};
G__32243.cljs$lang$maxFixedArity = 0;
G__32243.cljs$lang$applyTo = (function (arglist__32245){
var args = cljs.core.seq(arglist__32245);
return G__32243__delegate(args);
});
G__32243.cljs$core$IFn$_invoke$arity$variadic = G__32243__delegate;
return G__32243;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25628__auto__ = (function sablono$core$update_arglists_$_iter__32250(s__32251){
return (new cljs.core.LazySeq(null,(function (){
var s__32251__$1 = s__32251;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32251__$1);
if(temp__4657__auto__){
var s__32251__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32251__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32251__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32253 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32252 = (0);
while(true){
if((i__32252 < size__25627__auto__)){
var args = cljs.core._nth.call(null,c__25626__auto__,i__32252);
cljs.core.chunk_append.call(null,b__32253,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32254 = (i__32252 + (1));
i__32252 = G__32254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32253),sablono$core$update_arglists_$_iter__32250.call(null,cljs.core.chunk_rest.call(null,s__32251__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32253),null);
}
} else {
var args = cljs.core.first.call(null,s__32251__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32250.call(null,cljs.core.rest.call(null,s__32251__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32260 = arguments.length;
var i__25924__auto___32261 = (0);
while(true){
if((i__25924__auto___32261 < len__25923__auto___32260)){
args__25930__auto__.push((arguments[i__25924__auto___32261]));

var G__32262 = (i__25924__auto___32261 + (1));
i__25924__auto___32261 = G__32262;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25628__auto__ = (function sablono$core$iter__32256(s__32257){
return (new cljs.core.LazySeq(null,(function (){
var s__32257__$1 = s__32257;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32257__$1);
if(temp__4657__auto__){
var s__32257__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32257__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32257__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32259 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32258 = (0);
while(true){
if((i__32258 < size__25627__auto__)){
var style = cljs.core._nth.call(null,c__25626__auto__,i__32258);
cljs.core.chunk_append.call(null,b__32259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32263 = (i__32258 + (1));
i__32258 = G__32263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32259),sablono$core$iter__32256.call(null,cljs.core.chunk_rest.call(null,s__32257__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32259),null);
}
} else {
var style = cljs.core.first.call(null,s__32257__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32256.call(null,cljs.core.rest.call(null,s__32257__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq32255){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32255));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to32264 = (function sablono$core$link_to32264(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32267 = arguments.length;
var i__25924__auto___32268 = (0);
while(true){
if((i__25924__auto___32268 < len__25923__auto___32267)){
args__25930__auto__.push((arguments[i__25924__auto___32268]));

var G__32269 = (i__25924__auto___32268 + (1));
i__25924__auto___32268 = G__32269;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32264.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.link_to32264.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32264.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32264.cljs$lang$applyTo = (function (seq32265){
var G__32266 = cljs.core.first.call(null,seq32265);
var seq32265__$1 = cljs.core.next.call(null,seq32265);
return sablono.core.link_to32264.cljs$core$IFn$_invoke$arity$variadic(G__32266,seq32265__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32264);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32270 = (function sablono$core$mail_to32270(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32277 = arguments.length;
var i__25924__auto___32278 = (0);
while(true){
if((i__25924__auto___32278 < len__25923__auto___32277)){
args__25930__auto__.push((arguments[i__25924__auto___32278]));

var G__32279 = (i__25924__auto___32278 + (1));
i__25924__auto___32278 = G__32279;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32270.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.mail_to32270.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32273){
var vec__32274 = p__32273;
var content = cljs.core.nth.call(null,vec__32274,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24848__auto__ = content;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32270.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32270.cljs$lang$applyTo = (function (seq32271){
var G__32272 = cljs.core.first.call(null,seq32271);
var seq32271__$1 = cljs.core.next.call(null,seq32271);
return sablono.core.mail_to32270.cljs$core$IFn$_invoke$arity$variadic(G__32272,seq32271__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32270);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32280 = (function sablono$core$unordered_list32280(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25628__auto__ = (function sablono$core$unordered_list32280_$_iter__32285(s__32286){
return (new cljs.core.LazySeq(null,(function (){
var s__32286__$1 = s__32286;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32286__$1);
if(temp__4657__auto__){
var s__32286__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32286__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32286__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32288 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32287 = (0);
while(true){
if((i__32287 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32287);
cljs.core.chunk_append.call(null,b__32288,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32289 = (i__32287 + (1));
i__32287 = G__32289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32288),sablono$core$unordered_list32280_$_iter__32285.call(null,cljs.core.chunk_rest.call(null,s__32286__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32288),null);
}
} else {
var x = cljs.core.first.call(null,s__32286__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32280_$_iter__32285.call(null,cljs.core.rest.call(null,s__32286__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32280);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32290 = (function sablono$core$ordered_list32290(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25628__auto__ = (function sablono$core$ordered_list32290_$_iter__32295(s__32296){
return (new cljs.core.LazySeq(null,(function (){
var s__32296__$1 = s__32296;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32296__$1);
if(temp__4657__auto__){
var s__32296__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32296__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32296__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32298 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32297 = (0);
while(true){
if((i__32297 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32297);
cljs.core.chunk_append.call(null,b__32298,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32299 = (i__32297 + (1));
i__32297 = G__32299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32298),sablono$core$ordered_list32290_$_iter__32295.call(null,cljs.core.chunk_rest.call(null,s__32296__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32298),null);
}
} else {
var x = cljs.core.first.call(null,s__32296__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32290_$_iter__32295.call(null,cljs.core.rest.call(null,s__32296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32290);
/**
 * Create an image element.
 */
sablono.core.image32300 = (function sablono$core$image32300(var_args){
var args32301 = [];
var len__25923__auto___32304 = arguments.length;
var i__25924__auto___32305 = (0);
while(true){
if((i__25924__auto___32305 < len__25923__auto___32304)){
args32301.push((arguments[i__25924__auto___32305]));

var G__32306 = (i__25924__auto___32305 + (1));
i__25924__auto___32305 = G__32306;
continue;
} else {
}
break;
}

var G__32303 = args32301.length;
switch (G__32303) {
case 1:
return sablono.core.image32300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32301.length)].join('')));

}
});

sablono.core.image32300.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32300.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32300.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32300);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32308_SHARP_,p2__32309_SHARP_){
return [cljs.core.str(p1__32308_SHARP_),cljs.core.str("["),cljs.core.str(p2__32309_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32310_SHARP_,p2__32311_SHARP_){
return [cljs.core.str(p1__32310_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32311_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field32312 = (function sablono$core$color_field32312(var_args){
var args32313 = [];
var len__25923__auto___32380 = arguments.length;
var i__25924__auto___32381 = (0);
while(true){
if((i__25924__auto___32381 < len__25923__auto___32380)){
args32313.push((arguments[i__25924__auto___32381]));

var G__32382 = (i__25924__auto___32381 + (1));
i__25924__auto___32381 = G__32382;
continue;
} else {
}
break;
}

var G__32315 = args32313.length;
switch (G__32315) {
case 1:
return sablono.core.color_field32312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32313.length)].join('')));

}
});

sablono.core.color_field32312.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.color_field32312.call(null,name__32227__auto__,null);
});

sablono.core.color_field32312.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.color_field32312.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32312);

/**
 * Creates a date input field.
 */
sablono.core.date_field32316 = (function sablono$core$date_field32316(var_args){
var args32317 = [];
var len__25923__auto___32384 = arguments.length;
var i__25924__auto___32385 = (0);
while(true){
if((i__25924__auto___32385 < len__25923__auto___32384)){
args32317.push((arguments[i__25924__auto___32385]));

var G__32386 = (i__25924__auto___32385 + (1));
i__25924__auto___32385 = G__32386;
continue;
} else {
}
break;
}

var G__32319 = args32317.length;
switch (G__32319) {
case 1:
return sablono.core.date_field32316.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32316.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32317.length)].join('')));

}
});

sablono.core.date_field32316.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.date_field32316.call(null,name__32227__auto__,null);
});

sablono.core.date_field32316.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.date_field32316.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32316);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32320 = (function sablono$core$datetime_field32320(var_args){
var args32321 = [];
var len__25923__auto___32388 = arguments.length;
var i__25924__auto___32389 = (0);
while(true){
if((i__25924__auto___32389 < len__25923__auto___32388)){
args32321.push((arguments[i__25924__auto___32389]));

var G__32390 = (i__25924__auto___32389 + (1));
i__25924__auto___32389 = G__32390;
continue;
} else {
}
break;
}

var G__32323 = args32321.length;
switch (G__32323) {
case 1:
return sablono.core.datetime_field32320.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32320.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32321.length)].join('')));

}
});

sablono.core.datetime_field32320.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.datetime_field32320.call(null,name__32227__auto__,null);
});

sablono.core.datetime_field32320.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.datetime_field32320.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32320);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32324 = (function sablono$core$datetime_local_field32324(var_args){
var args32325 = [];
var len__25923__auto___32392 = arguments.length;
var i__25924__auto___32393 = (0);
while(true){
if((i__25924__auto___32393 < len__25923__auto___32392)){
args32325.push((arguments[i__25924__auto___32393]));

var G__32394 = (i__25924__auto___32393 + (1));
i__25924__auto___32393 = G__32394;
continue;
} else {
}
break;
}

var G__32327 = args32325.length;
switch (G__32327) {
case 1:
return sablono.core.datetime_local_field32324.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32324.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32325.length)].join('')));

}
});

sablono.core.datetime_local_field32324.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.datetime_local_field32324.call(null,name__32227__auto__,null);
});

sablono.core.datetime_local_field32324.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.datetime_local_field32324.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32324);

/**
 * Creates a email input field.
 */
sablono.core.email_field32328 = (function sablono$core$email_field32328(var_args){
var args32329 = [];
var len__25923__auto___32396 = arguments.length;
var i__25924__auto___32397 = (0);
while(true){
if((i__25924__auto___32397 < len__25923__auto___32396)){
args32329.push((arguments[i__25924__auto___32397]));

var G__32398 = (i__25924__auto___32397 + (1));
i__25924__auto___32397 = G__32398;
continue;
} else {
}
break;
}

var G__32331 = args32329.length;
switch (G__32331) {
case 1:
return sablono.core.email_field32328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32329.length)].join('')));

}
});

sablono.core.email_field32328.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.email_field32328.call(null,name__32227__auto__,null);
});

sablono.core.email_field32328.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.email_field32328.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32328);

/**
 * Creates a file input field.
 */
sablono.core.file_field32332 = (function sablono$core$file_field32332(var_args){
var args32333 = [];
var len__25923__auto___32400 = arguments.length;
var i__25924__auto___32401 = (0);
while(true){
if((i__25924__auto___32401 < len__25923__auto___32400)){
args32333.push((arguments[i__25924__auto___32401]));

var G__32402 = (i__25924__auto___32401 + (1));
i__25924__auto___32401 = G__32402;
continue;
} else {
}
break;
}

var G__32335 = args32333.length;
switch (G__32335) {
case 1:
return sablono.core.file_field32332.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32332.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32333.length)].join('')));

}
});

sablono.core.file_field32332.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.file_field32332.call(null,name__32227__auto__,null);
});

sablono.core.file_field32332.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.file_field32332.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32332);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32336 = (function sablono$core$hidden_field32336(var_args){
var args32337 = [];
var len__25923__auto___32404 = arguments.length;
var i__25924__auto___32405 = (0);
while(true){
if((i__25924__auto___32405 < len__25923__auto___32404)){
args32337.push((arguments[i__25924__auto___32405]));

var G__32406 = (i__25924__auto___32405 + (1));
i__25924__auto___32405 = G__32406;
continue;
} else {
}
break;
}

var G__32339 = args32337.length;
switch (G__32339) {
case 1:
return sablono.core.hidden_field32336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32337.length)].join('')));

}
});

sablono.core.hidden_field32336.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.hidden_field32336.call(null,name__32227__auto__,null);
});

sablono.core.hidden_field32336.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.hidden_field32336.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32336);

/**
 * Creates a month input field.
 */
sablono.core.month_field32340 = (function sablono$core$month_field32340(var_args){
var args32341 = [];
var len__25923__auto___32408 = arguments.length;
var i__25924__auto___32409 = (0);
while(true){
if((i__25924__auto___32409 < len__25923__auto___32408)){
args32341.push((arguments[i__25924__auto___32409]));

var G__32410 = (i__25924__auto___32409 + (1));
i__25924__auto___32409 = G__32410;
continue;
} else {
}
break;
}

var G__32343 = args32341.length;
switch (G__32343) {
case 1:
return sablono.core.month_field32340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32341.length)].join('')));

}
});

sablono.core.month_field32340.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.month_field32340.call(null,name__32227__auto__,null);
});

sablono.core.month_field32340.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.month_field32340.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32340);

/**
 * Creates a number input field.
 */
sablono.core.number_field32344 = (function sablono$core$number_field32344(var_args){
var args32345 = [];
var len__25923__auto___32412 = arguments.length;
var i__25924__auto___32413 = (0);
while(true){
if((i__25924__auto___32413 < len__25923__auto___32412)){
args32345.push((arguments[i__25924__auto___32413]));

var G__32414 = (i__25924__auto___32413 + (1));
i__25924__auto___32413 = G__32414;
continue;
} else {
}
break;
}

var G__32347 = args32345.length;
switch (G__32347) {
case 1:
return sablono.core.number_field32344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32345.length)].join('')));

}
});

sablono.core.number_field32344.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.number_field32344.call(null,name__32227__auto__,null);
});

sablono.core.number_field32344.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.number_field32344.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32344);

/**
 * Creates a password input field.
 */
sablono.core.password_field32348 = (function sablono$core$password_field32348(var_args){
var args32349 = [];
var len__25923__auto___32416 = arguments.length;
var i__25924__auto___32417 = (0);
while(true){
if((i__25924__auto___32417 < len__25923__auto___32416)){
args32349.push((arguments[i__25924__auto___32417]));

var G__32418 = (i__25924__auto___32417 + (1));
i__25924__auto___32417 = G__32418;
continue;
} else {
}
break;
}

var G__32351 = args32349.length;
switch (G__32351) {
case 1:
return sablono.core.password_field32348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32349.length)].join('')));

}
});

sablono.core.password_field32348.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.password_field32348.call(null,name__32227__auto__,null);
});

sablono.core.password_field32348.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.password_field32348.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32348);

/**
 * Creates a range input field.
 */
sablono.core.range_field32352 = (function sablono$core$range_field32352(var_args){
var args32353 = [];
var len__25923__auto___32420 = arguments.length;
var i__25924__auto___32421 = (0);
while(true){
if((i__25924__auto___32421 < len__25923__auto___32420)){
args32353.push((arguments[i__25924__auto___32421]));

var G__32422 = (i__25924__auto___32421 + (1));
i__25924__auto___32421 = G__32422;
continue;
} else {
}
break;
}

var G__32355 = args32353.length;
switch (G__32355) {
case 1:
return sablono.core.range_field32352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32353.length)].join('')));

}
});

sablono.core.range_field32352.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.range_field32352.call(null,name__32227__auto__,null);
});

sablono.core.range_field32352.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.range_field32352.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32352);

/**
 * Creates a search input field.
 */
sablono.core.search_field32356 = (function sablono$core$search_field32356(var_args){
var args32357 = [];
var len__25923__auto___32424 = arguments.length;
var i__25924__auto___32425 = (0);
while(true){
if((i__25924__auto___32425 < len__25923__auto___32424)){
args32357.push((arguments[i__25924__auto___32425]));

var G__32426 = (i__25924__auto___32425 + (1));
i__25924__auto___32425 = G__32426;
continue;
} else {
}
break;
}

var G__32359 = args32357.length;
switch (G__32359) {
case 1:
return sablono.core.search_field32356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32357.length)].join('')));

}
});

sablono.core.search_field32356.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.search_field32356.call(null,name__32227__auto__,null);
});

sablono.core.search_field32356.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.search_field32356.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32356);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32360 = (function sablono$core$tel_field32360(var_args){
var args32361 = [];
var len__25923__auto___32428 = arguments.length;
var i__25924__auto___32429 = (0);
while(true){
if((i__25924__auto___32429 < len__25923__auto___32428)){
args32361.push((arguments[i__25924__auto___32429]));

var G__32430 = (i__25924__auto___32429 + (1));
i__25924__auto___32429 = G__32430;
continue;
} else {
}
break;
}

var G__32363 = args32361.length;
switch (G__32363) {
case 1:
return sablono.core.tel_field32360.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32360.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32361.length)].join('')));

}
});

sablono.core.tel_field32360.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.tel_field32360.call(null,name__32227__auto__,null);
});

sablono.core.tel_field32360.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.tel_field32360.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32360);

/**
 * Creates a text input field.
 */
sablono.core.text_field32364 = (function sablono$core$text_field32364(var_args){
var args32365 = [];
var len__25923__auto___32432 = arguments.length;
var i__25924__auto___32433 = (0);
while(true){
if((i__25924__auto___32433 < len__25923__auto___32432)){
args32365.push((arguments[i__25924__auto___32433]));

var G__32434 = (i__25924__auto___32433 + (1));
i__25924__auto___32433 = G__32434;
continue;
} else {
}
break;
}

var G__32367 = args32365.length;
switch (G__32367) {
case 1:
return sablono.core.text_field32364.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32364.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32365.length)].join('')));

}
});

sablono.core.text_field32364.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.text_field32364.call(null,name__32227__auto__,null);
});

sablono.core.text_field32364.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.text_field32364.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32364);

/**
 * Creates a time input field.
 */
sablono.core.time_field32368 = (function sablono$core$time_field32368(var_args){
var args32369 = [];
var len__25923__auto___32436 = arguments.length;
var i__25924__auto___32437 = (0);
while(true){
if((i__25924__auto___32437 < len__25923__auto___32436)){
args32369.push((arguments[i__25924__auto___32437]));

var G__32438 = (i__25924__auto___32437 + (1));
i__25924__auto___32437 = G__32438;
continue;
} else {
}
break;
}

var G__32371 = args32369.length;
switch (G__32371) {
case 1:
return sablono.core.time_field32368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32369.length)].join('')));

}
});

sablono.core.time_field32368.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.time_field32368.call(null,name__32227__auto__,null);
});

sablono.core.time_field32368.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.time_field32368.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32368);

/**
 * Creates a url input field.
 */
sablono.core.url_field32372 = (function sablono$core$url_field32372(var_args){
var args32373 = [];
var len__25923__auto___32440 = arguments.length;
var i__25924__auto___32441 = (0);
while(true){
if((i__25924__auto___32441 < len__25923__auto___32440)){
args32373.push((arguments[i__25924__auto___32441]));

var G__32442 = (i__25924__auto___32441 + (1));
i__25924__auto___32441 = G__32442;
continue;
} else {
}
break;
}

var G__32375 = args32373.length;
switch (G__32375) {
case 1:
return sablono.core.url_field32372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32373.length)].join('')));

}
});

sablono.core.url_field32372.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.url_field32372.call(null,name__32227__auto__,null);
});

sablono.core.url_field32372.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.url_field32372.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32372);

/**
 * Creates a week input field.
 */
sablono.core.week_field32376 = (function sablono$core$week_field32376(var_args){
var args32377 = [];
var len__25923__auto___32444 = arguments.length;
var i__25924__auto___32445 = (0);
while(true){
if((i__25924__auto___32445 < len__25923__auto___32444)){
args32377.push((arguments[i__25924__auto___32445]));

var G__32446 = (i__25924__auto___32445 + (1));
i__25924__auto___32445 = G__32446;
continue;
} else {
}
break;
}

var G__32379 = args32377.length;
switch (G__32379) {
case 1:
return sablono.core.week_field32376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32377.length)].join('')));

}
});

sablono.core.week_field32376.cljs$core$IFn$_invoke$arity$1 = (function (name__32227__auto__){
return sablono.core.week_field32376.call(null,name__32227__auto__,null);
});

sablono.core.week_field32376.cljs$core$IFn$_invoke$arity$2 = (function (name__32227__auto__,value__32228__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32227__auto__,value__32228__auto__);
});

sablono.core.week_field32376.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32376);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32448 = (function sablono$core$check_box32448(var_args){
var args32449 = [];
var len__25923__auto___32452 = arguments.length;
var i__25924__auto___32453 = (0);
while(true){
if((i__25924__auto___32453 < len__25923__auto___32452)){
args32449.push((arguments[i__25924__auto___32453]));

var G__32454 = (i__25924__auto___32453 + (1));
i__25924__auto___32453 = G__32454;
continue;
} else {
}
break;
}

var G__32451 = args32449.length;
switch (G__32451) {
case 1:
return sablono.core.check_box32448.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32448.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32448.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32449.length)].join('')));

}
});

sablono.core.check_box32448.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32448.call(null,name,null);
});

sablono.core.check_box32448.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32448.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32448.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32448.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32448);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32456 = (function sablono$core$radio_button32456(var_args){
var args32457 = [];
var len__25923__auto___32460 = arguments.length;
var i__25924__auto___32461 = (0);
while(true){
if((i__25924__auto___32461 < len__25923__auto___32460)){
args32457.push((arguments[i__25924__auto___32461]));

var G__32462 = (i__25924__auto___32461 + (1));
i__25924__auto___32461 = G__32462;
continue;
} else {
}
break;
}

var G__32459 = args32457.length;
switch (G__32459) {
case 1:
return sablono.core.radio_button32456.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32456.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32456.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32457.length)].join('')));

}
});

sablono.core.radio_button32456.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32456.call(null,group,null);
});

sablono.core.radio_button32456.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32456.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32456.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32456.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32456);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32464 = (function sablono$core$select_options32464(coll){
var iter__25628__auto__ = (function sablono$core$select_options32464_$_iter__32481(s__32482){
return (new cljs.core.LazySeq(null,(function (){
var s__32482__$1 = s__32482;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32482__$1);
if(temp__4657__auto__){
var s__32482__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32482__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32482__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32484 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32483 = (0);
while(true){
if((i__32483 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32483);
cljs.core.chunk_append.call(null,b__32484,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32491 = x;
var text = cljs.core.nth.call(null,vec__32491,(0),null);
var val = cljs.core.nth.call(null,vec__32491,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32491,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32464.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32497 = (i__32483 + (1));
i__32483 = G__32497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32484),sablono$core$select_options32464_$_iter__32481.call(null,cljs.core.chunk_rest.call(null,s__32482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32484),null);
}
} else {
var x = cljs.core.first.call(null,s__32482__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32494 = x;
var text = cljs.core.nth.call(null,vec__32494,(0),null);
var val = cljs.core.nth.call(null,vec__32494,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32494,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32464.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32464_$_iter__32481.call(null,cljs.core.rest.call(null,s__32482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32464);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32498 = (function sablono$core$drop_down32498(var_args){
var args32499 = [];
var len__25923__auto___32502 = arguments.length;
var i__25924__auto___32503 = (0);
while(true){
if((i__25924__auto___32503 < len__25923__auto___32502)){
args32499.push((arguments[i__25924__auto___32503]));

var G__32504 = (i__25924__auto___32503 + (1));
i__25924__auto___32503 = G__32504;
continue;
} else {
}
break;
}

var G__32501 = args32499.length;
switch (G__32501) {
case 2:
return sablono.core.drop_down32498.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32498.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32499.length)].join('')));

}
});

sablono.core.drop_down32498.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32498.call(null,name,options,null);
});

sablono.core.drop_down32498.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32498.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32498);
/**
 * Creates a text area element.
 */
sablono.core.text_area32506 = (function sablono$core$text_area32506(var_args){
var args32507 = [];
var len__25923__auto___32510 = arguments.length;
var i__25924__auto___32511 = (0);
while(true){
if((i__25924__auto___32511 < len__25923__auto___32510)){
args32507.push((arguments[i__25924__auto___32511]));

var G__32512 = (i__25924__auto___32511 + (1));
i__25924__auto___32511 = G__32512;
continue;
} else {
}
break;
}

var G__32509 = args32507.length;
switch (G__32509) {
case 1:
return sablono.core.text_area32506.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32506.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32507.length)].join('')));

}
});

sablono.core.text_area32506.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32506.call(null,name,null);
});

sablono.core.text_area32506.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32506.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32506);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32514 = (function sablono$core$label32514(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32514);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32515 = (function sablono$core$submit_button32515(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32515);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32516 = (function sablono$core$reset_button32516(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32516);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32517 = (function sablono$core$form_to32517(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32524 = arguments.length;
var i__25924__auto___32525 = (0);
while(true){
if((i__25924__auto___32525 < len__25923__auto___32524)){
args__25930__auto__.push((arguments[i__25924__auto___32525]));

var G__32526 = (i__25924__auto___32525 + (1));
i__25924__auto___32525 = G__32526;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32517.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.form_to32517.cljs$core$IFn$_invoke$arity$variadic = (function (p__32520,body){
var vec__32521 = p__32520;
var method = cljs.core.nth.call(null,vec__32521,(0),null);
var action = cljs.core.nth.call(null,vec__32521,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32517.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32517.cljs$lang$applyTo = (function (seq32518){
var G__32519 = cljs.core.first.call(null,seq32518);
var seq32518__$1 = cljs.core.next.call(null,seq32518);
return sablono.core.form_to32517.cljs$core$IFn$_invoke$arity$variadic(G__32519,seq32518__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32517);

//# sourceMappingURL=core.js.map?rel=1658325512417