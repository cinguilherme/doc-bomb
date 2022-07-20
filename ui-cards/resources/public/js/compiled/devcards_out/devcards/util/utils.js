// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__25834__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27977_27979 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27978_27980 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27977_27979,_STAR_print_fn_STAR_27978_27980,sb__25834__auto__){
return (function (x__25835__auto__){
return sb__25834__auto__.append(x__25835__auto__);
});})(_STAR_print_newline_STAR_27977_27979,_STAR_print_fn_STAR_27978_27980,sb__25834__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27978_27980;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27977_27979;
}
return [cljs.core.str(sb__25834__auto__)].join('');
}catch (e27975){if((e27975 instanceof Error)){
var e1 = e27975;
try{return obj.toString();
}catch (e27976){if((e27976 instanceof Error)){
var e2 = e27976;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e27976;

}
}} else {
throw e27975;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_27982 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_27982;
}});

//# sourceMappingURL=utils.js.map?rel=1658328680539