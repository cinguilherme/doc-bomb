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
var G__32385__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32382 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32383 = cljs.core.seq.call(null,vec__32382);
var first__32384 = cljs.core.first.call(null,seq__32383);
var seq__32383__$1 = cljs.core.next.call(null,seq__32383);
var tag = first__32384;
var body = seq__32383__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32386__i = 0, G__32386__a = new Array(arguments.length -  0);
while (G__32386__i < G__32386__a.length) {G__32386__a[G__32386__i] = arguments[G__32386__i + 0]; ++G__32386__i;}
  args = new cljs.core.IndexedSeq(G__32386__a,0);
} 
return G__32385__delegate.call(this,args);};
G__32385.cljs$lang$maxFixedArity = 0;
G__32385.cljs$lang$applyTo = (function (arglist__32387){
var args = cljs.core.seq(arglist__32387);
return G__32385__delegate(args);
});
G__32385.cljs$core$IFn$_invoke$arity$variadic = G__32385__delegate;
return G__32385;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25628__auto__ = (function sablono$core$update_arglists_$_iter__32392(s__32393){
return (new cljs.core.LazySeq(null,(function (){
var s__32393__$1 = s__32393;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32393__$1);
if(temp__4657__auto__){
var s__32393__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32393__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32393__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32395 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32394 = (0);
while(true){
if((i__32394 < size__25627__auto__)){
var args = cljs.core._nth.call(null,c__25626__auto__,i__32394);
cljs.core.chunk_append.call(null,b__32395,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32396 = (i__32394 + (1));
i__32394 = G__32396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32395),sablono$core$update_arglists_$_iter__32392.call(null,cljs.core.chunk_rest.call(null,s__32393__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32395),null);
}
} else {
var args = cljs.core.first.call(null,s__32393__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32392.call(null,cljs.core.rest.call(null,s__32393__$2)));
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
var len__25923__auto___32402 = arguments.length;
var i__25924__auto___32403 = (0);
while(true){
if((i__25924__auto___32403 < len__25923__auto___32402)){
args__25930__auto__.push((arguments[i__25924__auto___32403]));

var G__32404 = (i__25924__auto___32403 + (1));
i__25924__auto___32403 = G__32404;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25628__auto__ = (function sablono$core$iter__32398(s__32399){
return (new cljs.core.LazySeq(null,(function (){
var s__32399__$1 = s__32399;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32399__$1);
if(temp__4657__auto__){
var s__32399__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32399__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32399__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32401 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32400 = (0);
while(true){
if((i__32400 < size__25627__auto__)){
var style = cljs.core._nth.call(null,c__25626__auto__,i__32400);
cljs.core.chunk_append.call(null,b__32401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32405 = (i__32400 + (1));
i__32400 = G__32405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32401),sablono$core$iter__32398.call(null,cljs.core.chunk_rest.call(null,s__32399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32401),null);
}
} else {
var style = cljs.core.first.call(null,s__32399__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32398.call(null,cljs.core.rest.call(null,s__32399__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq32397){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32397));
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
sablono.core.link_to32406 = (function sablono$core$link_to32406(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32409 = arguments.length;
var i__25924__auto___32410 = (0);
while(true){
if((i__25924__auto___32410 < len__25923__auto___32409)){
args__25930__auto__.push((arguments[i__25924__auto___32410]));

var G__32411 = (i__25924__auto___32410 + (1));
i__25924__auto___32410 = G__32411;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32406.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.link_to32406.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32406.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32406.cljs$lang$applyTo = (function (seq32407){
var G__32408 = cljs.core.first.call(null,seq32407);
var seq32407__$1 = cljs.core.next.call(null,seq32407);
return sablono.core.link_to32406.cljs$core$IFn$_invoke$arity$variadic(G__32408,seq32407__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32406);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32412 = (function sablono$core$mail_to32412(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32419 = arguments.length;
var i__25924__auto___32420 = (0);
while(true){
if((i__25924__auto___32420 < len__25923__auto___32419)){
args__25930__auto__.push((arguments[i__25924__auto___32420]));

var G__32421 = (i__25924__auto___32420 + (1));
i__25924__auto___32420 = G__32421;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32412.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.mail_to32412.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32415){
var vec__32416 = p__32415;
var content = cljs.core.nth.call(null,vec__32416,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24848__auto__ = content;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32412.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32412.cljs$lang$applyTo = (function (seq32413){
var G__32414 = cljs.core.first.call(null,seq32413);
var seq32413__$1 = cljs.core.next.call(null,seq32413);
return sablono.core.mail_to32412.cljs$core$IFn$_invoke$arity$variadic(G__32414,seq32413__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32412);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32422 = (function sablono$core$unordered_list32422(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25628__auto__ = (function sablono$core$unordered_list32422_$_iter__32427(s__32428){
return (new cljs.core.LazySeq(null,(function (){
var s__32428__$1 = s__32428;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32428__$1);
if(temp__4657__auto__){
var s__32428__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32428__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32428__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32430 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32429 = (0);
while(true){
if((i__32429 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32429);
cljs.core.chunk_append.call(null,b__32430,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32431 = (i__32429 + (1));
i__32429 = G__32431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32430),sablono$core$unordered_list32422_$_iter__32427.call(null,cljs.core.chunk_rest.call(null,s__32428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32430),null);
}
} else {
var x = cljs.core.first.call(null,s__32428__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32422_$_iter__32427.call(null,cljs.core.rest.call(null,s__32428__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32422);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32432 = (function sablono$core$ordered_list32432(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25628__auto__ = (function sablono$core$ordered_list32432_$_iter__32437(s__32438){
return (new cljs.core.LazySeq(null,(function (){
var s__32438__$1 = s__32438;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32438__$1);
if(temp__4657__auto__){
var s__32438__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32438__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32438__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32440 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32439 = (0);
while(true){
if((i__32439 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32439);
cljs.core.chunk_append.call(null,b__32440,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32441 = (i__32439 + (1));
i__32439 = G__32441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32440),sablono$core$ordered_list32432_$_iter__32437.call(null,cljs.core.chunk_rest.call(null,s__32438__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32440),null);
}
} else {
var x = cljs.core.first.call(null,s__32438__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32432_$_iter__32437.call(null,cljs.core.rest.call(null,s__32438__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32432);
/**
 * Create an image element.
 */
sablono.core.image32442 = (function sablono$core$image32442(var_args){
var args32443 = [];
var len__25923__auto___32446 = arguments.length;
var i__25924__auto___32447 = (0);
while(true){
if((i__25924__auto___32447 < len__25923__auto___32446)){
args32443.push((arguments[i__25924__auto___32447]));

var G__32448 = (i__25924__auto___32447 + (1));
i__25924__auto___32447 = G__32448;
continue;
} else {
}
break;
}

var G__32445 = args32443.length;
switch (G__32445) {
case 1:
return sablono.core.image32442.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32442.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32443.length)].join('')));

}
});

sablono.core.image32442.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32442.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32442.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32442);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32450_SHARP_,p2__32451_SHARP_){
return [cljs.core.str(p1__32450_SHARP_),cljs.core.str("["),cljs.core.str(p2__32451_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32452_SHARP_,p2__32453_SHARP_){
return [cljs.core.str(p1__32452_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32453_SHARP_)].join('');
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
sablono.core.color_field32454 = (function sablono$core$color_field32454(var_args){
var args32455 = [];
var len__25923__auto___32522 = arguments.length;
var i__25924__auto___32523 = (0);
while(true){
if((i__25924__auto___32523 < len__25923__auto___32522)){
args32455.push((arguments[i__25924__auto___32523]));

var G__32524 = (i__25924__auto___32523 + (1));
i__25924__auto___32523 = G__32524;
continue;
} else {
}
break;
}

var G__32457 = args32455.length;
switch (G__32457) {
case 1:
return sablono.core.color_field32454.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32454.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32455.length)].join('')));

}
});

sablono.core.color_field32454.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.color_field32454.call(null,name__32369__auto__,null);
});

sablono.core.color_field32454.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.color_field32454.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32454);

/**
 * Creates a date input field.
 */
sablono.core.date_field32458 = (function sablono$core$date_field32458(var_args){
var args32459 = [];
var len__25923__auto___32526 = arguments.length;
var i__25924__auto___32527 = (0);
while(true){
if((i__25924__auto___32527 < len__25923__auto___32526)){
args32459.push((arguments[i__25924__auto___32527]));

var G__32528 = (i__25924__auto___32527 + (1));
i__25924__auto___32527 = G__32528;
continue;
} else {
}
break;
}

var G__32461 = args32459.length;
switch (G__32461) {
case 1:
return sablono.core.date_field32458.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32458.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32459.length)].join('')));

}
});

sablono.core.date_field32458.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.date_field32458.call(null,name__32369__auto__,null);
});

sablono.core.date_field32458.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.date_field32458.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32458);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32462 = (function sablono$core$datetime_field32462(var_args){
var args32463 = [];
var len__25923__auto___32530 = arguments.length;
var i__25924__auto___32531 = (0);
while(true){
if((i__25924__auto___32531 < len__25923__auto___32530)){
args32463.push((arguments[i__25924__auto___32531]));

var G__32532 = (i__25924__auto___32531 + (1));
i__25924__auto___32531 = G__32532;
continue;
} else {
}
break;
}

var G__32465 = args32463.length;
switch (G__32465) {
case 1:
return sablono.core.datetime_field32462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32463.length)].join('')));

}
});

sablono.core.datetime_field32462.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.datetime_field32462.call(null,name__32369__auto__,null);
});

sablono.core.datetime_field32462.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.datetime_field32462.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32462);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32466 = (function sablono$core$datetime_local_field32466(var_args){
var args32467 = [];
var len__25923__auto___32534 = arguments.length;
var i__25924__auto___32535 = (0);
while(true){
if((i__25924__auto___32535 < len__25923__auto___32534)){
args32467.push((arguments[i__25924__auto___32535]));

var G__32536 = (i__25924__auto___32535 + (1));
i__25924__auto___32535 = G__32536;
continue;
} else {
}
break;
}

var G__32469 = args32467.length;
switch (G__32469) {
case 1:
return sablono.core.datetime_local_field32466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32467.length)].join('')));

}
});

sablono.core.datetime_local_field32466.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.datetime_local_field32466.call(null,name__32369__auto__,null);
});

sablono.core.datetime_local_field32466.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.datetime_local_field32466.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32466);

/**
 * Creates a email input field.
 */
sablono.core.email_field32470 = (function sablono$core$email_field32470(var_args){
var args32471 = [];
var len__25923__auto___32538 = arguments.length;
var i__25924__auto___32539 = (0);
while(true){
if((i__25924__auto___32539 < len__25923__auto___32538)){
args32471.push((arguments[i__25924__auto___32539]));

var G__32540 = (i__25924__auto___32539 + (1));
i__25924__auto___32539 = G__32540;
continue;
} else {
}
break;
}

var G__32473 = args32471.length;
switch (G__32473) {
case 1:
return sablono.core.email_field32470.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32470.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32471.length)].join('')));

}
});

sablono.core.email_field32470.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.email_field32470.call(null,name__32369__auto__,null);
});

sablono.core.email_field32470.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.email_field32470.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32470);

/**
 * Creates a file input field.
 */
sablono.core.file_field32474 = (function sablono$core$file_field32474(var_args){
var args32475 = [];
var len__25923__auto___32542 = arguments.length;
var i__25924__auto___32543 = (0);
while(true){
if((i__25924__auto___32543 < len__25923__auto___32542)){
args32475.push((arguments[i__25924__auto___32543]));

var G__32544 = (i__25924__auto___32543 + (1));
i__25924__auto___32543 = G__32544;
continue;
} else {
}
break;
}

var G__32477 = args32475.length;
switch (G__32477) {
case 1:
return sablono.core.file_field32474.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32474.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32475.length)].join('')));

}
});

sablono.core.file_field32474.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.file_field32474.call(null,name__32369__auto__,null);
});

sablono.core.file_field32474.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.file_field32474.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32474);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32478 = (function sablono$core$hidden_field32478(var_args){
var args32479 = [];
var len__25923__auto___32546 = arguments.length;
var i__25924__auto___32547 = (0);
while(true){
if((i__25924__auto___32547 < len__25923__auto___32546)){
args32479.push((arguments[i__25924__auto___32547]));

var G__32548 = (i__25924__auto___32547 + (1));
i__25924__auto___32547 = G__32548;
continue;
} else {
}
break;
}

var G__32481 = args32479.length;
switch (G__32481) {
case 1:
return sablono.core.hidden_field32478.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32478.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32479.length)].join('')));

}
});

sablono.core.hidden_field32478.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.hidden_field32478.call(null,name__32369__auto__,null);
});

sablono.core.hidden_field32478.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.hidden_field32478.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32478);

