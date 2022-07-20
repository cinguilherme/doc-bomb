// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36307){
var map__36332 = p__36307;
var map__36332__$1 = ((((!((map__36332 == null)))?((((map__36332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36332):map__36332);
var m = map__36332__$1;
var n = cljs.core.get.call(null,map__36332__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36332__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36334_36356 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36335_36357 = null;
var count__36336_36358 = (0);
var i__36337_36359 = (0);
while(true){
if((i__36337_36359 < count__36336_36358)){
var f_36360 = cljs.core._nth.call(null,chunk__36335_36357,i__36337_36359);
cljs.core.println.call(null,"  ",f_36360);

var G__36361 = seq__36334_36356;
var G__36362 = chunk__36335_36357;
var G__36363 = count__36336_36358;
var G__36364 = (i__36337_36359 + (1));
seq__36334_36356 = G__36361;
chunk__36335_36357 = G__36362;
count__36336_36358 = G__36363;
i__36337_36359 = G__36364;
continue;
} else {
var temp__4657__auto___36365 = cljs.core.seq.call(null,seq__36334_36356);
if(temp__4657__auto___36365){
var seq__36334_36366__$1 = temp__4657__auto___36365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36334_36366__$1)){
var c__25659__auto___36367 = cljs.core.chunk_first.call(null,seq__36334_36366__$1);
var G__36368 = cljs.core.chunk_rest.call(null,seq__36334_36366__$1);
var G__36369 = c__25659__auto___36367;
var G__36370 = cljs.core.count.call(null,c__25659__auto___36367);
var G__36371 = (0);
seq__36334_36356 = G__36368;
chunk__36335_36357 = G__36369;
count__36336_36358 = G__36370;
i__36337_36359 = G__36371;
continue;
} else {
var f_36372 = cljs.core.first.call(null,seq__36334_36366__$1);
cljs.core.println.call(null,"  ",f_36372);

var G__36373 = cljs.core.next.call(null,seq__36334_36366__$1);
var G__36374 = null;
var G__36375 = (0);
var G__36376 = (0);
seq__36334_36356 = G__36373;
chunk__36335_36357 = G__36374;
count__36336_36358 = G__36375;
i__36337_36359 = G__36376;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36377 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36377);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36377)))?cljs.core.second.call(null,arglists_36377):arglists_36377));
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
var seq__36338_36378 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36339_36379 = null;
var count__36340_36380 = (0);
var i__36341_36381 = (0);
while(true){
if((i__36341_36381 < count__36340_36380)){
var vec__36342_36382 = cljs.core._nth.call(null,chunk__36339_36379,i__36341_36381);
var name_36383 = cljs.core.nth.call(null,vec__36342_36382,(0),null);
var map__36345_36384 = cljs.core.nth.call(null,vec__36342_36382,(1),null);
var map__36345_36385__$1 = ((((!((map__36345_36384 == null)))?((((map__36345_36384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36345_36384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36345_36384):map__36345_36384);
var doc_36386 = cljs.core.get.call(null,map__36345_36385__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36387 = cljs.core.get.call(null,map__36345_36385__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36383);

cljs.core.println.call(null," ",arglists_36387);

if(cljs.core.truth_(doc_36386)){
cljs.core.println.call(null," ",doc_36386);
} else {
}

var G__36388 = seq__36338_36378;
var G__36389 = chunk__36339_36379;
var G__36390 = count__36340_36380;
var G__36391 = (i__36341_36381 + (1));
seq__36338_36378 = G__36388;
chunk__36339_36379 = G__36389;
count__36340_36380 = G__36390;
i__36341_36381 = G__36391;
continue;
} else {
var temp__4657__auto___36392 = cljs.core.seq.call(null,seq__36338_36378);
if(temp__4657__auto___36392){
var seq__36338_36393__$1 = temp__4657__auto___36392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36338_36393__$1)){
var c__25659__auto___36394 = cljs.core.chunk_first.call(null,seq__36338_36393__$1);
var G__36395 = cljs.core.chunk_rest.call(null,seq__36338_36393__$1);
var G__36396 = c__25659__auto___36394;
var G__36397 = cljs.core.count.call(null,c__25659__auto___36394);
var G__36398 = (0);
seq__36338_36378 = G__36395;
chunk__36339_36379 = G__36396;
count__36340_36380 = G__36397;
i__36341_36381 = G__36398;
continue;
} else {
var vec__36347_36399 = cljs.core.first.call(null,seq__36338_36393__$1);
var name_36400 = cljs.core.nth.call(null,vec__36347_36399,(0),null);
var map__36350_36401 = cljs.core.nth.call(null,vec__36347_36399,(1),null);
var map__36350_36402__$1 = ((((!((map__36350_36401 == null)))?((((map__36350_36401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36350_36401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36350_36401):map__36350_36401);
var doc_36403 = cljs.core.get.call(null,map__36350_36402__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36404 = cljs.core.get.call(null,map__36350_36402__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36400);

cljs.core.println.call(null," ",arglists_36404);

if(cljs.core.truth_(doc_36403)){
cljs.core.println.call(null," ",doc_36403);
} else {
}

var G__36405 = cljs.core.next.call(null,seq__36338_36393__$1);
var G__36406 = null;
var G__36407 = (0);
var G__36408 = (0);
seq__36338_36378 = G__36405;
chunk__36339_36379 = G__36406;
count__36340_36380 = G__36407;
i__36341_36381 = G__36408;
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

var seq__36352 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36353 = null;
var count__36354 = (0);
var i__36355 = (0);
while(true){
if((i__36355 < count__36354)){
var role = cljs.core._nth.call(null,chunk__36353,i__36355);
var temp__4657__auto___36409__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36409__$1)){
var spec_36410 = temp__4657__auto___36409__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36410));
} else {
}

var G__36411 = seq__36352;
var G__36412 = chunk__36353;
var G__36413 = count__36354;
var G__36414 = (i__36355 + (1));
seq__36352 = G__36411;
chunk__36353 = G__36412;
count__36354 = G__36413;
i__36355 = G__36414;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36352);
if(temp__4657__auto____$1){
var seq__36352__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36352__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__36352__$1);
var G__36415 = cljs.core.chunk_rest.call(null,seq__36352__$1);
var G__36416 = c__25659__auto__;
var G__36417 = cljs.core.count.call(null,c__25659__auto__);
var G__36418 = (0);
seq__36352 = G__36415;
chunk__36353 = G__36416;
count__36354 = G__36417;
i__36355 = G__36418;
continue;
} else {
var role = cljs.core.first.call(null,seq__36352__$1);
var temp__4657__auto___36419__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36419__$2)){
var spec_36420 = temp__4657__auto___36419__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36420));
} else {
}

var G__36421 = cljs.core.next.call(null,seq__36352__$1);
var G__36422 = null;
var G__36423 = (0);
var G__36424 = (0);
seq__36352 = G__36421;
chunk__36353 = G__36422;
count__36354 = G__36423;
i__36355 = G__36424;
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

//# sourceMappingURL=repl.js.map?rel=1658325514277