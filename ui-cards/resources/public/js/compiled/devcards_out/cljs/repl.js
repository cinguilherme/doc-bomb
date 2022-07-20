// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36457){
var map__36482 = p__36457;
var map__36482__$1 = ((((!((map__36482 == null)))?((((map__36482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36482):map__36482);
var m = map__36482__$1;
var n = cljs.core.get.call(null,map__36482__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36484_36506 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36485_36507 = null;
var count__36486_36508 = (0);
var i__36487_36509 = (0);
while(true){
if((i__36487_36509 < count__36486_36508)){
var f_36510 = cljs.core._nth.call(null,chunk__36485_36507,i__36487_36509);
cljs.core.println.call(null,"  ",f_36510);

var G__36511 = seq__36484_36506;
var G__36512 = chunk__36485_36507;
var G__36513 = count__36486_36508;
var G__36514 = (i__36487_36509 + (1));
seq__36484_36506 = G__36511;
chunk__36485_36507 = G__36512;
count__36486_36508 = G__36513;
i__36487_36509 = G__36514;
continue;
} else {
var temp__4657__auto___36515 = cljs.core.seq.call(null,seq__36484_36506);
if(temp__4657__auto___36515){
var seq__36484_36516__$1 = temp__4657__auto___36515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36484_36516__$1)){
var c__25659__auto___36517 = cljs.core.chunk_first.call(null,seq__36484_36516__$1);
var G__36518 = cljs.core.chunk_rest.call(null,seq__36484_36516__$1);
var G__36519 = c__25659__auto___36517;
var G__36520 = cljs.core.count.call(null,c__25659__auto___36517);
var G__36521 = (0);
seq__36484_36506 = G__36518;
chunk__36485_36507 = G__36519;
count__36486_36508 = G__36520;
i__36487_36509 = G__36521;
continue;
} else {
var f_36522 = cljs.core.first.call(null,seq__36484_36516__$1);
cljs.core.println.call(null,"  ",f_36522);

var G__36523 = cljs.core.next.call(null,seq__36484_36516__$1);
var G__36524 = null;
var G__36525 = (0);
var G__36526 = (0);
seq__36484_36506 = G__36523;
chunk__36485_36507 = G__36524;
count__36486_36508 = G__36525;
i__36487_36509 = G__36526;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36527 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36527);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36527)))?cljs.core.second.call(null,arglists_36527):arglists_36527));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36488_36528 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36489_36529 = null;
var count__36490_36530 = (0);
var i__36491_36531 = (0);
while(true){
if((i__36491_36531 < count__36490_36530)){
var vec__36492_36532 = cljs.core._nth.call(null,chunk__36489_36529,i__36491_36531);
var name_36533 = cljs.core.nth.call(null,vec__36492_36532,(0),null);
var map__36495_36534 = cljs.core.nth.call(null,vec__36492_36532,(1),null);
var map__36495_36535__$1 = ((((!((map__36495_36534 == null)))?((((map__36495_36534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36495_36534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36495_36534):map__36495_36534);
var doc_36536 = cljs.core.get.call(null,map__36495_36535__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36537 = cljs.core.get.call(null,map__36495_36535__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36533);

cljs.core.println.call(null," ",arglists_36537);

if(cljs.core.truth_(doc_36536)){
cljs.core.println.call(null," ",doc_36536);
} else {
}

var G__36538 = seq__36488_36528;
var G__36539 = chunk__36489_36529;
var G__36540 = count__36490_36530;
var G__36541 = (i__36491_36531 + (1));
seq__36488_36528 = G__36538;
chunk__36489_36529 = G__36539;
count__36490_36530 = G__36540;
i__36491_36531 = G__36541;
continue;
} else {
var temp__4657__auto___36542 = cljs.core.seq.call(null,seq__36488_36528);
if(temp__4657__auto___36542){
var seq__36488_36543__$1 = temp__4657__auto___36542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36488_36543__$1)){
var c__25659__auto___36544 = cljs.core.chunk_first.call(null,seq__36488_36543__$1);
var G__36545 = cljs.core.chunk_rest.call(null,seq__36488_36543__$1);
var G__36546 = c__25659__auto___36544;
var G__36547 = cljs.core.count.call(null,c__25659__auto___36544);
var G__36548 = (0);
seq__36488_36528 = G__36545;
chunk__36489_36529 = G__36546;
count__36490_36530 = G__36547;
i__36491_36531 = G__36548;
continue;
} else {
var vec__36497_36549 = cljs.core.first.call(null,seq__36488_36543__$1);
var name_36550 = cljs.core.nth.call(null,vec__36497_36549,(0),null);
var map__36500_36551 = cljs.core.nth.call(null,vec__36497_36549,(1),null);
var map__36500_36552__$1 = ((((!((map__36500_36551 == null)))?((((map__36500_36551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36500_36551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36500_36551):map__36500_36551);
var doc_36553 = cljs.core.get.call(null,map__36500_36552__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36554 = cljs.core.get.call(null,map__36500_36552__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36550);

cljs.core.println.call(null," ",arglists_36554);

if(cljs.core.truth_(doc_36553)){
cljs.core.println.call(null," ",doc_36553);
} else {
}

var G__36555 = cljs.core.next.call(null,seq__36488_36543__$1);
var G__36556 = null;
var G__36557 = (0);
var G__36558 = (0);
seq__36488_36528 = G__36555;
chunk__36489_36529 = G__36556;
count__36490_36530 = G__36557;
i__36491_36531 = G__36558;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36502 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36503 = null;
var count__36504 = (0);
var i__36505 = (0);
while(true){
if((i__36505 < count__36504)){
var role = cljs.core._nth.call(null,chunk__36503,i__36505);
var temp__4657__auto___36559__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36559__$1)){
var spec_36560 = temp__4657__auto___36559__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36560));
} else {
}

var G__36561 = seq__36502;
var G__36562 = chunk__36503;
var G__36563 = count__36504;
var G__36564 = (i__36505 + (1));
seq__36502 = G__36561;
chunk__36503 = G__36562;
count__36504 = G__36563;
i__36505 = G__36564;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36502);
if(temp__4657__auto____$1){
var seq__36502__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36502__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__36502__$1);
var G__36565 = cljs.core.chunk_rest.call(null,seq__36502__$1);
var G__36566 = c__25659__auto__;
var G__36567 = cljs.core.count.call(null,c__25659__auto__);
var G__36568 = (0);
seq__36502 = G__36565;
chunk__36503 = G__36566;
count__36504 = G__36567;
i__36505 = G__36568;
continue;
} else {
var role = cljs.core.first.call(null,seq__36502__$1);
var temp__4657__auto___36569__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36569__$2)){
var spec_36570 = temp__4657__auto___36569__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36570));
} else {
}

var G__36571 = cljs.core.next.call(null,seq__36502__$1);
var G__36572 = null;
var G__36573 = (0);
var G__36574 = (0);
seq__36502 = G__36571;
chunk__36503 = G__36572;
count__36504 = G__36573;
i__36505 = G__36574;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1658328683713