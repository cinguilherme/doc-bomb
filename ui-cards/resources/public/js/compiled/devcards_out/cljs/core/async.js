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
var args29022 = [];
var len__25923__auto___29028 = arguments.length;
var i__25924__auto___29029 = (0);
while(true){
if((i__25924__auto___29029 < len__25923__auto___29028)){
args29022.push((arguments[i__25924__auto___29029]));

var G__29030 = (i__25924__auto___29029 + (1));
i__25924__auto___29029 = G__29030;
continue;
} else {
}
break;
}

var G__29024 = args29022.length;
switch (G__29024) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29022.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29025 = (function (f,blockable,meta29026){
this.f = f;
this.blockable = blockable;
this.meta29026 = meta29026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29027,meta29026__$1){
var self__ = this;
var _29027__$1 = this;
return (new cljs.core.async.t_cljs$core$async29025(self__.f,self__.blockable,meta29026__$1));
});

cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29027){
var self__ = this;
var _29027__$1 = this;
return self__.meta29026;
});

cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29026","meta29026",-281919398,null)], null);
});

cljs.core.async.t_cljs$core$async29025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29025";

cljs.core.async.t_cljs$core$async29025.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29025");
});

cljs.core.async.__GT_t_cljs$core$async29025 = (function cljs$core$async$__GT_t_cljs$core$async29025(f__$1,blockable__$1,meta29026){
return (new cljs.core.async.t_cljs$core$async29025(f__$1,blockable__$1,meta29026));
});

}

return (new cljs.core.async.t_cljs$core$async29025(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29034 = [];
var len__25923__auto___29037 = arguments.length;
var i__25924__auto___29038 = (0);
while(true){
if((i__25924__auto___29038 < len__25923__auto___29037)){
args29034.push((arguments[i__25924__auto___29038]));

var G__29039 = (i__25924__auto___29038 + (1));
i__25924__auto___29038 = G__29039;
continue;
} else {
}
break;
}

var G__29036 = args29034.length;
switch (G__29036) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29034.length)].join('')));

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
var args29041 = [];
var len__25923__auto___29044 = arguments.length;
var i__25924__auto___29045 = (0);
while(true){
if((i__25924__auto___29045 < len__25923__auto___29044)){
args29041.push((arguments[i__25924__auto___29045]));

var G__29046 = (i__25924__auto___29045 + (1));
i__25924__auto___29045 = G__29046;
continue;
} else {
}
break;
}

var G__29043 = args29041.length;
switch (G__29043) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29041.length)].join('')));

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
var args29048 = [];
var len__25923__auto___29051 = arguments.length;
var i__25924__auto___29052 = (0);
while(true){
if((i__25924__auto___29052 < len__25923__auto___29051)){
args29048.push((arguments[i__25924__auto___29052]));

var G__29053 = (i__25924__auto___29052 + (1));
i__25924__auto___29052 = G__29053;
continue;
} else {
}
break;
}

var G__29050 = args29048.length;
switch (G__29050) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29048.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29055 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29055);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29055,ret){
return (function (){
return fn1.call(null,val_29055);
});})(val_29055,ret))
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
var args29056 = [];
var len__25923__auto___29059 = arguments.length;
var i__25924__auto___29060 = (0);
while(true){
if((i__25924__auto___29060 < len__25923__auto___29059)){
args29056.push((arguments[i__25924__auto___29060]));

var G__29061 = (i__25924__auto___29060 + (1));
i__25924__auto___29060 = G__29061;
continue;
} else {
}
break;
}

var G__29058 = args29056.length;
switch (G__29058) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29056.length)].join('')));

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
var n__25763__auto___29063 = n;
var x_29064 = (0);
while(true){
if((x_29064 < n__25763__auto___29063)){
(a[x_29064] = (0));

var G__29065 = (x_29064 + (1));
x_29064 = G__29065;
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

var G__29066 = (i + (1));
i = G__29066;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29070 = (function (alt_flag,flag,meta29071){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29071 = meta29071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29072,meta29071__$1){
var self__ = this;
var _29072__$1 = this;
return (new cljs.core.async.t_cljs$core$async29070(self__.alt_flag,self__.flag,meta29071__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29072){
var self__ = this;
var _29072__$1 = this;
return self__.meta29071;
});})(flag))
;

cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29070.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29071","meta29071",-681062039,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29070";

cljs.core.async.t_cljs$core$async29070.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29070");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29070 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29070(alt_flag__$1,flag__$1,meta29071){
return (new cljs.core.async.t_cljs$core$async29070(alt_flag__$1,flag__$1,meta29071));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29070(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29076 = (function (alt_handler,flag,cb,meta29077){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29077 = meta29077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29078,meta29077__$1){
var self__ = this;
var _29078__$1 = this;
return (new cljs.core.async.t_cljs$core$async29076(self__.alt_handler,self__.flag,self__.cb,meta29077__$1));
});

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29078){
var self__ = this;
var _29078__$1 = this;
return self__.meta29077;
});

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29077","meta29077",-1499021459,null)], null);
});

cljs.core.async.t_cljs$core$async29076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29076";

cljs.core.async.t_cljs$core$async29076.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29076");
});

cljs.core.async.__GT_t_cljs$core$async29076 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29076(alt_handler__$1,flag__$1,cb__$1,meta29077){
return (new cljs.core.async.t_cljs$core$async29076(alt_handler__$1,flag__$1,cb__$1,meta29077));
});

}

