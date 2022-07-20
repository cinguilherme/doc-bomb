// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24848__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24848__auto__){
return or__24848__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24848__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33972_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33972_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33977 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33978 = null;
var count__33979 = (0);
var i__33980 = (0);
while(true){
if((i__33980 < count__33979)){
var n = cljs.core._nth.call(null,chunk__33978,i__33980);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33981 = seq__33977;
var G__33982 = chunk__33978;
var G__33983 = count__33979;
var G__33984 = (i__33980 + (1));
seq__33977 = G__33981;
chunk__33978 = G__33982;
count__33979 = G__33983;
i__33980 = G__33984;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33977);
if(temp__4657__auto__){
var seq__33977__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33977__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__33977__$1);
var G__33985 = cljs.core.chunk_rest.call(null,seq__33977__$1);
var G__33986 = c__25659__auto__;
var G__33987 = cljs.core.count.call(null,c__25659__auto__);
var G__33988 = (0);
seq__33977 = G__33985;
chunk__33978 = G__33986;
count__33979 = G__33987;
i__33980 = G__33988;
continue;
} else {
var n = cljs.core.first.call(null,seq__33977__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33989 = cljs.core.next.call(null,seq__33977__$1);
var G__33990 = null;
var G__33991 = (0);
var G__33992 = (0);
seq__33977 = G__33989;
chunk__33978 = G__33990;
count__33979 = G__33991;
i__33980 = G__33992;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34043_34054 = cljs.core.seq.call(null,deps);
var chunk__34044_34055 = null;
var count__34045_34056 = (0);
var i__34046_34057 = (0);
while(true){
if((i__34046_34057 < count__34045_34056)){
var dep_34058 = cljs.core._nth.call(null,chunk__34044_34055,i__34046_34057);
topo_sort_helper_STAR_.call(null,dep_34058,(depth + (1)),state);

var G__34059 = seq__34043_34054;
var G__34060 = chunk__34044_34055;
var G__34061 = count__34045_34056;
var G__34062 = (i__34046_34057 + (1));
seq__34043_34054 = G__34059;
chunk__34044_34055 = G__34060;
count__34045_34056 = G__34061;
i__34046_34057 = G__34062;
continue;
} else {
var temp__4657__auto___34063 = cljs.core.seq.call(null,seq__34043_34054);
if(temp__4657__auto___34063){
var seq__34043_34064__$1 = temp__4657__auto___34063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34043_34064__$1)){
var c__25659__auto___34065 = cljs.core.chunk_first.call(null,seq__34043_34064__$1);
var G__34066 = cljs.core.chunk_rest.call(null,seq__34043_34064__$1);
var G__34067 = c__25659__auto___34065;
var G__34068 = cljs.core.count.call(null,c__25659__auto___34065);
var G__34069 = (0);
seq__34043_34054 = G__34066;
chunk__34044_34055 = G__34067;
count__34045_34056 = G__34068;
i__34046_34057 = G__34069;
continue;
} else {
var dep_34070 = cljs.core.first.call(null,seq__34043_34064__$1);
topo_sort_helper_STAR_.call(null,dep_34070,(depth + (1)),state);

var G__34071 = cljs.core.next.call(null,seq__34043_34064__$1);
var G__34072 = null;
var G__34073 = (0);
var G__34074 = (0);
seq__34043_34054 = G__34071;
chunk__34044_34055 = G__34072;
count__34045_34056 = G__34073;
i__34046_34057 = G__34074;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34047){
var vec__34051 = p__34047;
var seq__34052 = cljs.core.seq.call(null,vec__34051);
var first__34053 = cljs.core.first.call(null,seq__34052);
var seq__34052__$1 = cljs.core.next.call(null,seq__34052);
var x = first__34053;
var xs = seq__34052__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34051,seq__34052,first__34053,seq__34052__$1,x,xs,get_deps__$1){
return (function (p1__33993_SHARP_){
return clojure.set.difference.call(null,p1__33993_SHARP_,x);
});})(vec__34051,seq__34052,first__34053,seq__34052__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34087 = cljs.core.seq.call(null,provides);
var chunk__34088 = null;
var count__34089 = (0);
var i__34090 = (0);
while(true){
if((i__34090 < count__34089)){
var prov = cljs.core._nth.call(null,chunk__34088,i__34090);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34091_34099 = cljs.core.seq.call(null,requires);
var chunk__34092_34100 = null;
var count__34093_34101 = (0);
var i__34094_34102 = (0);
while(true){
if((i__34094_34102 < count__34093_34101)){
var req_34103 = cljs.core._nth.call(null,chunk__34092_34100,i__34094_34102);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34103,prov);

var G__34104 = seq__34091_34099;
var G__34105 = chunk__34092_34100;
var G__34106 = count__34093_34101;
var G__34107 = (i__34094_34102 + (1));
seq__34091_34099 = G__34104;
chunk__34092_34100 = G__34105;
count__34093_34101 = G__34106;
i__34094_34102 = G__34107;
continue;
} else {
var temp__4657__auto___34108 = cljs.core.seq.call(null,seq__34091_34099);
if(temp__4657__auto___34108){
var seq__34091_34109__$1 = temp__4657__auto___34108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34091_34109__$1)){
var c__25659__auto___34110 = cljs.core.chunk_first.call(null,seq__34091_34109__$1);
var G__34111 = cljs.core.chunk_rest.call(null,seq__34091_34109__$1);
var G__34112 = c__25659__auto___34110;
var G__34113 = cljs.core.count.call(null,c__25659__auto___34110);
var G__34114 = (0);
seq__34091_34099 = G__34111;
chunk__34092_34100 = G__34112;
count__34093_34101 = G__34113;
i__34094_34102 = G__34114;
continue;
} else {
var req_34115 = cljs.core.first.call(null,seq__34091_34109__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34115,prov);

var G__34116 = cljs.core.next.call(null,seq__34091_34109__$1);
var G__34117 = null;
var G__34118 = (0);
var G__34119 = (0);
seq__34091_34099 = G__34116;
chunk__34092_34100 = G__34117;
count__34093_34101 = G__34118;
i__34094_34102 = G__34119;
continue;
}
} else {
}
}
break;
}

var G__34120 = seq__34087;
var G__34121 = chunk__34088;
var G__34122 = count__34089;
var G__34123 = (i__34090 + (1));
seq__34087 = G__34120;
chunk__34088 = G__34121;
count__34089 = G__34122;
i__34090 = G__34123;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34087);
if(temp__4657__auto__){
var seq__34087__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34087__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34087__$1);
var G__34124 = cljs.core.chunk_rest.call(null,seq__34087__$1);
var G__34125 = c__25659__auto__;
var G__34126 = cljs.core.count.call(null,c__25659__auto__);
var G__34127 = (0);
seq__34087 = G__34124;
chunk__34088 = G__34125;
count__34089 = G__34126;
i__34090 = G__34127;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34087__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34095_34128 = cljs.core.seq.call(null,requires);
var chunk__34096_34129 = null;
var count__34097_34130 = (0);
var i__34098_34131 = (0);
while(true){
if((i__34098_34131 < count__34097_34130)){
var req_34132 = cljs.core._nth.call(null,chunk__34096_34129,i__34098_34131);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34132,prov);

var G__34133 = seq__34095_34128;
var G__34134 = chunk__34096_34129;
var G__34135 = count__34097_34130;
var G__34136 = (i__34098_34131 + (1));
seq__34095_34128 = G__34133;
chunk__34096_34129 = G__34134;
count__34097_34130 = G__34135;
i__34098_34131 = G__34136;
continue;
} else {
var temp__4657__auto___34137__$1 = cljs.core.seq.call(null,seq__34095_34128);
if(temp__4657__auto___34137__$1){
var seq__34095_34138__$1 = temp__4657__auto___34137__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34095_34138__$1)){
var c__25659__auto___34139 = cljs.core.chunk_first.call(null,seq__34095_34138__$1);
var G__34140 = cljs.core.chunk_rest.call(null,seq__34095_34138__$1);
var G__34141 = c__25659__auto___34139;
var G__34142 = cljs.core.count.call(null,c__25659__auto___34139);
var G__34143 = (0);
seq__34095_34128 = G__34140;
chunk__34096_34129 = G__34141;
count__34097_34130 = G__34142;
i__34098_34131 = G__34143;
continue;
} else {
var req_34144 = cljs.core.first.call(null,seq__34095_34138__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34144,prov);

var G__34145 = cljs.core.next.call(null,seq__34095_34138__$1);
var G__34146 = null;
var G__34147 = (0);
var G__34148 = (0);
seq__34095_34128 = G__34145;
chunk__34096_34129 = G__34146;
count__34097_34130 = G__34147;
i__34098_34131 = G__34148;
continue;
}
} else {
}
}
break;
}

