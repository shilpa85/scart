(this.webpackJsonpxebia=this.webpackJsonpxebia||[]).push([[3],{84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(20),l=a(17);var u=function(e){var t=Object(l.b)(),a=Object(l.c)((function(e){return e.products})).cartCount;return n.a.createElement("div",{className:"product"},n.a.createElement("div",{className:"product-image"},n.a.createElement("img",{src:e.product.image,alt:e.product.title}),e.product.discount>0&&n.a.createElement("span",{className:"product-discount"}," ",e.product.discount,"% ")),n.a.createElement("div",{className:"product-details"},n.a.createElement("div",{className:"product-left-column"},n.a.createElement("h3",{className:"product-name"},e.product.title.length>25?e.product.title.substr(0,25).concat("..."):e.product.title),n.a.createElement("h3",{className:"product-brand"},e.product.brand),n.a.createElement("span",{className:"product-price"},"Rs. ",Number(e.product.price.final_price).toFixed(2))),n.a.createElement("div",{className:"product-right-column"},n.a.createElement("span",{className:"product-color"},e.product.colour.title),n.a.createElement("button",{className:"button--primary",onClick:function(e){t(Object(r.a)(a+1))}},"Add To Cart"))))},i=a(30),o=a(21),m=a(27),s=a.n(m);var d=function(e){var t=Object(l.b)(),a=Object(c.useState)([]),u=Object(o.a)(a,2),m=u[0],d=u[1],p=Object(c.useState)([]),E=Object(o.a)(p,2),f=E[0],b=E[1],v=Object(c.useState)([]),O=Object(o.a)(v,2),h=O[0],j=O[1],k=Object(c.useState)([]),N=Object(o.a)(k,2),x=N[0],y=N[1],g=Object(c.useState)([]),w=Object(o.a)(g,2),S=w[0],C=w[1],M=Object(l.c)((function(e){return e.products})),_=M.productList,F=M.selectedColors,B=M.selectedBrands;return Object(c.useEffect)((function(){var e={},t=[],a=[],c=0;_.forEach((function(a){t.push(a.brand),e[a.colour.color]=a.colour.title,c<a.discount&&(c=a.discount)})),y(Object(i.a)(new Set(t))),j(Object.entries(e));for(var n=10;n<c+10;n+=10)a.push(n);C(a)}),[_]),Object(c.useEffect)((function(){s.a.get("https://xebiascart.herokuapp.com/filters").then((function(e){if(e.data.length&&e.data[2]){var t=e.data[2].values.filter((function(e){return"Max"!==e.key})),a=e.data[2].values.filter((function(e){return"Min"!==e.key}));d(t),b(a)}}))}),[]),n.a.createElement("div",{className:"filters-container"},n.a.createElement("div",{className:"filters-header"},n.a.createElement("h3",null,"Filters")),n.a.createElement("form",null,n.a.createElement("div",{className:"filters-item"},n.a.createElement("h4",null,"Colour"),n.a.createElement("ul",null,h&&h.map((function(e){var a,c=Object(o.a)(e,2),l=c[0],u=c[1];return n.a.createElement("li",{key:l},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",value:l,onChange:(a=u,function(e){var c=F,n=c.indexOf(a);-1===n?c.push(a):c.splice(n,1),t(Object(r.d)(Object(i.a)(new Set(c))))}),checked:!(!F||-1===F.indexOf(u))}),n.a.createElement("span",null,u)))})))),n.a.createElement("div",{className:"filters-item"},n.a.createElement("h4",null,"Brand"),n.a.createElement("ul",null,x&&x.map((function(e){return n.a.createElement("li",{key:e},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",value:e,onChange:(a=e,function(e){var c=B,n=c.indexOf(a);-1===n?c.push(a):c.splice(n,1),t(Object(r.c)(Object(i.a)(new Set(c))))}),checked:!(!B||-1===B.indexOf(e))}),n.a.createElement("span",null,e)));var a})))),n.a.createElement("div",{className:"filters-item"},n.a.createElement("h4",null,"Price"),n.a.createElement("div",{className:"dropldown-filters"},n.a.createElement("select",{name:"min_price","aria-label":"minimum price"},m.map((function(e){return n.a.createElement("option",{value:e.key,key:"min-".concat(e.key)},e.displayValue)}))),n.a.createElement("select",{name:"max_price","aria-label":"maximum price"},n.a.createElement("option",{value:"Max",key:"max"},"Max"),f.map((function(e){return n.a.createElement("option",{value:e.key,key:"max-".concat(e.key)},e.displayValue)}))))),n.a.createElement("div",{className:"filters-item dropldown-filters"},n.a.createElement("h4",null,"Discount"),n.a.createElement("div",{className:"dropldown-filters"},n.a.createElement("select",{name:"min_price","aria-label":"minimum discount"},n.a.createElement("option",{value:"0",key:"min"},"Min"),S.map((function(e){return n.a.createElement("option",{value:e,key:"min-".concat(e)},e,"%")}))),n.a.createElement("select",{name:"max_price","aria-label":"maximum discount"},n.a.createElement("option",{value:S[S.length-1],key:"max"},"Max"),S.map((function(e){return n.a.createElement("option",{value:e,key:"max-".concat(e)},e,"%")})))))))};a(84);t.default=function(e){var t=Object(l.c)((function(e){return e.products})).productList,a=Object(l.b)();return Object(c.useEffect)((function(){a(Object(r.b)())}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement("div",{className:"product-container"},t.length>0?t.map((function(e){return n.a.createElement(u,{key:e.id,product:e})})):n.a.createElement("div",{className:"no-results"},"No results found.")))}}}]);
//# sourceMappingURL=3.778b51ab.chunk.js.map