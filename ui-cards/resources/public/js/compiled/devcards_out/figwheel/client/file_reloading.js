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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34116_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34116_SHARP_));
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
var seq__34121 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34122 = null;
var count__34123 = (0);
var i__34124 = (0);
while(true){
if((i__34124 < count__34123)){
var n = cljs.core._nth.call(null,chunk__34122,i__34124);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34125 = seq__34121;
var G__34126 = chunk__34122;
var G__34127 = count__34123;
var G__34128 = (i__34124 + (1));
seq__34121 = G__34125;
chunk__34122 = G__34126;
count__34123 = G__34127;
i__34124 = G__34128;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34121);
if(temp__4657__auto__){
var seq__34121__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34121__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34121__$1);
var G__34129 = cljs.core.chunk_rest.call(null,seq__34121__$1);
var G__34130 = c__25659__auto__;
var G__34131 = cljs.core.count.call(null,c__25659__auto__);
var G__34132 = (0);
seq__34121 = G__34129;
chunk__34122 = G__34130;
count__34123 = G__34131;
i__34124 = G__34132;
continue;
} else {
var n = cljs.core.first.call(null,seq__34121__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34133 = cljs.core.next.call(null,seq__34121__$1);
var G__34134 = null;
var G__34135 = (0);
var G__34136 = (0);
seq__34121 = G__34133;
chunk__34122 = G__34134;
count__34123 = G__34135;
i__34124 = G__34136;
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

var seq__34187_34198 = cljs.core.seq.call(null,deps);
var chunk__34188_34199 = null;
var count__34189_34200 = (0);
var i__34190_34201 = (0);
while(true){
if((i__34190_34201 < count__34189_34200)){
var dep_34202 = cljs.core._nth.call(null,chunk__34188_34199,i__34190_34201);
topo_sort_helper_STAR_.call(null,dep_34202,(depth + (1)),state);

var G__34203 = seq__34187_34198;
var G__34204 = chunk__34188_34199;
var G__34205 = count__34189_34200;
var G__34206 = (i__34190_34201 + (1));
seq__34187_34198 = G__34203;
chunk__34188_34199 = G__34204;
count__34189_34200 = G__34205;
i__34190_34201 = G__34206;
continue;
} else {
var temp__4657__auto___34207 = cljs.core.seq.call(null,seq__34187_34198);
if(temp__4657__auto___34207){
var seq__34187_34208__$1 = temp__4657__auto___34207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34187_34208__$1)){
var c__25659__auto___34209 = cljs.core.chunk_first.call(null,seq__34187_34208__$1);
var G__34210 = cljs.core.chunk_rest.call(null,seq__34187_34208__$1);
var G__34211 = c__25659__auto___34209;
var G__34212 = cljs.core.count.call(null,c__25659__auto___34209);
var G__34213 = (0);
seq__34187_34198 = G__34210;
chunk__34188_34199 = G__34211;
count__34189_34200 = G__34212;
i__34190_34201 = G__34213;
continue;
} else {
var dep_34214 = cljs.core.first.call(null,seq__34187_34208__$1);
topo_sort_helper_STAR_.call(null,dep_34214,(depth + (1)),state);

var G__34215 = cljs.core.next.call(null,seq__34187_34208__$1);
var G__34216 = null;
var G__34217 = (0);
var G__34218 = (0);
seq__34187_34198 = G__34215;
chunk__34188_34199 = G__34216;
count__34189_34200 = G__34217;
i__34190_34201 = G__34218;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34191){
var vec__34195 = p__34191;
var seq__34196 = cljs.core.seq.call(null,vec__34195);
var first__34197 = cljs.core.first.call(null,seq__34196);
var seq__34196__$1 = cljs.core.next.call(null,seq__34196);
var x = first__34197;
var xs = seq__34196__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34195,seq__34196,first__34197,seq__34196__$1,x,xs,get_deps__$1){
return (function (p1__34137_SHARP_){
return clojure.set.difference.call(null,p1__34137_SHARP_,x);
});})(vec__34195,seq__34196,first__34197,seq__34196__$1,x,xs,get_deps__$1))
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
var seq__34231 = cljs.core.seq.call(null,provides);
var chunk__34232 = null;
var count__34233 = (0);
var i__34234 = (0);
while(true){
if((i__34234 < count__34233)){
var prov = cljs.core._nth.call(null,chunk__34232,i__34234);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34235_34243 = cljs.core.seq.call(null,requires);
var chunk__34236_34244 = null;
var count__34237_34245 = (0);
var i__34238_34246 = (0);
while(true){
if((i__34238_34246 < count__34237_34245)){
var req_34247 = cljs.core._nth.call(null,chunk__34236_34244,i__34238_34246);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34247,prov);

var G__34248 = seq__34235_34243;
var G__34249 = chunk__34236_34244;
var G__34250 = count__34237_34245;
var G__34251 = (i__34238_34246 + (1));
seq__34235_34243 = G__34248;
chunk__34236_34244 = G__34249;
count__34237_34245 = G__34250;
i__34238_34246 = G__34251;
continue;
} else {
var temp__4657__auto___34252 = cljs.core.seq.call(null,seq__34235_34243);
if(temp__4657__auto___34252){
var seq__34235_34253__$1 = temp__4657__auto___34252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34235_34253__$1)){
var c__25659__auto___34254 = cljs.core.chunk_first.call(null,seq__34235_34253__$1);
var G__34255 = cljs.core.chunk_rest.call(null,seq__34235_34253__$1);
var G__34256 = c__25659__auto___34254;
var G__34257 = cljs.core.count.call(null,c__25659__auto___34254);
var G__34258 = (0);
seq__34235_34243 = G__34255;
chunk__34236_34244 = G__34256;
count__34237_34245 = G__34257;
i__34238_34246 = G__34258;
continue;
} else {
var req_34259 = cljs.core.first.call(null,seq__34235_34253__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34259,prov);

var G__34260 = cljs.core.next.call(null,seq__34235_34253__$1);
var G__34261 = null;
var G__34262 = (0);
var G__34263 = (0);
seq__34235_34243 = G__34260;
chunk__34236_34244 = G__34261;
count__34237_34245 = G__34262;
i__34238_34246 = G__34263;
continue;
}
} else {
}
}
break;
}

