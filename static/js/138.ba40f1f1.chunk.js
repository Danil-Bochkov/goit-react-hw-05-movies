"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[138],{197:function(e,n,t){t.d(n,{MY:function(){return l},TP:function(){return h},XT:function(){return u},h$:function(){return f},tx:function(){return j},zv:function(){return p}});var r=t(861),i=t(757),a=t.n(i),s=t(44),c="https://api.themoviedb.org/3",o="2bb211a44af411c1339a508066d81474",l=function(e,n){return"https://image.tmdb.org/t/p/w".concat(n,"/").concat(e)};function u(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.ZP.get("".concat(c,"/trending/movie/week?api_key=").concat(o)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.ZP.get("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.ZP.get("".concat(c,"/movie/").concat(n,"?api_key=").concat(o)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.ZP.get("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(o)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.ZP.get("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(o)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},138:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r,i=t(885),a=t(731),s=t(739),c=t(197),o=t(791),l=t(168),u=t(617),d=t(444),f=t(184),m=(0,d.ZP)(a.rU)(r||(r=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: #ffffff;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),h=function(e){var n=e.to,t=e.children;return(0,f.jsxs)(m,{to:n,children:[(0,f.jsx)(u.jTe,{size:"24"}),t]})},v=t(614),p=t(451),x=function(){var e=(0,s.UO)().id,n=(0,o.useState)([]),t=(0,i.Z)(n,2),r=t[0],a=t[1],l=(0,o.useState)(!1),u=(0,i.Z)(l,2),d=u[0],m=u[1];return(0,o.useEffect)((function(){(0,c.zv)(e).then((function(e){return a(e.data.cast)})).finally((function(){return m(!1)}))}),[e]),(0,f.jsx)("section",{children:d?(0,f.jsx)(v.Z,{}):r.length?(0,f.jsx)("ul",{className:"cast",children:r.map((function(e,n){var t=e.name,r=e.profile_path,i=e.character;return(0,f.jsxs)("li",{className:"castItem",children:[r?(0,f.jsx)("img",{className:"castItem__image",src:r&&(0,c.MY)(r,200),alt:t}):(0,f.jsx)("div",{className:"castItem__image_unknown",children:(0,f.jsx)("img",{src:p,alt:t})}),(0,f.jsxs)("div",{className:"castItem__info",children:[t,(0,f.jsxs)("span",{children:["Character: ",(0,f.jsx)("b",{children:i})]})]})]},n)}))}):(0,f.jsx)("p",{children:"No cast available"})})},j=function(){var e=(0,s.UO)().id,n=(0,o.useState)([]),t=(0,i.Z)(n,2),r=t[0],a=t[1],l=(0,o.useState)(!1),u=(0,i.Z)(l,2),d=u[0],m=u[1];return(0,o.useEffect)((function(){m(!0),(0,c.tx)(e).then((function(e){return a(e.data.results)})).finally((function(){return m(!1)}))}),[e]),(0,f.jsx)("section",{children:d?(0,f.jsx)(v.Z,{}):r.length?(0,f.jsx)("ul",{className:"review",children:null===r||void 0===r?void 0:r.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,f.jsxs)("li",{className:"review__item",children:[(0,f.jsxs)("h2",{className:"review__author",children:["Author: ",(0,f.jsx)("p",{children:n})]}),(0,f.jsx)("p",{className:"review__text",children:t})]},r)}))}):(0,f.jsx)("p",{children:"No reviews available"})})},_=t(403),w=function(){var e,n,t,r,l=(0,s.UO)().id,u=(0,o.useState)(null),d=(0,i.Z)(u,2),m=d[0],p=d[1],w=(0,o.useState)(!1),g=(0,i.Z)(w,2),N=g[0],Z=g[1];(0,o.useEffect)((function(){Z(!0),(0,c.TP)(l).then((function(e){return p(e.data)})).finally((function(){return Z(!1)}))}),[l]);var k=(0,s.TH)(),y=null!==(e=null===(n=k.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,f.jsx)("main",{className:"container",children:N?(0,f.jsx)(v.Z,{}):(0,f.jsxs)(o.Fragment,{children:[(0,f.jsx)(h,{to:y,children:"Back to movies"}),(0,f.jsxs)("div",{className:"movieCard",children:[(0,f.jsx)("img",{className:"movieCard__image",src:(null===m||void 0===m?void 0:m.poster_path)&&(0,c.MY)(null===m||void 0===m?void 0:m.poster_path,300),alt:null===m||void 0===m?void 0:m.name}),(0,f.jsxs)("div",{className:"movieInfo",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:"movieInfo__title",children:null===m||void 0===m?void 0:m.title}),(0,f.jsxs)("span",{className:"movieInfo__rating",children:["User Score ",Math.round(10*(null===m||void 0===m?void 0:m.vote_average)),"%"]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{className:"movieInfo__title-information",children:"Overview"}),(0,f.jsx)("p",{className:"movieInfo__overview",children:null===m||void 0===m?void 0:m.overview})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h4",{className:"movieInfo__title-information",children:"Genres"}),(0,f.jsx)("div",{className:"movieInfo__genre",children:null===m||void 0===m?void 0:m.genres.map((function(e){return(0,f.jsx)("span",{className:"movieInfo__genre_text",children:e.name},e.id)}))})]})]})]}),(0,f.jsxs)("div",{className:"additionalInfo",children:[(0,f.jsx)("span",{className:"additionalInfo__title",children:"Additional information"}),(0,f.jsxs)("ul",{className:"listOfLinks",children:[(0,f.jsx)("li",{className:"listOfLinks__item",children:(0,f.jsx)(a.rU,{to:"cast",state:{from:null===(t=k.state)||void 0===t?void 0:t.from},children:"Cast"})}),(0,f.jsx)("li",{className:"listOfLinks__item",children:(0,f.jsx)(a.rU,{to:"reviews",state:{from:null===(r=k.state)||void 0===r?void 0:r.from},children:"Reviews"})})]}),(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)(v.Z,{}),children:(0,f.jsxs)(s.Z5,{children:[(0,f.jsx)(s.AW,{path:_.Z.cast,element:(0,f.jsx)(x,{})}),(0,f.jsx)(s.AW,{path:_.Z.reviews,element:(0,f.jsx)(j,{})})]})})]})]})})}},451:function(e,n,t){e.exports=t.p+"static/media/unknown-actor.f35db6b2a95065862686.png"}}]);
//# sourceMappingURL=138.ba40f1f1.chunk.js.map