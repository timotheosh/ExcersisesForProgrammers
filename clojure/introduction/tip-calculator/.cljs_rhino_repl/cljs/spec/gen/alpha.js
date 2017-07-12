// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__46207__auto__,writer__46208__auto__,opt__46209__auto__){
return cljs.core._write.call(null,writer__46208__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49134 = arguments.length;
var i__46722__auto___49135 = (0);
while(true){
if((i__46722__auto___49135 < len__46721__auto___49134)){
args__46728__auto__.push((arguments[i__46722__auto___49135]));

var G__49136 = (i__46722__auto___49135 + (1));
i__46722__auto___49135 = G__49136;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq49133){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49133));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49138 = arguments.length;
var i__46722__auto___49139 = (0);
while(true){
if((i__46722__auto___49139 < len__46721__auto___49138)){
args__46728__auto__.push((arguments[i__46722__auto___49139]));

var G__49140 = (i__46722__auto___49139 + (1));
i__46722__auto___49139 = G__49140;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq49137){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49137));
});

var g_QMARK__49141 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_49142 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49141){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__49141))
,null));
var mkg_49143 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49141,g_49142){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__49141,g_49142))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__49141,g_49142,mkg_49143){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__49141).call(null,x);
});})(g_QMARK__49141,g_49142,mkg_49143))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__49141,g_49142,mkg_49143){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_49143).call(null,gfn);
});})(g_QMARK__49141,g_49142,mkg_49143))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__49141,g_49142,mkg_49143){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_49142).call(null,generator);
});})(g_QMARK__49141,g_49142,mkg_49143))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__47698__auto___49163 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__47698__auto___49163){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49164 = arguments.length;
var i__46722__auto___49165 = (0);
while(true){
if((i__46722__auto___49165 < len__46721__auto___49164)){
args__46728__auto__.push((arguments[i__46722__auto___49165]));

var G__49166 = (i__46722__auto___49165 + (1));
i__46722__auto___49165 = G__49166;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49163))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49163){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49163),args);
});})(g__47698__auto___49163))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__47698__auto___49163){
return (function (seq49144){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49144));
});})(g__47698__auto___49163))
;


var g__47698__auto___49167 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__47698__auto___49167){
return (function cljs$spec$gen$alpha$list(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49168 = arguments.length;
var i__46722__auto___49169 = (0);
while(true){
if((i__46722__auto___49169 < len__46721__auto___49168)){
args__46728__auto__.push((arguments[i__46722__auto___49169]));

var G__49170 = (i__46722__auto___49169 + (1));
i__46722__auto___49169 = G__49170;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49167))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49167){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49167),args);
});})(g__47698__auto___49167))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__47698__auto___49167){
return (function (seq49145){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49145));
});})(g__47698__auto___49167))
;


var g__47698__auto___49171 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__47698__auto___49171){
return (function cljs$spec$gen$alpha$map(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49172 = arguments.length;
var i__46722__auto___49173 = (0);
while(true){
if((i__46722__auto___49173 < len__46721__auto___49172)){
args__46728__auto__.push((arguments[i__46722__auto___49173]));

var G__49174 = (i__46722__auto___49173 + (1));
i__46722__auto___49173 = G__49174;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49171))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49171){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49171),args);
});})(g__47698__auto___49171))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__47698__auto___49171){
return (function (seq49146){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49146));
});})(g__47698__auto___49171))
;


var g__47698__auto___49175 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__47698__auto___49175){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49176 = arguments.length;
var i__46722__auto___49177 = (0);
while(true){
if((i__46722__auto___49177 < len__46721__auto___49176)){
args__46728__auto__.push((arguments[i__46722__auto___49177]));

var G__49178 = (i__46722__auto___49177 + (1));
i__46722__auto___49177 = G__49178;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49175))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49175){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49175),args);
});})(g__47698__auto___49175))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__47698__auto___49175){
return (function (seq49147){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49147));
});})(g__47698__auto___49175))
;


