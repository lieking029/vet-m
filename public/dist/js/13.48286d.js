(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{217:function(t,e,r){var i=r(269);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(9)(i,n);i.locals&&(t.exports=i.locals)},26:function(t,e,r){"use strict";r.r(e);var i=r(43),n=r(44),a=r(5);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s={components:{listpage:i.default,listgridpage:n.default},metaInfo:function(){return{title:"List"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(a.b)({user:"auth/user"})),created:function(){this.user||this.$router.push({name:"login"}).catch((function(t){}))}},u=(r(268),r(4)),v=Object(u.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{staticClass:"text-white"},[r("h2",[t._v("My Pets")])])],1),t._v(" "),r("hr",{staticClass:"m-2 white"}),t._v(" "),r("v-card",[r("v-tabs",[r("v-tab",[r("v-icon",{attrs:{size:"35"}},[t._v("mdi-view-module")])],1),t._v(" "),r("v-tab-item",[r("listgridpage")],1),t._v(" "),r("v-tab",[r("v-icon",{attrs:{size:"35"}},[t._v("mdi-view-list")])],1),t._v(" "),r("v-tab-item",[r("listpage")],1)],1)],1)],1)],1)}),[],!1,null,"d40ae0ae",null);e.default=v.exports},268:function(t,e,r){"use strict";r(217)},269:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,".v-tab[data-v-d40ae0ae]{height:40px;width:30[x]}.v-carousel-item[data-v-d40ae0ae]{height:auto}",""])}}]);