/**
 * Creates a month input field.
 */
sablono.core.month_field32482 = (function sablono$core$month_field32482(var_args){
var args32483 = [];
var len__25923__auto___32550 = arguments.length;
var i__25924__auto___32551 = (0);
while(true){
if((i__25924__auto___32551 < len__25923__auto___32550)){
args32483.push((arguments[i__25924__auto___32551]));

var G__32552 = (i__25924__auto___32551 + (1));
i__25924__auto___32551 = G__32552;
continue;
} else {
}
break;
}

var G__32485 = args32483.length;
switch (G__32485) {
case 1:
return sablono.core.month_field32482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32483.length)].join('')));

}
});

sablono.core.month_field32482.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.month_field32482.call(null,name__32369__auto__,null);
});

sablono.core.month_field32482.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.month_field32482.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32482);

/**
 * Creates a number input field.
 */
sablono.core.number_field32486 = (function sablono$core$number_field32486(var_args){
var args32487 = [];
var len__25923__auto___32554 = arguments.length;
var i__25924__auto___32555 = (0);
while(true){
if((i__25924__auto___32555 < len__25923__auto___32554)){
args32487.push((arguments[i__25924__auto___32555]));

var G__32556 = (i__25924__auto___32555 + (1));
i__25924__auto___32555 = G__32556;
continue;
} else {
}
break;
}

var G__32489 = args32487.length;
switch (G__32489) {
case 1:
return sablono.core.number_field32486.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32486.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32487.length)].join('')));

}
});

