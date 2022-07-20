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
var args36746 = [];
var len__25923__auto___36749 = arguments.length;
var i__25924__auto___36750 = (0);
while(true){
if((i__25924__auto___36750 < len__25923__auto___36749)){
args36746.push((arguments[i__25924__auto___36750]));

var G__36751 = (i__25924__auto___36750 + (1));
i__25924__auto___36750 = G__36751;
continue;
} else {
}
break;
}

var G__36748 = args36746.length;
switch (G__36748) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36746.length)].join('')));

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
var len__25923__auto___36754 = arguments.length;
var i__25924__auto___36755 = (0);
while(true){
if((i__25924__auto___36755 < len__25923__auto___36754)){
args__25930__auto__.push((arguments[i__25924__auto___36755]));

var G__36756 = (i__25924__auto___36755 + (1));
i__25924__auto___36755 = G__36756;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36753){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36753));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___36758 = arguments.length;
var i__25924__auto___36759 = (0);
while(true){
if((i__25924__auto___36759 < len__25923__auto___36758)){
args__25930__auto__.push((arguments[i__25924__auto___36759]));

var G__36760 = (i__25924__auto___36759 + (1));
i__25924__auto___36759 = G__36760;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36757){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36757));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36761){
var map__36764 = p__36761;
var map__36764__$1 = ((((!((map__36764 == null)))?((((map__36764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36764):map__36764);
var message = cljs.core.get.call(null,map__36764__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36764__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28835__auto___36926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___36926,ch){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___36926,ch){
return (function (state_36895){
var state_val_36896 = (state_36895[(1)]);
if((state_val_36896 === (7))){
var inst_36891 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
var statearr_36897_36927 = state_36895__$1;
(statearr_36897_36927[(2)] = inst_36891);

(statearr_36897_36927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (1))){
var state_36895__$1 = state_36895;
var statearr_36898_36928 = state_36895__$1;
(statearr_36898_36928[(2)] = null);

(statearr_36898_36928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (4))){
var inst_36848 = (state_36895[(7)]);
var inst_36848__$1 = (state_36895[(2)]);
var state_36895__$1 = (function (){var statearr_36899 = state_36895;
(statearr_36899[(7)] = inst_36848__$1);

return statearr_36899;
})();
if(cljs.core.truth_(inst_36848__$1)){
var statearr_36900_36929 = state_36895__$1;
(statearr_36900_36929[(1)] = (5));

} else {
var statearr_36901_36930 = state_36895__$1;
(statearr_36901_36930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (15))){
var inst_36855 = (state_36895[(8)]);
var inst_36870 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36855);
var inst_36871 = cljs.core.first.call(null,inst_36870);
var inst_36872 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36871);
var inst_36873 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36872)].join('');
var inst_36874 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36873);
var state_36895__$1 = state_36895;
var statearr_36902_36931 = state_36895__$1;
(statearr_36902_36931[(2)] = inst_36874);

(statearr_36902_36931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (13))){
var inst_36879 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
var statearr_36903_36932 = state_36895__$1;
(statearr_36903_36932[(2)] = inst_36879);

(statearr_36903_36932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (6))){
var state_36895__$1 = state_36895;
var statearr_36904_36933 = state_36895__$1;
(statearr_36904_36933[(2)] = null);

(statearr_36904_36933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (17))){
var inst_36877 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
var statearr_36905_36934 = state_36895__$1;
(statearr_36905_36934[(2)] = inst_36877);

(statearr_36905_36934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (3))){
var inst_36893 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36895__$1,inst_36893);
} else {
if((state_val_36896 === (12))){
var inst_36854 = (state_36895[(9)]);
var inst_36868 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36854,opts);
var state_36895__$1 = state_36895;
if(cljs.core.truth_(inst_36868)){
var statearr_36906_36935 = state_36895__$1;
(statearr_36906_36935[(1)] = (15));

} else {
var statearr_36907_36936 = state_36895__$1;
(statearr_36907_36936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (2))){
var state_36895__$1 = state_36895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36895__$1,(4),ch);
} else {
if((state_val_36896 === (11))){
var inst_36855 = (state_36895[(8)]);
var inst_36860 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36861 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36855);
var inst_36862 = cljs.core.async.timeout.call(null,(1000));
var inst_36863 = [inst_36861,inst_36862];
var inst_36864 = (new cljs.core.PersistentVector(null,2,(5),inst_36860,inst_36863,null));
var state_36895__$1 = state_36895;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36895__$1,(14),inst_36864);
} else {
if((state_val_36896 === (9))){
var inst_36855 = (state_36895[(8)]);
var inst_36881 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36882 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36855);
var inst_36883 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36882);
var inst_36884 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36883)].join('');
var inst_36885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36884);
var state_36895__$1 = (function (){var statearr_36908 = state_36895;
(statearr_36908[(10)] = inst_36881);

return statearr_36908;
})();
var statearr_36909_36937 = state_36895__$1;
(statearr_36909_36937[(2)] = inst_36885);

