(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1493],{87698:function(){},72495:function(t,e,a){"use strict";var n,c,i=a(4410);function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}e.Z=function(t){return i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:16,height:16,fill:"none"},t),n||(n=i.createElement("defs",null,i.createElement("path",{id:"download_svg__a",d:"M0 0h16v16H0z"}))),i.createElement("g",null,c||(c=i.createElement("mask",{id:"download_svg__b",fill:"#fff"},i.createElement("use",{xlinkHref:"#download_svg__a"}))),i.createElement("g",{mask:"url(#download_svg__b)"},i.createElement("path",{style:{stroke:"#333",strokeWidth:1.3333333333333333,strokeOpacity:1,strokeDasharray:"0 0"},d:"M1 12h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v10c0 .55.45 1 1 1Z",transform:"translate(2 2)"}),i.createElement("path",{style:{stroke:"#333",strokeWidth:1.3333333333333333,strokeOpacity:1,strokeDasharray:"0 0"},d:"M0 0h3.67l.66 1.33H9L9.67 0h3.66",transform:"translate(1.333 10.333)"}),i.createElement("path",{style:{stroke:"#333",strokeWidth:1.3333333333333333,strokeOpacity:1,strokeDasharray:"0 0"},d:"M0 3.33V0",transform:"translate(14 8.667)"}),i.createElement("path",{style:{stroke:"#333",strokeWidth:1.3333333333333333,strokeOpacity:1,strokeDasharray:"0 0"},d:"m0 0 2 2 2-2",transform:"translate(6 7.333)"}),i.createElement("path",{style:{stroke:"#333",strokeWidth:1.3333333333333333,strokeOpacity:1,strokeDasharray:"0 0"},d:"M0 5.33V0",transform:"translate(8 4)"}),i.createElement("path",{style:{stroke:"#333",strokeWidth:1.3333333333333333,strokeOpacity:1,strokeDasharray:"0 0"},d:"M0 3.33V0",transform:"translate(2 8.667)"}))))}},71493:function(t,e,a){"use strict";a.r(e),a.d(e,{ContextPrompts:function(){return P},PluginPage:function(){return C}});var n=a(57437),c=a(28870),i=a(41357),s=a(81427),o=a.n(s),l=a(72495),_=a(58870),r=a(38669),h=a(15592),m=a(88337),p=a(37427);let d=["system","user","assistant"];var u=a(39825),g=a(5851),x=a(78344),f=a(66864),v=a.n(f),w=a(2265),j=a(37126),k=a(25869),y=a(2966),b=a(87698);function N(t){let[e,a]=(0,w.useState)(!1);return(0,n.jsxs)("div",{className:v()["context-prompt-row"],children:[!e&&(0,n.jsx)(u.Ph,{value:t.prompt.role,className:v()["context-role"],onChange:e=>t.update({...t.prompt,role:e.target.value}),children:d.map(t=>(0,n.jsx)("option",{value:t,children:t},t))}),(0,n.jsx)(u.II,{value:(0,j.YK)(t.prompt),type:"text",className:v()["context-content"],rows:e?5:1,onFocus:()=>a(!0),onBlur:()=>{var t,e;a(!1),null===(e=window)||void 0===e||null===(t=e.getSelection())||void 0===t||t.removeAllRanges()},onInput:e=>t.update({...t.prompt,content:e.currentTarget.value})}),!e&&(0,n.jsx)(c.h,{icon:(0,n.jsx)(h.Z,{}),className:v()["context-delete-button"],onClick:()=>t.remove(),bordered:!0})]})}function P(t){let e=t.context,a=e=>{t.updateContext(t=>t.push(e))},i=e=>{t.updateContext(t=>t.splice(e,1))},s=(e,a)=>{t.updateContext(t=>t[e]=a)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:v()["context-prompt"],style:{marginBottom:20},children:[e.map((t,e)=>(0,n.jsx)(N,{prompt:t,update:t=>s(e,t),remove:()=>i(e)},e)),(0,n.jsx)("div",{className:v()["context-prompt-row"],children:(0,n.jsx)(c.h,{icon:(0,n.jsx)(_.Z,{}),text:g.ZP.Context.Add,bordered:!0,className:v()["context-prompt-button"],onClick:()=>a((0,p.tn)({role:"user",content:"",date:""}))})})]})})}function C(){var t;let e=(0,x.s0)(),a=(0,m.RQ)();(0,p.aK)();let s=(0,g.VQ)(),_=["cn","ru"],h=a.getAll().filter(t=>_.includes(s)?t.lang===s:"en"===t.lang),[d,f]=(0,w.useState)([]),[v,N]=(0,w.useState)(""),P=v.length>0?d:h,C=t=>{N(t),t.length>0?f(h.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()))):f(h)},[E,Z]=(0,w.useState)(),O=null!==(t=a.get(E))&&void 0!==t?t:y._U.get(E),T=(t,e)=>{console.log(e),e?a.enable(t):a.disable(t)},M=!!b.env.NEXT_PUBLIC_ENABLE_NODEJS_PLUGIN;return(0,n.jsxs)(i.S,{children:[(0,n.jsxs)("div",{className:o()["plugin-page"],children:[(0,n.jsxs)("div",{className:"window-header",children:[(0,n.jsxs)("div",{className:"window-header-title",children:[(0,n.jsx)("div",{className:"window-header-main-title",children:g.ZP.Plugin.Page.Title}),(0,n.jsx)("div",{className:"window-header-submai-title",children:g.ZP.Plugin.Page.SubTitle(h.length)})]}),(0,n.jsx)("div",{className:"window-actions",children:(0,n.jsx)("div",{className:"window-action-button",children:(0,n.jsx)(c.h,{icon:(0,n.jsx)(r.Z,{}),onClick:()=>e(k.y$.Home),bordered:!0})})})]}),(0,n.jsxs)("div",{className:o()["plugin-page-body"],children:[(0,n.jsx)("div",{className:o()["plugin-filter"],children:(0,n.jsx)("input",{type:"text",className:o()["search-bar"],placeholder:g.ZP.Plugin.Page.Search,autoFocus:!0,onInput:t=>C(t.currentTarget.value)})}),(0,n.jsx)("div",{children:P.map(t=>(0,n.jsxs)("div",{className:o()["plugin-item"],children:[(0,n.jsx)("div",{className:o()["plugin-header"],children:(0,n.jsxs)("div",{className:o()["plugin-title"],children:[(0,n.jsx)("div",{className:o()["plugin-name"],children:t.name}),t.onlyNodeRuntime&&!M&&(0,n.jsx)("div",{className:o()["plugin-runtime-warning"],children:g.ZP.Plugin.RuntimeWarning}),(0,n.jsx)("div",{className:o()["plugin-info"],children:"".concat(t.description)})]})}),(0,n.jsx)("div",{className:o()["plugin-actions"],children:(0,n.jsx)("input",{type:"checkbox",disabled:t.onlyNodeRuntime&&!M,checked:t.enable,onChange:e=>{T(t.id,e.currentTarget.checked)}})})]},t.id))})]})]}),O&&(0,n.jsx)("div",{className:"modal-mask",children:(0,n.jsx)(u.u_,{title:g.ZP.Plugin.EditModal.Title(null==O?void 0:O.builtin),onClose:()=>Z(void 0),actions:[(0,n.jsx)(c.h,{icon:(0,n.jsx)(l.Z,{}),text:g.ZP.Plugin.EditModal.Download,bordered:!0,onClick:()=>(0,j.CP)(JSON.stringify(O),"".concat(O.name,".json"))},"export")]})})]})}},66864:function(t){t.exports={"attach-files":"chat_attach-files__IgWzs","attach-file":"chat_attach-file__81pBy","attach-file-info":"chat_attach-file-info__wFm95","attach-file-mask":"chat_attach-file-mask__4a_c8","delete-file":"chat_delete-file__rPNvI","attach-images":"chat_attach-images__UtJds","attach-image":"chat_attach-image__5zxeG","attach-image-template":"chat_attach-image-template__P_SQp","delete-image":"chat_delete-image__IBtAc","chat-input-actions":"chat_chat-input-actions__mwYC_","chat-input-action":"chat_chat-input-action__DMW7Y","slide-in":"chat_slide-in__nvZgA",text:"chat_text__TkPfN","full-width":"chat_full-width__RdaYc",icon:"chat_icon__Ly3TN","prompt-toast":"chat_prompt-toast___VCUf","prompt-toast-inner":"chat_prompt-toast-inner__f17E6","slide-in-from-top":"chat_slide-in-from-top__Q0KCt","prompt-toast-content":"chat_prompt-toast-content__9sp_w","section-title":"chat_section-title__BiPko","section-title-action":"chat_section-title-action__bmruw","context-prompt":"chat_context-prompt__cbach","context-prompt-insert":"chat_context-prompt-insert__UmNJi","context-prompt-row":"chat_context-prompt-row__3Kbix","context-drag":"chat_context-drag__BX7lh","context-role":"chat_context-role__7_IR9","context-content":"chat_context-content__sNXUy","context-delete-button":"chat_context-delete-button__C_BmS","context-prompt-button":"chat_context-prompt-button__AoPsw","memory-prompt":"chat_memory-prompt__vOzcn","memory-prompt-content":"chat_memory-prompt-content__kUVKj","clear-context":"chat_clear-context__ke8Iw","clear-context-tips":"chat_clear-context-tips__L1A_i","clear-context-revert-btn":"chat_clear-context-revert-btn___Wna1",chat:"chat_chat__ZebHg","chat-body":"chat_chat-body__QFv5x","chat-action-context":"chat_chat-action-context__OnuV9","chat-body-main-title":"chat_chat-body-main-title__jUL6h","chat-body-title":"chat_chat-body-title__d2ItC","chat-message":"chat_chat-message__dg8rL","chat-message-user":"chat_chat-message-user__ZtTEj","chat-message-header":"chat_chat-message-header__Dny_K","chat-message-actions":"chat_chat-message-actions__H90hg","chat-message-container":"chat_chat-message-container__O_X8_","chat-message-role-name-container":"chat_chat-message-role-name-container__MVbul","chat-message-role-name":"chat_chat-message-role-name__8lixl","no-hide":"chat_no-hide__XA_H4","chat-message-checkmark":"chat_chat-message-checkmark__cBC67","chat-message-tools-status":"chat_chat-message-tools-status__QD2Th","chat-message-tools-name":"chat_chat-message-tools-name__Mj2Qc","chat-message-tools-details":"chat_chat-message-tools-details__nwup9","chat-message-status":"chat_chat-message-status__zc9Ad","chat-message-item":"chat_chat-message-item__dKqMl","chat-message-item-files":"chat_chat-message-item-files__xZP0P","chat-message-item-file":"chat_chat-message-item-file__2JG_c","chat-message-item-image":"chat_chat-message-item-image__2jbb0","chat-message-item-images":"chat_chat-message-item-images__EtEM4","chat-message-item-image-multi":"chat_chat-message-item-image-multi__DOIxY","chat-message-action-date":"chat_chat-message-action-date__RsXTn","chat-input-panel":"chat_chat-input-panel__rO72m","prompt-hints":"chat_prompt-hints__VT_Oi","prompt-hint":"chat_prompt-hint__2616t","hint-title":"chat_hint-title__E53ZK","hint-content":"chat_hint-content__y2yj4","prompt-hint-selected":"chat_prompt-hint-selected__o3vYi","chat-input-panel-inner":"chat_chat-input-panel-inner___IQHi","chat-input-panel-inner-attach":"chat_chat-input-panel-inner-attach__mZheu","chat-input":"chat_chat-input__PQ_oF","chat-input-send":"chat_chat-input-send__GFQZo","toast-container":"chat_toast-container__rPoY4",show:"chat_show__7n05t","toast-content":"chat_toast-content__TpUJj"}},81427:function(t){t.exports={"plugin-page":"plugin_plugin-page__WJ62i","plugin-page-body":"plugin_plugin-page-body__jOKar","plugin-filter":"plugin_plugin-filter__6mSdC","slide-in":"plugin_slide-in__48MyE","search-bar":"plugin_search-bar__ujN6o","plugin-filter-lang":"plugin_plugin-filter-lang__17yNT","plugin-create":"plugin_plugin-create__9Pbpt","plugin-item":"plugin_plugin-item__owrY7","plugin-header":"plugin_plugin-header__H6tNw","plugin-icon":"plugin_plugin-icon__nO7xH","plugin-title":"plugin_plugin-title__Yr4S3","plugin-name":"plugin_plugin-name__lYHVP","plugin-info":"plugin_plugin-info__rBjxe","plugin-runtime-warning":"plugin_plugin-runtime-warning__1MA_m","plugin-actions":"plugin_plugin-actions__dZHzF","slide-in-from-top":"plugin_slide-in-from-top__CTvxG"}}}]);