var g__47698__auto___49179 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__47698__auto___49179){
return (function cljs$spec$gen$alpha$set(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49180 = arguments.length;
var i__46722__auto___49181 = (0);
while(true){
if((i__46722__auto___49181 < len__46721__auto___49180)){
args__46728__auto__.push((arguments[i__46722__auto___49181]));

var G__49182 = (i__46722__auto___49181 + (1));
i__46722__auto___49181 = G__49182;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49179))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49179){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49179),args);
});})(g__47698__auto___49179))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__47698__auto___49179){
return (function (seq49148){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49148));
});})(g__47698__auto___49179))
;


var g__47698__auto___49183 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__47698__auto___49183){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49184 = arguments.length;
var i__46722__auto___49185 = (0);
while(true){
if((i__46722__auto___49185 < len__46721__auto___49184)){
args__46728__auto__.push((arguments[i__46722__auto___49185]));

var G__49186 = (i__46722__auto___49185 + (1));
i__46722__auto___49185 = G__49186;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49183))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49183){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49183),args);
});})(g__47698__auto___49183))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__47698__auto___49183){
return (function (seq49149){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49149));
});})(g__47698__auto___49183))
;


var g__47698__auto___49187 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__47698__auto___49187){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49188 = arguments.length;
var i__46722__auto___49189 = (0);
while(true){
if((i__46722__auto___49189 < len__46721__auto___49188)){
args__46728__auto__.push((arguments[i__46722__auto___49189]));

var G__49190 = (i__46722__auto___49189 + (1));
i__46722__auto___49189 = G__49190;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49187))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49187){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49187),args);
});})(g__47698__auto___49187))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__47698__auto___49187){
return (function (seq49150){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49150));
});})(g__47698__auto___49187))
;


var g__47698__auto___49191 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__47698__auto___49191){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49192 = arguments.length;
var i__46722__auto___49193 = (0);
while(true){
if((i__46722__auto___49193 < len__46721__auto___49192)){
args__46728__auto__.push((arguments[i__46722__auto___49193]));

var G__49194 = (i__46722__auto___49193 + (1));
i__46722__auto___49193 = G__49194;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49191))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49191){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49191),args);
});})(g__47698__auto___49191))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__47698__auto___49191){
return (function (seq49151){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49151));
});})(g__47698__auto___49191))
;


var g__47698__auto___49195 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__47698__auto___49195){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49196 = arguments.length;
var i__46722__auto___49197 = (0);
while(true){
if((i__46722__auto___49197 < len__46721__auto___49196)){
args__46728__auto__.push((arguments[i__46722__auto___49197]));

var G__49198 = (i__46722__auto___49197 + (1));
i__46722__auto___49197 = G__49198;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49195))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49195){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49195),args);
});})(g__47698__auto___49195))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__47698__auto___49195){
return (function (seq49152){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49152));
});})(g__47698__auto___49195))
;


var g__47698__auto___49199 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__47698__auto___49199){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49200 = arguments.length;
var i__46722__auto___49201 = (0);
while(true){
if((i__46722__auto___49201 < len__46721__auto___49200)){
args__46728__auto__.push((arguments[i__46722__auto___49201]));

var G__49202 = (i__46722__auto___49201 + (1));
i__46722__auto___49201 = G__49202;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49199))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49199),args);
});})(g__47698__auto___49199))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__47698__auto___49199){
return (function (seq49153){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49153));
});})(g__47698__auto___49199))
;


var g__47698__auto___49203 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__47698__auto___49203){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49204 = arguments.length;
var i__46722__auto___49205 = (0);
while(true){
if((i__46722__auto___49205 < len__46721__auto___49204)){
args__46728__auto__.push((arguments[i__46722__auto___49205]));

var G__49206 = (i__46722__auto___49205 + (1));
i__46722__auto___49205 = G__49206;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49203))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49203),args);
});})(g__47698__auto___49203))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__47698__auto___49203){
return (function (seq49154){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49154));
});})(g__47698__auto___49203))
;


var g__47698__auto___49207 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__47698__auto___49207){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49208 = arguments.length;
var i__46722__auto___49209 = (0);
while(true){
if((i__46722__auto___49209 < len__46721__auto___49208)){
args__46728__auto__.push((arguments[i__46722__auto___49209]));

var G__49210 = (i__46722__auto___49209 + (1));
i__46722__auto___49209 = G__49210;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49207))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49207),args);
});})(g__47698__auto___49207))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__47698__auto___49207){
return (function (seq49155){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49155));
});})(g__47698__auto___49207))
;


