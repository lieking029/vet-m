(window.webpackJsonp=window.webpackJsonp||[]).push([[10,27,41],{19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(5),i=a(1),o=a.n(i),l=a(2),c=a.n(l),u=a(6),d=a.n(u);a(11);function m(e,t,a,r,n,s,i){try{var o=e[s](i),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(r,n)}function v(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var s=e.apply(t,a);function i(e){m(s,r,n,i,o,"next",e)}function o(e){m(s,r,n,i,o,"throw",e)}i(void 0)}))}}function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h={metaInfo:function(){return{title:"Manage Students"}},components:{vueDropzone:d.a},middleware:"auth",computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(s.b)({user:"auth/user"})),data:function(){return{data:[],menu:!1,checkifnew:!1,progressBar:!1,search:"",rowsPerPageItems:[10,25,50,100],headers:[{class:"border ",text:"Fullname",value:"fullname"},{class:"border ",text:"Email",value:"email"},{class:"border ",text:"Contact #",value:"contact_no"},{class:"border ",text:"User Type",value:"type"},{width:10,class:"border ",text:"Status",value:"active"},{width:150,class:"border ",text:"Action",value:"id"}],dialog:!1,formRules:[function(e){return!!e||"This is required"}],emailRules:[function(e){return e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Invalid Email address"}],form:{id:"",nick_name:"",first_name:"",last_name:"",middle_name:"",contact_no:"",address:"",birth_date:"",picture:"",email:"",active:"",type:""},list_user_type:[{name:"Admin",id:"2"},{name:"Client",id:"1"}],list_user_status:[{name:"Active",id:"1"},{name:"Inactive",id:"0"}],data1:[],header1:[{width:160,class:"border",text:"Year",value:"year"},{width:250,class:"border",text:"Course",value:"course"},{class:"border",text:"Subject",value:"name"},{class:"border",text:"Description",value:"description"},{width:10,class:"border",text:"Unit",value:"unit"},{width:10,class:"border",text:"Status",value:"active"},{width:10,class:"border",text:"Action",value:"id",sortable:!1}],dropzoneOptions:{url:"/api/account/attachment",maxFilesize:25,uploadMultiple:!0,thumbnailWidth:400,addRemoveLinks:!0,headers:{"My-Awesome-Header":"header value"},dictDefaultMessage:"<div style=' margin-top: -35px; padding: 5px; font-size: 15px;'> <span style='font-size: 20px; color: blue;' class='mdi mdi-camera'></span> Upload </div> "},dialogSettings:!1,refreshSettings:!0}},created:function(){this.user?this.list():this.$router.push({name:"login"}).catch((function(e){}))},methods:{uploadSuccess:function(e,t){this.form.picture=t},uploadQueComplete:function(e){this.$refs.myVueDropzone.removeAllFiles(e)},uploadError:function(e,t){this.$refs.myVueDropzone.removeAllFiles(e),o.a.fire({type:"warning",title:"Uploading Failed.",html:t})},removeThisFile:function(e){try{this.$refs.myVueDropzone.removeAllFiles(e)}catch(e){}},deletefile:function(e){try{this.$refs.myVueDropzone.removeAllFiles(!0)}catch(e){}this.form.picture.splice(e,1)},addUser:function(){this.clearForm(),this.checkifnew=!0,this.dialog=!0},list:function(){var e=this;return v(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.progressBar=!0,t.next=3,c.a.get("/api/account/list").then((function(t){e.data=t.data,e.progressBar=!1}));case 3:case"end":return t.stop()}}),t)})))()},deleteItem:function(e){var t=this;return v(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.fire({title:"Do you want to "+(0==e.active?"enable":"disable")+" this account?",html:"",icon:"question",showCancelButton:!0,cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var t=v(n.a.mark((function t(){var a,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/api/account/active",e);case 2:return a=t.sent,r=a.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),allowOutsideClick:function(){return!o.a.isLoading()}}).then((function(a){console.log(a.value),a.value&&(o.a.fire({type:"success",title:"The user has been successfully "+(0==e.active?"enabled":"disabled")+"."}),t.dialog=!1),t.list()}));case 2:case"end":return a.stop()}}),a)})))()},save:function(){var e=this;return v(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=3;break}return t.next=3,o.a.fire({title:"Do you want to "+(e.form.id?"update":"save")+" this user?",text:"",icon:"question",showCancelButton:!0,cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var t=v(n.a.mark((function t(){var a,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/api/account/save",e.form);case 2:return a=t.sent,r=a.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),allowOutsideClick:function(){return!o.a.isLoading()}}).then((function(t){if(t.value){if(console.log(t.value),1==t.value)return o.a.fire({title:"The email has been already used by other user.",html:"",icon:"warning"}),!1;e.list(),o.a.fire({icon:"success",title:"The request has been successfully "+(e.form.id?"update":"save")+"."}),e.dialog=!1}}));case 3:case"end":return t.stop()}}),t)})))()},editItem:function(e){console.log(e),this.form.id=e.id,this.form.picture=e.picture,this.form.nick_name=e.nick_name,this.form.first_name=e.first_name,this.form.last_name=e.last_name,this.form.middle_name=e.middle_name,this.form.contact_no=e.contact_no,this.form.address=e.address,this.form.birth_date=e.birth_date,this.form.active=e.active.toString(),this.form.type=e.type.toString(),this.form.email=e.email,this.dialog=!0},clearForm:function(){for(var e in this.form)"type"!=e&&(this.form[e]="");this.checkifnew=!1},addRole:function(e){var t=this;this.dialogSettings=!0,this.refreshSettings=!1,this.$nextTick((function(){t.refreshSettings=!0}))}}},b=(a(236),a(4)),_=Object(b.a)(h,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{attrs:{headers:e.headers,items:e.data,height:"343",loading:e.progressBar,dense:"",search:e.search,"footer-props":{"items-per-page-options":[10,25,50,100,-1]}},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-card-actions",[a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{dark:"",small:"",color:"#00794b"},on:{click:e.addUser}},[e._v(" Add new ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-text-field",{attrs:{small:"",outlined:"",dense:"","hide-details":"",label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{small:"",color:"orange",dark:"",text:""},on:{click:e.list}},[a("v-icon",[e._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.active",fn:function(t){var r=t.item;return[a("v-switch",{staticClass:"m-0",attrs:{dense:"",color:"success",small:"","hide-details":"",inset:"",value:1},on:{click:function(t){return e.deleteItem(r)}},model:{value:r.active,callback:function(t){e.$set(r,"active",t)},expression:"item.active"}})]}},{key:"item.type",fn:function(t){return[2==t.item.type?a("div",[e._v("Admin")]):a("div",[e._v("Client")])]}},{key:"item.id",fn:function(t){var r=t.item;return[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[a("v-btn",{staticClass:"px-1",class:n?"btn btn-dark text-white":"btn  btn-info text-white ",attrs:{text:"",small:""},on:{click:function(t){return e.editItem(r)}}},[a("small",[a("v-icon",{attrs:{size:"15"}},[e._v(" mdi-pencil ")])],1)])]}}],null,!0)})]}}],null,!0)},[a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.progressBar,expression:"progressBar"}],attrs:{slot:"progress",color:"green",indeterminate:""},slot:"progress"})],1),e._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"700",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{attrs:{color:"warning"}},[a("v-toolbar",{staticClass:"warning p-1",attrs:{height:"40"}},[a("h4",{staticClass:"text-white"},[e._v("Users Information")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-icon",{attrs:{color:"white"},on:{click:function(t){e.dialog=!1}}},[e._v("mdi-close")])],1),e._v(" "),a("v-form",{ref:"form"},[a("v-card",{staticClass:"p-4",attrs:{flat:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-card",{staticClass:"p-2 m-2",attrs:{width:"200",height:"200"}},[a("v-img",{attrs:{width:"190",height:"190",src:e.form.picture?"https://walrus-app-tna7x.ondigitalocean.app/storage/files/vet/user/"+e.form.picture:"https://provincial-veterinary-clinic.herokuapp.com/img/profile.png"}}),a("v-card-actions",[a("vue-dropzone",{ref:"myVueDropzone",staticClass:"dropzonex",attrs:{id:"training_fileupload",options:e.dropzoneOptions},on:{"vdropzone-success-multiple":e.uploadSuccess,"vdropzone-queue-complete":e.uploadQueComplete,"vdropzone-error":e.uploadError}})],1),e._v(" "),a("v-text-field",{staticClass:"d-none",attrs:{dense:"",small:"","hide-details":"auto"},model:{value:e.form.picture,callback:function(t){e.$set(e.form,"picture",t)},expression:"form.picture"}},[a("template",{slot:"label"},[e._v("\n                      Picture\n                    ")])],2)],1)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"8"}},[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-text-field",{attrs:{dense:"",small:"","hide-details":"auto"},model:{value:e.form.nick_name,callback:function(t){e.$set(e.form,"nick_name",t)},expression:"form.nick_name"}},[a("template",{slot:"label"},[e._v("\n                      Nick Name\n                    ")])],2)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-select",{attrs:{rules:e.formRules,dense:"",small:"","hide-details":"",items:e.list_user_status,"item-text":"name","item-value":"id"},model:{value:e.form.active,callback:function(t){e.$set(e.form,"active",t)},expression:"form.active"}},[a("template",{slot:"label"},[e._v("\n                      Status "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{rules:e.formRules,dense:"",small:"","hide-details":"auto"},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}},[a("template",{slot:"label"},[e._v("\n                      First Name "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{dense:"",clearable:"","hide-details":"auto"},model:{value:e.form.middle_name,callback:function(t){e.$set(e.form,"middle_name",t)},expression:"form.middle_name"}},[a("template",{slot:"label"},[e._v(" Middle Name ")])],2)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{placeholder:"Last Name",rules:e.formRules,dense:"",clearable:"","hide-details":"auto",flat:""},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}},[a("template",{slot:"label"},[e._v("\n                      Last Name "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"12"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.form.birth_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.form,"birth_date",t)},"update:return-value":function(t){return e.$set(e.form,"birth_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{rules:e.formRules,"hide-details":"",readonly:""},model:{value:e.form.birth_date,callback:function(t){e.$set(e.form,"birth_date",t)},expression:"form.birth_date"}},"v-text-field",n,!1),r),[a("template",{slot:"label"},[e._v("\n                                  Birthday "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.form.birth_date,callback:function(t){e.$set(e.form,"birth_date",t)},expression:"form.birth_date"}},[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("\n                                Cancel\n                              ")]),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.$refs.menu.save(e.form.birth_date),e.getAge()}}},[e._v("\n                                OK\n                              ")])],1)],1)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"12"}},[a("v-text-field",{attrs:{rules:e.formRules,dense:"","hide-details":"auto"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}},[a("template",{slot:"label"},[e._v("\n                        Address "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"12"}},[a("v-text-field",{attrs:{rules:e.emailRules,dense:"","hide-details":"auto"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}},[a("template",{slot:"label"},[e._v("\n                      Email Address "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"12"}},[a("v-text-field",{attrs:{dense:"","hide-details":"auto"},model:{value:e.form.contact_no,callback:function(t){e.$set(e.form,"contact_no",t)},expression:"form.contact_no"}},[a("template",{slot:"label"},[e._v(" Contact # ")])],2)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-select",{attrs:{rules:e.formRules,dense:"",small:"","hide-details":"",items:e.list_user_type,"item-text":"name","item-value":"id"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("template",{slot:"label"},[e._v("\n                      Type "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"pull-right",attrs:{cols:"12"}},[a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"info",staticStyle:{"text-transform":"none"},on:{click:e.save}},[a("v-icon",[e._v("mdi-content-save-all")]),e._v(" Save")],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=_.exports},201:function(e,t,a){var r=a(237);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(9)(r,n);r.locals&&(e.exports=r.locals)},22:function(e,t,a){"use strict";a.r(t);var r=a(19),n=a(33),s=a(5);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l={components:{teacherspage:r.default,studentspage:n.default},metaInfo:function(){return{title:"Manage Modules"}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(s.b)({user:"auth/user"})),created:function(){this.user||this.$router.push({name:"login"}).catch((function(e){}))}},c=a(4),u=Object(c.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card-text",[a("v-card-actions",[a("h4",{},[a("b",{staticStyle:{color:"#ff6f69"}},[e._v("MANAGE ACCOUNTS")])]),e._v(" "),a("v-spacer")],1),e._v(" "),a("v-card",[a("v-tabs",{attrs:{"icons-and-text":""}},[a("v-tab",[a("small",[e._v("Teachers")]),e._v(" "),a("v-icon",[e._v("mdi-folder-account")])],1),e._v(" "),a("v-tab-item",[a("teacherspage")],1),e._v(" "),a("v-tab",[a("small",[e._v("Students")]),e._v(" "),a("v-icon",[e._v("mdi-face-profile")])],1),e._v(" "),a("v-tab-item",[a("studentspage")],1)],1)],1)],1)}),[],!1,null,null,null);t.default=u.exports},236:function(e,t,a){"use strict";a(201)},237:function(e,t,a){(e.exports=a(8)(!1)).push([e.i,".dropzonex{position:absolute;top:160px;margin:0!important;padding:0!important;height:40px;width:90%;min-height:0!important}.dz-message{padding:0!important;margin-bottom:2px!important;margin-left:2px!important;text-align:left!important}",""])},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(5),i=a(1),o=a.n(i),l=a(2),c=a.n(l);function u(e,t,a,r,n,s,i){try{var o=e[s](i),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(r,n)}function d(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var s=e.apply(t,a);function i(e){u(s,r,n,i,o,"next",e)}function o(e){u(s,r,n,i,o,"throw",e)}i(void 0)}))}}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f={metaInfo:function(){return{title:"Manage Students"}},middleware:"auth",computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(s.b)({user:"auth/user"})),data:function(){return{data:[],checkifnew:!1,progressBar:!1,search:"",rowsPerPageItems:[10,25,50,100],headers:[{class:"border ",text:"Fullname",value:"fullname"},{class:"border ",text:"Year",value:"year"},{class:"border ",text:"Section",value:"section"},{width:10,class:"border ",text:"Status",value:"active"},{width:150,class:"border ",text:"Action",value:"id"}],dialog:!1,formRules:[function(e){return!!e||"This is required"}],emailRules:[function(e){return e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Invalid Email address"}],form:{id:"",nick_name:"",first_name:"",last_name:"",middle_name:"",contact:"",email:"",active:"",course:[],year:[],id_number:[],picture:""},list_user_type:[],list_user_status:[{name:"Active",id:"1"},{name:"Inactive",id:"0"}],data1:[],header1:[{width:160,class:"border",text:"Year",value:"year"},{width:250,class:"border",text:"Course",value:"course"},{class:"border",text:"Subject",value:"name"},{class:"border",text:"Description",value:"description"},{width:10,class:"border",text:"Unit",value:"unit"},{width:10,class:"border",text:"Status",value:"active"},{width:10,class:"border",text:"Action",value:"id",sortable:!1}],dialogSettings:!1,refreshSettings:!0}},created:function(){this.user?this.list():this.$router.push({name:"login"}).catch((function(e){}))},methods:{addUser:function(){this.clearForm(),this.checkifnew=!0,this.dialog=!0},list:function(){var e=this;return d(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.progressBar=!0,t.next=3,c.a.get("/api/account/list",{params:{type:3}}).then((function(t){e.data=t.data,e.progressBar=!1}));case 3:case"end":return t.stop()}}),t)})))()},deleteItem:function(e){var t=this;return d(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.fire({title:"Do you want to delete this account?",html:"",icon:"question",showCancelButton:!0,cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var t=d(n.a.mark((function t(){var a,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/api/user/active",e);case 2:return a=t.sent,r=a.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),allowOutsideClick:function(){return!o.a.isLoading()}}).then((function(a){a.value&&(o.a.fire({type:"success",title:"The user has been successfully "+(0==e.active?"active":"inactive")+"."}),t.dialog=!1),t.list()}));case 2:case"end":return a.stop()}}),a)})))()},save:function(){var e=this;return d(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=3;break}return t.next=3,o.a.fire({title:"Do you want to "+(e.form.id?"update":"save")+" this user?",text:"",icon:"question",showCancelButton:!0,cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var t=d(n.a.mark((function t(){var a,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/api/user/save",e.form);case 2:return a=t.sent,r=a.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),allowOutsideClick:function(){return!o.a.isLoading()}}).then((function(t){if(console.log(t),t.value){if(1==t.value)return o.a.fire({title:"The email has been already used by other user.",html:"",icon:"warning"}),!1;e.list(),o.a.fire({icon:"success",title:"The request has been successfully "+(e.form.id?"update":"save")+"."}),e.dialog=!1}}));case 3:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.form.id=e.id,this.form.nick_name=e.nick_name,this.form.first_name=e.first_name,this.form.last_name=e.last_name,this.form.middle_name=e.middle_name,this.form.user_type=e.roles[0].name,this.form.contact=e.contact,this.form.active=e.active.toString(),this.form.email=e.email,this.dialog=!0},clearForm:function(){for(var e in this.form)this.form[e]="";this.checkifnew=!1},addRole:function(e){var t=this;this.dialogSettings=!0,this.refreshSettings=!1,this.$nextTick((function(){t.refreshSettings=!0}))}}},p=a(4),h=Object(p.a)(f,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{attrs:{headers:e.headers,items:e.data,height:"385",loading:e.progressBar,dense:"",search:e.search,"footer-props":{"items-per-page-options":[10,25,50,100,-1]}},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-card-actions",[a("v-text-field",{attrs:{small:"",outlined:"",dense:"","hide-details":"",label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),a("v-spacer"),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{dark:"",small:"",color:"#00794b"},on:{click:e.addUser}},[a("v-icon",[e._v("mdi-plus")]),e._v(" Add new Student")],1),e._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{small:"",color:"orange",dark:""},on:{click:e.list}},[a("v-icon",[e._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.active",fn:function(t){var r=t.item;return[a("v-switch",{staticClass:" m-0",attrs:{dense:"",color:"success",small:"","hide-details":"",inset:"",value:1},on:{click:function(t){return e.deleteItem(r)}},model:{value:r.active,callback:function(t){e.$set(r,"active",t)},expression:"item.active"}})]}},{key:"item.id",fn:function(t){var r=t.item;return[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[a("v-btn",{staticClass:"px-1",class:n?"btn btn-dark text-white":"btn  btn-info text-white ",attrs:{text:"",small:""},on:{click:function(t){return e.editItem(r)}}},[a("small",[a("v-icon",{attrs:{size:"15"}},[e._v(" mdi-pencil ")])],1)])]}}],null,!0)}),e._v(" "),a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[a("v-btn",{staticClass:"px-1",class:n?"btn btn-dark text-white":"btn  btn-warning  text-dark ",attrs:{text:"",small:""},on:{click:function(t){return e.editItem(r)}}},[a("small",[a("v-icon",{attrs:{size:"15"}},[e._v(" mdi-apps ")])],1)])]}}],null,!0)})]}}],null,!0)},[a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.progressBar,expression:"progressBar"}],attrs:{slot:"progress",color:"green",indeterminate:""},slot:"progress"})],1),e._v(" "),a("v-dialog",{attrs:{persistent:"","max-width":"900",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{attrs:{color:"warning"}},[a("v-toolbar",{staticClass:"warning p-1",attrs:{height:"40"}},[a("h4",{staticClass:"text-white"},[e._v("Student Information")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-icon",{attrs:{color:"white"},on:{click:function(t){e.dialog=!1}}},[e._v("mdi-close")])],1),e._v(" "),a("v-form",{ref:"form"},[a("v-card",{staticClass:"p-4",attrs:{flat:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"3"}},[a("v-card",{staticClass:"p-2 m-2",attrs:{width:"150",height:"150"}},[a("v-img",{attrs:{width:"130",height:"130",src:"https://walrus-app-tna7x.ondigitalocean.app/img/Dashboard/logo.png"}})],1)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"9"}},[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{dense:"",small:"","hide-details":"auto"},model:{value:e.form.nick_name,callback:function(t){e.$set(e.form,"nick_name",t)},expression:"form.nick_name"}},[a("template",{slot:"label"},[e._v("\n                      Nick Name\n                    ")])],2)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-select",{attrs:{rules:e.formRules,dense:"",small:"","hide-details":"",items:e.list_user_status,"item-text":"name","item-value":"id"},model:{value:e.form.active,callback:function(t){e.$set(e.form,"active",t)},expression:"form.active"}},[a("template",{slot:"label"},[e._v("\n                      Status "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{rules:e.formRules,dense:"",small:"","hide-details":"auto"},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}},[a("template",{slot:"label"},[e._v("\n                      First Name "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{dense:"",clearable:"","hide-details":"auto"},model:{value:e.form.middle_name,callback:function(t){e.$set(e.form,"middle_name",t)},expression:"form.middle_name"}},[a("template",{slot:"label"},[e._v(" Middle Name ")])],2)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{placeholder:"Last Name",rules:e.formRules,dense:"",clearable:"","hide-details":"auto",flat:""},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}},[a("template",{slot:"label"},[e._v("\n                      Last Name "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",xl:"4"}},[a("v-text-field",{attrs:{rules:e.emailRules,dense:"","hide-details":"auto"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}},[a("template",{slot:"label"},[e._v("\n                      Email Address "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1),e._v(" "),a("v-col",{attrs:{cols:"12",xl:"4"}},[a("v-text-field",{attrs:{dense:"","hide-details":"auto"},model:{value:e.form.contact,callback:function(t){e.$set(e.form,"contact",t)},expression:"form.contact"}},[a("template",{slot:"label"},[e._v(" Contact # ")])],2)],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"pull-right",attrs:{cols:"12"}},[a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"info",staticStyle:{"text-transform":"none"},on:{click:e.save}},[a("v-icon",[e._v("mdi-content-save-all")]),e._v(" Save")],1)],1)],1)],1)],1)],1),e._v(" "),a("hr",{staticClass:"m-1"}),e._v(" "),a("v-row",[a("v-col",[a("v-tabs",{attrs:{"icons-and-text":""}},[a("v-tab",[a("small",[e._v("Handled Subjects")]),e._v(" "),a("v-icon",[e._v("mdi-flag")])],1),e._v(" "),a("v-tab-item",[a("v-data-table",{attrs:{"fixed-header":"",headers:e.header1,items:e.data1,dense:"","items-per-page":5,height:"155"}})],1),e._v(" "),a("v-tab",[a("small",[e._v("Teachers")]),e._v(" "),a("v-icon",[e._v("mdi-contacts")])],1),e._v(" "),a("v-tab-item",[a("v-data-table",{attrs:{"fixed-header":"",headers:e.header1,items:e.data1,dense:"","items-per-page":5,height:"155"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=h.exports}}]);