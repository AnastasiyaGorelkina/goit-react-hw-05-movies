"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[897],{600:function(n,e,t){t.d(e,{aV:function(){return p},au:function(){return l},q5:function(){return d},z1:function(){return f},z5:function(){return s}});var r=t(861),a=t(687),c=t.n(a),o=t(243),u="https://api.themoviedb.org/3",i="f71bf03a4d080c1adbb88d731b31a8f7",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/trending/all/week?api_key=").concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&include_abult=false&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},82:function(n,e,t){t.d(e,{$t:function(){return k},II:function(){return j},KS:function(){return Z},__:function(){return S},aV:function(){return v},eJ:function(){return b},hj:function(){return m},l0:function(){return _},xu:function(){return w},xv:function(){return y},zx:function(){return z}});var r,a,c,o,u,i,s,f,p,l,d,x=t(168),g=t(686),h=t(87),v=g.Z.ul(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 30px;\n  align-items: center;\n"]))),Z=g.Z.div(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),m=(0,g.Z)(h.rU)(c||(c=(0,x.Z)(["\n  font-weight: 600;\n  color: black;\n  text-decoration: none;\n  font-size: 25px;\n  padding: 5px;\n  display: inline-block;\n\n  &:active {\n    color: green;\n  }\n\n  &:hover,\n  &:focus {\n    color: orange;\n  }\n"]))),b=(0,g.Z)(h.rU)(o||(o=(0,x.Z)(["\n  font-size: 25px;\n  font-weight: 600;\n  text-decoration: none;\n  color: green;\n\n   &:hover,\n  &:focus {\n    color: orange;\n  }\n"]))),y=g.Z.p(u||(u=(0,x.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n"]))),k=g.Z.div(i||(i=(0,x.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),w=g.Z.div(s||(s=(0,x.Z)(["\ndisplay: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),j=g.Z.input(f||(f=(0,x.Z)(["\n  width: 700px;\n  height: 50px;\n  border-radius: 10px;\n  border: 4px solid green;\n  font-size: 25px;\n"]))),_=g.Z.form(p||(p=(0,x.Z)(["\n  margin-top: 30px;\n  display: flex;\n  align-content: stretch;\n  justify-content: center;\n"]))),z=g.Z.button(l||(l=(0,x.Z)(["\n  width: 100px;\n  height: 50px;\n  border-radius: 10px;\n  border: 4px solid green;\n  background: green;\n  color: orange;\n  font-size: 20px;\n  margin-top: 15px;\n\n  &:hover {\n    color: blue;\n    border: 1px solid black;\n    background: grey;\n  }\n"]))),S=g.Z.label(d||(d=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])))},897:function(n,e,t){t.r(e);var r=t(861),a=t(439),c=t(687),o=t.n(c),u=t(791),i=t(87),s=t(689),f=t(600),p=t(82),l=t(184);e.default=function(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],d=(0,i.lr)(),x=(0,a.Z)(d,2),g=x[0],h=x[1],v=(0,u.useState)("idle"),Z=(0,a.Z)(v,2),m=Z[0],b=Z[1],y=(0,u.useState)(null),k=(0,a.Z)(y,2),w=k[0],j=k[1],_=(0,s.TH)(),z=g.get("query"),S=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(z){n.next=2;break}return n.abrupt("return");case 2:return b("pending"),n.prev=3,n.next=6,(0,f.z1)(z);case 6:e=n.sent,t=e.results,c(t),b("resolved"),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(3),j(n.t0),b("rejected");case 16:case"end":return n.stop()}}),n,null,[[3,12]])})));return function(){return n.apply(this,arguments)}}();(0,u.useEffect)((function(){S()}),[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.l0,{onSubmit:function(n){n.preventDefault(),z?S():alert("sorry, something went wrong")},children:(0,l.jsxs)(p.__,{children:[(0,l.jsx)(p.II,{type:"text",onChange:function(n){h({query:n.target.value})}}),(0,l.jsx)(p.zx,{type:"submit",children:"Search"})]})}),(0,l.jsxs)("div",{children:["pending"===m&&"Loading...","rejected"===m&&(0,l.jsx)("h3",{children:w.message}),"resolved"===m&&(0,l.jsx)(p.KS,{children:(0,l.jsx)(p.aV,{children:t&&t.map((function(n){var e=n.title,t=n.id;return(0,l.jsx)(p.hj,{to:"/movies/".concat(t),state:{from:_},children:e},t)}))})})]})]})}}}]);
//# sourceMappingURL=897.96bcf7ff.chunk.js.map