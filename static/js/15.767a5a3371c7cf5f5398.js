webpackJsonp([15],{NCbv:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={name:"",components:{publicInput:function(){return e.e(14).then(e.bind(null,"a1zZ"))},publicTips:function(){return e.e(8).then(e.bind(null,"fSaJ"))}},props:{iptTitle:String,iptPlc:String,iptLength:Number,errorShow:Boolean,errorTxt:String,iptRd:Boolean,iptVal:String},data:function(){return{mappingVal:this.iptVal}},computed:{},created:function(){},methods:{inputChange:function(){var t=this;this.$nextTick(function(){t.mappingVal=t.inputNull(t.mappingVal)})},clearIpt:function(){this.mappingVal=""}},watch:{mappingVal:function(t,n){this.$emit("change",t.replace(/\s+/g,""))}}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("section",{staticClass:"tit-list"},[e("p",[t._v("\n      "+t._s(t.$t(t.iptTitle))),e("label",{directives:[{name:"show",rawName:"v-show",value:!t.iptRd,expression:"!iptRd"}]},[t._v("*")])]),t._v(" "),e("public-tips",{directives:[{name:"show",rawName:"v-show",value:t.errorShow,expression:"errorShow"}],attrs:{tipsTxt:t.errorTxt}})],1),t._v(" "),e("public-input",{class:t.errorShow?"error-border":"",attrs:{value:"iptVal",readonly:t.iptRd,placeholder:t.$t(t.iptPlc),maxlength:t.iptLength},on:{input:t.inputChange},model:{value:t.mappingVal,callback:function(n){t.mappingVal=n},expression:"mappingVal"}})],1)},staticRenderFns:[]};var r=e("VU/8")(i,a,!1,function(t){e("RVDn")},"data-v-71f830a7",null);n.default=r.exports},RVDn:function(t,n){}});