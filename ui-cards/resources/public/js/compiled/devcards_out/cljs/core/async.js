// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28880 = [];
var len__25923__auto___28886 = arguments.length;
var i__25924__auto___28887 = (0);
while(true){
if((i__25924__auto___28887 < len__25923__auto___28886)){
args28880.push((arguments[i__25924__auto___28887]));

var G__28888 = (i__25924__auto___28887 + (1));
i__25924__auto___28887 = G__28888;
continue;
} else {
}
break;
}

var G__28882 = args28880.length;
switch (G__28882) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28880.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28883 = (function (f,blockable,meta28884){
this.f = f;
this.blockable = blockable;
this.meta28884 = meta28884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28885,meta28884__$1){
var self__ = this;
var _28885__$1 = this;
return (new cljs.core.async.t_cljs$core$async28883(self__.f,self__.blockable,meta28884__$1));
});

cljs.core.async.t_cljs$core$async28883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28885){
var self__ = this;
var _28885__$1 = this;
return self__.meta28884;
});

cljs.core.async.t_cljs$core$async28883.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28884","meta28884",546379138,null)], null);
});

cljs.core.async.t_cljs$core$async28883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28883";

cljs.core.async.t_cljs$core$async28883.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28883");
});

cljs.core.async.__GT_t_cljs$core$async28883 = (function cljs$core$async$__GT_t_cljs$core$async28883(f__$1,blockable__$1,meta28884){
return (new cljs.core.async.t_cljs$core$async28883(f__$1,blockable__$1,meta28884));
});

}

return (new cljs.core.async.t_cljs$core$async28883(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28892 = [];
var len__25923__auto___28895 = arguments.length;
var i__25924__auto___28896 = (0);
while(true){
if((i__25924__auto___28896 < len__25923__auto___28895)){
args28892.push((arguments[i__25924__auto___28896]));

var G__28897 = (i__25924__auto___28896 + (1));
i__25924__auto___28896 = G__28897;
continue;
} else {
}
break;
}

var G__28894 = args28892.length;
switch (G__28894) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28892.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28899 = [];
var len__25923__auto___28902 = arguments.length;
var i__25924__auto___28903 = (0);
while(true){
if((i__25924__auto___28903 < len__25923__auto___28902)){
args28899.push((arguments[i__25924__auto___28903]));

var G__28904 = (i__25924__auto___28903 + (1));
i__25924__auto___28903 = G__28904;
continue;
} else {
}
break;
}

var G__28901 = args28899.length;
switch (G__28901) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28899.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28906 = [];
var len__25923__auto___28909 = arguments.length;
var i__25924__auto___28910 = (0);
while(true){
if((i__25924__auto___28910 < len__25923__auto___28909)){
args28906.push((arguments[i__25924__auto___28910]));

var G__28911 = (i__25924__auto___28910 + (1));
i__25924__auto___28910 = G__28911;
continue;
} else {
}
break;
}

var G__28908 = args28906.length;
switch (G__28908) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28906.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28913 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28913);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28913,ret){
return (function (){
return fn1.call(null,val_28913);
});})(val_28913,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28914 = [];
var len__25923__auto___28917 = arguments.length;
var i__25924__auto___28918 = (0);
while(true){
if((i__25924__auto___28918 < len__25923__auto___28917)){
args28914.push((arguments[i__25924__auto___28918]));

var G__28919 = (i__25924__auto___28918 + (1));
i__25924__auto___28918 = G__28919;
continue;
} else {
}
break;
}

var G__28916 = args28914.length;
switch (G__28916) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28914.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25763__auto___28921 = n;
var x_28922 = (0);
while(true){
if((x_28922 < n__25763__auto___28921)){
(a[x_28922] = (0));

var G__28923 = (x_28922 + (1));
x_28922 = G__28923;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28924 = (i + (1));
i = G__28924;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28928 = (function (alt_flag,flag,meta28929){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28929 = meta28929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28930,meta28929__$1){
var self__ = this;
var _28930__$1 = this;
return (new cljs.core.async.t_cljs$core$async28928(self__.alt_flag,self__.flag,meta28929__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28930){
var self__ = this;
var _28930__$1 = this;
return self__.meta28929;
});})(flag))
;

cljs.core.async.t_cljs$core$async28928.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28928.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28929","meta28929",1784706012,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28928";

cljs.core.async.t_cljs$core$async28928.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28928");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28928 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28928(alt_flag__$1,flag__$1,meta28929){
return (new cljs.core.async.t_cljs$core$async28928(alt_flag__$1,flag__$1,meta28929));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28928(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28934 = (function (alt_handler,flag,cb,meta28935){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28935 = meta28935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28936,meta28935__$1){
var self__ = this;
var _28936__$1 = this;
return (new cljs.core.async.t_cljs$core$async28934(self__.alt_handler,self__.flag,self__.cb,meta28935__$1));
});

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28936){
var self__ = this;
var _28936__$1 = this;
return self__.meta28935;
});

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28935","meta28935",-1461280668,null)], null);
});

cljs.core.async.t_cljs$core$async28934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28934";

cljs.core.async.t_cljs$core$async28934.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28934");
});

cljs.core.async.__GT_t_cljs$core$async28934 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28934(alt_handler__$1,flag__$1,cb__$1,meta28935){
return (new cljs.core.async.t_cljs$core$async28934(alt_handler__$1,flag__$1,cb__$1,meta28935));
});

}