var G__34264 = seq__34231;
var G__34265 = chunk__34232;
var G__34266 = count__34233;
var G__34267 = (i__34234 + (1));
seq__34231 = G__34264;
chunk__34232 = G__34265;
count__34233 = G__34266;
i__34234 = G__34267;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34231);
if(temp__4657__auto__){
var seq__34231__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34231__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34231__$1);
var G__34268 = cljs.core.chunk_rest.call(null,seq__34231__$1);
var G__34269 = c__25659__auto__;
var G__34270 = cljs.core.count.call(null,c__25659__auto__);
var G__34271 = (0);
seq__34231 = G__34268;
chunk__34232 = G__34269;
count__34233 = G__34270;
i__34234 = G__34271;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34231__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34239_34272 = cljs.core.seq.call(null,requires);
var chunk__34240_34273 = null;
var count__34241_34274 = (0);
var i__34242_34275 = (0);
while(true){
if((i__34242_34275 < count__34241_34274)){
var req_34276 = cljs.core._nth.call(null,chunk__34240_34273,i__34242_34275);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34276,prov);

var G__34277 = seq__34239_34272;
var G__34278 = chunk__34240_34273;
var G__34279 = count__34241_34274;
var G__34280 = (i__34242_34275 + (1));
seq__34239_34272 = G__34277;
chunk__34240_34273 = G__34278;
count__34241_34274 = G__34279;
i__34242_34275 = G__34280;
continue;
} else {
var temp__4657__auto___34281__$1 = cljs.core.seq.call(null,seq__34239_34272);
if(temp__4657__auto___34281__$1){
var seq__34239_34282__$1 = temp__4657__auto___34281__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34239_34282__$1)){
var c__25659__auto___34283 = cljs.core.chunk_first.call(null,seq__34239_34282__$1);
var G__34284 = cljs.core.chunk_rest.call(null,seq__34239_34282__$1);
var G__34285 = c__25659__auto___34283;
var G__34286 = cljs.core.count.call(null,c__25659__auto___34283);
var G__34287 = (0);
seq__34239_34272 = G__34284;
chunk__34240_34273 = G__34285;
count__34241_34274 = G__34286;
i__34242_34275 = G__34287;
continue;
} else {
var req_34288 = cljs.core.first.call(null,seq__34239_34282__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34288,prov);

var G__34289 = cljs.core.next.call(null,seq__34239_34282__$1);
var G__34290 = null;
var G__34291 = (0);
var G__34292 = (0);
seq__34239_34272 = G__34289;
chunk__34240_34273 = G__34290;
count__34241_34274 = G__34291;
i__34242_34275 = G__34292;
continue;
}
} else {
}
}
break;
}