return (new cljs.core.async.t_cljs$core$async29076(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29079_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29079_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29080_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29080_SHARP_,port], null));
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
var G__29081 = (i + (1));
i = G__29081;
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
var len__25923__auto___29087 = arguments.length;
var i__25924__auto___29088 = (0);
while(true){
if((i__25924__auto___29088 < len__25923__auto___29087)){
args__25930__auto__.push((arguments[i__25924__auto___29088]));

var G__29089 = (i__25924__auto___29088 + (1));
i__25924__auto___29088 = G__29089;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29084){
var map__29085 = p__29084;
var map__29085__$1 = ((((!((map__29085 == null)))?((((map__29085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29085):map__29085);
var opts = map__29085__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29082){
var G__29083 = cljs.core.first.call(null,seq29082);
var seq29082__$1 = cljs.core.next.call(null,seq29082);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29083,seq29082__$1);
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
var args29090 = [];
var len__25923__auto___29140 = arguments.length;
var i__25924__auto___29141 = (0);
while(true){
if((i__25924__auto___29141 < len__25923__auto___29140)){
args29090.push((arguments[i__25924__auto___29141]));

var G__29142 = (i__25924__auto___29141 + (1));
i__25924__auto___29141 = G__29142;
continue;
} else {
}
break;
}

var G__29092 = args29090.length;
switch (G__29092) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29090.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28977__auto___29144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___29144){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___29144){
return (function (state_29116){
var state_val_29117 = (state_29116[(1)]);
if((state_val_29117 === (7))){
var inst_29112 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29118_29145 = state_29116__$1;
(statearr_29118_29145[(2)] = inst_29112);

(statearr_29118_29145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (1))){
var state_29116__$1 = state_29116;
var statearr_29119_29146 = state_29116__$1;
(statearr_29119_29146[(2)] = null);

(statearr_29119_29146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (4))){
var inst_29095 = (state_29116[(7)]);
var inst_29095__$1 = (state_29116[(2)]);
var inst_29096 = (inst_29095__$1 == null);
var state_29116__$1 = (function (){var statearr_29120 = state_29116;
(statearr_29120[(7)] = inst_29095__$1);

return statearr_29120;
})();
if(cljs.core.truth_(inst_29096)){
var statearr_29121_29147 = state_29116__$1;
(statearr_29121_29147[(1)] = (5));

} else {
var statearr_29122_29148 = state_29116__$1;
(statearr_29122_29148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (13))){
var state_29116__$1 = state_29116;
var statearr_29123_29149 = state_29116__$1;
(statearr_29123_29149[(2)] = null);

(statearr_29123_29149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (6))){
var inst_29095 = (state_29116[(7)]);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29116__$1,(11),to,inst_29095);
} else {
if((state_val_29117 === (3))){
var inst_29114 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29116__$1,inst_29114);
} else {
if((state_val_29117 === (12))){
var state_29116__$1 = state_29116;
var statearr_29124_29150 = state_29116__$1;
(statearr_29124_29150[(2)] = null);

(statearr_29124_29150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (2))){
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(4),from);
} else {
if((state_val_29117 === (11))){
var inst_29105 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29105)){
var statearr_29125_29151 = state_29116__$1;
(statearr_29125_29151[(1)] = (12));

} else {
var statearr_29126_29152 = state_29116__$1;
(statearr_29126_29152[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (9))){
var state_29116__$1 = state_29116;
var statearr_29127_29153 = state_29116__$1;
(statearr_29127_29153[(2)] = null);

(statearr_29127_29153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (5))){
var state_29116__$1 = state_29116;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29128_29154 = state_29116__$1;
(statearr_29128_29154[(1)] = (8));

} else {
var statearr_29129_29155 = state_29116__$1;
(statearr_29129_29155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (14))){
var inst_29110 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29130_29156 = state_29116__$1;
(statearr_29130_29156[(2)] = inst_29110);

(statearr_29130_29156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (10))){
var inst_29102 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29131_29157 = state_29116__$1;
(statearr_29131_29157[(2)] = inst_29102);

(statearr_29131_29157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (8))){
var inst_29099 = cljs.core.async.close_BANG_.call(null,to);
var state_29116__$1 = state_29116;
var statearr_29132_29158 = state_29116__$1;
(statearr_29132_29158[(2)] = inst_29099);

(statearr_29132_29158[(1)] = (10));


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
});})(c__28977__auto___29144))
;
return ((function (switch__28865__auto__,c__28977__auto___29144){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_29136 = [null,null,null,null,null,null,null,null];
(statearr_29136[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_29136[(1)] = (1));

return statearr_29136;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_29116){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_29116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e29137){if((e29137 instanceof Object)){
var ex__28869__auto__ = e29137;
var statearr_29138_29159 = state_29116;
(statearr_29138_29159[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29160 = state_29116;
state_29116 = G__29160;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_29116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_29116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___29144))
})();
var state__28979__auto__ = (function (){var statearr_29139 = f__28978__auto__.call(null);
(statearr_29139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___29144);

return statearr_29139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___29144))
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
return (function (p__29348){
var vec__29349 = p__29348;
var v = cljs.core.nth.call(null,vec__29349,(0),null);
var p = cljs.core.nth.call(null,vec__29349,(1),null);
var job = vec__29349;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28977__auto___29535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___29535,res,vec__29349,v,p,job,jobs,results){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___29535,res,vec__29349,v,p,job,jobs,results){
return (function (state_29356){
var state_val_29357 = (state_29356[(1)]);
if((state_val_29357 === (1))){
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29356__$1,(2),res,v);
} else {
if((state_val_29357 === (2))){
var inst_29353 = (state_29356[(2)]);
var inst_29354 = cljs.core.async.close_BANG_.call(null,res);
var state_29356__$1 = (function (){var statearr_29358 = state_29356;
(statearr_29358[(7)] = inst_29353);

return statearr_29358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29356__$1,inst_29354);
} else {
return null;
}
}
});})(c__28977__auto___29535,res,vec__29349,v,p,job,jobs,results))
;
return ((function (switch__28865__auto__,c__28977__auto___29535,res,vec__29349,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0 = (function (){
var statearr_29362 = [null,null,null,null,null,null,null,null];
(statearr_29362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__);

(statearr_29362[(1)] = (1));

return statearr_29362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1 = (function (state_29356){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_29356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e29363){if((e29363 instanceof Object)){
var ex__28869__auto__ = e29363;
var statearr_29364_29536 = state_29356;
(statearr_29364_29536[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29537 = state_29356;
state_29356 = G__29537;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__ = function(state_29356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1.call(this,state_29356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___29535,res,vec__29349,v,p,job,jobs,results))
})();
var state__28979__auto__ = (function (){var statearr_29365 = f__28978__auto__.call(null);
(statearr_29365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___29535);

return statearr_29365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___29535,res,vec__29349,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29366){
var vec__29367 = p__29366;
var v = cljs.core.nth.call(null,vec__29367,(0),null);
var p = cljs.core.nth.call(null,vec__29367,(1),null);
var job = vec__29367;
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
var n__25763__auto___29538 = n;
var __29539 = (0);
while(true){
if((__29539 < n__25763__auto___29538)){
var G__29370_29540 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29370_29540) {
case "compute":
var c__28977__auto___29542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29539,c__28977__auto___29542,G__29370_29540,n__25763__auto___29538,jobs,results,process,async){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (__29539,c__28977__auto___29542,G__29370_29540,n__25763__auto___29538,jobs,results,process,async){
return (function (state_29383){
var state_val_29384 = (state_29383[(1)]);
if((state_val_29384 === (1))){
var state_29383__$1 = state_29383;
var statearr_29385_29543 = state_29383__$1;
(statearr_29385_29543[(2)] = null);

(statearr_29385_29543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (2))){
var state_29383__$1 = state_29383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29383__$1,(4),jobs);
} else {
if((state_val_29384 === (3))){
var inst_29381 = (state_29383[(2)]);
var state_29383__$1 = state_29383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29383__$1,inst_29381);
} else {
if((state_val_29384 === (4))){
var inst_29373 = (state_29383[(2)]);
var inst_29374 = process.call(null,inst_29373);
var state_29383__$1 = state_29383;
if(cljs.core.truth_(inst_29374)){
var statearr_29386_29544 = state_29383__$1;
(statearr_29386_29544[(1)] = (5));

} else {
var statearr_29387_29545 = state_29383__$1;
(statearr_29387_29545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (5))){
var state_29383__$1 = state_29383;
var statearr_29388_29546 = state_29383__$1;
(statearr_29388_29546[(2)] = null);

(statearr_29388_29546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (6))){
var state_29383__$1 = state_29383;
var statearr_29389_29547 = state_29383__$1;
(statearr_29389_29547[(2)] = null);

(statearr_29389_29547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29384 === (7))){
var inst_29379 = (state_29383[(2)]);
var state_29383__$1 = state_29383;
var statearr_29390_29548 = state_29383__$1;
(statearr_29390_29548[(2)] = inst_29379);

(statearr_29390_29548[(1)] = (3));


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
});})(__29539,c__28977__auto___29542,G__29370_29540,n__25763__auto___29538,jobs,results,process,async))
;
return ((function (__29539,switch__28865__auto__,c__28977__auto___29542,G__29370_29540,n__25763__auto___29538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0 = (function (){
var statearr_29394 = [null,null,null,null,null,null,null];
(statearr_29394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__);

(statearr_29394[(1)] = (1));

return statearr_29394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1 = (function (state_29383){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_29383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e29395){if((e29395 instanceof Object)){
var ex__28869__auto__ = e29395;
var statearr_29396_29549 = state_29383;
(statearr_29396_29549[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29550 = state_29383;
state_29383 = G__29550;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__ = function(state_29383){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1.call(this,state_29383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__;
})()
;})(__29539,switch__28865__auto__,c__28977__auto___29542,G__29370_29540,n__25763__auto___29538,jobs,results,process,async))
})();
var state__28979__auto__ = (function (){var statearr_29397 = f__28978__auto__.call(null);
(statearr_29397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___29542);

return statearr_29397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(__29539,c__28977__auto___29542,G__29370_29540,n__25763__auto___29538,jobs,results,process,async))
);


break;
case "async":
var c__28977__auto___29551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29539,c__28977__auto___29551,G__29370_29540,n__25763__auto___29538,jobs,results,process,async){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (__29539,c__28977__auto___29551,G__29370_29540,n__25763__auto___29538,jobs,results,process,async){
return (function (state_29410){
var state_val_29411 = (state_29410[(1)]);
if((state_val_29411 === (1))){
var state_29410__$1 = state_29410;
var statearr_29412_29552 = state_29410__$1;
(statearr_29412_29552[(2)] = null);

(statearr_29412_29552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (2))){
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29410__$1,(4),jobs);
} else {
if((state_val_29411 === (3))){
var inst_29408 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29410__$1,inst_29408);
} else {
if((state_val_29411 === (4))){
var inst_29400 = (state_29410[(2)]);
var inst_29401 = async.call(null,inst_29400);
var state_29410__$1 = state_29410;
if(cljs.core.truth_(inst_29401)){
var statearr_29413_29553 = state_29410__$1;
(statearr_29413_29553[(1)] = (5));

} else {
var statearr_29414_29554 = state_29410__$1;
(statearr_29414_29554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (5))){
var state_29410__$1 = state_29410;
var statearr_29415_29555 = state_29410__$1;
(statearr_29415_29555[(2)] = null);

(statearr_29415_29555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (6))){
var state_29410__$1 = state_29410;
var statearr_29416_29556 = state_29410__$1;
(statearr_29416_29556[(2)] = null);

(statearr_29416_29556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (7))){
var inst_29406 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29417_29557 = state_29410__$1;
(statearr_29417_29557[(2)] = inst_29406);

(statearr_29417_29557[(1)] = (3));


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
});})(__29539,c__28977__auto___29551,G__29370_29540,n__25763__auto___29538,jobs,results,process,async))
;
return ((function (__29539,switch__28865__auto__,c__28977__auto___29551,G__29370_29540,n__25763__auto___29538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0 = (function (){
var statearr_29421 = [null,null,null,null,null,null,null];
(statearr_29421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__);

(statearr_29421[(1)] = (1));

return statearr_29421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1 = (function (state_29410){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_29410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e29422){if((e29422 instanceof Object)){
var ex__28869__auto__ = e29422;
var statearr_29423_29558 = state_29410;
(statearr_29423_29558[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29559 = state_29410;
state_29410 = G__29559;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__ = function(state_29410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1.call(this,state_29410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__;
})()
;})(__29539,switch__28865__auto__,c__28977__auto___29551,G__29370_29540,n__25763__auto___29538,jobs,results,process,async))
})();
var state__28979__auto__ = (function (){var statearr_29424 = f__28978__auto__.call(null);
(statearr_29424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___29551);

return statearr_29424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(__29539,c__28977__auto___29551,G__29370_29540,n__25763__auto___29538,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29560 = (__29539 + (1));
__29539 = G__29560;
continue;
} else {
}
break;
}

var c__28977__auto___29561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___29561,jobs,results,process,async){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___29561,jobs,results,process,async){
return (function (state_29446){
var state_val_29447 = (state_29446[(1)]);
if((state_val_29447 === (1))){
var state_29446__$1 = state_29446;
var statearr_29448_29562 = state_29446__$1;
(statearr_29448_29562[(2)] = null);

(statearr_29448_29562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (2))){
var state_29446__$1 = state_29446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29446__$1,(4),from);
} else {
if((state_val_29447 === (3))){
var inst_29444 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29446__$1,inst_29444);
} else {
if((state_val_29447 === (4))){
var inst_29427 = (state_29446[(7)]);
var inst_29427__$1 = (state_29446[(2)]);
var inst_29428 = (inst_29427__$1 == null);
var state_29446__$1 = (function (){var statearr_29449 = state_29446;
(statearr_29449[(7)] = inst_29427__$1);

return statearr_29449;
})();
if(cljs.core.truth_(inst_29428)){
var statearr_29450_29563 = state_29446__$1;
(statearr_29450_29563[(1)] = (5));

} else {
var statearr_29451_29564 = state_29446__$1;
(statearr_29451_29564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (5))){
var inst_29430 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29446__$1 = state_29446;
var statearr_29452_29565 = state_29446__$1;
(statearr_29452_29565[(2)] = inst_29430);

(statearr_29452_29565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (6))){
var inst_29427 = (state_29446[(7)]);
var inst_29432 = (state_29446[(8)]);
var inst_29432__$1 = cljs.core.async.chan.call(null,(1));
var inst_29433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29434 = [inst_29427,inst_29432__$1];
var inst_29435 = (new cljs.core.PersistentVector(null,2,(5),inst_29433,inst_29434,null));
var state_29446__$1 = (function (){var statearr_29453 = state_29446;
(statearr_29453[(8)] = inst_29432__$1);

return statearr_29453;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29446__$1,(8),jobs,inst_29435);
} else {
if((state_val_29447 === (7))){
var inst_29442 = (state_29446[(2)]);
var state_29446__$1 = state_29446;
var statearr_29454_29566 = state_29446__$1;
(statearr_29454_29566[(2)] = inst_29442);

(statearr_29454_29566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29447 === (8))){
var inst_29432 = (state_29446[(8)]);
var inst_29437 = (state_29446[(2)]);
var state_29446__$1 = (function (){var statearr_29455 = state_29446;
(statearr_29455[(9)] = inst_29437);

return statearr_29455;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29446__$1,(9),results,inst_29432);
} else {
if((state_val_29447 === (9))){
var inst_29439 = (state_29446[(2)]);
var state_29446__$1 = (function (){var statearr_29456 = state_29446;
(statearr_29456[(10)] = inst_29439);

return statearr_29456;
})();
var statearr_29457_29567 = state_29446__$1;
(statearr_29457_29567[(2)] = null);

(statearr_29457_29567[(1)] = (2));


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
});})(c__28977__auto___29561,jobs,results,process,async))
;
return ((function (switch__28865__auto__,c__28977__auto___29561,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0 = (function (){
var statearr_29461 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__);

(statearr_29461[(1)] = (1));

return statearr_29461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1 = (function (state_29446){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_29446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e29462){if((e29462 instanceof Object)){
var ex__28869__auto__ = e29462;
var statearr_29463_29568 = state_29446;
(statearr_29463_29568[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29569 = state_29446;
state_29446 = G__29569;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__ = function(state_29446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1.call(this,state_29446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___29561,jobs,results,process,async))
})();
var state__28979__auto__ = (function (){var statearr_29464 = f__28978__auto__.call(null);
(statearr_29464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___29561);

return statearr_29464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___29561,jobs,results,process,async))
);


var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__,jobs,results,process,async){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__,jobs,results,process,async){
return (function (state_29502){
var state_val_29503 = (state_29502[(1)]);
if((state_val_29503 === (7))){
var inst_29498 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
var statearr_29504_29570 = state_29502__$1;
(statearr_29504_29570[(2)] = inst_29498);

(statearr_29504_29570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (20))){
var state_29502__$1 = state_29502;
var statearr_29505_29571 = state_29502__$1;
(statearr_29505_29571[(2)] = null);

(statearr_29505_29571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (1))){
var state_29502__$1 = state_29502;
var statearr_29506_29572 = state_29502__$1;
(statearr_29506_29572[(2)] = null);

(statearr_29506_29572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (4))){
var inst_29467 = (state_29502[(7)]);
var inst_29467__$1 = (state_29502[(2)]);
var inst_29468 = (inst_29467__$1 == null);
var state_29502__$1 = (function (){var statearr_29507 = state_29502;
(statearr_29507[(7)] = inst_29467__$1);

return statearr_29507;
})();
if(cljs.core.truth_(inst_29468)){
var statearr_29508_29573 = state_29502__$1;
(statearr_29508_29573[(1)] = (5));

} else {
var statearr_29509_29574 = state_29502__$1;
(statearr_29509_29574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (15))){
var inst_29480 = (state_29502[(8)]);
var state_29502__$1 = state_29502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29502__$1,(18),to,inst_29480);
} else {
if((state_val_29503 === (21))){
var inst_29493 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
var statearr_29510_29575 = state_29502__$1;
(statearr_29510_29575[(2)] = inst_29493);

(statearr_29510_29575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (13))){
var inst_29495 = (state_29502[(2)]);
var state_29502__$1 = (function (){var statearr_29511 = state_29502;
(statearr_29511[(9)] = inst_29495);

return statearr_29511;
})();
var statearr_29512_29576 = state_29502__$1;
(statearr_29512_29576[(2)] = null);

(statearr_29512_29576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (6))){
var inst_29467 = (state_29502[(7)]);
var state_29502__$1 = state_29502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29502__$1,(11),inst_29467);
} else {
if((state_val_29503 === (17))){
var inst_29488 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
if(cljs.core.truth_(inst_29488)){
var statearr_29513_29577 = state_29502__$1;
(statearr_29513_29577[(1)] = (19));

} else {
var statearr_29514_29578 = state_29502__$1;
(statearr_29514_29578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (3))){
var inst_29500 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29502__$1,inst_29500);
} else {
if((state_val_29503 === (12))){
var inst_29477 = (state_29502[(10)]);
var state_29502__$1 = state_29502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29502__$1,(14),inst_29477);
} else {
if((state_val_29503 === (2))){
var state_29502__$1 = state_29502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29502__$1,(4),results);
} else {
if((state_val_29503 === (19))){
var state_29502__$1 = state_29502;
var statearr_29515_29579 = state_29502__$1;
(statearr_29515_29579[(2)] = null);

(statearr_29515_29579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (11))){
var inst_29477 = (state_29502[(2)]);
var state_29502__$1 = (function (){var statearr_29516 = state_29502;
(statearr_29516[(10)] = inst_29477);

return statearr_29516;
})();
var statearr_29517_29580 = state_29502__$1;
(statearr_29517_29580[(2)] = null);

(statearr_29517_29580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (9))){
var state_29502__$1 = state_29502;
var statearr_29518_29581 = state_29502__$1;
(statearr_29518_29581[(2)] = null);

(statearr_29518_29581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (5))){
var state_29502__$1 = state_29502;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29519_29582 = state_29502__$1;
(statearr_29519_29582[(1)] = (8));

} else {
var statearr_29520_29583 = state_29502__$1;
(statearr_29520_29583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (14))){
var inst_29482 = (state_29502[(11)]);
var inst_29480 = (state_29502[(8)]);
var inst_29480__$1 = (state_29502[(2)]);
var inst_29481 = (inst_29480__$1 == null);
var inst_29482__$1 = cljs.core.not.call(null,inst_29481);
var state_29502__$1 = (function (){var statearr_29521 = state_29502;
(statearr_29521[(11)] = inst_29482__$1);

(statearr_29521[(8)] = inst_29480__$1);

return statearr_29521;
})();
if(inst_29482__$1){
var statearr_29522_29584 = state_29502__$1;
(statearr_29522_29584[(1)] = (15));

} else {
var statearr_29523_29585 = state_29502__$1;
(statearr_29523_29585[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (16))){
var inst_29482 = (state_29502[(11)]);
var state_29502__$1 = state_29502;
var statearr_29524_29586 = state_29502__$1;
(statearr_29524_29586[(2)] = inst_29482);

(statearr_29524_29586[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (10))){
var inst_29474 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
var statearr_29525_29587 = state_29502__$1;
(statearr_29525_29587[(2)] = inst_29474);

(statearr_29525_29587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (18))){
var inst_29485 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
var statearr_29526_29588 = state_29502__$1;
(statearr_29526_29588[(2)] = inst_29485);

(statearr_29526_29588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (8))){
var inst_29471 = cljs.core.async.close_BANG_.call(null,to);
var state_29502__$1 = state_29502;
var statearr_29527_29589 = state_29502__$1;
(statearr_29527_29589[(2)] = inst_29471);

(statearr_29527_29589[(1)] = (10));


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
});})(c__28977__auto__,jobs,results,process,async))
;
return ((function (switch__28865__auto__,c__28977__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0 = (function (){
var statearr_29531 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__);

(statearr_29531[(1)] = (1));

return statearr_29531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1 = (function (state_29502){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_29502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e29532){if((e29532 instanceof Object)){
var ex__28869__auto__ = e29532;
var statearr_29533_29590 = state_29502;
(statearr_29533_29590[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29591 = state_29502;
state_29502 = G__29591;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__ = function(state_29502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1.call(this,state_29502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__,jobs,results,process,async))
})();
var state__28979__auto__ = (function (){var statearr_29534 = f__28978__auto__.call(null);
(statearr_29534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_29534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__,jobs,results,process,async))
);

return c__28977__auto__;
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
var args29592 = [];
var len__25923__auto___29595 = arguments.length;
var i__25924__auto___29596 = (0);
while(true){
if((i__25924__auto___29596 < len__25923__auto___29595)){
args29592.push((arguments[i__25924__auto___29596]));

var G__29597 = (i__25924__auto___29596 + (1));
i__25924__auto___29596 = G__29597;
continue;
} else {
}
break;
}

var G__29594 = args29592.length;
switch (G__29594) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29592.length)].join('')));

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
var args29599 = [];
var len__25923__auto___29602 = arguments.length;
var i__25924__auto___29603 = (0);
while(true){
if((i__25924__auto___29603 < len__25923__auto___29602)){
args29599.push((arguments[i__25924__auto___29603]));

var G__29604 = (i__25924__auto___29603 + (1));
i__25924__auto___29603 = G__29604;
continue;
} else {
}
break;
}

var G__29601 = args29599.length;
switch (G__29601) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29599.length)].join('')));

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
var args29606 = [];
var len__25923__auto___29659 = arguments.length;
var i__25924__auto___29660 = (0);
while(true){
if((i__25924__auto___29660 < len__25923__auto___29659)){
args29606.push((arguments[i__25924__auto___29660]));

var G__29661 = (i__25924__auto___29660 + (1));
i__25924__auto___29660 = G__29661;
continue;
} else {
}
break;
}

var G__29608 = args29606.length;
switch (G__29608) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29606.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28977__auto___29663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___29663,tc,fc){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___29663,tc,fc){
return (function (state_29634){
var state_val_29635 = (state_29634[(1)]);
if((state_val_29635 === (7))){
var inst_29630 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
var statearr_29636_29664 = state_29634__$1;
(statearr_29636_29664[(2)] = inst_29630);

(statearr_29636_29664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (1))){
var state_29634__$1 = state_29634;
var statearr_29637_29665 = state_29634__$1;
(statearr_29637_29665[(2)] = null);

(statearr_29637_29665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (4))){
var inst_29611 = (state_29634[(7)]);
var inst_29611__$1 = (state_29634[(2)]);
var inst_29612 = (inst_29611__$1 == null);
var state_29634__$1 = (function (){var statearr_29638 = state_29634;
(statearr_29638[(7)] = inst_29611__$1);

return statearr_29638;
})();
if(cljs.core.truth_(inst_29612)){
var statearr_29639_29666 = state_29634__$1;
(statearr_29639_29666[(1)] = (5));

} else {
var statearr_29640_29667 = state_29634__$1;
(statearr_29640_29667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (13))){
var state_29634__$1 = state_29634;
var statearr_29641_29668 = state_29634__$1;
(statearr_29641_29668[(2)] = null);

(statearr_29641_29668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (6))){
var inst_29611 = (state_29634[(7)]);
var inst_29617 = p.call(null,inst_29611);
var state_29634__$1 = state_29634;
if(cljs.core.truth_(inst_29617)){
var statearr_29642_29669 = state_29634__$1;
(statearr_29642_29669[(1)] = (9));

} else {
var statearr_29643_29670 = state_29634__$1;
(statearr_29643_29670[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (3))){
var inst_29632 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29634__$1,inst_29632);
} else {
if((state_val_29635 === (12))){
var state_29634__$1 = state_29634;
var statearr_29644_29671 = state_29634__$1;
(statearr_29644_29671[(2)] = null);

(statearr_29644_29671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (2))){
var state_29634__$1 = state_29634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29634__$1,(4),ch);
} else {
if((state_val_29635 === (11))){
var inst_29611 = (state_29634[(7)]);
var inst_29621 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29634__$1,(8),inst_29621,inst_29611);
} else {
if((state_val_29635 === (9))){
var state_29634__$1 = state_29634;
var statearr_29645_29672 = state_29634__$1;
(statearr_29645_29672[(2)] = tc);

(statearr_29645_29672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (5))){
var inst_29614 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29615 = cljs.core.async.close_BANG_.call(null,fc);
var state_29634__$1 = (function (){var statearr_29646 = state_29634;
(statearr_29646[(8)] = inst_29614);

return statearr_29646;
})();
var statearr_29647_29673 = state_29634__$1;
(statearr_29647_29673[(2)] = inst_29615);

(statearr_29647_29673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (14))){
var inst_29628 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
var statearr_29648_29674 = state_29634__$1;
(statearr_29648_29674[(2)] = inst_29628);

(statearr_29648_29674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (10))){
var state_29634__$1 = state_29634;
var statearr_29649_29675 = state_29634__$1;
(statearr_29649_29675[(2)] = fc);

(statearr_29649_29675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29635 === (8))){
var inst_29623 = (state_29634[(2)]);
var state_29634__$1 = state_29634;
if(cljs.core.truth_(inst_29623)){
var statearr_29650_29676 = state_29634__$1;
(statearr_29650_29676[(1)] = (12));

} else {
var statearr_29651_29677 = state_29634__$1;
(statearr_29651_29677[(1)] = (13));

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
});})(c__28977__auto___29663,tc,fc))
;
return ((function (switch__28865__auto__,c__28977__auto___29663,tc,fc){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_29655 = [null,null,null,null,null,null,null,null,null];
(statearr_29655[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_29655[(1)] = (1));

return statearr_29655;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_29634){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_29634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e29656){if((e29656 instanceof Object)){
var ex__28869__auto__ = e29656;
var statearr_29657_29678 = state_29634;
(statearr_29657_29678[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29679 = state_29634;
state_29634 = G__29679;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_29634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_29634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___29663,tc,fc))
})();
var state__28979__auto__ = (function (){var statearr_29658 = f__28978__auto__.call(null);
(statearr_29658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___29663);

return statearr_29658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___29663,tc,fc))
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
var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__){
return (function (state_29743){
var state_val_29744 = (state_29743[(1)]);
if((state_val_29744 === (7))){
var inst_29739 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
var statearr_29745_29766 = state_29743__$1;
(statearr_29745_29766[(2)] = inst_29739);

(statearr_29745_29766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (1))){
var inst_29723 = init;
var state_29743__$1 = (function (){var statearr_29746 = state_29743;
(statearr_29746[(7)] = inst_29723);

return statearr_29746;
})();
var statearr_29747_29767 = state_29743__$1;
(statearr_29747_29767[(2)] = null);

(statearr_29747_29767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (4))){
var inst_29726 = (state_29743[(8)]);
var inst_29726__$1 = (state_29743[(2)]);
var inst_29727 = (inst_29726__$1 == null);
var state_29743__$1 = (function (){var statearr_29748 = state_29743;
(statearr_29748[(8)] = inst_29726__$1);

return statearr_29748;
})();
if(cljs.core.truth_(inst_29727)){
var statearr_29749_29768 = state_29743__$1;
(statearr_29749_29768[(1)] = (5));

} else {
var statearr_29750_29769 = state_29743__$1;
(statearr_29750_29769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (6))){
var inst_29726 = (state_29743[(8)]);
var inst_29723 = (state_29743[(7)]);
var inst_29730 = (state_29743[(9)]);
var inst_29730__$1 = f.call(null,inst_29723,inst_29726);
var inst_29731 = cljs.core.reduced_QMARK_.call(null,inst_29730__$1);
var state_29743__$1 = (function (){var statearr_29751 = state_29743;
(statearr_29751[(9)] = inst_29730__$1);

return statearr_29751;
})();
if(inst_29731){
var statearr_29752_29770 = state_29743__$1;
(statearr_29752_29770[(1)] = (8));

} else {
var statearr_29753_29771 = state_29743__$1;
(statearr_29753_29771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (3))){
var inst_29741 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29743__$1,inst_29741);
} else {
if((state_val_29744 === (2))){
var state_29743__$1 = state_29743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29743__$1,(4),ch);
} else {
if((state_val_29744 === (9))){
var inst_29730 = (state_29743[(9)]);
var inst_29723 = inst_29730;
var state_29743__$1 = (function (){var statearr_29754 = state_29743;
(statearr_29754[(7)] = inst_29723);

return statearr_29754;
})();
var statearr_29755_29772 = state_29743__$1;
(statearr_29755_29772[(2)] = null);

(statearr_29755_29772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (5))){
var inst_29723 = (state_29743[(7)]);
var state_29743__$1 = state_29743;
var statearr_29756_29773 = state_29743__$1;
(statearr_29756_29773[(2)] = inst_29723);

(statearr_29756_29773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (10))){
var inst_29737 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
var statearr_29757_29774 = state_29743__$1;
(statearr_29757_29774[(2)] = inst_29737);

(statearr_29757_29774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (8))){
var inst_29730 = (state_29743[(9)]);
var inst_29733 = cljs.core.deref.call(null,inst_29730);
var state_29743__$1 = state_29743;
var statearr_29758_29775 = state_29743__$1;
(statearr_29758_29775[(2)] = inst_29733);

(statearr_29758_29775[(1)] = (10));


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
});})(c__28977__auto__))
;
return ((function (switch__28865__auto__,c__28977__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28866__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28866__auto____0 = (function (){
var statearr_29762 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29762[(0)] = cljs$core$async$reduce_$_state_machine__28866__auto__);

(statearr_29762[(1)] = (1));

return statearr_29762;
});
var cljs$core$async$reduce_$_state_machine__28866__auto____1 = (function (state_29743){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_29743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e29763){if((e29763 instanceof Object)){
var ex__28869__auto__ = e29763;
var statearr_29764_29776 = state_29743;
(statearr_29764_29776[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29777 = state_29743;
state_29743 = G__29777;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28866__auto__ = function(state_29743){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28866__auto____1.call(this,state_29743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28866__auto____0;
cljs$core$async$reduce_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28866__auto____1;
return cljs$core$async$reduce_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__))
})();
var state__28979__auto__ = (function (){var statearr_29765 = f__28978__auto__.call(null);
(statearr_29765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_29765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__))
);

return c__28977__auto__;
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
var args29778 = [];
var len__25923__auto___29830 = arguments.length;
var i__25924__auto___29831 = (0);
while(true){
if((i__25924__auto___29831 < len__25923__auto___29830)){
args29778.push((arguments[i__25924__auto___29831]));

var G__29832 = (i__25924__auto___29831 + (1));
i__25924__auto___29831 = G__29832;
continue;
} else {
}
break;
}

var G__29780 = args29778.length;
switch (G__29780) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29778.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__){
return (function (state_29805){
var state_val_29806 = (state_29805[(1)]);
if((state_val_29806 === (7))){
var inst_29787 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29807_29834 = state_29805__$1;
(statearr_29807_29834[(2)] = inst_29787);

(statearr_29807_29834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (1))){
var inst_29781 = cljs.core.seq.call(null,coll);
var inst_29782 = inst_29781;
var state_29805__$1 = (function (){var statearr_29808 = state_29805;
(statearr_29808[(7)] = inst_29782);

return statearr_29808;
})();
var statearr_29809_29835 = state_29805__$1;
(statearr_29809_29835[(2)] = null);

(statearr_29809_29835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (4))){
var inst_29782 = (state_29805[(7)]);
var inst_29785 = cljs.core.first.call(null,inst_29782);
var state_29805__$1 = state_29805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29805__$1,(7),ch,inst_29785);
} else {
if((state_val_29806 === (13))){
var inst_29799 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29810_29836 = state_29805__$1;
(statearr_29810_29836[(2)] = inst_29799);

(statearr_29810_29836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (6))){
var inst_29790 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29790)){
var statearr_29811_29837 = state_29805__$1;
(statearr_29811_29837[(1)] = (8));

} else {
var statearr_29812_29838 = state_29805__$1;
(statearr_29812_29838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (3))){
var inst_29803 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29805__$1,inst_29803);
} else {
if((state_val_29806 === (12))){
var state_29805__$1 = state_29805;
var statearr_29813_29839 = state_29805__$1;
(statearr_29813_29839[(2)] = null);

(statearr_29813_29839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (2))){
var inst_29782 = (state_29805[(7)]);
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29782)){
var statearr_29814_29840 = state_29805__$1;
(statearr_29814_29840[(1)] = (4));

} else {
var statearr_29815_29841 = state_29805__$1;
(statearr_29815_29841[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (11))){
var inst_29796 = cljs.core.async.close_BANG_.call(null,ch);
var state_29805__$1 = state_29805;
var statearr_29816_29842 = state_29805__$1;
(statearr_29816_29842[(2)] = inst_29796);

(statearr_29816_29842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (9))){
var state_29805__$1 = state_29805;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29817_29843 = state_29805__$1;
(statearr_29817_29843[(1)] = (11));

} else {
var statearr_29818_29844 = state_29805__$1;
(statearr_29818_29844[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (5))){
var inst_29782 = (state_29805[(7)]);
var state_29805__$1 = state_29805;
var statearr_29819_29845 = state_29805__$1;
(statearr_29819_29845[(2)] = inst_29782);

(statearr_29819_29845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (10))){
var inst_29801 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29820_29846 = state_29805__$1;
(statearr_29820_29846[(2)] = inst_29801);

(statearr_29820_29846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (8))){
var inst_29782 = (state_29805[(7)]);
var inst_29792 = cljs.core.next.call(null,inst_29782);
var inst_29782__$1 = inst_29792;
var state_29805__$1 = (function (){var statearr_29821 = state_29805;
(statearr_29821[(7)] = inst_29782__$1);

return statearr_29821;
})();
var statearr_29822_29847 = state_29805__$1;
(statearr_29822_29847[(2)] = null);

(statearr_29822_29847[(1)] = (2));


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
});})(c__28977__auto__))
;
return ((function (switch__28865__auto__,c__28977__auto__){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_29826 = [null,null,null,null,null,null,null,null];
(statearr_29826[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_29826[(1)] = (1));

return statearr_29826;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_29805){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_29805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e29827){if((e29827 instanceof Object)){
var ex__28869__auto__ = e29827;
var statearr_29828_29848 = state_29805;
(statearr_29828_29848[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29849 = state_29805;
state_29805 = G__29849;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_29805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_29805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__))
})();
var state__28979__auto__ = (function (){var statearr_29829 = f__28978__auto__.call(null);
(statearr_29829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_29829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__))
);

return c__28977__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async30075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30075 = (function (mult,ch,cs,meta30076){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30076 = meta30076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30077,meta30076__$1){
var self__ = this;
var _30077__$1 = this;
return (new cljs.core.async.t_cljs$core$async30075(self__.mult,self__.ch,self__.cs,meta30076__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30077){
var self__ = this;
var _30077__$1 = this;
return self__.meta30076;
});})(cs))
;

cljs.core.async.t_cljs$core$async30075.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30075.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30075.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30075.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30075.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30075.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30075.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30076","meta30076",1298103339,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30075.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30075";

cljs.core.async.t_cljs$core$async30075.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30075");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30075 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30075(mult__$1,ch__$1,cs__$1,meta30076){
return (new cljs.core.async.t_cljs$core$async30075(mult__$1,ch__$1,cs__$1,meta30076));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30075(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28977__auto___30300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___30300,cs,m,dchan,dctr,done){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___30300,cs,m,dchan,dctr,done){
return (function (state_30212){
var state_val_30213 = (state_30212[(1)]);
if((state_val_30213 === (7))){
var inst_30208 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30214_30301 = state_30212__$1;
(statearr_30214_30301[(2)] = inst_30208);

(statearr_30214_30301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (20))){
var inst_30111 = (state_30212[(7)]);
var inst_30123 = cljs.core.first.call(null,inst_30111);
var inst_30124 = cljs.core.nth.call(null,inst_30123,(0),null);
var inst_30125 = cljs.core.nth.call(null,inst_30123,(1),null);
var state_30212__$1 = (function (){var statearr_30215 = state_30212;
(statearr_30215[(8)] = inst_30124);

return statearr_30215;
})();
if(cljs.core.truth_(inst_30125)){
var statearr_30216_30302 = state_30212__$1;
(statearr_30216_30302[(1)] = (22));

} else {
var statearr_30217_30303 = state_30212__$1;
(statearr_30217_30303[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (27))){
var inst_30080 = (state_30212[(9)]);
var inst_30153 = (state_30212[(10)]);
var inst_30160 = (state_30212[(11)]);
var inst_30155 = (state_30212[(12)]);
var inst_30160__$1 = cljs.core._nth.call(null,inst_30153,inst_30155);
var inst_30161 = cljs.core.async.put_BANG_.call(null,inst_30160__$1,inst_30080,done);
var state_30212__$1 = (function (){var statearr_30218 = state_30212;
(statearr_30218[(11)] = inst_30160__$1);

return statearr_30218;
})();
if(cljs.core.truth_(inst_30161)){
var statearr_30219_30304 = state_30212__$1;
(statearr_30219_30304[(1)] = (30));

} else {
var statearr_30220_30305 = state_30212__$1;
(statearr_30220_30305[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (1))){
var state_30212__$1 = state_30212;
var statearr_30221_30306 = state_30212__$1;
(statearr_30221_30306[(2)] = null);

(statearr_30221_30306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (24))){
var inst_30111 = (state_30212[(7)]);
var inst_30130 = (state_30212[(2)]);
var inst_30131 = cljs.core.next.call(null,inst_30111);
var inst_30089 = inst_30131;
var inst_30090 = null;
var inst_30091 = (0);
var inst_30092 = (0);
var state_30212__$1 = (function (){var statearr_30222 = state_30212;
(statearr_30222[(13)] = inst_30090);

(statearr_30222[(14)] = inst_30130);

(statearr_30222[(15)] = inst_30089);

(statearr_30222[(16)] = inst_30092);

(statearr_30222[(17)] = inst_30091);

return statearr_30222;
})();
var statearr_30223_30307 = state_30212__$1;
(statearr_30223_30307[(2)] = null);

(statearr_30223_30307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (39))){
var state_30212__$1 = state_30212;
var statearr_30227_30308 = state_30212__$1;
(statearr_30227_30308[(2)] = null);

(statearr_30227_30308[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (4))){
var inst_30080 = (state_30212[(9)]);
var inst_30080__$1 = (state_30212[(2)]);
var inst_30081 = (inst_30080__$1 == null);
var state_30212__$1 = (function (){var statearr_30228 = state_30212;
(statearr_30228[(9)] = inst_30080__$1);

return statearr_30228;
})();
if(cljs.core.truth_(inst_30081)){
var statearr_30229_30309 = state_30212__$1;
(statearr_30229_30309[(1)] = (5));

} else {
var statearr_30230_30310 = state_30212__$1;
(statearr_30230_30310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (15))){
var inst_30090 = (state_30212[(13)]);
var inst_30089 = (state_30212[(15)]);
var inst_30092 = (state_30212[(16)]);
var inst_30091 = (state_30212[(17)]);
var inst_30107 = (state_30212[(2)]);
var inst_30108 = (inst_30092 + (1));
var tmp30224 = inst_30090;
var tmp30225 = inst_30089;
var tmp30226 = inst_30091;
var inst_30089__$1 = tmp30225;
var inst_30090__$1 = tmp30224;
var inst_30091__$1 = tmp30226;
var inst_30092__$1 = inst_30108;
var state_30212__$1 = (function (){var statearr_30231 = state_30212;
(statearr_30231[(13)] = inst_30090__$1);

(statearr_30231[(15)] = inst_30089__$1);

(statearr_30231[(16)] = inst_30092__$1);

(statearr_30231[(17)] = inst_30091__$1);

(statearr_30231[(18)] = inst_30107);

return statearr_30231;
})();
var statearr_30232_30311 = state_30212__$1;
(statearr_30232_30311[(2)] = null);

(statearr_30232_30311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (21))){
var inst_30134 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30236_30312 = state_30212__$1;
(statearr_30236_30312[(2)] = inst_30134);

(statearr_30236_30312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (31))){
var inst_30160 = (state_30212[(11)]);
var inst_30164 = done.call(null,null);
var inst_30165 = cljs.core.async.untap_STAR_.call(null,m,inst_30160);
var state_30212__$1 = (function (){var statearr_30237 = state_30212;
(statearr_30237[(19)] = inst_30164);

return statearr_30237;
})();
var statearr_30238_30313 = state_30212__$1;
(statearr_30238_30313[(2)] = inst_30165);

(statearr_30238_30313[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (32))){
var inst_30154 = (state_30212[(20)]);
var inst_30152 = (state_30212[(21)]);
var inst_30153 = (state_30212[(10)]);
var inst_30155 = (state_30212[(12)]);
var inst_30167 = (state_30212[(2)]);
var inst_30168 = (inst_30155 + (1));
var tmp30233 = inst_30154;
var tmp30234 = inst_30152;
var tmp30235 = inst_30153;
var inst_30152__$1 = tmp30234;
var inst_30153__$1 = tmp30235;
var inst_30154__$1 = tmp30233;
var inst_30155__$1 = inst_30168;
var state_30212__$1 = (function (){var statearr_30239 = state_30212;
(statearr_30239[(20)] = inst_30154__$1);

(statearr_30239[(21)] = inst_30152__$1);

(statearr_30239[(22)] = inst_30167);

(statearr_30239[(10)] = inst_30153__$1);

(statearr_30239[(12)] = inst_30155__$1);

return statearr_30239;
})();
var statearr_30240_30314 = state_30212__$1;
(statearr_30240_30314[(2)] = null);

(statearr_30240_30314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (40))){
var inst_30180 = (state_30212[(23)]);
var inst_30184 = done.call(null,null);
var inst_30185 = cljs.core.async.untap_STAR_.call(null,m,inst_30180);
var state_30212__$1 = (function (){var statearr_30241 = state_30212;
(statearr_30241[(24)] = inst_30184);

return statearr_30241;
})();
var statearr_30242_30315 = state_30212__$1;
(statearr_30242_30315[(2)] = inst_30185);

(statearr_30242_30315[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (33))){
var inst_30171 = (state_30212[(25)]);
var inst_30173 = cljs.core.chunked_seq_QMARK_.call(null,inst_30171);
var state_30212__$1 = state_30212;
if(inst_30173){
var statearr_30243_30316 = state_30212__$1;
(statearr_30243_30316[(1)] = (36));

} else {
var statearr_30244_30317 = state_30212__$1;
(statearr_30244_30317[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (13))){
var inst_30101 = (state_30212[(26)]);
var inst_30104 = cljs.core.async.close_BANG_.call(null,inst_30101);
var state_30212__$1 = state_30212;
var statearr_30245_30318 = state_30212__$1;
(statearr_30245_30318[(2)] = inst_30104);

(statearr_30245_30318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (22))){
var inst_30124 = (state_30212[(8)]);
var inst_30127 = cljs.core.async.close_BANG_.call(null,inst_30124);
var state_30212__$1 = state_30212;
var statearr_30246_30319 = state_30212__$1;
(statearr_30246_30319[(2)] = inst_30127);

(statearr_30246_30319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (36))){
var inst_30171 = (state_30212[(25)]);
var inst_30175 = cljs.core.chunk_first.call(null,inst_30171);
var inst_30176 = cljs.core.chunk_rest.call(null,inst_30171);
var inst_30177 = cljs.core.count.call(null,inst_30175);
var inst_30152 = inst_30176;
var inst_30153 = inst_30175;
var inst_30154 = inst_30177;
var inst_30155 = (0);
var state_30212__$1 = (function (){var statearr_30247 = state_30212;
(statearr_30247[(20)] = inst_30154);

(statearr_30247[(21)] = inst_30152);

(statearr_30247[(10)] = inst_30153);

(statearr_30247[(12)] = inst_30155);

return statearr_30247;
})();
var statearr_30248_30320 = state_30212__$1;
(statearr_30248_30320[(2)] = null);

(statearr_30248_30320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (41))){
var inst_30171 = (state_30212[(25)]);
var inst_30187 = (state_30212[(2)]);
var inst_30188 = cljs.core.next.call(null,inst_30171);
var inst_30152 = inst_30188;
var inst_30153 = null;
var inst_30154 = (0);
var inst_30155 = (0);
var state_30212__$1 = (function (){var statearr_30249 = state_30212;
(statearr_30249[(20)] = inst_30154);

(statearr_30249[(27)] = inst_30187);

(statearr_30249[(21)] = inst_30152);

(statearr_30249[(10)] = inst_30153);

(statearr_30249[(12)] = inst_30155);

return statearr_30249;
})();
var statearr_30250_30321 = state_30212__$1;
(statearr_30250_30321[(2)] = null);

(statearr_30250_30321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (43))){
var state_30212__$1 = state_30212;
var statearr_30251_30322 = state_30212__$1;
(statearr_30251_30322[(2)] = null);

(statearr_30251_30322[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (29))){
var inst_30196 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30252_30323 = state_30212__$1;
(statearr_30252_30323[(2)] = inst_30196);

(statearr_30252_30323[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (44))){
var inst_30205 = (state_30212[(2)]);
var state_30212__$1 = (function (){var statearr_30253 = state_30212;
(statearr_30253[(28)] = inst_30205);

return statearr_30253;
})();
var statearr_30254_30324 = state_30212__$1;
(statearr_30254_30324[(2)] = null);

(statearr_30254_30324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (6))){
var inst_30144 = (state_30212[(29)]);
var inst_30143 = cljs.core.deref.call(null,cs);
var inst_30144__$1 = cljs.core.keys.call(null,inst_30143);
var inst_30145 = cljs.core.count.call(null,inst_30144__$1);
var inst_30146 = cljs.core.reset_BANG_.call(null,dctr,inst_30145);
var inst_30151 = cljs.core.seq.call(null,inst_30144__$1);
var inst_30152 = inst_30151;
var inst_30153 = null;
var inst_30154 = (0);
var inst_30155 = (0);
var state_30212__$1 = (function (){var statearr_30255 = state_30212;
(statearr_30255[(30)] = inst_30146);

(statearr_30255[(20)] = inst_30154);

(statearr_30255[(29)] = inst_30144__$1);

(statearr_30255[(21)] = inst_30152);

(statearr_30255[(10)] = inst_30153);

(statearr_30255[(12)] = inst_30155);

return statearr_30255;
})();
var statearr_30256_30325 = state_30212__$1;
(statearr_30256_30325[(2)] = null);

(statearr_30256_30325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (28))){
var inst_30171 = (state_30212[(25)]);
var inst_30152 = (state_30212[(21)]);
var inst_30171__$1 = cljs.core.seq.call(null,inst_30152);
var state_30212__$1 = (function (){var statearr_30257 = state_30212;
(statearr_30257[(25)] = inst_30171__$1);

return statearr_30257;
})();
if(inst_30171__$1){
var statearr_30258_30326 = state_30212__$1;
(statearr_30258_30326[(1)] = (33));

} else {
var statearr_30259_30327 = state_30212__$1;
(statearr_30259_30327[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (25))){
var inst_30154 = (state_30212[(20)]);
var inst_30155 = (state_30212[(12)]);
var inst_30157 = (inst_30155 < inst_30154);
var inst_30158 = inst_30157;
var state_30212__$1 = state_30212;
if(cljs.core.truth_(inst_30158)){
var statearr_30260_30328 = state_30212__$1;
(statearr_30260_30328[(1)] = (27));

} else {
var statearr_30261_30329 = state_30212__$1;
(statearr_30261_30329[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (34))){
var state_30212__$1 = state_30212;
var statearr_30262_30330 = state_30212__$1;
(statearr_30262_30330[(2)] = null);

(statearr_30262_30330[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (17))){
var state_30212__$1 = state_30212;
var statearr_30263_30331 = state_30212__$1;
(statearr_30263_30331[(2)] = null);

(statearr_30263_30331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (3))){
var inst_30210 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30212__$1,inst_30210);
} else {
if((state_val_30213 === (12))){
var inst_30139 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30264_30332 = state_30212__$1;
(statearr_30264_30332[(2)] = inst_30139);

(statearr_30264_30332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (2))){
var state_30212__$1 = state_30212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30212__$1,(4),ch);
} else {
if((state_val_30213 === (23))){
var state_30212__$1 = state_30212;
var statearr_30265_30333 = state_30212__$1;
(statearr_30265_30333[(2)] = null);

(statearr_30265_30333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (35))){
var inst_30194 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30266_30334 = state_30212__$1;
(statearr_30266_30334[(2)] = inst_30194);

(statearr_30266_30334[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (19))){
var inst_30111 = (state_30212[(7)]);
var inst_30115 = cljs.core.chunk_first.call(null,inst_30111);
var inst_30116 = cljs.core.chunk_rest.call(null,inst_30111);
var inst_30117 = cljs.core.count.call(null,inst_30115);
var inst_30089 = inst_30116;
var inst_30090 = inst_30115;
var inst_30091 = inst_30117;
var inst_30092 = (0);
var state_30212__$1 = (function (){var statearr_30267 = state_30212;
(statearr_30267[(13)] = inst_30090);

(statearr_30267[(15)] = inst_30089);

(statearr_30267[(16)] = inst_30092);

(statearr_30267[(17)] = inst_30091);

return statearr_30267;
})();
var statearr_30268_30335 = state_30212__$1;
(statearr_30268_30335[(2)] = null);

(statearr_30268_30335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (11))){
var inst_30089 = (state_30212[(15)]);
var inst_30111 = (state_30212[(7)]);
var inst_30111__$1 = cljs.core.seq.call(null,inst_30089);
var state_30212__$1 = (function (){var statearr_30269 = state_30212;
(statearr_30269[(7)] = inst_30111__$1);

return statearr_30269;
})();
if(inst_30111__$1){
var statearr_30270_30336 = state_30212__$1;
(statearr_30270_30336[(1)] = (16));

} else {
var statearr_30271_30337 = state_30212__$1;
(statearr_30271_30337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (9))){
var inst_30141 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30272_30338 = state_30212__$1;
(statearr_30272_30338[(2)] = inst_30141);

(statearr_30272_30338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (5))){
var inst_30087 = cljs.core.deref.call(null,cs);
var inst_30088 = cljs.core.seq.call(null,inst_30087);
var inst_30089 = inst_30088;
var inst_30090 = null;
var inst_30091 = (0);
var inst_30092 = (0);
var state_30212__$1 = (function (){var statearr_30273 = state_30212;
(statearr_30273[(13)] = inst_30090);

(statearr_30273[(15)] = inst_30089);

(statearr_30273[(16)] = inst_30092);

(statearr_30273[(17)] = inst_30091);

return statearr_30273;
})();
var statearr_30274_30339 = state_30212__$1;
(statearr_30274_30339[(2)] = null);

(statearr_30274_30339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (14))){
var state_30212__$1 = state_30212;
var statearr_30275_30340 = state_30212__$1;
(statearr_30275_30340[(2)] = null);

(statearr_30275_30340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (45))){
var inst_30202 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30276_30341 = state_30212__$1;
(statearr_30276_30341[(2)] = inst_30202);

(statearr_30276_30341[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (26))){
var inst_30144 = (state_30212[(29)]);
var inst_30198 = (state_30212[(2)]);
var inst_30199 = cljs.core.seq.call(null,inst_30144);
var state_30212__$1 = (function (){var statearr_30277 = state_30212;
(statearr_30277[(31)] = inst_30198);

return statearr_30277;
})();
if(inst_30199){
var statearr_30278_30342 = state_30212__$1;
(statearr_30278_30342[(1)] = (42));

} else {
var statearr_30279_30343 = state_30212__$1;
(statearr_30279_30343[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (16))){
var inst_30111 = (state_30212[(7)]);
var inst_30113 = cljs.core.chunked_seq_QMARK_.call(null,inst_30111);
var state_30212__$1 = state_30212;
if(inst_30113){
var statearr_30280_30344 = state_30212__$1;
(statearr_30280_30344[(1)] = (19));

} else {
var statearr_30281_30345 = state_30212__$1;
(statearr_30281_30345[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (38))){
var inst_30191 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30282_30346 = state_30212__$1;
(statearr_30282_30346[(2)] = inst_30191);

(statearr_30282_30346[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (30))){
var state_30212__$1 = state_30212;
var statearr_30283_30347 = state_30212__$1;
(statearr_30283_30347[(2)] = null);

(statearr_30283_30347[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (10))){
var inst_30090 = (state_30212[(13)]);
var inst_30092 = (state_30212[(16)]);
var inst_30100 = cljs.core._nth.call(null,inst_30090,inst_30092);
var inst_30101 = cljs.core.nth.call(null,inst_30100,(0),null);
var inst_30102 = cljs.core.nth.call(null,inst_30100,(1),null);
var state_30212__$1 = (function (){var statearr_30284 = state_30212;
(statearr_30284[(26)] = inst_30101);

return statearr_30284;
})();
if(cljs.core.truth_(inst_30102)){
var statearr_30285_30348 = state_30212__$1;
(statearr_30285_30348[(1)] = (13));

} else {
var statearr_30286_30349 = state_30212__$1;
(statearr_30286_30349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (18))){
var inst_30137 = (state_30212[(2)]);
var state_30212__$1 = state_30212;
var statearr_30287_30350 = state_30212__$1;
(statearr_30287_30350[(2)] = inst_30137);

(statearr_30287_30350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (42))){
var state_30212__$1 = state_30212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30212__$1,(45),dchan);
} else {
if((state_val_30213 === (37))){
var inst_30180 = (state_30212[(23)]);
var inst_30171 = (state_30212[(25)]);
var inst_30080 = (state_30212[(9)]);
var inst_30180__$1 = cljs.core.first.call(null,inst_30171);
var inst_30181 = cljs.core.async.put_BANG_.call(null,inst_30180__$1,inst_30080,done);
var state_30212__$1 = (function (){var statearr_30288 = state_30212;
(statearr_30288[(23)] = inst_30180__$1);

return statearr_30288;
})();
if(cljs.core.truth_(inst_30181)){
var statearr_30289_30351 = state_30212__$1;
(statearr_30289_30351[(1)] = (39));

} else {
var statearr_30290_30352 = state_30212__$1;
(statearr_30290_30352[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30213 === (8))){
var inst_30092 = (state_30212[(16)]);
var inst_30091 = (state_30212[(17)]);
var inst_30094 = (inst_30092 < inst_30091);
var inst_30095 = inst_30094;
var state_30212__$1 = state_30212;
if(cljs.core.truth_(inst_30095)){
var statearr_30291_30353 = state_30212__$1;
(statearr_30291_30353[(1)] = (10));

} else {
var statearr_30292_30354 = state_30212__$1;
(statearr_30292_30354[(1)] = (11));

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
});})(c__28977__auto___30300,cs,m,dchan,dctr,done))
;
return ((function (switch__28865__auto__,c__28977__auto___30300,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28866__auto__ = null;
var cljs$core$async$mult_$_state_machine__28866__auto____0 = (function (){
var statearr_30296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30296[(0)] = cljs$core$async$mult_$_state_machine__28866__auto__);

(statearr_30296[(1)] = (1));

return statearr_30296;
});
var cljs$core$async$mult_$_state_machine__28866__auto____1 = (function (state_30212){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_30212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e30297){if((e30297 instanceof Object)){
var ex__28869__auto__ = e30297;
var statearr_30298_30355 = state_30212;
(statearr_30298_30355[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30356 = state_30212;
state_30212 = G__30356;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28866__auto__ = function(state_30212){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28866__auto____1.call(this,state_30212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28866__auto____0;
cljs$core$async$mult_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28866__auto____1;
return cljs$core$async$mult_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___30300,cs,m,dchan,dctr,done))
})();
var state__28979__auto__ = (function (){var statearr_30299 = f__28978__auto__.call(null);
(statearr_30299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___30300);

return statearr_30299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___30300,cs,m,dchan,dctr,done))
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
var args30357 = [];
var len__25923__auto___30360 = arguments.length;
var i__25924__auto___30361 = (0);
while(true){
if((i__25924__auto___30361 < len__25923__auto___30360)){
args30357.push((arguments[i__25924__auto___30361]));

var G__30362 = (i__25924__auto___30361 + (1));
i__25924__auto___30361 = G__30362;
continue;
} else {
}
break;
}

var G__30359 = args30357.length;
switch (G__30359) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30357.length)].join('')));

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
var len__25923__auto___30374 = arguments.length;
var i__25924__auto___30375 = (0);
while(true){
if((i__25924__auto___30375 < len__25923__auto___30374)){
args__25930__auto__.push((arguments[i__25924__auto___30375]));

var G__30376 = (i__25924__auto___30375 + (1));
i__25924__auto___30375 = G__30376;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30368){
var map__30369 = p__30368;
var map__30369__$1 = ((((!((map__30369 == null)))?((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var opts = map__30369__$1;
var statearr_30371_30377 = state;
(statearr_30371_30377[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30369,map__30369__$1,opts){
return (function (val){
var statearr_30372_30378 = state;
(statearr_30372_30378[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30369,map__30369__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30373_30379 = state;
(statearr_30373_30379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30364){
var G__30365 = cljs.core.first.call(null,seq30364);
var seq30364__$1 = cljs.core.next.call(null,seq30364);
var G__30366 = cljs.core.first.call(null,seq30364__$1);
var seq30364__$2 = cljs.core.next.call(null,seq30364__$1);
var G__30367 = cljs.core.first.call(null,seq30364__$2);
var seq30364__$3 = cljs.core.next.call(null,seq30364__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30365,G__30366,G__30367,seq30364__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30545 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30546){
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
this.meta30546 = meta30546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30547,meta30546__$1){
var self__ = this;
var _30547__$1 = this;
return (new cljs.core.async.t_cljs$core$async30545(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30546__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30547){
var self__ = this;
var _30547__$1 = this;
return self__.meta30546;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30545.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30545.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30545.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30545.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30545.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30545.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30545.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30545.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30545.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30546","meta30546",-1270785690,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30545";

cljs.core.async.t_cljs$core$async30545.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30545");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30545 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30545(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30546){
return (new cljs.core.async.t_cljs$core$async30545(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30546));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30545(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28977__auto___30710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___30710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___30710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30647){
var state_val_30648 = (state_30647[(1)]);
if((state_val_30648 === (7))){
var inst_30563 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
var statearr_30649_30711 = state_30647__$1;
(statearr_30649_30711[(2)] = inst_30563);

(statearr_30649_30711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (20))){
var inst_30575 = (state_30647[(7)]);
var state_30647__$1 = state_30647;
var statearr_30650_30712 = state_30647__$1;
(statearr_30650_30712[(2)] = inst_30575);

(statearr_30650_30712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (27))){
var state_30647__$1 = state_30647;
var statearr_30651_30713 = state_30647__$1;
(statearr_30651_30713[(2)] = null);

(statearr_30651_30713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (1))){
var inst_30551 = (state_30647[(8)]);
var inst_30551__$1 = calc_state.call(null);
var inst_30553 = (inst_30551__$1 == null);
var inst_30554 = cljs.core.not.call(null,inst_30553);
var state_30647__$1 = (function (){var statearr_30652 = state_30647;
(statearr_30652[(8)] = inst_30551__$1);

return statearr_30652;
})();
if(inst_30554){
var statearr_30653_30714 = state_30647__$1;
(statearr_30653_30714[(1)] = (2));

} else {
var statearr_30654_30715 = state_30647__$1;
(statearr_30654_30715[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (24))){
var inst_30598 = (state_30647[(9)]);
var inst_30621 = (state_30647[(10)]);
var inst_30607 = (state_30647[(11)]);
var inst_30621__$1 = inst_30598.call(null,inst_30607);
var state_30647__$1 = (function (){var statearr_30655 = state_30647;
(statearr_30655[(10)] = inst_30621__$1);

return statearr_30655;
})();
if(cljs.core.truth_(inst_30621__$1)){
var statearr_30656_30716 = state_30647__$1;
(statearr_30656_30716[(1)] = (29));

} else {
var statearr_30657_30717 = state_30647__$1;
(statearr_30657_30717[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (4))){
var inst_30566 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
if(cljs.core.truth_(inst_30566)){
var statearr_30658_30718 = state_30647__$1;
(statearr_30658_30718[(1)] = (8));

} else {
var statearr_30659_30719 = state_30647__$1;
(statearr_30659_30719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (15))){
var inst_30592 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
if(cljs.core.truth_(inst_30592)){
var statearr_30660_30720 = state_30647__$1;
(statearr_30660_30720[(1)] = (19));

} else {
var statearr_30661_30721 = state_30647__$1;
(statearr_30661_30721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (21))){
var inst_30597 = (state_30647[(12)]);
var inst_30597__$1 = (state_30647[(2)]);
var inst_30598 = cljs.core.get.call(null,inst_30597__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30599 = cljs.core.get.call(null,inst_30597__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30600 = cljs.core.get.call(null,inst_30597__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30647__$1 = (function (){var statearr_30662 = state_30647;
(statearr_30662[(9)] = inst_30598);

(statearr_30662[(12)] = inst_30597__$1);

(statearr_30662[(13)] = inst_30599);

return statearr_30662;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30647__$1,(22),inst_30600);
} else {
if((state_val_30648 === (31))){
var inst_30629 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
if(cljs.core.truth_(inst_30629)){
var statearr_30663_30722 = state_30647__$1;
(statearr_30663_30722[(1)] = (32));

} else {
var statearr_30664_30723 = state_30647__$1;
(statearr_30664_30723[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (32))){
var inst_30606 = (state_30647[(14)]);
var state_30647__$1 = state_30647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30647__$1,(35),out,inst_30606);
} else {
if((state_val_30648 === (33))){
var inst_30597 = (state_30647[(12)]);
var inst_30575 = inst_30597;
var state_30647__$1 = (function (){var statearr_30665 = state_30647;
(statearr_30665[(7)] = inst_30575);

return statearr_30665;
})();
var statearr_30666_30724 = state_30647__$1;
(statearr_30666_30724[(2)] = null);

(statearr_30666_30724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (13))){
var inst_30575 = (state_30647[(7)]);
var inst_30582 = inst_30575.cljs$lang$protocol_mask$partition0$;
var inst_30583 = (inst_30582 & (64));
var inst_30584 = inst_30575.cljs$core$ISeq$;
var inst_30585 = (inst_30583) || (inst_30584);
var state_30647__$1 = state_30647;
if(cljs.core.truth_(inst_30585)){
var statearr_30667_30725 = state_30647__$1;
(statearr_30667_30725[(1)] = (16));

} else {
var statearr_30668_30726 = state_30647__$1;
(statearr_30668_30726[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (22))){
var inst_30607 = (state_30647[(11)]);
var inst_30606 = (state_30647[(14)]);
var inst_30605 = (state_30647[(2)]);
var inst_30606__$1 = cljs.core.nth.call(null,inst_30605,(0),null);
var inst_30607__$1 = cljs.core.nth.call(null,inst_30605,(1),null);
var inst_30608 = (inst_30606__$1 == null);
var inst_30609 = cljs.core._EQ_.call(null,inst_30607__$1,change);
var inst_30610 = (inst_30608) || (inst_30609);
var state_30647__$1 = (function (){var statearr_30669 = state_30647;
(statearr_30669[(11)] = inst_30607__$1);

(statearr_30669[(14)] = inst_30606__$1);

return statearr_30669;
})();
if(cljs.core.truth_(inst_30610)){
var statearr_30670_30727 = state_30647__$1;
(statearr_30670_30727[(1)] = (23));

} else {
var statearr_30671_30728 = state_30647__$1;
(statearr_30671_30728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (36))){
var inst_30597 = (state_30647[(12)]);
var inst_30575 = inst_30597;
var state_30647__$1 = (function (){var statearr_30672 = state_30647;
(statearr_30672[(7)] = inst_30575);

return statearr_30672;
})();
var statearr_30673_30729 = state_30647__$1;
(statearr_30673_30729[(2)] = null);

(statearr_30673_30729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (29))){
var inst_30621 = (state_30647[(10)]);
var state_30647__$1 = state_30647;
var statearr_30674_30730 = state_30647__$1;
(statearr_30674_30730[(2)] = inst_30621);

(statearr_30674_30730[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (6))){
var state_30647__$1 = state_30647;
var statearr_30675_30731 = state_30647__$1;
(statearr_30675_30731[(2)] = false);

(statearr_30675_30731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (28))){
var inst_30617 = (state_30647[(2)]);
var inst_30618 = calc_state.call(null);
var inst_30575 = inst_30618;
var state_30647__$1 = (function (){var statearr_30676 = state_30647;
(statearr_30676[(7)] = inst_30575);

(statearr_30676[(15)] = inst_30617);

return statearr_30676;
})();
var statearr_30677_30732 = state_30647__$1;
(statearr_30677_30732[(2)] = null);

(statearr_30677_30732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (25))){
var inst_30643 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
var statearr_30678_30733 = state_30647__$1;
(statearr_30678_30733[(2)] = inst_30643);

(statearr_30678_30733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (34))){
var inst_30641 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
var statearr_30679_30734 = state_30647__$1;
(statearr_30679_30734[(2)] = inst_30641);

(statearr_30679_30734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (17))){
var state_30647__$1 = state_30647;
var statearr_30680_30735 = state_30647__$1;
(statearr_30680_30735[(2)] = false);

(statearr_30680_30735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (3))){
var state_30647__$1 = state_30647;
var statearr_30681_30736 = state_30647__$1;
(statearr_30681_30736[(2)] = false);

(statearr_30681_30736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (12))){
var inst_30645 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30647__$1,inst_30645);
} else {
if((state_val_30648 === (2))){
var inst_30551 = (state_30647[(8)]);
var inst_30556 = inst_30551.cljs$lang$protocol_mask$partition0$;
var inst_30557 = (inst_30556 & (64));
var inst_30558 = inst_30551.cljs$core$ISeq$;
var inst_30559 = (inst_30557) || (inst_30558);
var state_30647__$1 = state_30647;
if(cljs.core.truth_(inst_30559)){
var statearr_30682_30737 = state_30647__$1;
(statearr_30682_30737[(1)] = (5));

} else {
var statearr_30683_30738 = state_30647__$1;
(statearr_30683_30738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (23))){
var inst_30606 = (state_30647[(14)]);
var inst_30612 = (inst_30606 == null);
var state_30647__$1 = state_30647;
if(cljs.core.truth_(inst_30612)){
var statearr_30684_30739 = state_30647__$1;
(statearr_30684_30739[(1)] = (26));

} else {
var statearr_30685_30740 = state_30647__$1;
(statearr_30685_30740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (35))){
var inst_30632 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
if(cljs.core.truth_(inst_30632)){
var statearr_30686_30741 = state_30647__$1;
(statearr_30686_30741[(1)] = (36));

} else {
var statearr_30687_30742 = state_30647__$1;
(statearr_30687_30742[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (19))){
var inst_30575 = (state_30647[(7)]);
var inst_30594 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30575);
var state_30647__$1 = state_30647;
var statearr_30688_30743 = state_30647__$1;
(statearr_30688_30743[(2)] = inst_30594);

(statearr_30688_30743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (11))){
var inst_30575 = (state_30647[(7)]);
var inst_30579 = (inst_30575 == null);
var inst_30580 = cljs.core.not.call(null,inst_30579);
var state_30647__$1 = state_30647;
if(inst_30580){
var statearr_30689_30744 = state_30647__$1;
(statearr_30689_30744[(1)] = (13));

} else {
var statearr_30690_30745 = state_30647__$1;
(statearr_30690_30745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (9))){
var inst_30551 = (state_30647[(8)]);
var state_30647__$1 = state_30647;
var statearr_30691_30746 = state_30647__$1;
(statearr_30691_30746[(2)] = inst_30551);

(statearr_30691_30746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (5))){
var state_30647__$1 = state_30647;
var statearr_30692_30747 = state_30647__$1;
(statearr_30692_30747[(2)] = true);

(statearr_30692_30747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (14))){
var state_30647__$1 = state_30647;
var statearr_30693_30748 = state_30647__$1;
(statearr_30693_30748[(2)] = false);

(statearr_30693_30748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (26))){
var inst_30607 = (state_30647[(11)]);
var inst_30614 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30607);
var state_30647__$1 = state_30647;
var statearr_30694_30749 = state_30647__$1;
(statearr_30694_30749[(2)] = inst_30614);

(statearr_30694_30749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (16))){
var state_30647__$1 = state_30647;
var statearr_30695_30750 = state_30647__$1;
(statearr_30695_30750[(2)] = true);

(statearr_30695_30750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (38))){
var inst_30637 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
var statearr_30696_30751 = state_30647__$1;
(statearr_30696_30751[(2)] = inst_30637);

(statearr_30696_30751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (30))){
var inst_30598 = (state_30647[(9)]);
var inst_30607 = (state_30647[(11)]);
var inst_30599 = (state_30647[(13)]);
var inst_30624 = cljs.core.empty_QMARK_.call(null,inst_30598);
var inst_30625 = inst_30599.call(null,inst_30607);
var inst_30626 = cljs.core.not.call(null,inst_30625);
var inst_30627 = (inst_30624) && (inst_30626);
var state_30647__$1 = state_30647;
var statearr_30697_30752 = state_30647__$1;
(statearr_30697_30752[(2)] = inst_30627);

(statearr_30697_30752[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (10))){
var inst_30551 = (state_30647[(8)]);
var inst_30571 = (state_30647[(2)]);
var inst_30572 = cljs.core.get.call(null,inst_30571,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30573 = cljs.core.get.call(null,inst_30571,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30574 = cljs.core.get.call(null,inst_30571,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30575 = inst_30551;
var state_30647__$1 = (function (){var statearr_30698 = state_30647;
(statearr_30698[(16)] = inst_30574);

(statearr_30698[(17)] = inst_30573);

(statearr_30698[(7)] = inst_30575);

(statearr_30698[(18)] = inst_30572);

return statearr_30698;
})();
var statearr_30699_30753 = state_30647__$1;
(statearr_30699_30753[(2)] = null);

(statearr_30699_30753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (18))){
var inst_30589 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
var statearr_30700_30754 = state_30647__$1;
(statearr_30700_30754[(2)] = inst_30589);

(statearr_30700_30754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (37))){
var state_30647__$1 = state_30647;
var statearr_30701_30755 = state_30647__$1;
(statearr_30701_30755[(2)] = null);

(statearr_30701_30755[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (8))){
var inst_30551 = (state_30647[(8)]);
var inst_30568 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30551);
var state_30647__$1 = state_30647;
var statearr_30702_30756 = state_30647__$1;
(statearr_30702_30756[(2)] = inst_30568);

(statearr_30702_30756[(1)] = (10));


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
});})(c__28977__auto___30710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28865__auto__,c__28977__auto___30710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28866__auto__ = null;
var cljs$core$async$mix_$_state_machine__28866__auto____0 = (function (){
var statearr_30706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30706[(0)] = cljs$core$async$mix_$_state_machine__28866__auto__);

(statearr_30706[(1)] = (1));

return statearr_30706;
});
var cljs$core$async$mix_$_state_machine__28866__auto____1 = (function (state_30647){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_30647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e30707){if((e30707 instanceof Object)){
var ex__28869__auto__ = e30707;
var statearr_30708_30757 = state_30647;
(statearr_30708_30757[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30758 = state_30647;
state_30647 = G__30758;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28866__auto__ = function(state_30647){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28866__auto____1.call(this,state_30647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28866__auto____0;
cljs$core$async$mix_$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28866__auto____1;
return cljs$core$async$mix_$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___30710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28979__auto__ = (function (){var statearr_30709 = f__28978__auto__.call(null);
(statearr_30709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___30710);

return statearr_30709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___30710,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args30759 = [];
var len__25923__auto___30762 = arguments.length;
var i__25924__auto___30763 = (0);
while(true){
if((i__25924__auto___30763 < len__25923__auto___30762)){
args30759.push((arguments[i__25924__auto___30763]));

var G__30764 = (i__25924__auto___30763 + (1));
i__25924__auto___30763 = G__30764;
continue;
} else {
}
break;
}

var G__30761 = args30759.length;
switch (G__30761) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30759.length)].join('')));

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
var args30767 = [];
var len__25923__auto___30892 = arguments.length;
var i__25924__auto___30893 = (0);
while(true){
if((i__25924__auto___30893 < len__25923__auto___30892)){
args30767.push((arguments[i__25924__auto___30893]));

var G__30894 = (i__25924__auto___30893 + (1));
i__25924__auto___30893 = G__30894;
continue;
} else {
}
break;
}

var G__30769 = args30767.length;
switch (G__30769) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30767.length)].join('')));

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
return (function (p1__30766_SHARP_){
if(cljs.core.truth_(p1__30766_SHARP_.call(null,topic))){
return p1__30766_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30766_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30770 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30771){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30771 = meta30771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30772,meta30771__$1){
var self__ = this;
var _30772__$1 = this;
return (new cljs.core.async.t_cljs$core$async30770(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30771__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30772){
var self__ = this;
var _30772__$1 = this;
return self__.meta30771;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30770.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30771","meta30771",719378844,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30770";

cljs.core.async.t_cljs$core$async30770.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30770");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30770 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30770(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30771){
return (new cljs.core.async.t_cljs$core$async30770(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30771));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30770(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28977__auto___30896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___30896,mults,ensure_mult,p){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___30896,mults,ensure_mult,p){
return (function (state_30844){
var state_val_30845 = (state_30844[(1)]);
if((state_val_30845 === (7))){
var inst_30840 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30846_30897 = state_30844__$1;
(statearr_30846_30897[(2)] = inst_30840);

(statearr_30846_30897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (20))){
var state_30844__$1 = state_30844;
var statearr_30847_30898 = state_30844__$1;
(statearr_30847_30898[(2)] = null);

(statearr_30847_30898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (1))){
var state_30844__$1 = state_30844;
var statearr_30848_30899 = state_30844__$1;
(statearr_30848_30899[(2)] = null);

(statearr_30848_30899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (24))){
var inst_30823 = (state_30844[(7)]);
var inst_30832 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30823);
var state_30844__$1 = state_30844;
var statearr_30849_30900 = state_30844__$1;
(statearr_30849_30900[(2)] = inst_30832);

(statearr_30849_30900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (4))){
var inst_30775 = (state_30844[(8)]);
var inst_30775__$1 = (state_30844[(2)]);
var inst_30776 = (inst_30775__$1 == null);
var state_30844__$1 = (function (){var statearr_30850 = state_30844;
(statearr_30850[(8)] = inst_30775__$1);

return statearr_30850;
})();
if(cljs.core.truth_(inst_30776)){
var statearr_30851_30901 = state_30844__$1;
(statearr_30851_30901[(1)] = (5));

} else {
var statearr_30852_30902 = state_30844__$1;
(statearr_30852_30902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (15))){
var inst_30817 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30853_30903 = state_30844__$1;
(statearr_30853_30903[(2)] = inst_30817);

(statearr_30853_30903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (21))){
var inst_30837 = (state_30844[(2)]);
var state_30844__$1 = (function (){var statearr_30854 = state_30844;
(statearr_30854[(9)] = inst_30837);

return statearr_30854;
})();
var statearr_30855_30904 = state_30844__$1;
(statearr_30855_30904[(2)] = null);

(statearr_30855_30904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (13))){
var inst_30799 = (state_30844[(10)]);
var inst_30801 = cljs.core.chunked_seq_QMARK_.call(null,inst_30799);
var state_30844__$1 = state_30844;
if(inst_30801){
var statearr_30856_30905 = state_30844__$1;
(statearr_30856_30905[(1)] = (16));

} else {
var statearr_30857_30906 = state_30844__$1;
(statearr_30857_30906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (22))){
var inst_30829 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
if(cljs.core.truth_(inst_30829)){
var statearr_30858_30907 = state_30844__$1;
(statearr_30858_30907[(1)] = (23));

} else {
var statearr_30859_30908 = state_30844__$1;
(statearr_30859_30908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (6))){
var inst_30825 = (state_30844[(11)]);
var inst_30775 = (state_30844[(8)]);
var inst_30823 = (state_30844[(7)]);
var inst_30823__$1 = topic_fn.call(null,inst_30775);
var inst_30824 = cljs.core.deref.call(null,mults);
var inst_30825__$1 = cljs.core.get.call(null,inst_30824,inst_30823__$1);
var state_30844__$1 = (function (){var statearr_30860 = state_30844;
(statearr_30860[(11)] = inst_30825__$1);

(statearr_30860[(7)] = inst_30823__$1);

return statearr_30860;
})();
if(cljs.core.truth_(inst_30825__$1)){
var statearr_30861_30909 = state_30844__$1;
(statearr_30861_30909[(1)] = (19));

} else {
var statearr_30862_30910 = state_30844__$1;
(statearr_30862_30910[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (25))){
var inst_30834 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30863_30911 = state_30844__$1;
(statearr_30863_30911[(2)] = inst_30834);

(statearr_30863_30911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (17))){
var inst_30799 = (state_30844[(10)]);
var inst_30808 = cljs.core.first.call(null,inst_30799);
var inst_30809 = cljs.core.async.muxch_STAR_.call(null,inst_30808);
var inst_30810 = cljs.core.async.close_BANG_.call(null,inst_30809);
var inst_30811 = cljs.core.next.call(null,inst_30799);
var inst_30785 = inst_30811;
var inst_30786 = null;
var inst_30787 = (0);
var inst_30788 = (0);
var state_30844__$1 = (function (){var statearr_30864 = state_30844;
(statearr_30864[(12)] = inst_30787);

(statearr_30864[(13)] = inst_30786);

(statearr_30864[(14)] = inst_30810);

(statearr_30864[(15)] = inst_30788);

(statearr_30864[(16)] = inst_30785);

return statearr_30864;
})();
var statearr_30865_30912 = state_30844__$1;
(statearr_30865_30912[(2)] = null);

(statearr_30865_30912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (3))){
var inst_30842 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30844__$1,inst_30842);
} else {
if((state_val_30845 === (12))){
var inst_30819 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30866_30913 = state_30844__$1;
(statearr_30866_30913[(2)] = inst_30819);

(statearr_30866_30913[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (2))){
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30844__$1,(4),ch);
} else {
if((state_val_30845 === (23))){
var state_30844__$1 = state_30844;
var statearr_30867_30914 = state_30844__$1;
(statearr_30867_30914[(2)] = null);

(statearr_30867_30914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (19))){
var inst_30825 = (state_30844[(11)]);
var inst_30775 = (state_30844[(8)]);
var inst_30827 = cljs.core.async.muxch_STAR_.call(null,inst_30825);
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30844__$1,(22),inst_30827,inst_30775);
} else {
if((state_val_30845 === (11))){
var inst_30799 = (state_30844[(10)]);
var inst_30785 = (state_30844[(16)]);
var inst_30799__$1 = cljs.core.seq.call(null,inst_30785);
var state_30844__$1 = (function (){var statearr_30868 = state_30844;
(statearr_30868[(10)] = inst_30799__$1);

return statearr_30868;
})();
if(inst_30799__$1){
var statearr_30869_30915 = state_30844__$1;
(statearr_30869_30915[(1)] = (13));

} else {
var statearr_30870_30916 = state_30844__$1;
(statearr_30870_30916[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (9))){
var inst_30821 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30871_30917 = state_30844__$1;
(statearr_30871_30917[(2)] = inst_30821);

(statearr_30871_30917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (5))){
var inst_30782 = cljs.core.deref.call(null,mults);
var inst_30783 = cljs.core.vals.call(null,inst_30782);
var inst_30784 = cljs.core.seq.call(null,inst_30783);
var inst_30785 = inst_30784;
var inst_30786 = null;
var inst_30787 = (0);
var inst_30788 = (0);
var state_30844__$1 = (function (){var statearr_30872 = state_30844;
(statearr_30872[(12)] = inst_30787);

(statearr_30872[(13)] = inst_30786);

(statearr_30872[(15)] = inst_30788);

(statearr_30872[(16)] = inst_30785);

return statearr_30872;
})();
var statearr_30873_30918 = state_30844__$1;
(statearr_30873_30918[(2)] = null);

(statearr_30873_30918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (14))){
var state_30844__$1 = state_30844;
var statearr_30877_30919 = state_30844__$1;
(statearr_30877_30919[(2)] = null);

(statearr_30877_30919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (16))){
var inst_30799 = (state_30844[(10)]);
var inst_30803 = cljs.core.chunk_first.call(null,inst_30799);
var inst_30804 = cljs.core.chunk_rest.call(null,inst_30799);
var inst_30805 = cljs.core.count.call(null,inst_30803);
var inst_30785 = inst_30804;
var inst_30786 = inst_30803;
var inst_30787 = inst_30805;
var inst_30788 = (0);
var state_30844__$1 = (function (){var statearr_30878 = state_30844;
(statearr_30878[(12)] = inst_30787);

(statearr_30878[(13)] = inst_30786);

(statearr_30878[(15)] = inst_30788);

(statearr_30878[(16)] = inst_30785);

return statearr_30878;
})();
var statearr_30879_30920 = state_30844__$1;
(statearr_30879_30920[(2)] = null);

(statearr_30879_30920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (10))){
var inst_30787 = (state_30844[(12)]);
var inst_30786 = (state_30844[(13)]);
var inst_30788 = (state_30844[(15)]);
var inst_30785 = (state_30844[(16)]);
var inst_30793 = cljs.core._nth.call(null,inst_30786,inst_30788);
var inst_30794 = cljs.core.async.muxch_STAR_.call(null,inst_30793);
var inst_30795 = cljs.core.async.close_BANG_.call(null,inst_30794);
var inst_30796 = (inst_30788 + (1));
var tmp30874 = inst_30787;
var tmp30875 = inst_30786;
var tmp30876 = inst_30785;
var inst_30785__$1 = tmp30876;
var inst_30786__$1 = tmp30875;
var inst_30787__$1 = tmp30874;
var inst_30788__$1 = inst_30796;
var state_30844__$1 = (function (){var statearr_30880 = state_30844;
(statearr_30880[(12)] = inst_30787__$1);

(statearr_30880[(13)] = inst_30786__$1);

(statearr_30880[(15)] = inst_30788__$1);

(statearr_30880[(17)] = inst_30795);

(statearr_30880[(16)] = inst_30785__$1);

return statearr_30880;
})();
var statearr_30881_30921 = state_30844__$1;
(statearr_30881_30921[(2)] = null);

(statearr_30881_30921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (18))){
var inst_30814 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30882_30922 = state_30844__$1;
(statearr_30882_30922[(2)] = inst_30814);

(statearr_30882_30922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (8))){
var inst_30787 = (state_30844[(12)]);
var inst_30788 = (state_30844[(15)]);
var inst_30790 = (inst_30788 < inst_30787);
var inst_30791 = inst_30790;
var state_30844__$1 = state_30844;
if(cljs.core.truth_(inst_30791)){
var statearr_30883_30923 = state_30844__$1;
(statearr_30883_30923[(1)] = (10));

} else {
var statearr_30884_30924 = state_30844__$1;
(statearr_30884_30924[(1)] = (11));

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
});})(c__28977__auto___30896,mults,ensure_mult,p))
;
return ((function (switch__28865__auto__,c__28977__auto___30896,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_30888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30888[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_30888[(1)] = (1));

return statearr_30888;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_30844){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_30844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e30889){if((e30889 instanceof Object)){
var ex__28869__auto__ = e30889;
var statearr_30890_30925 = state_30844;
(statearr_30890_30925[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30926 = state_30844;
state_30844 = G__30926;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_30844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_30844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___30896,mults,ensure_mult,p))
})();
var state__28979__auto__ = (function (){var statearr_30891 = f__28978__auto__.call(null);
(statearr_30891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___30896);

return statearr_30891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___30896,mults,ensure_mult,p))
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
var args30927 = [];
var len__25923__auto___30930 = arguments.length;
var i__25924__auto___30931 = (0);
while(true){
if((i__25924__auto___30931 < len__25923__auto___30930)){
args30927.push((arguments[i__25924__auto___30931]));

var G__30932 = (i__25924__auto___30931 + (1));
i__25924__auto___30931 = G__30932;
continue;
} else {
}
break;
}

var G__30929 = args30927.length;
switch (G__30929) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30927.length)].join('')));

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
var args30934 = [];
var len__25923__auto___30937 = arguments.length;
var i__25924__auto___30938 = (0);
while(true){
if((i__25924__auto___30938 < len__25923__auto___30937)){
args30934.push((arguments[i__25924__auto___30938]));

var G__30939 = (i__25924__auto___30938 + (1));
i__25924__auto___30938 = G__30939;
continue;
} else {
}
break;
}

var G__30936 = args30934.length;
switch (G__30936) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30934.length)].join('')));

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
var args30941 = [];
var len__25923__auto___31012 = arguments.length;
var i__25924__auto___31013 = (0);
while(true){
if((i__25924__auto___31013 < len__25923__auto___31012)){
args30941.push((arguments[i__25924__auto___31013]));

var G__31014 = (i__25924__auto___31013 + (1));
i__25924__auto___31013 = G__31014;
continue;
} else {
}
break;
}

var G__30943 = args30941.length;
switch (G__30943) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30941.length)].join('')));

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
var c__28977__auto___31016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___31016,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___31016,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30982){
var state_val_30983 = (state_30982[(1)]);
if((state_val_30983 === (7))){
var state_30982__$1 = state_30982;
var statearr_30984_31017 = state_30982__$1;
(statearr_30984_31017[(2)] = null);

(statearr_30984_31017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (1))){
var state_30982__$1 = state_30982;
var statearr_30985_31018 = state_30982__$1;
(statearr_30985_31018[(2)] = null);

(statearr_30985_31018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (4))){
var inst_30946 = (state_30982[(7)]);
var inst_30948 = (inst_30946 < cnt);
var state_30982__$1 = state_30982;
if(cljs.core.truth_(inst_30948)){
var statearr_30986_31019 = state_30982__$1;
(statearr_30986_31019[(1)] = (6));

} else {
var statearr_30987_31020 = state_30982__$1;
(statearr_30987_31020[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (15))){
var inst_30978 = (state_30982[(2)]);
var state_30982__$1 = state_30982;
var statearr_30988_31021 = state_30982__$1;
(statearr_30988_31021[(2)] = inst_30978);

(statearr_30988_31021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (13))){
var inst_30971 = cljs.core.async.close_BANG_.call(null,out);
var state_30982__$1 = state_30982;
var statearr_30989_31022 = state_30982__$1;
(statearr_30989_31022[(2)] = inst_30971);

(statearr_30989_31022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (6))){
var state_30982__$1 = state_30982;
var statearr_30990_31023 = state_30982__$1;
(statearr_30990_31023[(2)] = null);

(statearr_30990_31023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (3))){
var inst_30980 = (state_30982[(2)]);
var state_30982__$1 = state_30982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30982__$1,inst_30980);
} else {
if((state_val_30983 === (12))){
var inst_30968 = (state_30982[(8)]);
var inst_30968__$1 = (state_30982[(2)]);
var inst_30969 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30968__$1);
var state_30982__$1 = (function (){var statearr_30991 = state_30982;
(statearr_30991[(8)] = inst_30968__$1);

return statearr_30991;
})();
if(cljs.core.truth_(inst_30969)){
var statearr_30992_31024 = state_30982__$1;
(statearr_30992_31024[(1)] = (13));

} else {
var statearr_30993_31025 = state_30982__$1;
(statearr_30993_31025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (2))){
var inst_30945 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30946 = (0);
var state_30982__$1 = (function (){var statearr_30994 = state_30982;
(statearr_30994[(9)] = inst_30945);

(statearr_30994[(7)] = inst_30946);

return statearr_30994;
})();
var statearr_30995_31026 = state_30982__$1;
(statearr_30995_31026[(2)] = null);

(statearr_30995_31026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (11))){
var inst_30946 = (state_30982[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30982,(10),Object,null,(9));
var inst_30955 = chs__$1.call(null,inst_30946);
var inst_30956 = done.call(null,inst_30946);
var inst_30957 = cljs.core.async.take_BANG_.call(null,inst_30955,inst_30956);
var state_30982__$1 = state_30982;
var statearr_30996_31027 = state_30982__$1;
(statearr_30996_31027[(2)] = inst_30957);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30982__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (9))){
var inst_30946 = (state_30982[(7)]);
var inst_30959 = (state_30982[(2)]);
var inst_30960 = (inst_30946 + (1));
var inst_30946__$1 = inst_30960;
var state_30982__$1 = (function (){var statearr_30997 = state_30982;
(statearr_30997[(7)] = inst_30946__$1);

(statearr_30997[(10)] = inst_30959);

return statearr_30997;
})();
var statearr_30998_31028 = state_30982__$1;
(statearr_30998_31028[(2)] = null);

(statearr_30998_31028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (5))){
var inst_30966 = (state_30982[(2)]);
var state_30982__$1 = (function (){var statearr_30999 = state_30982;
(statearr_30999[(11)] = inst_30966);

return statearr_30999;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30982__$1,(12),dchan);
} else {
if((state_val_30983 === (14))){
var inst_30968 = (state_30982[(8)]);
var inst_30973 = cljs.core.apply.call(null,f,inst_30968);
var state_30982__$1 = state_30982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30982__$1,(16),out,inst_30973);
} else {
if((state_val_30983 === (16))){
var inst_30975 = (state_30982[(2)]);
var state_30982__$1 = (function (){var statearr_31000 = state_30982;
(statearr_31000[(12)] = inst_30975);

return statearr_31000;
})();
var statearr_31001_31029 = state_30982__$1;
(statearr_31001_31029[(2)] = null);

(statearr_31001_31029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (10))){
var inst_30950 = (state_30982[(2)]);
var inst_30951 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30982__$1 = (function (){var statearr_31002 = state_30982;
(statearr_31002[(13)] = inst_30950);

return statearr_31002;
})();
var statearr_31003_31030 = state_30982__$1;
(statearr_31003_31030[(2)] = inst_30951);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30982__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (8))){
var inst_30964 = (state_30982[(2)]);
var state_30982__$1 = state_30982;
var statearr_31004_31031 = state_30982__$1;
(statearr_31004_31031[(2)] = inst_30964);

(statearr_31004_31031[(1)] = (5));


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
});})(c__28977__auto___31016,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28865__auto__,c__28977__auto___31016,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_31008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31008[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_31008[(1)] = (1));

return statearr_31008;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_30982){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_30982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e31009){if((e31009 instanceof Object)){
var ex__28869__auto__ = e31009;
var statearr_31010_31032 = state_30982;
(statearr_31010_31032[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31033 = state_30982;
state_30982 = G__31033;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_30982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_30982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___31016,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28979__auto__ = (function (){var statearr_31011 = f__28978__auto__.call(null);
(statearr_31011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___31016);

return statearr_31011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___31016,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31035 = [];
var len__25923__auto___31093 = arguments.length;
var i__25924__auto___31094 = (0);
while(true){
if((i__25924__auto___31094 < len__25923__auto___31093)){
args31035.push((arguments[i__25924__auto___31094]));

var G__31095 = (i__25924__auto___31094 + (1));
i__25924__auto___31094 = G__31095;
continue;
} else {
}
break;
}

var G__31037 = args31035.length;
switch (G__31037) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31035.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28977__auto___31097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___31097,out){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___31097,out){
return (function (state_31069){
var state_val_31070 = (state_31069[(1)]);
if((state_val_31070 === (7))){
var inst_31048 = (state_31069[(7)]);
var inst_31049 = (state_31069[(8)]);
var inst_31048__$1 = (state_31069[(2)]);
var inst_31049__$1 = cljs.core.nth.call(null,inst_31048__$1,(0),null);
var inst_31050 = cljs.core.nth.call(null,inst_31048__$1,(1),null);
var inst_31051 = (inst_31049__$1 == null);
var state_31069__$1 = (function (){var statearr_31071 = state_31069;
(statearr_31071[(7)] = inst_31048__$1);

(statearr_31071[(9)] = inst_31050);

(statearr_31071[(8)] = inst_31049__$1);

return statearr_31071;
})();
if(cljs.core.truth_(inst_31051)){
var statearr_31072_31098 = state_31069__$1;
(statearr_31072_31098[(1)] = (8));

} else {
var statearr_31073_31099 = state_31069__$1;
(statearr_31073_31099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (1))){
var inst_31038 = cljs.core.vec.call(null,chs);
var inst_31039 = inst_31038;
var state_31069__$1 = (function (){var statearr_31074 = state_31069;
(statearr_31074[(10)] = inst_31039);

return statearr_31074;
})();
var statearr_31075_31100 = state_31069__$1;
(statearr_31075_31100[(2)] = null);

(statearr_31075_31100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (4))){
var inst_31039 = (state_31069[(10)]);
var state_31069__$1 = state_31069;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31069__$1,(7),inst_31039);
} else {
if((state_val_31070 === (6))){
var inst_31065 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31076_31101 = state_31069__$1;
(statearr_31076_31101[(2)] = inst_31065);

(statearr_31076_31101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (3))){
var inst_31067 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31069__$1,inst_31067);
} else {
if((state_val_31070 === (2))){
var inst_31039 = (state_31069[(10)]);
var inst_31041 = cljs.core.count.call(null,inst_31039);
var inst_31042 = (inst_31041 > (0));
var state_31069__$1 = state_31069;
if(cljs.core.truth_(inst_31042)){
var statearr_31078_31102 = state_31069__$1;
(statearr_31078_31102[(1)] = (4));

} else {
var statearr_31079_31103 = state_31069__$1;
(statearr_31079_31103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (11))){
var inst_31039 = (state_31069[(10)]);
var inst_31058 = (state_31069[(2)]);
var tmp31077 = inst_31039;
var inst_31039__$1 = tmp31077;
var state_31069__$1 = (function (){var statearr_31080 = state_31069;
(statearr_31080[(11)] = inst_31058);

(statearr_31080[(10)] = inst_31039__$1);

return statearr_31080;
})();
var statearr_31081_31104 = state_31069__$1;
(statearr_31081_31104[(2)] = null);

(statearr_31081_31104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (9))){
var inst_31049 = (state_31069[(8)]);
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31069__$1,(11),out,inst_31049);
} else {
if((state_val_31070 === (5))){
var inst_31063 = cljs.core.async.close_BANG_.call(null,out);
var state_31069__$1 = state_31069;
var statearr_31082_31105 = state_31069__$1;
(statearr_31082_31105[(2)] = inst_31063);

(statearr_31082_31105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (10))){
var inst_31061 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31083_31106 = state_31069__$1;
(statearr_31083_31106[(2)] = inst_31061);

(statearr_31083_31106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (8))){
var inst_31048 = (state_31069[(7)]);
var inst_31050 = (state_31069[(9)]);
var inst_31039 = (state_31069[(10)]);
var inst_31049 = (state_31069[(8)]);
var inst_31053 = (function (){var cs = inst_31039;
var vec__31044 = inst_31048;
var v = inst_31049;
var c = inst_31050;
return ((function (cs,vec__31044,v,c,inst_31048,inst_31050,inst_31039,inst_31049,state_val_31070,c__28977__auto___31097,out){
return (function (p1__31034_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31034_SHARP_);
});
;})(cs,vec__31044,v,c,inst_31048,inst_31050,inst_31039,inst_31049,state_val_31070,c__28977__auto___31097,out))
})();
var inst_31054 = cljs.core.filterv.call(null,inst_31053,inst_31039);
var inst_31039__$1 = inst_31054;
var state_31069__$1 = (function (){var statearr_31084 = state_31069;
(statearr_31084[(10)] = inst_31039__$1);

return statearr_31084;
})();
var statearr_31085_31107 = state_31069__$1;
(statearr_31085_31107[(2)] = null);

(statearr_31085_31107[(1)] = (2));


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
});})(c__28977__auto___31097,out))
;
return ((function (switch__28865__auto__,c__28977__auto___31097,out){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_31089 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31089[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_31089[(1)] = (1));

return statearr_31089;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_31069){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_31069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e31090){if((e31090 instanceof Object)){
var ex__28869__auto__ = e31090;
var statearr_31091_31108 = state_31069;
(statearr_31091_31108[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31109 = state_31069;
state_31069 = G__31109;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_31069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_31069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___31097,out))
})();
var state__28979__auto__ = (function (){var statearr_31092 = f__28978__auto__.call(null);
(statearr_31092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___31097);

return statearr_31092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___31097,out))
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
var args31110 = [];
var len__25923__auto___31159 = arguments.length;
var i__25924__auto___31160 = (0);
while(true){
if((i__25924__auto___31160 < len__25923__auto___31159)){
args31110.push((arguments[i__25924__auto___31160]));

var G__31161 = (i__25924__auto___31160 + (1));
i__25924__auto___31160 = G__31161;
continue;
} else {
}
break;
}

var G__31112 = args31110.length;
switch (G__31112) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31110.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28977__auto___31163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___31163,out){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___31163,out){
return (function (state_31136){
var state_val_31137 = (state_31136[(1)]);
if((state_val_31137 === (7))){
var inst_31118 = (state_31136[(7)]);
var inst_31118__$1 = (state_31136[(2)]);
var inst_31119 = (inst_31118__$1 == null);
var inst_31120 = cljs.core.not.call(null,inst_31119);
var state_31136__$1 = (function (){var statearr_31138 = state_31136;
(statearr_31138[(7)] = inst_31118__$1);

return statearr_31138;
})();
if(inst_31120){
var statearr_31139_31164 = state_31136__$1;
(statearr_31139_31164[(1)] = (8));

} else {
var statearr_31140_31165 = state_31136__$1;
(statearr_31140_31165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (1))){
var inst_31113 = (0);
var state_31136__$1 = (function (){var statearr_31141 = state_31136;
(statearr_31141[(8)] = inst_31113);

return statearr_31141;
})();
var statearr_31142_31166 = state_31136__$1;
(statearr_31142_31166[(2)] = null);

(statearr_31142_31166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (4))){
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31136__$1,(7),ch);
} else {
if((state_val_31137 === (6))){
var inst_31131 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31143_31167 = state_31136__$1;
(statearr_31143_31167[(2)] = inst_31131);

(statearr_31143_31167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (3))){
var inst_31133 = (state_31136[(2)]);
var inst_31134 = cljs.core.async.close_BANG_.call(null,out);
var state_31136__$1 = (function (){var statearr_31144 = state_31136;
(statearr_31144[(9)] = inst_31133);

return statearr_31144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31136__$1,inst_31134);
} else {
if((state_val_31137 === (2))){
var inst_31113 = (state_31136[(8)]);
var inst_31115 = (inst_31113 < n);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31115)){
var statearr_31145_31168 = state_31136__$1;
(statearr_31145_31168[(1)] = (4));

} else {
var statearr_31146_31169 = state_31136__$1;
(statearr_31146_31169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (11))){
var inst_31113 = (state_31136[(8)]);
var inst_31123 = (state_31136[(2)]);
var inst_31124 = (inst_31113 + (1));
var inst_31113__$1 = inst_31124;
var state_31136__$1 = (function (){var statearr_31147 = state_31136;
(statearr_31147[(10)] = inst_31123);

(statearr_31147[(8)] = inst_31113__$1);

return statearr_31147;
})();
var statearr_31148_31170 = state_31136__$1;
(statearr_31148_31170[(2)] = null);

(statearr_31148_31170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (9))){
var state_31136__$1 = state_31136;
var statearr_31149_31171 = state_31136__$1;
(statearr_31149_31171[(2)] = null);

(statearr_31149_31171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (5))){
var state_31136__$1 = state_31136;
var statearr_31150_31172 = state_31136__$1;
(statearr_31150_31172[(2)] = null);

(statearr_31150_31172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (10))){
var inst_31128 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31151_31173 = state_31136__$1;
(statearr_31151_31173[(2)] = inst_31128);

(statearr_31151_31173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (8))){
var inst_31118 = (state_31136[(7)]);
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31136__$1,(11),out,inst_31118);
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
});})(c__28977__auto___31163,out))
;
return ((function (switch__28865__auto__,c__28977__auto___31163,out){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_31155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31155[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_31155[(1)] = (1));

return statearr_31155;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_31136){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_31136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e31156){if((e31156 instanceof Object)){
var ex__28869__auto__ = e31156;
var statearr_31157_31174 = state_31136;
(statearr_31157_31174[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31175 = state_31136;
state_31136 = G__31175;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_31136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_31136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___31163,out))
})();
var state__28979__auto__ = (function (){var statearr_31158 = f__28978__auto__.call(null);
(statearr_31158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___31163);

return statearr_31158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___31163,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31183 = (function (map_LT_,f,ch,meta31184){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31184 = meta31184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31185,meta31184__$1){
var self__ = this;
var _31185__$1 = this;
return (new cljs.core.async.t_cljs$core$async31183(self__.map_LT_,self__.f,self__.ch,meta31184__$1));
});

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31185){
var self__ = this;
var _31185__$1 = this;
return self__.meta31184;
});

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31186 = (function (map_LT_,f,ch,meta31184,_,fn1,meta31187){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31184 = meta31184;
this._ = _;
this.fn1 = fn1;
this.meta31187 = meta31187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31188,meta31187__$1){
var self__ = this;
var _31188__$1 = this;
return (new cljs.core.async.t_cljs$core$async31186(self__.map_LT_,self__.f,self__.ch,self__.meta31184,self__._,self__.fn1,meta31187__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31188){
var self__ = this;
var _31188__$1 = this;
return self__.meta31187;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31176_SHARP_){
return f1.call(null,(((p1__31176_SHARP_ == null))?null:self__.f.call(null,p1__31176_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31186.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31184","meta31184",-1247621041,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31183","cljs.core.async/t_cljs$core$async31183",-1486036080,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31187","meta31187",-63354046,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31186";

cljs.core.async.t_cljs$core$async31186.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31186");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31186 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31186(map_LT___$1,f__$1,ch__$1,meta31184__$1,___$2,fn1__$1,meta31187){
return (new cljs.core.async.t_cljs$core$async31186(map_LT___$1,f__$1,ch__$1,meta31184__$1,___$2,fn1__$1,meta31187));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31186(self__.map_LT_,self__.f,self__.ch,self__.meta31184,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31184","meta31184",-1247621041,null)], null);
});

cljs.core.async.t_cljs$core$async31183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31183";

cljs.core.async.t_cljs$core$async31183.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31183");
});

cljs.core.async.__GT_t_cljs$core$async31183 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31183(map_LT___$1,f__$1,ch__$1,meta31184){
return (new cljs.core.async.t_cljs$core$async31183(map_LT___$1,f__$1,ch__$1,meta31184));
});

}

return (new cljs.core.async.t_cljs$core$async31183(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31192 = (function (map_GT_,f,ch,meta31193){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31193 = meta31193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31194,meta31193__$1){
var self__ = this;
var _31194__$1 = this;
return (new cljs.core.async.t_cljs$core$async31192(self__.map_GT_,self__.f,self__.ch,meta31193__$1));
});

cljs.core.async.t_cljs$core$async31192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31194){
var self__ = this;
var _31194__$1 = this;
return self__.meta31193;
});

cljs.core.async.t_cljs$core$async31192.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31192.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31192.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31193","meta31193",-403962540,null)], null);
});

cljs.core.async.t_cljs$core$async31192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31192";

cljs.core.async.t_cljs$core$async31192.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31192");
});

cljs.core.async.__GT_t_cljs$core$async31192 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31192(map_GT___$1,f__$1,ch__$1,meta31193){
return (new cljs.core.async.t_cljs$core$async31192(map_GT___$1,f__$1,ch__$1,meta31193));
});

}

return (new cljs.core.async.t_cljs$core$async31192(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31198 = (function (filter_GT_,p,ch,meta31199){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31199 = meta31199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31200,meta31199__$1){
var self__ = this;
var _31200__$1 = this;
return (new cljs.core.async.t_cljs$core$async31198(self__.filter_GT_,self__.p,self__.ch,meta31199__$1));
});

cljs.core.async.t_cljs$core$async31198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31200){
var self__ = this;
var _31200__$1 = this;
return self__.meta31199;
});

cljs.core.async.t_cljs$core$async31198.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31198.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31198.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31198.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31198.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31198.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31198.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31199","meta31199",-1626103186,null)], null);
});

cljs.core.async.t_cljs$core$async31198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31198";

cljs.core.async.t_cljs$core$async31198.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31198");
});

cljs.core.async.__GT_t_cljs$core$async31198 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31198(filter_GT___$1,p__$1,ch__$1,meta31199){
return (new cljs.core.async.t_cljs$core$async31198(filter_GT___$1,p__$1,ch__$1,meta31199));
});

}

return (new cljs.core.async.t_cljs$core$async31198(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31201 = [];
var len__25923__auto___31245 = arguments.length;
var i__25924__auto___31246 = (0);
while(true){
if((i__25924__auto___31246 < len__25923__auto___31245)){
args31201.push((arguments[i__25924__auto___31246]));

var G__31247 = (i__25924__auto___31246 + (1));
i__25924__auto___31246 = G__31247;
continue;
} else {
}
break;
}

var G__31203 = args31201.length;
switch (G__31203) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31201.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28977__auto___31249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___31249,out){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___31249,out){
return (function (state_31224){
var state_val_31225 = (state_31224[(1)]);
if((state_val_31225 === (7))){
var inst_31220 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
var statearr_31226_31250 = state_31224__$1;
(statearr_31226_31250[(2)] = inst_31220);

(statearr_31226_31250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (1))){
var state_31224__$1 = state_31224;
var statearr_31227_31251 = state_31224__$1;
(statearr_31227_31251[(2)] = null);

(statearr_31227_31251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (4))){
var inst_31206 = (state_31224[(7)]);
var inst_31206__$1 = (state_31224[(2)]);
var inst_31207 = (inst_31206__$1 == null);
var state_31224__$1 = (function (){var statearr_31228 = state_31224;
(statearr_31228[(7)] = inst_31206__$1);

return statearr_31228;
})();
if(cljs.core.truth_(inst_31207)){
var statearr_31229_31252 = state_31224__$1;
(statearr_31229_31252[(1)] = (5));

} else {
var statearr_31230_31253 = state_31224__$1;
(statearr_31230_31253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (6))){
var inst_31206 = (state_31224[(7)]);
var inst_31211 = p.call(null,inst_31206);
var state_31224__$1 = state_31224;
if(cljs.core.truth_(inst_31211)){
var statearr_31231_31254 = state_31224__$1;
(statearr_31231_31254[(1)] = (8));

} else {
var statearr_31232_31255 = state_31224__$1;
(statearr_31232_31255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (3))){
var inst_31222 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31224__$1,inst_31222);
} else {
if((state_val_31225 === (2))){
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31224__$1,(4),ch);
} else {
if((state_val_31225 === (11))){
var inst_31214 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
var statearr_31233_31256 = state_31224__$1;
(statearr_31233_31256[(2)] = inst_31214);

(statearr_31233_31256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (9))){
var state_31224__$1 = state_31224;
var statearr_31234_31257 = state_31224__$1;
(statearr_31234_31257[(2)] = null);

(statearr_31234_31257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (5))){
var inst_31209 = cljs.core.async.close_BANG_.call(null,out);
var state_31224__$1 = state_31224;
var statearr_31235_31258 = state_31224__$1;
(statearr_31235_31258[(2)] = inst_31209);

(statearr_31235_31258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (10))){
var inst_31217 = (state_31224[(2)]);
var state_31224__$1 = (function (){var statearr_31236 = state_31224;
(statearr_31236[(8)] = inst_31217);

return statearr_31236;
})();
var statearr_31237_31259 = state_31224__$1;
(statearr_31237_31259[(2)] = null);

(statearr_31237_31259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (8))){
var inst_31206 = (state_31224[(7)]);
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31224__$1,(11),out,inst_31206);
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
});})(c__28977__auto___31249,out))
;
return ((function (switch__28865__auto__,c__28977__auto___31249,out){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_31241 = [null,null,null,null,null,null,null,null,null];
(statearr_31241[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_31241[(1)] = (1));

return statearr_31241;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_31224){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_31224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e31242){if((e31242 instanceof Object)){
var ex__28869__auto__ = e31242;
var statearr_31243_31260 = state_31224;
(statearr_31243_31260[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31261 = state_31224;
state_31224 = G__31261;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_31224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_31224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___31249,out))
})();
var state__28979__auto__ = (function (){var statearr_31244 = f__28978__auto__.call(null);
(statearr_31244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___31249);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___31249,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31262 = [];
var len__25923__auto___31265 = arguments.length;
var i__25924__auto___31266 = (0);
while(true){
if((i__25924__auto___31266 < len__25923__auto___31265)){
args31262.push((arguments[i__25924__auto___31266]));

var G__31267 = (i__25924__auto___31266 + (1));
i__25924__auto___31266 = G__31267;
continue;
} else {
}
break;
}

var G__31264 = args31262.length;
switch (G__31264) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31262.length)].join('')));

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
var c__28977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto__){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto__){
return (function (state_31434){
var state_val_31435 = (state_31434[(1)]);
if((state_val_31435 === (7))){
var inst_31430 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31436_31477 = state_31434__$1;
(statearr_31436_31477[(2)] = inst_31430);

(statearr_31436_31477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (20))){
var inst_31400 = (state_31434[(7)]);
var inst_31411 = (state_31434[(2)]);
var inst_31412 = cljs.core.next.call(null,inst_31400);
var inst_31386 = inst_31412;
var inst_31387 = null;
var inst_31388 = (0);
var inst_31389 = (0);
var state_31434__$1 = (function (){var statearr_31437 = state_31434;
(statearr_31437[(8)] = inst_31387);

(statearr_31437[(9)] = inst_31388);

(statearr_31437[(10)] = inst_31389);

(statearr_31437[(11)] = inst_31386);

(statearr_31437[(12)] = inst_31411);

return statearr_31437;
})();
var statearr_31438_31478 = state_31434__$1;
(statearr_31438_31478[(2)] = null);

(statearr_31438_31478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (1))){
var state_31434__$1 = state_31434;
var statearr_31439_31479 = state_31434__$1;
(statearr_31439_31479[(2)] = null);

(statearr_31439_31479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (4))){
var inst_31375 = (state_31434[(13)]);
var inst_31375__$1 = (state_31434[(2)]);
var inst_31376 = (inst_31375__$1 == null);
var state_31434__$1 = (function (){var statearr_31440 = state_31434;
(statearr_31440[(13)] = inst_31375__$1);

return statearr_31440;
})();
if(cljs.core.truth_(inst_31376)){
var statearr_31441_31480 = state_31434__$1;
(statearr_31441_31480[(1)] = (5));

} else {
var statearr_31442_31481 = state_31434__$1;
(statearr_31442_31481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (15))){
var state_31434__$1 = state_31434;
var statearr_31446_31482 = state_31434__$1;
(statearr_31446_31482[(2)] = null);

(statearr_31446_31482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (21))){
var state_31434__$1 = state_31434;
var statearr_31447_31483 = state_31434__$1;
(statearr_31447_31483[(2)] = null);

(statearr_31447_31483[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (13))){
var inst_31387 = (state_31434[(8)]);
var inst_31388 = (state_31434[(9)]);
var inst_31389 = (state_31434[(10)]);
var inst_31386 = (state_31434[(11)]);
var inst_31396 = (state_31434[(2)]);
var inst_31397 = (inst_31389 + (1));
var tmp31443 = inst_31387;
var tmp31444 = inst_31388;
var tmp31445 = inst_31386;
var inst_31386__$1 = tmp31445;
var inst_31387__$1 = tmp31443;
var inst_31388__$1 = tmp31444;
var inst_31389__$1 = inst_31397;
var state_31434__$1 = (function (){var statearr_31448 = state_31434;
(statearr_31448[(8)] = inst_31387__$1);

(statearr_31448[(14)] = inst_31396);

(statearr_31448[(9)] = inst_31388__$1);

(statearr_31448[(10)] = inst_31389__$1);

(statearr_31448[(11)] = inst_31386__$1);

return statearr_31448;
})();
var statearr_31449_31484 = state_31434__$1;
(statearr_31449_31484[(2)] = null);

(statearr_31449_31484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (22))){
var state_31434__$1 = state_31434;
var statearr_31450_31485 = state_31434__$1;
(statearr_31450_31485[(2)] = null);

(statearr_31450_31485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (6))){
var inst_31375 = (state_31434[(13)]);
var inst_31384 = f.call(null,inst_31375);
var inst_31385 = cljs.core.seq.call(null,inst_31384);
var inst_31386 = inst_31385;
var inst_31387 = null;
var inst_31388 = (0);
var inst_31389 = (0);
var state_31434__$1 = (function (){var statearr_31451 = state_31434;
(statearr_31451[(8)] = inst_31387);

(statearr_31451[(9)] = inst_31388);

(statearr_31451[(10)] = inst_31389);

(statearr_31451[(11)] = inst_31386);

return statearr_31451;
})();
var statearr_31452_31486 = state_31434__$1;
(statearr_31452_31486[(2)] = null);

(statearr_31452_31486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (17))){
var inst_31400 = (state_31434[(7)]);
var inst_31404 = cljs.core.chunk_first.call(null,inst_31400);
var inst_31405 = cljs.core.chunk_rest.call(null,inst_31400);
var inst_31406 = cljs.core.count.call(null,inst_31404);
var inst_31386 = inst_31405;
var inst_31387 = inst_31404;
var inst_31388 = inst_31406;
var inst_31389 = (0);
var state_31434__$1 = (function (){var statearr_31453 = state_31434;
(statearr_31453[(8)] = inst_31387);

(statearr_31453[(9)] = inst_31388);

(statearr_31453[(10)] = inst_31389);

(statearr_31453[(11)] = inst_31386);

return statearr_31453;
})();
var statearr_31454_31487 = state_31434__$1;
(statearr_31454_31487[(2)] = null);

(statearr_31454_31487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (3))){
var inst_31432 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31434__$1,inst_31432);
} else {
if((state_val_31435 === (12))){
var inst_31420 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31455_31488 = state_31434__$1;
(statearr_31455_31488[(2)] = inst_31420);

(statearr_31455_31488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (2))){
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(4),in$);
} else {
if((state_val_31435 === (23))){
var inst_31428 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31456_31489 = state_31434__$1;
(statearr_31456_31489[(2)] = inst_31428);

(statearr_31456_31489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (19))){
var inst_31415 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31457_31490 = state_31434__$1;
(statearr_31457_31490[(2)] = inst_31415);

(statearr_31457_31490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (11))){
var inst_31386 = (state_31434[(11)]);
var inst_31400 = (state_31434[(7)]);
var inst_31400__$1 = cljs.core.seq.call(null,inst_31386);
var state_31434__$1 = (function (){var statearr_31458 = state_31434;
(statearr_31458[(7)] = inst_31400__$1);

return statearr_31458;
})();
if(inst_31400__$1){
var statearr_31459_31491 = state_31434__$1;
(statearr_31459_31491[(1)] = (14));

} else {
var statearr_31460_31492 = state_31434__$1;
(statearr_31460_31492[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (9))){
var inst_31422 = (state_31434[(2)]);
var inst_31423 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31434__$1 = (function (){var statearr_31461 = state_31434;
(statearr_31461[(15)] = inst_31422);

return statearr_31461;
})();
if(cljs.core.truth_(inst_31423)){
var statearr_31462_31493 = state_31434__$1;
(statearr_31462_31493[(1)] = (21));

} else {
var statearr_31463_31494 = state_31434__$1;
(statearr_31463_31494[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (5))){
var inst_31378 = cljs.core.async.close_BANG_.call(null,out);
var state_31434__$1 = state_31434;
var statearr_31464_31495 = state_31434__$1;
(statearr_31464_31495[(2)] = inst_31378);

(statearr_31464_31495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (14))){
var inst_31400 = (state_31434[(7)]);
var inst_31402 = cljs.core.chunked_seq_QMARK_.call(null,inst_31400);
var state_31434__$1 = state_31434;
if(inst_31402){
var statearr_31465_31496 = state_31434__$1;
(statearr_31465_31496[(1)] = (17));

} else {
var statearr_31466_31497 = state_31434__$1;
(statearr_31466_31497[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (16))){
var inst_31418 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31467_31498 = state_31434__$1;
(statearr_31467_31498[(2)] = inst_31418);

(statearr_31467_31498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (10))){
var inst_31387 = (state_31434[(8)]);
var inst_31389 = (state_31434[(10)]);
var inst_31394 = cljs.core._nth.call(null,inst_31387,inst_31389);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31434__$1,(13),out,inst_31394);
} else {
if((state_val_31435 === (18))){
var inst_31400 = (state_31434[(7)]);
var inst_31409 = cljs.core.first.call(null,inst_31400);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31434__$1,(20),out,inst_31409);
} else {
if((state_val_31435 === (8))){
var inst_31388 = (state_31434[(9)]);
var inst_31389 = (state_31434[(10)]);
var inst_31391 = (inst_31389 < inst_31388);
var inst_31392 = inst_31391;
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31392)){
var statearr_31468_31499 = state_31434__$1;
(statearr_31468_31499[(1)] = (10));

} else {
var statearr_31469_31500 = state_31434__$1;
(statearr_31469_31500[(1)] = (11));

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
});})(c__28977__auto__))
;
return ((function (switch__28865__auto__,c__28977__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28866__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28866__auto____0 = (function (){
var statearr_31473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31473[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28866__auto__);

(statearr_31473[(1)] = (1));

return statearr_31473;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28866__auto____1 = (function (state_31434){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_31434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e31474){if((e31474 instanceof Object)){
var ex__28869__auto__ = e31474;
var statearr_31475_31501 = state_31434;
(statearr_31475_31501[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31502 = state_31434;
state_31434 = G__31502;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28866__auto__ = function(state_31434){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28866__auto____1.call(this,state_31434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28866__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28866__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto__))
})();
var state__28979__auto__ = (function (){var statearr_31476 = f__28978__auto__.call(null);
(statearr_31476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto__);

return statearr_31476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto__))
);

return c__28977__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31503 = [];
var len__25923__auto___31506 = arguments.length;
var i__25924__auto___31507 = (0);
while(true){
if((i__25924__auto___31507 < len__25923__auto___31506)){
args31503.push((arguments[i__25924__auto___31507]));

var G__31508 = (i__25924__auto___31507 + (1));
i__25924__auto___31507 = G__31508;
continue;
} else {
}
break;
}

var G__31505 = args31503.length;
switch (G__31505) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31503.length)].join('')));

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
var args31510 = [];
var len__25923__auto___31513 = arguments.length;
var i__25924__auto___31514 = (0);
while(true){
if((i__25924__auto___31514 < len__25923__auto___31513)){
args31510.push((arguments[i__25924__auto___31514]));

var G__31515 = (i__25924__auto___31514 + (1));
i__25924__auto___31514 = G__31515;
continue;
} else {
}
break;
}

var G__31512 = args31510.length;
switch (G__31512) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31510.length)].join('')));

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
var args31517 = [];
var len__25923__auto___31568 = arguments.length;
var i__25924__auto___31569 = (0);
while(true){
if((i__25924__auto___31569 < len__25923__auto___31568)){
args31517.push((arguments[i__25924__auto___31569]));

var G__31570 = (i__25924__auto___31569 + (1));
i__25924__auto___31569 = G__31570;
continue;
} else {
}
break;
}

var G__31519 = args31517.length;
switch (G__31519) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31517.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28977__auto___31572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___31572,out){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___31572,out){
return (function (state_31543){
var state_val_31544 = (state_31543[(1)]);
if((state_val_31544 === (7))){
var inst_31538 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
var statearr_31545_31573 = state_31543__$1;
(statearr_31545_31573[(2)] = inst_31538);

(statearr_31545_31573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (1))){
var inst_31520 = null;
var state_31543__$1 = (function (){var statearr_31546 = state_31543;
(statearr_31546[(7)] = inst_31520);

return statearr_31546;
})();
var statearr_31547_31574 = state_31543__$1;
(statearr_31547_31574[(2)] = null);

(statearr_31547_31574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (4))){
var inst_31523 = (state_31543[(8)]);
var inst_31523__$1 = (state_31543[(2)]);
var inst_31524 = (inst_31523__$1 == null);
var inst_31525 = cljs.core.not.call(null,inst_31524);
var state_31543__$1 = (function (){var statearr_31548 = state_31543;
(statearr_31548[(8)] = inst_31523__$1);

return statearr_31548;
})();
if(inst_31525){
var statearr_31549_31575 = state_31543__$1;
(statearr_31549_31575[(1)] = (5));

} else {
var statearr_31550_31576 = state_31543__$1;
(statearr_31550_31576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (6))){
var state_31543__$1 = state_31543;
var statearr_31551_31577 = state_31543__$1;
(statearr_31551_31577[(2)] = null);

(statearr_31551_31577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (3))){
var inst_31540 = (state_31543[(2)]);
var inst_31541 = cljs.core.async.close_BANG_.call(null,out);
var state_31543__$1 = (function (){var statearr_31552 = state_31543;
(statearr_31552[(9)] = inst_31540);

return statearr_31552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31543__$1,inst_31541);
} else {
if((state_val_31544 === (2))){
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31543__$1,(4),ch);
} else {
if((state_val_31544 === (11))){
var inst_31523 = (state_31543[(8)]);
var inst_31532 = (state_31543[(2)]);
var inst_31520 = inst_31523;
var state_31543__$1 = (function (){var statearr_31553 = state_31543;
(statearr_31553[(7)] = inst_31520);

(statearr_31553[(10)] = inst_31532);

return statearr_31553;
})();
var statearr_31554_31578 = state_31543__$1;
(statearr_31554_31578[(2)] = null);

(statearr_31554_31578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (9))){
var inst_31523 = (state_31543[(8)]);
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31543__$1,(11),out,inst_31523);
} else {
if((state_val_31544 === (5))){
var inst_31523 = (state_31543[(8)]);
var inst_31520 = (state_31543[(7)]);
var inst_31527 = cljs.core._EQ_.call(null,inst_31523,inst_31520);
var state_31543__$1 = state_31543;
if(inst_31527){
var statearr_31556_31579 = state_31543__$1;
(statearr_31556_31579[(1)] = (8));

} else {
var statearr_31557_31580 = state_31543__$1;
(statearr_31557_31580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (10))){
var inst_31535 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
var statearr_31558_31581 = state_31543__$1;
(statearr_31558_31581[(2)] = inst_31535);

(statearr_31558_31581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (8))){
var inst_31520 = (state_31543[(7)]);
var tmp31555 = inst_31520;
var inst_31520__$1 = tmp31555;
var state_31543__$1 = (function (){var statearr_31559 = state_31543;
(statearr_31559[(7)] = inst_31520__$1);

return statearr_31559;
})();
var statearr_31560_31582 = state_31543__$1;
(statearr_31560_31582[(2)] = null);

(statearr_31560_31582[(1)] = (2));


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
});})(c__28977__auto___31572,out))
;
return ((function (switch__28865__auto__,c__28977__auto___31572,out){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_31564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31564[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_31564[(1)] = (1));

return statearr_31564;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_31543){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_31543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e31565){if((e31565 instanceof Object)){
var ex__28869__auto__ = e31565;
var statearr_31566_31583 = state_31543;
(statearr_31566_31583[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31584 = state_31543;
state_31543 = G__31584;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_31543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_31543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___31572,out))
})();
var state__28979__auto__ = (function (){var statearr_31567 = f__28978__auto__.call(null);
(statearr_31567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___31572);

return statearr_31567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___31572,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31585 = [];
var len__25923__auto___31655 = arguments.length;
var i__25924__auto___31656 = (0);
while(true){
if((i__25924__auto___31656 < len__25923__auto___31655)){
args31585.push((arguments[i__25924__auto___31656]));

var G__31657 = (i__25924__auto___31656 + (1));
i__25924__auto___31656 = G__31657;
continue;
} else {
}
break;
}

var G__31587 = args31585.length;
switch (G__31587) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31585.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28977__auto___31659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___31659,out){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___31659,out){
return (function (state_31625){
var state_val_31626 = (state_31625[(1)]);
if((state_val_31626 === (7))){
var inst_31621 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31627_31660 = state_31625__$1;
(statearr_31627_31660[(2)] = inst_31621);

(statearr_31627_31660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (1))){
var inst_31588 = (new Array(n));
var inst_31589 = inst_31588;
var inst_31590 = (0);
var state_31625__$1 = (function (){var statearr_31628 = state_31625;
(statearr_31628[(7)] = inst_31590);

(statearr_31628[(8)] = inst_31589);

return statearr_31628;
})();
var statearr_31629_31661 = state_31625__$1;
(statearr_31629_31661[(2)] = null);

(statearr_31629_31661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (4))){
var inst_31593 = (state_31625[(9)]);
var inst_31593__$1 = (state_31625[(2)]);
var inst_31594 = (inst_31593__$1 == null);
var inst_31595 = cljs.core.not.call(null,inst_31594);
var state_31625__$1 = (function (){var statearr_31630 = state_31625;
(statearr_31630[(9)] = inst_31593__$1);

return statearr_31630;
})();
if(inst_31595){
var statearr_31631_31662 = state_31625__$1;
(statearr_31631_31662[(1)] = (5));

} else {
var statearr_31632_31663 = state_31625__$1;
(statearr_31632_31663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (15))){
var inst_31615 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31633_31664 = state_31625__$1;
(statearr_31633_31664[(2)] = inst_31615);

(statearr_31633_31664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (13))){
var state_31625__$1 = state_31625;
var statearr_31634_31665 = state_31625__$1;
(statearr_31634_31665[(2)] = null);

(statearr_31634_31665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (6))){
var inst_31590 = (state_31625[(7)]);
var inst_31611 = (inst_31590 > (0));
var state_31625__$1 = state_31625;
if(cljs.core.truth_(inst_31611)){
var statearr_31635_31666 = state_31625__$1;
(statearr_31635_31666[(1)] = (12));

} else {
var statearr_31636_31667 = state_31625__$1;
(statearr_31636_31667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (3))){
var inst_31623 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31625__$1,inst_31623);
} else {
if((state_val_31626 === (12))){
var inst_31589 = (state_31625[(8)]);
var inst_31613 = cljs.core.vec.call(null,inst_31589);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31625__$1,(15),out,inst_31613);
} else {
if((state_val_31626 === (2))){
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31625__$1,(4),ch);
} else {
if((state_val_31626 === (11))){
var inst_31605 = (state_31625[(2)]);
var inst_31606 = (new Array(n));
var inst_31589 = inst_31606;
var inst_31590 = (0);
var state_31625__$1 = (function (){var statearr_31637 = state_31625;
(statearr_31637[(7)] = inst_31590);

(statearr_31637[(10)] = inst_31605);

(statearr_31637[(8)] = inst_31589);

return statearr_31637;
})();
var statearr_31638_31668 = state_31625__$1;
(statearr_31638_31668[(2)] = null);

(statearr_31638_31668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (9))){
var inst_31589 = (state_31625[(8)]);
var inst_31603 = cljs.core.vec.call(null,inst_31589);
var state_31625__$1 = state_31625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31625__$1,(11),out,inst_31603);
} else {
if((state_val_31626 === (5))){
var inst_31590 = (state_31625[(7)]);
var inst_31598 = (state_31625[(11)]);
var inst_31593 = (state_31625[(9)]);
var inst_31589 = (state_31625[(8)]);
var inst_31597 = (inst_31589[inst_31590] = inst_31593);
var inst_31598__$1 = (inst_31590 + (1));
var inst_31599 = (inst_31598__$1 < n);
var state_31625__$1 = (function (){var statearr_31639 = state_31625;
(statearr_31639[(12)] = inst_31597);

(statearr_31639[(11)] = inst_31598__$1);

return statearr_31639;
})();
if(cljs.core.truth_(inst_31599)){
var statearr_31640_31669 = state_31625__$1;
(statearr_31640_31669[(1)] = (8));

} else {
var statearr_31641_31670 = state_31625__$1;
(statearr_31641_31670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (14))){
var inst_31618 = (state_31625[(2)]);
var inst_31619 = cljs.core.async.close_BANG_.call(null,out);
var state_31625__$1 = (function (){var statearr_31643 = state_31625;
(statearr_31643[(13)] = inst_31618);

return statearr_31643;
})();
var statearr_31644_31671 = state_31625__$1;
(statearr_31644_31671[(2)] = inst_31619);

(statearr_31644_31671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (10))){
var inst_31609 = (state_31625[(2)]);
var state_31625__$1 = state_31625;
var statearr_31645_31672 = state_31625__$1;
(statearr_31645_31672[(2)] = inst_31609);

(statearr_31645_31672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31626 === (8))){
var inst_31598 = (state_31625[(11)]);
var inst_31589 = (state_31625[(8)]);
var tmp31642 = inst_31589;
var inst_31589__$1 = tmp31642;
var inst_31590 = inst_31598;
var state_31625__$1 = (function (){var statearr_31646 = state_31625;
(statearr_31646[(7)] = inst_31590);

(statearr_31646[(8)] = inst_31589__$1);

return statearr_31646;
})();
var statearr_31647_31673 = state_31625__$1;
(statearr_31647_31673[(2)] = null);

(statearr_31647_31673[(1)] = (2));


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
});})(c__28977__auto___31659,out))
;
return ((function (switch__28865__auto__,c__28977__auto___31659,out){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_31651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31651[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_31651[(1)] = (1));

return statearr_31651;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_31625){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_31625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e31652){if((e31652 instanceof Object)){
var ex__28869__auto__ = e31652;
var statearr_31653_31674 = state_31625;
(statearr_31653_31674[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31675 = state_31625;
state_31625 = G__31675;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_31625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_31625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___31659,out))
})();
var state__28979__auto__ = (function (){var statearr_31654 = f__28978__auto__.call(null);
(statearr_31654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___31659);

return statearr_31654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___31659,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31676 = [];
var len__25923__auto___31750 = arguments.length;
var i__25924__auto___31751 = (0);
while(true){
if((i__25924__auto___31751 < len__25923__auto___31750)){
args31676.push((arguments[i__25924__auto___31751]));

var G__31752 = (i__25924__auto___31751 + (1));
i__25924__auto___31751 = G__31752;
continue;
} else {
}
break;
}

var G__31678 = args31676.length;
switch (G__31678) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31676.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28977__auto___31754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28977__auto___31754,out){
return (function (){
var f__28978__auto__ = (function (){var switch__28865__auto__ = ((function (c__28977__auto___31754,out){
return (function (state_31720){
var state_val_31721 = (state_31720[(1)]);
if((state_val_31721 === (7))){
var inst_31716 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31722_31755 = state_31720__$1;
(statearr_31722_31755[(2)] = inst_31716);

(statearr_31722_31755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (1))){
var inst_31679 = [];
var inst_31680 = inst_31679;
var inst_31681 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31720__$1 = (function (){var statearr_31723 = state_31720;
(statearr_31723[(7)] = inst_31681);

(statearr_31723[(8)] = inst_31680);

return statearr_31723;
})();
var statearr_31724_31756 = state_31720__$1;
(statearr_31724_31756[(2)] = null);

(statearr_31724_31756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (4))){
var inst_31684 = (state_31720[(9)]);
var inst_31684__$1 = (state_31720[(2)]);
var inst_31685 = (inst_31684__$1 == null);
var inst_31686 = cljs.core.not.call(null,inst_31685);
var state_31720__$1 = (function (){var statearr_31725 = state_31720;
(statearr_31725[(9)] = inst_31684__$1);

return statearr_31725;
})();
if(inst_31686){
var statearr_31726_31757 = state_31720__$1;
(statearr_31726_31757[(1)] = (5));

} else {
var statearr_31727_31758 = state_31720__$1;
(statearr_31727_31758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (15))){
var inst_31710 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31728_31759 = state_31720__$1;
(statearr_31728_31759[(2)] = inst_31710);

(statearr_31728_31759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (13))){
var state_31720__$1 = state_31720;
var statearr_31729_31760 = state_31720__$1;
(statearr_31729_31760[(2)] = null);

(statearr_31729_31760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (6))){
var inst_31680 = (state_31720[(8)]);
var inst_31705 = inst_31680.length;
var inst_31706 = (inst_31705 > (0));
var state_31720__$1 = state_31720;
if(cljs.core.truth_(inst_31706)){
var statearr_31730_31761 = state_31720__$1;
(statearr_31730_31761[(1)] = (12));

} else {
var statearr_31731_31762 = state_31720__$1;
(statearr_31731_31762[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (3))){
var inst_31718 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31720__$1,inst_31718);
} else {
if((state_val_31721 === (12))){
var inst_31680 = (state_31720[(8)]);
var inst_31708 = cljs.core.vec.call(null,inst_31680);
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31720__$1,(15),out,inst_31708);
} else {
if((state_val_31721 === (2))){
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31720__$1,(4),ch);
} else {
if((state_val_31721 === (11))){
var inst_31688 = (state_31720[(10)]);
var inst_31684 = (state_31720[(9)]);
var inst_31698 = (state_31720[(2)]);
var inst_31699 = [];
var inst_31700 = inst_31699.push(inst_31684);
var inst_31680 = inst_31699;
var inst_31681 = inst_31688;
var state_31720__$1 = (function (){var statearr_31732 = state_31720;
(statearr_31732[(11)] = inst_31700);

(statearr_31732[(7)] = inst_31681);

(statearr_31732[(12)] = inst_31698);

(statearr_31732[(8)] = inst_31680);

return statearr_31732;
})();
var statearr_31733_31763 = state_31720__$1;
(statearr_31733_31763[(2)] = null);

(statearr_31733_31763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (9))){
var inst_31680 = (state_31720[(8)]);
var inst_31696 = cljs.core.vec.call(null,inst_31680);
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31720__$1,(11),out,inst_31696);
} else {
if((state_val_31721 === (5))){
var inst_31681 = (state_31720[(7)]);
var inst_31688 = (state_31720[(10)]);
var inst_31684 = (state_31720[(9)]);
var inst_31688__$1 = f.call(null,inst_31684);
var inst_31689 = cljs.core._EQ_.call(null,inst_31688__$1,inst_31681);
var inst_31690 = cljs.core.keyword_identical_QMARK_.call(null,inst_31681,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31691 = (inst_31689) || (inst_31690);
var state_31720__$1 = (function (){var statearr_31734 = state_31720;
(statearr_31734[(10)] = inst_31688__$1);

return statearr_31734;
})();
if(cljs.core.truth_(inst_31691)){
var statearr_31735_31764 = state_31720__$1;
(statearr_31735_31764[(1)] = (8));

} else {
var statearr_31736_31765 = state_31720__$1;
(statearr_31736_31765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (14))){
var inst_31713 = (state_31720[(2)]);
var inst_31714 = cljs.core.async.close_BANG_.call(null,out);
var state_31720__$1 = (function (){var statearr_31738 = state_31720;
(statearr_31738[(13)] = inst_31713);

return statearr_31738;
})();
var statearr_31739_31766 = state_31720__$1;
(statearr_31739_31766[(2)] = inst_31714);

(statearr_31739_31766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (10))){
var inst_31703 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31740_31767 = state_31720__$1;
(statearr_31740_31767[(2)] = inst_31703);

(statearr_31740_31767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31721 === (8))){
var inst_31688 = (state_31720[(10)]);
var inst_31680 = (state_31720[(8)]);
var inst_31684 = (state_31720[(9)]);
var inst_31693 = inst_31680.push(inst_31684);
var tmp31737 = inst_31680;
var inst_31680__$1 = tmp31737;
var inst_31681 = inst_31688;
var state_31720__$1 = (function (){var statearr_31741 = state_31720;
(statearr_31741[(7)] = inst_31681);

(statearr_31741[(8)] = inst_31680__$1);

(statearr_31741[(14)] = inst_31693);

return statearr_31741;
})();
var statearr_31742_31768 = state_31720__$1;
(statearr_31742_31768[(2)] = null);

(statearr_31742_31768[(1)] = (2));


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
});})(c__28977__auto___31754,out))
;
return ((function (switch__28865__auto__,c__28977__auto___31754,out){
return (function() {
var cljs$core$async$state_machine__28866__auto__ = null;
var cljs$core$async$state_machine__28866__auto____0 = (function (){
var statearr_31746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31746[(0)] = cljs$core$async$state_machine__28866__auto__);

(statearr_31746[(1)] = (1));

return statearr_31746;
});
var cljs$core$async$state_machine__28866__auto____1 = (function (state_31720){
while(true){
var ret_value__28867__auto__ = (function (){try{while(true){
var result__28868__auto__ = switch__28865__auto__.call(null,state_31720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28868__auto__;
}
break;
}
}catch (e31747){if((e31747 instanceof Object)){
var ex__28869__auto__ = e31747;
var statearr_31748_31769 = state_31720;
(statearr_31748_31769[(5)] = ex__28869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31770 = state_31720;
state_31720 = G__31770;
continue;
} else {
return ret_value__28867__auto__;
}
break;
}
});
cljs$core$async$state_machine__28866__auto__ = function(state_31720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28866__auto____1.call(this,state_31720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28866__auto____0;
cljs$core$async$state_machine__28866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28866__auto____1;
return cljs$core$async$state_machine__28866__auto__;
})()
;})(switch__28865__auto__,c__28977__auto___31754,out))
})();
var state__28979__auto__ = (function (){var statearr_31749 = f__28978__auto__.call(null);
(statearr_31749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28977__auto___31754);

return statearr_31749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28979__auto__);
});})(c__28977__auto___31754,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1658328681430