sablono.core.number_field32486.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.number_field32486.call(null,name__32369__auto__,null);
});

sablono.core.number_field32486.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.number_field32486.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32486);

/**
 * Creates a password input field.
 */
sablono.core.password_field32490 = (function sablono$core$password_field32490(var_args){
var args32491 = [];
var len__25923__auto___32558 = arguments.length;
var i__25924__auto___32559 = (0);
while(true){
if((i__25924__auto___32559 < len__25923__auto___32558)){
args32491.push((arguments[i__25924__auto___32559]));

var G__32560 = (i__25924__auto___32559 + (1));
i__25924__auto___32559 = G__32560;
continue;
} else {
}
break;
}

var G__32493 = args32491.length;
switch (G__32493) {
case 1:
return sablono.core.password_field32490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32491.length)].join('')));

}
});

sablono.core.password_field32490.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.password_field32490.call(null,name__32369__auto__,null);
});

sablono.core.password_field32490.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.password_field32490.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32490);

/**
 * Creates a range input field.
 */
sablono.core.range_field32494 = (function sablono$core$range_field32494(var_args){
var args32495 = [];
var len__25923__auto___32562 = arguments.length;
var i__25924__auto___32563 = (0);
while(true){
if((i__25924__auto___32563 < len__25923__auto___32562)){
args32495.push((arguments[i__25924__auto___32563]));

var G__32564 = (i__25924__auto___32563 + (1));
i__25924__auto___32563 = G__32564;
continue;
} else {
}
break;
}

var G__32497 = args32495.length;
switch (G__32497) {
case 1:
return sablono.core.range_field32494.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32495.length)].join('')));

}
});

