(this.webpackJsonpxebia=this.webpackJsonpxebia||[]).push([[4],{87:function(t,e,a){"use strict";a.r(e);var c=a(21),n=a(0),r=a.n(n),o=a(27),u=a.n(o);var i=function(t){return r.a.createElement("div",{className:"product"},t.product.id,t.product.productName,t.product.price,t.product.color)};e.default=function(t){var e=Object(n.useState)([]),a=Object(c.a)(e,2),o=a[0],d=a[1];return Object(n.useEffect)((function(){u.a.get("http://localhost:3000/data/products.json").then((function(t){console.log(t.data),d(t.data)}))}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},o.map((function(t){return r.a.createElement(i,{key:t.id,product:t})}))))}}}]);
//# sourceMappingURL=4.1731f776.chunk.js.map