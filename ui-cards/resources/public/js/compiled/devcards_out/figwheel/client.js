// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36896 = [];
var len__25923__auto___36899 = arguments.length;
var i__25924__auto___36900 = (0);
while(true){
if((i__25924__auto___36900 < len__25923__auto___36899)){
args36896.push((arguments[i__25924__auto___36900]));

var G__36901 = (i__25924__auto___36900 + (1));
i__25924__auto___36900 = G__36901;
continue;
} else {
}
break;
}

var G__36898 = args36896.length;
switch (G__36898) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36896.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___36904 = arguments.length;
var i__25924__auto___36905 = (0);
while(true){
if((i__25924__auto___36905 < len__25923__auto___36904)){
args__25930__auto__.push((arguments[i__25924__auto___36905]));

var G__36906 = (i__25924__auto___36905 + (1));
i__25924__auto___36905 = G__36906;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36903){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36903));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___36908 = arguments.length;
var i__25924__auto___36909 = (0);
while(true){
if((i__25924__auto___36909 < len__25923__auto___36908)){
args__25930__auto__.push((arguments[i__25924__auto___36909]));

var G__36910 = (i__25924__auto___36909 + (1));
i__25924__auto___36909 = G__36910;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36907){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36907));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36911){
var map__36914 = p__36911;
var map__36914__$1 = ((((!((map__36914 == null)))?((((map__36914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36914):map__36914);
var message = cljs.core.get.call(null,map__36914__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36914__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24848__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24836__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24836__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24836__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28977__auto___37076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___37076,ch){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___37076,ch){
return (function (state_37045){
var state_val_37046 = (state_37045[(1)]);
if((state_val_37046 === (7))){
var inst_37041 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
var statearr_37047_37077 = state_37045__$1;
(statearr_37047_37077[(2)] = inst_37041);

(statearr_37047_37077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (1))){
var state_37045__$1 = state_37045;
var statearr_37048_37078 = state_37045__$1;
(statearr_37048_37078[(2)] = null);

(statearr_37048_37078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (4))){
var inst_36998 = (state_37045[(7)]);
var inst_36998__$1 = (state_37045[(2)]);
var state_37045__$1 = (function (){var statearr_37049 = state_37045;
(statearr_37049[(7)] = inst_36998__$1);

return statearr_37049;
})();
if(cljs.core.truth_(inst_36998__$1)){
var statearr_37050_37079 = state_37045__$1;
(statearr_37050_37079[(1)] = (5));

} else {
var statearr_37051_37080 = state_37045__$1;
(statearr_37051_37080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (15))){
var inst_37005 = (state_37045[(8)]);
var inst_37020 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37005);
var inst_37021 = cljs.core.first.call(null,inst_37020);
var inst_37022 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37021);
var inst_37023 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37022)].join('');
var inst_37024 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37023);
var state_37045__$1 = state_37045;
var statearr_37052_37081 = state_37045__$1;
(statearr_37052_37081[(2)] = inst_37024);

(statearr_37052_37081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (13))){
var inst_37029 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
var statearr_37053_37082 = state_37045__$1;
(statearr_37053_37082[(2)] = inst_37029);

(statearr_37053_37082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (6))){
var state_37045__$1 = state_37045;
var statearr_37054_37083 = state_37045__$1;
(statearr_37054_37083[(2)] = null);

(statearr_37054_37083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (17))){
var inst_37027 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
var statearr_37055_37084 = state_37045__$1;
(statearr_37055_37084[(2)] = inst_37027);

(statearr_37055_37084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (3))){
var inst_37043 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37045__$1,inst_37043);
} else {
if((state_val_37046 === (12))){
var inst_37004 = (state_37045[(9)]);
var inst_37018 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37004,opts);
var state_37045__$1 = state_37045;
if(cljs.core.truth_(inst_37018)){
var statearr_37056_37085 = state_37045__$1;
(statearr_37056_37085[(1)] = (15));

} else {
var statearr_37057_37086 = state_37045__$1;
(statearr_37057_37086[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (2))){
var state_37045__$1 = state_37045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37045__$1,(4),ch);
} else {
if((state_val_37046 === (11))){
var inst_37005 = (state_37045[(8)]);
var inst_37010 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37011 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37005);
var inst_37012 = cljs.core.async.timeout.call(null,(1000));
var inst_37013 = [inst_37011,inst_37012];
var inst_37014 = (new cljs.core.PersistentVector(null,2,(5),inst_37010,inst_37013,null));
var state_37045__$1 = state_37045;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37045__$1,(14),inst_37014);
} else {
if((state_val_37046 === (9))){
var inst_37005 = (state_37045[(8)]);
var inst_37031 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37032 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37005);
var inst_37033 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37032);
var inst_37034 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37033)].join('');
var inst_37035 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37034);
var state_37045__$1 = (function (){var statearr_37058 = state_37045;
(statearr_37058[(10)] = inst_37031);

return statearr_37058;
})();
var statearr_37059_37087 = state_37045__$1;
(statearr_37059_37087[(2)] = inst_37035);

(statearr_37059_37087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (5))){
var inst_36998 = (state_37045[(7)]);
var inst_37000 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37001 = (new cljs.core.PersistentArrayMap(null,2,inst_37000,null));
var inst_37002 = (new cljs.core.PersistentHashSet(null,inst_37001,null));
var inst_37003 = figwheel.client.focus_msgs.call(null,inst_37002,inst_36998);
var inst_37004 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37003);
var inst_37005 = cljs.core.first.call(null,inst_37003);
var inst_37006 = figwheel.client.autoload_QMARK_.call(null);
var state_37045__$1 = (function (){var statearr_37060 = state_37045;
(statearr_37060[(9)] = inst_37004);

(statearr_37060[(8)] = inst_37005);

return statearr_37060;
})();
if(cljs.core.truth_(inst_37006)){
var statearr_37061_37088 = state_37045__$1;
(statearr_37061_37088[(1)] = (8));

} else {
var statearr_37062_37089 = state_37045__$1;
(statearr_37062_37089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (14))){
var inst_37016 = (state_37045[(2)]);
var state_37045__$1 = state_37045;
var statearr_37063_37090 = state_37045__$1;
(statearr_37063_37090[(2)] = inst_37016);

(statearr_37063_37090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (16))){
var state_37045__$1 = state_37045;
var statearr_37064_37091 = state_37045__$1;
(statearr_37064_37091[(2)] = null);

(statearr_37064_37091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (10))){
var inst_37037 = (state_37045[(2)]);
var state_37045__$1 = (function (){var statearr_37065 = state_37045;
(statearr_37065[(11)] = inst_37037);

return statearr_37065;
})();
var statearr_37066_37092 = state_37045__$1;
(statearr_37066_37092[(2)] = null);

(statearr_37066_37092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37046 === (8))){
var inst_37004 = (state_37045[(9)]);
var inst_37008 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37004,opts);
var state_37045__$1 = state_37045;
if(cljs.core.truth_(inst_37008)){
var statearr_37067_37093 = state_37045__$1;
(statearr_37067_37093[(1)] = (11));

} else {
var statearr_37068_37094 = state_37045__$1;
(statearr_37068_37094[(1)] = (12));

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
});})(c__28977__auto___37076,ch))
;
return ((function (switch__28865__auto__,c__28977__auto___37076,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28866__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28866__auto____0 = (function (){
var statearr_37072 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37072[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28866__auto__);

(statearr_37072[(1)] = (1));

return statearr_37072;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28866__auto____1 = (function (state_37045){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_37045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e37073){if((e37073 instanceof Object)){
var ex__28869__auto__ = e37073;
var statearr_37074_37095 = state_37045;
(statearr_37074_37095[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37096 = state_37045;
state_37045 = G__37096;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28866__auto__ = function(state_37045){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28866__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28866__auto____1.call(this,state_37045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28866__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28866__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___37076,ch))
})();
var state__28979__auto__ = (function (){var statearr_37075 = f__28978__auto__.call(null);
(statearr_37075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___37076);

return statearr_37075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___37076,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37097_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37097_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37100 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37100){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37099){if((e37099 instanceof Error)){
var e = e37099;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37100], null));
} else {
var e = e37099;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37100))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37101){
var map__37110 = p__37101;
var map__37110__$1 = ((((!((map__37110 == null)))?((((map__37110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37110):map__37110);
var opts = map__37110__$1;
var build_id = cljs.core.get.call(null,map__37110__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37110,map__37110__$1,opts,build_id){
return (function (p__37112){
var vec__37113 = p__37112;
var seq__37114 = cljs.core.seq.call(null,vec__37113);
var first__37115 = cljs.core.first.call(null,seq__37114);
var seq__37114__$1 = cljs.core.next.call(null,seq__37114);
var map__37116 = first__37115;
var map__37116__$1 = ((((!((map__37116 == null)))?((((map__37116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37116):map__37116);
var msg = map__37116__$1;
var msg_name = cljs.core.get.call(null,map__37116__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37114__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37113,seq__37114,first__37115,seq__37114__$1,map__37116,map__37116__$1,msg,msg_name,_,map__37110,map__37110__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37113,seq__37114,first__37115,seq__37114__$1,map__37116,map__37116__$1,msg,msg_name,_,map__37110,map__37110__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37110,map__37110__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37124){
var vec__37125 = p__37124;
var seq__37126 = cljs.core.seq.call(null,vec__37125);
var first__37127 = cljs.core.first.call(null,seq__37126);
var seq__37126__$1 = cljs.core.next.call(null,seq__37126);
var map__37128 = first__37127;
var map__37128__$1 = ((((!((map__37128 == null)))?((((map__37128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37128):map__37128);
var msg = map__37128__$1;
var msg_name = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37126__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37130){
var map__37142 = p__37130;
var map__37142__$1 = ((((!((map__37142 == null)))?((((map__37142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37142):map__37142);
var on_compile_warning = cljs.core.get.call(null,map__37142__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37142__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37142,map__37142__$1,on_compile_warning,on_compile_fail){
return (function (p__37144){
var vec__37145 = p__37144;
var seq__37146 = cljs.core.seq.call(null,vec__37145);
var first__37147 = cljs.core.first.call(null,seq__37146);
var seq__37146__$1 = cljs.core.next.call(null,seq__37146);
var map__37148 = first__37147;
var map__37148__$1 = ((((!((map__37148 == null)))?((((map__37148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37148):map__37148);
var msg = map__37148__$1;
var msg_name = cljs.core.get.call(null,map__37148__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37146__$1;
var pred__37150 = cljs.core._EQ_;
var expr__37151 = msg_name;
if(cljs.core.truth_(pred__37150.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37151))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37150.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37151))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37142,map__37142__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__,msg_hist,msg_names,msg){
return (function (state_37379){
var state_val_37380 = (state_37379[(1)]);
if((state_val_37380 === (7))){
var inst_37299 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
if(cljs.core.truth_(inst_37299)){
var statearr_37381_37431 = state_37379__$1;
(statearr_37381_37431[(1)] = (8));

} else {
var statearr_37382_37432 = state_37379__$1;
(statearr_37382_37432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (20))){
var inst_37373 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
var statearr_37383_37433 = state_37379__$1;
(statearr_37383_37433[(2)] = inst_37373);

(statearr_37383_37433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (27))){
var inst_37369 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
var statearr_37384_37434 = state_37379__$1;
(statearr_37384_37434[(2)] = inst_37369);

(statearr_37384_37434[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (1))){
var inst_37292 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37379__$1 = state_37379;
if(cljs.core.truth_(inst_37292)){
var statearr_37385_37435 = state_37379__$1;
(statearr_37385_37435[(1)] = (2));

} else {
var statearr_37386_37436 = state_37379__$1;
(statearr_37386_37436[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (24))){
var inst_37371 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
var statearr_37387_37437 = state_37379__$1;
(statearr_37387_37437[(2)] = inst_37371);

(statearr_37387_37437[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (4))){
var inst_37377 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37379__$1,inst_37377);
} else {
if((state_val_37380 === (15))){
var inst_37375 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
var statearr_37388_37438 = state_37379__$1;
(statearr_37388_37438[(2)] = inst_37375);

(statearr_37388_37438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (21))){
var inst_37328 = (state_37379[(2)]);
var inst_37329 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37330 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37329);
var state_37379__$1 = (function (){var statearr_37389 = state_37379;
(statearr_37389[(7)] = inst_37328);

return statearr_37389;
})();
var statearr_37390_37439 = state_37379__$1;
(statearr_37390_37439[(2)] = inst_37330);

(statearr_37390_37439[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (31))){
var inst_37358 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37379__$1 = state_37379;
if(cljs.core.truth_(inst_37358)){
var statearr_37391_37440 = state_37379__$1;
(statearr_37391_37440[(1)] = (34));

} else {
var statearr_37392_37441 = state_37379__$1;
(statearr_37392_37441[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (32))){
var inst_37367 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
var statearr_37393_37442 = state_37379__$1;
(statearr_37393_37442[(2)] = inst_37367);

(statearr_37393_37442[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (33))){
var inst_37354 = (state_37379[(2)]);
var inst_37355 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37356 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37355);
var state_37379__$1 = (function (){var statearr_37394 = state_37379;
(statearr_37394[(8)] = inst_37354);

return statearr_37394;
})();
var statearr_37395_37443 = state_37379__$1;
(statearr_37395_37443[(2)] = inst_37356);

(statearr_37395_37443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (13))){
var inst_37313 = figwheel.client.heads_up.clear.call(null);
var state_37379__$1 = state_37379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37379__$1,(16),inst_37313);
} else {
if((state_val_37380 === (22))){
var inst_37334 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37335 = figwheel.client.heads_up.append_warning_message.call(null,inst_37334);
var state_37379__$1 = state_37379;
var statearr_37396_37444 = state_37379__$1;
(statearr_37396_37444[(2)] = inst_37335);

(statearr_37396_37444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (36))){
var inst_37365 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
var statearr_37397_37445 = state_37379__$1;
(statearr_37397_37445[(2)] = inst_37365);

(statearr_37397_37445[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (29))){
var inst_37345 = (state_37379[(2)]);
var inst_37346 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37347 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37346);
var state_37379__$1 = (function (){var statearr_37398 = state_37379;
(statearr_37398[(9)] = inst_37345);

return statearr_37398;
})();
var statearr_37399_37446 = state_37379__$1;
(statearr_37399_37446[(2)] = inst_37347);

(statearr_37399_37446[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (6))){
var inst_37294 = (state_37379[(10)]);
var state_37379__$1 = state_37379;
var statearr_37400_37447 = state_37379__$1;
(statearr_37400_37447[(2)] = inst_37294);

(statearr_37400_37447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (28))){
var inst_37341 = (state_37379[(2)]);
var inst_37342 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37343 = figwheel.client.heads_up.display_warning.call(null,inst_37342);
var state_37379__$1 = (function (){var statearr_37401 = state_37379;
(statearr_37401[(11)] = inst_37341);

return statearr_37401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37379__$1,(29),inst_37343);
} else {
if((state_val_37380 === (25))){
var inst_37339 = figwheel.client.heads_up.clear.call(null);
var state_37379__$1 = state_37379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37379__$1,(28),inst_37339);
} else {
if((state_val_37380 === (34))){
var inst_37360 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37379__$1 = state_37379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37379__$1,(37),inst_37360);
} else {
if((state_val_37380 === (17))){
var inst_37319 = (state_37379[(2)]);
var inst_37320 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37321 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37320);
var state_37379__$1 = (function (){var statearr_37402 = state_37379;
(statearr_37402[(12)] = inst_37319);

return statearr_37402;
})();
var statearr_37403_37448 = state_37379__$1;
(statearr_37403_37448[(2)] = inst_37321);

(statearr_37403_37448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (3))){
var inst_37311 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37379__$1 = state_37379;
if(cljs.core.truth_(inst_37311)){
var statearr_37404_37449 = state_37379__$1;
(statearr_37404_37449[(1)] = (13));

} else {
var statearr_37405_37450 = state_37379__$1;
(statearr_37405_37450[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (12))){
var inst_37307 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
var statearr_37406_37451 = state_37379__$1;
(statearr_37406_37451[(2)] = inst_37307);

(statearr_37406_37451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (2))){
var inst_37294 = (state_37379[(10)]);
var inst_37294__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37379__$1 = (function (){var statearr_37407 = state_37379;
(statearr_37407[(10)] = inst_37294__$1);

return statearr_37407;
})();
if(cljs.core.truth_(inst_37294__$1)){
var statearr_37408_37452 = state_37379__$1;
(statearr_37408_37452[(1)] = (5));

} else {
var statearr_37409_37453 = state_37379__$1;
(statearr_37409_37453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (23))){
var inst_37337 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37379__$1 = state_37379;
if(cljs.core.truth_(inst_37337)){
var statearr_37410_37454 = state_37379__$1;
(statearr_37410_37454[(1)] = (25));

} else {
var statearr_37411_37455 = state_37379__$1;
(statearr_37411_37455[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (35))){
var state_37379__$1 = state_37379;
var statearr_37412_37456 = state_37379__$1;
(statearr_37412_37456[(2)] = null);

(statearr_37412_37456[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (19))){
var inst_37332 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37379__$1 = state_37379;
if(cljs.core.truth_(inst_37332)){
var statearr_37413_37457 = state_37379__$1;
(statearr_37413_37457[(1)] = (22));

} else {
var statearr_37414_37458 = state_37379__$1;
(statearr_37414_37458[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (11))){
var inst_37303 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
var statearr_37415_37459 = state_37379__$1;
(statearr_37415_37459[(2)] = inst_37303);

(statearr_37415_37459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (9))){
var inst_37305 = figwheel.client.heads_up.clear.call(null);
var state_37379__$1 = state_37379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37379__$1,(12),inst_37305);
} else {
if((state_val_37380 === (5))){
var inst_37296 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37379__$1 = state_37379;
var statearr_37416_37460 = state_37379__$1;
(statearr_37416_37460[(2)] = inst_37296);

(statearr_37416_37460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (14))){
var inst_37323 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37379__$1 = state_37379;
if(cljs.core.truth_(inst_37323)){
var statearr_37417_37461 = state_37379__$1;
(statearr_37417_37461[(1)] = (18));

} else {
var statearr_37418_37462 = state_37379__$1;
(statearr_37418_37462[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (26))){
var inst_37349 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37379__$1 = state_37379;
if(cljs.core.truth_(inst_37349)){
var statearr_37419_37463 = state_37379__$1;
(statearr_37419_37463[(1)] = (30));

} else {
var statearr_37420_37464 = state_37379__$1;
(statearr_37420_37464[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (16))){
var inst_37315 = (state_37379[(2)]);
var inst_37316 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37317 = figwheel.client.heads_up.display_exception.call(null,inst_37316);
var state_37379__$1 = (function (){var statearr_37421 = state_37379;
(statearr_37421[(13)] = inst_37315);

return statearr_37421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37379__$1,(17),inst_37317);
} else {
if((state_val_37380 === (30))){
var inst_37351 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37352 = figwheel.client.heads_up.display_warning.call(null,inst_37351);
var state_37379__$1 = state_37379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37379__$1,(33),inst_37352);
} else {
if((state_val_37380 === (10))){
var inst_37309 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
var statearr_37422_37465 = state_37379__$1;
(statearr_37422_37465[(2)] = inst_37309);

(statearr_37422_37465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (18))){
var inst_37325 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37326 = figwheel.client.heads_up.display_exception.call(null,inst_37325);
var state_37379__$1 = state_37379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37379__$1,(21),inst_37326);
} else {
if((state_val_37380 === (37))){
var inst_37362 = (state_37379[(2)]);
var state_37379__$1 = state_37379;
var statearr_37423_37466 = state_37379__$1;
(statearr_37423_37466[(2)] = inst_37362);

(statearr_37423_37466[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37380 === (8))){
var inst_37301 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37379__$1 = state_37379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37379__$1,(11),inst_37301);
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
});})(c__28977__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28865__auto__,c__28977__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto____0 = (function (){
var statearr_37427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37427[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto__);

(statearr_37427[(1)] = (1));

return statearr_37427;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto____1 = (function (state_37379){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_37379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e37428){if((e37428 instanceof Object)){
var ex__28869__auto__ = e37428;
var statearr_37429_37467 = state_37379;
(statearr_37429_37467[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37468 = state_37379;
state_37379 = G__37468;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto__ = function(state_37379){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto____1.call(this,state_37379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__,msg_hist,msg_names,msg))
})();
var state__28979__auto__ = (function (){var statearr_37430 = f__28978__auto__.call(null);
(statearr_37430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_37430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__,msg_hist,msg_names,msg))
);

return c__28977__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28977__auto___37531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___37531,ch){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___37531,ch){
return (function (state_37514){
var state_val_37515 = (state_37514[(1)]);
if((state_val_37515 === (1))){
var state_37514__$1 = state_37514;
var statearr_37516_37532 = state_37514__$1;
(statearr_37516_37532[(2)] = null);

(statearr_37516_37532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (2))){
var state_37514__$1 = state_37514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37514__$1,(4),ch);
} else {
if((state_val_37515 === (3))){
var inst_37512 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37514__$1,inst_37512);
} else {
if((state_val_37515 === (4))){
var inst_37502 = (state_37514[(7)]);
var inst_37502__$1 = (state_37514[(2)]);
var state_37514__$1 = (function (){var statearr_37517 = state_37514;
(statearr_37517[(7)] = inst_37502__$1);

return statearr_37517;
})();
if(cljs.core.truth_(inst_37502__$1)){
var statearr_37518_37533 = state_37514__$1;
(statearr_37518_37533[(1)] = (5));

} else {
var statearr_37519_37534 = state_37514__$1;
(statearr_37519_37534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (5))){
var inst_37502 = (state_37514[(7)]);
var inst_37504 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37502);
var state_37514__$1 = state_37514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37514__$1,(8),inst_37504);
} else {
if((state_val_37515 === (6))){
var state_37514__$1 = state_37514;
var statearr_37520_37535 = state_37514__$1;
(statearr_37520_37535[(2)] = null);

(statearr_37520_37535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (7))){
var inst_37510 = (state_37514[(2)]);
var state_37514__$1 = state_37514;
var statearr_37521_37536 = state_37514__$1;
(statearr_37521_37536[(2)] = inst_37510);

(statearr_37521_37536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37515 === (8))){
var inst_37506 = (state_37514[(2)]);
var state_37514__$1 = (function (){var statearr_37522 = state_37514;
(statearr_37522[(8)] = inst_37506);

return statearr_37522;
})();
var statearr_37523_37537 = state_37514__$1;
(statearr_37523_37537[(2)] = null);

(statearr_37523_37537[(1)] = (2));


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
});})(c__28977__auto___37531,ch))
;
return ((function (switch__28865__auto__,c__28977__auto___37531,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28866__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28866__auto____0 = (function (){
var statearr_37527 = [null,null,null,null,null,null,null,null,null];
(statearr_37527[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28866__auto__);

(statearr_37527[(1)] = (1));

return statearr_37527;
});
var figwheel$client$heads_up_plugin_$_state_machine__28866__auto____1 = (function (state_37514){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_37514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e37528){if((e37528 instanceof Object)){
var ex__28869__auto__ = e37528;
var statearr_37529_37538 = state_37514;
(statearr_37529_37538[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37539 = state_37514;
state_37514 = G__37539;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28866__auto__ = function(state_37514){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28866__auto____1.call(this,state_37514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28866__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28866__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___37531,ch))
})();
var state__28979__auto__ = (function (){var statearr_37530 = f__28978__auto__.call(null);
(statearr_37530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___37531);

return statearr_37530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___37531,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__){
return (function (state_37560){
var state_val_37561 = (state_37560[(1)]);
if((state_val_37561 === (1))){
var inst_37555 = cljs.core.async.timeout.call(null,(3000));
var state_37560__$1 = state_37560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37560__$1,(2),inst_37555);
} else {
if((state_val_37561 === (2))){
var inst_37557 = (state_37560[(2)]);
var inst_37558 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37560__$1 = (function (){var statearr_37562 = state_37560;
(statearr_37562[(7)] = inst_37557);

return statearr_37562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37560__$1,inst_37558);
} else {
return null;
}
}
});})(c__28977__auto__))
;
return ((function (switch__28865__auto__,c__28977__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28866__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28866__auto____0 = (function (){
var statearr_37566 = [null,null,null,null,null,null,null,null];
(statearr_37566[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28866__auto__);

(statearr_37566[(1)] = (1));

return statearr_37566;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28866__auto____1 = (function (state_37560){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_37560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e37567){if((e37567 instanceof Object)){
var ex__28869__auto__ = e37567;
var statearr_37568_37570 = state_37560;
(statearr_37568_37570[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37571 = state_37560;
state_37560 = G__37571;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28866__auto__ = function(state_37560){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28866__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28866__auto____1.call(this,state_37560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28866__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28866__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__))
})();
var state__28979__auto__ = (function (){var statearr_37569 = f__28978__auto__.call(null);
(statearr_37569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_37569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__))
);

return c__28977__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37594){
var state_val_37595 = (state_37594[(1)]);
if((state_val_37595 === (1))){
var inst_37588 = cljs.core.async.timeout.call(null,(2000));
var state_37594__$1 = state_37594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37594__$1,(2),inst_37588);
} else {
if((state_val_37595 === (2))){
var inst_37590 = (state_37594[(2)]);
var inst_37591 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37592 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37591);
var state_37594__$1 = (function (){var statearr_37596 = state_37594;
(statearr_37596[(7)] = inst_37590);

return statearr_37596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37594__$1,inst_37592);
} else {
return null;
}
}
});})(c__28977__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28865__auto__,c__28977__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto____0 = (function (){
var statearr_37600 = [null,null,null,null,null,null,null,null];
(statearr_37600[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto__);

(statearr_37600[(1)] = (1));

return statearr_37600;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto____1 = (function (state_37594){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_37594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e37601){if((e37601 instanceof Object)){
var ex__28869__auto__ = e37601;
var statearr_37602_37604 = state_37594;
(statearr_37602_37604[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37605 = state_37594;
state_37594 = G__37605;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto__ = function(state_37594){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto____1.call(this,state_37594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28979__auto__ = (function (){var statearr_37603 = f__28978__auto__.call(null);
(statearr_37603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_37603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__,figwheel_version,temp__4657__auto__))
);

return c__28977__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37606){
var map__37610 = p__37606;
var map__37610__$1 = ((((!((map__37610 == null)))?((((map__37610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37610):map__37610);
var file = cljs.core.get.call(null,map__37610__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37610__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37610__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37612 = "";
var G__37612__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37612),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37612);
var G__37612__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37612__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37612__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__37612__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37612__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37613){
var map__37620 = p__37613;
var map__37620__$1 = ((((!((map__37620 == null)))?((((map__37620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37620):map__37620);
var ed = map__37620__$1;
var formatted_exception = cljs.core.get.call(null,map__37620__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37620__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37620__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37622_37626 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37623_37627 = null;
var count__37624_37628 = (0);
var i__37625_37629 = (0);
while(true){
if((i__37625_37629 < count__37624_37628)){
var msg_37630 = cljs.core._nth.call(null,chunk__37623_37627,i__37625_37629);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37630);

var G__37631 = seq__37622_37626;
var G__37632 = chunk__37623_37627;
var G__37633 = count__37624_37628;
var G__37634 = (i__37625_37629 + (1));
seq__37622_37626 = G__37631;
chunk__37623_37627 = G__37632;
count__37624_37628 = G__37633;
i__37625_37629 = G__37634;
continue;
} else {
var temp__4657__auto___37635 = cljs.core.seq.call(null,seq__37622_37626);
if(temp__4657__auto___37635){
var seq__37622_37636__$1 = temp__4657__auto___37635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37622_37636__$1)){
var c__25659__auto___37637 = cljs.core.chunk_first.call(null,seq__37622_37636__$1);
var G__37638 = cljs.core.chunk_rest.call(null,seq__37622_37636__$1);
var G__37639 = c__25659__auto___37637;
var G__37640 = cljs.core.count.call(null,c__25659__auto___37637);
var G__37641 = (0);
seq__37622_37626 = G__37638;
chunk__37623_37627 = G__37639;
count__37624_37628 = G__37640;
i__37625_37629 = G__37641;
continue;
} else {
var msg_37642 = cljs.core.first.call(null,seq__37622_37636__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37642);

var G__37643 = cljs.core.next.call(null,seq__37622_37636__$1);
var G__37644 = null;
var G__37645 = (0);
var G__37646 = (0);
seq__37622_37626 = G__37643;
chunk__37623_37627 = G__37644;
count__37624_37628 = G__37645;
i__37625_37629 = G__37646;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37647){
var map__37650 = p__37647;
var map__37650__$1 = ((((!((map__37650 == null)))?((((map__37650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37650):map__37650);
var w = map__37650__$1;
var message = cljs.core.get.call(null,map__37650__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24836__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24836__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37662 = cljs.core.seq.call(null,plugins);
var chunk__37663 = null;
var count__37664 = (0);
var i__37665 = (0);
while(true){
if((i__37665 < count__37664)){
var vec__37666 = cljs.core._nth.call(null,chunk__37663,i__37665);
var k = cljs.core.nth.call(null,vec__37666,(0),null);
var plugin = cljs.core.nth.call(null,vec__37666,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37672 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37662,chunk__37663,count__37664,i__37665,pl_37672,vec__37666,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37672.call(null,msg_hist);
});})(seq__37662,chunk__37663,count__37664,i__37665,pl_37672,vec__37666,k,plugin))
);
} else {
}

var G__37673 = seq__37662;
var G__37674 = chunk__37663;
var G__37675 = count__37664;
var G__37676 = (i__37665 + (1));
seq__37662 = G__37673;
chunk__37663 = G__37674;
count__37664 = G__37675;
i__37665 = G__37676;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37662);
if(temp__4657__auto__){
var seq__37662__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37662__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__37662__$1);
var G__37677 = cljs.core.chunk_rest.call(null,seq__37662__$1);
var G__37678 = c__25659__auto__;
var G__37679 = cljs.core.count.call(null,c__25659__auto__);
var G__37680 = (0);
seq__37662 = G__37677;
chunk__37663 = G__37678;
count__37664 = G__37679;
i__37665 = G__37680;
continue;
} else {
var vec__37669 = cljs.core.first.call(null,seq__37662__$1);
var k = cljs.core.nth.call(null,vec__37669,(0),null);
var plugin = cljs.core.nth.call(null,vec__37669,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37681 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37662,chunk__37663,count__37664,i__37665,pl_37681,vec__37669,k,plugin,seq__37662__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37681.call(null,msg_hist);
});})(seq__37662,chunk__37663,count__37664,i__37665,pl_37681,vec__37669,k,plugin,seq__37662__$1,temp__4657__auto__))
);
} else {
}

var G__37682 = cljs.core.next.call(null,seq__37662__$1);
var G__37683 = null;
var G__37684 = (0);
var G__37685 = (0);
seq__37662 = G__37682;
chunk__37663 = G__37683;
count__37664 = G__37684;
i__37665 = G__37685;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37686 = [];
var len__25923__auto___37693 = arguments.length;
var i__25924__auto___37694 = (0);
while(true){
if((i__25924__auto___37694 < len__25923__auto___37693)){
args37686.push((arguments[i__25924__auto___37694]));

var G__37695 = (i__25924__auto___37694 + (1));
i__25924__auto___37694 = G__37695;
continue;
} else {
}
break;
}

var G__37688 = args37686.length;
switch (G__37688) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37686.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37689_37697 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37690_37698 = null;
var count__37691_37699 = (0);
var i__37692_37700 = (0);
while(true){
if((i__37692_37700 < count__37691_37699)){
var msg_37701 = cljs.core._nth.call(null,chunk__37690_37698,i__37692_37700);
figwheel.client.socket.handle_incoming_message.call(null,msg_37701);

var G__37702 = seq__37689_37697;
var G__37703 = chunk__37690_37698;
var G__37704 = count__37691_37699;
var G__37705 = (i__37692_37700 + (1));
seq__37689_37697 = G__37702;
chunk__37690_37698 = G__37703;
count__37691_37699 = G__37704;
i__37692_37700 = G__37705;
continue;
} else {
var temp__4657__auto___37706 = cljs.core.seq.call(null,seq__37689_37697);
if(temp__4657__auto___37706){
var seq__37689_37707__$1 = temp__4657__auto___37706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37689_37707__$1)){
var c__25659__auto___37708 = cljs.core.chunk_first.call(null,seq__37689_37707__$1);
var G__37709 = cljs.core.chunk_rest.call(null,seq__37689_37707__$1);
var G__37710 = c__25659__auto___37708;
var G__37711 = cljs.core.count.call(null,c__25659__auto___37708);
var G__37712 = (0);
seq__37689_37697 = G__37709;
chunk__37690_37698 = G__37710;
count__37691_37699 = G__37711;
i__37692_37700 = G__37712;
continue;
} else {
var msg_37713 = cljs.core.first.call(null,seq__37689_37707__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37713);

var G__37714 = cljs.core.next.call(null,seq__37689_37707__$1);
var G__37715 = null;
var G__37716 = (0);
var G__37717 = (0);
seq__37689_37697 = G__37714;
chunk__37690_37698 = G__37715;
count__37691_37699 = G__37716;
i__37692_37700 = G__37717;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25930__auto__ = [];
var len__25923__auto___37722 = arguments.length;
var i__25924__auto___37723 = (0);
while(true){
if((i__25924__auto___37723 < len__25923__auto___37722)){
args__25930__auto__.push((arguments[i__25924__auto___37723]));

var G__37724 = (i__25924__auto___37723 + (1));
i__25924__auto___37723 = G__37724;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37719){
var map__37720 = p__37719;
var map__37720__$1 = ((((!((map__37720 == null)))?((((map__37720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37720):map__37720);
var opts = map__37720__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37718){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37718));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37726){if((e37726 instanceof Error)){
var e = e37726;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37726;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37730){
var map__37731 = p__37730;
var map__37731__$1 = ((((!((map__37731 == null)))?((((map__37731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37731):map__37731);
var msg_name = cljs.core.get.call(null,map__37731__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1658328684071