var g__47698__auto___49211 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__47698__auto___49211){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49212 = arguments.length;
var i__46722__auto___49213 = (0);
while(true){
if((i__46722__auto___49213 < len__46721__auto___49212)){
args__46728__auto__.push((arguments[i__46722__auto___49213]));

var G__49214 = (i__46722__auto___49213 + (1));
i__46722__auto___49213 = G__49214;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49211))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49211),args);
});})(g__47698__auto___49211))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__47698__auto___49211){
return (function (seq49156){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49156));
});})(g__47698__auto___49211))
;


var g__47698__auto___49215 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__47698__auto___49215){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49216 = arguments.length;
var i__46722__auto___49217 = (0);
while(true){
if((i__46722__auto___49217 < len__46721__auto___49216)){
args__46728__auto__.push((arguments[i__46722__auto___49217]));

var G__49218 = (i__46722__auto___49217 + (1));
i__46722__auto___49217 = G__49218;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49215))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49215),args);
});})(g__47698__auto___49215))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__47698__auto___49215){
return (function (seq49157){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49157));
});})(g__47698__auto___49215))
;


var g__47698__auto___49219 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__47698__auto___49219){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49220 = arguments.length;
var i__46722__auto___49221 = (0);
while(true){
if((i__46722__auto___49221 < len__46721__auto___49220)){
args__46728__auto__.push((arguments[i__46722__auto___49221]));

var G__49222 = (i__46722__auto___49221 + (1));
i__46722__auto___49221 = G__49222;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49219))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49219),args);
});})(g__47698__auto___49219))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__47698__auto___49219){
return (function (seq49158){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49158));
});})(g__47698__auto___49219))
;


var g__47698__auto___49223 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__47698__auto___49223){
return (function cljs$spec$gen$alpha$return(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49224 = arguments.length;
var i__46722__auto___49225 = (0);
while(true){
if((i__46722__auto___49225 < len__46721__auto___49224)){
args__46728__auto__.push((arguments[i__46722__auto___49225]));

var G__49226 = (i__46722__auto___49225 + (1));
i__46722__auto___49225 = G__49226;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49223))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49223),args);
});})(g__47698__auto___49223))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__47698__auto___49223){
return (function (seq49159){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49159));
});})(g__47698__auto___49223))
;


var g__47698__auto___49227 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__47698__auto___49227){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49228 = arguments.length;
var i__46722__auto___49229 = (0);
while(true){
if((i__46722__auto___49229 < len__46721__auto___49228)){
args__46728__auto__.push((arguments[i__46722__auto___49229]));

var G__49230 = (i__46722__auto___49229 + (1));
i__46722__auto___49229 = G__49230;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49227))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49227),args);
});})(g__47698__auto___49227))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__47698__auto___49227){
return (function (seq49160){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49160));
});})(g__47698__auto___49227))
;


var g__47698__auto___49231 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__47698__auto___49231){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49232 = arguments.length;
var i__46722__auto___49233 = (0);
while(true){
if((i__46722__auto___49233 < len__46721__auto___49232)){
args__46728__auto__.push((arguments[i__46722__auto___49233]));

var G__49234 = (i__46722__auto___49233 + (1));
i__46722__auto___49233 = G__49234;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49231))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49231),args);
});})(g__47698__auto___49231))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__47698__auto___49231){
return (function (seq49161){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49161));
});})(g__47698__auto___49231))
;


var g__47698__auto___49235 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__47698__auto___49235){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49236 = arguments.length;
var i__46722__auto___49237 = (0);
while(true){
if((i__46722__auto___49237 < len__46721__auto___49236)){
args__46728__auto__.push((arguments[i__46722__auto___49237]));

var G__49238 = (i__46722__auto___49237 + (1));
i__46722__auto___49237 = G__49238;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47698__auto___49235))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47698__auto___49235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47698__auto___49235),args);
});})(g__47698__auto___49235))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__47698__auto___49235){
return (function (seq49162){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49162));
});})(g__47698__auto___49235))
;

