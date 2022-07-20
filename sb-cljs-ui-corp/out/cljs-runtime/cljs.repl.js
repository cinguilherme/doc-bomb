goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10611){
var map__10612 = p__10611;
var map__10612__$1 = cljs.core.__destructure_map(map__10612);
var m = map__10612__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10612__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10613_10813 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10614_10814 = null;
var count__10615_10815 = (0);
var i__10616_10816 = (0);
while(true){
if((i__10616_10816 < count__10615_10815)){
var f_10817 = chunk__10614_10814.cljs$core$IIndexed$_nth$arity$2(null,i__10616_10816);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_10817], 0));


var G__10818 = seq__10613_10813;
var G__10819 = chunk__10614_10814;
var G__10820 = count__10615_10815;
var G__10821 = (i__10616_10816 + (1));
seq__10613_10813 = G__10818;
chunk__10614_10814 = G__10819;
count__10615_10815 = G__10820;
i__10616_10816 = G__10821;
continue;
} else {
var temp__5804__auto___10822 = cljs.core.seq(seq__10613_10813);
if(temp__5804__auto___10822){
var seq__10613_10823__$1 = temp__5804__auto___10822;
if(cljs.core.chunked_seq_QMARK_(seq__10613_10823__$1)){
var c__5568__auto___10824 = cljs.core.chunk_first(seq__10613_10823__$1);
var G__10825 = cljs.core.chunk_rest(seq__10613_10823__$1);
var G__10826 = c__5568__auto___10824;
var G__10827 = cljs.core.count(c__5568__auto___10824);
var G__10828 = (0);
seq__10613_10813 = G__10825;
chunk__10614_10814 = G__10826;
count__10615_10815 = G__10827;
i__10616_10816 = G__10828;
continue;
} else {
var f_10829 = cljs.core.first(seq__10613_10823__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_10829], 0));


var G__10830 = cljs.core.next(seq__10613_10823__$1);
var G__10831 = null;
var G__10832 = (0);
var G__10833 = (0);
seq__10613_10813 = G__10830;
chunk__10614_10814 = G__10831;
count__10615_10815 = G__10832;
i__10616_10816 = G__10833;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10834 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_10834], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_10834)))?cljs.core.second(arglists_10834):arglists_10834)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10617_10837 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10618_10838 = null;
var count__10619_10839 = (0);
var i__10620_10840 = (0);
while(true){
if((i__10620_10840 < count__10619_10839)){
var vec__10630_10841 = chunk__10618_10838.cljs$core$IIndexed$_nth$arity$2(null,i__10620_10840);
var name_10842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10630_10841,(0),null);
var map__10633_10843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10630_10841,(1),null);
var map__10633_10844__$1 = cljs.core.__destructure_map(map__10633_10843);
var doc_10845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10633_10844__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10633_10844__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_10842], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_10846], 0));

if(cljs.core.truth_(doc_10845)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_10845], 0));
} else {
}


var G__10847 = seq__10617_10837;
var G__10848 = chunk__10618_10838;
var G__10849 = count__10619_10839;
var G__10850 = (i__10620_10840 + (1));
seq__10617_10837 = G__10847;
chunk__10618_10838 = G__10848;
count__10619_10839 = G__10849;
i__10620_10840 = G__10850;
continue;
} else {
var temp__5804__auto___10851 = cljs.core.seq(seq__10617_10837);
if(temp__5804__auto___10851){
var seq__10617_10852__$1 = temp__5804__auto___10851;
if(cljs.core.chunked_seq_QMARK_(seq__10617_10852__$1)){
var c__5568__auto___10853 = cljs.core.chunk_first(seq__10617_10852__$1);
var G__10854 = cljs.core.chunk_rest(seq__10617_10852__$1);
var G__10855 = c__5568__auto___10853;
var G__10856 = cljs.core.count(c__5568__auto___10853);
var G__10857 = (0);
seq__10617_10837 = G__10854;
chunk__10618_10838 = G__10855;
count__10619_10839 = G__10856;
i__10620_10840 = G__10857;
continue;
} else {
var vec__10635_10858 = cljs.core.first(seq__10617_10852__$1);
var name_10859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10635_10858,(0),null);
var map__10638_10860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10635_10858,(1),null);
var map__10638_10861__$1 = cljs.core.__destructure_map(map__10638_10860);
var doc_10862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10638_10861__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10638_10861__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_10859], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_10863], 0));

if(cljs.core.truth_(doc_10862)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_10862], 0));
} else {
}


var G__10864 = cljs.core.next(seq__10617_10852__$1);
var G__10865 = null;
var G__10866 = (0);
var G__10867 = (0);
seq__10617_10837 = G__10864;
chunk__10618_10838 = G__10865;
count__10619_10839 = G__10866;
i__10620_10840 = G__10867;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__10641 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10642 = null;
var count__10643 = (0);
var i__10644 = (0);
while(true){
if((i__10644 < count__10643)){
var role = chunk__10642.cljs$core$IIndexed$_nth$arity$2(null,i__10644);
var temp__5804__auto___10869__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___10869__$1)){
var spec_10870 = temp__5804__auto___10869__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_10870)], 0));
} else {
}


var G__10871 = seq__10641;
var G__10872 = chunk__10642;
var G__10873 = count__10643;
var G__10874 = (i__10644 + (1));
seq__10641 = G__10871;
chunk__10642 = G__10872;
count__10643 = G__10873;
i__10644 = G__10874;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__10641);
if(temp__5804__auto____$1){
var seq__10641__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__10641__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__10641__$1);
var G__10875 = cljs.core.chunk_rest(seq__10641__$1);
var G__10876 = c__5568__auto__;
var G__10877 = cljs.core.count(c__5568__auto__);
var G__10878 = (0);
seq__10641 = G__10875;
chunk__10642 = G__10876;
count__10643 = G__10877;
i__10644 = G__10878;
continue;
} else {
var role = cljs.core.first(seq__10641__$1);
var temp__5804__auto___10879__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___10879__$2)){
var spec_10880 = temp__5804__auto___10879__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_10880)], 0));
} else {
}