var G__34149 = cljs.core.next.call(null,seq__34087__$1);
var G__34150 = null;
var G__34151 = (0);
var G__34152 = (0);
seq__34087 = G__34149;
chunk__34088 = G__34150;
count__34089 = G__34151;
i__34090 = G__34152;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34157_34161 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34158_34162 = null;
var count__34159_34163 = (0);
var i__34160_34164 = (0);
while(true){
if((i__34160_34164 < count__34159_34163)){
var ns_34165 = cljs.core._nth.call(null,chunk__34158_34162,i__34160_34164);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34165);

var G__34166 = seq__34157_34161;
var G__34167 = chunk__34158_34162;
var G__34168 = count__34159_34163;
var G__34169 = (i__34160_34164 + (1));
seq__34157_34161 = G__34166;
chunk__34158_34162 = G__34167;
count__34159_34163 = G__34168;
i__34160_34164 = G__34169;
continue;
} else {
var temp__4657__auto___34170 = cljs.core.seq.call(null,seq__34157_34161);
if(temp__4657__auto___34170){
var seq__34157_34171__$1 = temp__4657__auto___34170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34157_34171__$1)){
var c__25659__auto___34172 = cljs.core.chunk_first.call(null,seq__34157_34171__$1);
var G__34173 = cljs.core.chunk_rest.call(null,seq__34157_34171__$1);
var G__34174 = c__25659__auto___34172;
var G__34175 = cljs.core.count.call(null,c__25659__auto___34172);
var G__34176 = (0);
seq__34157_34161 = G__34173;
chunk__34158_34162 = G__34174;
count__34159_34163 = G__34175;
i__34160_34164 = G__34176;
continue;
} else {
var ns_34177 = cljs.core.first.call(null,seq__34157_34171__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34177);

var G__34178 = cljs.core.next.call(null,seq__34157_34171__$1);
var G__34179 = null;
var G__34180 = (0);
var G__34181 = (0);
seq__34157_34161 = G__34178;
chunk__34158_34162 = G__34179;
count__34159_34163 = G__34180;
i__34160_34164 = G__34181;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24848__auto__ = goog.require__;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34182__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34183__i = 0, G__34183__a = new Array(arguments.length -  0);
while (G__34183__i < G__34183__a.length) {G__34183__a[G__34183__i] = arguments[G__34183__i + 0]; ++G__34183__i;}
  args = new cljs.core.IndexedSeq(G__34183__a,0);
} 
return G__34182__delegate.call(this,args);};
G__34182.cljs$lang$maxFixedArity = 0;
G__34182.cljs$lang$applyTo = (function (arglist__34184){
var args = cljs.core.seq(arglist__34184);
return G__34182__delegate(args);
});
G__34182.cljs$core$IFn$_invoke$arity$variadic = G__34182__delegate;
return G__34182;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34185 = cljs.core._EQ_;
var expr__34186 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34185.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34186))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34185,expr__34186){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34185,expr__34186))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34185,expr__34186){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34188){if((e34188 instanceof Error)){
var e = e34188;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34188;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34185,expr__34186))
} else {
if(cljs.core.truth_(pred__34185.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34186))){
return ((function (pred__34185,expr__34186){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34185,expr__34186){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34185,expr__34186))
);

return deferred.addErrback(((function (deferred,pred__34185,expr__34186){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34185,expr__34186))
);
});
;})(pred__34185,expr__34186))
} else {
if(cljs.core.truth_(pred__34185.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34186))){
return ((function (pred__34185,expr__34186){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34189){if((e34189 instanceof Error)){
var e = e34189;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34189;

}
}})());
});
;})(pred__34185,expr__34186))
} else {
return ((function (pred__34185,expr__34186){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34185,expr__34186))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34190,callback){
var map__34193 = p__34190;
var map__34193__$1 = ((((!((map__34193 == null)))?((((map__34193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34193):map__34193);
var file_msg = map__34193__$1;
var request_url = cljs.core.get.call(null,map__34193__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34193,map__34193__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34193,map__34193__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto__){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto__){
return (function (state_34217){
var state_val_34218 = (state_34217[(1)]);
if((state_val_34218 === (7))){
var inst_34213 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34219_34239 = state_34217__$1;
(statearr_34219_34239[(2)] = inst_34213);

(statearr_34219_34239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (1))){
var state_34217__$1 = state_34217;
var statearr_34220_34240 = state_34217__$1;
(statearr_34220_34240[(2)] = null);

(statearr_34220_34240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (4))){
var inst_34197 = (state_34217[(7)]);
var inst_34197__$1 = (state_34217[(2)]);
var state_34217__$1 = (function (){var statearr_34221 = state_34217;
(statearr_34221[(7)] = inst_34197__$1);

return statearr_34221;
})();
if(cljs.core.truth_(inst_34197__$1)){
var statearr_34222_34241 = state_34217__$1;
(statearr_34222_34241[(1)] = (5));

} else {
var statearr_34223_34242 = state_34217__$1;
(statearr_34223_34242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (6))){
var state_34217__$1 = state_34217;
var statearr_34224_34243 = state_34217__$1;
(statearr_34224_34243[(2)] = null);

(statearr_34224_34243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (3))){
var inst_34215 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34217__$1,inst_34215);
} else {
if((state_val_34218 === (2))){
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34217__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34218 === (11))){
var inst_34209 = (state_34217[(2)]);
var state_34217__$1 = (function (){var statearr_34225 = state_34217;
(statearr_34225[(8)] = inst_34209);

return statearr_34225;
})();
var statearr_34226_34244 = state_34217__$1;
(statearr_34226_34244[(2)] = null);

(statearr_34226_34244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (9))){
var inst_34203 = (state_34217[(9)]);
var inst_34201 = (state_34217[(10)]);
var inst_34205 = inst_34203.call(null,inst_34201);
var state_34217__$1 = state_34217;
var statearr_34227_34245 = state_34217__$1;
(statearr_34227_34245[(2)] = inst_34205);

(statearr_34227_34245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (5))){
var inst_34197 = (state_34217[(7)]);
var inst_34199 = figwheel.client.file_reloading.blocking_load.call(null,inst_34197);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34217__$1,(8),inst_34199);
} else {
if((state_val_34218 === (10))){
var inst_34201 = (state_34217[(10)]);
var inst_34207 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34201);
var state_34217__$1 = state_34217;
var statearr_34228_34246 = state_34217__$1;
(statearr_34228_34246[(2)] = inst_34207);

(statearr_34228_34246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (8))){
var inst_34203 = (state_34217[(9)]);
var inst_34197 = (state_34217[(7)]);
var inst_34201 = (state_34217[(2)]);
var inst_34202 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34203__$1 = cljs.core.get.call(null,inst_34202,inst_34197);
var state_34217__$1 = (function (){var statearr_34229 = state_34217;
(statearr_34229[(9)] = inst_34203__$1);

(statearr_34229[(10)] = inst_34201);

return statearr_34229;
})();
if(cljs.core.truth_(inst_34203__$1)){
var statearr_34230_34247 = state_34217__$1;
(statearr_34230_34247[(1)] = (9));

} else {
var statearr_34231_34248 = state_34217__$1;
(statearr_34231_34248[(1)] = (10));

}

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
});})(c__28835__auto__))
;
return ((function (switch__28723__auto__,c__28835__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28724__auto__ = null;
var figwheel$client$file_reloading$state_machine__28724__auto____0 = (function (){
var statearr_34235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34235[(0)] = figwheel$client$file_reloading$state_machine__28724__auto__);

(statearr_34235[(1)] = (1));

return statearr_34235;
});
var figwheel$client$file_reloading$state_machine__28724__auto____1 = (function (state_34217){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_34217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e34236){if((e34236 instanceof Object)){
var ex__28727__auto__ = e34236;
var statearr_34237_34249 = state_34217;
(statearr_34237_34249[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34250 = state_34217;
state_34217 = G__34250;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28724__auto__ = function(state_34217){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28724__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28724__auto____1.call(this,state_34217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28724__auto____0;
figwheel$client$file_reloading$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28724__auto____1;
return figwheel$client$file_reloading$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto__))
})();
var state__28837__auto__ = (function (){var statearr_34238 = f__28836__auto__.call(null);
(statearr_34238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto__);

return statearr_34238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto__))
);

return c__28835__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34251,callback){
var map__34254 = p__34251;
var map__34254__$1 = ((((!((map__34254 == null)))?((((map__34254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34254):map__34254);
var file_msg = map__34254__$1;
var namespace = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34254,map__34254__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34254,map__34254__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34256){
var map__34259 = p__34256;
var map__34259__$1 = ((((!((map__34259 == null)))?((((map__34259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34259):map__34259);
var file_msg = map__34259__$1;
var namespace = cljs.core.get.call(null,map__34259__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34261){
var map__34264 = p__34261;
var map__34264__$1 = ((((!((map__34264 == null)))?((((map__34264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34264):map__34264);
var file_msg = map__34264__$1;
var namespace = cljs.core.get.call(null,map__34264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24836__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24836__auto__){
var or__24848__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24848__auto____$1)){
return or__24848__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24836__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34266,callback){
var map__34269 = p__34266;
var map__34269__$1 = ((((!((map__34269 == null)))?((((map__34269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34269):map__34269);
var file_msg = map__34269__$1;
var request_url = cljs.core.get.call(null,map__34269__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34269__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28835__auto___34373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___34373,out){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___34373,out){
return (function (state_34355){
var state_val_34356 = (state_34355[(1)]);
if((state_val_34356 === (1))){
var inst_34329 = cljs.core.seq.call(null,files);
var inst_34330 = cljs.core.first.call(null,inst_34329);
var inst_34331 = cljs.core.next.call(null,inst_34329);
var inst_34332 = files;
var state_34355__$1 = (function (){var statearr_34357 = state_34355;
(statearr_34357[(7)] = inst_34332);

(statearr_34357[(8)] = inst_34330);

(statearr_34357[(9)] = inst_34331);

return statearr_34357;
})();
var statearr_34358_34374 = state_34355__$1;
(statearr_34358_34374[(2)] = null);

(statearr_34358_34374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (2))){
var inst_34338 = (state_34355[(10)]);
var inst_34332 = (state_34355[(7)]);
var inst_34337 = cljs.core.seq.call(null,inst_34332);
var inst_34338__$1 = cljs.core.first.call(null,inst_34337);
var inst_34339 = cljs.core.next.call(null,inst_34337);
var inst_34340 = (inst_34338__$1 == null);
var inst_34341 = cljs.core.not.call(null,inst_34340);
var state_34355__$1 = (function (){var statearr_34359 = state_34355;
(statearr_34359[(10)] = inst_34338__$1);

(statearr_34359[(11)] = inst_34339);

return statearr_34359;
})();
if(inst_34341){
var statearr_34360_34375 = state_34355__$1;
(statearr_34360_34375[(1)] = (4));

} else {
var statearr_34361_34376 = state_34355__$1;
(statearr_34361_34376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (3))){
var inst_34353 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34355__$1,inst_34353);
} else {
if((state_val_34356 === (4))){
var inst_34338 = (state_34355[(10)]);
var inst_34343 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34338);
var state_34355__$1 = state_34355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34355__$1,(7),inst_34343);
} else {
if((state_val_34356 === (5))){
var inst_34349 = cljs.core.async.close_BANG_.call(null,out);
var state_34355__$1 = state_34355;
var statearr_34362_34377 = state_34355__$1;
(statearr_34362_34377[(2)] = inst_34349);

(statearr_34362_34377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (6))){
var inst_34351 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34363_34378 = state_34355__$1;
(statearr_34363_34378[(2)] = inst_34351);

(statearr_34363_34378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (7))){
var inst_34339 = (state_34355[(11)]);
var inst_34345 = (state_34355[(2)]);
var inst_34346 = cljs.core.async.put_BANG_.call(null,out,inst_34345);
var inst_34332 = inst_34339;
var state_34355__$1 = (function (){var statearr_34364 = state_34355;
(statearr_34364[(12)] = inst_34346);

(statearr_34364[(7)] = inst_34332);

return statearr_34364;
})();
var statearr_34365_34379 = state_34355__$1;
(statearr_34365_34379[(2)] = null);

(statearr_34365_34379[(1)] = (2));


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
});})(c__28835__auto___34373,out))
;
return ((function (switch__28723__auto__,c__28835__auto___34373,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto____0 = (function (){
var statearr_34369 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34369[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto__);

(statearr_34369[(1)] = (1));

return statearr_34369;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto____1 = (function (state_34355){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_34355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e34370){if((e34370 instanceof Object)){
var ex__28727__auto__ = e34370;
var statearr_34371_34380 = state_34355;
(statearr_34371_34380[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34381 = state_34355;
state_34355 = G__34381;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto__ = function(state_34355){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto____1.call(this,state_34355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___34373,out))
})();
var state__28837__auto__ = (function (){var statearr_34372 = f__28836__auto__.call(null);
(statearr_34372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___34373);

return statearr_34372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___34373,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34382,opts){
var map__34386 = p__34382;
var map__34386__$1 = ((((!((map__34386 == null)))?((((map__34386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34386):map__34386);
var eval_body__$1 = cljs.core.get.call(null,map__34386__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34386__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24836__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24836__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24836__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34388){var e = e34388;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34389_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34389_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34398){
var vec__34399 = p__34398;
var k = cljs.core.nth.call(null,vec__34399,(0),null);
var v = cljs.core.nth.call(null,vec__34399,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34402){
var vec__34403 = p__34402;
var k = cljs.core.nth.call(null,vec__34403,(0),null);
var v = cljs.core.nth.call(null,vec__34403,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34409,p__34410){
var map__34657 = p__34409;
var map__34657__$1 = ((((!((map__34657 == null)))?((((map__34657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34657):map__34657);
var opts = map__34657__$1;
var before_jsload = cljs.core.get.call(null,map__34657__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34657__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34657__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34658 = p__34410;
var map__34658__$1 = ((((!((map__34658 == null)))?((((map__34658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34658):map__34658);
var msg = map__34658__$1;
var files = cljs.core.get.call(null,map__34658__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34658__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34658__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34811){
var state_val_34812 = (state_34811[(1)]);
if((state_val_34812 === (7))){
var inst_34675 = (state_34811[(7)]);
var inst_34674 = (state_34811[(8)]);
var inst_34672 = (state_34811[(9)]);
var inst_34673 = (state_34811[(10)]);
var inst_34680 = cljs.core._nth.call(null,inst_34673,inst_34675);
var inst_34681 = figwheel.client.file_reloading.eval_body.call(null,inst_34680,opts);
var inst_34682 = (inst_34675 + (1));
var tmp34813 = inst_34674;
var tmp34814 = inst_34672;
var tmp34815 = inst_34673;
var inst_34672__$1 = tmp34814;
var inst_34673__$1 = tmp34815;
var inst_34674__$1 = tmp34813;
var inst_34675__$1 = inst_34682;
var state_34811__$1 = (function (){var statearr_34816 = state_34811;
(statearr_34816[(11)] = inst_34681);

(statearr_34816[(7)] = inst_34675__$1);

(statearr_34816[(8)] = inst_34674__$1);

(statearr_34816[(9)] = inst_34672__$1);

(statearr_34816[(10)] = inst_34673__$1);

return statearr_34816;
})();
var statearr_34817_34903 = state_34811__$1;
(statearr_34817_34903[(2)] = null);

(statearr_34817_34903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (20))){
var inst_34715 = (state_34811[(12)]);
var inst_34723 = figwheel.client.file_reloading.sort_files.call(null,inst_34715);
var state_34811__$1 = state_34811;
var statearr_34818_34904 = state_34811__$1;
(statearr_34818_34904[(2)] = inst_34723);

(statearr_34818_34904[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (27))){
var state_34811__$1 = state_34811;
var statearr_34819_34905 = state_34811__$1;
(statearr_34819_34905[(2)] = null);

(statearr_34819_34905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (1))){
var inst_34664 = (state_34811[(13)]);
var inst_34661 = before_jsload.call(null,files);
var inst_34662 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34663 = (function (){return ((function (inst_34664,inst_34661,inst_34662,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34406_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34406_SHARP_);
});
;})(inst_34664,inst_34661,inst_34662,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34664__$1 = cljs.core.filter.call(null,inst_34663,files);
var inst_34665 = cljs.core.not_empty.call(null,inst_34664__$1);
var state_34811__$1 = (function (){var statearr_34820 = state_34811;
(statearr_34820[(13)] = inst_34664__$1);

(statearr_34820[(14)] = inst_34661);

(statearr_34820[(15)] = inst_34662);

return statearr_34820;
})();
if(cljs.core.truth_(inst_34665)){
var statearr_34821_34906 = state_34811__$1;
(statearr_34821_34906[(1)] = (2));

} else {
var statearr_34822_34907 = state_34811__$1;
(statearr_34822_34907[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (24))){
var state_34811__$1 = state_34811;
var statearr_34823_34908 = state_34811__$1;
(statearr_34823_34908[(2)] = null);

(statearr_34823_34908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (39))){
var inst_34765 = (state_34811[(16)]);
var state_34811__$1 = state_34811;
var statearr_34824_34909 = state_34811__$1;
(statearr_34824_34909[(2)] = inst_34765);

(statearr_34824_34909[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (46))){
var inst_34806 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
var statearr_34825_34910 = state_34811__$1;
(statearr_34825_34910[(2)] = inst_34806);

(statearr_34825_34910[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (4))){
var inst_34709 = (state_34811[(2)]);
var inst_34710 = cljs.core.List.EMPTY;
var inst_34711 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34710);
var inst_34712 = (function (){return ((function (inst_34709,inst_34710,inst_34711,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34407_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34407_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34407_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34407_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_34709,inst_34710,inst_34711,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34713 = cljs.core.filter.call(null,inst_34712,files);
var inst_34714 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34715 = cljs.core.concat.call(null,inst_34713,inst_34714);
var state_34811__$1 = (function (){var statearr_34826 = state_34811;
(statearr_34826[(17)] = inst_34711);

(statearr_34826[(12)] = inst_34715);

(statearr_34826[(18)] = inst_34709);

return statearr_34826;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34827_34911 = state_34811__$1;
(statearr_34827_34911[(1)] = (16));

} else {
var statearr_34828_34912 = state_34811__$1;
(statearr_34828_34912[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (15))){
var inst_34699 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
var statearr_34829_34913 = state_34811__$1;
(statearr_34829_34913[(2)] = inst_34699);

(statearr_34829_34913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (21))){
var inst_34725 = (state_34811[(19)]);
var inst_34725__$1 = (state_34811[(2)]);
var inst_34726 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34725__$1);
var state_34811__$1 = (function (){var statearr_34830 = state_34811;
(statearr_34830[(19)] = inst_34725__$1);

return statearr_34830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34811__$1,(22),inst_34726);
} else {
if((state_val_34812 === (31))){
var inst_34809 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34811__$1,inst_34809);
} else {
if((state_val_34812 === (32))){
var inst_34765 = (state_34811[(16)]);
var inst_34770 = inst_34765.cljs$lang$protocol_mask$partition0$;
var inst_34771 = (inst_34770 & (64));
var inst_34772 = inst_34765.cljs$core$ISeq$;
var inst_34773 = (inst_34771) || (inst_34772);
var state_34811__$1 = state_34811;
if(cljs.core.truth_(inst_34773)){
var statearr_34831_34914 = state_34811__$1;
(statearr_34831_34914[(1)] = (35));

} else {
var statearr_34832_34915 = state_34811__$1;
(statearr_34832_34915[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (40))){
var inst_34786 = (state_34811[(20)]);
var inst_34785 = (state_34811[(2)]);
var inst_34786__$1 = cljs.core.get.call(null,inst_34785,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34787 = cljs.core.get.call(null,inst_34785,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34788 = cljs.core.not_empty.call(null,inst_34786__$1);
var state_34811__$1 = (function (){var statearr_34833 = state_34811;
(statearr_34833[(21)] = inst_34787);

(statearr_34833[(20)] = inst_34786__$1);

return statearr_34833;
})();
if(cljs.core.truth_(inst_34788)){
var statearr_34834_34916 = state_34811__$1;
(statearr_34834_34916[(1)] = (41));

} else {
var statearr_34835_34917 = state_34811__$1;
(statearr_34835_34917[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (33))){
var state_34811__$1 = state_34811;
var statearr_34836_34918 = state_34811__$1;
(statearr_34836_34918[(2)] = false);

(statearr_34836_34918[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (13))){
var inst_34685 = (state_34811[(22)]);
var inst_34689 = cljs.core.chunk_first.call(null,inst_34685);
var inst_34690 = cljs.core.chunk_rest.call(null,inst_34685);
var inst_34691 = cljs.core.count.call(null,inst_34689);
var inst_34672 = inst_34690;
var inst_34673 = inst_34689;
var inst_34674 = inst_34691;
var inst_34675 = (0);
var state_34811__$1 = (function (){var statearr_34837 = state_34811;
(statearr_34837[(7)] = inst_34675);

(statearr_34837[(8)] = inst_34674);

(statearr_34837[(9)] = inst_34672);

(statearr_34837[(10)] = inst_34673);

return statearr_34837;
})();
var statearr_34838_34919 = state_34811__$1;
(statearr_34838_34919[(2)] = null);

(statearr_34838_34919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (22))){
var inst_34725 = (state_34811[(19)]);
var inst_34728 = (state_34811[(23)]);
var inst_34733 = (state_34811[(24)]);
var inst_34729 = (state_34811[(25)]);
var inst_34728__$1 = (state_34811[(2)]);
var inst_34729__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34728__$1);
var inst_34730 = (function (){var all_files = inst_34725;
var res_SINGLEQUOTE_ = inst_34728__$1;
var res = inst_34729__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34725,inst_34728,inst_34733,inst_34729,inst_34728__$1,inst_34729__$1,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34408_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34408_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34725,inst_34728,inst_34733,inst_34729,inst_34728__$1,inst_34729__$1,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34731 = cljs.core.filter.call(null,inst_34730,inst_34728__$1);
var inst_34732 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34733__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34732);
var inst_34734 = cljs.core.not_empty.call(null,inst_34733__$1);
var state_34811__$1 = (function (){var statearr_34839 = state_34811;
(statearr_34839[(23)] = inst_34728__$1);

(statearr_34839[(26)] = inst_34731);

(statearr_34839[(24)] = inst_34733__$1);

(statearr_34839[(25)] = inst_34729__$1);

return statearr_34839;
})();
if(cljs.core.truth_(inst_34734)){
var statearr_34840_34920 = state_34811__$1;
(statearr_34840_34920[(1)] = (23));

} else {
var statearr_34841_34921 = state_34811__$1;
(statearr_34841_34921[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (36))){
var state_34811__$1 = state_34811;
var statearr_34842_34922 = state_34811__$1;
(statearr_34842_34922[(2)] = false);

(statearr_34842_34922[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (41))){
var inst_34786 = (state_34811[(20)]);
var inst_34790 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34791 = cljs.core.map.call(null,inst_34790,inst_34786);
var inst_34792 = cljs.core.pr_str.call(null,inst_34791);
var inst_34793 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34792)].join('');
var inst_34794 = figwheel.client.utils.log.call(null,inst_34793);
var state_34811__$1 = state_34811;
var statearr_34843_34923 = state_34811__$1;
(statearr_34843_34923[(2)] = inst_34794);

(statearr_34843_34923[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (43))){
var inst_34787 = (state_34811[(21)]);
var inst_34797 = (state_34811[(2)]);
var inst_34798 = cljs.core.not_empty.call(null,inst_34787);
var state_34811__$1 = (function (){var statearr_34844 = state_34811;
(statearr_34844[(27)] = inst_34797);

return statearr_34844;
})();
if(cljs.core.truth_(inst_34798)){
var statearr_34845_34924 = state_34811__$1;
(statearr_34845_34924[(1)] = (44));

} else {
var statearr_34846_34925 = state_34811__$1;
(statearr_34846_34925[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (29))){
var inst_34725 = (state_34811[(19)]);
var inst_34728 = (state_34811[(23)]);
var inst_34731 = (state_34811[(26)]);
var inst_34765 = (state_34811[(16)]);
var inst_34733 = (state_34811[(24)]);
var inst_34729 = (state_34811[(25)]);
var inst_34761 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34764 = (function (){var all_files = inst_34725;
var res_SINGLEQUOTE_ = inst_34728;
var res = inst_34729;
var files_not_loaded = inst_34731;
var dependencies_that_loaded = inst_34733;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34725,inst_34728,inst_34731,inst_34765,inst_34733,inst_34729,inst_34761,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34763){
var map__34847 = p__34763;
var map__34847__$1 = ((((!((map__34847 == null)))?((((map__34847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34847):map__34847);
var namespace = cljs.core.get.call(null,map__34847__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34725,inst_34728,inst_34731,inst_34765,inst_34733,inst_34729,inst_34761,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34765__$1 = cljs.core.group_by.call(null,inst_34764,inst_34731);
var inst_34767 = (inst_34765__$1 == null);
var inst_34768 = cljs.core.not.call(null,inst_34767);
var state_34811__$1 = (function (){var statearr_34849 = state_34811;
(statearr_34849[(28)] = inst_34761);

(statearr_34849[(16)] = inst_34765__$1);

return statearr_34849;
})();
if(inst_34768){
var statearr_34850_34926 = state_34811__$1;
(statearr_34850_34926[(1)] = (32));

} else {
var statearr_34851_34927 = state_34811__$1;
(statearr_34851_34927[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (44))){
var inst_34787 = (state_34811[(21)]);
var inst_34800 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34787);
var inst_34801 = cljs.core.pr_str.call(null,inst_34800);
var inst_34802 = [cljs.core.str("not required: "),cljs.core.str(inst_34801)].join('');
var inst_34803 = figwheel.client.utils.log.call(null,inst_34802);
var state_34811__$1 = state_34811;
var statearr_34852_34928 = state_34811__$1;
(statearr_34852_34928[(2)] = inst_34803);

(statearr_34852_34928[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (6))){
var inst_34706 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
var statearr_34853_34929 = state_34811__$1;
(statearr_34853_34929[(2)] = inst_34706);

(statearr_34853_34929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (28))){
var inst_34731 = (state_34811[(26)]);
var inst_34758 = (state_34811[(2)]);
var inst_34759 = cljs.core.not_empty.call(null,inst_34731);
var state_34811__$1 = (function (){var statearr_34854 = state_34811;
(statearr_34854[(29)] = inst_34758);

return statearr_34854;
})();
if(cljs.core.truth_(inst_34759)){
var statearr_34855_34930 = state_34811__$1;
(statearr_34855_34930[(1)] = (29));

} else {
var statearr_34856_34931 = state_34811__$1;
(statearr_34856_34931[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (25))){
var inst_34729 = (state_34811[(25)]);
var inst_34745 = (state_34811[(2)]);
var inst_34746 = cljs.core.not_empty.call(null,inst_34729);
var state_34811__$1 = (function (){var statearr_34857 = state_34811;
(statearr_34857[(30)] = inst_34745);

return statearr_34857;
})();
if(cljs.core.truth_(inst_34746)){
var statearr_34858_34932 = state_34811__$1;
(statearr_34858_34932[(1)] = (26));

} else {
var statearr_34859_34933 = state_34811__$1;
(statearr_34859_34933[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (34))){
var inst_34780 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
if(cljs.core.truth_(inst_34780)){
var statearr_34860_34934 = state_34811__$1;
(statearr_34860_34934[(1)] = (38));

} else {
var statearr_34861_34935 = state_34811__$1;
(statearr_34861_34935[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (17))){
var state_34811__$1 = state_34811;
var statearr_34862_34936 = state_34811__$1;
(statearr_34862_34936[(2)] = recompile_dependents);

(statearr_34862_34936[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (3))){
var state_34811__$1 = state_34811;
var statearr_34863_34937 = state_34811__$1;
(statearr_34863_34937[(2)] = null);

(statearr_34863_34937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (12))){
var inst_34702 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
var statearr_34864_34938 = state_34811__$1;
(statearr_34864_34938[(2)] = inst_34702);

(statearr_34864_34938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (2))){
var inst_34664 = (state_34811[(13)]);
var inst_34671 = cljs.core.seq.call(null,inst_34664);
var inst_34672 = inst_34671;
var inst_34673 = null;
var inst_34674 = (0);
var inst_34675 = (0);
var state_34811__$1 = (function (){var statearr_34865 = state_34811;
(statearr_34865[(7)] = inst_34675);

(statearr_34865[(8)] = inst_34674);

(statearr_34865[(9)] = inst_34672);

(statearr_34865[(10)] = inst_34673);

return statearr_34865;
})();
var statearr_34866_34939 = state_34811__$1;
(statearr_34866_34939[(2)] = null);

(statearr_34866_34939[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (23))){
var inst_34725 = (state_34811[(19)]);
var inst_34728 = (state_34811[(23)]);
var inst_34731 = (state_34811[(26)]);
var inst_34733 = (state_34811[(24)]);
var inst_34729 = (state_34811[(25)]);
var inst_34736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34738 = (function (){var all_files = inst_34725;
var res_SINGLEQUOTE_ = inst_34728;
var res = inst_34729;
var files_not_loaded = inst_34731;
var dependencies_that_loaded = inst_34733;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34725,inst_34728,inst_34731,inst_34733,inst_34729,inst_34736,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34737){
var map__34867 = p__34737;
var map__34867__$1 = ((((!((map__34867 == null)))?((((map__34867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34867):map__34867);
var request_url = cljs.core.get.call(null,map__34867__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34725,inst_34728,inst_34731,inst_34733,inst_34729,inst_34736,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34739 = cljs.core.reverse.call(null,inst_34733);
var inst_34740 = cljs.core.map.call(null,inst_34738,inst_34739);
var inst_34741 = cljs.core.pr_str.call(null,inst_34740);
var inst_34742 = figwheel.client.utils.log.call(null,inst_34741);
var state_34811__$1 = (function (){var statearr_34869 = state_34811;
(statearr_34869[(31)] = inst_34736);

return statearr_34869;
})();
var statearr_34870_34940 = state_34811__$1;
(statearr_34870_34940[(2)] = inst_34742);

(statearr_34870_34940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (35))){
var state_34811__$1 = state_34811;
var statearr_34871_34941 = state_34811__$1;
(statearr_34871_34941[(2)] = true);

(statearr_34871_34941[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (19))){
var inst_34715 = (state_34811[(12)]);
var inst_34721 = figwheel.client.file_reloading.expand_files.call(null,inst_34715);
var state_34811__$1 = state_34811;
var statearr_34872_34942 = state_34811__$1;
(statearr_34872_34942[(2)] = inst_34721);

(statearr_34872_34942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (11))){
var state_34811__$1 = state_34811;
var statearr_34873_34943 = state_34811__$1;
(statearr_34873_34943[(2)] = null);

(statearr_34873_34943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (9))){
var inst_34704 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
var statearr_34874_34944 = state_34811__$1;
(statearr_34874_34944[(2)] = inst_34704);

(statearr_34874_34944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (5))){
var inst_34675 = (state_34811[(7)]);
var inst_34674 = (state_34811[(8)]);
var inst_34677 = (inst_34675 < inst_34674);
var inst_34678 = inst_34677;
var state_34811__$1 = state_34811;
if(cljs.core.truth_(inst_34678)){
var statearr_34875_34945 = state_34811__$1;
(statearr_34875_34945[(1)] = (7));

} else {
var statearr_34876_34946 = state_34811__$1;
(statearr_34876_34946[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (14))){
var inst_34685 = (state_34811[(22)]);
var inst_34694 = cljs.core.first.call(null,inst_34685);
var inst_34695 = figwheel.client.file_reloading.eval_body.call(null,inst_34694,opts);
var inst_34696 = cljs.core.next.call(null,inst_34685);
var inst_34672 = inst_34696;
var inst_34673 = null;
var inst_34674 = (0);
var inst_34675 = (0);
var state_34811__$1 = (function (){var statearr_34877 = state_34811;
(statearr_34877[(7)] = inst_34675);

(statearr_34877[(8)] = inst_34674);

(statearr_34877[(32)] = inst_34695);

(statearr_34877[(9)] = inst_34672);

(statearr_34877[(10)] = inst_34673);

return statearr_34877;
})();
var statearr_34878_34947 = state_34811__$1;
(statearr_34878_34947[(2)] = null);

(statearr_34878_34947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (45))){
var state_34811__$1 = state_34811;
var statearr_34879_34948 = state_34811__$1;
(statearr_34879_34948[(2)] = null);

(statearr_34879_34948[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (26))){
var inst_34725 = (state_34811[(19)]);
var inst_34728 = (state_34811[(23)]);
var inst_34731 = (state_34811[(26)]);
var inst_34733 = (state_34811[(24)]);
var inst_34729 = (state_34811[(25)]);
var inst_34748 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34750 = (function (){var all_files = inst_34725;
var res_SINGLEQUOTE_ = inst_34728;
var res = inst_34729;
var files_not_loaded = inst_34731;
var dependencies_that_loaded = inst_34733;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34725,inst_34728,inst_34731,inst_34733,inst_34729,inst_34748,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34749){
var map__34880 = p__34749;
var map__34880__$1 = ((((!((map__34880 == null)))?((((map__34880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34880):map__34880);
var namespace = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34725,inst_34728,inst_34731,inst_34733,inst_34729,inst_34748,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34751 = cljs.core.map.call(null,inst_34750,inst_34729);
var inst_34752 = cljs.core.pr_str.call(null,inst_34751);
var inst_34753 = figwheel.client.utils.log.call(null,inst_34752);
var inst_34754 = (function (){var all_files = inst_34725;
var res_SINGLEQUOTE_ = inst_34728;
var res = inst_34729;
var files_not_loaded = inst_34731;
var dependencies_that_loaded = inst_34733;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34725,inst_34728,inst_34731,inst_34733,inst_34729,inst_34748,inst_34750,inst_34751,inst_34752,inst_34753,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34725,inst_34728,inst_34731,inst_34733,inst_34729,inst_34748,inst_34750,inst_34751,inst_34752,inst_34753,state_val_34812,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34755 = setTimeout(inst_34754,(10));
var state_34811__$1 = (function (){var statearr_34882 = state_34811;
(statearr_34882[(33)] = inst_34748);

(statearr_34882[(34)] = inst_34753);

return statearr_34882;
})();
var statearr_34883_34949 = state_34811__$1;
(statearr_34883_34949[(2)] = inst_34755);

(statearr_34883_34949[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (16))){
var state_34811__$1 = state_34811;
var statearr_34884_34950 = state_34811__$1;
(statearr_34884_34950[(2)] = reload_dependents);

(statearr_34884_34950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (38))){
var inst_34765 = (state_34811[(16)]);
var inst_34782 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34765);
var state_34811__$1 = state_34811;
var statearr_34885_34951 = state_34811__$1;
(statearr_34885_34951[(2)] = inst_34782);

(statearr_34885_34951[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (30))){
var state_34811__$1 = state_34811;
var statearr_34886_34952 = state_34811__$1;
(statearr_34886_34952[(2)] = null);

(statearr_34886_34952[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (10))){
var inst_34685 = (state_34811[(22)]);
var inst_34687 = cljs.core.chunked_seq_QMARK_.call(null,inst_34685);
var state_34811__$1 = state_34811;
if(inst_34687){
var statearr_34887_34953 = state_34811__$1;
(statearr_34887_34953[(1)] = (13));

} else {
var statearr_34888_34954 = state_34811__$1;
(statearr_34888_34954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (18))){
var inst_34719 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
if(cljs.core.truth_(inst_34719)){
var statearr_34889_34955 = state_34811__$1;
(statearr_34889_34955[(1)] = (19));

} else {
var statearr_34890_34956 = state_34811__$1;
(statearr_34890_34956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (42))){
var state_34811__$1 = state_34811;
var statearr_34891_34957 = state_34811__$1;
(statearr_34891_34957[(2)] = null);

(statearr_34891_34957[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (37))){
var inst_34777 = (state_34811[(2)]);
var state_34811__$1 = state_34811;
var statearr_34892_34958 = state_34811__$1;
(statearr_34892_34958[(2)] = inst_34777);

(statearr_34892_34958[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34812 === (8))){
var inst_34685 = (state_34811[(22)]);
var inst_34672 = (state_34811[(9)]);
var inst_34685__$1 = cljs.core.seq.call(null,inst_34672);
var state_34811__$1 = (function (){var statearr_34893 = state_34811;
(statearr_34893[(22)] = inst_34685__$1);

return statearr_34893;
})();
if(inst_34685__$1){
var statearr_34894_34959 = state_34811__$1;
(statearr_34894_34959[(1)] = (10));

} else {
var statearr_34895_34960 = state_34811__$1;
(statearr_34895_34960[(1)] = (11));

}

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
});})(c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28723__auto__,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto____0 = (function (){
var statearr_34899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34899[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto__);

(statearr_34899[(1)] = (1));

return statearr_34899;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto____1 = (function (state_34811){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_34811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e34900){if((e34900 instanceof Object)){
var ex__28727__auto__ = e34900;
var statearr_34901_34961 = state_34811;
(statearr_34901_34961[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34962 = state_34811;
state_34811 = G__34962;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto__ = function(state_34811){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto____1.call(this,state_34811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28837__auto__ = (function (){var statearr_34902 = f__28836__auto__.call(null);
(statearr_34902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto__);

return statearr_34902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto__,map__34657,map__34657__$1,opts,before_jsload,on_jsload,reload_dependents,map__34658,map__34658__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28835__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34965,link){
var map__34968 = p__34965;
var map__34968__$1 = ((((!((map__34968 == null)))?((((map__34968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34968):map__34968);
var file = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34968,map__34968__$1,file){
return (function (p1__34963_SHARP_,p2__34964_SHARP_){
if(cljs.core._EQ_.call(null,p1__34963_SHARP_,p2__34964_SHARP_)){
return p1__34963_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34968,map__34968__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34974){
var map__34975 = p__34974;
var map__34975__$1 = ((((!((map__34975 == null)))?((((map__34975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34975):map__34975);
var match_length = cljs.core.get.call(null,map__34975__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34975__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34970_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34970_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34977_SHARP_,p2__34978_SHARP_){
return cljs.core.assoc.call(null,p1__34977_SHARP_,cljs.core.get.call(null,p2__34978_SHARP_,key),p2__34978_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34979 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34979);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34979);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34980,p__34981){
var map__34986 = p__34980;
var map__34986__$1 = ((((!((map__34986 == null)))?((((map__34986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34986):map__34986);
var on_cssload = cljs.core.get.call(null,map__34986__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34987 = p__34981;
var map__34987__$1 = ((((!((map__34987 == null)))?((((map__34987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34987):map__34987);
var files_msg = map__34987__$1;
var files = cljs.core.get.call(null,map__34987__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1658325513405