var g__47711__auto___49260 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__47711__auto___49260){
return (function cljs$spec$gen$alpha$any(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49261 = arguments.length;
var i__46722__auto___49262 = (0);
while(true){
if((i__46722__auto___49262 < len__46721__auto___49261)){
args__46728__auto__.push((arguments[i__46722__auto___49262]));

var G__49263 = (i__46722__auto___49262 + (1));
i__46722__auto___49262 = G__49263;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49260))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49260){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49260);
});})(g__47711__auto___49260))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__47711__auto___49260){
return (function (seq49239){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49239));
});})(g__47711__auto___49260))
;


var g__47711__auto___49264 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__47711__auto___49264){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49265 = arguments.length;
var i__46722__auto___49266 = (0);
while(true){
if((i__46722__auto___49266 < len__46721__auto___49265)){
args__46728__auto__.push((arguments[i__46722__auto___49266]));

var G__49267 = (i__46722__auto___49266 + (1));
i__46722__auto___49266 = G__49267;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49264))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49264){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49264);
});})(g__47711__auto___49264))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__47711__auto___49264){
return (function (seq49240){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49240));
});})(g__47711__auto___49264))
;


var g__47711__auto___49268 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__47711__auto___49268){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49269 = arguments.length;
var i__46722__auto___49270 = (0);
while(true){
if((i__46722__auto___49270 < len__46721__auto___49269)){
args__46728__auto__.push((arguments[i__46722__auto___49270]));

var G__49271 = (i__46722__auto___49270 + (1));
i__46722__auto___49270 = G__49271;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49268))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49268){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49268);
});})(g__47711__auto___49268))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__47711__auto___49268){
return (function (seq49241){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49241));
});})(g__47711__auto___49268))
;


var g__47711__auto___49272 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__47711__auto___49272){
return (function cljs$spec$gen$alpha$char(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49273 = arguments.length;
var i__46722__auto___49274 = (0);
while(true){
if((i__46722__auto___49274 < len__46721__auto___49273)){
args__46728__auto__.push((arguments[i__46722__auto___49274]));

var G__49275 = (i__46722__auto___49274 + (1));
i__46722__auto___49274 = G__49275;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49272))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49272){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49272);
});})(g__47711__auto___49272))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__47711__auto___49272){
return (function (seq49242){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49242));
});})(g__47711__auto___49272))
;


var g__47711__auto___49276 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__47711__auto___49276){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49277 = arguments.length;
var i__46722__auto___49278 = (0);
while(true){
if((i__46722__auto___49278 < len__46721__auto___49277)){
args__46728__auto__.push((arguments[i__46722__auto___49278]));

var G__49279 = (i__46722__auto___49278 + (1));
i__46722__auto___49278 = G__49279;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49276))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49276){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49276);
});})(g__47711__auto___49276))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__47711__auto___49276){
return (function (seq49243){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49243));
});})(g__47711__auto___49276))
;


var g__47711__auto___49280 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__47711__auto___49280){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49281 = arguments.length;
var i__46722__auto___49282 = (0);
while(true){
if((i__46722__auto___49282 < len__46721__auto___49281)){
args__46728__auto__.push((arguments[i__46722__auto___49282]));

var G__49283 = (i__46722__auto___49282 + (1));
i__46722__auto___49282 = G__49283;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49280))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49280){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49280);
});})(g__47711__auto___49280))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__47711__auto___49280){
return (function (seq49244){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49244));
});})(g__47711__auto___49280))
;


var g__47711__auto___49284 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__47711__auto___49284){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49285 = arguments.length;
var i__46722__auto___49286 = (0);
while(true){
if((i__46722__auto___49286 < len__46721__auto___49285)){
args__46728__auto__.push((arguments[i__46722__auto___49286]));

var G__49287 = (i__46722__auto___49286 + (1));
i__46722__auto___49286 = G__49287;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49284))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49284){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49284);
});})(g__47711__auto___49284))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__47711__auto___49284){
return (function (seq49245){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49245));
});})(g__47711__auto___49284))
;


var g__47711__auto___49288 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__47711__auto___49288){
return (function cljs$spec$gen$alpha$double(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49289 = arguments.length;
var i__46722__auto___49290 = (0);
while(true){
if((i__46722__auto___49290 < len__46721__auto___49289)){
args__46728__auto__.push((arguments[i__46722__auto___49290]));

var G__49291 = (i__46722__auto___49290 + (1));
i__46722__auto___49290 = G__49291;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49288))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49288){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49288);
});})(g__47711__auto___49288))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__47711__auto___49288){
return (function (seq49246){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49246));
});})(g__47711__auto___49288))
;