var G__10881 = cljs.core.next(seq__10641__$1);
var G__10882 = null;
var G__10883 = (0);
var G__10884 = (0);
seq__10641 = G__10881;
chunk__10642 = G__10882;
count__10643 = G__10883;
i__10644 = G__10884;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__10885 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__10886 = cljs.core.ex_cause(t);
via = G__10885;
t = G__10886;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__10653 = datafied_throwable;
var map__10653__$1 = cljs.core.__destructure_map(map__10653);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10653__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10653__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10653__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__10654 = cljs.core.last(via);
var map__10654__$1 = cljs.core.__destructure_map(map__10654);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10654__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10654__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10654__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__10655 = data;
var map__10655__$1 = cljs.core.__destructure_map(map__10655);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10655__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10655__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10655__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__10657 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__10657__$1 = cljs.core.__destructure_map(map__10657);
var top_data = map__10657__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10657__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__10659 = phase;
var G__10659__$1 = (((G__10659 instanceof cljs.core.Keyword))?G__10659.fqn:null);
switch (G__10659__$1) {
case "read-source":
var map__10660 = data;
var map__10660__$1 = cljs.core.__destructure_map(map__10660);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10660__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10660__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__10661 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__10661__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10661,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10661);
var G__10661__$2 = (cljs.core.truth_((function (){var fexpr__10662 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__10662.cljs$core$IFn$_invoke$arity$1 ? fexpr__10662.cljs$core$IFn$_invoke$arity$1(source) : fexpr__10662.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__10661__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10661__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10661__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10661__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__10663 = top_data;
var G__10663__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10663,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10663);
var G__10663__$2 = (cljs.core.truth_((function (){var fexpr__10664 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__10664.cljs$core$IFn$_invoke$arity$1 ? fexpr__10664.cljs$core$IFn$_invoke$arity$1(source) : fexpr__10664.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__10663__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10663__$1);
var G__10663__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10663__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10663__$2);
var G__10663__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10663__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10663__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10663__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10663__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__10665 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10665,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10665,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10665,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10665,(3),null);
var G__10668 = top_data;
var G__10668__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10668,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__10668);
var G__10668__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10668__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__10668__$1);
var G__10668__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10668__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__10668__$2);
var G__10668__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10668__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10668__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10668__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10668__$4;
}

break;
case "execution":
var vec__10673 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10673,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10673,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10673,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10673,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__10652_SHARP_){
var or__5045__auto__ = (p1__10652_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__10689 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__10689.cljs$core$IFn$_invoke$arity$1 ? fexpr__10689.cljs$core$IFn$_invoke$arity$1(p1__10652_SHARP_) : fexpr__10689.call(null,p1__10652_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__10690 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__10690__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10690,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__10690);
var G__10690__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10690__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10690__$1);
var G__10690__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10690__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__10690__$2);
var G__10690__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10690__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__10690__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10690__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10690__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10659__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__10714){
var map__10715 = p__10714;
var map__10715__$1 = cljs.core.__destructure_map(map__10715);
var triage_data = map__10715__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10715__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10715__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10715__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10715__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10715__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10715__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10715__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10715__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__10747 = phase;
var G__10747__$1 = (((G__10747 instanceof cljs.core.Keyword))?G__10747.fqn:null);
switch (G__10747__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__10748 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__10749 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__10750 = loc;
var G__10751 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10757_10897 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10758_10898 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10760_10899 = true;
var _STAR_print_fn_STAR__temp_val__10761_10900 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10760_10899);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10761_10900);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10698_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__10698_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10758_10898);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10757_10897);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__10748,G__10749,G__10750,G__10751) : format.call(null,G__10748,G__10749,G__10750,G__10751));

break;
case "macroexpansion":
var G__10778 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__10779 = cause_type;
var G__10780 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__10781 = loc;
var G__10782 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__10778,G__10779,G__10780,G__10781,G__10782) : format.call(null,G__10778,G__10779,G__10780,G__10781,G__10782));

break;
case "compile-syntax-check":
var G__10783 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__10784 = cause_type;
var G__10785 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__10786 = loc;
var G__10787 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__10783,G__10784,G__10785,G__10786,G__10787) : format.call(null,G__10783,G__10784,G__10785,G__10786,G__10787));

break;
case "compilation":
var G__10788 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__10789 = cause_type;
var G__10790 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__10791 = loc;
var G__10792 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__10788,G__10789,G__10790,G__10791,G__10792) : format.call(null,G__10788,G__10789,G__10790,G__10791,G__10792));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__10797 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__10798 = symbol;
var G__10799 = loc;
var G__10800 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10801_10902 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10802_10903 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10803_10904 = true;
var _STAR_print_fn_STAR__temp_val__10804_10905 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10803_10904);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10804_10905);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10704_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__10704_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10802_10903);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10801_10902);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__10797,G__10798,G__10799,G__10800) : format.call(null,G__10797,G__10798,G__10799,G__10800));
} else {
var G__10806 = "Execution error%s at %s(%s).\n%s\n";
var G__10807 = cause_type;
var G__10808 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__10809 = loc;
var G__10810 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__10806,G__10807,G__10808,G__10809,G__10810) : format.call(null,G__10806,G__10807,G__10808,G__10809,G__10810));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10747__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
