(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{402:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("7831848c",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";n.r(e);n(173);var r={props:{unit:{type:Number,required:!0,default:0},value:{type:String,required:!0,default:""},clickBtn:{type:Function,required:!0,default:function(){return{}}}},computed:{inputAnswerMargin:function(){return{marginTop:String(1.2*this.unit)+"px"}},inputtedValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},o=(n(429),n(81)),c=n(175),l=n.n(c),d=n(574),f=n(550),v=n(522),w=n(571),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",style:t.inputAnswerMargin},[n("v-row",{staticClass:"mx-4",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[n("v-text-field",{attrs:{label:"ひらがなで入力",color:"black"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickBtn()}},model:{value:t.inputtedValue,callback:function(e){t.inputtedValue=e},expression:"inputtedValue"}})],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"answer-btn-wrapper",attrs:{cols:"12",sm:"4",md:"4"}},[n("v-btn",{staticClass:"answer-btn",attrs:{block:"",dark:"",tile:""},on:{click:function(e){return t.clickBtn()}}},[t._v("解答")])],1)],1)],1)],1)],1)}),[],!1,null,"05d4201a",null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:f.a,VRow:v.a,VTextField:w.a})},429:function(t,e,n){"use strict";n(402)},430:function(t,e,n){var r=n(79)((function(i){return i[1]}));r.push([t.i,".answer-btn-wrapper[data-v-05d4201a]{position:relative}.add-border[data-v-05d4201a]{border:1px solid #000}",""]),r.locals={},t.exports=r},454:function(t,e,n){"use strict";function r(t){if("function"!=typeof t.getRootNode){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,"a",(function(){return r}))}}]);