var g__47711__auto___49292 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__47711__auto___49292){
return (function cljs$spec$gen$alpha$int(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49293 = arguments.length;
var i__46722__auto___49294 = (0);
while(true){
if((i__46722__auto___49294 < len__46721__auto___49293)){
args__46728__auto__.push((arguments[i__46722__auto___49294]));

var G__49295 = (i__46722__auto___49294 + (1));
i__46722__auto___49294 = G__49295;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49292))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49292){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49292);
});})(g__47711__auto___49292))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__47711__auto___49292){
return (function (seq49247){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49247));
});})(g__47711__auto___49292))
;


var g__47711__auto___49296 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__47711__auto___49296){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49297 = arguments.length;
var i__46722__auto___49298 = (0);
while(true){
if((i__46722__auto___49298 < len__46721__auto___49297)){
args__46728__auto__.push((arguments[i__46722__auto___49298]));

var G__49299 = (i__46722__auto___49298 + (1));
i__46722__auto___49298 = G__49299;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49296))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49296){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49296);
});})(g__47711__auto___49296))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__47711__auto___49296){
return (function (seq49248){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49248));
});})(g__47711__auto___49296))
;


var g__47711__auto___49300 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__47711__auto___49300){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49301 = arguments.length;
var i__46722__auto___49302 = (0);
while(true){
if((i__46722__auto___49302 < len__46721__auto___49301)){
args__46728__auto__.push((arguments[i__46722__auto___49302]));

var G__49303 = (i__46722__auto___49302 + (1));
i__46722__auto___49302 = G__49303;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49300))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49300){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49300);
});})(g__47711__auto___49300))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__47711__auto___49300){
return (function (seq49249){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49249));
});})(g__47711__auto___49300))
;


var g__47711__auto___49304 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__47711__auto___49304){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49305 = arguments.length;
var i__46722__auto___49306 = (0);
while(true){
if((i__46722__auto___49306 < len__46721__auto___49305)){
args__46728__auto__.push((arguments[i__46722__auto___49306]));

var G__49307 = (i__46722__auto___49306 + (1));
i__46722__auto___49306 = G__49307;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49304))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49304){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49304);
});})(g__47711__auto___49304))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__47711__auto___49304){
return (function (seq49250){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49250));
});})(g__47711__auto___49304))
;


var g__47711__auto___49308 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__47711__auto___49308){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49309 = arguments.length;
var i__46722__auto___49310 = (0);
while(true){
if((i__46722__auto___49310 < len__46721__auto___49309)){
args__46728__auto__.push((arguments[i__46722__auto___49310]));

var G__49311 = (i__46722__auto___49310 + (1));
i__46722__auto___49310 = G__49311;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49308))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49308){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49308);
});})(g__47711__auto___49308))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__47711__auto___49308){
return (function (seq49251){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49251));
});})(g__47711__auto___49308))
;


var g__47711__auto___49312 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__47711__auto___49312){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49313 = arguments.length;
var i__46722__auto___49314 = (0);
while(true){
if((i__46722__auto___49314 < len__46721__auto___49313)){
args__46728__auto__.push((arguments[i__46722__auto___49314]));

var G__49315 = (i__46722__auto___49314 + (1));
i__46722__auto___49314 = G__49315;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49312))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49312){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49312);
});})(g__47711__auto___49312))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__47711__auto___49312){
return (function (seq49252){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49252));
});})(g__47711__auto___49312))
;


var g__47711__auto___49316 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__47711__auto___49316){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49317 = arguments.length;
var i__46722__auto___49318 = (0);
while(true){
if((i__46722__auto___49318 < len__46721__auto___49317)){
args__46728__auto__.push((arguments[i__46722__auto___49318]));

var G__49319 = (i__46722__auto___49318 + (1));
i__46722__auto___49318 = G__49319;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49316))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49316){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49316);
});})(g__47711__auto___49316))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__47711__auto___49316){
return (function (seq49253){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49253));
});})(g__47711__auto___49316))
;