var G__34293 = cljs.core.next.call(null,seq__34231__$1);
var G__34294 = null;
var G__34295 = (0);
var G__34296 = (0);
seq__34231 = G__34293;
chunk__34232 = G__34294;
count__34233 = G__34295;
i__34234 = G__34296;
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
var seq__34301_34305 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34302_34306 = null;
var count__34303_34307 = (0);
var i__34304_34308 = (0);
while(true){
if((i__34304_34308 < count__34303_34307)){
var ns_34309 = cljs.core._nth.call(null,chunk__34302_34306,i__34304_34308);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34309);

var G__34310 = seq__34301_34305;
var G__34311 = chunk__34302_34306;
var G__34312 = count__34303_34307;
var G__34313 = (i__34304_34308 + (1));
seq__34301_34305 = G__34310;
chunk__34302_34306 = G__34311;
count__34303_34307 = G__34312;
i__34304_34308 = G__34313;
continue;
} else {
var temp__4657__auto___34314 = cljs.core.seq.call(null,seq__34301_34305);
if(temp__4657__auto___34314){
var seq__34301_34315__$1 = temp__4657__auto___34314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34301_34315__$1)){
var c__25659__auto___34316 = cljs.core.chunk_first.call(null,seq__34301_34315__$1);
var G__34317 = cljs.core.chunk_rest.call(null,seq__34301_34315__$1);
var G__34318 = c__25659__auto___34316;
var G__34319 = cljs.core.count.call(null,c__25659__auto___34316);
var G__34320 = (0);
seq__34301_34305 = G__34317;
chunk__34302_34306 = G__34318;
count__34303_34307 = G__34319;
i__34304_34308 = G__34320;
continue;
} else {
var ns_34321 = cljs.core.first.call(null,seq__34301_34315__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34321);

var G__34322 = cljs.core.next.call(null,seq__34301_34315__$1);
var G__34323 = null;
var G__34324 = (0);
var G__34325 = (0);
seq__34301_34305 = G__34322;
chunk__34302_34306 = G__34323;
count__34303_34307 = G__34324;
i__34304_34308 = G__34325;
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
var G__34326__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34327__i = 0, G__34327__a = new Array(arguments.length -  0);
while (G__34327__i < G__34327__a.length) {G__34327__a[G__34327__i] = arguments[G__34327__i + 0]; ++G__34327__i;}
  args = new cljs.core.IndexedSeq(G__34327__a,0);
} 
return G__34326__delegate.call(this,args);};
G__34326.cljs$lang$maxFixedArity = 0;
G__34326.cljs$lang$applyTo = (function (arglist__34328){
var args = cljs.core.seq(arglist__34328);
return G__34326__delegate(args);
});
G__34326.cljs$core$IFn$_invoke$arity$variadic = G__34326__delegate;
return G__34326;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34329 = cljs.core._EQ_;
var expr__34330 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34329.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34330))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34329,expr__34330){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34329,expr__34330))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34329,expr__34330){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34332){if((e34332 instanceof Error)){
var e = e34332;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34332;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34329,expr__34330))
} else {
if(cljs.core.truth_(pred__34329.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34330))){
return ((function (pred__34329,expr__34330){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34329,expr__34330){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34329,expr__34330))
);

return deferred.addErrback(((function (deferred,pred__34329,expr__34330){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34329,expr__34330))
);
});
;})(pred__34329,expr__34330))
} else {
if(cljs.core.truth_(pred__34329.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34330))){
return ((function (pred__34329,expr__34330){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34333){if((e34333 instanceof Error)){
var e = e34333;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34333;

}
}})());
});
;})(pred__34329,expr__34330))
} else {
return ((function (pred__34329,expr__34330){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34329,expr__34330))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34334,callback){
var map__34337 = p__34334;
var map__34337__$1 = ((((!((map__34337 == null)))?((((map__34337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34337):map__34337);
var file_msg = map__34337__$1;
var request_url = cljs.core.get.call(null,map__34337__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34337,map__34337__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34337,map__34337__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__){
return (function (state_34361){
var state_val_34362 = (state_34361[(1)]);
if((state_val_34362 === (7))){
var inst_34357 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34363_34383 = state_34361__$1;
(statearr_34363_34383[(2)] = inst_34357);

(statearr_34363_34383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (1))){
var state_34361__$1 = state_34361;
var statearr_34364_34384 = state_34361__$1;
(statearr_34364_34384[(2)] = null);

(statearr_34364_34384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (4))){
var inst_34341 = (state_34361[(7)]);
var inst_34341__$1 = (state_34361[(2)]);
var state_34361__$1 = (function (){var statearr_34365 = state_34361;
(statearr_34365[(7)] = inst_34341__$1);

return statearr_34365;
})();
if(cljs.core.truth_(inst_34341__$1)){
var statearr_34366_34385 = state_34361__$1;
(statearr_34366_34385[(1)] = (5));

} else {
var statearr_34367_34386 = state_34361__$1;
(statearr_34367_34386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (6))){
var state_34361__$1 = state_34361;
var statearr_34368_34387 = state_34361__$1;
(statearr_34368_34387[(2)] = null);

(statearr_34368_34387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (3))){
var inst_34359 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34361__$1,inst_34359);
} else {
if((state_val_34362 === (2))){
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34361__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34362 === (11))){
var inst_34353 = (state_34361[(2)]);
var state_34361__$1 = (function (){var statearr_34369 = state_34361;
(statearr_34369[(8)] = inst_34353);

return statearr_34369;
})();
var statearr_34370_34388 = state_34361__$1;
(statearr_34370_34388[(2)] = null);

(statearr_34370_34388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (9))){
var inst_34345 = (state_34361[(9)]);
var inst_34347 = (state_34361[(10)]);
var inst_34349 = inst_34347.call(null,inst_34345);
var state_34361__$1 = state_34361;
var statearr_34371_34389 = state_34361__$1;
(statearr_34371_34389[(2)] = inst_34349);

(statearr_34371_34389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (5))){
var inst_34341 = (state_34361[(7)]);
var inst_34343 = figwheel.client.file_reloading.blocking_load.call(null,inst_34341);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34361__$1,(8),inst_34343);
} else {
if((state_val_34362 === (10))){
var inst_34345 = (state_34361[(9)]);
var inst_34351 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34345);
var state_34361__$1 = state_34361;
var statearr_34372_34390 = state_34361__$1;
(statearr_34372_34390[(2)] = inst_34351);

(statearr_34372_34390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (8))){
var inst_34341 = (state_34361[(7)]);
var inst_34347 = (state_34361[(10)]);
var inst_34345 = (state_34361[(2)]);
var inst_34346 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34347__$1 = cljs.core.get.call(null,inst_34346,inst_34341);
var state_34361__$1 = (function (){var statearr_34373 = state_34361;
(statearr_34373[(9)] = inst_34345);

(statearr_34373[(10)] = inst_34347__$1);

return statearr_34373;
})();
if(cljs.core.truth_(inst_34347__$1)){
var statearr_34374_34391 = state_34361__$1;
(statearr_34374_34391[(1)] = (9));

} else {
var statearr_34375_34392 = state_34361__$1;
(statearr_34375_34392[(1)] = (10));

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
});})(c__28977__auto__))
;
return ((function (switch__28865__auto__,c__28977__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28866__auto__ = null;
var figwheel$client$file_reloading$state_machine__28866__auto____0 = (function (){
var statearr_34379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34379[(0)] = figwheel$client$file_reloading$state_machine__28866__auto__);

(statearr_34379[(1)] = (1));

return statearr_34379;
});
var figwheel$client$file_reloading$state_machine__28866__auto____1 = (function (state_34361){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_34361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e34380){if((e34380 instanceof Object)){
var ex__28869__auto__ = e34380;
var statearr_34381_34393 = state_34361;
(statearr_34381_34393[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34394 = state_34361;
state_34361 = G__34394;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28866__auto__ = function(state_34361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28866__auto____1.call(this,state_34361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28866__auto____0;
figwheel$client$file_reloading$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28866__auto____1;
return figwheel$client$file_reloading$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__))
})();
var state__28979__auto__ = (function (){var statearr_34382 = f__28978__auto__.call(null);
(statearr_34382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_34382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__))
);

return c__28977__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34395,callback){
var map__34398 = p__34395;
var map__34398__$1 = ((((!((map__34398 == null)))?((((map__34398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34398):map__34398);
var file_msg = map__34398__$1;
var namespace = cljs.core.get.call(null,map__34398__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34398,map__34398__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34398,map__34398__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34400){
var map__34403 = p__34400;
var map__34403__$1 = ((((!((map__34403 == null)))?((((map__34403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34403):map__34403);
var file_msg = map__34403__$1;
var namespace = cljs.core.get.call(null,map__34403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34405){
var map__34408 = p__34405;
var map__34408__$1 = ((((!((map__34408 == null)))?((((map__34408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34408):map__34408);
var file_msg = map__34408__$1;
var namespace = cljs.core.get.call(null,map__34408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34410,callback){
var map__34413 = p__34410;
var map__34413__$1 = ((((!((map__34413 == null)))?((((map__34413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34413):map__34413);
var file_msg = map__34413__$1;
var request_url = cljs.core.get.call(null,map__34413__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28977__auto___34517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___34517,out){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___34517,out){
return (function (state_34499){
var state_val_34500 = (state_34499[(1)]);
if((state_val_34500 === (1))){
var inst_34473 = cljs.core.seq.call(null,files);
var inst_34474 = cljs.core.first.call(null,inst_34473);
var inst_34475 = cljs.core.next.call(null,inst_34473);
var inst_34476 = files;
var state_34499__$1 = (function (){var statearr_34501 = state_34499;
(statearr_34501[(7)] = inst_34475);

(statearr_34501[(8)] = inst_34476);

(statearr_34501[(9)] = inst_34474);

return statearr_34501;
})();
var statearr_34502_34518 = state_34499__$1;
(statearr_34502_34518[(2)] = null);

(statearr_34502_34518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (2))){
var inst_34476 = (state_34499[(8)]);
var inst_34482 = (state_34499[(10)]);
var inst_34481 = cljs.core.seq.call(null,inst_34476);
var inst_34482__$1 = cljs.core.first.call(null,inst_34481);
var inst_34483 = cljs.core.next.call(null,inst_34481);
var inst_34484 = (inst_34482__$1 == null);
var inst_34485 = cljs.core.not.call(null,inst_34484);
var state_34499__$1 = (function (){var statearr_34503 = state_34499;
(statearr_34503[(11)] = inst_34483);

(statearr_34503[(10)] = inst_34482__$1);

return statearr_34503;
})();
if(inst_34485){
var statearr_34504_34519 = state_34499__$1;
(statearr_34504_34519[(1)] = (4));

} else {
var statearr_34505_34520 = state_34499__$1;
(statearr_34505_34520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (3))){
var inst_34497 = (state_34499[(2)]);
var state_34499__$1 = state_34499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34499__$1,inst_34497);
} else {
if((state_val_34500 === (4))){
var inst_34482 = (state_34499[(10)]);
var inst_34487 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34482);
var state_34499__$1 = state_34499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34499__$1,(7),inst_34487);
} else {
if((state_val_34500 === (5))){
var inst_34493 = cljs.core.async.close_BANG_.call(null,out);
var state_34499__$1 = state_34499;
var statearr_34506_34521 = state_34499__$1;
(statearr_34506_34521[(2)] = inst_34493);

(statearr_34506_34521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (6))){
var inst_34495 = (state_34499[(2)]);
var state_34499__$1 = state_34499;
var statearr_34507_34522 = state_34499__$1;
(statearr_34507_34522[(2)] = inst_34495);

(statearr_34507_34522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34500 === (7))){
var inst_34483 = (state_34499[(11)]);
var inst_34489 = (state_34499[(2)]);
var inst_34490 = cljs.core.async.put_BANG_.call(null,out,inst_34489);
var inst_34476 = inst_34483;
var state_34499__$1 = (function (){var statearr_34508 = state_34499;
(statearr_34508[(12)] = inst_34490);

(statearr_34508[(8)] = inst_34476);

return statearr_34508;
})();
var statearr_34509_34523 = state_34499__$1;
(statearr_34509_34523[(2)] = null);

(statearr_34509_34523[(1)] = (2));


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
});})(c__28977__auto___34517,out))
;
return ((function (switch__28865__auto__,c__28977__auto___34517,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto____0 = (function (){
var statearr_34513 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34513[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto__);

(statearr_34513[(1)] = (1));

return statearr_34513;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto____1 = (function (state_34499){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_34499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e34514){if((e34514 instanceof Object)){
var ex__28869__auto__ = e34514;
var statearr_34515_34524 = state_34499;
(statearr_34515_34524[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34525 = state_34499;
state_34499 = G__34525;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto__ = function(state_34499){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto____1.call(this,state_34499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___34517,out))
})();
var state__28979__auto__ = (function (){var statearr_34516 = f__28978__auto__.call(null);
(statearr_34516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___34517);

return statearr_34516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___34517,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34526,opts){
var map__34530 = p__34526;
var map__34530__$1 = ((((!((map__34530 == null)))?((((map__34530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34530):map__34530);
var eval_body__$1 = cljs.core.get.call(null,map__34530__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34532){var e = e34532;
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
return (function (p1__34533_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34533_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34542){
var vec__34543 = p__34542;
var k = cljs.core.nth.call(null,vec__34543,(0),null);
var v = cljs.core.nth.call(null,vec__34543,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34546){
var vec__34547 = p__34546;
var k = cljs.core.nth.call(null,vec__34547,(0),null);
var v = cljs.core.nth.call(null,vec__34547,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34553,p__34554){
var map__34801 = p__34553;
var map__34801__$1 = ((((!((map__34801 == null)))?((((map__34801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34801):map__34801);
var opts = map__34801__$1;
var before_jsload = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34802 = p__34554;
var map__34802__$1 = ((((!((map__34802 == null)))?((((map__34802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34802):map__34802);
var msg = map__34802__$1;
var files = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34955){
var state_val_34956 = (state_34955[(1)]);
if((state_val_34956 === (7))){
var inst_34819 = (state_34955[(7)]);
var inst_34818 = (state_34955[(8)]);
var inst_34816 = (state_34955[(9)]);
var inst_34817 = (state_34955[(10)]);
var inst_34824 = cljs.core._nth.call(null,inst_34817,inst_34819);
var inst_34825 = figwheel.client.file_reloading.eval_body.call(null,inst_34824,opts);
var inst_34826 = (inst_34819 + (1));
var tmp34957 = inst_34818;
var tmp34958 = inst_34816;
var tmp34959 = inst_34817;
var inst_34816__$1 = tmp34958;
var inst_34817__$1 = tmp34959;
var inst_34818__$1 = tmp34957;
var inst_34819__$1 = inst_34826;
var state_34955__$1 = (function (){var statearr_34960 = state_34955;
(statearr_34960[(7)] = inst_34819__$1);

(statearr_34960[(8)] = inst_34818__$1);

(statearr_34960[(9)] = inst_34816__$1);

(statearr_34960[(11)] = inst_34825);

(statearr_34960[(10)] = inst_34817__$1);

return statearr_34960;
})();
var statearr_34961_35047 = state_34955__$1;
(statearr_34961_35047[(2)] = null);

(statearr_34961_35047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (20))){
var inst_34859 = (state_34955[(12)]);
var inst_34867 = figwheel.client.file_reloading.sort_files.call(null,inst_34859);
var state_34955__$1 = state_34955;
var statearr_34962_35048 = state_34955__$1;
(statearr_34962_35048[(2)] = inst_34867);

(statearr_34962_35048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (27))){
var state_34955__$1 = state_34955;
var statearr_34963_35049 = state_34955__$1;
(statearr_34963_35049[(2)] = null);

(statearr_34963_35049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (1))){
var inst_34808 = (state_34955[(13)]);
var inst_34805 = before_jsload.call(null,files);
var inst_34806 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34807 = (function (){return ((function (inst_34808,inst_34805,inst_34806,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34550_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34550_SHARP_);
});
;})(inst_34808,inst_34805,inst_34806,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34808__$1 = cljs.core.filter.call(null,inst_34807,files);
var inst_34809 = cljs.core.not_empty.call(null,inst_34808__$1);
var state_34955__$1 = (function (){var statearr_34964 = state_34955;
(statearr_34964[(13)] = inst_34808__$1);

(statearr_34964[(14)] = inst_34805);

(statearr_34964[(15)] = inst_34806);

return statearr_34964;
})();
if(cljs.core.truth_(inst_34809)){
var statearr_34965_35050 = state_34955__$1;
(statearr_34965_35050[(1)] = (2));

} else {
var statearr_34966_35051 = state_34955__$1;
(statearr_34966_35051[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (24))){
var state_34955__$1 = state_34955;
var statearr_34967_35052 = state_34955__$1;
(statearr_34967_35052[(2)] = null);

(statearr_34967_35052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (39))){
var inst_34909 = (state_34955[(16)]);
var state_34955__$1 = state_34955;
var statearr_34968_35053 = state_34955__$1;
(statearr_34968_35053[(2)] = inst_34909);

(statearr_34968_35053[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (46))){
var inst_34950 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_34969_35054 = state_34955__$1;
(statearr_34969_35054[(2)] = inst_34950);

(statearr_34969_35054[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (4))){
var inst_34853 = (state_34955[(2)]);
var inst_34854 = cljs.core.List.EMPTY;
var inst_34855 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34854);
var inst_34856 = (function (){return ((function (inst_34853,inst_34854,inst_34855,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34551_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34551_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34551_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34551_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_34853,inst_34854,inst_34855,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34857 = cljs.core.filter.call(null,inst_34856,files);
var inst_34858 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34859 = cljs.core.concat.call(null,inst_34857,inst_34858);
var state_34955__$1 = (function (){var statearr_34970 = state_34955;
(statearr_34970[(12)] = inst_34859);

(statearr_34970[(17)] = inst_34855);

(statearr_34970[(18)] = inst_34853);

return statearr_34970;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34971_35055 = state_34955__$1;
(statearr_34971_35055[(1)] = (16));

} else {
var statearr_34972_35056 = state_34955__$1;
(statearr_34972_35056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (15))){
var inst_34843 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_34973_35057 = state_34955__$1;
(statearr_34973_35057[(2)] = inst_34843);

(statearr_34973_35057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (21))){
var inst_34869 = (state_34955[(19)]);
var inst_34869__$1 = (state_34955[(2)]);
var inst_34870 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34869__$1);
var state_34955__$1 = (function (){var statearr_34974 = state_34955;
(statearr_34974[(19)] = inst_34869__$1);

return statearr_34974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34955__$1,(22),inst_34870);
} else {
if((state_val_34956 === (31))){
var inst_34953 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34955__$1,inst_34953);
} else {
if((state_val_34956 === (32))){
var inst_34909 = (state_34955[(16)]);
var inst_34914 = inst_34909.cljs$lang$protocol_mask$partition0$;
var inst_34915 = (inst_34914 & (64));
var inst_34916 = inst_34909.cljs$core$ISeq$;
var inst_34917 = (inst_34915) || (inst_34916);
var state_34955__$1 = state_34955;
if(cljs.core.truth_(inst_34917)){
var statearr_34975_35058 = state_34955__$1;
(statearr_34975_35058[(1)] = (35));

} else {
var statearr_34976_35059 = state_34955__$1;
(statearr_34976_35059[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (40))){
var inst_34930 = (state_34955[(20)]);
var inst_34929 = (state_34955[(2)]);
var inst_34930__$1 = cljs.core.get.call(null,inst_34929,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34931 = cljs.core.get.call(null,inst_34929,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34932 = cljs.core.not_empty.call(null,inst_34930__$1);
var state_34955__$1 = (function (){var statearr_34977 = state_34955;
(statearr_34977[(21)] = inst_34931);

(statearr_34977[(20)] = inst_34930__$1);

return statearr_34977;
})();
if(cljs.core.truth_(inst_34932)){
var statearr_34978_35060 = state_34955__$1;
(statearr_34978_35060[(1)] = (41));

} else {
var statearr_34979_35061 = state_34955__$1;
(statearr_34979_35061[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (33))){
var state_34955__$1 = state_34955;
var statearr_34980_35062 = state_34955__$1;
(statearr_34980_35062[(2)] = false);

(statearr_34980_35062[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (13))){
var inst_34829 = (state_34955[(22)]);
var inst_34833 = cljs.core.chunk_first.call(null,inst_34829);
var inst_34834 = cljs.core.chunk_rest.call(null,inst_34829);
var inst_34835 = cljs.core.count.call(null,inst_34833);
var inst_34816 = inst_34834;
var inst_34817 = inst_34833;
var inst_34818 = inst_34835;
var inst_34819 = (0);
var state_34955__$1 = (function (){var statearr_34981 = state_34955;
(statearr_34981[(7)] = inst_34819);

(statearr_34981[(8)] = inst_34818);

(statearr_34981[(9)] = inst_34816);

(statearr_34981[(10)] = inst_34817);

return statearr_34981;
})();
var statearr_34982_35063 = state_34955__$1;
(statearr_34982_35063[(2)] = null);

(statearr_34982_35063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (22))){
var inst_34869 = (state_34955[(19)]);
var inst_34873 = (state_34955[(23)]);
var inst_34872 = (state_34955[(24)]);
var inst_34877 = (state_34955[(25)]);
var inst_34872__$1 = (state_34955[(2)]);
var inst_34873__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34872__$1);
var inst_34874 = (function (){var all_files = inst_34869;
var res_SINGLEQUOTE_ = inst_34872__$1;
var res = inst_34873__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34869,inst_34873,inst_34872,inst_34877,inst_34872__$1,inst_34873__$1,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34552_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34552_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34869,inst_34873,inst_34872,inst_34877,inst_34872__$1,inst_34873__$1,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34875 = cljs.core.filter.call(null,inst_34874,inst_34872__$1);
var inst_34876 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34877__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34876);
var inst_34878 = cljs.core.not_empty.call(null,inst_34877__$1);
var state_34955__$1 = (function (){var statearr_34983 = state_34955;
(statearr_34983[(23)] = inst_34873__$1);

(statearr_34983[(24)] = inst_34872__$1);

(statearr_34983[(26)] = inst_34875);

(statearr_34983[(25)] = inst_34877__$1);

return statearr_34983;
})();
if(cljs.core.truth_(inst_34878)){
var statearr_34984_35064 = state_34955__$1;
(statearr_34984_35064[(1)] = (23));

} else {
var statearr_34985_35065 = state_34955__$1;
(statearr_34985_35065[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (36))){
var state_34955__$1 = state_34955;
var statearr_34986_35066 = state_34955__$1;
(statearr_34986_35066[(2)] = false);

(statearr_34986_35066[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (41))){
var inst_34930 = (state_34955[(20)]);
var inst_34934 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34935 = cljs.core.map.call(null,inst_34934,inst_34930);
var inst_34936 = cljs.core.pr_str.call(null,inst_34935);
var inst_34937 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34936)].join('');
var inst_34938 = figwheel.client.utils.log.call(null,inst_34937);
var state_34955__$1 = state_34955;
var statearr_34987_35067 = state_34955__$1;
(statearr_34987_35067[(2)] = inst_34938);

(statearr_34987_35067[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (43))){
var inst_34931 = (state_34955[(21)]);
var inst_34941 = (state_34955[(2)]);
var inst_34942 = cljs.core.not_empty.call(null,inst_34931);
var state_34955__$1 = (function (){var statearr_34988 = state_34955;
(statearr_34988[(27)] = inst_34941);

return statearr_34988;
})();
if(cljs.core.truth_(inst_34942)){
var statearr_34989_35068 = state_34955__$1;
(statearr_34989_35068[(1)] = (44));

} else {
var statearr_34990_35069 = state_34955__$1;
(statearr_34990_35069[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (29))){
var inst_34869 = (state_34955[(19)]);
var inst_34873 = (state_34955[(23)]);
var inst_34872 = (state_34955[(24)]);
var inst_34875 = (state_34955[(26)]);
var inst_34909 = (state_34955[(16)]);
var inst_34877 = (state_34955[(25)]);
var inst_34905 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34908 = (function (){var all_files = inst_34869;
var res_SINGLEQUOTE_ = inst_34872;
var res = inst_34873;
var files_not_loaded = inst_34875;
var dependencies_that_loaded = inst_34877;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34869,inst_34873,inst_34872,inst_34875,inst_34909,inst_34877,inst_34905,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34907){
var map__34991 = p__34907;
var map__34991__$1 = ((((!((map__34991 == null)))?((((map__34991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34991):map__34991);
var namespace = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34869,inst_34873,inst_34872,inst_34875,inst_34909,inst_34877,inst_34905,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34909__$1 = cljs.core.group_by.call(null,inst_34908,inst_34875);
var inst_34911 = (inst_34909__$1 == null);
var inst_34912 = cljs.core.not.call(null,inst_34911);
var state_34955__$1 = (function (){var statearr_34993 = state_34955;
(statearr_34993[(28)] = inst_34905);

(statearr_34993[(16)] = inst_34909__$1);

return statearr_34993;
})();
if(inst_34912){
var statearr_34994_35070 = state_34955__$1;
(statearr_34994_35070[(1)] = (32));

} else {
var statearr_34995_35071 = state_34955__$1;
(statearr_34995_35071[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (44))){
var inst_34931 = (state_34955[(21)]);
var inst_34944 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34931);
var inst_34945 = cljs.core.pr_str.call(null,inst_34944);
var inst_34946 = [cljs.core.str("not required: "),cljs.core.str(inst_34945)].join('');
var inst_34947 = figwheel.client.utils.log.call(null,inst_34946);
var state_34955__$1 = state_34955;
var statearr_34996_35072 = state_34955__$1;
(statearr_34996_35072[(2)] = inst_34947);

(statearr_34996_35072[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (6))){
var inst_34850 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_34997_35073 = state_34955__$1;
(statearr_34997_35073[(2)] = inst_34850);

(statearr_34997_35073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (28))){
var inst_34875 = (state_34955[(26)]);
var inst_34902 = (state_34955[(2)]);
var inst_34903 = cljs.core.not_empty.call(null,inst_34875);
var state_34955__$1 = (function (){var statearr_34998 = state_34955;
(statearr_34998[(29)] = inst_34902);

return statearr_34998;
})();
if(cljs.core.truth_(inst_34903)){
var statearr_34999_35074 = state_34955__$1;
(statearr_34999_35074[(1)] = (29));

} else {
var statearr_35000_35075 = state_34955__$1;
(statearr_35000_35075[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (25))){
var inst_34873 = (state_34955[(23)]);
var inst_34889 = (state_34955[(2)]);
var inst_34890 = cljs.core.not_empty.call(null,inst_34873);
var state_34955__$1 = (function (){var statearr_35001 = state_34955;
(statearr_35001[(30)] = inst_34889);

return statearr_35001;
})();
if(cljs.core.truth_(inst_34890)){
var statearr_35002_35076 = state_34955__$1;
(statearr_35002_35076[(1)] = (26));

} else {
var statearr_35003_35077 = state_34955__$1;
(statearr_35003_35077[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (34))){
var inst_34924 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
if(cljs.core.truth_(inst_34924)){
var statearr_35004_35078 = state_34955__$1;
(statearr_35004_35078[(1)] = (38));

} else {
var statearr_35005_35079 = state_34955__$1;
(statearr_35005_35079[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (17))){
var state_34955__$1 = state_34955;
var statearr_35006_35080 = state_34955__$1;
(statearr_35006_35080[(2)] = recompile_dependents);

(statearr_35006_35080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (3))){
var state_34955__$1 = state_34955;
var statearr_35007_35081 = state_34955__$1;
(statearr_35007_35081[(2)] = null);

(statearr_35007_35081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (12))){
var inst_34846 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35008_35082 = state_34955__$1;
(statearr_35008_35082[(2)] = inst_34846);

(statearr_35008_35082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (2))){
var inst_34808 = (state_34955[(13)]);
var inst_34815 = cljs.core.seq.call(null,inst_34808);
var inst_34816 = inst_34815;
var inst_34817 = null;
var inst_34818 = (0);
var inst_34819 = (0);
var state_34955__$1 = (function (){var statearr_35009 = state_34955;
(statearr_35009[(7)] = inst_34819);

(statearr_35009[(8)] = inst_34818);

(statearr_35009[(9)] = inst_34816);

(statearr_35009[(10)] = inst_34817);

return statearr_35009;
})();
var statearr_35010_35083 = state_34955__$1;
(statearr_35010_35083[(2)] = null);

(statearr_35010_35083[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (23))){
var inst_34869 = (state_34955[(19)]);
var inst_34873 = (state_34955[(23)]);
var inst_34872 = (state_34955[(24)]);
var inst_34875 = (state_34955[(26)]);
var inst_34877 = (state_34955[(25)]);
var inst_34880 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34882 = (function (){var all_files = inst_34869;
var res_SINGLEQUOTE_ = inst_34872;
var res = inst_34873;
var files_not_loaded = inst_34875;
var dependencies_that_loaded = inst_34877;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34869,inst_34873,inst_34872,inst_34875,inst_34877,inst_34880,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34881){
var map__35011 = p__34881;
var map__35011__$1 = ((((!((map__35011 == null)))?((((map__35011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35011):map__35011);
var request_url = cljs.core.get.call(null,map__35011__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34869,inst_34873,inst_34872,inst_34875,inst_34877,inst_34880,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34883 = cljs.core.reverse.call(null,inst_34877);
var inst_34884 = cljs.core.map.call(null,inst_34882,inst_34883);
var inst_34885 = cljs.core.pr_str.call(null,inst_34884);
var inst_34886 = figwheel.client.utils.log.call(null,inst_34885);
var state_34955__$1 = (function (){var statearr_35013 = state_34955;
(statearr_35013[(31)] = inst_34880);

return statearr_35013;
})();
var statearr_35014_35084 = state_34955__$1;
(statearr_35014_35084[(2)] = inst_34886);

(statearr_35014_35084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (35))){
var state_34955__$1 = state_34955;
var statearr_35015_35085 = state_34955__$1;
(statearr_35015_35085[(2)] = true);

(statearr_35015_35085[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (19))){
var inst_34859 = (state_34955[(12)]);
var inst_34865 = figwheel.client.file_reloading.expand_files.call(null,inst_34859);
var state_34955__$1 = state_34955;
var statearr_35016_35086 = state_34955__$1;
(statearr_35016_35086[(2)] = inst_34865);

(statearr_35016_35086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (11))){
var state_34955__$1 = state_34955;
var statearr_35017_35087 = state_34955__$1;
(statearr_35017_35087[(2)] = null);

(statearr_35017_35087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (9))){
var inst_34848 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35018_35088 = state_34955__$1;
(statearr_35018_35088[(2)] = inst_34848);

(statearr_35018_35088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (5))){
var inst_34819 = (state_34955[(7)]);
var inst_34818 = (state_34955[(8)]);
var inst_34821 = (inst_34819 < inst_34818);
var inst_34822 = inst_34821;
var state_34955__$1 = state_34955;
if(cljs.core.truth_(inst_34822)){
var statearr_35019_35089 = state_34955__$1;
(statearr_35019_35089[(1)] = (7));

} else {
var statearr_35020_35090 = state_34955__$1;
(statearr_35020_35090[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (14))){
var inst_34829 = (state_34955[(22)]);
var inst_34838 = cljs.core.first.call(null,inst_34829);
var inst_34839 = figwheel.client.file_reloading.eval_body.call(null,inst_34838,opts);
var inst_34840 = cljs.core.next.call(null,inst_34829);
var inst_34816 = inst_34840;
var inst_34817 = null;
var inst_34818 = (0);
var inst_34819 = (0);
var state_34955__$1 = (function (){var statearr_35021 = state_34955;
(statearr_35021[(7)] = inst_34819);

(statearr_35021[(8)] = inst_34818);

(statearr_35021[(9)] = inst_34816);

(statearr_35021[(10)] = inst_34817);

(statearr_35021[(32)] = inst_34839);

return statearr_35021;
})();
var statearr_35022_35091 = state_34955__$1;
(statearr_35022_35091[(2)] = null);

(statearr_35022_35091[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (45))){
var state_34955__$1 = state_34955;
var statearr_35023_35092 = state_34955__$1;
(statearr_35023_35092[(2)] = null);

(statearr_35023_35092[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (26))){
var inst_34869 = (state_34955[(19)]);
var inst_34873 = (state_34955[(23)]);
var inst_34872 = (state_34955[(24)]);
var inst_34875 = (state_34955[(26)]);
var inst_34877 = (state_34955[(25)]);
var inst_34892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34894 = (function (){var all_files = inst_34869;
var res_SINGLEQUOTE_ = inst_34872;
var res = inst_34873;
var files_not_loaded = inst_34875;
var dependencies_that_loaded = inst_34877;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34869,inst_34873,inst_34872,inst_34875,inst_34877,inst_34892,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34893){
var map__35024 = p__34893;
var map__35024__$1 = ((((!((map__35024 == null)))?((((map__35024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35024):map__35024);
var namespace = cljs.core.get.call(null,map__35024__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35024__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34869,inst_34873,inst_34872,inst_34875,inst_34877,inst_34892,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34895 = cljs.core.map.call(null,inst_34894,inst_34873);
var inst_34896 = cljs.core.pr_str.call(null,inst_34895);
var inst_34897 = figwheel.client.utils.log.call(null,inst_34896);
var inst_34898 = (function (){var all_files = inst_34869;
var res_SINGLEQUOTE_ = inst_34872;
var res = inst_34873;
var files_not_loaded = inst_34875;
var dependencies_that_loaded = inst_34877;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34869,inst_34873,inst_34872,inst_34875,inst_34877,inst_34892,inst_34894,inst_34895,inst_34896,inst_34897,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34869,inst_34873,inst_34872,inst_34875,inst_34877,inst_34892,inst_34894,inst_34895,inst_34896,inst_34897,state_val_34956,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34899 = setTimeout(inst_34898,(10));
var state_34955__$1 = (function (){var statearr_35026 = state_34955;
(statearr_35026[(33)] = inst_34897);

(statearr_35026[(34)] = inst_34892);

return statearr_35026;
})();
var statearr_35027_35093 = state_34955__$1;
(statearr_35027_35093[(2)] = inst_34899);

(statearr_35027_35093[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (16))){
var state_34955__$1 = state_34955;
var statearr_35028_35094 = state_34955__$1;
(statearr_35028_35094[(2)] = reload_dependents);

(statearr_35028_35094[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (38))){
var inst_34909 = (state_34955[(16)]);
var inst_34926 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34909);
var state_34955__$1 = state_34955;
var statearr_35029_35095 = state_34955__$1;
(statearr_35029_35095[(2)] = inst_34926);

(statearr_35029_35095[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (30))){
var state_34955__$1 = state_34955;
var statearr_35030_35096 = state_34955__$1;
(statearr_35030_35096[(2)] = null);

(statearr_35030_35096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (10))){
var inst_34829 = (state_34955[(22)]);
var inst_34831 = cljs.core.chunked_seq_QMARK_.call(null,inst_34829);
var state_34955__$1 = state_34955;
if(inst_34831){
var statearr_35031_35097 = state_34955__$1;
(statearr_35031_35097[(1)] = (13));

} else {
var statearr_35032_35098 = state_34955__$1;
(statearr_35032_35098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (18))){
var inst_34863 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
if(cljs.core.truth_(inst_34863)){
var statearr_35033_35099 = state_34955__$1;
(statearr_35033_35099[(1)] = (19));

} else {
var statearr_35034_35100 = state_34955__$1;
(statearr_35034_35100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (42))){
var state_34955__$1 = state_34955;
var statearr_35035_35101 = state_34955__$1;
(statearr_35035_35101[(2)] = null);

(statearr_35035_35101[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (37))){
var inst_34921 = (state_34955[(2)]);
var state_34955__$1 = state_34955;
var statearr_35036_35102 = state_34955__$1;
(statearr_35036_35102[(2)] = inst_34921);

(statearr_35036_35102[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34956 === (8))){
var inst_34829 = (state_34955[(22)]);
var inst_34816 = (state_34955[(9)]);
var inst_34829__$1 = cljs.core.seq.call(null,inst_34816);
var state_34955__$1 = (function (){var statearr_35037 = state_34955;
(statearr_35037[(22)] = inst_34829__$1);

return statearr_35037;
})();
if(inst_34829__$1){
var statearr_35038_35103 = state_34955__$1;
(statearr_35038_35103[(1)] = (10));

} else {
var statearr_35039_35104 = state_34955__$1;
(statearr_35039_35104[(1)] = (11));

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
});})(c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28865__auto__,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto____0 = (function (){
var statearr_35043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35043[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto__);

(statearr_35043[(1)] = (1));

return statearr_35043;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto____1 = (function (state_34955){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_34955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e35044){if((e35044 instanceof Object)){
var ex__28869__auto__ = e35044;
var statearr_35045_35105 = state_34955;
(statearr_35045_35105[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35106 = state_34955;
state_34955 = G__35106;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto__ = function(state_34955){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto____1.call(this,state_34955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28979__auto__ = (function (){var statearr_35046 = f__28978__auto__.call(null);
(statearr_35046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_35046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__,map__34801,map__34801__$1,opts,before_jsload,on_jsload,reload_dependents,map__34802,map__34802__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28977__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35109,link){
var map__35112 = p__35109;
var map__35112__$1 = ((((!((map__35112 == null)))?((((map__35112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35112):map__35112);
var file = cljs.core.get.call(null,map__35112__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35112,map__35112__$1,file){
return (function (p1__35107_SHARP_,p2__35108_SHARP_){
if(cljs.core._EQ_.call(null,p1__35107_SHARP_,p2__35108_SHARP_)){
return p1__35107_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35112,map__35112__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35118){
var map__35119 = p__35118;
var map__35119__$1 = ((((!((map__35119 == null)))?((((map__35119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35119):map__35119);
var match_length = cljs.core.get.call(null,map__35119__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35119__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35114_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35114_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35121_SHARP_,p2__35122_SHARP_){
return cljs.core.assoc.call(null,p1__35121_SHARP_,cljs.core.get.call(null,p2__35122_SHARP_,key),p2__35122_SHARP_);
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
var loaded_f_datas_35123 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35123);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35123);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35124,p__35125){
var map__35130 = p__35124;
var map__35130__$1 = ((((!((map__35130 == null)))?((((map__35130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35130):map__35130);
var on_cssload = cljs.core.get.call(null,map__35130__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35131 = p__35125;
var map__35131__$1 = ((((!((map__35131 == null)))?((((map__35131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35131):map__35131);
var files_msg = map__35131__$1;
var files = cljs.core.get.call(null,map__35131__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1658328682771