sablono.core.range_field32494.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.range_field32494.call(null,name__32369__auto__,null);
});

sablono.core.range_field32494.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.range_field32494.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32494);

/**
 * Creates a search input field.
 */
sablono.core.search_field32498 = (function sablono$core$search_field32498(var_args){
var args32499 = [];
var len__25923__auto___32566 = arguments.length;
var i__25924__auto___32567 = (0);
while(true){
if((i__25924__auto___32567 < len__25923__auto___32566)){
args32499.push((arguments[i__25924__auto___32567]));

var G__32568 = (i__25924__auto___32567 + (1));
i__25924__auto___32567 = G__32568;
continue;
} else {
}
break;
}

var G__32501 = args32499.length;
switch (G__32501) {
case 1:
return sablono.core.search_field32498.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32498.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32499.length)].join('')));

}
});

sablono.core.search_field32498.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.search_field32498.call(null,name__32369__auto__,null);
});

sablono.core.search_field32498.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.search_field32498.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32498);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32502 = (function sablono$core$tel_field32502(var_args){
var args32503 = [];
var len__25923__auto___32570 = arguments.length;
var i__25924__auto___32571 = (0);
while(true){
if((i__25924__auto___32571 < len__25923__auto___32570)){
args32503.push((arguments[i__25924__auto___32571]));

var G__32572 = (i__25924__auto___32571 + (1));
i__25924__auto___32571 = G__32572;
continue;
} else {
}
break;
}

var G__32505 = args32503.length;
switch (G__32505) {
case 1:
return sablono.core.tel_field32502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32503.length)].join('')));

}
});

sablono.core.tel_field32502.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.tel_field32502.call(null,name__32369__auto__,null);
});

sablono.core.tel_field32502.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.tel_field32502.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32502);

/**
 * Creates a text input field.
 */
