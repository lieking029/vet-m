(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{11:function(e,r,t){var a=t(235);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(9)(a,o);a.locals&&(e.exports=a.locals)},235:function(e,r,t){(e.exports=t(8)(!1)).push([e.i,'@-webkit-keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@-webkit-keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(180deg,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid hsla(0,0%,78.4%,.8);background-color:hsla(0,0%,100%,.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:hsla(0,0%,100%,.4);padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{transform:scale(1.05);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(.77,0,.175,1);animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(.77,0,.175,1);animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-error-mark svg,.dropzone .dz-preview .dz-success-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:hsla(0,0%,100%,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(180deg,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(180deg,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:"";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}.vue-dropzone{border:2px solid #e5e5e5;font-family:Arial,sans-serif;letter-spacing:.2px;color:#777;transition:.2s linear}.vue-dropzone:hover{background-color:#f6f6f6}.vue-dropzone>i{color:#ccc}.vue-dropzone>.dz-preview .dz-image{border-radius:0;width:100%;height:100%}.vue-dropzone>.dz-preview .dz-image img:not([src]){width:200px;height:200px}.vue-dropzone>.dz-preview .dz-image:hover img{transform:none;-webkit-filter:none}.vue-dropzone>.dz-preview .dz-details{bottom:0;top:0;color:#fff;background-color:rgba(33,150,243,.8);transition:opacity .2s linear;text-align:left}.vue-dropzone>.dz-preview .dz-details .dz-filename{overflow:hidden}.vue-dropzone>.dz-preview .dz-details .dz-filename span,.vue-dropzone>.dz-preview .dz-details .dz-size span{background-color:transparent}.vue-dropzone>.dz-preview .dz-details .dz-filename:not(:hover) span{border:none}.vue-dropzone>.dz-preview .dz-details .dz-filename:hover span{background-color:transparent;border:none}.vue-dropzone>.dz-preview .dz-progress .dz-upload{background:#ccc}.vue-dropzone>.dz-preview .dz-remove{position:absolute;z-index:30;color:#fff;margin-left:15px;padding:10px;top:inherit;bottom:15px;border:2px solid #fff;text-decoration:none;text-transform:uppercase;font-size:.8rem;font-weight:800;letter-spacing:1.1px;opacity:0}.vue-dropzone>.dz-preview:hover .dz-remove{opacity:1}.vue-dropzone>.dz-preview .dz-error-mark,.vue-dropzone>.dz-preview .dz-success-mark{margin-left:auto;margin-top:auto;width:100%;top:35%;left:0}.vue-dropzone>.dz-preview .dz-error-mark svg,.vue-dropzone>.dz-preview .dz-success-mark svg{margin-left:auto;margin-right:auto}.vue-dropzone>.dz-preview .dz-error-message{margin-left:auto;margin-right:auto;left:0;width:100%;text-align:center}.vue-dropzone>.dz-preview .dz-error-message:after{display:none}',""])},27:function(e,r,t){"use strict";t.r(r);var a=t(0),o=t.n(a),i=t(5),n=t(2),s=t.n(n);t(11);function d(e,r,t,a,o,i,n){try{var s=e[i](n),d=s.value}catch(e){return void t(e)}s.done?r(d):Promise.resolve(d).then(a,o)}function p(e){return function(){var r=this,t=arguments;return new Promise((function(a,o){var i=e.apply(r,t);function n(e){d(i,a,o,n,s,"next",e)}function s(e){d(i,a,o,n,s,"throw",e)}n(void 0)}))}}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var v={metaInfo:function(){return{title:"Manage Students"}},middleware:"auth",computed:function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},Object(i.b)({user:"auth/user"})),data:function(){return{dialog:!1,print:"",list_year:[],list_status:[],list_active:[{name:"All",id:""},{name:"Active",id:"1"},{name:"Inactive",id:"0"}],param:{row:"",type:"",year:"",course:"",active:"",status:"",val:0},snackbar:{active:!1,message:""},btns:[{name:"Orders",img:"https://provincial-veterinary-clinic-po9ld.ondigitalocean.app/img/Reports/a1.png",route:"a",param1:0},{name:"Pets",img:"https://provincial-veterinary-clinic-po9ld.ondigitalocean.app/img/Reports/a2.png",route:"b",param1:0},{name:"Animals",img:"https://provincial-veterinary-clinic-po9ld.ondigitalocean.app/img/Reports/a5.png",route:"c",param1:0},{name:"Appointments",img:"https://provincial-veterinary-clinic-po9ld.ondigitalocean.app/img/Reports/a3.png",route:"d",param1:0},{name:"Clients",img:"https://provincial-veterinary-clinic-po9ld.ondigitalocean.app/img/Reports/a4.png",route:"e",param1:0}]}},created:function(){this.user||this.$router.push({name:"login"}).catch((function(e){}))},methods:{chooseParameter:function(e){switch(this.param.row=e,e){case"a":case"b":case"c":case"d":case"e":this.getYearType(),this.getStatusType(),this.param.val=0;break;default:this.param.val=1}this.dialog=!0},getYearType:function(){var e=this;return p(o.a.mark((function r(){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.list_year.push({name:"All",id:""}),r.next=3,s.a.get("/api/vet/reports/year/list").then((function(r){for(var t in r.data)e.list_year.push({name:r.data[t].year,id:r.data[t].year})}));case 3:case"end":return r.stop()}}),r)})))()},getStatusType:function(){var e=this;return p(o.a.mark((function r(){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.list_status.push({name:"All",id:""}),r.next=3,s.a.get("/api/vet/reports/status/list").then((function(r){for(var t in r.data)e.list_status.push({name:r.data[t].name,id:r.data[t].id})}));case 3:case"end":return r.stop()}}),r)})))()},exporting:function(e){var r=this;return p(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.param.type=e,"pdf"!=e){t.next=6;break}return t.next=4,s()({url:"/api/vet/reports/export",method:"GET",responseType:"blob",params:r.param}).then((function(e){if(e.data.size>0){var t=new Blob([e.data],{type:"application/pdf"});r.print=window.URL.createObjectURL(t),r.snackbar={active:!0,iconText:"information",iconColor:"primary",message:"Printing... Please wait."},setTimeout((function(){document.getElementById("print1").contentWindow.print()}),3e3)}else r.snackbar={active:!0,iconText:"alert-box",iconColor:"warning",message:"Nothing to print."}}));case 4:t.next=8;break;case 6:return t.next=8,s.a.get("/api/vet/reports/export",{method:"GET",responseType:"arraybuffer",params:r.param}).then((function(e){var t=new Blob([e.data],{type:"application/excel"}),a=document.createElement("a");a.href=window.URL.createObjectURL(t),a.download="data.xls",a.click(),r.snackbar={active:!0,iconText:"check",iconColor:"success",message:"Successfully exported."}}));case 8:case"end":return t.stop()}}),t)})))()}}},u=t(4),z=Object(u.a)(v,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-card-text",[t("v-container",[t("v-row",[t("v-col",{staticClass:"text-white"},[t("h2",[e._v("Reports")])])],1),e._v(" "),t("hr",{staticClass:"m-2 white"}),e._v(" "),t("v-card",{staticClass:"p-2 transparent",attrs:{flat:""}},[t("v-row",e._l(e.btns,(function(r,a){return t("v-col",{key:a,attrs:{sm:"2",cols:"6"}},[t("v-hover",{scopedSlots:e._u([{key:"default",fn:function(a){var o=a.hover;return[t("v-card",{staticClass:"p-2",staticStyle:{"text-decoration":"none"},attrs:{outlined:"",color:o?"#eeeeee":""},on:{click:function(t){return e.chooseParameter(r.route)}}},[t("v-card-title",{staticClass:"m-0 p-0 pb-0 justify-center"},[t("small",[e._v(e._s(r.name))])]),e._v(" "),t("v-card-text",{staticClass:"m-0 p-0 pt-0 justify-center text-center text-caption",class:o?"text-white":""},[t("v-img",{attrs:{height:"100",contain:"",src:r.img}})],1)],1)]}}],null,!0)})],1)})),1)],1)],1),e._v(" "),t("v-snackbar",{staticClass:"text-center pb-0",attrs:{vertical:e.$vuetify.breakpoint.xsOnly,"min-width":"auto",timeout:"2500",left:e.$vuetify.breakpoint.smAndUp},scopedSlots:e._u([{key:"action",fn:function(r){var a=r.attrs;return[t("v-btn",e._b({attrs:{small:e.$vuetify.breakpoint.smAndDown,color:"primary",text:""},on:{click:function(r){e.snackbar.active=!1}}},"v-btn",a,!1),[e._v("Close")])]}}]),model:{value:e.snackbar.active,callback:function(r){e.$set(e.snackbar,"active",r)},expression:"snackbar.active"}},[t("span",[t("v-icon",{attrs:{color:e.snackbar.iconColor}},[e._v(e._s("mdi-"+e.snackbar.iconText))])],1),e._v("\n    "+e._s(e.snackbar.message)+"\n    ")]),e._v(" "),t("iframe",{staticClass:"d-none",attrs:{id:"print1",src:e.print,frameborder:"0"}}),e._v(" "),t("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:e.dialog,callback:function(r){e.dialog=r},expression:"dialog"}},[t("v-card",{attrs:{color:"#f8f8fa"}},[t("v-toolbar",{staticClass:"info"},[t("h4",{staticClass:"text-white"},[e._v("Report Parameter")]),e._v(" "),t("v-spacer"),e._v(" "),t("v-icon",{attrs:{color:"white"},on:{click:function(r){e.dialog=!1}}},[e._v("mdi-close")])],1),e._v(" "),t("br"),e._v(" "),t("v-card-text",[t("v-row",[t("v-col",{staticClass:"p-1",attrs:{cols:"12",xl:"12"}},[t("v-select",{attrs:{dense:"",outlined:"",small:"","hide-details":"",items:e.list_year,"item-text":"name","item-value":"id"},model:{value:e.param.year,callback:function(r){e.$set(e.param,"year",r)},expression:"param.year"}},[t("template",{slot:"label"},[e._v(" Year ")])],2)],1),e._v(" "),1==e.param.val?t("v-col",{staticClass:"p-1",attrs:{cols:"12",xl:"12"}},[t("v-select",{attrs:{dense:"",outlined:"",small:"","hide-details":"",items:e.list_status,"item-text":"name","item-value":"id"},model:{value:e.param.status,callback:function(r){e.$set(e.param,"status",r)},expression:"param.status"}},[t("template",{slot:"label"},[e._v("   Status ")])],2)],1):e._e()],1),e._v(" "),t("v-row",[t("v-col",[t("v-card-actions",[t("v-btn",{staticClass:"danger",attrs:{dark:""},on:{click:function(r){return e.exporting("pdf")}}},[e._v("PDF")]),e._v(" "),t("v-btn",{staticClass:"success",on:{click:function(r){return e.exporting("excel")}}},[e._v("Excel")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=z.exports}}]);