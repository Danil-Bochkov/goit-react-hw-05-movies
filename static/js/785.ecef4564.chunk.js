"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{785:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(885),i=t(731),u=t(739),r=t(184),s=function(e){var n=e.movies,t=e.movieName,a=(0,u.TH)();return(0,r.jsx)("ul",{className:"moviesList",children:n.map((function(e){return(0,r.jsx)("li",{className:"moviesList__item",children:(0,r.jsx)(i.rU,{to:"".concat(null===e||void 0===e?void 0:e.id),state:{from:"".concat(a.pathname,"?name=").concat(t)},children:null===e||void 0===e?void 0:e.title})},null===e||void 0===e?void 0:e.id)}))})},o=function(e){var n=e.value,t=e.onChange;return(0,r.jsx)("div",{className:"search",children:(0,r.jsx)("input",{className:"search__input",type:"text",value:n,onChange:function(e){return t(e.target.value)}})})},c=t(660),l=t(791),m=t(614),v=function(){var e,n=(0,l.useState)([]),t=(0,a.Z)(n,2),u=t[0],v=t[1],d=(0,i.lr)(),f=(0,a.Z)(d,2),h=f[0],p=f[1],x=(0,l.useState)(!1),j=(0,a.Z)(x,2),_=j[0],k=j[1],N=null!==(e=h.get("name"))&&void 0!==e?e:"";return(0,l.useEffect)((function(){N&&(k(!0),(0,c.h$)(N).then((function(e){return v(e.data.results)})).finally((function(){return k(!1)})))}),[N]),(0,r.jsxs)("main",{children:[(0,r.jsx)(o,{value:N,onChange:function(e){p(""!==e?{name:e}:{})}}),_?(0,r.jsx)(m.Z,{}):(0,r.jsx)(s,{movies:u,movieName:N})]})}}}]);
//# sourceMappingURL=785.ecef4564.chunk.js.map