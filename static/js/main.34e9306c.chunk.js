(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(42)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(12),u=n.n(c),l=n(14),s=(n(38),n(39),n(40),function(e){var t=e.children;return r.a.createElement("div",{className:"card"},t)}),o=Object(l.b)(function(e){return{value:e.app.value}},function(e){return{increment:function(){return e({type:"INCREMENT"})},decrement:function(){return e({type:"DECREMENT"})}}})(function(e){var t=e.increment,n=e.decrement,a=e.value;return r.a.createElement(s,null,r.a.createElement("h2",{className:"react-feature-header"},"Saga Example"),a,r.a.createElement("button",{onClick:t},"Add 1"),r.a.createElement("button",{onClick:n},"Minus 1"))}),m=n(22),i=n(23),E=n(27),p=n(24),f=n(28),d=n(5),h=(r.a.Component,function(){var e=Object(a.useState)("My Name"),t=Object(d.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)("My Address"),l=Object(d.a)(u,2),o=l[0],m=l[1];return r.a.createElement(s,null,r.a.createElement("h2",{className:"react-feature-header"},"Use State Example"),r.a.createElement("h2",null," ",n," "),r.a.createElement("h2",null," ",o," "),r.a.createElement("button",{onClick:function(){return c("Anand")}},"Set Name to Anand"),r.a.createElement("button",{onClick:function(){return m("India")}},"Set Address"))}),v=n(4),b=n.n(v),j=n(7),O=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)("Bret"),l=Object(d.a)(u,2),o=l[0],m=l[1];return Object(a.useEffect)(function(){o.length>0&&function(){var e=Object(j.a)(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users?username=".concat(o));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n[0]);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[o]),r.a.createElement(s,null,r.a.createElement("h2",{className:"react-feature-header"},"Use Effect Example"),r.a.createElement("input",{type:"search",value:o,onChange:function(e){return m(e.target.value)}}),n?r.a.createElement("div",null,r.a.createElement("h3",null," Name: ",n.name," "),r.a.createElement("h3",null," Username:  ",n.username," "),r.a.createElement("h3",null," Email: ",n.email," ")):r.a.createElement("p",null," No user found ",o?"by":""," ",o," "))},y=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)(function(){!function(){var t=Object(j.a)(b.a.mark(function t(){var n,a;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,c(a[0]);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[e]),r},N=function(e){var t=e.userId,n=y("https://jsonplaceholder.typicode.com/users?id=".concat(t));return r.a.createElement(s,null,r.a.createElement("h2",{className:"react-feature-header"},"Custom Hooks - User"),n?r.a.createElement("div",null,r.a.createElement("h3",null,n.username),r.a.createElement("p",null,n.name)):r.a.createElement("p",null,"User not found"))},x=function(e){var t=e.postId,n=y("https://jsonplaceholder.typicode.com/posts?id=".concat(t));return r.a.createElement(s,null,r.a.createElement("h2",{className:"react-feature-header"},"Custom Hooks - Post"),n?r.a.createElement("div",null,r.a.createElement("h3",null," ",n.title," "),r.a.createElement("p",null," ",n.body," ")):r.a.createElement("p",null," No post found "))},w=function(e){var t=e.userId,n=Object(a.useState)(null),c=Object(d.a)(n,2),u=c[0],l=c[1];return Object(a.useEffect)(function(){!function(){var e=Object(j.a)(b.a.mark(function e(){var n,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users?id=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,l(a[0]);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t]),r.a.createElement(s,null,r.a.createElement("h2",{className:"react-feature-header"},"Non-Custom Hooks - User"),u?r.a.createElement("div",null,r.a.createElement("h3",null,u.username),r.a.createElement("p",null,u.name)):r.a.createElement("p",null,"User not found"))},S=n(10),C={user:null,searchQuery:"Antonette"},k=function(e,t){switch(t.type){case"SET_STATE":return Object(S.a)({},e,{user:t.payload});case"SET_SEARCH_QUERY":return Object(S.a)({},e,{searchQuery:t.payload});default:return e}},A=function(){var e=Object(a.useReducer)(k,C),t=Object(d.a)(e,2),n=t[0],c=t[1],u=n.user,l=n.searchQuery;return Object(a.useEffect)(function(){l.length>0&&function(){var e=Object(j.a)(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users?username=".concat(l));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c({type:"SET_STATE",payload:n[0]});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[l]),r.a.createElement(s,null,r.a.createElement("h2",{className:"react-feature-header"},"UseReducer Example"),r.a.createElement("input",{type:"search",value:l,onChange:function(e){return c({type:"SET_SEARCH_QUERY",payload:e.target.value})}}),u?r.a.createElement("div",null,r.a.createElement("h3",null,u.name),r.a.createElement("h3",null," ",u.username," "),r.a.createElement("h3",null," ",u.email," ")):r.a.createElement("p",null,"No user found ",l.length>0?"by":""," ",l," "))},R=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(w,{userId:5}),r.a.createElement(N,{userId:5}),r.a.createElement(x,{postId:15}),r.a.createElement(A,null))},T=n(6),I=n(26),g=n(25),M=n.n(g),U={value:0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT_FROM_SAGA":return Object(S.a)({},e,{value:e.value+1});case"DECREMENT":return Object(S.a)({},e,{value:e.value-1});default:return e}},H=Object(T.c)({app:_}),Q=n(15),B=b.a.mark(F),D=b.a.mark(G);function F(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("I am incremented");case 2:return e.next=4,Object(Q.a)(3e3);case 4:return e.next=6,Object(Q.b)({type:"INCREMENT_FROM_SAGA"});case 6:case"end":return e.stop()}},B)}function G(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.c)("INCREMENT",F);case 2:case"end":return e.stop()}},D)}var J=Object(I.a)(),Y=[M.a,J],P=Object(T.e)(H,T.a.apply(void 0,Y));J.run(G);u.a.render(r.a.createElement(l.a,{store:P},r.a.createElement(R,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.34e9306c.chunk.js.map