return (new cljs.core.async.t_cljs$core$async28934(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28937_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28937_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28938_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28938_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24848__auto__ = wport;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28939 = (i + (1));
i = G__28939;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24848__auto__ = ret;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24836__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24836__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___28945 = arguments.length;
var i__25924__auto___28946 = (0);
while(true){
if((i__25924__auto___28946 < len__25923__auto___28945)){
args__25930__auto__.push((arguments[i__25924__auto___28946]));

var G__28947 = (i__25924__auto___28946 + (1));
i__25924__auto___28946 = G__28947;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28942){
var map__28943 = p__28942;
var map__28943__$1 = ((((!((map__28943 == null)))?((((map__28943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28943):map__28943);
var opts = map__28943__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28940){
var G__28941 = cljs.core.first.call(null,seq28940);
var seq28940__$1 = cljs.core.next.call(null,seq28940);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28941,seq28940__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28948 = [];
var len__25923__auto___28998 = arguments.length;
var i__25924__auto___28999 = (0);
while(true){
if((i__25924__auto___28999 < len__25923__auto___28998)){
args28948.push((arguments[i__25924__auto___28999]));

var G__29000 = (i__25924__auto___28999 + (1));
i__25924__auto___28999 = G__29000;
continue;
} else {
}
break;
}

var G__28950 = args28948.length;
switch (G__28950) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28948.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28835__auto___29002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___29002){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___29002){
return (function (state_28974){
var state_val_28975 = (state_28974[(1)]);
if((state_val_28975 === (7))){
var inst_28970 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_28976_29003 = state_28974__$1;
(statearr_28976_29003[(2)] = inst_28970);

(statearr_28976_29003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (1))){
var state_28974__$1 = state_28974;
var statearr_28977_29004 = state_28974__$1;
(statearr_28977_29004[(2)] = null);

(statearr_28977_29004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (4))){
var inst_28953 = (state_28974[(7)]);
var inst_28953__$1 = (state_28974[(2)]);
var inst_28954 = (inst_28953__$1 == null);
var state_28974__$1 = (function (){var statearr_28978 = state_28974;
(statearr_28978[(7)] = inst_28953__$1);

return statearr_28978;
})();
if(cljs.core.truth_(inst_28954)){
var statearr_28979_29005 = state_28974__$1;
(statearr_28979_29005[(1)] = (5));

} else {
var statearr_28980_29006 = state_28974__$1;
(statearr_28980_29006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (13))){
var state_28974__$1 = state_28974;
var statearr_28981_29007 = state_28974__$1;
(statearr_28981_29007[(2)] = null);

(statearr_28981_29007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (6))){
var inst_28953 = (state_28974[(7)]);
var state_28974__$1 = state_28974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28974__$1,(11),to,inst_28953);
} else {
if((state_val_28975 === (3))){
var inst_28972 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28974__$1,inst_28972);
} else {
if((state_val_28975 === (12))){
var state_28974__$1 = state_28974;
var statearr_28982_29008 = state_28974__$1;
(statearr_28982_29008[(2)] = null);

(statearr_28982_29008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (2))){
var state_28974__$1 = state_28974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28974__$1,(4),from);
} else {
if((state_val_28975 === (11))){
var inst_28963 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
if(cljs.core.truth_(inst_28963)){
var statearr_28983_29009 = state_28974__$1;
(statearr_28983_29009[(1)] = (12));

} else {
var statearr_28984_29010 = state_28974__$1;
(statearr_28984_29010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (9))){
var state_28974__$1 = state_28974;
var statearr_28985_29011 = state_28974__$1;
(statearr_28985_29011[(2)] = null);

(statearr_28985_29011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (5))){
var state_28974__$1 = state_28974;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28986_29012 = state_28974__$1;
(statearr_28986_29012[(1)] = (8));

} else {
var statearr_28987_29013 = state_28974__$1;
(statearr_28987_29013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (14))){
var inst_28968 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_28988_29014 = state_28974__$1;
(statearr_28988_29014[(2)] = inst_28968);

(statearr_28988_29014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (10))){
var inst_28960 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_28989_29015 = state_28974__$1;
(statearr_28989_29015[(2)] = inst_28960);

(statearr_28989_29015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (8))){
var inst_28957 = cljs.core.async.close_BANG_.call(null,to);
var state_28974__$1 = state_28974;
var statearr_28990_29016 = state_28974__$1;
(statearr_28990_29016[(2)] = inst_28957);

(statearr_28990_29016[(1)] = (10));


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
});})(c__28835__auto___29002))
;
return ((function (switch__28723__auto__,c__28835__auto___29002){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_28994 = [null,null,null,null,null,null,null,null];
(statearr_28994[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_28994[(1)] = (1));

return statearr_28994;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_28974){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_28974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e28995){if((e28995 instanceof Object)){
var ex__28727__auto__ = e28995;
var statearr_28996_29017 = state_28974;
(statearr_28996_29017[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29018 = state_28974;
state_28974 = G__29018;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_28974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_28974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___29002))
})();
var state__28837__auto__ = (function (){var statearr_28997 = f__28836__auto__.call(null);
(statearr_28997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___29002);

return statearr_28997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___29002))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29206){
var vec__29207 = p__29206;
var v = cljs.core.nth.call(null,vec__29207,(0),null);
var p = cljs.core.nth.call(null,vec__29207,(1),null);
var job = vec__29207;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28835__auto___29393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___29393,res,vec__29207,v,p,job,jobs,results){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___29393,res,vec__29207,v,p,job,jobs,results){
return (function (state_29214){
var state_val_29215 = (state_29214[(1)]);
if((state_val_29215 === (1))){
var state_29214__$1 = state_29214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29214__$1,(2),res,v);
} else {
if((state_val_29215 === (2))){
var inst_29211 = (state_29214[(2)]);
var inst_29212 = cljs.core.async.close_BANG_.call(null,res);
var state_29214__$1 = (function (){var statearr_29216 = state_29214;
(statearr_29216[(7)] = inst_29211);

return statearr_29216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29214__$1,inst_29212);
} else {
return null;
}
}
});})(c__28835__auto___29393,res,vec__29207,v,p,job,jobs,results))
;
return ((function (switch__28723__auto__,c__28835__auto___29393,res,vec__29207,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0 = (function (){
var statearr_29220 = [null,null,null,null,null,null,null,null];
(statearr_29220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__);

(statearr_29220[(1)] = (1));

return statearr_29220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1 = (function (state_29214){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_29214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e29221){if((e29221 instanceof Object)){
var ex__28727__auto__ = e29221;
var statearr_29222_29394 = state_29214;
(statearr_29222_29394[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29395 = state_29214;
state_29214 = G__29395;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__ = function(state_29214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1.call(this,state_29214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___29393,res,vec__29207,v,p,job,jobs,results))
})();
var state__28837__auto__ = (function (){var statearr_29223 = f__28836__auto__.call(null);
(statearr_29223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___29393);

return statearr_29223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___29393,res,vec__29207,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29224){
var vec__29225 = p__29224;
var v = cljs.core.nth.call(null,vec__29225,(0),null);
var p = cljs.core.nth.call(null,vec__29225,(1),null);
var job = vec__29225;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25763__auto___29396 = n;
var __29397 = (0);
while(true){
if((__29397 < n__25763__auto___29396)){
var G__29228_29398 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29228_29398) {
case "compute":
var c__28835__auto___29400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29397,c__28835__auto___29400,G__29228_29398,n__25763__auto___29396,jobs,results,process,async){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (__29397,c__28835__auto___29400,G__29228_29398,n__25763__auto___29396,jobs,results,process,async){
return (function (state_29241){
var state_val_29242 = (state_29241[(1)]);
if((state_val_29242 === (1))){
var state_29241__$1 = state_29241;
var statearr_29243_29401 = state_29241__$1;
(statearr_29243_29401[(2)] = null);

(statearr_29243_29401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (2))){
var state_29241__$1 = state_29241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29241__$1,(4),jobs);
} else {
if((state_val_29242 === (3))){
var inst_29239 = (state_29241[(2)]);
var state_29241__$1 = state_29241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29241__$1,inst_29239);
} else {
if((state_val_29242 === (4))){
var inst_29231 = (state_29241[(2)]);
var inst_29232 = process.call(null,inst_29231);
var state_29241__$1 = state_29241;
if(cljs.core.truth_(inst_29232)){
var statearr_29244_29402 = state_29241__$1;
(statearr_29244_29402[(1)] = (5));

} else {
var statearr_29245_29403 = state_29241__$1;
(statearr_29245_29403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (5))){
var state_29241__$1 = state_29241;
var statearr_29246_29404 = state_29241__$1;
(statearr_29246_29404[(2)] = null);

(statearr_29246_29404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (6))){
var state_29241__$1 = state_29241;
var statearr_29247_29405 = state_29241__$1;
(statearr_29247_29405[(2)] = null);

(statearr_29247_29405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (7))){
var inst_29237 = (state_29241[(2)]);
var state_29241__$1 = state_29241;
var statearr_29248_29406 = state_29241__$1;
(statearr_29248_29406[(2)] = inst_29237);

(statearr_29248_29406[(1)] = (3));


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
});})(__29397,c__28835__auto___29400,G__29228_29398,n__25763__auto___29396,jobs,results,process,async))
;
return ((function (__29397,switch__28723__auto__,c__28835__auto___29400,G__29228_29398,n__25763__auto___29396,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0 = (function (){
var statearr_29252 = [null,null,null,null,null,null,null];
(statearr_29252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__);

(statearr_29252[(1)] = (1));

return statearr_29252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1 = (function (state_29241){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_29241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e29253){if((e29253 instanceof Object)){
var ex__28727__auto__ = e29253;
var statearr_29254_29407 = state_29241;
(statearr_29254_29407[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29408 = state_29241;
state_29241 = G__29408;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__ = function(state_29241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1.call(this,state_29241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__;
})()
;})(__29397,switch__28723__auto__,c__28835__auto___29400,G__29228_29398,n__25763__auto___29396,jobs,results,process,async))
})();
var state__28837__auto__ = (function (){var statearr_29255 = f__28836__auto__.call(null);
(statearr_29255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___29400);

return statearr_29255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(__29397,c__28835__auto___29400,G__29228_29398,n__25763__auto___29396,jobs,results,process,async))
);


break;
case "async":
var c__28835__auto___29409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29397,c__28835__auto___29409,G__29228_29398,n__25763__auto___29396,jobs,results,process,async){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (__29397,c__28835__auto___29409,G__29228_29398,n__25763__auto___29396,jobs,results,process,async){
return (function (state_29268){
var state_val_29269 = (state_29268[(1)]);
if((state_val_29269 === (1))){
var state_29268__$1 = state_29268;
var statearr_29270_29410 = state_29268__$1;
(statearr_29270_29410[(2)] = null);

(statearr_29270_29410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29269 === (2))){
var state_29268__$1 = state_29268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29268__$1,(4),jobs);
} else {
if((state_val_29269 === (3))){
var inst_29266 = (state_29268[(2)]);
var state_29268__$1 = state_29268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29268__$1,inst_29266);
} else {
if((state_val_29269 === (4))){
var inst_29258 = (state_29268[(2)]);
var inst_29259 = async.call(null,inst_29258);
var state_29268__$1 = state_29268;
if(cljs.core.truth_(inst_29259)){
var statearr_29271_29411 = state_29268__$1;
(statearr_29271_29411[(1)] = (5));

} else {
var statearr_29272_29412 = state_29268__$1;
(statearr_29272_29412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29269 === (5))){
var state_29268__$1 = state_29268;
var statearr_29273_29413 = state_29268__$1;
(statearr_29273_29413[(2)] = null);

(statearr_29273_29413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29269 === (6))){
var state_29268__$1 = state_29268;
var statearr_29274_29414 = state_29268__$1;
(statearr_29274_29414[(2)] = null);

(statearr_29274_29414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29269 === (7))){
var inst_29264 = (state_29268[(2)]);
var state_29268__$1 = state_29268;
var statearr_29275_29415 = state_29268__$1;
(statearr_29275_29415[(2)] = inst_29264);

(statearr_29275_29415[(1)] = (3));


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
});})(__29397,c__28835__auto___29409,G__29228_29398,n__25763__auto___29396,jobs,results,process,async))
;
return ((function (__29397,switch__28723__auto__,c__28835__auto___29409,G__29228_29398,n__25763__auto___29396,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0 = (function (){
var statearr_29279 = [null,null,null,null,null,null,null];
(statearr_29279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__);

(statearr_29279[(1)] = (1));

return statearr_29279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1 = (function (state_29268){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_29268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e29280){if((e29280 instanceof Object)){
var ex__28727__auto__ = e29280;
var statearr_29281_29416 = state_29268;
(statearr_29281_29416[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29417 = state_29268;
state_29268 = G__29417;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__ = function(state_29268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1.call(this,state_29268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__;
})()
;})(__29397,switch__28723__auto__,c__28835__auto___29409,G__29228_29398,n__25763__auto___29396,jobs,results,process,async))
})();
var state__28837__auto__ = (function (){var statearr_29282 = f__28836__auto__.call(null);
(statearr_29282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___29409);

return statearr_29282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(__29397,c__28835__auto___29409,G__29228_29398,n__25763__auto___29396,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29418 = (__29397 + (1));
__29397 = G__29418;
continue;
} else {
}
break;
}

var c__28835__auto___29419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___29419,jobs,results,process,async){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___29419,jobs,results,process,async){
return (function (state_29304){
var state_val_29305 = (state_29304[(1)]);
if((state_val_29305 === (1))){
var state_29304__$1 = state_29304;
var statearr_29306_29420 = state_29304__$1;
(statearr_29306_29420[(2)] = null);

(statearr_29306_29420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (2))){
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(4),from);
} else {
if((state_val_29305 === (3))){
var inst_29302 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29304__$1,inst_29302);
} else {
if((state_val_29305 === (4))){
var inst_29285 = (state_29304[(7)]);
var inst_29285__$1 = (state_29304[(2)]);
var inst_29286 = (inst_29285__$1 == null);
var state_29304__$1 = (function (){var statearr_29307 = state_29304;
(statearr_29307[(7)] = inst_29285__$1);

return statearr_29307;
})();
if(cljs.core.truth_(inst_29286)){
var statearr_29308_29421 = state_29304__$1;
(statearr_29308_29421[(1)] = (5));

} else {
var statearr_29309_29422 = state_29304__$1;
(statearr_29309_29422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (5))){
var inst_29288 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29304__$1 = state_29304;
var statearr_29310_29423 = state_29304__$1;
(statearr_29310_29423[(2)] = inst_29288);

(statearr_29310_29423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (6))){
var inst_29290 = (state_29304[(8)]);
var inst_29285 = (state_29304[(7)]);
var inst_29290__$1 = cljs.core.async.chan.call(null,(1));
var inst_29291 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29292 = [inst_29285,inst_29290__$1];
var inst_29293 = (new cljs.core.PersistentVector(null,2,(5),inst_29291,inst_29292,null));
var state_29304__$1 = (function (){var statearr_29311 = state_29304;
(statearr_29311[(8)] = inst_29290__$1);

return statearr_29311;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29304__$1,(8),jobs,inst_29293);
} else {
if((state_val_29305 === (7))){
var inst_29300 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29312_29424 = state_29304__$1;
(statearr_29312_29424[(2)] = inst_29300);

(statearr_29312_29424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (8))){
var inst_29290 = (state_29304[(8)]);
var inst_29295 = (state_29304[(2)]);
var state_29304__$1 = (function (){var statearr_29313 = state_29304;
(statearr_29313[(9)] = inst_29295);

return statearr_29313;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29304__$1,(9),results,inst_29290);
} else {
if((state_val_29305 === (9))){
var inst_29297 = (state_29304[(2)]);
var state_29304__$1 = (function (){var statearr_29314 = state_29304;
(statearr_29314[(10)] = inst_29297);

return statearr_29314;
})();
var statearr_29315_29425 = state_29304__$1;
(statearr_29315_29425[(2)] = null);

(statearr_29315_29425[(1)] = (2));


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
});})(c__28835__auto___29419,jobs,results,process,async))
;
return ((function (switch__28723__auto__,c__28835__auto___29419,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0 = (function (){
var statearr_29319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__);

(statearr_29319[(1)] = (1));

return statearr_29319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1 = (function (state_29304){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_29304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e29320){if((e29320 instanceof Object)){
var ex__28727__auto__ = e29320;
var statearr_29321_29426 = state_29304;
(statearr_29321_29426[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29427 = state_29304;
state_29304 = G__29427;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__ = function(state_29304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1.call(this,state_29304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___29419,jobs,results,process,async))
})();
var state__28837__auto__ = (function (){var statearr_29322 = f__28836__auto__.call(null);
(statearr_29322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___29419);

return statearr_29322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___29419,jobs,results,process,async))
);


var c__28835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto__,jobs,results,process,async){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto__,jobs,results,process,async){
return (function (state_29360){
var state_val_29361 = (state_29360[(1)]);
if((state_val_29361 === (7))){
var inst_29356 = (state_29360[(2)]);
var state_29360__$1 = state_29360;
var statearr_29362_29428 = state_29360__$1;
(statearr_29362_29428[(2)] = inst_29356);

(statearr_29362_29428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (20))){
var state_29360__$1 = state_29360;
var statearr_29363_29429 = state_29360__$1;
(statearr_29363_29429[(2)] = null);

(statearr_29363_29429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (1))){
var state_29360__$1 = state_29360;
var statearr_29364_29430 = state_29360__$1;
(statearr_29364_29430[(2)] = null);

(statearr_29364_29430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (4))){
var inst_29325 = (state_29360[(7)]);
var inst_29325__$1 = (state_29360[(2)]);
var inst_29326 = (inst_29325__$1 == null);
var state_29360__$1 = (function (){var statearr_29365 = state_29360;
(statearr_29365[(7)] = inst_29325__$1);

return statearr_29365;
})();
if(cljs.core.truth_(inst_29326)){
var statearr_29366_29431 = state_29360__$1;
(statearr_29366_29431[(1)] = (5));

} else {
var statearr_29367_29432 = state_29360__$1;
(statearr_29367_29432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (15))){
var inst_29338 = (state_29360[(8)]);
var state_29360__$1 = state_29360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29360__$1,(18),to,inst_29338);
} else {
if((state_val_29361 === (21))){
var inst_29351 = (state_29360[(2)]);
var state_29360__$1 = state_29360;
var statearr_29368_29433 = state_29360__$1;
(statearr_29368_29433[(2)] = inst_29351);

(statearr_29368_29433[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (13))){
var inst_29353 = (state_29360[(2)]);
var state_29360__$1 = (function (){var statearr_29369 = state_29360;
(statearr_29369[(9)] = inst_29353);

return statearr_29369;
})();
var statearr_29370_29434 = state_29360__$1;
(statearr_29370_29434[(2)] = null);

(statearr_29370_29434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (6))){
var inst_29325 = (state_29360[(7)]);
var state_29360__$1 = state_29360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29360__$1,(11),inst_29325);
} else {
if((state_val_29361 === (17))){
var inst_29346 = (state_29360[(2)]);
var state_29360__$1 = state_29360;
if(cljs.core.truth_(inst_29346)){
var statearr_29371_29435 = state_29360__$1;
(statearr_29371_29435[(1)] = (19));

} else {
var statearr_29372_29436 = state_29360__$1;
(statearr_29372_29436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (3))){
var inst_29358 = (state_29360[(2)]);
var state_29360__$1 = state_29360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29360__$1,inst_29358);
} else {
if((state_val_29361 === (12))){
var inst_29335 = (state_29360[(10)]);
var state_29360__$1 = state_29360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29360__$1,(14),inst_29335);
} else {
if((state_val_29361 === (2))){
var state_29360__$1 = state_29360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29360__$1,(4),results);
} else {
if((state_val_29361 === (19))){
var state_29360__$1 = state_29360;
var statearr_29373_29437 = state_29360__$1;
(statearr_29373_29437[(2)] = null);

(statearr_29373_29437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (11))){
var inst_29335 = (state_29360[(2)]);
var state_29360__$1 = (function (){var statearr_29374 = state_29360;
(statearr_29374[(10)] = inst_29335);

return statearr_29374;
})();
var statearr_29375_29438 = state_29360__$1;
(statearr_29375_29438[(2)] = null);

(statearr_29375_29438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (9))){
var state_29360__$1 = state_29360;
var statearr_29376_29439 = state_29360__$1;
(statearr_29376_29439[(2)] = null);

(statearr_29376_29439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (5))){
var state_29360__$1 = state_29360;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29377_29440 = state_29360__$1;
(statearr_29377_29440[(1)] = (8));

} else {
var statearr_29378_29441 = state_29360__$1;
(statearr_29378_29441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (14))){
var inst_29340 = (state_29360[(11)]);
var inst_29338 = (state_29360[(8)]);
var inst_29338__$1 = (state_29360[(2)]);
var inst_29339 = (inst_29338__$1 == null);
var inst_29340__$1 = cljs.core.not.call(null,inst_29339);
var state_29360__$1 = (function (){var statearr_29379 = state_29360;
(statearr_29379[(11)] = inst_29340__$1);

(statearr_29379[(8)] = inst_29338__$1);

return statearr_29379;
})();
if(inst_29340__$1){
var statearr_29380_29442 = state_29360__$1;
(statearr_29380_29442[(1)] = (15));

} else {
var statearr_29381_29443 = state_29360__$1;
(statearr_29381_29443[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (16))){
var inst_29340 = (state_29360[(11)]);
var state_29360__$1 = state_29360;
var statearr_29382_29444 = state_29360__$1;
(statearr_29382_29444[(2)] = inst_29340);

(statearr_29382_29444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (10))){
var inst_29332 = (state_29360[(2)]);
var state_29360__$1 = state_29360;
var statearr_29383_29445 = state_29360__$1;
(statearr_29383_29445[(2)] = inst_29332);

(statearr_29383_29445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (18))){
var inst_29343 = (state_29360[(2)]);
var state_29360__$1 = state_29360;
var statearr_29384_29446 = state_29360__$1;
(statearr_29384_29446[(2)] = inst_29343);

(statearr_29384_29446[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29361 === (8))){
var inst_29329 = cljs.core.async.close_BANG_.call(null,to);
var state_29360__$1 = state_29360;
var statearr_29385_29447 = state_29360__$1;
(statearr_29385_29447[(2)] = inst_29329);

(statearr_29385_29447[(1)] = (10));


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
});})(c__28835__auto__,jobs,results,process,async))
;
return ((function (switch__28723__auto__,c__28835__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0 = (function (){
var statearr_29389 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__);

(statearr_29389[(1)] = (1));

return statearr_29389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1 = (function (state_29360){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_29360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e29390){if((e29390 instanceof Object)){
var ex__28727__auto__ = e29390;
var statearr_29391_29448 = state_29360;
(statearr_29391_29448[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29449 = state_29360;
state_29360 = G__29449;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__ = function(state_29360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1.call(this,state_29360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28724__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto__,jobs,results,process,async))
})();
var state__28837__auto__ = (function (){var statearr_29392 = f__28836__auto__.call(null);
(statearr_29392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto__);

return statearr_29392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto__,jobs,results,process,async))
);

return c__28835__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29450 = [];
var len__25923__auto___29453 = arguments.length;
var i__25924__auto___29454 = (0);
while(true){
if((i__25924__auto___29454 < len__25923__auto___29453)){
args29450.push((arguments[i__25924__auto___29454]));

var G__29455 = (i__25924__auto___29454 + (1));
i__25924__auto___29454 = G__29455;
continue;
} else {
}
break;
}

var G__29452 = args29450.length;
switch (G__29452) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29450.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29457 = [];
var len__25923__auto___29460 = arguments.length;
var i__25924__auto___29461 = (0);
while(true){
if((i__25924__auto___29461 < len__25923__auto___29460)){
args29457.push((arguments[i__25924__auto___29461]));

var G__29462 = (i__25924__auto___29461 + (1));
i__25924__auto___29461 = G__29462;
continue;
} else {
}
break;
}

var G__29459 = args29457.length;
switch (G__29459) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29457.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29464 = [];
var len__25923__auto___29517 = arguments.length;
var i__25924__auto___29518 = (0);
while(true){
if((i__25924__auto___29518 < len__25923__auto___29517)){
args29464.push((arguments[i__25924__auto___29518]));

var G__29519 = (i__25924__auto___29518 + (1));
i__25924__auto___29518 = G__29519;
continue;
} else {
}
break;
}

var G__29466 = args29464.length;
switch (G__29466) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29464.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28835__auto___29521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___29521,tc,fc){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___29521,tc,fc){
return (function (state_29492){
var state_val_29493 = (state_29492[(1)]);
if((state_val_29493 === (7))){
var inst_29488 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29494_29522 = state_29492__$1;
(statearr_29494_29522[(2)] = inst_29488);

(statearr_29494_29522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (1))){
var state_29492__$1 = state_29492;
var statearr_29495_29523 = state_29492__$1;
(statearr_29495_29523[(2)] = null);

(statearr_29495_29523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (4))){
var inst_29469 = (state_29492[(7)]);
var inst_29469__$1 = (state_29492[(2)]);
var inst_29470 = (inst_29469__$1 == null);
var state_29492__$1 = (function (){var statearr_29496 = state_29492;
(statearr_29496[(7)] = inst_29469__$1);

return statearr_29496;
})();
if(cljs.core.truth_(inst_29470)){
var statearr_29497_29524 = state_29492__$1;
(statearr_29497_29524[(1)] = (5));

} else {
var statearr_29498_29525 = state_29492__$1;
(statearr_29498_29525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (13))){
var state_29492__$1 = state_29492;
var statearr_29499_29526 = state_29492__$1;
(statearr_29499_29526[(2)] = null);

(statearr_29499_29526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (6))){
var inst_29469 = (state_29492[(7)]);
var inst_29475 = p.call(null,inst_29469);
var state_29492__$1 = state_29492;
if(cljs.core.truth_(inst_29475)){
var statearr_29500_29527 = state_29492__$1;
(statearr_29500_29527[(1)] = (9));

} else {
var statearr_29501_29528 = state_29492__$1;
(statearr_29501_29528[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (3))){
var inst_29490 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29492__$1,inst_29490);
} else {
if((state_val_29493 === (12))){
var state_29492__$1 = state_29492;
var statearr_29502_29529 = state_29492__$1;
(statearr_29502_29529[(2)] = null);

(statearr_29502_29529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (2))){
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29492__$1,(4),ch);
} else {
if((state_val_29493 === (11))){
var inst_29469 = (state_29492[(7)]);
var inst_29479 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29492__$1,(8),inst_29479,inst_29469);
} else {
if((state_val_29493 === (9))){
var state_29492__$1 = state_29492;
var statearr_29503_29530 = state_29492__$1;
(statearr_29503_29530[(2)] = tc);

(statearr_29503_29530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (5))){
var inst_29472 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29473 = cljs.core.async.close_BANG_.call(null,fc);
var state_29492__$1 = (function (){var statearr_29504 = state_29492;
(statearr_29504[(8)] = inst_29472);

return statearr_29504;
})();
var statearr_29505_29531 = state_29492__$1;
(statearr_29505_29531[(2)] = inst_29473);

(statearr_29505_29531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (14))){
var inst_29486 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29506_29532 = state_29492__$1;
(statearr_29506_29532[(2)] = inst_29486);

(statearr_29506_29532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (10))){
var state_29492__$1 = state_29492;
var statearr_29507_29533 = state_29492__$1;
(statearr_29507_29533[(2)] = fc);

(statearr_29507_29533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (8))){
var inst_29481 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
if(cljs.core.truth_(inst_29481)){
var statearr_29508_29534 = state_29492__$1;
(statearr_29508_29534[(1)] = (12));

} else {
var statearr_29509_29535 = state_29492__$1;
(statearr_29509_29535[(1)] = (13));

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
});})(c__28835__auto___29521,tc,fc))
;
return ((function (switch__28723__auto__,c__28835__auto___29521,tc,fc){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_29513 = [null,null,null,null,null,null,null,null,null];
(statearr_29513[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_29513[(1)] = (1));

return statearr_29513;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_29492){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_29492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e29514){if((e29514 instanceof Object)){
var ex__28727__auto__ = e29514;
var statearr_29515_29536 = state_29492;
(statearr_29515_29536[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29537 = state_29492;
state_29492 = G__29537;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_29492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_29492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___29521,tc,fc))
})();
var state__28837__auto__ = (function (){var statearr_29516 = f__28836__auto__.call(null);
(statearr_29516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___29521);

return statearr_29516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___29521,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto__){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto__){
return (function (state_29601){
var state_val_29602 = (state_29601[(1)]);
if((state_val_29602 === (7))){
var inst_29597 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29603_29624 = state_29601__$1;
(statearr_29603_29624[(2)] = inst_29597);

(statearr_29603_29624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (1))){
var inst_29581 = init;
var state_29601__$1 = (function (){var statearr_29604 = state_29601;
(statearr_29604[(7)] = inst_29581);

return statearr_29604;
})();
var statearr_29605_29625 = state_29601__$1;
(statearr_29605_29625[(2)] = null);

(statearr_29605_29625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (4))){
var inst_29584 = (state_29601[(8)]);
var inst_29584__$1 = (state_29601[(2)]);
var inst_29585 = (inst_29584__$1 == null);
var state_29601__$1 = (function (){var statearr_29606 = state_29601;
(statearr_29606[(8)] = inst_29584__$1);

return statearr_29606;
})();
if(cljs.core.truth_(inst_29585)){
var statearr_29607_29626 = state_29601__$1;
(statearr_29607_29626[(1)] = (5));

} else {
var statearr_29608_29627 = state_29601__$1;
(statearr_29608_29627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (6))){
var inst_29581 = (state_29601[(7)]);
var inst_29588 = (state_29601[(9)]);
var inst_29584 = (state_29601[(8)]);
var inst_29588__$1 = f.call(null,inst_29581,inst_29584);
var inst_29589 = cljs.core.reduced_QMARK_.call(null,inst_29588__$1);
var state_29601__$1 = (function (){var statearr_29609 = state_29601;
(statearr_29609[(9)] = inst_29588__$1);

return statearr_29609;
})();
if(inst_29589){
var statearr_29610_29628 = state_29601__$1;
(statearr_29610_29628[(1)] = (8));

} else {
var statearr_29611_29629 = state_29601__$1;
(statearr_29611_29629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (3))){
var inst_29599 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29601__$1,inst_29599);
} else {
if((state_val_29602 === (2))){
var state_29601__$1 = state_29601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29601__$1,(4),ch);
} else {
if((state_val_29602 === (9))){
var inst_29588 = (state_29601[(9)]);
var inst_29581 = inst_29588;
var state_29601__$1 = (function (){var statearr_29612 = state_29601;
(statearr_29612[(7)] = inst_29581);

return statearr_29612;
})();
var statearr_29613_29630 = state_29601__$1;
(statearr_29613_29630[(2)] = null);

(statearr_29613_29630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (5))){
var inst_29581 = (state_29601[(7)]);
var state_29601__$1 = state_29601;
var statearr_29614_29631 = state_29601__$1;
(statearr_29614_29631[(2)] = inst_29581);

(statearr_29614_29631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (10))){
var inst_29595 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29615_29632 = state_29601__$1;
(statearr_29615_29632[(2)] = inst_29595);

(statearr_29615_29632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (8))){
var inst_29588 = (state_29601[(9)]);
var inst_29591 = cljs.core.deref.call(null,inst_29588);
var state_29601__$1 = state_29601;
var statearr_29616_29633 = state_29601__$1;
(statearr_29616_29633[(2)] = inst_29591);

(statearr_29616_29633[(1)] = (10));


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
});})(c__28835__auto__))
;
return ((function (switch__28723__auto__,c__28835__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28724__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28724__auto____0 = (function (){
var statearr_29620 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29620[(0)] = cljs$core$async$reduce_$_state_machine__28724__auto__);

(statearr_29620[(1)] = (1));

return statearr_29620;
});
var cljs$core$async$reduce_$_state_machine__28724__auto____1 = (function (state_29601){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_29601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e29621){if((e29621 instanceof Object)){
var ex__28727__auto__ = e29621;
var statearr_29622_29634 = state_29601;
(statearr_29622_29634[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29635 = state_29601;
state_29601 = G__29635;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28724__auto__ = function(state_29601){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28724__auto____1.call(this,state_29601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28724__auto____0;
cljs$core$async$reduce_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28724__auto____1;
return cljs$core$async$reduce_$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto__))
})();
var state__28837__auto__ = (function (){var statearr_29623 = f__28836__auto__.call(null);
(statearr_29623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto__);

return statearr_29623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto__))
);

return c__28835__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29636 = [];
var len__25923__auto___29688 = arguments.length;
var i__25924__auto___29689 = (0);
while(true){
if((i__25924__auto___29689 < len__25923__auto___29688)){
args29636.push((arguments[i__25924__auto___29689]));

var G__29690 = (i__25924__auto___29689 + (1));
i__25924__auto___29689 = G__29690;
continue;
} else {
}
break;
}

var G__29638 = args29636.length;
switch (G__29638) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29636.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto__){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto__){
return (function (state_29663){
var state_val_29664 = (state_29663[(1)]);
if((state_val_29664 === (7))){
var inst_29645 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
var statearr_29665_29692 = state_29663__$1;
(statearr_29665_29692[(2)] = inst_29645);

(statearr_29665_29692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (1))){
var inst_29639 = cljs.core.seq.call(null,coll);
var inst_29640 = inst_29639;
var state_29663__$1 = (function (){var statearr_29666 = state_29663;
(statearr_29666[(7)] = inst_29640);

return statearr_29666;
})();
var statearr_29667_29693 = state_29663__$1;
(statearr_29667_29693[(2)] = null);

(statearr_29667_29693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (4))){
var inst_29640 = (state_29663[(7)]);
var inst_29643 = cljs.core.first.call(null,inst_29640);
var state_29663__$1 = state_29663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29663__$1,(7),ch,inst_29643);
} else {
if((state_val_29664 === (13))){
var inst_29657 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
var statearr_29668_29694 = state_29663__$1;
(statearr_29668_29694[(2)] = inst_29657);

(statearr_29668_29694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (6))){
var inst_29648 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
if(cljs.core.truth_(inst_29648)){
var statearr_29669_29695 = state_29663__$1;
(statearr_29669_29695[(1)] = (8));

} else {
var statearr_29670_29696 = state_29663__$1;
(statearr_29670_29696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (3))){
var inst_29661 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29663__$1,inst_29661);
} else {
if((state_val_29664 === (12))){
var state_29663__$1 = state_29663;
var statearr_29671_29697 = state_29663__$1;
(statearr_29671_29697[(2)] = null);

(statearr_29671_29697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (2))){
var inst_29640 = (state_29663[(7)]);
var state_29663__$1 = state_29663;
if(cljs.core.truth_(inst_29640)){
var statearr_29672_29698 = state_29663__$1;
(statearr_29672_29698[(1)] = (4));

} else {
var statearr_29673_29699 = state_29663__$1;
(statearr_29673_29699[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (11))){
var inst_29654 = cljs.core.async.close_BANG_.call(null,ch);
var state_29663__$1 = state_29663;
var statearr_29674_29700 = state_29663__$1;
(statearr_29674_29700[(2)] = inst_29654);

(statearr_29674_29700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (9))){
var state_29663__$1 = state_29663;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29675_29701 = state_29663__$1;
(statearr_29675_29701[(1)] = (11));

} else {
var statearr_29676_29702 = state_29663__$1;
(statearr_29676_29702[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (5))){
var inst_29640 = (state_29663[(7)]);
var state_29663__$1 = state_29663;
var statearr_29677_29703 = state_29663__$1;
(statearr_29677_29703[(2)] = inst_29640);

(statearr_29677_29703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (10))){
var inst_29659 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
var statearr_29678_29704 = state_29663__$1;
(statearr_29678_29704[(2)] = inst_29659);

(statearr_29678_29704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (8))){
var inst_29640 = (state_29663[(7)]);
var inst_29650 = cljs.core.next.call(null,inst_29640);
var inst_29640__$1 = inst_29650;
var state_29663__$1 = (function (){var statearr_29679 = state_29663;
(statearr_29679[(7)] = inst_29640__$1);

return statearr_29679;
})();
var statearr_29680_29705 = state_29663__$1;
(statearr_29680_29705[(2)] = null);

(statearr_29680_29705[(1)] = (2));


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
});})(c__28835__auto__))
;
return ((function (switch__28723__auto__,c__28835__auto__){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_29684 = [null,null,null,null,null,null,null,null];
(statearr_29684[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_29684[(1)] = (1));

return statearr_29684;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_29663){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_29663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e29685){if((e29685 instanceof Object)){
var ex__28727__auto__ = e29685;
var statearr_29686_29706 = state_29663;
(statearr_29686_29706[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29707 = state_29663;
state_29663 = G__29707;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_29663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_29663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto__))
})();
var state__28837__auto__ = (function (){var statearr_29687 = f__28836__auto__.call(null);
(statearr_29687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto__);

return statearr_29687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto__))
);

return c__28835__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25511__auto__ = (((_ == null))?null:_);
var m__25512__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,_);
} else {
var m__25512__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29933 = (function (mult,ch,cs,meta29934){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29934 = meta29934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29935,meta29934__$1){
var self__ = this;
var _29935__$1 = this;
return (new cljs.core.async.t_cljs$core$async29933(self__.mult,self__.ch,self__.cs,meta29934__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29935){
var self__ = this;
var _29935__$1 = this;
return self__.meta29934;
});})(cs))
;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29933.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29934","meta29934",-301459518,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29933";

cljs.core.async.t_cljs$core$async29933.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29933");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29933 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29933(mult__$1,ch__$1,cs__$1,meta29934){
return (new cljs.core.async.t_cljs$core$async29933(mult__$1,ch__$1,cs__$1,meta29934));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29933(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28835__auto___30158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___30158,cs,m,dchan,dctr,done){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___30158,cs,m,dchan,dctr,done){
return (function (state_30070){
var state_val_30071 = (state_30070[(1)]);
if((state_val_30071 === (7))){
var inst_30066 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30072_30159 = state_30070__$1;
(statearr_30072_30159[(2)] = inst_30066);

(statearr_30072_30159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (20))){
var inst_29969 = (state_30070[(7)]);
var inst_29981 = cljs.core.first.call(null,inst_29969);
var inst_29982 = cljs.core.nth.call(null,inst_29981,(0),null);
var inst_29983 = cljs.core.nth.call(null,inst_29981,(1),null);
var state_30070__$1 = (function (){var statearr_30073 = state_30070;
(statearr_30073[(8)] = inst_29982);

return statearr_30073;
})();
if(cljs.core.truth_(inst_29983)){
var statearr_30074_30160 = state_30070__$1;
(statearr_30074_30160[(1)] = (22));

} else {
var statearr_30075_30161 = state_30070__$1;
(statearr_30075_30161[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (27))){
var inst_30011 = (state_30070[(9)]);
var inst_30018 = (state_30070[(10)]);
var inst_29938 = (state_30070[(11)]);
var inst_30013 = (state_30070[(12)]);
var inst_30018__$1 = cljs.core._nth.call(null,inst_30011,inst_30013);
var inst_30019 = cljs.core.async.put_BANG_.call(null,inst_30018__$1,inst_29938,done);
var state_30070__$1 = (function (){var statearr_30076 = state_30070;
(statearr_30076[(10)] = inst_30018__$1);

return statearr_30076;
})();
if(cljs.core.truth_(inst_30019)){
var statearr_30077_30162 = state_30070__$1;
(statearr_30077_30162[(1)] = (30));

} else {
var statearr_30078_30163 = state_30070__$1;
(statearr_30078_30163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (1))){
var state_30070__$1 = state_30070;
var statearr_30079_30164 = state_30070__$1;
(statearr_30079_30164[(2)] = null);

(statearr_30079_30164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (24))){
var inst_29969 = (state_30070[(7)]);
var inst_29988 = (state_30070[(2)]);
var inst_29989 = cljs.core.next.call(null,inst_29969);
var inst_29947 = inst_29989;
var inst_29948 = null;
var inst_29949 = (0);
var inst_29950 = (0);
var state_30070__$1 = (function (){var statearr_30080 = state_30070;
(statearr_30080[(13)] = inst_29947);

(statearr_30080[(14)] = inst_29948);

(statearr_30080[(15)] = inst_29988);

(statearr_30080[(16)] = inst_29950);

(statearr_30080[(17)] = inst_29949);

return statearr_30080;
})();
var statearr_30081_30165 = state_30070__$1;
(statearr_30081_30165[(2)] = null);

(statearr_30081_30165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (39))){
var state_30070__$1 = state_30070;
var statearr_30085_30166 = state_30070__$1;
(statearr_30085_30166[(2)] = null);

(statearr_30085_30166[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (4))){
var inst_29938 = (state_30070[(11)]);
var inst_29938__$1 = (state_30070[(2)]);
var inst_29939 = (inst_29938__$1 == null);
var state_30070__$1 = (function (){var statearr_30086 = state_30070;
(statearr_30086[(11)] = inst_29938__$1);

return statearr_30086;
})();
if(cljs.core.truth_(inst_29939)){
var statearr_30087_30167 = state_30070__$1;
(statearr_30087_30167[(1)] = (5));

} else {
var statearr_30088_30168 = state_30070__$1;
(statearr_30088_30168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (15))){
var inst_29947 = (state_30070[(13)]);
var inst_29948 = (state_30070[(14)]);
var inst_29950 = (state_30070[(16)]);
var inst_29949 = (state_30070[(17)]);
var inst_29965 = (state_30070[(2)]);
var inst_29966 = (inst_29950 + (1));
var tmp30082 = inst_29947;
var tmp30083 = inst_29948;
var tmp30084 = inst_29949;
var inst_29947__$1 = tmp30082;
var inst_29948__$1 = tmp30083;
var inst_29949__$1 = tmp30084;
var inst_29950__$1 = inst_29966;
var state_30070__$1 = (function (){var statearr_30089 = state_30070;
(statearr_30089[(13)] = inst_29947__$1);

(statearr_30089[(18)] = inst_29965);

(statearr_30089[(14)] = inst_29948__$1);

(statearr_30089[(16)] = inst_29950__$1);

(statearr_30089[(17)] = inst_29949__$1);

return statearr_30089;
})();
var statearr_30090_30169 = state_30070__$1;
(statearr_30090_30169[(2)] = null);

(statearr_30090_30169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (21))){
var inst_29992 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30094_30170 = state_30070__$1;
(statearr_30094_30170[(2)] = inst_29992);

(statearr_30094_30170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (31))){
var inst_30018 = (state_30070[(10)]);
var inst_30022 = done.call(null,null);
var inst_30023 = cljs.core.async.untap_STAR_.call(null,m,inst_30018);
var state_30070__$1 = (function (){var statearr_30095 = state_30070;
(statearr_30095[(19)] = inst_30022);

return statearr_30095;
})();
var statearr_30096_30171 = state_30070__$1;
(statearr_30096_30171[(2)] = inst_30023);

(statearr_30096_30171[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (32))){
var inst_30011 = (state_30070[(9)]);
var inst_30010 = (state_30070[(20)]);
var inst_30012 = (state_30070[(21)]);
var inst_30013 = (state_30070[(12)]);
var inst_30025 = (state_30070[(2)]);
var inst_30026 = (inst_30013 + (1));
var tmp30091 = inst_30011;
var tmp30092 = inst_30010;
var tmp30093 = inst_30012;
var inst_30010__$1 = tmp30092;
var inst_30011__$1 = tmp30091;
var inst_30012__$1 = tmp30093;
var inst_30013__$1 = inst_30026;
var state_30070__$1 = (function (){var statearr_30097 = state_30070;
(statearr_30097[(9)] = inst_30011__$1);

(statearr_30097[(20)] = inst_30010__$1);

(statearr_30097[(22)] = inst_30025);

(statearr_30097[(21)] = inst_30012__$1);

(statearr_30097[(12)] = inst_30013__$1);

return statearr_30097;
})();
var statearr_30098_30172 = state_30070__$1;
(statearr_30098_30172[(2)] = null);

(statearr_30098_30172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (40))){
var inst_30038 = (state_30070[(23)]);
var inst_30042 = done.call(null,null);
var inst_30043 = cljs.core.async.untap_STAR_.call(null,m,inst_30038);
var state_30070__$1 = (function (){var statearr_30099 = state_30070;
(statearr_30099[(24)] = inst_30042);

return statearr_30099;
})();
var statearr_30100_30173 = state_30070__$1;
(statearr_30100_30173[(2)] = inst_30043);

(statearr_30100_30173[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (33))){
var inst_30029 = (state_30070[(25)]);
var inst_30031 = cljs.core.chunked_seq_QMARK_.call(null,inst_30029);
var state_30070__$1 = state_30070;
if(inst_30031){
var statearr_30101_30174 = state_30070__$1;
(statearr_30101_30174[(1)] = (36));

} else {
var statearr_30102_30175 = state_30070__$1;
(statearr_30102_30175[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (13))){
var inst_29959 = (state_30070[(26)]);
var inst_29962 = cljs.core.async.close_BANG_.call(null,inst_29959);
var state_30070__$1 = state_30070;
var statearr_30103_30176 = state_30070__$1;
(statearr_30103_30176[(2)] = inst_29962);

(statearr_30103_30176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (22))){
var inst_29982 = (state_30070[(8)]);
var inst_29985 = cljs.core.async.close_BANG_.call(null,inst_29982);
var state_30070__$1 = state_30070;
var statearr_30104_30177 = state_30070__$1;
(statearr_30104_30177[(2)] = inst_29985);

(statearr_30104_30177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (36))){
var inst_30029 = (state_30070[(25)]);
var inst_30033 = cljs.core.chunk_first.call(null,inst_30029);
var inst_30034 = cljs.core.chunk_rest.call(null,inst_30029);
var inst_30035 = cljs.core.count.call(null,inst_30033);
var inst_30010 = inst_30034;
var inst_30011 = inst_30033;
var inst_30012 = inst_30035;
var inst_30013 = (0);
var state_30070__$1 = (function (){var statearr_30105 = state_30070;
(statearr_30105[(9)] = inst_30011);

(statearr_30105[(20)] = inst_30010);

(statearr_30105[(21)] = inst_30012);

(statearr_30105[(12)] = inst_30013);

return statearr_30105;
})();
var statearr_30106_30178 = state_30070__$1;
(statearr_30106_30178[(2)] = null);

(statearr_30106_30178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (41))){
var inst_30029 = (state_30070[(25)]);
var inst_30045 = (state_30070[(2)]);
var inst_30046 = cljs.core.next.call(null,inst_30029);
var inst_30010 = inst_30046;
var inst_30011 = null;
var inst_30012 = (0);
var inst_30013 = (0);
var state_30070__$1 = (function (){var statearr_30107 = state_30070;
(statearr_30107[(9)] = inst_30011);

(statearr_30107[(27)] = inst_30045);

(statearr_30107[(20)] = inst_30010);

(statearr_30107[(21)] = inst_30012);

(statearr_30107[(12)] = inst_30013);

return statearr_30107;
})();
var statearr_30108_30179 = state_30070__$1;
(statearr_30108_30179[(2)] = null);

(statearr_30108_30179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (43))){
var state_30070__$1 = state_30070;
var statearr_30109_30180 = state_30070__$1;
(statearr_30109_30180[(2)] = null);

(statearr_30109_30180[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (29))){
var inst_30054 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30110_30181 = state_30070__$1;
(statearr_30110_30181[(2)] = inst_30054);

(statearr_30110_30181[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (44))){
var inst_30063 = (state_30070[(2)]);
var state_30070__$1 = (function (){var statearr_30111 = state_30070;
(statearr_30111[(28)] = inst_30063);

return statearr_30111;
})();
var statearr_30112_30182 = state_30070__$1;
(statearr_30112_30182[(2)] = null);

(statearr_30112_30182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (6))){
var inst_30002 = (state_30070[(29)]);
var inst_30001 = cljs.core.deref.call(null,cs);
var inst_30002__$1 = cljs.core.keys.call(null,inst_30001);
var inst_30003 = cljs.core.count.call(null,inst_30002__$1);
var inst_30004 = cljs.core.reset_BANG_.call(null,dctr,inst_30003);
var inst_30009 = cljs.core.seq.call(null,inst_30002__$1);
var inst_30010 = inst_30009;
var inst_30011 = null;
var inst_30012 = (0);
var inst_30013 = (0);
var state_30070__$1 = (function (){var statearr_30113 = state_30070;
(statearr_30113[(9)] = inst_30011);

(statearr_30113[(20)] = inst_30010);

(statearr_30113[(30)] = inst_30004);

(statearr_30113[(29)] = inst_30002__$1);

(statearr_30113[(21)] = inst_30012);

(statearr_30113[(12)] = inst_30013);

return statearr_30113;
})();
var statearr_30114_30183 = state_30070__$1;
(statearr_30114_30183[(2)] = null);

(statearr_30114_30183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (28))){
var inst_30010 = (state_30070[(20)]);
var inst_30029 = (state_30070[(25)]);
var inst_30029__$1 = cljs.core.seq.call(null,inst_30010);
var state_30070__$1 = (function (){var statearr_30115 = state_30070;
(statearr_30115[(25)] = inst_30029__$1);

return statearr_30115;
})();
if(inst_30029__$1){
var statearr_30116_30184 = state_30070__$1;
(statearr_30116_30184[(1)] = (33));

} else {
var statearr_30117_30185 = state_30070__$1;
(statearr_30117_30185[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (25))){
var inst_30012 = (state_30070[(21)]);
var inst_30013 = (state_30070[(12)]);
var inst_30015 = (inst_30013 < inst_30012);
var inst_30016 = inst_30015;
var state_30070__$1 = state_30070;
if(cljs.core.truth_(inst_30016)){
var statearr_30118_30186 = state_30070__$1;
(statearr_30118_30186[(1)] = (27));

} else {
var statearr_30119_30187 = state_30070__$1;
(statearr_30119_30187[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (34))){
var state_30070__$1 = state_30070;
var statearr_30120_30188 = state_30070__$1;
(statearr_30120_30188[(2)] = null);

(statearr_30120_30188[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (17))){
var state_30070__$1 = state_30070;
var statearr_30121_30189 = state_30070__$1;
(statearr_30121_30189[(2)] = null);

(statearr_30121_30189[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (3))){
var inst_30068 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30070__$1,inst_30068);
} else {
if((state_val_30071 === (12))){
var inst_29997 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30122_30190 = state_30070__$1;
(statearr_30122_30190[(2)] = inst_29997);

(statearr_30122_30190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (2))){
var state_30070__$1 = state_30070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30070__$1,(4),ch);
} else {
if((state_val_30071 === (23))){
var state_30070__$1 = state_30070;
var statearr_30123_30191 = state_30070__$1;
(statearr_30123_30191[(2)] = null);

(statearr_30123_30191[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (35))){
var inst_30052 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30124_30192 = state_30070__$1;
(statearr_30124_30192[(2)] = inst_30052);

(statearr_30124_30192[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (19))){
var inst_29969 = (state_30070[(7)]);
var inst_29973 = cljs.core.chunk_first.call(null,inst_29969);
var inst_29974 = cljs.core.chunk_rest.call(null,inst_29969);
var inst_29975 = cljs.core.count.call(null,inst_29973);
var inst_29947 = inst_29974;
var inst_29948 = inst_29973;
var inst_29949 = inst_29975;
var inst_29950 = (0);
var state_30070__$1 = (function (){var statearr_30125 = state_30070;
(statearr_30125[(13)] = inst_29947);

(statearr_30125[(14)] = inst_29948);

(statearr_30125[(16)] = inst_29950);

(statearr_30125[(17)] = inst_29949);

return statearr_30125;
})();
var statearr_30126_30193 = state_30070__$1;
(statearr_30126_30193[(2)] = null);

(statearr_30126_30193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (11))){
var inst_29947 = (state_30070[(13)]);
var inst_29969 = (state_30070[(7)]);
var inst_29969__$1 = cljs.core.seq.call(null,inst_29947);
var state_30070__$1 = (function (){var statearr_30127 = state_30070;
(statearr_30127[(7)] = inst_29969__$1);

return statearr_30127;
})();
if(inst_29969__$1){
var statearr_30128_30194 = state_30070__$1;
(statearr_30128_30194[(1)] = (16));

} else {
var statearr_30129_30195 = state_30070__$1;
(statearr_30129_30195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (9))){
var inst_29999 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30130_30196 = state_30070__$1;
(statearr_30130_30196[(2)] = inst_29999);

(statearr_30130_30196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (5))){
var inst_29945 = cljs.core.deref.call(null,cs);
var inst_29946 = cljs.core.seq.call(null,inst_29945);
var inst_29947 = inst_29946;
var inst_29948 = null;
var inst_29949 = (0);
var inst_29950 = (0);
var state_30070__$1 = (function (){var statearr_30131 = state_30070;
(statearr_30131[(13)] = inst_29947);

(statearr_30131[(14)] = inst_29948);

(statearr_30131[(16)] = inst_29950);

(statearr_30131[(17)] = inst_29949);

return statearr_30131;
})();
var statearr_30132_30197 = state_30070__$1;
(statearr_30132_30197[(2)] = null);

(statearr_30132_30197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (14))){
var state_30070__$1 = state_30070;
var statearr_30133_30198 = state_30070__$1;
(statearr_30133_30198[(2)] = null);

(statearr_30133_30198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (45))){
var inst_30060 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30134_30199 = state_30070__$1;
(statearr_30134_30199[(2)] = inst_30060);

(statearr_30134_30199[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (26))){
var inst_30002 = (state_30070[(29)]);
var inst_30056 = (state_30070[(2)]);
var inst_30057 = cljs.core.seq.call(null,inst_30002);
var state_30070__$1 = (function (){var statearr_30135 = state_30070;
(statearr_30135[(31)] = inst_30056);

return statearr_30135;
})();
if(inst_30057){
var statearr_30136_30200 = state_30070__$1;
(statearr_30136_30200[(1)] = (42));

} else {
var statearr_30137_30201 = state_30070__$1;
(statearr_30137_30201[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (16))){
var inst_29969 = (state_30070[(7)]);
var inst_29971 = cljs.core.chunked_seq_QMARK_.call(null,inst_29969);
var state_30070__$1 = state_30070;
if(inst_29971){
var statearr_30138_30202 = state_30070__$1;
(statearr_30138_30202[(1)] = (19));

} else {
var statearr_30139_30203 = state_30070__$1;
(statearr_30139_30203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (38))){
var inst_30049 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30140_30204 = state_30070__$1;
(statearr_30140_30204[(2)] = inst_30049);

(statearr_30140_30204[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (30))){
var state_30070__$1 = state_30070;
var statearr_30141_30205 = state_30070__$1;
(statearr_30141_30205[(2)] = null);

(statearr_30141_30205[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (10))){
var inst_29948 = (state_30070[(14)]);
var inst_29950 = (state_30070[(16)]);
var inst_29958 = cljs.core._nth.call(null,inst_29948,inst_29950);
var inst_29959 = cljs.core.nth.call(null,inst_29958,(0),null);
var inst_29960 = cljs.core.nth.call(null,inst_29958,(1),null);
var state_30070__$1 = (function (){var statearr_30142 = state_30070;
(statearr_30142[(26)] = inst_29959);

return statearr_30142;
})();
if(cljs.core.truth_(inst_29960)){
var statearr_30143_30206 = state_30070__$1;
(statearr_30143_30206[(1)] = (13));

} else {
var statearr_30144_30207 = state_30070__$1;
(statearr_30144_30207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (18))){
var inst_29995 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30145_30208 = state_30070__$1;
(statearr_30145_30208[(2)] = inst_29995);

(statearr_30145_30208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (42))){
var state_30070__$1 = state_30070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30070__$1,(45),dchan);
} else {
if((state_val_30071 === (37))){
var inst_29938 = (state_30070[(11)]);
var inst_30038 = (state_30070[(23)]);
var inst_30029 = (state_30070[(25)]);
var inst_30038__$1 = cljs.core.first.call(null,inst_30029);
var inst_30039 = cljs.core.async.put_BANG_.call(null,inst_30038__$1,inst_29938,done);
var state_30070__$1 = (function (){var statearr_30146 = state_30070;
(statearr_30146[(23)] = inst_30038__$1);

return statearr_30146;
})();
if(cljs.core.truth_(inst_30039)){
var statearr_30147_30209 = state_30070__$1;
(statearr_30147_30209[(1)] = (39));

} else {
var statearr_30148_30210 = state_30070__$1;
(statearr_30148_30210[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (8))){
var inst_29950 = (state_30070[(16)]);
var inst_29949 = (state_30070[(17)]);
var inst_29952 = (inst_29950 < inst_29949);
var inst_29953 = inst_29952;
var state_30070__$1 = state_30070;
if(cljs.core.truth_(inst_29953)){
var statearr_30149_30211 = state_30070__$1;
(statearr_30149_30211[(1)] = (10));

} else {
var statearr_30150_30212 = state_30070__$1;
(statearr_30150_30212[(1)] = (11));

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
});})(c__28835__auto___30158,cs,m,dchan,dctr,done))
;
return ((function (switch__28723__auto__,c__28835__auto___30158,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28724__auto__ = null;
var cljs$core$async$mult_$_state_machine__28724__auto____0 = (function (){
var statearr_30154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30154[(0)] = cljs$core$async$mult_$_state_machine__28724__auto__);

(statearr_30154[(1)] = (1));

return statearr_30154;
});
var cljs$core$async$mult_$_state_machine__28724__auto____1 = (function (state_30070){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_30070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e30155){if((e30155 instanceof Object)){
var ex__28727__auto__ = e30155;
var statearr_30156_30213 = state_30070;
(statearr_30156_30213[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30214 = state_30070;
state_30070 = G__30214;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28724__auto__ = function(state_30070){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28724__auto____1.call(this,state_30070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28724__auto____0;
cljs$core$async$mult_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28724__auto____1;
return cljs$core$async$mult_$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___30158,cs,m,dchan,dctr,done))
})();
var state__28837__auto__ = (function (){var statearr_30157 = f__28836__auto__.call(null);
(statearr_30157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___30158);

return statearr_30157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___30158,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30215 = [];
var len__25923__auto___30218 = arguments.length;
var i__25924__auto___30219 = (0);
while(true){
if((i__25924__auto___30219 < len__25923__auto___30218)){
args30215.push((arguments[i__25924__auto___30219]));

var G__30220 = (i__25924__auto___30219 + (1));
i__25924__auto___30219 = G__30220;
continue;
} else {
}
break;
}

var G__30217 = args30215.length;
switch (G__30217) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30215.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,state_map);
} else {
var m__25512__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,mode);
} else {
var m__25512__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___30232 = arguments.length;
var i__25924__auto___30233 = (0);
while(true){
if((i__25924__auto___30233 < len__25923__auto___30232)){
args__25930__auto__.push((arguments[i__25924__auto___30233]));

var G__30234 = (i__25924__auto___30233 + (1));
i__25924__auto___30233 = G__30234;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30226){
var map__30227 = p__30226;
var map__30227__$1 = ((((!((map__30227 == null)))?((((map__30227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30227):map__30227);
var opts = map__30227__$1;
var statearr_30229_30235 = state;
(statearr_30229_30235[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30227,map__30227__$1,opts){
return (function (val){
var statearr_30230_30236 = state;
(statearr_30230_30236[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30227,map__30227__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30231_30237 = state;
(statearr_30231_30237[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30222){
var G__30223 = cljs.core.first.call(null,seq30222);
var seq30222__$1 = cljs.core.next.call(null,seq30222);
var G__30224 = cljs.core.first.call(null,seq30222__$1);
var seq30222__$2 = cljs.core.next.call(null,seq30222__$1);
var G__30225 = cljs.core.first.call(null,seq30222__$2);
var seq30222__$3 = cljs.core.next.call(null,seq30222__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30223,G__30224,G__30225,seq30222__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30403 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30404){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30404 = meta30404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30405,meta30404__$1){
var self__ = this;
var _30405__$1 = this;
return (new cljs.core.async.t_cljs$core$async30403(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30404__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30405){
var self__ = this;
var _30405__$1 = this;
return self__.meta30404;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30403.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30403.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30403.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30403.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30403.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30403.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30403.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30403.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30403.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30404","meta30404",-2025648079,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30403";

cljs.core.async.t_cljs$core$async30403.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30403");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30403 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30403(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30404){
return (new cljs.core.async.t_cljs$core$async30403(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30404));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30403(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28835__auto___30568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___30568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___30568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30505){
var state_val_30506 = (state_30505[(1)]);
if((state_val_30506 === (7))){
var inst_30421 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
var statearr_30507_30569 = state_30505__$1;
(statearr_30507_30569[(2)] = inst_30421);

(statearr_30507_30569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (20))){
var inst_30433 = (state_30505[(7)]);
var state_30505__$1 = state_30505;
var statearr_30508_30570 = state_30505__$1;
(statearr_30508_30570[(2)] = inst_30433);

(statearr_30508_30570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (27))){
var state_30505__$1 = state_30505;
var statearr_30509_30571 = state_30505__$1;
(statearr_30509_30571[(2)] = null);

(statearr_30509_30571[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (1))){
var inst_30409 = (state_30505[(8)]);
var inst_30409__$1 = calc_state.call(null);
var inst_30411 = (inst_30409__$1 == null);
var inst_30412 = cljs.core.not.call(null,inst_30411);
var state_30505__$1 = (function (){var statearr_30510 = state_30505;
(statearr_30510[(8)] = inst_30409__$1);

return statearr_30510;
})();
if(inst_30412){
var statearr_30511_30572 = state_30505__$1;
(statearr_30511_30572[(1)] = (2));

} else {
var statearr_30512_30573 = state_30505__$1;
(statearr_30512_30573[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (24))){
var inst_30479 = (state_30505[(9)]);
var inst_30465 = (state_30505[(10)]);
var inst_30456 = (state_30505[(11)]);
var inst_30479__$1 = inst_30456.call(null,inst_30465);
var state_30505__$1 = (function (){var statearr_30513 = state_30505;
(statearr_30513[(9)] = inst_30479__$1);

return statearr_30513;
})();
if(cljs.core.truth_(inst_30479__$1)){
var statearr_30514_30574 = state_30505__$1;
(statearr_30514_30574[(1)] = (29));

} else {
var statearr_30515_30575 = state_30505__$1;
(statearr_30515_30575[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (4))){
var inst_30424 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
if(cljs.core.truth_(inst_30424)){
var statearr_30516_30576 = state_30505__$1;
(statearr_30516_30576[(1)] = (8));

} else {
var statearr_30517_30577 = state_30505__$1;
(statearr_30517_30577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (15))){
var inst_30450 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
if(cljs.core.truth_(inst_30450)){
var statearr_30518_30578 = state_30505__$1;
(statearr_30518_30578[(1)] = (19));

} else {
var statearr_30519_30579 = state_30505__$1;
(statearr_30519_30579[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (21))){
var inst_30455 = (state_30505[(12)]);
var inst_30455__$1 = (state_30505[(2)]);
var inst_30456 = cljs.core.get.call(null,inst_30455__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30457 = cljs.core.get.call(null,inst_30455__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30458 = cljs.core.get.call(null,inst_30455__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30505__$1 = (function (){var statearr_30520 = state_30505;
(statearr_30520[(12)] = inst_30455__$1);

(statearr_30520[(11)] = inst_30456);

(statearr_30520[(13)] = inst_30457);

return statearr_30520;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30505__$1,(22),inst_30458);
} else {
if((state_val_30506 === (31))){
var inst_30487 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
if(cljs.core.truth_(inst_30487)){
var statearr_30521_30580 = state_30505__$1;
(statearr_30521_30580[(1)] = (32));

} else {
var statearr_30522_30581 = state_30505__$1;
(statearr_30522_30581[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (32))){
var inst_30464 = (state_30505[(14)]);
var state_30505__$1 = state_30505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30505__$1,(35),out,inst_30464);
} else {
if((state_val_30506 === (33))){
var inst_30455 = (state_30505[(12)]);
var inst_30433 = inst_30455;
var state_30505__$1 = (function (){var statearr_30523 = state_30505;
(statearr_30523[(7)] = inst_30433);

return statearr_30523;
})();
var statearr_30524_30582 = state_30505__$1;
(statearr_30524_30582[(2)] = null);

(statearr_30524_30582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (13))){
var inst_30433 = (state_30505[(7)]);
var inst_30440 = inst_30433.cljs$lang$protocol_mask$partition0$;
var inst_30441 = (inst_30440 & (64));
var inst_30442 = inst_30433.cljs$core$ISeq$;
var inst_30443 = (inst_30441) || (inst_30442);
var state_30505__$1 = state_30505;
if(cljs.core.truth_(inst_30443)){
var statearr_30525_30583 = state_30505__$1;
(statearr_30525_30583[(1)] = (16));

} else {
var statearr_30526_30584 = state_30505__$1;
(statearr_30526_30584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (22))){
var inst_30465 = (state_30505[(10)]);
var inst_30464 = (state_30505[(14)]);
var inst_30463 = (state_30505[(2)]);
var inst_30464__$1 = cljs.core.nth.call(null,inst_30463,(0),null);
var inst_30465__$1 = cljs.core.nth.call(null,inst_30463,(1),null);
var inst_30466 = (inst_30464__$1 == null);
var inst_30467 = cljs.core._EQ_.call(null,inst_30465__$1,change);
var inst_30468 = (inst_30466) || (inst_30467);
var state_30505__$1 = (function (){var statearr_30527 = state_30505;
(statearr_30527[(10)] = inst_30465__$1);

(statearr_30527[(14)] = inst_30464__$1);

return statearr_30527;
})();
if(cljs.core.truth_(inst_30468)){
var statearr_30528_30585 = state_30505__$1;
(statearr_30528_30585[(1)] = (23));

} else {
var statearr_30529_30586 = state_30505__$1;
(statearr_30529_30586[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (36))){
var inst_30455 = (state_30505[(12)]);
var inst_30433 = inst_30455;
var state_30505__$1 = (function (){var statearr_30530 = state_30505;
(statearr_30530[(7)] = inst_30433);

return statearr_30530;
})();
var statearr_30531_30587 = state_30505__$1;
(statearr_30531_30587[(2)] = null);

(statearr_30531_30587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (29))){
var inst_30479 = (state_30505[(9)]);
var state_30505__$1 = state_30505;
var statearr_30532_30588 = state_30505__$1;
(statearr_30532_30588[(2)] = inst_30479);

(statearr_30532_30588[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (6))){
var state_30505__$1 = state_30505;
var statearr_30533_30589 = state_30505__$1;
(statearr_30533_30589[(2)] = false);

(statearr_30533_30589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (28))){
var inst_30475 = (state_30505[(2)]);
var inst_30476 = calc_state.call(null);
var inst_30433 = inst_30476;
var state_30505__$1 = (function (){var statearr_30534 = state_30505;
(statearr_30534[(15)] = inst_30475);

(statearr_30534[(7)] = inst_30433);

return statearr_30534;
})();
var statearr_30535_30590 = state_30505__$1;
(statearr_30535_30590[(2)] = null);

(statearr_30535_30590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (25))){
var inst_30501 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
var statearr_30536_30591 = state_30505__$1;
(statearr_30536_30591[(2)] = inst_30501);

(statearr_30536_30591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (34))){
var inst_30499 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
var statearr_30537_30592 = state_30505__$1;
(statearr_30537_30592[(2)] = inst_30499);

(statearr_30537_30592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (17))){
var state_30505__$1 = state_30505;
var statearr_30538_30593 = state_30505__$1;
(statearr_30538_30593[(2)] = false);

(statearr_30538_30593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (3))){
var state_30505__$1 = state_30505;
var statearr_30539_30594 = state_30505__$1;
(statearr_30539_30594[(2)] = false);

(statearr_30539_30594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (12))){
var inst_30503 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30505__$1,inst_30503);
} else {
if((state_val_30506 === (2))){
var inst_30409 = (state_30505[(8)]);
var inst_30414 = inst_30409.cljs$lang$protocol_mask$partition0$;
var inst_30415 = (inst_30414 & (64));
var inst_30416 = inst_30409.cljs$core$ISeq$;
var inst_30417 = (inst_30415) || (inst_30416);
var state_30505__$1 = state_30505;
if(cljs.core.truth_(inst_30417)){
var statearr_30540_30595 = state_30505__$1;
(statearr_30540_30595[(1)] = (5));

} else {
var statearr_30541_30596 = state_30505__$1;
(statearr_30541_30596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (23))){
var inst_30464 = (state_30505[(14)]);
var inst_30470 = (inst_30464 == null);
var state_30505__$1 = state_30505;
if(cljs.core.truth_(inst_30470)){
var statearr_30542_30597 = state_30505__$1;
(statearr_30542_30597[(1)] = (26));

} else {
var statearr_30543_30598 = state_30505__$1;
(statearr_30543_30598[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (35))){
var inst_30490 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
if(cljs.core.truth_(inst_30490)){
var statearr_30544_30599 = state_30505__$1;
(statearr_30544_30599[(1)] = (36));

} else {
var statearr_30545_30600 = state_30505__$1;
(statearr_30545_30600[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (19))){
var inst_30433 = (state_30505[(7)]);
var inst_30452 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30433);
var state_30505__$1 = state_30505;
var statearr_30546_30601 = state_30505__$1;
(statearr_30546_30601[(2)] = inst_30452);

(statearr_30546_30601[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (11))){
var inst_30433 = (state_30505[(7)]);
var inst_30437 = (inst_30433 == null);
var inst_30438 = cljs.core.not.call(null,inst_30437);
var state_30505__$1 = state_30505;
if(inst_30438){
var statearr_30547_30602 = state_30505__$1;
(statearr_30547_30602[(1)] = (13));

} else {
var statearr_30548_30603 = state_30505__$1;
(statearr_30548_30603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (9))){
var inst_30409 = (state_30505[(8)]);
var state_30505__$1 = state_30505;
var statearr_30549_30604 = state_30505__$1;
(statearr_30549_30604[(2)] = inst_30409);

(statearr_30549_30604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (5))){
var state_30505__$1 = state_30505;
var statearr_30550_30605 = state_30505__$1;
(statearr_30550_30605[(2)] = true);

(statearr_30550_30605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (14))){
var state_30505__$1 = state_30505;
var statearr_30551_30606 = state_30505__$1;
(statearr_30551_30606[(2)] = false);

(statearr_30551_30606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (26))){
var inst_30465 = (state_30505[(10)]);
var inst_30472 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30465);
var state_30505__$1 = state_30505;
var statearr_30552_30607 = state_30505__$1;
(statearr_30552_30607[(2)] = inst_30472);

(statearr_30552_30607[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (16))){
var state_30505__$1 = state_30505;
var statearr_30553_30608 = state_30505__$1;
(statearr_30553_30608[(2)] = true);

(statearr_30553_30608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (38))){
var inst_30495 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
var statearr_30554_30609 = state_30505__$1;
(statearr_30554_30609[(2)] = inst_30495);

(statearr_30554_30609[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (30))){
var inst_30465 = (state_30505[(10)]);
var inst_30456 = (state_30505[(11)]);
var inst_30457 = (state_30505[(13)]);
var inst_30482 = cljs.core.empty_QMARK_.call(null,inst_30456);
var inst_30483 = inst_30457.call(null,inst_30465);
var inst_30484 = cljs.core.not.call(null,inst_30483);
var inst_30485 = (inst_30482) && (inst_30484);
var state_30505__$1 = state_30505;
var statearr_30555_30610 = state_30505__$1;
(statearr_30555_30610[(2)] = inst_30485);

(statearr_30555_30610[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (10))){
var inst_30409 = (state_30505[(8)]);
var inst_30429 = (state_30505[(2)]);
var inst_30430 = cljs.core.get.call(null,inst_30429,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30431 = cljs.core.get.call(null,inst_30429,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30432 = cljs.core.get.call(null,inst_30429,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30433 = inst_30409;
var state_30505__$1 = (function (){var statearr_30556 = state_30505;
(statearr_30556[(16)] = inst_30430);

(statearr_30556[(17)] = inst_30431);

(statearr_30556[(18)] = inst_30432);

(statearr_30556[(7)] = inst_30433);

return statearr_30556;
})();
var statearr_30557_30611 = state_30505__$1;
(statearr_30557_30611[(2)] = null);

(statearr_30557_30611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (18))){
var inst_30447 = (state_30505[(2)]);
var state_30505__$1 = state_30505;
var statearr_30558_30612 = state_30505__$1;
(statearr_30558_30612[(2)] = inst_30447);

(statearr_30558_30612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (37))){
var state_30505__$1 = state_30505;
var statearr_30559_30613 = state_30505__$1;
(statearr_30559_30613[(2)] = null);

(statearr_30559_30613[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30506 === (8))){
var inst_30409 = (state_30505[(8)]);
var inst_30426 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30409);
var state_30505__$1 = state_30505;
var statearr_30560_30614 = state_30505__$1;
(statearr_30560_30614[(2)] = inst_30426);

(statearr_30560_30614[(1)] = (10));


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
});})(c__28835__auto___30568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28723__auto__,c__28835__auto___30568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28724__auto__ = null;
var cljs$core$async$mix_$_state_machine__28724__auto____0 = (function (){
var statearr_30564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30564[(0)] = cljs$core$async$mix_$_state_machine__28724__auto__);

(statearr_30564[(1)] = (1));

return statearr_30564;
});
var cljs$core$async$mix_$_state_machine__28724__auto____1 = (function (state_30505){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_30505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e30565){if((e30565 instanceof Object)){
var ex__28727__auto__ = e30565;
var statearr_30566_30615 = state_30505;
(statearr_30566_30615[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30616 = state_30505;
state_30505 = G__30616;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28724__auto__ = function(state_30505){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28724__auto____1.call(this,state_30505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28724__auto____0;
cljs$core$async$mix_$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28724__auto____1;
return cljs$core$async$mix_$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___30568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28837__auto__ = (function (){var statearr_30567 = f__28836__auto__.call(null);
(statearr_30567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___30568);

return statearr_30567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___30568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30617 = [];
var len__25923__auto___30620 = arguments.length;
var i__25924__auto___30621 = (0);
while(true){
if((i__25924__auto___30621 < len__25923__auto___30620)){
args30617.push((arguments[i__25924__auto___30621]));

var G__30622 = (i__25924__auto___30621 + (1));
i__25924__auto___30621 = G__30622;
continue;
} else {
}
break;
}

var G__30619 = args30617.length;
switch (G__30619) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30617.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30625 = [];
var len__25923__auto___30750 = arguments.length;
var i__25924__auto___30751 = (0);
while(true){
if((i__25924__auto___30751 < len__25923__auto___30750)){
args30625.push((arguments[i__25924__auto___30751]));

var G__30752 = (i__25924__auto___30751 + (1));
i__25924__auto___30751 = G__30752;
continue;
} else {
}
break;
}

var G__30627 = args30625.length;
switch (G__30627) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30625.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24848__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24848__auto__,mults){
return (function (p1__30624_SHARP_){
if(cljs.core.truth_(p1__30624_SHARP_.call(null,topic))){
return p1__30624_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30624_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30628 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30628 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30629){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30629 = meta30629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30630,meta30629__$1){
var self__ = this;
var _30630__$1 = this;
return (new cljs.core.async.t_cljs$core$async30628(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30629__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30630){
var self__ = this;
var _30630__$1 = this;
return self__.meta30629;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30628.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30628.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30629","meta30629",-837491268,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30628.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30628";

cljs.core.async.t_cljs$core$async30628.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30628");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30628 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30628(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30629){
return (new cljs.core.async.t_cljs$core$async30628(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30629));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30628(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28835__auto___30754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___30754,mults,ensure_mult,p){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___30754,mults,ensure_mult,p){
return (function (state_30702){
var state_val_30703 = (state_30702[(1)]);
if((state_val_30703 === (7))){
var inst_30698 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30704_30755 = state_30702__$1;
(statearr_30704_30755[(2)] = inst_30698);

(statearr_30704_30755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (20))){
var state_30702__$1 = state_30702;
var statearr_30705_30756 = state_30702__$1;
(statearr_30705_30756[(2)] = null);

(statearr_30705_30756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (1))){
var state_30702__$1 = state_30702;
var statearr_30706_30757 = state_30702__$1;
(statearr_30706_30757[(2)] = null);

(statearr_30706_30757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (24))){
var inst_30681 = (state_30702[(7)]);
var inst_30690 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30681);
var state_30702__$1 = state_30702;
var statearr_30707_30758 = state_30702__$1;
(statearr_30707_30758[(2)] = inst_30690);

(statearr_30707_30758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (4))){
var inst_30633 = (state_30702[(8)]);
var inst_30633__$1 = (state_30702[(2)]);
var inst_30634 = (inst_30633__$1 == null);
var state_30702__$1 = (function (){var statearr_30708 = state_30702;
(statearr_30708[(8)] = inst_30633__$1);

return statearr_30708;
})();
if(cljs.core.truth_(inst_30634)){
var statearr_30709_30759 = state_30702__$1;
(statearr_30709_30759[(1)] = (5));

} else {
var statearr_30710_30760 = state_30702__$1;
(statearr_30710_30760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (15))){
var inst_30675 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30711_30761 = state_30702__$1;
(statearr_30711_30761[(2)] = inst_30675);

(statearr_30711_30761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (21))){
var inst_30695 = (state_30702[(2)]);
var state_30702__$1 = (function (){var statearr_30712 = state_30702;
(statearr_30712[(9)] = inst_30695);

return statearr_30712;
})();
var statearr_30713_30762 = state_30702__$1;
(statearr_30713_30762[(2)] = null);

(statearr_30713_30762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (13))){
var inst_30657 = (state_30702[(10)]);
var inst_30659 = cljs.core.chunked_seq_QMARK_.call(null,inst_30657);
var state_30702__$1 = state_30702;
if(inst_30659){
var statearr_30714_30763 = state_30702__$1;
(statearr_30714_30763[(1)] = (16));

} else {
var statearr_30715_30764 = state_30702__$1;
(statearr_30715_30764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (22))){
var inst_30687 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
if(cljs.core.truth_(inst_30687)){
var statearr_30716_30765 = state_30702__$1;
(statearr_30716_30765[(1)] = (23));

} else {
var statearr_30717_30766 = state_30702__$1;
(statearr_30717_30766[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (6))){
var inst_30633 = (state_30702[(8)]);
var inst_30683 = (state_30702[(11)]);
var inst_30681 = (state_30702[(7)]);
var inst_30681__$1 = topic_fn.call(null,inst_30633);
var inst_30682 = cljs.core.deref.call(null,mults);
var inst_30683__$1 = cljs.core.get.call(null,inst_30682,inst_30681__$1);
var state_30702__$1 = (function (){var statearr_30718 = state_30702;
(statearr_30718[(11)] = inst_30683__$1);

(statearr_30718[(7)] = inst_30681__$1);

return statearr_30718;
})();
if(cljs.core.truth_(inst_30683__$1)){
var statearr_30719_30767 = state_30702__$1;
(statearr_30719_30767[(1)] = (19));

} else {
var statearr_30720_30768 = state_30702__$1;
(statearr_30720_30768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (25))){
var inst_30692 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30721_30769 = state_30702__$1;
(statearr_30721_30769[(2)] = inst_30692);

(statearr_30721_30769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (17))){
var inst_30657 = (state_30702[(10)]);
var inst_30666 = cljs.core.first.call(null,inst_30657);
var inst_30667 = cljs.core.async.muxch_STAR_.call(null,inst_30666);
var inst_30668 = cljs.core.async.close_BANG_.call(null,inst_30667);
var inst_30669 = cljs.core.next.call(null,inst_30657);
var inst_30643 = inst_30669;
var inst_30644 = null;
var inst_30645 = (0);
var inst_30646 = (0);
var state_30702__$1 = (function (){var statearr_30722 = state_30702;
(statearr_30722[(12)] = inst_30643);

(statearr_30722[(13)] = inst_30644);

(statearr_30722[(14)] = inst_30668);

(statearr_30722[(15)] = inst_30646);

(statearr_30722[(16)] = inst_30645);

return statearr_30722;
})();
var statearr_30723_30770 = state_30702__$1;
(statearr_30723_30770[(2)] = null);

(statearr_30723_30770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (3))){
var inst_30700 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30702__$1,inst_30700);
} else {
if((state_val_30703 === (12))){
var inst_30677 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30724_30771 = state_30702__$1;
(statearr_30724_30771[(2)] = inst_30677);

(statearr_30724_30771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (2))){
var state_30702__$1 = state_30702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30702__$1,(4),ch);
} else {
if((state_val_30703 === (23))){
var state_30702__$1 = state_30702;
var statearr_30725_30772 = state_30702__$1;
(statearr_30725_30772[(2)] = null);

(statearr_30725_30772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (19))){
var inst_30633 = (state_30702[(8)]);
var inst_30683 = (state_30702[(11)]);
var inst_30685 = cljs.core.async.muxch_STAR_.call(null,inst_30683);
var state_30702__$1 = state_30702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30702__$1,(22),inst_30685,inst_30633);
} else {
if((state_val_30703 === (11))){
var inst_30643 = (state_30702[(12)]);
var inst_30657 = (state_30702[(10)]);
var inst_30657__$1 = cljs.core.seq.call(null,inst_30643);
var state_30702__$1 = (function (){var statearr_30726 = state_30702;
(statearr_30726[(10)] = inst_30657__$1);

return statearr_30726;
})();
if(inst_30657__$1){
var statearr_30727_30773 = state_30702__$1;
(statearr_30727_30773[(1)] = (13));

} else {
var statearr_30728_30774 = state_30702__$1;
(statearr_30728_30774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (9))){
var inst_30679 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30729_30775 = state_30702__$1;
(statearr_30729_30775[(2)] = inst_30679);

(statearr_30729_30775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (5))){
var inst_30640 = cljs.core.deref.call(null,mults);
var inst_30641 = cljs.core.vals.call(null,inst_30640);
var inst_30642 = cljs.core.seq.call(null,inst_30641);
var inst_30643 = inst_30642;
var inst_30644 = null;
var inst_30645 = (0);
var inst_30646 = (0);
var state_30702__$1 = (function (){var statearr_30730 = state_30702;
(statearr_30730[(12)] = inst_30643);

(statearr_30730[(13)] = inst_30644);

(statearr_30730[(15)] = inst_30646);

(statearr_30730[(16)] = inst_30645);

return statearr_30730;
})();
var statearr_30731_30776 = state_30702__$1;
(statearr_30731_30776[(2)] = null);

(statearr_30731_30776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (14))){
var state_30702__$1 = state_30702;
var statearr_30735_30777 = state_30702__$1;
(statearr_30735_30777[(2)] = null);

(statearr_30735_30777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (16))){
var inst_30657 = (state_30702[(10)]);
var inst_30661 = cljs.core.chunk_first.call(null,inst_30657);
var inst_30662 = cljs.core.chunk_rest.call(null,inst_30657);
var inst_30663 = cljs.core.count.call(null,inst_30661);
var inst_30643 = inst_30662;
var inst_30644 = inst_30661;
var inst_30645 = inst_30663;
var inst_30646 = (0);
var state_30702__$1 = (function (){var statearr_30736 = state_30702;
(statearr_30736[(12)] = inst_30643);

(statearr_30736[(13)] = inst_30644);

(statearr_30736[(15)] = inst_30646);

(statearr_30736[(16)] = inst_30645);

return statearr_30736;
})();
var statearr_30737_30778 = state_30702__$1;
(statearr_30737_30778[(2)] = null);

(statearr_30737_30778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (10))){
var inst_30643 = (state_30702[(12)]);
var inst_30644 = (state_30702[(13)]);
var inst_30646 = (state_30702[(15)]);
var inst_30645 = (state_30702[(16)]);
var inst_30651 = cljs.core._nth.call(null,inst_30644,inst_30646);
var inst_30652 = cljs.core.async.muxch_STAR_.call(null,inst_30651);
var inst_30653 = cljs.core.async.close_BANG_.call(null,inst_30652);
var inst_30654 = (inst_30646 + (1));
var tmp30732 = inst_30643;
var tmp30733 = inst_30644;
var tmp30734 = inst_30645;
var inst_30643__$1 = tmp30732;
var inst_30644__$1 = tmp30733;
var inst_30645__$1 = tmp30734;
var inst_30646__$1 = inst_30654;
var state_30702__$1 = (function (){var statearr_30738 = state_30702;
(statearr_30738[(12)] = inst_30643__$1);

(statearr_30738[(17)] = inst_30653);

(statearr_30738[(13)] = inst_30644__$1);

(statearr_30738[(15)] = inst_30646__$1);

(statearr_30738[(16)] = inst_30645__$1);

return statearr_30738;
})();
var statearr_30739_30779 = state_30702__$1;
(statearr_30739_30779[(2)] = null);

(statearr_30739_30779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (18))){
var inst_30672 = (state_30702[(2)]);
var state_30702__$1 = state_30702;
var statearr_30740_30780 = state_30702__$1;
(statearr_30740_30780[(2)] = inst_30672);

(statearr_30740_30780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30703 === (8))){
var inst_30646 = (state_30702[(15)]);
var inst_30645 = (state_30702[(16)]);
var inst_30648 = (inst_30646 < inst_30645);
var inst_30649 = inst_30648;
var state_30702__$1 = state_30702;
if(cljs.core.truth_(inst_30649)){
var statearr_30741_30781 = state_30702__$1;
(statearr_30741_30781[(1)] = (10));

} else {
var statearr_30742_30782 = state_30702__$1;
(statearr_30742_30782[(1)] = (11));

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
});})(c__28835__auto___30754,mults,ensure_mult,p))
;
return ((function (switch__28723__auto__,c__28835__auto___30754,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_30746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30746[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_30746[(1)] = (1));

return statearr_30746;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_30702){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_30702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e30747){if((e30747 instanceof Object)){
var ex__28727__auto__ = e30747;
var statearr_30748_30783 = state_30702;
(statearr_30748_30783[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30784 = state_30702;
state_30702 = G__30784;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_30702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_30702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___30754,mults,ensure_mult,p))
})();
var state__28837__auto__ = (function (){var statearr_30749 = f__28836__auto__.call(null);
(statearr_30749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___30754);

return statearr_30749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___30754,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30785 = [];
var len__25923__auto___30788 = arguments.length;
var i__25924__auto___30789 = (0);
while(true){
if((i__25924__auto___30789 < len__25923__auto___30788)){
args30785.push((arguments[i__25924__auto___30789]));

var G__30790 = (i__25924__auto___30789 + (1));
i__25924__auto___30789 = G__30790;
continue;
} else {
}
break;
}

var G__30787 = args30785.length;
switch (G__30787) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30785.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30792 = [];
var len__25923__auto___30795 = arguments.length;
var i__25924__auto___30796 = (0);
while(true){
if((i__25924__auto___30796 < len__25923__auto___30795)){
args30792.push((arguments[i__25924__auto___30796]));

var G__30797 = (i__25924__auto___30796 + (1));
i__25924__auto___30796 = G__30797;
continue;
} else {
}
break;
}

var G__30794 = args30792.length;
switch (G__30794) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30792.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30799 = [];
var len__25923__auto___30870 = arguments.length;
var i__25924__auto___30871 = (0);
while(true){
if((i__25924__auto___30871 < len__25923__auto___30870)){
args30799.push((arguments[i__25924__auto___30871]));

var G__30872 = (i__25924__auto___30871 + (1));
i__25924__auto___30871 = G__30872;
continue;
} else {
}
break;
}

var G__30801 = args30799.length;
switch (G__30801) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30799.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28835__auto___30874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___30874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___30874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30840){
var state_val_30841 = (state_30840[(1)]);
if((state_val_30841 === (7))){
var state_30840__$1 = state_30840;
var statearr_30842_30875 = state_30840__$1;
(statearr_30842_30875[(2)] = null);

(statearr_30842_30875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (1))){
var state_30840__$1 = state_30840;
var statearr_30843_30876 = state_30840__$1;
(statearr_30843_30876[(2)] = null);

(statearr_30843_30876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (4))){
var inst_30804 = (state_30840[(7)]);
var inst_30806 = (inst_30804 < cnt);
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30806)){
var statearr_30844_30877 = state_30840__$1;
(statearr_30844_30877[(1)] = (6));

} else {
var statearr_30845_30878 = state_30840__$1;
(statearr_30845_30878[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (15))){
var inst_30836 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30846_30879 = state_30840__$1;
(statearr_30846_30879[(2)] = inst_30836);

(statearr_30846_30879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (13))){
var inst_30829 = cljs.core.async.close_BANG_.call(null,out);
var state_30840__$1 = state_30840;
var statearr_30847_30880 = state_30840__$1;
(statearr_30847_30880[(2)] = inst_30829);

(statearr_30847_30880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (6))){
var state_30840__$1 = state_30840;
var statearr_30848_30881 = state_30840__$1;
(statearr_30848_30881[(2)] = null);

(statearr_30848_30881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (3))){
var inst_30838 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30840__$1,inst_30838);
} else {
if((state_val_30841 === (12))){
var inst_30826 = (state_30840[(8)]);
var inst_30826__$1 = (state_30840[(2)]);
var inst_30827 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30826__$1);
var state_30840__$1 = (function (){var statearr_30849 = state_30840;
(statearr_30849[(8)] = inst_30826__$1);

return statearr_30849;
})();
if(cljs.core.truth_(inst_30827)){
var statearr_30850_30882 = state_30840__$1;
(statearr_30850_30882[(1)] = (13));

} else {
var statearr_30851_30883 = state_30840__$1;
(statearr_30851_30883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (2))){
var inst_30803 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30804 = (0);
var state_30840__$1 = (function (){var statearr_30852 = state_30840;
(statearr_30852[(9)] = inst_30803);

(statearr_30852[(7)] = inst_30804);

return statearr_30852;
})();
var statearr_30853_30884 = state_30840__$1;
(statearr_30853_30884[(2)] = null);

(statearr_30853_30884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (11))){
var inst_30804 = (state_30840[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30840,(10),Object,null,(9));
var inst_30813 = chs__$1.call(null,inst_30804);
var inst_30814 = done.call(null,inst_30804);
var inst_30815 = cljs.core.async.take_BANG_.call(null,inst_30813,inst_30814);
var state_30840__$1 = state_30840;
var statearr_30854_30885 = state_30840__$1;
(statearr_30854_30885[(2)] = inst_30815);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (9))){
var inst_30804 = (state_30840[(7)]);
var inst_30817 = (state_30840[(2)]);
var inst_30818 = (inst_30804 + (1));
var inst_30804__$1 = inst_30818;
var state_30840__$1 = (function (){var statearr_30855 = state_30840;
(statearr_30855[(7)] = inst_30804__$1);

(statearr_30855[(10)] = inst_30817);

return statearr_30855;
})();
var statearr_30856_30886 = state_30840__$1;
(statearr_30856_30886[(2)] = null);

(statearr_30856_30886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (5))){
var inst_30824 = (state_30840[(2)]);
var state_30840__$1 = (function (){var statearr_30857 = state_30840;
(statearr_30857[(11)] = inst_30824);

return statearr_30857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30840__$1,(12),dchan);
} else {
if((state_val_30841 === (14))){
var inst_30826 = (state_30840[(8)]);
var inst_30831 = cljs.core.apply.call(null,f,inst_30826);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30840__$1,(16),out,inst_30831);
} else {
if((state_val_30841 === (16))){
var inst_30833 = (state_30840[(2)]);
var state_30840__$1 = (function (){var statearr_30858 = state_30840;
(statearr_30858[(12)] = inst_30833);

return statearr_30858;
})();
var statearr_30859_30887 = state_30840__$1;
(statearr_30859_30887[(2)] = null);

(statearr_30859_30887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (10))){
var inst_30808 = (state_30840[(2)]);
var inst_30809 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30840__$1 = (function (){var statearr_30860 = state_30840;
(statearr_30860[(13)] = inst_30808);

return statearr_30860;
})();
var statearr_30861_30888 = state_30840__$1;
(statearr_30861_30888[(2)] = inst_30809);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (8))){
var inst_30822 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30862_30889 = state_30840__$1;
(statearr_30862_30889[(2)] = inst_30822);

(statearr_30862_30889[(1)] = (5));


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
});})(c__28835__auto___30874,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28723__auto__,c__28835__auto___30874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_30866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30866[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_30866[(1)] = (1));

return statearr_30866;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_30840){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_30840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e30867){if((e30867 instanceof Object)){
var ex__28727__auto__ = e30867;
var statearr_30868_30890 = state_30840;
(statearr_30868_30890[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30891 = state_30840;
state_30840 = G__30891;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_30840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_30840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___30874,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28837__auto__ = (function (){var statearr_30869 = f__28836__auto__.call(null);
(statearr_30869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___30874);

return statearr_30869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___30874,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30893 = [];
var len__25923__auto___30951 = arguments.length;
var i__25924__auto___30952 = (0);
while(true){
if((i__25924__auto___30952 < len__25923__auto___30951)){
args30893.push((arguments[i__25924__auto___30952]));

var G__30953 = (i__25924__auto___30952 + (1));
i__25924__auto___30952 = G__30953;
continue;
} else {
}
break;
}

var G__30895 = args30893.length;
switch (G__30895) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30893.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28835__auto___30955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___30955,out){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___30955,out){
return (function (state_30927){
var state_val_30928 = (state_30927[(1)]);
if((state_val_30928 === (7))){
var inst_30907 = (state_30927[(7)]);
var inst_30906 = (state_30927[(8)]);
var inst_30906__$1 = (state_30927[(2)]);
var inst_30907__$1 = cljs.core.nth.call(null,inst_30906__$1,(0),null);
var inst_30908 = cljs.core.nth.call(null,inst_30906__$1,(1),null);
var inst_30909 = (inst_30907__$1 == null);
var state_30927__$1 = (function (){var statearr_30929 = state_30927;
(statearr_30929[(9)] = inst_30908);

(statearr_30929[(7)] = inst_30907__$1);

(statearr_30929[(8)] = inst_30906__$1);

return statearr_30929;
})();
if(cljs.core.truth_(inst_30909)){
var statearr_30930_30956 = state_30927__$1;
(statearr_30930_30956[(1)] = (8));

} else {
var statearr_30931_30957 = state_30927__$1;
(statearr_30931_30957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (1))){
var inst_30896 = cljs.core.vec.call(null,chs);
var inst_30897 = inst_30896;
var state_30927__$1 = (function (){var statearr_30932 = state_30927;
(statearr_30932[(10)] = inst_30897);

return statearr_30932;
})();
var statearr_30933_30958 = state_30927__$1;
(statearr_30933_30958[(2)] = null);

(statearr_30933_30958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (4))){
var inst_30897 = (state_30927[(10)]);
var state_30927__$1 = state_30927;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30927__$1,(7),inst_30897);
} else {
if((state_val_30928 === (6))){
var inst_30923 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
var statearr_30934_30959 = state_30927__$1;
(statearr_30934_30959[(2)] = inst_30923);

(statearr_30934_30959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (3))){
var inst_30925 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30927__$1,inst_30925);
} else {
if((state_val_30928 === (2))){
var inst_30897 = (state_30927[(10)]);
var inst_30899 = cljs.core.count.call(null,inst_30897);
var inst_30900 = (inst_30899 > (0));
var state_30927__$1 = state_30927;
if(cljs.core.truth_(inst_30900)){
var statearr_30936_30960 = state_30927__$1;
(statearr_30936_30960[(1)] = (4));

} else {
var statearr_30937_30961 = state_30927__$1;
(statearr_30937_30961[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (11))){
var inst_30897 = (state_30927[(10)]);
var inst_30916 = (state_30927[(2)]);
var tmp30935 = inst_30897;
var inst_30897__$1 = tmp30935;
var state_30927__$1 = (function (){var statearr_30938 = state_30927;
(statearr_30938[(10)] = inst_30897__$1);

(statearr_30938[(11)] = inst_30916);

return statearr_30938;
})();
var statearr_30939_30962 = state_30927__$1;
(statearr_30939_30962[(2)] = null);

(statearr_30939_30962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (9))){
var inst_30907 = (state_30927[(7)]);
var state_30927__$1 = state_30927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30927__$1,(11),out,inst_30907);
} else {
if((state_val_30928 === (5))){
var inst_30921 = cljs.core.async.close_BANG_.call(null,out);
var state_30927__$1 = state_30927;
var statearr_30940_30963 = state_30927__$1;
(statearr_30940_30963[(2)] = inst_30921);

(statearr_30940_30963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (10))){
var inst_30919 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
var statearr_30941_30964 = state_30927__$1;
(statearr_30941_30964[(2)] = inst_30919);

(statearr_30941_30964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30928 === (8))){
var inst_30897 = (state_30927[(10)]);
var inst_30908 = (state_30927[(9)]);
var inst_30907 = (state_30927[(7)]);
var inst_30906 = (state_30927[(8)]);
var inst_30911 = (function (){var cs = inst_30897;
var vec__30902 = inst_30906;
var v = inst_30907;
var c = inst_30908;
return ((function (cs,vec__30902,v,c,inst_30897,inst_30908,inst_30907,inst_30906,state_val_30928,c__28835__auto___30955,out){
return (function (p1__30892_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30892_SHARP_);
});
;})(cs,vec__30902,v,c,inst_30897,inst_30908,inst_30907,inst_30906,state_val_30928,c__28835__auto___30955,out))
})();
var inst_30912 = cljs.core.filterv.call(null,inst_30911,inst_30897);
var inst_30897__$1 = inst_30912;
var state_30927__$1 = (function (){var statearr_30942 = state_30927;
(statearr_30942[(10)] = inst_30897__$1);

return statearr_30942;
})();
var statearr_30943_30965 = state_30927__$1;
(statearr_30943_30965[(2)] = null);

(statearr_30943_30965[(1)] = (2));


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
});})(c__28835__auto___30955,out))
;
return ((function (switch__28723__auto__,c__28835__auto___30955,out){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_30947 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30947[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_30947[(1)] = (1));

return statearr_30947;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_30927){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_30927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e30948){if((e30948 instanceof Object)){
var ex__28727__auto__ = e30948;
var statearr_30949_30966 = state_30927;
(statearr_30949_30966[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30967 = state_30927;
state_30927 = G__30967;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_30927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_30927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___30955,out))
})();
var state__28837__auto__ = (function (){var statearr_30950 = f__28836__auto__.call(null);
(statearr_30950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___30955);

return statearr_30950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___30955,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30968 = [];
var len__25923__auto___31017 = arguments.length;
var i__25924__auto___31018 = (0);
while(true){
if((i__25924__auto___31018 < len__25923__auto___31017)){
args30968.push((arguments[i__25924__auto___31018]));

var G__31019 = (i__25924__auto___31018 + (1));
i__25924__auto___31018 = G__31019;
continue;
} else {
}
break;
}

var G__30970 = args30968.length;
switch (G__30970) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30968.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28835__auto___31021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___31021,out){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___31021,out){
return (function (state_30994){
var state_val_30995 = (state_30994[(1)]);
if((state_val_30995 === (7))){
var inst_30976 = (state_30994[(7)]);
var inst_30976__$1 = (state_30994[(2)]);
var inst_30977 = (inst_30976__$1 == null);
var inst_30978 = cljs.core.not.call(null,inst_30977);
var state_30994__$1 = (function (){var statearr_30996 = state_30994;
(statearr_30996[(7)] = inst_30976__$1);

return statearr_30996;
})();
if(inst_30978){
var statearr_30997_31022 = state_30994__$1;
(statearr_30997_31022[(1)] = (8));

} else {
var statearr_30998_31023 = state_30994__$1;
(statearr_30998_31023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (1))){
var inst_30971 = (0);
var state_30994__$1 = (function (){var statearr_30999 = state_30994;
(statearr_30999[(8)] = inst_30971);

return statearr_30999;
})();
var statearr_31000_31024 = state_30994__$1;
(statearr_31000_31024[(2)] = null);

(statearr_31000_31024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (4))){
var state_30994__$1 = state_30994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30994__$1,(7),ch);
} else {
if((state_val_30995 === (6))){
var inst_30989 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
var statearr_31001_31025 = state_30994__$1;
(statearr_31001_31025[(2)] = inst_30989);

(statearr_31001_31025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (3))){
var inst_30991 = (state_30994[(2)]);
var inst_30992 = cljs.core.async.close_BANG_.call(null,out);
var state_30994__$1 = (function (){var statearr_31002 = state_30994;
(statearr_31002[(9)] = inst_30991);

return statearr_31002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30994__$1,inst_30992);
} else {
if((state_val_30995 === (2))){
var inst_30971 = (state_30994[(8)]);
var inst_30973 = (inst_30971 < n);
var state_30994__$1 = state_30994;
if(cljs.core.truth_(inst_30973)){
var statearr_31003_31026 = state_30994__$1;
(statearr_31003_31026[(1)] = (4));

} else {
var statearr_31004_31027 = state_30994__$1;
(statearr_31004_31027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (11))){
var inst_30971 = (state_30994[(8)]);
var inst_30981 = (state_30994[(2)]);
var inst_30982 = (inst_30971 + (1));
var inst_30971__$1 = inst_30982;
var state_30994__$1 = (function (){var statearr_31005 = state_30994;
(statearr_31005[(10)] = inst_30981);

(statearr_31005[(8)] = inst_30971__$1);

return statearr_31005;
})();
var statearr_31006_31028 = state_30994__$1;
(statearr_31006_31028[(2)] = null);

(statearr_31006_31028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (9))){
var state_30994__$1 = state_30994;
var statearr_31007_31029 = state_30994__$1;
(statearr_31007_31029[(2)] = null);

(statearr_31007_31029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (5))){
var state_30994__$1 = state_30994;
var statearr_31008_31030 = state_30994__$1;
(statearr_31008_31030[(2)] = null);

(statearr_31008_31030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (10))){
var inst_30986 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
var statearr_31009_31031 = state_30994__$1;
(statearr_31009_31031[(2)] = inst_30986);

(statearr_31009_31031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (8))){
var inst_30976 = (state_30994[(7)]);
var state_30994__$1 = state_30994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30994__$1,(11),out,inst_30976);
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
});})(c__28835__auto___31021,out))
;
return ((function (switch__28723__auto__,c__28835__auto___31021,out){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_31013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31013[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_31013[(1)] = (1));

return statearr_31013;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_30994){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_30994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e31014){if((e31014 instanceof Object)){
var ex__28727__auto__ = e31014;
var statearr_31015_31032 = state_30994;
(statearr_31015_31032[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31033 = state_30994;
state_30994 = G__31033;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_30994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_30994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___31021,out))
})();
var state__28837__auto__ = (function (){var statearr_31016 = f__28836__auto__.call(null);
(statearr_31016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___31021);

return statearr_31016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___31021,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31041 = (function (map_LT_,f,ch,meta31042){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31042 = meta31042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31043,meta31042__$1){
var self__ = this;
var _31043__$1 = this;
return (new cljs.core.async.t_cljs$core$async31041(self__.map_LT_,self__.f,self__.ch,meta31042__$1));
});

cljs.core.async.t_cljs$core$async31041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31043){
var self__ = this;
var _31043__$1 = this;
return self__.meta31042;
});

cljs.core.async.t_cljs$core$async31041.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31041.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31041.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31044 = (function (map_LT_,f,ch,meta31042,_,fn1,meta31045){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31042 = meta31042;
this._ = _;
this.fn1 = fn1;
this.meta31045 = meta31045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31046,meta31045__$1){
var self__ = this;
var _31046__$1 = this;
return (new cljs.core.async.t_cljs$core$async31044(self__.map_LT_,self__.f,self__.ch,self__.meta31042,self__._,self__.fn1,meta31045__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31046){
var self__ = this;
var _31046__$1 = this;
return self__.meta31045;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31034_SHARP_){
return f1.call(null,(((p1__31034_SHARP_ == null))?null:self__.f.call(null,p1__31034_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31044.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31042","meta31042",961012062,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31041","cljs.core.async/t_cljs$core$async31041",-1270569109,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31045","meta31045",-1243343229,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31044";

cljs.core.async.t_cljs$core$async31044.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31044");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31044 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31044(map_LT___$1,f__$1,ch__$1,meta31042__$1,___$2,fn1__$1,meta31045){
return (new cljs.core.async.t_cljs$core$async31044(map_LT___$1,f__$1,ch__$1,meta31042__$1,___$2,fn1__$1,meta31045));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31044(self__.map_LT_,self__.f,self__.ch,self__.meta31042,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24836__auto__ = ret;
if(cljs.core.truth_(and__24836__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24836__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31041.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31042","meta31042",961012062,null)], null);
});

cljs.core.async.t_cljs$core$async31041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31041";

cljs.core.async.t_cljs$core$async31041.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31041");
});

cljs.core.async.__GT_t_cljs$core$async31041 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31041(map_LT___$1,f__$1,ch__$1,meta31042){
return (new cljs.core.async.t_cljs$core$async31041(map_LT___$1,f__$1,ch__$1,meta31042));
});

}

return (new cljs.core.async.t_cljs$core$async31041(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31050 = (function (map_GT_,f,ch,meta31051){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31051 = meta31051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31052,meta31051__$1){
var self__ = this;
var _31052__$1 = this;
return (new cljs.core.async.t_cljs$core$async31050(self__.map_GT_,self__.f,self__.ch,meta31051__$1));
});

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31052){
var self__ = this;
var _31052__$1 = this;
return self__.meta31051;
});

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31051","meta31051",846470287,null)], null);
});

cljs.core.async.t_cljs$core$async31050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31050";

cljs.core.async.t_cljs$core$async31050.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31050");
});

cljs.core.async.__GT_t_cljs$core$async31050 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31050(map_GT___$1,f__$1,ch__$1,meta31051){
return (new cljs.core.async.t_cljs$core$async31050(map_GT___$1,f__$1,ch__$1,meta31051));
});

}

return (new cljs.core.async.t_cljs$core$async31050(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31056 = (function (filter_GT_,p,ch,meta31057){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31057 = meta31057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31058,meta31057__$1){
var self__ = this;
var _31058__$1 = this;
return (new cljs.core.async.t_cljs$core$async31056(self__.filter_GT_,self__.p,self__.ch,meta31057__$1));
});

cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31058){
var self__ = this;
var _31058__$1 = this;
return self__.meta31057;
});

cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31057","meta31057",1649658001,null)], null);
});

cljs.core.async.t_cljs$core$async31056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31056";

cljs.core.async.t_cljs$core$async31056.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31056");
});

cljs.core.async.__GT_t_cljs$core$async31056 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31056(filter_GT___$1,p__$1,ch__$1,meta31057){
return (new cljs.core.async.t_cljs$core$async31056(filter_GT___$1,p__$1,ch__$1,meta31057));
});

}

return (new cljs.core.async.t_cljs$core$async31056(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31059 = [];
var len__25923__auto___31103 = arguments.length;
var i__25924__auto___31104 = (0);
while(true){
if((i__25924__auto___31104 < len__25923__auto___31103)){
args31059.push((arguments[i__25924__auto___31104]));

var G__31105 = (i__25924__auto___31104 + (1));
i__25924__auto___31104 = G__31105;
continue;
} else {
}
break;
}

var G__31061 = args31059.length;
switch (G__31061) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31059.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28835__auto___31107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___31107,out){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___31107,out){
return (function (state_31082){
var state_val_31083 = (state_31082[(1)]);
if((state_val_31083 === (7))){
var inst_31078 = (state_31082[(2)]);
var state_31082__$1 = state_31082;
var statearr_31084_31108 = state_31082__$1;
(statearr_31084_31108[(2)] = inst_31078);

(statearr_31084_31108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (1))){
var state_31082__$1 = state_31082;
var statearr_31085_31109 = state_31082__$1;
(statearr_31085_31109[(2)] = null);

(statearr_31085_31109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (4))){
var inst_31064 = (state_31082[(7)]);
var inst_31064__$1 = (state_31082[(2)]);
var inst_31065 = (inst_31064__$1 == null);
var state_31082__$1 = (function (){var statearr_31086 = state_31082;
(statearr_31086[(7)] = inst_31064__$1);

return statearr_31086;
})();
if(cljs.core.truth_(inst_31065)){
var statearr_31087_31110 = state_31082__$1;
(statearr_31087_31110[(1)] = (5));

} else {
var statearr_31088_31111 = state_31082__$1;
(statearr_31088_31111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (6))){
var inst_31064 = (state_31082[(7)]);
var inst_31069 = p.call(null,inst_31064);
var state_31082__$1 = state_31082;
if(cljs.core.truth_(inst_31069)){
var statearr_31089_31112 = state_31082__$1;
(statearr_31089_31112[(1)] = (8));

} else {
var statearr_31090_31113 = state_31082__$1;
(statearr_31090_31113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (3))){
var inst_31080 = (state_31082[(2)]);
var state_31082__$1 = state_31082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31082__$1,inst_31080);
} else {
if((state_val_31083 === (2))){
var state_31082__$1 = state_31082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31082__$1,(4),ch);
} else {
if((state_val_31083 === (11))){
var inst_31072 = (state_31082[(2)]);
var state_31082__$1 = state_31082;
var statearr_31091_31114 = state_31082__$1;
(statearr_31091_31114[(2)] = inst_31072);

(statearr_31091_31114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (9))){
var state_31082__$1 = state_31082;
var statearr_31092_31115 = state_31082__$1;
(statearr_31092_31115[(2)] = null);

(statearr_31092_31115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (5))){
var inst_31067 = cljs.core.async.close_BANG_.call(null,out);
var state_31082__$1 = state_31082;
var statearr_31093_31116 = state_31082__$1;
(statearr_31093_31116[(2)] = inst_31067);

(statearr_31093_31116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (10))){
var inst_31075 = (state_31082[(2)]);
var state_31082__$1 = (function (){var statearr_31094 = state_31082;
(statearr_31094[(8)] = inst_31075);

return statearr_31094;
})();
var statearr_31095_31117 = state_31082__$1;
(statearr_31095_31117[(2)] = null);

(statearr_31095_31117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (8))){
var inst_31064 = (state_31082[(7)]);
var state_31082__$1 = state_31082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31082__$1,(11),out,inst_31064);
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
});})(c__28835__auto___31107,out))
;
return ((function (switch__28723__auto__,c__28835__auto___31107,out){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_31099 = [null,null,null,null,null,null,null,null,null];
(statearr_31099[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_31099[(1)] = (1));

return statearr_31099;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_31082){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_31082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e31100){if((e31100 instanceof Object)){
var ex__28727__auto__ = e31100;
var statearr_31101_31118 = state_31082;
(statearr_31101_31118[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31119 = state_31082;
state_31082 = G__31119;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_31082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_31082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___31107,out))
})();
var state__28837__auto__ = (function (){var statearr_31102 = f__28836__auto__.call(null);
(statearr_31102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___31107);

return statearr_31102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___31107,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31120 = [];
var len__25923__auto___31123 = arguments.length;
var i__25924__auto___31124 = (0);
while(true){
if((i__25924__auto___31124 < len__25923__auto___31123)){
args31120.push((arguments[i__25924__auto___31124]));

var G__31125 = (i__25924__auto___31124 + (1));
i__25924__auto___31124 = G__31125;
continue;
} else {
}
break;
}

var G__31122 = args31120.length;
switch (G__31122) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31120.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28835__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto__){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto__){
return (function (state_31292){
var state_val_31293 = (state_31292[(1)]);
if((state_val_31293 === (7))){
var inst_31288 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
var statearr_31294_31335 = state_31292__$1;
(statearr_31294_31335[(2)] = inst_31288);

(statearr_31294_31335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (20))){
var inst_31258 = (state_31292[(7)]);
var inst_31269 = (state_31292[(2)]);
var inst_31270 = cljs.core.next.call(null,inst_31258);
var inst_31244 = inst_31270;
var inst_31245 = null;
var inst_31246 = (0);
var inst_31247 = (0);
var state_31292__$1 = (function (){var statearr_31295 = state_31292;
(statearr_31295[(8)] = inst_31246);

(statearr_31295[(9)] = inst_31247);

(statearr_31295[(10)] = inst_31269);

(statearr_31295[(11)] = inst_31244);

(statearr_31295[(12)] = inst_31245);

return statearr_31295;
})();
var statearr_31296_31336 = state_31292__$1;
(statearr_31296_31336[(2)] = null);

(statearr_31296_31336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (1))){
var state_31292__$1 = state_31292;
var statearr_31297_31337 = state_31292__$1;
(statearr_31297_31337[(2)] = null);

(statearr_31297_31337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (4))){
var inst_31233 = (state_31292[(13)]);
var inst_31233__$1 = (state_31292[(2)]);
var inst_31234 = (inst_31233__$1 == null);
var state_31292__$1 = (function (){var statearr_31298 = state_31292;
(statearr_31298[(13)] = inst_31233__$1);

return statearr_31298;
})();
if(cljs.core.truth_(inst_31234)){
var statearr_31299_31338 = state_31292__$1;
(statearr_31299_31338[(1)] = (5));

} else {
var statearr_31300_31339 = state_31292__$1;
(statearr_31300_31339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (15))){
var state_31292__$1 = state_31292;
var statearr_31304_31340 = state_31292__$1;
(statearr_31304_31340[(2)] = null);

(statearr_31304_31340[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (21))){
var state_31292__$1 = state_31292;
var statearr_31305_31341 = state_31292__$1;
(statearr_31305_31341[(2)] = null);

(statearr_31305_31341[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (13))){
var inst_31246 = (state_31292[(8)]);
var inst_31247 = (state_31292[(9)]);
var inst_31244 = (state_31292[(11)]);
var inst_31245 = (state_31292[(12)]);
var inst_31254 = (state_31292[(2)]);
var inst_31255 = (inst_31247 + (1));
var tmp31301 = inst_31246;
var tmp31302 = inst_31244;
var tmp31303 = inst_31245;
var inst_31244__$1 = tmp31302;
var inst_31245__$1 = tmp31303;
var inst_31246__$1 = tmp31301;
var inst_31247__$1 = inst_31255;
var state_31292__$1 = (function (){var statearr_31306 = state_31292;
(statearr_31306[(8)] = inst_31246__$1);

(statearr_31306[(9)] = inst_31247__$1);

(statearr_31306[(11)] = inst_31244__$1);

(statearr_31306[(12)] = inst_31245__$1);

(statearr_31306[(14)] = inst_31254);

return statearr_31306;
})();
var statearr_31307_31342 = state_31292__$1;
(statearr_31307_31342[(2)] = null);

(statearr_31307_31342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (22))){
var state_31292__$1 = state_31292;
var statearr_31308_31343 = state_31292__$1;
(statearr_31308_31343[(2)] = null);

(statearr_31308_31343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (6))){
var inst_31233 = (state_31292[(13)]);
var inst_31242 = f.call(null,inst_31233);
var inst_31243 = cljs.core.seq.call(null,inst_31242);
var inst_31244 = inst_31243;
var inst_31245 = null;
var inst_31246 = (0);
var inst_31247 = (0);
var state_31292__$1 = (function (){var statearr_31309 = state_31292;
(statearr_31309[(8)] = inst_31246);

(statearr_31309[(9)] = inst_31247);

(statearr_31309[(11)] = inst_31244);

(statearr_31309[(12)] = inst_31245);

return statearr_31309;
})();
var statearr_31310_31344 = state_31292__$1;
(statearr_31310_31344[(2)] = null);

(statearr_31310_31344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (17))){
var inst_31258 = (state_31292[(7)]);
var inst_31262 = cljs.core.chunk_first.call(null,inst_31258);
var inst_31263 = cljs.core.chunk_rest.call(null,inst_31258);
var inst_31264 = cljs.core.count.call(null,inst_31262);
var inst_31244 = inst_31263;
var inst_31245 = inst_31262;
var inst_31246 = inst_31264;
var inst_31247 = (0);
var state_31292__$1 = (function (){var statearr_31311 = state_31292;
(statearr_31311[(8)] = inst_31246);

(statearr_31311[(9)] = inst_31247);

(statearr_31311[(11)] = inst_31244);

(statearr_31311[(12)] = inst_31245);

return statearr_31311;
})();
var statearr_31312_31345 = state_31292__$1;
(statearr_31312_31345[(2)] = null);

(statearr_31312_31345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (3))){
var inst_31290 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31292__$1,inst_31290);
} else {
if((state_val_31293 === (12))){
var inst_31278 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
var statearr_31313_31346 = state_31292__$1;
(statearr_31313_31346[(2)] = inst_31278);

(statearr_31313_31346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (2))){
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31292__$1,(4),in$);
} else {
if((state_val_31293 === (23))){
var inst_31286 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
var statearr_31314_31347 = state_31292__$1;
(statearr_31314_31347[(2)] = inst_31286);

(statearr_31314_31347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (19))){
var inst_31273 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
var statearr_31315_31348 = state_31292__$1;
(statearr_31315_31348[(2)] = inst_31273);

(statearr_31315_31348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (11))){
var inst_31258 = (state_31292[(7)]);
var inst_31244 = (state_31292[(11)]);
var inst_31258__$1 = cljs.core.seq.call(null,inst_31244);
var state_31292__$1 = (function (){var statearr_31316 = state_31292;
(statearr_31316[(7)] = inst_31258__$1);

return statearr_31316;
})();
if(inst_31258__$1){
var statearr_31317_31349 = state_31292__$1;
(statearr_31317_31349[(1)] = (14));

} else {
var statearr_31318_31350 = state_31292__$1;
(statearr_31318_31350[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (9))){
var inst_31280 = (state_31292[(2)]);
var inst_31281 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31292__$1 = (function (){var statearr_31319 = state_31292;
(statearr_31319[(15)] = inst_31280);

return statearr_31319;
})();
if(cljs.core.truth_(inst_31281)){
var statearr_31320_31351 = state_31292__$1;
(statearr_31320_31351[(1)] = (21));

} else {
var statearr_31321_31352 = state_31292__$1;
(statearr_31321_31352[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (5))){
var inst_31236 = cljs.core.async.close_BANG_.call(null,out);
var state_31292__$1 = state_31292;
var statearr_31322_31353 = state_31292__$1;
(statearr_31322_31353[(2)] = inst_31236);

(statearr_31322_31353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (14))){
var inst_31258 = (state_31292[(7)]);
var inst_31260 = cljs.core.chunked_seq_QMARK_.call(null,inst_31258);
var state_31292__$1 = state_31292;
if(inst_31260){
var statearr_31323_31354 = state_31292__$1;
(statearr_31323_31354[(1)] = (17));

} else {
var statearr_31324_31355 = state_31292__$1;
(statearr_31324_31355[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (16))){
var inst_31276 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
var statearr_31325_31356 = state_31292__$1;
(statearr_31325_31356[(2)] = inst_31276);

(statearr_31325_31356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (10))){
var inst_31247 = (state_31292[(9)]);
var inst_31245 = (state_31292[(12)]);
var inst_31252 = cljs.core._nth.call(null,inst_31245,inst_31247);
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31292__$1,(13),out,inst_31252);
} else {
if((state_val_31293 === (18))){
var inst_31258 = (state_31292[(7)]);
var inst_31267 = cljs.core.first.call(null,inst_31258);
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31292__$1,(20),out,inst_31267);
} else {
if((state_val_31293 === (8))){
var inst_31246 = (state_31292[(8)]);
var inst_31247 = (state_31292[(9)]);
var inst_31249 = (inst_31247 < inst_31246);
var inst_31250 = inst_31249;
var state_31292__$1 = state_31292;
if(cljs.core.truth_(inst_31250)){
var statearr_31326_31357 = state_31292__$1;
(statearr_31326_31357[(1)] = (10));

} else {
var statearr_31327_31358 = state_31292__$1;
(statearr_31327_31358[(1)] = (11));

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
});})(c__28835__auto__))
;
return ((function (switch__28723__auto__,c__28835__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28724__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28724__auto____0 = (function (){
var statearr_31331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31331[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28724__auto__);

(statearr_31331[(1)] = (1));

return statearr_31331;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28724__auto____1 = (function (state_31292){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_31292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e31332){if((e31332 instanceof Object)){
var ex__28727__auto__ = e31332;
var statearr_31333_31359 = state_31292;
(statearr_31333_31359[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31360 = state_31292;
state_31292 = G__31360;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28724__auto__ = function(state_31292){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28724__auto____1.call(this,state_31292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28724__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28724__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto__))
})();
var state__28837__auto__ = (function (){var statearr_31334 = f__28836__auto__.call(null);
(statearr_31334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto__);

return statearr_31334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto__))
);

return c__28835__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31361 = [];
var len__25923__auto___31364 = arguments.length;
var i__25924__auto___31365 = (0);
while(true){
if((i__25924__auto___31365 < len__25923__auto___31364)){
args31361.push((arguments[i__25924__auto___31365]));

var G__31366 = (i__25924__auto___31365 + (1));
i__25924__auto___31365 = G__31366;
continue;
} else {
}
break;
}

var G__31363 = args31361.length;
switch (G__31363) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31361.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31368 = [];
var len__25923__auto___31371 = arguments.length;
var i__25924__auto___31372 = (0);
while(true){
if((i__25924__auto___31372 < len__25923__auto___31371)){
args31368.push((arguments[i__25924__auto___31372]));

var G__31373 = (i__25924__auto___31372 + (1));
i__25924__auto___31372 = G__31373;
continue;
} else {
}
break;
}

var G__31370 = args31368.length;
switch (G__31370) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31368.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31375 = [];
var len__25923__auto___31426 = arguments.length;
var i__25924__auto___31427 = (0);
while(true){
if((i__25924__auto___31427 < len__25923__auto___31426)){
args31375.push((arguments[i__25924__auto___31427]));

var G__31428 = (i__25924__auto___31427 + (1));
i__25924__auto___31427 = G__31428;
continue;
} else {
}
break;
}

var G__31377 = args31375.length;
switch (G__31377) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31375.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28835__auto___31430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___31430,out){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___31430,out){
return (function (state_31401){
var state_val_31402 = (state_31401[(1)]);
if((state_val_31402 === (7))){
var inst_31396 = (state_31401[(2)]);
var state_31401__$1 = state_31401;
var statearr_31403_31431 = state_31401__$1;
(statearr_31403_31431[(2)] = inst_31396);

(statearr_31403_31431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (1))){
var inst_31378 = null;
var state_31401__$1 = (function (){var statearr_31404 = state_31401;
(statearr_31404[(7)] = inst_31378);

return statearr_31404;
})();
var statearr_31405_31432 = state_31401__$1;
(statearr_31405_31432[(2)] = null);

(statearr_31405_31432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (4))){
var inst_31381 = (state_31401[(8)]);
var inst_31381__$1 = (state_31401[(2)]);
var inst_31382 = (inst_31381__$1 == null);
var inst_31383 = cljs.core.not.call(null,inst_31382);
var state_31401__$1 = (function (){var statearr_31406 = state_31401;
(statearr_31406[(8)] = inst_31381__$1);

return statearr_31406;
})();
if(inst_31383){
var statearr_31407_31433 = state_31401__$1;
(statearr_31407_31433[(1)] = (5));

} else {
var statearr_31408_31434 = state_31401__$1;
(statearr_31408_31434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (6))){
var state_31401__$1 = state_31401;
var statearr_31409_31435 = state_31401__$1;
(statearr_31409_31435[(2)] = null);

(statearr_31409_31435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (3))){
var inst_31398 = (state_31401[(2)]);
var inst_31399 = cljs.core.async.close_BANG_.call(null,out);
var state_31401__$1 = (function (){var statearr_31410 = state_31401;
(statearr_31410[(9)] = inst_31398);

return statearr_31410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31401__$1,inst_31399);
} else {
if((state_val_31402 === (2))){
var state_31401__$1 = state_31401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31401__$1,(4),ch);
} else {
if((state_val_31402 === (11))){
var inst_31381 = (state_31401[(8)]);
var inst_31390 = (state_31401[(2)]);
var inst_31378 = inst_31381;
var state_31401__$1 = (function (){var statearr_31411 = state_31401;
(statearr_31411[(10)] = inst_31390);

(statearr_31411[(7)] = inst_31378);

return statearr_31411;
})();
var statearr_31412_31436 = state_31401__$1;
(statearr_31412_31436[(2)] = null);

(statearr_31412_31436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (9))){
var inst_31381 = (state_31401[(8)]);
var state_31401__$1 = state_31401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31401__$1,(11),out,inst_31381);
} else {
if((state_val_31402 === (5))){
var inst_31381 = (state_31401[(8)]);
var inst_31378 = (state_31401[(7)]);
var inst_31385 = cljs.core._EQ_.call(null,inst_31381,inst_31378);
var state_31401__$1 = state_31401;
if(inst_31385){
var statearr_31414_31437 = state_31401__$1;
(statearr_31414_31437[(1)] = (8));

} else {
var statearr_31415_31438 = state_31401__$1;
(statearr_31415_31438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (10))){
var inst_31393 = (state_31401[(2)]);
var state_31401__$1 = state_31401;
var statearr_31416_31439 = state_31401__$1;
(statearr_31416_31439[(2)] = inst_31393);

(statearr_31416_31439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31402 === (8))){
var inst_31378 = (state_31401[(7)]);
var tmp31413 = inst_31378;
var inst_31378__$1 = tmp31413;
var state_31401__$1 = (function (){var statearr_31417 = state_31401;
(statearr_31417[(7)] = inst_31378__$1);

return statearr_31417;
})();
var statearr_31418_31440 = state_31401__$1;
(statearr_31418_31440[(2)] = null);

(statearr_31418_31440[(1)] = (2));


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
});})(c__28835__auto___31430,out))
;
return ((function (switch__28723__auto__,c__28835__auto___31430,out){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_31422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31422[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_31422[(1)] = (1));

return statearr_31422;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_31401){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_31401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e31423){if((e31423 instanceof Object)){
var ex__28727__auto__ = e31423;
var statearr_31424_31441 = state_31401;
(statearr_31424_31441[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31442 = state_31401;
state_31401 = G__31442;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_31401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_31401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___31430,out))
})();
var state__28837__auto__ = (function (){var statearr_31425 = f__28836__auto__.call(null);
(statearr_31425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___31430);

return statearr_31425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___31430,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31443 = [];
var len__25923__auto___31513 = arguments.length;
var i__25924__auto___31514 = (0);
while(true){
if((i__25924__auto___31514 < len__25923__auto___31513)){
args31443.push((arguments[i__25924__auto___31514]));

var G__31515 = (i__25924__auto___31514 + (1));
i__25924__auto___31514 = G__31515;
continue;
} else {
}
break;
}

var G__31445 = args31443.length;
switch (G__31445) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31443.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28835__auto___31517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___31517,out){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___31517,out){
return (function (state_31483){
var state_val_31484 = (state_31483[(1)]);
if((state_val_31484 === (7))){
var inst_31479 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
var statearr_31485_31518 = state_31483__$1;
(statearr_31485_31518[(2)] = inst_31479);

(statearr_31485_31518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (1))){
var inst_31446 = (new Array(n));
var inst_31447 = inst_31446;
var inst_31448 = (0);
var state_31483__$1 = (function (){var statearr_31486 = state_31483;
(statearr_31486[(7)] = inst_31448);

(statearr_31486[(8)] = inst_31447);

return statearr_31486;
})();
var statearr_31487_31519 = state_31483__$1;
(statearr_31487_31519[(2)] = null);

(statearr_31487_31519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (4))){
var inst_31451 = (state_31483[(9)]);
var inst_31451__$1 = (state_31483[(2)]);
var inst_31452 = (inst_31451__$1 == null);
var inst_31453 = cljs.core.not.call(null,inst_31452);
var state_31483__$1 = (function (){var statearr_31488 = state_31483;
(statearr_31488[(9)] = inst_31451__$1);

return statearr_31488;
})();
if(inst_31453){
var statearr_31489_31520 = state_31483__$1;
(statearr_31489_31520[(1)] = (5));

} else {
var statearr_31490_31521 = state_31483__$1;
(statearr_31490_31521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (15))){
var inst_31473 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
var statearr_31491_31522 = state_31483__$1;
(statearr_31491_31522[(2)] = inst_31473);

(statearr_31491_31522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (13))){
var state_31483__$1 = state_31483;
var statearr_31492_31523 = state_31483__$1;
(statearr_31492_31523[(2)] = null);

(statearr_31492_31523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (6))){
var inst_31448 = (state_31483[(7)]);
var inst_31469 = (inst_31448 > (0));
var state_31483__$1 = state_31483;
if(cljs.core.truth_(inst_31469)){
var statearr_31493_31524 = state_31483__$1;
(statearr_31493_31524[(1)] = (12));

} else {
var statearr_31494_31525 = state_31483__$1;
(statearr_31494_31525[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (3))){
var inst_31481 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31483__$1,inst_31481);
} else {
if((state_val_31484 === (12))){
var inst_31447 = (state_31483[(8)]);
var inst_31471 = cljs.core.vec.call(null,inst_31447);
var state_31483__$1 = state_31483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31483__$1,(15),out,inst_31471);
} else {
if((state_val_31484 === (2))){
var state_31483__$1 = state_31483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31483__$1,(4),ch);
} else {
if((state_val_31484 === (11))){
var inst_31463 = (state_31483[(2)]);
var inst_31464 = (new Array(n));
var inst_31447 = inst_31464;
var inst_31448 = (0);
var state_31483__$1 = (function (){var statearr_31495 = state_31483;
(statearr_31495[(7)] = inst_31448);

(statearr_31495[(10)] = inst_31463);

(statearr_31495[(8)] = inst_31447);

return statearr_31495;
})();
var statearr_31496_31526 = state_31483__$1;
(statearr_31496_31526[(2)] = null);

(statearr_31496_31526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (9))){
var inst_31447 = (state_31483[(8)]);
var inst_31461 = cljs.core.vec.call(null,inst_31447);
var state_31483__$1 = state_31483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31483__$1,(11),out,inst_31461);
} else {
if((state_val_31484 === (5))){
var inst_31448 = (state_31483[(7)]);
var inst_31456 = (state_31483[(11)]);
var inst_31451 = (state_31483[(9)]);
var inst_31447 = (state_31483[(8)]);
var inst_31455 = (inst_31447[inst_31448] = inst_31451);
var inst_31456__$1 = (inst_31448 + (1));
var inst_31457 = (inst_31456__$1 < n);
var state_31483__$1 = (function (){var statearr_31497 = state_31483;
(statearr_31497[(11)] = inst_31456__$1);

(statearr_31497[(12)] = inst_31455);

return statearr_31497;
})();
if(cljs.core.truth_(inst_31457)){
var statearr_31498_31527 = state_31483__$1;
(statearr_31498_31527[(1)] = (8));

} else {
var statearr_31499_31528 = state_31483__$1;
(statearr_31499_31528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (14))){
var inst_31476 = (state_31483[(2)]);
var inst_31477 = cljs.core.async.close_BANG_.call(null,out);
var state_31483__$1 = (function (){var statearr_31501 = state_31483;
(statearr_31501[(13)] = inst_31476);

return statearr_31501;
})();
var statearr_31502_31529 = state_31483__$1;
(statearr_31502_31529[(2)] = inst_31477);

(statearr_31502_31529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (10))){
var inst_31467 = (state_31483[(2)]);
var state_31483__$1 = state_31483;
var statearr_31503_31530 = state_31483__$1;
(statearr_31503_31530[(2)] = inst_31467);

(statearr_31503_31530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31484 === (8))){
var inst_31456 = (state_31483[(11)]);
var inst_31447 = (state_31483[(8)]);
var tmp31500 = inst_31447;
var inst_31447__$1 = tmp31500;
var inst_31448 = inst_31456;
var state_31483__$1 = (function (){var statearr_31504 = state_31483;
(statearr_31504[(7)] = inst_31448);

(statearr_31504[(8)] = inst_31447__$1);

return statearr_31504;
})();
var statearr_31505_31531 = state_31483__$1;
(statearr_31505_31531[(2)] = null);

(statearr_31505_31531[(1)] = (2));


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
});})(c__28835__auto___31517,out))
;
return ((function (switch__28723__auto__,c__28835__auto___31517,out){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_31509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31509[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_31509[(1)] = (1));

return statearr_31509;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_31483){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_31483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e31510){if((e31510 instanceof Object)){
var ex__28727__auto__ = e31510;
var statearr_31511_31532 = state_31483;
(statearr_31511_31532[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31533 = state_31483;
state_31483 = G__31533;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_31483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_31483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___31517,out))
})();
var state__28837__auto__ = (function (){var statearr_31512 = f__28836__auto__.call(null);
(statearr_31512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___31517);

return statearr_31512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___31517,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31534 = [];
var len__25923__auto___31608 = arguments.length;
var i__25924__auto___31609 = (0);
while(true){
if((i__25924__auto___31609 < len__25923__auto___31608)){
args31534.push((arguments[i__25924__auto___31609]));

var G__31610 = (i__25924__auto___31609 + (1));
i__25924__auto___31609 = G__31610;
continue;
} else {
}
break;
}

var G__31536 = args31534.length;
switch (G__31536) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31534.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28835__auto___31612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28835__auto___31612,out){
return (function (){
var f__28836__auto__ = (function (){var switch__28723__auto__ = ((function (c__28835__auto___31612,out){
return (function (state_31578){
var state_val_31579 = (state_31578[(1)]);
if((state_val_31579 === (7))){
var inst_31574 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31580_31613 = state_31578__$1;
(statearr_31580_31613[(2)] = inst_31574);

(statearr_31580_31613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (1))){
var inst_31537 = [];
var inst_31538 = inst_31537;
var inst_31539 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31578__$1 = (function (){var statearr_31581 = state_31578;
(statearr_31581[(7)] = inst_31539);

(statearr_31581[(8)] = inst_31538);

return statearr_31581;
})();
var statearr_31582_31614 = state_31578__$1;
(statearr_31582_31614[(2)] = null);

(statearr_31582_31614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (4))){
var inst_31542 = (state_31578[(9)]);
var inst_31542__$1 = (state_31578[(2)]);
var inst_31543 = (inst_31542__$1 == null);
var inst_31544 = cljs.core.not.call(null,inst_31543);
var state_31578__$1 = (function (){var statearr_31583 = state_31578;
(statearr_31583[(9)] = inst_31542__$1);

return statearr_31583;
})();
if(inst_31544){
var statearr_31584_31615 = state_31578__$1;
(statearr_31584_31615[(1)] = (5));

} else {
var statearr_31585_31616 = state_31578__$1;
(statearr_31585_31616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (15))){
var inst_31568 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31586_31617 = state_31578__$1;
(statearr_31586_31617[(2)] = inst_31568);

(statearr_31586_31617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (13))){
var state_31578__$1 = state_31578;
var statearr_31587_31618 = state_31578__$1;
(statearr_31587_31618[(2)] = null);

(statearr_31587_31618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (6))){
var inst_31538 = (state_31578[(8)]);
var inst_31563 = inst_31538.length;
var inst_31564 = (inst_31563 > (0));
var state_31578__$1 = state_31578;
if(cljs.core.truth_(inst_31564)){
var statearr_31588_31619 = state_31578__$1;
(statearr_31588_31619[(1)] = (12));

} else {
var statearr_31589_31620 = state_31578__$1;
(statearr_31589_31620[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (3))){
var inst_31576 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31578__$1,inst_31576);
} else {
if((state_val_31579 === (12))){
var inst_31538 = (state_31578[(8)]);
var inst_31566 = cljs.core.vec.call(null,inst_31538);
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31578__$1,(15),out,inst_31566);
} else {
if((state_val_31579 === (2))){
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31578__$1,(4),ch);
} else {
if((state_val_31579 === (11))){
var inst_31546 = (state_31578[(10)]);
var inst_31542 = (state_31578[(9)]);
var inst_31556 = (state_31578[(2)]);
var inst_31557 = [];
var inst_31558 = inst_31557.push(inst_31542);
var inst_31538 = inst_31557;
var inst_31539 = inst_31546;
var state_31578__$1 = (function (){var statearr_31590 = state_31578;
(statearr_31590[(11)] = inst_31558);

(statearr_31590[(7)] = inst_31539);

(statearr_31590[(8)] = inst_31538);

(statearr_31590[(12)] = inst_31556);

return statearr_31590;
})();
var statearr_31591_31621 = state_31578__$1;
(statearr_31591_31621[(2)] = null);

(statearr_31591_31621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (9))){
var inst_31538 = (state_31578[(8)]);
var inst_31554 = cljs.core.vec.call(null,inst_31538);
var state_31578__$1 = state_31578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31578__$1,(11),out,inst_31554);
} else {
if((state_val_31579 === (5))){
var inst_31546 = (state_31578[(10)]);
var inst_31539 = (state_31578[(7)]);
var inst_31542 = (state_31578[(9)]);
var inst_31546__$1 = f.call(null,inst_31542);
var inst_31547 = cljs.core._EQ_.call(null,inst_31546__$1,inst_31539);
var inst_31548 = cljs.core.keyword_identical_QMARK_.call(null,inst_31539,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31549 = (inst_31547) || (inst_31548);
var state_31578__$1 = (function (){var statearr_31592 = state_31578;
(statearr_31592[(10)] = inst_31546__$1);

return statearr_31592;
})();
if(cljs.core.truth_(inst_31549)){
var statearr_31593_31622 = state_31578__$1;
(statearr_31593_31622[(1)] = (8));

} else {
var statearr_31594_31623 = state_31578__$1;
(statearr_31594_31623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (14))){
var inst_31571 = (state_31578[(2)]);
var inst_31572 = cljs.core.async.close_BANG_.call(null,out);
var state_31578__$1 = (function (){var statearr_31596 = state_31578;
(statearr_31596[(13)] = inst_31571);

return statearr_31596;
})();
var statearr_31597_31624 = state_31578__$1;
(statearr_31597_31624[(2)] = inst_31572);

(statearr_31597_31624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (10))){
var inst_31561 = (state_31578[(2)]);
var state_31578__$1 = state_31578;
var statearr_31598_31625 = state_31578__$1;
(statearr_31598_31625[(2)] = inst_31561);

(statearr_31598_31625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31579 === (8))){
var inst_31546 = (state_31578[(10)]);
var inst_31542 = (state_31578[(9)]);
var inst_31538 = (state_31578[(8)]);
var inst_31551 = inst_31538.push(inst_31542);
var tmp31595 = inst_31538;
var inst_31538__$1 = tmp31595;
var inst_31539 = inst_31546;
var state_31578__$1 = (function (){var statearr_31599 = state_31578;
(statearr_31599[(14)] = inst_31551);

(statearr_31599[(7)] = inst_31539);

(statearr_31599[(8)] = inst_31538__$1);

return statearr_31599;
})();
var statearr_31600_31626 = state_31578__$1;
(statearr_31600_31626[(2)] = null);

(statearr_31600_31626[(1)] = (2));


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
});})(c__28835__auto___31612,out))
;
return ((function (switch__28723__auto__,c__28835__auto___31612,out){
return (function() {
var cljs$core$async$state_machine__28724__auto__ = null;
var cljs$core$async$state_machine__28724__auto____0 = (function (){
var statearr_31604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31604[(0)] = cljs$core$async$state_machine__28724__auto__);

(statearr_31604[(1)] = (1));

return statearr_31604;
});
var cljs$core$async$state_machine__28724__auto____1 = (function (state_31578){
while(true){
var ret_value__28725__auto__ = (function (){try{while(true){
var result__28726__auto__ = switch__28723__auto__.call(null,state_31578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28726__auto__;
}
break;
}
}catch (e31605){if((e31605 instanceof Object)){
var ex__28727__auto__ = e31605;
var statearr_31606_31627 = state_31578;
(statearr_31606_31627[(5)] = ex__28727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31628 = state_31578;
state_31578 = G__31628;
continue;
} else {
return ret_value__28725__auto__;
}
break;
}
});
cljs$core$async$state_machine__28724__auto__ = function(state_31578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28724__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28724__auto____1.call(this,state_31578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28724__auto____0;
cljs$core$async$state_machine__28724__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28724__auto____1;
return cljs$core$async$state_machine__28724__auto__;
})()
;})(switch__28723__auto__,c__28835__auto___31612,out))
})();
var state__28837__auto__ = (function (){var statearr_31607 = f__28836__auto__.call(null);
(statearr_31607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28835__auto___31612);

return statearr_31607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28837__auto__);
});})(c__28835__auto___31612,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1658325512010