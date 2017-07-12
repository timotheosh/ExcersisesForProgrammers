// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48462){
var map__48463 = p__48462;
var map__48463__$1 = ((((!((map__48463 == null)))?((((map__48463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48463):map__48463);
var m = map__48463__$1;
var n = cljs.core.get.call(null,map__48463__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48465_48487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48466_48488 = null;
var count__48467_48489 = (0);
var i__48468_48490 = (0);
while(true){
if((i__48468_48490 < count__48467_48489)){
var f_48491 = cljs.core._nth.call(null,chunk__48466_48488,i__48468_48490);
cljs.core.println.call(null,"  ",f_48491);

var G__48492 = seq__48465_48487;
var G__48493 = chunk__48466_48488;
var G__48494 = count__48467_48489;
var G__48495 = (i__48468_48490 + (1));
seq__48465_48487 = G__48492;
chunk__48466_48488 = G__48493;
count__48467_48489 = G__48494;
i__48468_48490 = G__48495;
continue;
} else {
var temp__4657__auto___48496 = cljs.core.seq.call(null,seq__48465_48487);
if(temp__4657__auto___48496){
var seq__48465_48497__$1 = temp__4657__auto___48496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48465_48497__$1)){
var c__46416__auto___48498 = cljs.core.chunk_first.call(null,seq__48465_48497__$1);
var G__48499 = cljs.core.chunk_rest.call(null,seq__48465_48497__$1);
var G__48500 = c__46416__auto___48498;
var G__48501 = cljs.core.count.call(null,c__46416__auto___48498);
var G__48502 = (0);
seq__48465_48487 = G__48499;
chunk__48466_48488 = G__48500;
count__48467_48489 = G__48501;
i__48468_48490 = G__48502;
continue;
} else {
var f_48503 = cljs.core.first.call(null,seq__48465_48497__$1);
cljs.core.println.call(null,"  ",f_48503);

var G__48504 = cljs.core.next.call(null,seq__48465_48497__$1);
var G__48505 = null;
var G__48506 = (0);
var G__48507 = (0);
seq__48465_48487 = G__48504;
chunk__48466_48488 = G__48505;
count__48467_48489 = G__48506;
i__48468_48490 = G__48507;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48508 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__45596__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__45596__auto__)){
return or__45596__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48508);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48508)))?cljs.core.second.call(null,arglists_48508):arglists_48508));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__48469_48509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48470_48510 = null;
var count__48471_48511 = (0);
var i__48472_48512 = (0);
while(true){
if((i__48472_48512 < count__48471_48511)){
var vec__48473_48513 = cljs.core._nth.call(null,chunk__48470_48510,i__48472_48512);
var name_48514 = cljs.core.nth.call(null,vec__48473_48513,(0),null);
var map__48476_48515 = cljs.core.nth.call(null,vec__48473_48513,(1),null);
var map__48476_48516__$1 = ((((!((map__48476_48515 == null)))?((((map__48476_48515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48476_48515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48476_48515):map__48476_48515);
var doc_48517 = cljs.core.get.call(null,map__48476_48516__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48518 = cljs.core.get.call(null,map__48476_48516__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48514);

cljs.core.println.call(null," ",arglists_48518);

if(cljs.core.truth_(doc_48517)){
cljs.core.println.call(null," ",doc_48517);
} else {
}

var G__48519 = seq__48469_48509;
var G__48520 = chunk__48470_48510;
var G__48521 = count__48471_48511;
var G__48522 = (i__48472_48512 + (1));
seq__48469_48509 = G__48519;
chunk__48470_48510 = G__48520;
count__48471_48511 = G__48521;
i__48472_48512 = G__48522;
continue;
} else {
var temp__4657__auto___48523 = cljs.core.seq.call(null,seq__48469_48509);
if(temp__4657__auto___48523){
var seq__48469_48524__$1 = temp__4657__auto___48523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48469_48524__$1)){
var c__46416__auto___48525 = cljs.core.chunk_first.call(null,seq__48469_48524__$1);
var G__48526 = cljs.core.chunk_rest.call(null,seq__48469_48524__$1);
var G__48527 = c__46416__auto___48525;
var G__48528 = cljs.core.count.call(null,c__46416__auto___48525);
var G__48529 = (0);
seq__48469_48509 = G__48526;
chunk__48470_48510 = G__48527;
count__48471_48511 = G__48528;
i__48472_48512 = G__48529;
continue;
} else {
var vec__48478_48530 = cljs.core.first.call(null,seq__48469_48524__$1);
var name_48531 = cljs.core.nth.call(null,vec__48478_48530,(0),null);
var map__48481_48532 = cljs.core.nth.call(null,vec__48478_48530,(1),null);
var map__48481_48533__$1 = ((((!((map__48481_48532 == null)))?((((map__48481_48532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48481_48532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48481_48532):map__48481_48532);
var doc_48534 = cljs.core.get.call(null,map__48481_48533__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48535 = cljs.core.get.call(null,map__48481_48533__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48531);

cljs.core.println.call(null," ",arglists_48535);

if(cljs.core.truth_(doc_48534)){
cljs.core.println.call(null," ",doc_48534);
} else {
}

var G__48536 = cljs.core.next.call(null,seq__48469_48524__$1);
var G__48537 = null;
var G__48538 = (0);
var G__48539 = (0);
seq__48469_48509 = G__48536;
chunk__48470_48510 = G__48537;
count__48471_48511 = G__48538;
i__48472_48512 = G__48539;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__48483 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48484 = null;
var count__48485 = (0);
var i__48486 = (0);
while(true){
if((i__48486 < count__48485)){
var role = cljs.core._nth.call(null,chunk__48484,i__48486);
var temp__4657__auto___48540__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___48540__$1)){
var spec_48541 = temp__4657__auto___48540__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_48541));
} else {
}

var G__48542 = seq__48483;
var G__48543 = chunk__48484;
var G__48544 = count__48485;
var G__48545 = (i__48486 + (1));
seq__48483 = G__48542;
chunk__48484 = G__48543;
count__48485 = G__48544;
i__48486 = G__48545;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__48483);
if(temp__4657__auto____$1){
var seq__48483__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48483__$1)){
var c__46416__auto__ = cljs.core.chunk_first.call(null,seq__48483__$1);
var G__48546 = cljs.core.chunk_rest.call(null,seq__48483__$1);
var G__48547 = c__46416__auto__;
var G__48548 = cljs.core.count.call(null,c__46416__auto__);
var G__48549 = (0);
seq__48483 = G__48546;
chunk__48484 = G__48547;
count__48485 = G__48548;
i__48486 = G__48549;
continue;
} else {
var role = cljs.core.first.call(null,seq__48483__$1);
var temp__4657__auto___48550__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___48550__$2)){
var spec_48551 = temp__4657__auto___48550__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_48551));
} else {
}

var G__48552 = cljs.core.next.call(null,seq__48483__$1);
var G__48553 = null;
var G__48554 = (0);
var G__48555 = (0);
seq__48483 = G__48552;
chunk__48484 = G__48553;
count__48485 = G__48554;
i__48486 = G__48555;
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

//# sourceMappingURL=repl.js.map