(statearr_36909_36937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (5))){
var inst_36848 = (state_36895[(7)]);
var inst_36850 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36851 = (new cljs.core.PersistentArrayMap(null,2,inst_36850,null));
var inst_36852 = (new cljs.core.PersistentHashSet(null,inst_36851,null));
var inst_36853 = figwheel.client.focus_msgs.call(null,inst_36852,inst_36848);
var inst_36854 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36853);
var inst_36855 = cljs.core.first.call(null,inst_36853);
var inst_36856 = figwheel.client.autoload_QMARK_.call(null);
var state_36895__$1 = (function (){var statearr_36910 = state_36895;
(statearr_36910[(8)] = inst_36855);

(statearr_36910[(9)] = inst_36854);

return statearr_36910;
})();
if(cljs.core.truth_(inst_36856)){
var statearr_36911_36938 = state_36895__$1;
(statearr_36911_36938[(1)] = (8));

} else {
var statearr_36912_36939 = state_36895__$1;
(statearr_36912_36939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (14))){
var inst_36866 = (state_36895[(2)]);
var state_36895__$1 = state_36895;
var statearr_36913_36940 = state_36895__$1;
(statearr_36913_36940[(2)] = inst_36866);

(statearr_36913_36940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (16))){
var state_36895__$1 = state_36895;
var statearr_36914_36941 = state_36895__$1;
(statearr_36914_36941[(2)] = null);

(statearr_36914_36941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (10))){
var inst_36887 = (state_36895[(2)]);
var state_36895__$1 = (function (){var statearr_36915 = state_36895;
(statearr_36915[(11)] = inst_36887);

return statearr_36915;
})();
var statearr_36916_36942 = state_36895__$1;
(statearr_36916_36942[(2)] = null);

(statearr_36916_36942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36896 === (8))){
var inst_36854 = (state_36895[(9)]);
var inst_36858 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36854,opts);
var state_36895__$1 = state_36895;
if(cljs.core.truth_(inst_36858)){
var statearr_36917_36943 = state_36895__$1;
(statearr_36917_36943[(1)] = (11));

} else {
var statearr_36918_36944 = state_36895__$1;
(statearr_36918_36944[(1)] = (12));

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
});})(c__28835__auto___36926,ch))
;
return ((function (switch__28723__auto__,c__28835__auto___36926,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28724__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28724__auto____0 = (function (){
var statearr_36922 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36922[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28724__auto__);

(statearr_36922[(1)] = (1));

return statearr_36922;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28724__auto____1 = (function (state_36895){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_36895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e36923){if((e36923 instanceof Object)){
var ex__28727__auto__ = e36923;
var statearr_36924_36945 = state_36895;
(statearr_36924_36945[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36946 = state_36895;
state_36895 = G__36946;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28724__auto__ = function(state_36895){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28724__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28724__auto____1.call(this,state_36895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28724__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28724__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___36926,ch))
})();
var state__28837__auto__ = (function (){var statearr_36925 = f__28836__auto__.call(null);
(statearr_36925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___36926);

return statearr_36925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___36926,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36947_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36947_SHARP_));
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
var base_path_36950 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36950){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36949){if((e36949 instanceof Error)){
var e = e36949;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36950], null));
} else {
var e = e36949;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36950))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36951){
var map__36960 = p__36951;
var map__36960__$1 = ((((!((map__36960 == null)))?((((map__36960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36960):map__36960);
var opts = map__36960__$1;
var build_id = cljs.core.get.call(null,map__36960__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36960,map__36960__$1,opts,build_id){
return (function (p__36962){
var vec__36963 = p__36962;
var seq__36964 = cljs.core.seq.call(null,vec__36963);
var first__36965 = cljs.core.first.call(null,seq__36964);
var seq__36964__$1 = cljs.core.next.call(null,seq__36964);
var map__36966 = first__36965;
var map__36966__$1 = ((((!((map__36966 == null)))?((((map__36966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36966):map__36966);
var msg = map__36966__$1;
var msg_name = cljs.core.get.call(null,map__36966__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36964__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36963,seq__36964,first__36965,seq__36964__$1,map__36966,map__36966__$1,msg,msg_name,_,map__36960,map__36960__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36963,seq__36964,first__36965,seq__36964__$1,map__36966,map__36966__$1,msg,msg_name,_,map__36960,map__36960__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36960,map__36960__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36974){
var vec__36975 = p__36974;
var seq__36976 = cljs.core.seq.call(null,vec__36975);
var first__36977 = cljs.core.first.call(null,seq__36976);
var seq__36976__$1 = cljs.core.next.call(null,seq__36976);
var map__36978 = first__36977;
var map__36978__$1 = ((((!((map__36978 == null)))?((((map__36978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36978):map__36978);
var msg = map__36978__$1;
var msg_name = cljs.core.get.call(null,map__36978__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36976__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36980){
var map__36992 = p__36980;
var map__36992__$1 = ((((!((map__36992 == null)))?((((map__36992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36992):map__36992);
var on_compile_warning = cljs.core.get.call(null,map__36992__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36992__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36992,map__36992__$1,on_compile_warning,on_compile_fail){
return (function (p__36994){
var vec__36995 = p__36994;
var seq__36996 = cljs.core.seq.call(null,vec__36995);
var first__36997 = cljs.core.first.call(null,seq__36996);
var seq__36996__$1 = cljs.core.next.call(null,seq__36996);
var map__36998 = first__36997;
var map__36998__$1 = ((((!((map__36998 == null)))?((((map__36998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36998):map__36998);
var msg = map__36998__$1;
var msg_name = cljs.core.get.call(null,map__36998__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36996__$1;
var pred__37000 = cljs.core._EQ_;
var expr__37001 = msg_name;
if(cljs.core.truth_(pred__37000.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37001))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37000.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37001))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36992,map__36992__$1,on_compile_warning,on_compile_fail))
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
var c__28835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto__,msg_hist,msg_names,msg){
return (function (state_37229){
var state_val_37230 = (state_37229[(1)]);
if((state_val_37230 === (7))){
var inst_37149 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
if(cljs.core.truth_(inst_37149)){
var statearr_37231_37281 = state_37229__$1;
(statearr_37231_37281[(1)] = (8));

} else {
var statearr_37232_37282 = state_37229__$1;
(statearr_37232_37282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (20))){
var inst_37223 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37233_37283 = state_37229__$1;
(statearr_37233_37283[(2)] = inst_37223);

(statearr_37233_37283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (27))){
var inst_37219 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37234_37284 = state_37229__$1;
(statearr_37234_37284[(2)] = inst_37219);

(statearr_37234_37284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (1))){
var inst_37142 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37229__$1 = state_37229;
if(cljs.core.truth_(inst_37142)){
var statearr_37235_37285 = state_37229__$1;
(statearr_37235_37285[(1)] = (2));

} else {
var statearr_37236_37286 = state_37229__$1;
(statearr_37236_37286[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (24))){
var inst_37221 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37237_37287 = state_37229__$1;
(statearr_37237_37287[(2)] = inst_37221);

(statearr_37237_37287[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (4))){
var inst_37227 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37229__$1,inst_37227);
} else {
if((state_val_37230 === (15))){
var inst_37225 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37238_37288 = state_37229__$1;
(statearr_37238_37288[(2)] = inst_37225);

(statearr_37238_37288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (21))){
var inst_37178 = (state_37229[(2)]);
var inst_37179 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37180 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37179);
var state_37229__$1 = (function (){var statearr_37239 = state_37229;
(statearr_37239[(7)] = inst_37178);

return statearr_37239;
})();
var statearr_37240_37289 = state_37229__$1;
(statearr_37240_37289[(2)] = inst_37180);

(statearr_37240_37289[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (31))){
var inst_37208 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37229__$1 = state_37229;
if(cljs.core.truth_(inst_37208)){
var statearr_37241_37290 = state_37229__$1;
(statearr_37241_37290[(1)] = (34));

} else {
var statearr_37242_37291 = state_37229__$1;
(statearr_37242_37291[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (32))){
var inst_37217 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37243_37292 = state_37229__$1;
(statearr_37243_37292[(2)] = inst_37217);

(statearr_37243_37292[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (33))){
var inst_37204 = (state_37229[(2)]);
var inst_37205 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37206 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37205);
var state_37229__$1 = (function (){var statearr_37244 = state_37229;
(statearr_37244[(8)] = inst_37204);

return statearr_37244;
})();
var statearr_37245_37293 = state_37229__$1;
(statearr_37245_37293[(2)] = inst_37206);

(statearr_37245_37293[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (13))){
var inst_37163 = figwheel.client.heads_up.clear.call(null);
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37229__$1,(16),inst_37163);
} else {
if((state_val_37230 === (22))){
var inst_37184 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37185 = figwheel.client.heads_up.append_warning_message.call(null,inst_37184);
var state_37229__$1 = state_37229;
var statearr_37246_37294 = state_37229__$1;
(statearr_37246_37294[(2)] = inst_37185);

(statearr_37246_37294[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (36))){
var inst_37215 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37247_37295 = state_37229__$1;
(statearr_37247_37295[(2)] = inst_37215);

(statearr_37247_37295[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (29))){
var inst_37195 = (state_37229[(2)]);
var inst_37196 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37197 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37196);
var state_37229__$1 = (function (){var statearr_37248 = state_37229;
(statearr_37248[(9)] = inst_37195);

return statearr_37248;
})();
var statearr_37249_37296 = state_37229__$1;
(statearr_37249_37296[(2)] = inst_37197);

(statearr_37249_37296[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (6))){
var inst_37144 = (state_37229[(10)]);
var state_37229__$1 = state_37229;
var statearr_37250_37297 = state_37229__$1;
(statearr_37250_37297[(2)] = inst_37144);

(statearr_37250_37297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (28))){
var inst_37191 = (state_37229[(2)]);
var inst_37192 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37193 = figwheel.client.heads_up.display_warning.call(null,inst_37192);
var state_37229__$1 = (function (){var statearr_37251 = state_37229;
(statearr_37251[(11)] = inst_37191);

return statearr_37251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37229__$1,(29),inst_37193);
} else {
if((state_val_37230 === (25))){
var inst_37189 = figwheel.client.heads_up.clear.call(null);
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37229__$1,(28),inst_37189);
} else {
if((state_val_37230 === (34))){
var inst_37210 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37229__$1,(37),inst_37210);
} else {
if((state_val_37230 === (17))){
var inst_37169 = (state_37229[(2)]);
var inst_37170 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37171 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37170);
var state_37229__$1 = (function (){var statearr_37252 = state_37229;
(statearr_37252[(12)] = inst_37169);

return statearr_37252;
})();
var statearr_37253_37298 = state_37229__$1;
(statearr_37253_37298[(2)] = inst_37171);

(statearr_37253_37298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (3))){
var inst_37161 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37229__$1 = state_37229;
if(cljs.core.truth_(inst_37161)){
var statearr_37254_37299 = state_37229__$1;
(statearr_37254_37299[(1)] = (13));

} else {
var statearr_37255_37300 = state_37229__$1;
(statearr_37255_37300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (12))){
var inst_37157 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37256_37301 = state_37229__$1;
(statearr_37256_37301[(2)] = inst_37157);

(statearr_37256_37301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (2))){
var inst_37144 = (state_37229[(10)]);
var inst_37144__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37229__$1 = (function (){var statearr_37257 = state_37229;
(statearr_37257[(10)] = inst_37144__$1);

return statearr_37257;
})();
if(cljs.core.truth_(inst_37144__$1)){
var statearr_37258_37302 = state_37229__$1;
(statearr_37258_37302[(1)] = (5));

} else {
var statearr_37259_37303 = state_37229__$1;
(statearr_37259_37303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (23))){
var inst_37187 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37229__$1 = state_37229;
if(cljs.core.truth_(inst_37187)){
var statearr_37260_37304 = state_37229__$1;
(statearr_37260_37304[(1)] = (25));

} else {
var statearr_37261_37305 = state_37229__$1;
(statearr_37261_37305[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (35))){
var state_37229__$1 = state_37229;
var statearr_37262_37306 = state_37229__$1;
(statearr_37262_37306[(2)] = null);

(statearr_37262_37306[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (19))){
var inst_37182 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37229__$1 = state_37229;
if(cljs.core.truth_(inst_37182)){
var statearr_37263_37307 = state_37229__$1;
(statearr_37263_37307[(1)] = (22));

} else {
var statearr_37264_37308 = state_37229__$1;
(statearr_37264_37308[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (11))){
var inst_37153 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37265_37309 = state_37229__$1;
(statearr_37265_37309[(2)] = inst_37153);

(statearr_37265_37309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (9))){
var inst_37155 = figwheel.client.heads_up.clear.call(null);
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37229__$1,(12),inst_37155);
} else {
if((state_val_37230 === (5))){
var inst_37146 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37229__$1 = state_37229;
var statearr_37266_37310 = state_37229__$1;
(statearr_37266_37310[(2)] = inst_37146);

(statearr_37266_37310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (14))){
var inst_37173 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37229__$1 = state_37229;
if(cljs.core.truth_(inst_37173)){
var statearr_37267_37311 = state_37229__$1;
(statearr_37267_37311[(1)] = (18));

} else {
var statearr_37268_37312 = state_37229__$1;
(statearr_37268_37312[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (26))){
var inst_37199 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37229__$1 = state_37229;
if(cljs.core.truth_(inst_37199)){
var statearr_37269_37313 = state_37229__$1;
(statearr_37269_37313[(1)] = (30));

} else {
var statearr_37270_37314 = state_37229__$1;
(statearr_37270_37314[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (16))){
var inst_37165 = (state_37229[(2)]);
var inst_37166 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37167 = figwheel.client.heads_up.display_exception.call(null,inst_37166);
var state_37229__$1 = (function (){var statearr_37271 = state_37229;
(statearr_37271[(13)] = inst_37165);

return statearr_37271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37229__$1,(17),inst_37167);
} else {
if((state_val_37230 === (30))){
var inst_37201 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37202 = figwheel.client.heads_up.display_warning.call(null,inst_37201);
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37229__$1,(33),inst_37202);
} else {
if((state_val_37230 === (10))){
var inst_37159 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37272_37315 = state_37229__$1;
(statearr_37272_37315[(2)] = inst_37159);

(statearr_37272_37315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (18))){
var inst_37175 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37176 = figwheel.client.heads_up.display_exception.call(null,inst_37175);
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37229__$1,(21),inst_37176);
} else {
if((state_val_37230 === (37))){
var inst_37212 = (state_37229[(2)]);
var state_37229__$1 = state_37229;
var statearr_37273_37316 = state_37229__$1;
(statearr_37273_37316[(2)] = inst_37212);

(statearr_37273_37316[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37230 === (8))){
var inst_37151 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37229__$1 = state_37229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37229__$1,(11),inst_37151);
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
});})(c__28835__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28723__auto__,c__28835__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto____0 = (function (){
var statearr_37277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37277[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto__);

(statearr_37277[(1)] = (1));

return statearr_37277;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto____1 = (function (state_37229){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_37229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e37278){if((e37278 instanceof Object)){
var ex__28727__auto__ = e37278;
var statearr_37279_37317 = state_37229;
(statearr_37279_37317[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37318 = state_37229;
state_37229 = G__37318;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto__ = function(state_37229){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto____1.call(this,state_37229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto__,msg_hist,msg_names,msg))
})();
var state__28837__auto__ = (function (){var statearr_37280 = f__28836__auto__.call(null);
(statearr_37280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto__);

return statearr_37280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto__,msg_hist,msg_names,msg))
);

return c__28835__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28835__auto___37381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___37381,ch){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___37381,ch){
return (function (state_37364){
var state_val_37365 = (state_37364[(1)]);
if((state_val_37365 === (1))){
var state_37364__$1 = state_37364;
var statearr_37366_37382 = state_37364__$1;
(statearr_37366_37382[(2)] = null);

(statearr_37366_37382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (2))){
var state_37364__$1 = state_37364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37364__$1,(4),ch);
} else {
if((state_val_37365 === (3))){
var inst_37362 = (state_37364[(2)]);
var state_37364__$1 = state_37364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37364__$1,inst_37362);
} else {
if((state_val_37365 === (4))){
var inst_37352 = (state_37364[(7)]);
var inst_37352__$1 = (state_37364[(2)]);
var state_37364__$1 = (function (){var statearr_37367 = state_37364;
(statearr_37367[(7)] = inst_37352__$1);

return statearr_37367;
})();
if(cljs.core.truth_(inst_37352__$1)){
var statearr_37368_37383 = state_37364__$1;
(statearr_37368_37383[(1)] = (5));

} else {
var statearr_37369_37384 = state_37364__$1;
(statearr_37369_37384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (5))){
var inst_37352 = (state_37364[(7)]);
var inst_37354 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37352);
var state_37364__$1 = state_37364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37364__$1,(8),inst_37354);
} else {
if((state_val_37365 === (6))){
var state_37364__$1 = state_37364;
var statearr_37370_37385 = state_37364__$1;
(statearr_37370_37385[(2)] = null);

(statearr_37370_37385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (7))){
var inst_37360 = (state_37364[(2)]);
var state_37364__$1 = state_37364;
var statearr_37371_37386 = state_37364__$1;
(statearr_37371_37386[(2)] = inst_37360);

(statearr_37371_37386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37365 === (8))){
var inst_37356 = (state_37364[(2)]);
var state_37364__$1 = (function (){var statearr_37372 = state_37364;
(statearr_37372[(8)] = inst_37356);

return statearr_37372;
})();
var statearr_37373_37387 = state_37364__$1;
(statearr_37373_37387[(2)] = null);

(statearr_37373_37387[(1)] = (2));


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
});})(c__28835__auto___37381,ch))
;
return ((function (switch__28723__auto__,c__28835__auto___37381,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28724__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28724__auto____0 = (function (){
var statearr_37377 = [null,null,null,null,null,null,null,null,null];
(statearr_37377[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28724__auto__);

(statearr_37377[(1)] = (1));

return statearr_37377;
});
var figwheel$client$heads_up_plugin_$_state_machine__28724__auto____1 = (function (state_37364){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_37364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e37378){if((e37378 instanceof Object)){
var ex__28727__auto__ = e37378;
var statearr_37379_37388 = state_37364;
(statearr_37379_37388[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37389 = state_37364;
state_37364 = G__37389;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28724__auto__ = function(state_37364){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28724__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28724__auto____1.call(this,state_37364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28724__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28724__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___37381,ch))
})();
var state__28837__auto__ = (function (){var statearr_37380 = f__28836__auto__.call(null);
(statearr_37380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___37381);

return statearr_37380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___37381,ch))
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
var c__28835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto__){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto__){
return (function (state_37410){
var state_val_37411 = (state_37410[(1)]);
if((state_val_37411 === (1))){
var inst_37405 = cljs.core.async.timeout.call(null,(3000));
var state_37410__$1 = state_37410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37410__$1,(2),inst_37405);
} else {
if((state_val_37411 === (2))){
var inst_37407 = (state_37410[(2)]);
var inst_37408 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37410__$1 = (function (){var statearr_37412 = state_37410;
(statearr_37412[(7)] = inst_37407);

return statearr_37412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37410__$1,inst_37408);
} else {
return null;
}
}
});})(c__28835__auto__))
;
return ((function (switch__28723__auto__,c__28835__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28724__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28724__auto____0 = (function (){
var statearr_37416 = [null,null,null,null,null,null,null,null];
(statearr_37416[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28724__auto__);

(statearr_37416[(1)] = (1));

return statearr_37416;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28724__auto____1 = (function (state_37410){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_37410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e37417){if((e37417 instanceof Object)){
var ex__28727__auto__ = e37417;
var statearr_37418_37420 = state_37410;
(statearr_37418_37420[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37421 = state_37410;
state_37410 = G__37421;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28724__auto__ = function(state_37410){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28724__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28724__auto____1.call(this,state_37410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28724__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28724__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto__))
})();
var state__28837__auto__ = (function (){var statearr_37419 = f__28836__auto__.call(null);
(statearr_37419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto__);

return statearr_37419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto__))
);

return c__28835__auto__;
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
var c__28835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37444){
var state_val_37445 = (state_37444[(1)]);
if((state_val_37445 === (1))){
var inst_37438 = cljs.core.async.timeout.call(null,(2000));
var state_37444__$1 = state_37444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37444__$1,(2),inst_37438);
} else {
if((state_val_37445 === (2))){
var inst_37440 = (state_37444[(2)]);
var inst_37441 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37442 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37441);
var state_37444__$1 = (function (){var statearr_37446 = state_37444;
(statearr_37446[(7)] = inst_37440);

return statearr_37446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37444__$1,inst_37442);
} else {
return null;
}
}
});})(c__28835__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28723__auto__,c__28835__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto____0 = (function (){
var statearr_37450 = [null,null,null,null,null,null,null,null];
(statearr_37450[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto__);

(statearr_37450[(1)] = (1));

return statearr_37450;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto____1 = (function (state_37444){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_37444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e37451){if((e37451 instanceof Object)){
var ex__28727__auto__ = e37451;
var statearr_37452_37454 = state_37444;
(statearr_37452_37454[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37455 = state_37444;
state_37444 = G__37455;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto__ = function(state_37444){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto____1.call(this,state_37444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28837__auto__ = (function (){var statearr_37453 = f__28836__auto__.call(null);
(statearr_37453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto__);

return statearr_37453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto__,figwheel_version,temp__4657__auto__))
);

return c__28835__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37456){
var map__37460 = p__37456;
var map__37460__$1 = ((((!((map__37460 == null)))?((((map__37460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37460):map__37460);
var file = cljs.core.get.call(null,map__37460__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37460__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37460__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37462 = "";
var G__37462__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37462),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37462);
var G__37462__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37462__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37462__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__37462__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37462__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37463){
var map__37470 = p__37463;
var map__37470__$1 = ((((!((map__37470 == null)))?((((map__37470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37470):map__37470);
var ed = map__37470__$1;
var formatted_exception = cljs.core.get.call(null,map__37470__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37470__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37470__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37472_37476 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37473_37477 = null;
var count__37474_37478 = (0);
var i__37475_37479 = (0);
while(true){
if((i__37475_37479 < count__37474_37478)){
var msg_37480 = cljs.core._nth.call(null,chunk__37473_37477,i__37475_37479);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37480);

var G__37481 = seq__37472_37476;
var G__37482 = chunk__37473_37477;
var G__37483 = count__37474_37478;
var G__37484 = (i__37475_37479 + (1));
seq__37472_37476 = G__37481;
chunk__37473_37477 = G__37482;
count__37474_37478 = G__37483;
i__37475_37479 = G__37484;
continue;
} else {
var temp__4657__auto___37485 = cljs.core.seq.call(null,seq__37472_37476);
if(temp__4657__auto___37485){
var seq__37472_37486__$1 = temp__4657__auto___37485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37472_37486__$1)){
var c__25659__auto___37487 = cljs.core.chunk_first.call(null,seq__37472_37486__$1);
var G__37488 = cljs.core.chunk_rest.call(null,seq__37472_37486__$1);
var G__37489 = c__25659__auto___37487;
var G__37490 = cljs.core.count.call(null,c__25659__auto___37487);
var G__37491 = (0);
seq__37472_37476 = G__37488;
chunk__37473_37477 = G__37489;
count__37474_37478 = G__37490;
i__37475_37479 = G__37491;
continue;
} else {
var msg_37492 = cljs.core.first.call(null,seq__37472_37486__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37492);

var G__37493 = cljs.core.next.call(null,seq__37472_37486__$1);
var G__37494 = null;
var G__37495 = (0);
var G__37496 = (0);
seq__37472_37476 = G__37493;
chunk__37473_37477 = G__37494;
count__37474_37478 = G__37495;
i__37475_37479 = G__37496;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37497){
var map__37500 = p__37497;
var map__37500__$1 = ((((!((map__37500 == null)))?((((map__37500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37500):map__37500);
var w = map__37500__$1;
var message = cljs.core.get.call(null,map__37500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37512 = cljs.core.seq.call(null,plugins);
var chunk__37513 = null;
var count__37514 = (0);
var i__37515 = (0);
while(true){
if((i__37515 < count__37514)){
var vec__37516 = cljs.core._nth.call(null,chunk__37513,i__37515);
var k = cljs.core.nth.call(null,vec__37516,(0),null);
var plugin = cljs.core.nth.call(null,vec__37516,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37522 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37512,chunk__37513,count__37514,i__37515,pl_37522,vec__37516,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37522.call(null,msg_hist);
});})(seq__37512,chunk__37513,count__37514,i__37515,pl_37522,vec__37516,k,plugin))
);
} else {
}

var G__37523 = seq__37512;
var G__37524 = chunk__37513;
var G__37525 = count__37514;
var G__37526 = (i__37515 + (1));
seq__37512 = G__37523;
chunk__37513 = G__37524;
count__37514 = G__37525;
i__37515 = G__37526;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37512);
if(temp__4657__auto__){
var seq__37512__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37512__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__37512__$1);
var G__37527 = cljs.core.chunk_rest.call(null,seq__37512__$1);
var G__37528 = c__25659__auto__;
var G__37529 = cljs.core.count.call(null,c__25659__auto__);
var G__37530 = (0);
seq__37512 = G__37527;
chunk__37513 = G__37528;
count__37514 = G__37529;
i__37515 = G__37530;
continue;
} else {
var vec__37519 = cljs.core.first.call(null,seq__37512__$1);
var k = cljs.core.nth.call(null,vec__37519,(0),null);
var plugin = cljs.core.nth.call(null,vec__37519,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37531 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37512,chunk__37513,count__37514,i__37515,pl_37531,vec__37519,k,plugin,seq__37512__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37531.call(null,msg_hist);
});})(seq__37512,chunk__37513,count__37514,i__37515,pl_37531,vec__37519,k,plugin,seq__37512__$1,temp__4657__auto__))
);
} else {
}

var G__37532 = cljs.core.next.call(null,seq__37512__$1);
var G__37533 = null;
var G__37534 = (0);
var G__37535 = (0);
seq__37512 = G__37532;
chunk__37513 = G__37533;
count__37514 = G__37534;
i__37515 = G__37535;
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
var args37536 = [];
var len__25923__auto___37543 = arguments.length;
var i__25924__auto___37544 = (0);
while(true){
if((i__25924__auto___37544 < len__25923__auto___37543)){
args37536.push((arguments[i__25924__auto___37544]));

var G__37545 = (i__25924__auto___37544 + (1));
i__25924__auto___37544 = G__37545;
continue;
} else {
}
break;
}

var G__37538 = args37536.length;
switch (G__37538) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37536.length)].join('')));

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

var seq__37539_37547 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37540_37548 = null;
var count__37541_37549 = (0);
var i__37542_37550 = (0);
while(true){
if((i__37542_37550 < count__37541_37549)){
var msg_37551 = cljs.core._nth.call(null,chunk__37540_37548,i__37542_37550);
figwheel.client.socket.handle_incoming_message.call(null,msg_37551);

var G__37552 = seq__37539_37547;
var G__37553 = chunk__37540_37548;
var G__37554 = count__37541_37549;
var G__37555 = (i__37542_37550 + (1));
seq__37539_37547 = G__37552;
chunk__37540_37548 = G__37553;
count__37541_37549 = G__37554;
i__37542_37550 = G__37555;
continue;
} else {
var temp__4657__auto___37556 = cljs.core.seq.call(null,seq__37539_37547);
if(temp__4657__auto___37556){
var seq__37539_37557__$1 = temp__4657__auto___37556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37539_37557__$1)){
var c__25659__auto___37558 = cljs.core.chunk_first.call(null,seq__37539_37557__$1);
var G__37559 = cljs.core.chunk_rest.call(null,seq__37539_37557__$1);
var G__37560 = c__25659__auto___37558;
var G__37561 = cljs.core.count.call(null,c__25659__auto___37558);
var G__37562 = (0);
seq__37539_37547 = G__37559;
chunk__37540_37548 = G__37560;
count__37541_37549 = G__37561;
i__37542_37550 = G__37562;
continue;
} else {
var msg_37563 = cljs.core.first.call(null,seq__37539_37557__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37563);

var G__37564 = cljs.core.next.call(null,seq__37539_37557__$1);
var G__37565 = null;
var G__37566 = (0);
var G__37567 = (0);
seq__37539_37547 = G__37564;
chunk__37540_37548 = G__37565;
count__37541_37549 = G__37566;
i__37542_37550 = G__37567;
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
var len__25923__auto___37572 = arguments.length;
var i__25924__auto___37573 = (0);
while(true){
if((i__25924__auto___37573 < len__25923__auto___37572)){
args__25930__auto__.push((arguments[i__25924__auto___37573]));

var G__37574 = (i__25924__auto___37573 + (1));
i__25924__auto___37573 = G__37574;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37569){
var map__37570 = p__37569;
var map__37570__$1 = ((((!((map__37570 == null)))?((((map__37570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37570):map__37570);
var opts = map__37570__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37568){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37568));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37576){if((e37576 instanceof Error)){
var e = e37576;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37576;

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
return (function (p__37580){
var map__37581 = p__37580;
var map__37581__$1 = ((((!((map__37581 == null)))?((((map__37581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37581):map__37581);
var msg_name = cljs.core.get.call(null,map__37581__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1658325514684