(this["webpackJsonpprueba-ekt"]=this["webpackJsonpprueba-ekt"]||[]).push([[0],{33:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(24),i=c.n(s),a=c(14),j=c.n(a),o=c(16),d=c(13),u=(c.p,c(33),c(47)),l=c(1);function h(e){var t=e.producto;return Object(l.jsx)("div",{children:Object(l.jsxs)(u.a,{style:{width:"12rem",height:"20rem"},children:[Object(l.jsx)(u.a.Img,{variant:"top",src:t.image,style:{height:"10rem"}}),Object(l.jsxs)(u.a.Body,{children:[Object(l.jsx)(u.a.Title,{children:t.title}),Object(l.jsxs)(u.a.Text,{children:[" Price ",t.price]})]})]})})}var b=c(3);function x(){var e=Object(b.f)().id,t=Object(n.useState)(),c=Object(d.a)(t,2),r=c[0],s=c[1],i=function(){var e=Object(o.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/"+t);case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i(e)}),[e]),Object(l.jsx)("div",{children:r?Object(l.jsxs)(u.a,{border:"success",bg:"info",text:"light",style:{width:"18rem"},className:"mb-2",children:[Object(l.jsxs)(u.a.Header,{children:["Detalle producto ",r.id]}),Object(l.jsxs)(u.a.Body,{children:[Object(l.jsxs)(u.a.Title,{children:[" ",r.title,"   "]}),Object(l.jsx)(u.a.Text,{children:r.description}),Object(l.jsxs)(u.a.Text,{children:[" ",Object(l.jsxs)("h2",{children:["$ ",r.price]})]})]})]},"0"):""})}var O=c(43),p=c(44),f=c(45),m=c(46),v=c(21);var g=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),c=t[0],r=t[1],s=function(){var e=Object(o.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products?limit=10");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Listado de Productos"}),Object(l.jsx)(O.a,{children:Object(l.jsx)(p.a,{children:Object(l.jsxs)(v.a,{children:[Object(l.jsx)(f.a,{xs:8,md:8,lg:8,children:Object(l.jsx)(m.a,{children:c?c.map((function(e,t){return e.title=e.title.slice(0,15),Object(l.jsxs)(v.b,{to:"/DetalleProducto/".concat(e.id),children:[Object(l.jsx)(h,{producto:e},e.id)," "]},e.id)})):"Cargando"})}),Object(l.jsx)(f.a,{children:Object(l.jsx)(b.c,{children:Object(l.jsx)(b.a,{path:"/DetalleProducto/:id",children:Object(l.jsx)(x,{})})})})]})})})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};c(40),c(41);i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.fbbfa843.chunk.js.map