(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[5],{229:function(e,t,n){e.exports={formControl:"FormsControls_formControl__F7-nC",error:"FormsControls_error__37hEA",formSummaryError:"FormsControls_formSummaryError__13P5v"}},230:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d}));var a=n(232),r=n(0),i=n.n(r),o=n(229),c=n.n(o),s=n(112),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return i.a.createElement("div",{className:c.a.formControl},i.a.createElement("div",{className:c.a.mainArea+" "+(o?c.a.error:"")},r),i.a.createElement("div",{className:c.a.error},o&&i.a.createElement("span",null,a)))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return i.a.createElement(u,e,i.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return i.a.createElement(u,e,i.a.createElement("input",Object.assign({},t,n)))},d=function(e,t,n,a,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return i.a.createElement("div",null,i.a.createElement(s.a,Object.assign({component:e,name:t,placeholder:n,type:a,validate:r},o))," ",c)}},231:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max lenght is ".concat(e," symbols")}}},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(32),r=n(33),i=n(35),o=n(34),c=n(0),s=n.n(c),u=n(20),l=n(26),m=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){Object(i.a)(c,t);var n=Object(o.a)(c);function c(){return Object(a.a)(this,c),n.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),c}(s.a.Component);return Object(l.b)(m)(t)}},254:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3PEZm",dialog_items:"Dialogs_dialog_items__3tRtR",active:"Dialogs_active__3DEN2"}},255:function(e,t,n){e.exports={dialog:"Dialog_dialog__3bPNE"}},256:function(e,t,n){e.exports={message:"Message_message__2S8tT"}},305:function(e,t,n){"use strict";n.r(t);var a=n(73),r=n(0),i=n.n(r),o=n(254),c=n.n(o),s=n(255),u=n.n(s),l=n(11),m=function(e){return i.a.createElement("div",{className:u.a.dialog+" "+u.a.active},i.a.createElement(l.b,{to:"/dialogs/"+e.id},e.name))},d=n(256),f=n.n(d),g=function(e){return i.a.createElement("div",{className:f.a.message},e.text)},E=n(20),b=n(112),v=n(44),p=n(113),_=n(230),h=n(231),j=Object(h.a)(20),O=Object(p.a)({form:"dialogAddMessageForm",onSubmitSuccess:function(e,t){return t(Object(v.a)("dialogAddMessageForm"))}})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(b.a,{component:_.b,name:"newMessageText",placeholder:"Enter your message",validate:[h.b,j]})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))})),D=function(e){var t=e.DialogsPage.DialogsData.map((function(e){return i.a.createElement(m,{name:e.name,id:e.id})})),n=e.DialogsPage.MessagesData.map((function(e){return i.a.createElement(g,{text:e.text,id:e.id})}));return e.isAuth?i.a.createElement("div",{className:c.a.dialogs},i.a.createElement("div",{className:c.a.dialog_items},t),i.a.createElement("div",{className:c.a.messages},i.a.createElement("div",null,n),i.a.createElement(O,{onSubmit:function(t){e.sendMessage(t.newMessageText)}}))):i.a.createElement(E.a,{to:"/login"})},x=n(26),N=n(238),M=n(14);t.default=Object(M.d)(Object(x.b)((function(e){return{DialogsPage:e.DialogsPage}}),(function(e){return{sendMessage:function(t){e(Object(a.b)(t))}}})),N.a)(D)}}]);
//# sourceMappingURL=5.5feee2fe.chunk.js.map