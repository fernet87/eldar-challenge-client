"use strict";(self.webpackChunkeldar_challenge_client=self.webpackChunkeldar_challenge_client||[]).push([[515],{7934:function(n,e,r){var t,a,c,i=r(168),u=r(7924),o=r(184),s=(0,u.iv)(t||(t=(0,i.Z)(["\n  border: 1px solid #CCC;\n  border-radius: 1rem;\n"]))),l=u.zo.div(a||(a=(0,i.Z)(["\n\n  ",";\n\n  background-color: #e1e1e1;\n\n  overflow: hidden;\n\n  padding: 1.25rem;\n\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n\n  overflow-x: scroll;\n  overflow-y: auto;\n  max-height: 700px;\n\n  &.small {\n    max-width: 28.75rem; // 460,8px con font-size 16px\n  }\n\n  &.medium {\n    max-width: 38.375rem; // 614,4px con font-size 16px\n  }\n\n  &.large {\n    max-width: 49.5625rem; // 793,6px con font-size 16px\n  }\n"])),s),d=u.zo.div(c||(c=(0,i.Z)(["\n\n  ",";\n  \n  padding: 0 20px;\n  margin: 0 20px 20px;\n\n  background-color: #70aaff;\n  color: #fff;\n"])),s);e.Z=function(n){var e=n.title,r=n.children,t=n.size,a=n.className,c=n.hideTitle;return(0,o.jsxs)(l,{className:"panel container ".concat(a||""," ").concat(t||""),children:[c||(0,o.jsx)(d,{children:(0,o.jsx)("h1",{children:e})}),r]})}},5039:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(8683),a=r(413),c=r(184);function i(n){return(0,c.jsx)(a.Z,(0,t.Z)((0,t.Z)({type:"submit"},n),{},{attr:"submitButton"}))}},4276:function(n,e,r){r.d(e,{Z:function(){return a}});r(2791);var t=r(184);function a(n){var e=n.type,r=(n.model,n.attr),a=n.value,c=n.label,i=n.onChange;return(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{htmlFor:r,className:"form-label",children:c}),(0,t.jsx)("input",{type:e,id:r,className:"form-control",value:a,onChange:i})]})}},7515:function(n,e,r){r.r(e);var t=r(4165),a=r(5861),c=r(8683),i=r(9439),u=r(2791),o=r(6774),s=r(7934),l=r(2716),d=r(4276),p=r(5039),f=r(7689),m=r(8152),h=r(9148),x=r(4841),v=r(184),Z=(0,h.Z)(!0);e.default=function(n){var e=n.hideTitle,r=(0,f.s0)(),h=(0,m.w)(),g=h.addSuccessMessage,b=h.addErrorMessage,y=(0,l.q)(),w=y.id,j=y.isCreatePageType,k=y.isEditPageType,C=y.isViewPageType,N=(0,u.useState)(""),_=(0,i.Z)(N,2),z=_[0],P=_[1],T=(0,u.useState)(""),S=(0,i.Z)(T,2),U=S[0],E=S[1],q=(0,u.useState)(0),V=(0,i.Z)(q,2),D=V[0],F=V[1];(0,u.useEffect)((function(){return j()||(0,o.qC)(w).then((function(n){P(n.category),E(n.description),F(n.price)})),function(){}}),[w]);var M=function(){return j()?"Create":"Update"},O=function(){return(0,v.jsxs)("div",{className:"container",children:[(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-sm-6 col-md-6",children:(0,v.jsx)(d.Z,{attr:"category",type:"text",label:"Category",value:z,onChange:function(n){return P(n.target.value)}})}),(0,v.jsx)("div",{className:"col-sm-6 col-md-6",children:(0,v.jsx)(d.Z,{attr:"description",type:"text",label:"Description",value:U,onChange:function(n){return E(n.target.value)}})})]}),(0,v.jsx)("div",{className:"row",children:(0,v.jsx)("div",{className:"col-sm-6 col-md-6",children:(0,v.jsx)(d.Z,{attr:"price",type:"number",label:"Price",value:D,onChange:function(n){return F(n.target.value)}})})}),C()||(0,v.jsx)("div",{className:"row justify-content-center",children:(0,v.jsx)("div",{className:"col-sm-6 col-md-6",children:(0,v.jsx)(p.Z,{label:M(),className:"w-100",large:!0})})})]})};return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(s.Z,{title:"".concat(M()," Product").trim(),size:"medium",hideTitle:e,children:C()?O():function(){var n=function(){var n,e=null===(n=Z.getItem(x.fH))||void 0===n?void 0:n._id,r={category:z,description:U,price:D,user_id:e};return k()?(0,c.Z)({_id:w},r):r},e=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a){var c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c="",e.prev=2,!j()){e.next=9;break}return c="created",e.next=7,(0,o.Ue)(n());case 7:e.next=13;break;case 9:if(!k()){e.next=13;break}return c="updated",e.next=13,(0,o.Vx)(n());case 13:g("Product ".concat(c," successfully")),r("/Products"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),b("Error trying to ".concat(M().toLowerCase()," a product"));case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsx)("form",{onSubmit:e,children:O()})}()})})}},6774:function(n,e,r){r.d(e,{Od:function(){return h},Ue:function(){return d},Vx:function(){return f},go:function(){return s},qC:function(){return u}});var t=r(4165),a=r(5861),c=r(2604),i="api/product";function u(n){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,t.Z)().mark((function n(e){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,c.U2)(i+"/"+e));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,t.Z)().mark((function n(e){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,c.U2)("".concat(i,"/user/").concat(e),e));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,t.Z)().mark((function n(e){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,c.v_)(i+"/create",e));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,t.Z)().mark((function n(e){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,c.gz)(i+"/update/".concat(e._id),e));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,t.Z)().mark((function n(e){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,c.Od)(i,e));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=515.04fc623e.chunk.js.map