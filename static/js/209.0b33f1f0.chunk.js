"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[209],{209:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(434),a=n(439),u=n(791),o=n(208),i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},c={form:"ContactForm_form__ttXmo",input:"ContactForm_input__e2U+9",button:"ContactForm_button__lCDHx"},s=n(184),l=function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),n=t[0],l=t[1],f=(0,u.useState)(""),m=(0,a.Z)(f,2),d=m[0],p=m[1],h=(0,r.v9)((function(e){return e.contacts})).items,v=(0,r.I0)(),b=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":l(r);break;case"number":p(r);break;default:return}};return(0,s.jsxs)("form",{className:c.form,onSubmit:function(e){e.preventDefault();var t={id:i(),name:n,number:d},r=t.name.toLowerCase(),a=h.some((function(e){return e.name.toLowerCase()===r})),u=h.some((function(e){return e.number===t.number}));a?alert("".concat(t.name," is already in contacts.")):u?alert("".concat(t.number," is already in contacts.")):(v((0,o.uK)(t)),l(""),p(""))},children:[(0,s.jsxs)("label",{className:c.label,children:["Name",(0,s.jsx)("input",{className:c.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:b})]}),(0,s.jsxs)("label",{className:c.label,children:["Number",(0,s.jsx)("input",{className:c.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:b})]}),(0,s.jsx)("button",{className:c.button,type:"submit",children:"Add contact"})]})},f="NOT_FOUND";var m=function(e,t){return e===t};function d(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?m:r,u=n.maxSize,o=void 0===u?1:u,i=n.resultEqualityCheck,c=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),s=1===o?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:f},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return f}return{get:r,put:function(t,a){r(t)===f&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(o,c);function l(){var t=s.get(arguments);if(t===f){if(t=e.apply(null,arguments),i){var n=s.getEntries(),r=n.find((function(e){return i(e.value,t)}));r&&(t=r.value)}s.put(arguments,t)}return t}return l.clearCache=function(){return s.clear()},l}function p(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function h(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var u,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,l=s.memoizeOptions,f=void 0===l?n:l,m=Array.isArray(f)?f:[f],d=p(r),h=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(m)),v=e((function(){for(var e=[],t=d.length,n=0;n<t;n++)e.push(d[n].apply(null,arguments));return u=h.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),v};return a}var v=h(d),b=v([function(e){return e.contacts.items},function(e){return e.filter}],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),y={list:"ContactList_list__S-drv",item:"ContactList_item__-Qv6N",number:"ContactList_number__DkTFU",button:"ContactList_button__kVtvE"},_=function(){var e=(0,r.I0)(),t=(0,r.v9)(b);return(0,s.jsxs)("div",{children:[0===t.length&&(0,s.jsx)("h2",{children:"\u0421ontact not found!"}),(0,s.jsx)("ul",{className:y.list,children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return(0,s.jsxs)("li",{className:y.item,children:[(0,s.jsxs)("span",{className:y.name,children:[r,":"]}),(0,s.jsxs)("span",{className:y.number,children:[" ",a]}),(0,s.jsx)("button",{className:y.button,type:"button",onClick:function(){e((0,o.GK)(n))},children:"Delete"})]},n)}))})]})},x="Filter_label__IWv91",g="Filter_input__R4e-B",C=n(895),j=function(){var e=(0,r.v9)((function(e){return e.filter})),t=(0,r.I0)();return(0,s.jsxs)("label",{className:x,children:[(0,s.jsx)("span",{children:"Find contacts by name"}),(0,s.jsx)("input",{className:g,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,onChange:function(e){t((0,C.s)(e.target.value))}})]})},N="Contacts_loader__acRiV",k="Contacts_error__hU7aH",w=function(){var e=(0,r.v9)((function(e){return e.contacts})),t=e.items,n=e.isLoading,a=e.error;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Phonebook"}),(0,s.jsx)(l,{}),(0,s.jsx)("h2",{children:"Contacts"}),0===t.length&&(0,s.jsx)("h2",{children:"No added numbers!"}),t.length>0&&(0,s.jsx)(j,{}),n&&(0,s.jsx)("p",{className:N,children:"Loading..."}),a&&(0,s.jsx)("p",{className:k,children:a}),t.length>0&&(0,s.jsx)(_,{})]})}}}]);
//# sourceMappingURL=209.0b33f1f0.chunk.js.map