sablono.core.text_field32506 = (function sablono$core$text_field32506(var_args){
var args32507 = [];
var len__25923__auto___32574 = arguments.length;
var i__25924__auto___32575 = (0);
while(true){
if((i__25924__auto___32575 < len__25923__auto___32574)){
args32507.push((arguments[i__25924__auto___32575]));

var G__32576 = (i__25924__auto___32575 + (1));
i__25924__auto___32575 = G__32576;
continue;
} else {
}
break;
}

var G__32509 = args32507.length;
switch (G__32509) {
case 1:
return sablono.core.text_field32506.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32506.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32507.length)].join('')));

}
});

sablono.core.text_field32506.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.text_field32506.call(null,name__32369__auto__,null);
});

sablono.core.text_field32506.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.text_field32506.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32506);

/**
 * Creates a time input field.
 */
sablono.core.time_field32510 = (function sablono$core$time_field32510(var_args){
var args32511 = [];
var len__25923__auto___32578 = arguments.length;
var i__25924__auto___32579 = (0);
while(true){
if((i__25924__auto___32579 < len__25923__auto___32578)){
args32511.push((arguments[i__25924__auto___32579]));

var G__32580 = (i__25924__auto___32579 + (1));
i__25924__auto___32579 = G__32580;
continue;
} else {
}
break;
}

var G__32513 = args32511.length;
switch (G__32513) {
case 1:
return sablono.core.time_field32510.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32510.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32511.length)].join('')));

}
});

sablono.core.time_field32510.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.time_field32510.call(null,name__32369__auto__,null);
});

sablono.core.time_field32510.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.time_field32510.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32510);

/**
 * Creates a url input field.
 */
sablono.core.url_field32514 = (function sablono$core$url_field32514(var_args){
var args32515 = [];
var len__25923__auto___32582 = arguments.length;
var i__25924__auto___32583 = (0);
while(true){
if((i__25924__auto___32583 < len__25923__auto___32582)){
args32515.push((arguments[i__25924__auto___32583]));

var G__32584 = (i__25924__auto___32583 + (1));
i__25924__auto___32583 = G__32584;
continue;
} else {
}
break;
}

var G__32517 = args32515.length;
switch (G__32517) {
case 1:
return sablono.core.url_field32514.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32514.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32515.length)].join('')));

}
});

sablono.core.url_field32514.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.url_field32514.call(null,name__32369__auto__,null);
});

sablono.core.url_field32514.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.url_field32514.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32514);

/**
 * Creates a week input field.
 */
sablono.core.week_field32518 = (function sablono$core$week_field32518(var_args){
var args32519 = [];
var len__25923__auto___32586 = arguments.length;
var i__25924__auto___32587 = (0);
while(true){
if((i__25924__auto___32587 < len__25923__auto___32586)){
args32519.push((arguments[i__25924__auto___32587]));

var G__32588 = (i__25924__auto___32587 + (1));
i__25924__auto___32587 = G__32588;
continue;
} else {
}
break;
}

var G__32521 = args32519.length;
switch (G__32521) {
case 1:
return sablono.core.week_field32518.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32518.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32519.length)].join('')));

}
});

sablono.core.week_field32518.cljs$core$IFn$_invoke$arity$1 = (function (name__32369__auto__){
return sablono.core.week_field32518.call(null,name__32369__auto__,null);
});

sablono.core.week_field32518.cljs$core$IFn$_invoke$arity$2 = (function (name__32369__auto__,value__32370__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32369__auto__,value__32370__auto__);
});

sablono.core.week_field32518.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32518);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32590 = (function sablono$core$check_box32590(var_args){
var args32591 = [];
var len__25923__auto___32594 = arguments.length;
var i__25924__auto___32595 = (0);
while(true){
if((i__25924__auto___32595 < len__25923__auto___32594)){
args32591.push((arguments[i__25924__auto___32595]));

var G__32596 = (i__25924__auto___32595 + (1));
i__25924__auto___32595 = G__32596;
continue;
} else {
}
break;
}

var G__32593 = args32591.length;
switch (G__32593) {
case 1:
return sablono.core.check_box32590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32590.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32591.length)].join('')));

}
});

sablono.core.check_box32590.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32590.call(null,name,null);
});

