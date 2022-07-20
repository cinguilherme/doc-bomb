// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__24848__auto__ = (function (){var and__24836__auto__ = typeof Symbol !== 'undefined';
if(and__24836__auto__){
var and__24836__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__24836__auto____$1){
var and__24836__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__24836__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__24836__auto____$2;
}
} else {
return and__24836__auto____$1;
}
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__33508_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__33508_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args33509 = [];
var len__25923__auto___33512 = arguments.length;
var i__25924__auto___33513 = (0);
while(true){
if((i__25924__auto___33513 < len__25923__auto___33512)){
args33509.push((arguments[i__25924__auto___33513]));

var G__33514 = (i__25924__auto___33513 + (1));
i__25924__auto___33513 = G__33514;
continue;
} else {
}
break;
}

var G__33511 = args33509.length;
switch (G__33511) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33509.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__24836__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__24836__auto__){
var map__33522 = c;
var map__33522__$1 = ((((!((map__33522 == null)))?((((map__33522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33522):map__33522);
var path = cljs.core.get.call(null,map__33522__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__33522__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__24836__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__32715__auto___33528 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__24848__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__32715__auto___33528);
}

var seq__33524_33529 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33525_33530 = null;
var count__33526_33531 = (0);
var i__33527_33532 = (0);
while(true){
if((i__33527_33532 < count__33526_33531)){
var property__32716__auto___33533 = cljs.core._nth.call(null,chunk__33525_33530,i__33527_33532);
if(cljs.core.truth_((base__32715__auto___33528[property__32716__auto___33533]))){
(devcards.core.CodeHighlight.prototype[property__32716__auto___33533] = (base__32715__auto___33528[property__32716__auto___33533]));
} else {
}

var G__33534 = seq__33524_33529;
var G__33535 = chunk__33525_33530;
var G__33536 = count__33526_33531;
var G__33537 = (i__33527_33532 + (1));
seq__33524_33529 = G__33534;
chunk__33525_33530 = G__33535;
count__33526_33531 = G__33536;
i__33527_33532 = G__33537;
continue;
} else {
var temp__4657__auto___33538 = cljs.core.seq.call(null,seq__33524_33529);
if(temp__4657__auto___33538){
var seq__33524_33539__$1 = temp__4657__auto___33538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33524_33539__$1)){
var c__25659__auto___33540 = cljs.core.chunk_first.call(null,seq__33524_33539__$1);
var G__33541 = cljs.core.chunk_rest.call(null,seq__33524_33539__$1);
var G__33542 = c__25659__auto___33540;
var G__33543 = cljs.core.count.call(null,c__25659__auto___33540);
var G__33544 = (0);
seq__33524_33529 = G__33541;
chunk__33525_33530 = G__33542;
count__33526_33531 = G__33543;
i__33527_33532 = G__33544;
continue;
} else {
var property__32716__auto___33545 = cljs.core.first.call(null,seq__33524_33539__$1);
if(cljs.core.truth_((base__32715__auto___33528[property__32716__auto___33545]))){
(devcards.core.CodeHighlight.prototype[property__32716__auto___33545] = (base__32715__auto___33528[property__32716__auto___33545]));
} else {
}

var G__33546 = cljs.core.next.call(null,seq__33524_33539__$1);
var G__33547 = null;
var G__33548 = (0);
var G__33549 = (0);
seq__33524_33529 = G__33546;
chunk__33525_33530 = G__33547;
count__33526_33531 = G__33548;
i__33527_33532 = G__33549;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__25773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25774__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25775__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25776__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25777__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25777__auto__,method_table__25773__auto__,prefer_table__25774__auto__,method_cache__25775__auto__,cached_hierarchy__25776__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33550){
var map__33551 = p__33550;
var map__33551__$1 = ((((!((map__33551 == null)))?((((map__33551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33551):map__33551);
var content = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__33553){
var map__33554 = p__33553;
var map__33554__$1 = ((((!((map__33554 == null)))?((((map__33554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33554):map__33554);
var block = map__33554__$1;
var content = cljs.core.get.call(null,map__33554__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__25930__auto__ = [];
var len__25923__auto___33557 = arguments.length;
var i__25924__auto___33558 = (0);
while(true){
if((i__25924__auto___33558 < len__25923__auto___33557)){
args__25930__auto__.push((arguments[i__25924__auto___33558]));

var G__33559 = (i__25924__auto___33558 + (1));
i__25924__auto___33558 = G__33559;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq33556){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33556));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__33561 = devcards.system.devcards_rendered_card_class;
var G__33561__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__33561),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__33561);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__33561__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__33561__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args33562 = [];
var len__25923__auto___33570 = arguments.length;
var i__25924__auto___33571 = (0);
while(true){
if((i__25924__auto___33571 < len__25923__auto___33570)){
args33562.push((arguments[i__25924__auto___33571]));

var G__33572 = (i__25924__auto___33571 + (1));
i__25924__auto___33571 = G__33572;
continue;
} else {
}
break;
}

var G__33564 = args33562.length;
switch (G__33564) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33562.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__33565 = card;
var map__33565__$1 = ((((!((map__33565 == null)))?((((map__33565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33565):map__33565);
var path = cljs.core.get.call(null,map__33565__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__33565__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__33565,map__33565__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__33565,map__33565__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs33567 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs33567))?sablono.interpreter.attributes.call(null,attrs33567):null),((cljs.core.map_QMARK_.call(null,attrs33567))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33567)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__25511__auto__ = (((this$ == null))?null:this$);
var m__25512__auto__ = (devcards.core._devcard_options[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,this$,devcard_opts);
} else {
var m__25512__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__25511__auto__ = (((this$ == null))?null:this$);
var m__25512__auto__ = (devcards.core._devcard[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,this$,devcard_opts);
} else {
var m__25512__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__32715__auto___33579 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs33574 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33574))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs33574)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs33574))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33574)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__32715__auto___33579);
}

var seq__33575_33580 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33576_33581 = null;
var count__33577_33582 = (0);
var i__33578_33583 = (0);
while(true){
if((i__33578_33583 < count__33577_33582)){
var property__32716__auto___33584 = cljs.core._nth.call(null,chunk__33576_33581,i__33578_33583);
if(cljs.core.truth_((base__32715__auto___33579[property__32716__auto___33584]))){
(devcards.core.DontUpdate.prototype[property__32716__auto___33584] = (base__32715__auto___33579[property__32716__auto___33584]));
} else {
}

var G__33585 = seq__33575_33580;
var G__33586 = chunk__33576_33581;
var G__33587 = count__33577_33582;
var G__33588 = (i__33578_33583 + (1));
seq__33575_33580 = G__33585;
chunk__33576_33581 = G__33586;
count__33577_33582 = G__33587;
i__33578_33583 = G__33588;
continue;
} else {
var temp__4657__auto___33589 = cljs.core.seq.call(null,seq__33575_33580);
if(temp__4657__auto___33589){
var seq__33575_33590__$1 = temp__4657__auto___33589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33575_33590__$1)){
var c__25659__auto___33591 = cljs.core.chunk_first.call(null,seq__33575_33590__$1);
var G__33592 = cljs.core.chunk_rest.call(null,seq__33575_33590__$1);
var G__33593 = c__25659__auto___33591;
var G__33594 = cljs.core.count.call(null,c__25659__auto___33591);
var G__33595 = (0);
seq__33575_33580 = G__33592;
chunk__33576_33581 = G__33593;
count__33577_33582 = G__33594;
i__33578_33583 = G__33595;
continue;
} else {
var property__32716__auto___33596 = cljs.core.first.call(null,seq__33575_33590__$1);
if(cljs.core.truth_((base__32715__auto___33579[property__32716__auto___33596]))){
(devcards.core.DontUpdate.prototype[property__32716__auto___33596] = (base__32715__auto___33579[property__32716__auto___33596]));
} else {
}

var G__33597 = cljs.core.next.call(null,seq__33575_33590__$1);
var G__33598 = null;
var G__33599 = (0);
var G__33600 = (0);
seq__33575_33580 = G__33597;
chunk__33576_33581 = G__33598;
count__33577_33582 = G__33599;
i__33578_33583 = G__33600;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__24848__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__25682__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__25682__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__25682__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__25682__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto____$3);
})(),x__25682__auto____$2);
})(),x__25682__auto____$1);
})(),x__25682__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__32715__auto___33607 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__24848__auto__ = (function (){var and__24836__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__24836__auto__)){
return this$.state;
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__24836__auto__ = data_atom;
if(cljs.core.truth_(and__24836__auto__)){
return id;
} else {
return and__24836__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__32715__auto___33607);
}

var seq__33603_33608 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33604_33609 = null;
var count__33605_33610 = (0);
var i__33606_33611 = (0);
while(true){
if((i__33606_33611 < count__33605_33610)){
var property__32716__auto___33612 = cljs.core._nth.call(null,chunk__33604_33609,i__33606_33611);
if(cljs.core.truth_((base__32715__auto___33607[property__32716__auto___33612]))){
(devcards.core.DevcardBase.prototype[property__32716__auto___33612] = (base__32715__auto___33607[property__32716__auto___33612]));
} else {
}

var G__33613 = seq__33603_33608;
var G__33614 = chunk__33604_33609;
var G__33615 = count__33605_33610;
var G__33616 = (i__33606_33611 + (1));
seq__33603_33608 = G__33613;
chunk__33604_33609 = G__33614;
count__33605_33610 = G__33615;
i__33606_33611 = G__33616;
continue;
} else {
var temp__4657__auto___33617 = cljs.core.seq.call(null,seq__33603_33608);
if(temp__4657__auto___33617){
var seq__33603_33618__$1 = temp__4657__auto___33617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33603_33618__$1)){
var c__25659__auto___33619 = cljs.core.chunk_first.call(null,seq__33603_33618__$1);
var G__33620 = cljs.core.chunk_rest.call(null,seq__33603_33618__$1);
var G__33621 = c__25659__auto___33619;
var G__33622 = cljs.core.count.call(null,c__25659__auto___33619);
var G__33623 = (0);
seq__33603_33608 = G__33620;
chunk__33604_33609 = G__33621;
count__33605_33610 = G__33622;
i__33606_33611 = G__33623;
continue;
} else {
var property__32716__auto___33624 = cljs.core.first.call(null,seq__33603_33618__$1);
if(cljs.core.truth_((base__32715__auto___33607[property__32716__auto___33624]))){
(devcards.core.DevcardBase.prototype[property__32716__auto___33624] = (base__32715__auto___33607[property__32716__auto___33624]));
} else {
}

var G__33625 = cljs.core.next.call(null,seq__33603_33618__$1);
var G__33626 = null;
var G__33627 = (0);
var G__33628 = (0);
seq__33603_33608 = G__33625;
chunk__33604_33609 = G__33626;
count__33605_33610 = G__33627;
i__33606_33611 = G__33628;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__32715__auto___33633 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__24836__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__24836__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__24836__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__32715__auto___33633);
}

var seq__33629_33634 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33630_33635 = null;
var count__33631_33636 = (0);
var i__33632_33637 = (0);
while(true){
if((i__33632_33637 < count__33631_33636)){
var property__32716__auto___33638 = cljs.core._nth.call(null,chunk__33630_33635,i__33632_33637);
if(cljs.core.truth_((base__32715__auto___33633[property__32716__auto___33638]))){
(devcards.core.DomComponent.prototype[property__32716__auto___33638] = (base__32715__auto___33633[property__32716__auto___33638]));
} else {
}

var G__33639 = seq__33629_33634;
var G__33640 = chunk__33630_33635;
var G__33641 = count__33631_33636;
var G__33642 = (i__33632_33637 + (1));
seq__33629_33634 = G__33639;
chunk__33630_33635 = G__33640;
count__33631_33636 = G__33641;
i__33632_33637 = G__33642;
continue;
} else {
var temp__4657__auto___33643 = cljs.core.seq.call(null,seq__33629_33634);
if(temp__4657__auto___33643){
var seq__33629_33644__$1 = temp__4657__auto___33643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33629_33644__$1)){
var c__25659__auto___33645 = cljs.core.chunk_first.call(null,seq__33629_33644__$1);
var G__33646 = cljs.core.chunk_rest.call(null,seq__33629_33644__$1);
var G__33647 = c__25659__auto___33645;
var G__33648 = cljs.core.count.call(null,c__25659__auto___33645);
var G__33649 = (0);
seq__33629_33634 = G__33646;
chunk__33630_33635 = G__33647;
count__33631_33636 = G__33648;
i__33632_33637 = G__33649;
continue;
} else {
var property__32716__auto___33650 = cljs.core.first.call(null,seq__33629_33644__$1);
if(cljs.core.truth_((base__32715__auto___33633[property__32716__auto___33650]))){
(devcards.core.DomComponent.prototype[property__32716__auto___33650] = (base__32715__auto___33633[property__32716__auto___33650]));
} else {
}

var G__33651 = cljs.core.next.call(null,seq__33629_33644__$1);
var G__33652 = null;
var G__33653 = (0);
var G__33654 = (0);
seq__33629_33634 = G__33651;
chunk__33630_33635 = G__33652;
count__33631_33636 = G__33653;
i__33632_33637 = G__33654;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24848__auto__ = x === true;
if(or__24848__auto__){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = x === false;
if(or__24848__auto____$1){
return or__24848__auto____$1;
} else {
var or__24848__auto____$2 = (x == null);
if(or__24848__auto____$2){
return or__24848__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24848__auto__ = typeof x === 'string';
if(or__24848__auto__){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = (x == null);
if(or__24848__auto____$1){
return or__24848__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__24848__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__33655_SHARP_){
return !(p1__33655_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__33664 = opts;
var map__33664__$1 = ((((!((map__33664 == null)))?((((map__33664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33664):map__33664);
var name = cljs.core.get.call(null,map__33664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__33664__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__33664__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__33664__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__24848__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__24848__auto__){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = (options == null);
if(or__24848__auto____$1){
return or__24848__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__24848__auto__ = (initial_data == null);
if(or__24848__auto__){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__24848__auto____$1){
return or__24848__auto____$1;
} else {
var or__24848__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__24848__auto____$2){
return or__24848__auto____$2;
} else {
var or__24848__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__24848__auto____$3){
return or__24848__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__33664,map__33664__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__33656_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__33656_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__33664,map__33664__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs33672 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs33672))?sablono.interpreter.attributes.call(null,attrs33672):null),((cljs.core.map_QMARK_.call(null,attrs33672))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33672)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs33676 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33676))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs33676)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs33676))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33676)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs33677 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33677))?sablono.interpreter.attributes.call(null,attrs33677):null),((cljs.core.map_QMARK_.call(null,attrs33677))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33677)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs33678 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33678))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs33678)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs33678))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33678)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__33679_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__33679_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25470__auto__,k__25471__auto__){
var self__ = this;
var this__25470__auto____$1 = this;
return cljs.core._lookup.call(null,this__25470__auto____$1,k__25471__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25472__auto__,k33681,else__25473__auto__){
var self__ = this;
var this__25472__auto____$1 = this;
var G__33683 = (((k33681 instanceof cljs.core.Keyword))?k33681.fqn:null);
switch (G__33683) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33681,else__25473__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25484__auto__,writer__25485__auto__,opts__25486__auto__){
var self__ = this;
var this__25484__auto____$1 = this;
var pr_pair__25487__auto__ = ((function (this__25484__auto____$1){
return (function (keyval__25488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,cljs.core.pr_writer,""," ","",opts__25486__auto__,keyval__25488__auto__);
});})(this__25484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,pr_pair__25487__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__25486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33680){
var self__ = this;
var G__33680__$1 = this;
return (new cljs.core.RecordIter((0),G__33680__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25468__auto__){
var self__ = this;
var this__25468__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25464__auto__){
var self__ = this;
var this__25464__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25474__auto__){
var self__ = this;
var this__25474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25465__auto__){
var self__ = this;
var this__25465__auto____$1 = this;
var h__25283__auto__ = self__.__hash;
if(!((h__25283__auto__ == null))){
return h__25283__auto__;
} else {
var h__25283__auto____$1 = cljs.core.hash_imap.call(null,this__25465__auto____$1);
self__.__hash = h__25283__auto____$1;

return h__25283__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25466__auto__,other__25467__auto__){
var self__ = this;
var this__25466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24836__auto__ = other__25467__auto__;
if(cljs.core.truth_(and__24836__auto__)){
var and__24836__auto____$1 = (this__25466__auto____$1.constructor === other__25467__auto__.constructor);
if(and__24836__auto____$1){
return cljs.core.equiv_map.call(null,this__25466__auto____$1,other__25467__auto__);
} else {
return and__24836__auto____$1;
}
} else {
return and__24836__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25479__auto__,k__25480__auto__){
var self__ = this;
var this__25479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25479__auto____$1),self__.__meta),k__25480__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25480__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25477__auto__,k__25478__auto__,G__33680){
var self__ = this;
var this__25477__auto____$1 = this;
var pred__33684 = cljs.core.keyword_identical_QMARK_;
var expr__33685 = k__25478__auto__;
if(cljs.core.truth_(pred__33684.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33685))){
return (new devcards.core.IdentiyOptions(G__33680,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25478__auto__,G__33680),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25482__auto__){
var self__ = this;
var this__25482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25469__auto__,G__33680){
var self__ = this;
var this__25469__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__33680,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25475__auto__,entry__25476__auto__){
var self__ = this;
var this__25475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25476__auto__)){
return cljs.core._assoc.call(null,this__25475__auto____$1,cljs.core._nth.call(null,entry__25476__auto__,(0)),cljs.core._nth.call(null,entry__25476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25475__auto____$1,entry__25476__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__25504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__25504__auto__,writer__25505__auto__){
return cljs.core._write.call(null,writer__25505__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__33682){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33682),null,cljs.core.dissoc.call(null,G__33682,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__33688){
var map__33691 = p__33688;
var map__33691__$1 = ((((!((map__33691 == null)))?((((map__33691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33691):map__33691);
var devcard_opts = map__33691__$1;
var options = cljs.core.get.call(null,map__33691__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__33691,map__33691__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__33691,map__33691__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25470__auto__,k__25471__auto__){
var self__ = this;
var this__25470__auto____$1 = this;
return cljs.core._lookup.call(null,this__25470__auto____$1,k__25471__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25472__auto__,k33694,else__25473__auto__){
var self__ = this;
var this__25472__auto____$1 = this;
var G__33696 = (((k33694 instanceof cljs.core.Keyword))?k33694.fqn:null);
switch (G__33696) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33694,else__25473__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25484__auto__,writer__25485__auto__,opts__25486__auto__){
var self__ = this;
var this__25484__auto____$1 = this;
var pr_pair__25487__auto__ = ((function (this__25484__auto____$1){
return (function (keyval__25488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,cljs.core.pr_writer,""," ","",opts__25486__auto__,keyval__25488__auto__);
});})(this__25484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,pr_pair__25487__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__25486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33693){
var self__ = this;
var G__33693__$1 = this;
return (new cljs.core.RecordIter((0),G__33693__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25468__auto__){
var self__ = this;
var this__25468__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25464__auto__){
var self__ = this;
var this__25464__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25474__auto__){
var self__ = this;
var this__25474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25465__auto__){
var self__ = this;
var this__25465__auto____$1 = this;
var h__25283__auto__ = self__.__hash;
if(!((h__25283__auto__ == null))){
return h__25283__auto__;
} else {
var h__25283__auto____$1 = cljs.core.hash_imap.call(null,this__25465__auto____$1);
self__.__hash = h__25283__auto____$1;

return h__25283__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25466__auto__,other__25467__auto__){
var self__ = this;
var this__25466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24836__auto__ = other__25467__auto__;
if(cljs.core.truth_(and__24836__auto__)){
var and__24836__auto____$1 = (this__25466__auto____$1.constructor === other__25467__auto__.constructor);
if(and__24836__auto____$1){
return cljs.core.equiv_map.call(null,this__25466__auto____$1,other__25467__auto__);
} else {
return and__24836__auto____$1;
}
} else {
return and__24836__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25479__auto__,k__25480__auto__){
var self__ = this;
var this__25479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25479__auto____$1),self__.__meta),k__25480__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25480__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25477__auto__,k__25478__auto__,G__33693){
var self__ = this;
var this__25477__auto____$1 = this;
var pred__33697 = cljs.core.keyword_identical_QMARK_;
var expr__33698 = k__25478__auto__;
if(cljs.core.truth_(pred__33697.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33698))){
return (new devcards.core.AtomLikeOptions(G__33693,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25478__auto__,G__33693),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25482__auto__){
var self__ = this;
var this__25482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25469__auto__,G__33693){
var self__ = this;
var this__25469__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__33693,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25475__auto__,entry__25476__auto__){
var self__ = this;
var this__25475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25476__auto__)){
return cljs.core._assoc.call(null,this__25475__auto____$1,cljs.core._nth.call(null,entry__25476__auto__,(0)),cljs.core._nth.call(null,entry__25476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25475__auto____$1,entry__25476__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__25504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__25504__auto__,writer__25505__auto__){
return cljs.core._write.call(null,writer__25505__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__33695){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33695),null,cljs.core.dissoc.call(null,G__33695,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25470__auto__,k__25471__auto__){
var self__ = this;
var this__25470__auto____$1 = this;
return cljs.core._lookup.call(null,this__25470__auto____$1,k__25471__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25472__auto__,k33704,else__25473__auto__){
var self__ = this;
var this__25472__auto____$1 = this;
var G__33706 = (((k33704 instanceof cljs.core.Keyword))?k33704.fqn:null);
switch (G__33706) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33704,else__25473__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25484__auto__,writer__25485__auto__,opts__25486__auto__){
var self__ = this;
var this__25484__auto____$1 = this;
var pr_pair__25487__auto__ = ((function (this__25484__auto____$1){
return (function (keyval__25488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,cljs.core.pr_writer,""," ","",opts__25486__auto__,keyval__25488__auto__);
});})(this__25484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,pr_pair__25487__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__25486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33703){
var self__ = this;
var G__33703__$1 = this;
return (new cljs.core.RecordIter((0),G__33703__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25468__auto__){
var self__ = this;
var this__25468__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25464__auto__){
var self__ = this;
var this__25464__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25474__auto__){
var self__ = this;
var this__25474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25465__auto__){
var self__ = this;
var this__25465__auto____$1 = this;
var h__25283__auto__ = self__.__hash;
if(!((h__25283__auto__ == null))){
return h__25283__auto__;
} else {
var h__25283__auto____$1 = cljs.core.hash_imap.call(null,this__25465__auto____$1);
self__.__hash = h__25283__auto____$1;

return h__25283__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25466__auto__,other__25467__auto__){
var self__ = this;
var this__25466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24836__auto__ = other__25467__auto__;
if(cljs.core.truth_(and__24836__auto__)){
var and__24836__auto____$1 = (this__25466__auto____$1.constructor === other__25467__auto__.constructor);
if(and__24836__auto____$1){
return cljs.core.equiv_map.call(null,this__25466__auto____$1,other__25467__auto__);
} else {
return and__24836__auto____$1;
}
} else {
return and__24836__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25479__auto__,k__25480__auto__){
var self__ = this;
var this__25479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25479__auto____$1),self__.__meta),k__25480__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25480__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25477__auto__,k__25478__auto__,G__33703){
var self__ = this;
var this__25477__auto____$1 = this;
var pred__33707 = cljs.core.keyword_identical_QMARK_;
var expr__33708 = k__25478__auto__;
if(cljs.core.truth_(pred__33707.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33708))){
return (new devcards.core.EdnLikeOptions(G__33703,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25478__auto__,G__33703),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25482__auto__){
var self__ = this;
var this__25482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25469__auto__,G__33703){
var self__ = this;
var this__25469__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__33703,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25475__auto__,entry__25476__auto__){
var self__ = this;
var this__25475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25476__auto__)){
return cljs.core._assoc.call(null,this__25475__auto____$1,cljs.core._nth.call(null,entry__25476__auto__,(0)),cljs.core._nth.call(null,entry__25476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25475__auto____$1,entry__25476__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__25504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__25504__auto__,writer__25505__auto__){
return cljs.core._write.call(null,writer__25505__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__33705){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33705),null,cljs.core.dissoc.call(null,G__33705,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__24836__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__24836__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__24836__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__33722 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__33722 == null))){
if((false) || (G__33722.devcards$core$IDevcard$)){
return true;
} else {
if((!G__33722.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__33722);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__33722);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__33725 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__33725__$1 = ((((!((map__33725 == null)))?((((map__33725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33725):map__33725);
var history = cljs.core.get.call(null,map__33725__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33725__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__33729 = cljs.core.deref.call(null,history_atom);
var map__33729__$1 = ((((!((map__33729 == null)))?((((map__33729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33729):map__33729);
var history = cljs.core.get.call(null,map__33729__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33729__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__33733 = cljs.core.deref.call(null,history_atom);
var map__33733__$1 = ((((!((map__33733 == null)))?((((map__33733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33733):map__33733);
var history = cljs.core.get.call(null,map__33733__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33733__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__33737 = cljs.core.deref.call(null,history_atom);
var map__33737__$1 = ((((!((map__33737 == null)))?((((map__33737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33737):map__33737);
var history = cljs.core.get.call(null,map__33737__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__25682__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__24836__auto__ = data_atom;
if(cljs.core.truth_(and__24836__auto__)){
return id;
} else {
return and__24836__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__33739){
var map__33740 = p__33739;
var map__33740__$1 = ((((!((map__33740 == null)))?((((map__33740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33740):map__33740);
var ha = map__33740__$1;
var pointer = cljs.core.get.call(null,map__33740__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__33740__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__33740__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__24848__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__24848__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_33756 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_33756;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__25773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25774__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25775__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25776__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25777__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25777__auto__,method_table__25773__auto__,prefer_table__25774__auto__,method_cache__25775__auto__,cached_hierarchy__25776__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs33757 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33757))?sablono.interpreter.attributes.call(null,attrs33757):null),((cljs.core.map_QMARK_.call(null,attrs33757))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33757)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__33758,body){
var map__33762 = p__33758;
var map__33762__$1 = ((((!((map__33762 == null)))?((((map__33762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33762):map__33762);
var message = cljs.core.get.call(null,map__33762__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs33764 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs33764))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs33764)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs33764))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33764)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__33765){
var map__33773 = p__33765;
var map__33773__$1 = ((((!((map__33773 == null)))?((((map__33773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33773):map__33773);
var m = map__33773__$1;
var expected = cljs.core.get.call(null,map__33773__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__33773__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__33773__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs33775 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33775))?sablono.interpreter.attributes.call(null,attrs33775):null),((cljs.core.map_QMARK_.call(null,attrs33775))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33775),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs33782 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs33782))?sablono.interpreter.attributes.call(null,attrs33782):null),((cljs.core.map_QMARK_.call(null,attrs33782))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33782)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs33783 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33783))?sablono.interpreter.attributes.call(null,attrs33783):null),((cljs.core.map_QMARK_.call(null,attrs33783))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33783)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__33784){
var map__33785 = p__33784;
var map__33785__$1 = ((((!((map__33785 == null)))?((((map__33785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33785):map__33785);
var testing_contexts = cljs.core.get.call(null,map__33785__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs33787 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__33785,map__33785__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__33785,map__33785__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__25682__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33787))?sablono.interpreter.attributes.call(null,attrs33787):null),((cljs.core.map_QMARK_.call(null,attrs33787))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33787)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs33796 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__33797,p__33798){
var map__33799 = p__33797;
var map__33799__$1 = ((((!((map__33799 == null)))?((((map__33799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33799):map__33799);
var last_context = cljs.core.get.call(null,map__33799__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__33799__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__33800 = p__33798;
var i = cljs.core.nth.call(null,vec__33800,(0),null);
var t = cljs.core.nth.call(null,vec__33800,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__25682__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33796))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs33796)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs33796))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33796)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__33816){
var map__33817 = p__33816;
var map__33817__$1 = ((((!((map__33817 == null)))?((((map__33817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33817):map__33817);
var type = cljs.core.get.call(null,map__33817__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__33815 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__33815__$1 = ((((!((map__33815 == null)))?((((map__33815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33815):map__33815);
var fail = cljs.core.get.call(null,map__33815__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__33815__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__33815__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1){
return (function (p__33820){
var map__33821 = p__33820;
var map__33821__$1 = ((((!((map__33821 == null)))?((((map__33821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33821):map__33821);
var type = cljs.core.get.call(null,map__33821__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1){
return (function (p__33823){
var map__33824 = p__33823;
var map__33824__$1 = ((((!((map__33824 == null)))?((((map__33824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33824):map__33824);
var type = cljs.core.get.call(null,map__33824__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33815,map__33815__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__24848__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__){
return (function (state_33914){
var state_val_33915 = (state_33914[(1)]);
if((state_val_33915 === (7))){
var state_33914__$1 = state_33914;
var statearr_33916_33965 = state_33914__$1;
(statearr_33916_33965[(2)] = false);

(statearr_33916_33965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (20))){
var inst_33853 = (state_33914[(7)]);
var inst_33872 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33853);
var state_33914__$1 = state_33914;
var statearr_33917_33966 = state_33914__$1;
(statearr_33917_33966[(2)] = inst_33872);

(statearr_33917_33966[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (27))){
var inst_33889 = (state_33914[(8)]);
var inst_33877 = (state_33914[(9)]);
var inst_33893 = inst_33877.call(null,inst_33889);
var state_33914__$1 = state_33914;
var statearr_33918_33967 = state_33914__$1;
(statearr_33918_33967[(2)] = inst_33893);

(statearr_33918_33967[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (1))){
var state_33914__$1 = state_33914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33914__$1,(2),devcards.core.test_channel);
} else {
if((state_val_33915 === (24))){
var state_33914__$1 = state_33914;
var statearr_33919_33968 = state_33914__$1;
(statearr_33919_33968[(2)] = null);

(statearr_33919_33968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (4))){
var state_33914__$1 = state_33914;
var statearr_33920_33969 = state_33914__$1;
(statearr_33920_33969[(2)] = false);

(statearr_33920_33969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (15))){
var state_33914__$1 = state_33914;
var statearr_33921_33970 = state_33914__$1;
(statearr_33921_33970[(2)] = false);

(statearr_33921_33970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (21))){
var inst_33853 = (state_33914[(7)]);
var state_33914__$1 = state_33914;
var statearr_33922_33971 = state_33914__$1;
(statearr_33922_33971[(2)] = inst_33853);

(statearr_33922_33971[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (13))){
var inst_33912 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33914__$1,inst_33912);
} else {
if((state_val_33915 === (22))){
var inst_33876 = (state_33914[(10)]);
var inst_33875 = (state_33914[(2)]);
var inst_33876__$1 = cljs.core.get.call(null,inst_33875,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_33877 = cljs.core.get.call(null,inst_33875,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_33914__$1 = (function (){var statearr_33923 = state_33914;
(statearr_33923[(9)] = inst_33877);

(statearr_33923[(10)] = inst_33876__$1);

return statearr_33923;
})();
if(cljs.core.truth_(inst_33876__$1)){
var statearr_33924_33972 = state_33914__$1;
(statearr_33924_33972[(1)] = (23));

} else {
var statearr_33925_33973 = state_33914__$1;
(statearr_33925_33973[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (29))){
var inst_33903 = (state_33914[(2)]);
var inst_33904 = cljs.test.clear_env_BANG_.call(null);
var state_33914__$1 = (function (){var statearr_33926 = state_33914;
(statearr_33926[(11)] = inst_33904);

(statearr_33926[(12)] = inst_33903);

return statearr_33926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33914__$1,(30),devcards.core.test_channel);
} else {
if((state_val_33915 === (6))){
var state_33914__$1 = state_33914;
var statearr_33927_33974 = state_33914__$1;
(statearr_33927_33974[(2)] = true);

(statearr_33927_33974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (28))){
var inst_33877 = (state_33914[(9)]);
var inst_33895 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_33896 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_33897 = cljs.core.PersistentHashMap.fromArrays(inst_33895,inst_33896);
var inst_33898 = devcards.core.collect_test.call(null,inst_33897);
var inst_33899 = cljs.test.get_current_env.call(null);
var inst_33900 = cljs.core.assoc.call(null,inst_33899,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_33901 = inst_33877.call(null,inst_33900);
var state_33914__$1 = (function (){var statearr_33928 = state_33914;
(statearr_33928[(13)] = inst_33898);

return statearr_33928;
})();
var statearr_33929_33975 = state_33914__$1;
(statearr_33929_33975[(2)] = inst_33901);

(statearr_33929_33975[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (25))){
var inst_33910 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
var statearr_33930_33976 = state_33914__$1;
(statearr_33930_33976[(2)] = inst_33910);

(statearr_33930_33976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (17))){
var state_33914__$1 = state_33914;
var statearr_33931_33977 = state_33914__$1;
(statearr_33931_33977[(2)] = true);

(statearr_33931_33977[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (3))){
var inst_33830 = (state_33914[(14)]);
var inst_33835 = inst_33830.cljs$lang$protocol_mask$partition0$;
var inst_33836 = (inst_33835 & (64));
var inst_33837 = inst_33830.cljs$core$ISeq$;
var inst_33838 = (inst_33836) || (inst_33837);
var state_33914__$1 = state_33914;
if(cljs.core.truth_(inst_33838)){
var statearr_33932_33978 = state_33914__$1;
(statearr_33932_33978[(1)] = (6));

} else {
var statearr_33933_33979 = state_33914__$1;
(statearr_33933_33979[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (12))){
var inst_33853 = (state_33914[(7)]);
var inst_33857 = (inst_33853 == null);
var inst_33858 = cljs.core.not.call(null,inst_33857);
var state_33914__$1 = state_33914;
if(inst_33858){
var statearr_33934_33980 = state_33914__$1;
(statearr_33934_33980[(1)] = (14));

} else {
var statearr_33935_33981 = state_33914__$1;
(statearr_33935_33981[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (2))){
var inst_33830 = (state_33914[(14)]);
var inst_33830__$1 = (state_33914[(2)]);
var inst_33832 = (inst_33830__$1 == null);
var inst_33833 = cljs.core.not.call(null,inst_33832);
var state_33914__$1 = (function (){var statearr_33936 = state_33914;
(statearr_33936[(14)] = inst_33830__$1);

return statearr_33936;
})();
if(inst_33833){
var statearr_33937_33982 = state_33914__$1;
(statearr_33937_33982[(1)] = (3));

} else {
var statearr_33938_33983 = state_33914__$1;
(statearr_33938_33983[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (23))){
var inst_33882 = (state_33914[(15)]);
var inst_33876 = (state_33914[(10)]);
var inst_33882__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_33883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33884 = devcards.core.run_card_tests.call(null,inst_33876);
var inst_33885 = [inst_33884,inst_33882__$1];
var inst_33886 = (new cljs.core.PersistentVector(null,2,(5),inst_33883,inst_33885,null));
var state_33914__$1 = (function (){var statearr_33939 = state_33914;
(statearr_33939[(15)] = inst_33882__$1);

return statearr_33939;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33914__$1,(26),inst_33886);
} else {
if((state_val_33915 === (19))){
var inst_33867 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
var statearr_33940_33984 = state_33914__$1;
(statearr_33940_33984[(2)] = inst_33867);

(statearr_33940_33984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (11))){
var inst_33830 = (state_33914[(14)]);
var inst_33850 = (state_33914[(2)]);
var inst_33851 = cljs.core.get.call(null,inst_33850,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_33852 = cljs.core.get.call(null,inst_33850,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_33853 = inst_33830;
var state_33914__$1 = (function (){var statearr_33941 = state_33914;
(statearr_33941[(16)] = inst_33852);

(statearr_33941[(7)] = inst_33853);

(statearr_33941[(17)] = inst_33851);

return statearr_33941;
})();
var statearr_33942_33985 = state_33914__$1;
(statearr_33942_33985[(2)] = null);

(statearr_33942_33985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (9))){
var inst_33830 = (state_33914[(14)]);
var inst_33847 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33830);
var state_33914__$1 = state_33914;
var statearr_33943_33986 = state_33914__$1;
(statearr_33943_33986[(2)] = inst_33847);

(statearr_33943_33986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (5))){
var inst_33845 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
if(cljs.core.truth_(inst_33845)){
var statearr_33944_33987 = state_33914__$1;
(statearr_33944_33987[(1)] = (9));

} else {
var statearr_33945_33988 = state_33914__$1;
(statearr_33945_33988[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (14))){
var inst_33853 = (state_33914[(7)]);
var inst_33860 = inst_33853.cljs$lang$protocol_mask$partition0$;
var inst_33861 = (inst_33860 & (64));
var inst_33862 = inst_33853.cljs$core$ISeq$;
var inst_33863 = (inst_33861) || (inst_33862);
var state_33914__$1 = state_33914;
if(cljs.core.truth_(inst_33863)){
var statearr_33946_33989 = state_33914__$1;
(statearr_33946_33989[(1)] = (17));

} else {
var statearr_33947_33990 = state_33914__$1;
(statearr_33947_33990[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (26))){
var inst_33882 = (state_33914[(15)]);
var inst_33888 = (state_33914[(2)]);
var inst_33889 = cljs.core.nth.call(null,inst_33888,(0),null);
var inst_33890 = cljs.core.nth.call(null,inst_33888,(1),null);
var inst_33891 = cljs.core.not_EQ_.call(null,inst_33890,inst_33882);
var state_33914__$1 = (function (){var statearr_33948 = state_33914;
(statearr_33948[(8)] = inst_33889);

return statearr_33948;
})();
if(inst_33891){
var statearr_33949_33991 = state_33914__$1;
(statearr_33949_33991[(1)] = (27));

} else {
var statearr_33950_33992 = state_33914__$1;
(statearr_33950_33992[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (16))){
var inst_33870 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
if(cljs.core.truth_(inst_33870)){
var statearr_33951_33993 = state_33914__$1;
(statearr_33951_33993[(1)] = (20));

} else {
var statearr_33952_33994 = state_33914__$1;
(statearr_33952_33994[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (30))){
var inst_33906 = (state_33914[(2)]);
var inst_33853 = inst_33906;
var state_33914__$1 = (function (){var statearr_33953 = state_33914;
(statearr_33953[(7)] = inst_33853);

return statearr_33953;
})();
var statearr_33954_33995 = state_33914__$1;
(statearr_33954_33995[(2)] = null);

(statearr_33954_33995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (10))){
var inst_33830 = (state_33914[(14)]);
var state_33914__$1 = state_33914;
var statearr_33955_33996 = state_33914__$1;
(statearr_33955_33996[(2)] = inst_33830);

(statearr_33955_33996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (18))){
var state_33914__$1 = state_33914;
var statearr_33956_33997 = state_33914__$1;
(statearr_33956_33997[(2)] = false);

(statearr_33956_33997[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (8))){
var inst_33842 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
var statearr_33957_33998 = state_33914__$1;
(statearr_33957_33998[(2)] = inst_33842);

(statearr_33957_33998[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28977__auto__))
;
return ((function (switch__28865__auto__,c__28977__auto__){
return (function() {
var devcards$core$state_machine__28866__auto__ = null;
var devcards$core$state_machine__28866__auto____0 = (function (){
var statearr_33961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33961[(0)] = devcards$core$state_machine__28866__auto__);

(statearr_33961[(1)] = (1));

return statearr_33961;
});
var devcards$core$state_machine__28866__auto____1 = (function (state_33914){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_33914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e33962){if((e33962 instanceof Object)){
var ex__28869__auto__ = e33962;
var statearr_33963_33999 = state_33914;
(statearr_33963_33999[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34000 = state_33914;
state_33914 = G__34000;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
devcards$core$state_machine__28866__auto__ = function(state_33914){
switch(arguments.length){
case 0:
return devcards$core$state_machine__28866__auto____0.call(this);
case 1:
return devcards$core$state_machine__28866__auto____1.call(this,state_33914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__28866__auto____0;
devcards$core$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__28866__auto____1;
return devcards$core$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__))
})();
var state__28979__auto__ = (function (){var statearr_33964 = f__28978__auto__.call(null);
(statearr_33964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_33964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__))
);

return c__28977__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__32715__auto___34005 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__32715__auto___34005);
}

var seq__34001_34006 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__34002_34007 = null;
var count__34003_34008 = (0);
var i__34004_34009 = (0);
while(true){
if((i__34004_34009 < count__34003_34008)){
var property__32716__auto___34010 = cljs.core._nth.call(null,chunk__34002_34007,i__34004_34009);
if(cljs.core.truth_((base__32715__auto___34005[property__32716__auto___34010]))){
(devcards.core.TestDevcard.prototype[property__32716__auto___34010] = (base__32715__auto___34005[property__32716__auto___34010]));
} else {
}

var G__34011 = seq__34001_34006;
var G__34012 = chunk__34002_34007;
var G__34013 = count__34003_34008;
var G__34014 = (i__34004_34009 + (1));
seq__34001_34006 = G__34011;
chunk__34002_34007 = G__34012;
count__34003_34008 = G__34013;
i__34004_34009 = G__34014;
continue;
} else {
var temp__4657__auto___34015 = cljs.core.seq.call(null,seq__34001_34006);
if(temp__4657__auto___34015){
var seq__34001_34016__$1 = temp__4657__auto___34015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34001_34016__$1)){
var c__25659__auto___34017 = cljs.core.chunk_first.call(null,seq__34001_34016__$1);
var G__34018 = cljs.core.chunk_rest.call(null,seq__34001_34016__$1);
var G__34019 = c__25659__auto___34017;
var G__34020 = cljs.core.count.call(null,c__25659__auto___34017);
var G__34021 = (0);
seq__34001_34006 = G__34018;
chunk__34002_34007 = G__34019;
count__34003_34008 = G__34020;
i__34004_34009 = G__34021;
continue;
} else {
var property__32716__auto___34022 = cljs.core.first.call(null,seq__34001_34016__$1);
if(cljs.core.truth_((base__32715__auto___34005[property__32716__auto___34022]))){
(devcards.core.TestDevcard.prototype[property__32716__auto___34022] = (base__32715__auto___34005[property__32716__auto___34022]));
} else {
}

var G__34023 = cljs.core.next.call(null,seq__34001_34016__$1);
var G__34024 = null;
var G__34025 = (0);
var G__34026 = (0);
seq__34001_34006 = G__34023;
chunk__34002_34007 = G__34024;
count__34003_34008 = G__34025;
i__34004_34009 = G__34026;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__25930__auto__ = [];
var len__25923__auto___34031 = arguments.length;
var i__25924__auto___34032 = (0);
while(true){
if((i__25924__auto___34032 < len__25923__auto___34031)){
args__25930__auto__.push((arguments[i__25924__auto___34032]));

var G__34033 = (i__25924__auto___34032 + (1));
i__25924__auto___34032 = G__34033;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core34028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core34028 = (function (test_thunks,meta34029){
this.test_thunks = test_thunks;
this.meta34029 = meta34029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core34028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34030,meta34029__$1){
var self__ = this;
var _34030__$1 = this;
return (new devcards.core.t_devcards$core34028(self__.test_thunks,meta34029__$1));
});

devcards.core.t_devcards$core34028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34030){
var self__ = this;
var _34030__$1 = this;
return self__.meta34029;
});

devcards.core.t_devcards$core34028.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core34028.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core34028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta34029","meta34029",2076966059,null)], null);
});

devcards.core.t_devcards$core34028.cljs$lang$type = true;

devcards.core.t_devcards$core34028.cljs$lang$ctorStr = "devcards.core/t_devcards$core34028";

devcards.core.t_devcards$core34028.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"devcards.core/t_devcards$core34028");
});

devcards.core.__GT_t_devcards$core34028 = (function devcards$core$__GT_t_devcards$core34028(test_thunks__$1,meta34029){
return (new devcards.core.t_devcards$core34028(test_thunks__$1,meta34029));
});

}

return (new devcards.core.t_devcards$core34028(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq34027){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34027));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs34035 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34035))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs34035)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs34035))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34035)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs34037 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34037))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs34037)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs34037))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34037)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__){
return (function (state_34067){
var state_val_34068 = (state_34067[(1)]);
if((state_val_34068 === (1))){
var inst_34058 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34067__$1,(2),inst_34058);
} else {
if((state_val_34068 === (2))){
var inst_34060 = (state_34067[(2)]);
var inst_34061 = cljs.core.async.timeout.call(null,(100));
var state_34067__$1 = (function (){var statearr_34069 = state_34067;
(statearr_34069[(7)] = inst_34060);

return statearr_34069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34067__$1,(3),inst_34061);
} else {
if((state_val_34068 === (3))){
var inst_34063 = (state_34067[(2)]);
var inst_34064 = (function (){return ((function (inst_34063,state_val_34068,c__28977__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_34063,state_val_34068,c__28977__auto__))
})();
var inst_34065 = setTimeout(inst_34064,(0));
var state_34067__$1 = (function (){var statearr_34070 = state_34067;
(statearr_34070[(8)] = inst_34063);

return statearr_34070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34067__$1,inst_34065);
} else {
return null;
}
}
}
});})(c__28977__auto__))
;
return ((function (switch__28865__auto__,c__28977__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__28866__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__28866__auto____0 = (function (){
var statearr_34074 = [null,null,null,null,null,null,null,null,null];
(statearr_34074[(0)] = devcards$core$mount_namespace_$_state_machine__28866__auto__);

(statearr_34074[(1)] = (1));

return statearr_34074;
});
var devcards$core$mount_namespace_$_state_machine__28866__auto____1 = (function (state_34067){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_34067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e34075){if((e34075 instanceof Object)){
var ex__28869__auto__ = e34075;
var statearr_34076_34078 = state_34067;
(statearr_34076_34078[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34079 = state_34067;
state_34067 = G__34079;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__28866__auto__ = function(state_34067){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__28866__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__28866__auto____1.call(this,state_34067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__28866__auto____0;
devcards$core$mount_namespace_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__28866__auto____1;
return devcards$core$mount_namespace_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__))
})();
var state__28979__auto__ = (function (){var statearr_34077 = f__28978__auto__.call(null);
(statearr_34077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_34077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__))
);

return c__28977__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1658328682493