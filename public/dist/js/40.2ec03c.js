(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(1),i=n.n(s),o=n(2),c=n.n(o);function l(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function i(e){l(s,a,r,i,o,"next",e)}function o(e){l(s,a,r,i,o,"throw",e)}i(void 0)}))}}var v={middleware:"auth",data:function(){return{table:[],page:1,checkifnew:!1,progressBar:!1,search:"",rowsPerPageItems:[10,25,50,100],headers:[{width:"1100px",class:"border ",text:"Description",value:"id",sortable:!1},{width:"5px",class:"border ",text:"Action",value:"reference",sortable:!1}],list_banner:[],list_active:[{name:"Active",id:"1"},{name:"Inactive",id:"0"}],banner:[],active:""}},created:function(){this.getDropdown()},watch:{page:function(e){this.page=e,this.list()}},methods:{getDropdown:function(){var e=this;return u(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/api/info/dropdowns").then((function(t){e.list_banner=t.data.banner,e.banner=[],e.active="1",e.list()}));case 2:case"end":return t.stop()}}),t)})))()},list:function(){var e=this;return u(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.progressBar=!0,t.next=3,c.a.get("/api/info/list",{params:{banner:e.banner,page:e.page,active:e.active,search:e.search}}).then((function(t){e.table=t.data}));case 3:e.progressBar=!1;case 4:case"end":return t.stop()}}),t)})))()},getFormatDate:function(e,t){return moment(e).format(t)},deleteItem:function(e,t){var n=this;return u(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.fire({title:"Do you want to "+(0==t?"delete":"re-active")+" this information?",html:"",icon:"question",showCancelButton:!0,cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var t=u(r.a.mark((function t(){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/api/info/delete",e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),allowOutsideClick:function(){return!i.a.isLoading()}}).then((function(e){e.value&&(n.list(),i.a.fire({type:"success",title:"The information has been successfully "+(0==t?"deleted":"returned to active")+"."}),n.dialog=!1)}));case 2:case"end":return a.stop()}}),a)})))()},editItem:function(e){this.$router.push({name:"info-edit",query:{p:e.hashed_id}})},save:function(){var e=this;return u(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=3;break}return t.next=3,i.a.fire({title:"Do you want to "+(e.form.id?"update":"save")+" this information?",text:"",icon:"question",showCancelButton:!0,cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var t=u(r.a.mark((function t(){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/api/info/save",e.form);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),allowOutsideClick:function(){return!i.a.isLoading()}}).then((function(t){console.log(t),t.value&&(e.list(),i.a.fire({icon:"success",title:"The information has been successfully "+(e.form.id?"update":"save")+"."}),e.dialog=!1)}));case 3:case"end":return t.stop()}}),t)})))()}}},d=n(4),f=Object(d.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card-text",[n("v-row",[n("v-col",[n("h6",{},[n("b",{staticStyle:{color:"#019267"}},[e._v("SEARCH / UPDATE")])])])],1),e._v(" "),n("hr",{staticClass:"m-1"}),e._v(" "),n("v-data-table",{attrs:{"fixed-header":"",headers:e.headers,items:e.table.data,dense:"","hide-default-footer":"","items-per-page":10,height:"525",loading:e.progressBar},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-card-actions",{staticClass:"p-1"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-autocomplete",{attrs:{dense:"",outlined:"","return-object":!1,multiple:"",clearable:"","small-chips":"","hide-details":"",items:e.list_banner,"item-text":"name","item-value":"id"},on:{change:e.list},model:{value:e.banner,callback:function(t){e.banner=t},expression:"banner"}},[n("template",{slot:"label"},[e._v(" Banner Program ")])],2)],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-text-field",{attrs:{dense:"",outlined:"","hide-details":""},on:{keyup:e.list},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[n("template",{slot:"label"},[e._v("\n                Search ("),n("small",[e._v("Title, Agency or Coordinator")]),e._v(")\n              ")])],2)],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"2"}},[n("v-select",{staticClass:"px-1",attrs:{dense:"",outlined:"",small:"","hide-details":"",items:e.list_active,"item-text":"name","item-value":"id"},on:{change:e.list},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("template",{slot:"label"},[e._v(" Status ")])],2)],1)],1),e._v(" "),n("v-btn",{staticStyle:{"text-transform":"none"},attrs:{small:"",color:"orange",dark:"",text:""},on:{click:e.list}},[n("v-icon",[e._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.id",fn:function(t){var a=t.item;return[n("v-row",[n("v-col",{attrs:{cols:"9"}},[n("b",[e._v(" Reference #: ")]),e._v(" "+e._s(a.reference)+" "),n("br"),e._v(" "),n("b",[e._v(" Program: ")]),e._v(e._s(a.programs.name)+" "),n("br"),e._v(" "),n("b",[e._v(" Title: ")]),e._v(" "+e._s(a.title)+"\n        ")]),e._v(" "),n("v-col",{staticClass:"border-left",attrs:{cols:"3"}},[n("br"),e._v(" "),n("b",[e._v(" Date Received: ")]),e._v(e._s(e.getFormatDate(a.date,"MM/DD/YYYY"))+"\n          "),n("br"),e._v(" "),n("b",[e._v(" Status: ")]),e._v(" "),n("v-chip",{staticClass:"text-dark",attrs:{color:"secondary",small:""}},[e._v(e._s(a.statuses.name))]),e._v(" "),n("br"),e._v(" "),n("b",[e._v(" Budget: ")]),e._v(e._s(a.budget)+" "),n("br"),e._v(" "),n("b",[e._v(" Agency: ")]),e._v(e._s(a.agency)+" "),n("br")],1)],1)]}},{key:"item.reference",fn:function(t){var a=t.item;return[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return[1==a.active?n("v-btn",{staticClass:"px-1",class:r?"btn btn-dark text-white":"btn  btn-info text-white ",attrs:{block:"",text:"",small:""},on:{click:function(t){return e.editItem(a)}}},[n("small",[n("v-icon",{attrs:{size:"15"}},[e._v(" mdi-pencil ")]),e._v(" Edit/View ")],1)]):e._e()]}}],null,!0)}),e._v(" "),n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return[1==a.active?n("v-btn",{staticClass:"px-1",class:r?"btn btn-dark text-white":"btn  btn-danger text-white ",attrs:{block:"",text:"",small:""},on:{click:function(t){return e.deleteItem(a,0)}}},[n("small",[n("v-icon",{attrs:{size:"15"}},[e._v(" mdi-delete ")]),e._v(" Delete ")],1)]):n("v-btn",{staticClass:"px-1",class:r?"btn btn-dark text-white":"btn  btn-success text-white ",attrs:{text:"",small:""},on:{click:function(t){return e.deleteItem(a,1)}}},[n("small",[n("v-icon",{attrs:{size:"15"}},[e._v(" mdi-keyboard-return ")]),e._v(" Re-Active\n          ")],1)])]}}],null,!0)})]}}],null,!0)},[n("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.progressBar,expression:"progressBar"}],attrs:{slot:"progress",color:"green",indeterminate:""},slot:"progress"})],1),e._v(" "),n("div",{staticClass:" text-center"},[n("v-pagination",{attrs:{"total-visible":10,length:e.table.last_page,color:"red darken-2"},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1)}),[],!1,null,null,null);t.default=f.exports}}]);