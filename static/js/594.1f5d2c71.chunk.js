"use strict";(self.webpackChunkfood_delivery=self.webpackChunkfood_delivery||[]).push([[594],{839:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var s=a(3837),r=a(4165),n=a(5861),i=a(9439),o=a(2791),l=a(7689),c=a(1087),u=a(9605),d=a(3912),p=a(7567),h=a(8164),m=a(1449),f=a(9388),x=a(9146),g=a(184),_=function(){var e=(0,o.useState)(""),t=(0,i.Z)(e,2),a=t[0],s=t[1],_=(0,o.useState)(""),j=(0,i.Z)(_,2),v=j[0],b=j[1],w=(0,o.useState)(""),N=(0,i.Z)(w,2),y=N[0],C=N[1],k=(0,u.C)((function(e){return e.user})).error,Z=(0,u.T)(),M=(0,l.s0)();(0,o.useEffect)((function(){k&&Z((0,h.pM)({type:h.j_.error,text:"An error occurred when creating a new user. ".concat(k)}))}),[k]);var R=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t){var s,n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=Math.floor(999999*Math.random()),e.next=4,f.Z.get("users?email=".concat(a));case 4:if(!(n=e.sent).data||!n.data.length){e.next=8;break}return Z((0,h.pM)({type:h.j_.warning,text:"A user with this email already exists"})),e.abrupt("return");case 8:v===y?(i={id:s,firstName:"",lastName:"",email:a,password:v},Z((0,d.Y)(i,x.Z.CREATE)),Z((0,h.pM)({type:h.j_.sucsses,text:"The profile has been created successfully. Tell us more about yourself"})),(0,m.d)("userId",String(s)),M("/account")):Z((0,h.pM)({type:h.j_.error,text:"Passwords don't match"}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsxs)("form",{className:"registration-form",onSubmit:R,children:[(0,g.jsxs)("div",{className:"registration-form__fields",children:[(0,g.jsx)(p.I,{label:"Email",id:"email",type:"email",placeholder:"name@example.com",isRequired:!0,value:a,onChange:s}),(0,g.jsx)(p.I,{label:"Password",id:"password",type:"password",placeholder:"Password",isRequired:!0,value:v,onChange:b}),(0,g.jsx)(p.I,{label:"Confirm password",id:"confirm_password",type:"password",placeholder:"Confirm password",isRequired:!0,value:y,onChange:C})]}),(0,g.jsxs)("div",{className:"registration-form__buttons",children:[(0,g.jsx)("button",{className:"button button--contained",children:"Continue"}),(0,g.jsx)(c.rU,{to:"/auth",className:"registration-form__back-button",children:"Back"})]}),(0,g.jsx)(h.P_,{})]})},j=function(){return(0,g.jsxs)("div",{className:"registration",children:[(0,g.jsxs)("div",{className:"registration__demo",children:[(0,g.jsx)(s.D,{color:s.F.light}),(0,g.jsx)("h3",{className:"registration__description",children:"A few steps to create your restaurant or personal account"}),(0,g.jsx)("p",{className:"registration__text",children:"Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae."}),(0,g.jsx)("img",{src:"../../assets/images/auth/registration.png",alt:"Registration",className:"registration__image",width:878})]}),(0,g.jsxs)("div",{className:"registration__details",children:[(0,g.jsx)("h1",{className:"registration__title",children:"Personal details"}),(0,g.jsx)("span",{className:"registration__subtitle",children:"Enter your data that you will use for entering."}),(0,g.jsx)(_,{})]})]})}},7567:function(e,t,a){a.d(t,{X:function(){return n},I:function(){return r}});var s=a(184),r=function(e){var t=e.label,a=e.id,r=e.value,n=e.placeholder,i=e.onChange,o=e.icon,l=e.isRequired,c=void 0!==l&&l,u=e.type,d=void 0===u?"text":u,p=e.autocomplete,h=void 0===p?"off":p,m=function(e){i(e)};return(0,s.jsxs)("div",{className:"input-wrapper",children:[(0,s.jsx)("label",{htmlFor:a,className:"input-label",children:t}),(0,s.jsxs)("div",{className:"input-with-icon",children:[(0,s.jsx)("input",{type:d,id:a,className:"input",required:c,placeholder:n,value:r,autoComplete:h,onChange:function(e){return m(e.target.value)}}),o||null]})]})},n=function(e){var t=e.id,a=e.label,r=e.value,n=e.setValue;return(0,s.jsxs)("label",{className:"checkbox",children:[(0,s.jsx)("input",{type:"checkbox",id:t,className:"checkbox__input",checked:r,onChange:function(){n(!r)}}),(0,s.jsx)("span",{className:"checkbox__label",children:a})]})}}}]);
//# sourceMappingURL=594.1f5d2c71.chunk.js.map