var g__47711__auto___49320 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__47711__auto___49320){
return (function cljs$spec$gen$alpha$string(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49321 = arguments.length;
var i__46722__auto___49322 = (0);
while(true){
if((i__46722__auto___49322 < len__46721__auto___49321)){
args__46728__auto__.push((arguments[i__46722__auto___49322]));

var G__49323 = (i__46722__auto___49322 + (1));
i__46722__auto___49322 = G__49323;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49320))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49320){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49320);
});})(g__47711__auto___49320))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__47711__auto___49320){
return (function (seq49254){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49254));
});})(g__47711__auto___49320))
;


var g__47711__auto___49324 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__47711__auto___49324){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49325 = arguments.length;
var i__46722__auto___49326 = (0);
while(true){
if((i__46722__auto___49326 < len__46721__auto___49325)){
args__46728__auto__.push((arguments[i__46722__auto___49326]));

var G__49327 = (i__46722__auto___49326 + (1));
i__46722__auto___49326 = G__49327;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49324))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49324){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49324);
});})(g__47711__auto___49324))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__47711__auto___49324){
return (function (seq49255){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49255));
});})(g__47711__auto___49324))
;


var g__47711__auto___49328 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__47711__auto___49328){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49329 = arguments.length;
var i__46722__auto___49330 = (0);
while(true){
if((i__46722__auto___49330 < len__46721__auto___49329)){
args__46728__auto__.push((arguments[i__46722__auto___49330]));

var G__49331 = (i__46722__auto___49330 + (1));
i__46722__auto___49330 = G__49331;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49328))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49328){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49328);
});})(g__47711__auto___49328))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__47711__auto___49328){
return (function (seq49256){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49256));
});})(g__47711__auto___49328))
;


var g__47711__auto___49332 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__47711__auto___49332){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49333 = arguments.length;
var i__46722__auto___49334 = (0);
while(true){
if((i__46722__auto___49334 < len__46721__auto___49333)){
args__46728__auto__.push((arguments[i__46722__auto___49334]));

var G__49335 = (i__46722__auto___49334 + (1));
i__46722__auto___49334 = G__49335;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49332))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49332){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49332);
});})(g__47711__auto___49332))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__47711__auto___49332){
return (function (seq49257){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49257));
});})(g__47711__auto___49332))
;


var g__47711__auto___49336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__47711__auto___49336){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49337 = arguments.length;
var i__46722__auto___49338 = (0);
while(true){
if((i__46722__auto___49338 < len__46721__auto___49337)){
args__46728__auto__.push((arguments[i__46722__auto___49338]));

var G__49339 = (i__46722__auto___49338 + (1));
i__46722__auto___49338 = G__49339;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49336))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49336){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49336);
});})(g__47711__auto___49336))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__47711__auto___49336){
return (function (seq49258){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49258));
});})(g__47711__auto___49336))
;


var g__47711__auto___49340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__47711__auto___49340){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49341 = arguments.length;
var i__46722__auto___49342 = (0);
while(true){
if((i__46722__auto___49342 < len__46721__auto___49341)){
args__46728__auto__.push((arguments[i__46722__auto___49342]));

var G__49343 = (i__46722__auto___49342 + (1));
i__46722__auto___49342 = G__49343;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});})(g__47711__auto___49340))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47711__auto___49340){
return (function (args){
return cljs.core.deref.call(null,g__47711__auto___49340);
});})(g__47711__auto___49340))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__47711__auto___49340){
return (function (seq49259){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49259));
});})(g__47711__auto___49340))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__46728__auto__ = [];
var len__46721__auto___49346 = arguments.length;
var i__46722__auto___49347 = (0);
while(true){
if((i__46722__auto___49347 < len__46721__auto___49346)){
args__46728__auto__.push((arguments[i__46722__auto___49347]));

var G__49348 = (i__46722__auto___49347 + (1));
i__46722__auto___49347 = G__49348;
continue;
} else {
}
break;
}

var argseq__46729__auto__ = ((((0) < args__46728__auto__.length))?(new cljs.core.IndexedSeq(args__46728__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__46729__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__49344_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__49344_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq49345){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49345));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__49349_SHARP_){
return (new Date(p1__49349_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map