sablono.core.check_box32590.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32590.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32590.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32590.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32590);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32598 = (function sablono$core$radio_button32598(var_args){
var args32599 = [];
var len__25923__auto___32602 = arguments.length;
var i__25924__auto___32603 = (0);
while(true){
if((i__25924__auto___32603 < len__25923__auto___32602)){
args32599.push((arguments[i__25924__auto___32603]));

var G__32604 = (i__25924__auto___32603 + (1));
i__25924__auto___32603 = G__32604;
continue;
} else {
}
break;
}

var G__32601 = args32599.length;
switch (G__32601) {
case 1:
return sablono.core.radio_button32598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32598.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32599.length)].join('')));

}
});

sablono.core.radio_button32598.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32598.call(null,group,null);
});

sablono.core.radio_button32598.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32598.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32598.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32598.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32598);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32606 = (function sablono$core$select_options32606(coll){
var iter__25628__auto__ = (function sablono$core$select_options32606_$_iter__32623(s__32624){
return (new cljs.core.LazySeq(null,(function (){
var s__32624__$1 = s__32624;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32624__$1);
if(temp__4657__auto__){
var s__32624__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32624__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32624__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32626 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32625 = (0);
while(true){
if((i__32625 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32625);
cljs.core.chunk_append.call(null,b__32626,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32633 = x;
var text = cljs.core.nth.call(null,vec__32633,(0),null);
var val = cljs.core.nth.call(null,vec__32633,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32633,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32606.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32639 = (i__32625 + (1));
i__32625 = G__32639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32626),sablono$core$select_options32606_$_iter__32623.call(null,cljs.core.chunk_rest.call(null,s__32624__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32626),null);
}
} else {
var x = cljs.core.first.call(null,s__32624__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32636 = x;
var text = cljs.core.nth.call(null,vec__32636,(0),null);
var val = cljs.core.nth.call(null,vec__32636,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32636,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32606.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32606_$_iter__32623.call(null,cljs.core.rest.call(null,s__32624__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32606);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32640 = (function sablono$core$drop_down32640(var_args){
var args32641 = [];
var len__25923__auto___32644 = arguments.length;
var i__25924__auto___32645 = (0);
while(true){
if((i__25924__auto___32645 < len__25923__auto___32644)){
args32641.push((arguments[i__25924__auto___32645]));

var G__32646 = (i__25924__auto___32645 + (1));
i__25924__auto___32645 = G__32646;
continue;
} else {
}
break;
}

var G__32643 = args32641.length;
switch (G__32643) {
case 2:
return sablono.core.drop_down32640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32640.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32641.length)].join('')));

}
});

sablono.core.drop_down32640.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32640.call(null,name,options,null);
});

sablono.core.drop_down32640.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32640.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32640);
/**
 * Creates a text area element.
 */
sablono.core.text_area32648 = (function sablono$core$text_area32648(var_args){
var args32649 = [];
var len__25923__auto___32652 = arguments.length;
var i__25924__auto___32653 = (0);
while(true){
if((i__25924__auto___32653 < len__25923__auto___32652)){
args32649.push((arguments[i__25924__auto___32653]));

var G__32654 = (i__25924__auto___32653 + (1));
i__25924__auto___32653 = G__32654;
continue;
} else {
}
break;
}

var G__32651 = args32649.length;
switch (G__32651) {
case 1:
return sablono.core.text_area32648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32649.length)].join('')));

}
});

sablono.core.text_area32648.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32648.call(null,name,null);
});

sablono.core.text_area32648.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32648.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32648);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32656 = (function sablono$core$label32656(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32656);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32657 = (function sablono$core$submit_button32657(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32657);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32658 = (function sablono$core$reset_button32658(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32658);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32659 = (function sablono$core$form_to32659(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32666 = arguments.length;
var i__25924__auto___32667 = (0);
while(true){
if((i__25924__auto___32667 < len__25923__auto___32666)){
args__25930__auto__.push((arguments[i__25924__auto___32667]));

var G__32668 = (i__25924__auto___32667 + (1));
i__25924__auto___32667 = G__32668;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32659.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.form_to32659.cljs$core$IFn$_invoke$arity$variadic = (function (p__32662,body){
var vec__32663 = p__32662;
var method = cljs.core.nth.call(null,vec__32663,(0),null);
var action = cljs.core.nth.call(null,vec__32663,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32659.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32659.cljs$lang$applyTo = (function (seq32660){
var G__32661 = cljs.core.first.call(null,seq32660);
var seq32660__$1 = cljs.core.next.call(null,seq32660);
return sablono.core.form_to32659.cljs$core$IFn$_invoke$arity$variadic(G__32661,seq32660__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32659);

//# sourceMappingURL=core.js.map?rel=1658328681807