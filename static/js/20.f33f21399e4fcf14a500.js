webpackJsonp([20],{"HS/4":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={name:"downKeystore",components:{tipsList:function(){return e.e(12).then(e.bind(null,"Ot9j"))},publicButton:function(){return e.e(10).then(e.bind(null,"NPxM"))}},props:{tipsListKey:Array},data:function(){return{}},methods:{continueKey:function(){this.$emit("next")},downUrlTxt:function(){this.$emit("down")}}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"down-keystroe wallet-content"},[e("h2",[t._v(t._s(t.$t("newWallet.saveKeyStore")))]),t._v(" "),e("span",{on:{click:t.downUrlTxt}},[t._v(t._s(t.$t("newWallet.keyStoreDown")))]),t._v(" "),e("tips-list",{staticClass:"tips-list",attrs:{tipsListKey:t.tipsListKey}}),t._v(" "),e("public-button",{staticClass:"btn-active",attrs:{type:"button",text:t.$t("newWallet.next")},nativeOn:{click:function(n){return t.continueKey(n)}}})],1)},staticRenderFns:[]};var o=e("VU/8")(i,s,!1,function(t){e("VBGo")},"data-v-935a6b32",null);n.default=o.exports},VBGo:function(t,n){}});