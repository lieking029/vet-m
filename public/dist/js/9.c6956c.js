(window.webpackJsonp=window.webpackJsonp||[]).push([[9,21,22],{202:function(t,e,a){var r=a(239);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(9)(r,n);r.locals&&(t.exports=r.locals)},203:function(t,e,a){var r=a(241);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(9)(r,n);r.locals&&(t.exports=r.locals)},21:function(t,e,a){"use strict";a.r(e);var r=a(32),n=a(31),o=a(5);function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={components:{subjectpage:r.default,classpage:n.default},metaInfo:function(){return{title:"Manage Modules"}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(o.b)({user:"auth/user"})),created:function(){this.user||this.$router.push({name:"login"}).catch((function(t){}))}},c=a(4),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card-text",[a("v-card-actions",[a("h4",{},[a("b",{staticStyle:{color:"#ff6f69"}},[t._v("SUBJECT / CLASS")])]),t._v(" "),a("v-spacer")],1),t._v(" "),a("v-card",[a("v-tabs",{attrs:{"icons-and-text":""}},[a("v-tab",[a("small",[t._v("Subjects")]),t._v(" "),a("v-icon",[t._v("mdi-flag")])],1),t._v(" "),a("v-tab-item",[a("subjectpage")],1),t._v(" "),a("v-tab",[a("small",[t._v("Class")]),t._v(" "),a("v-icon",[t._v("mdi-book")])],1),t._v(" "),a("v-tab-item",[a("classpage")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports},238:function(t,e,a){"use strict";a(202)},239:function(t,e,a){(t.exports=a(8)(!1)).push([t.i,".dropzonexz{margin:0!important;padding:0!important;height:50px;width:100%;min-height:0!important}.dz-message{padding:0!important;margin-bottom:2px!important;margin-left:2px!important;text-align:left!important}",""])},240:function(t,e,a){"use strict";a(203)},241:function(t,e,a){(t.exports=a(8)(!1)).push([t.i,".dropzonexz{margin:0!important;padding:0!important;height:50px;width:100%;min-height:0!important}.dz-message{padding:0!important;margin-bottom:2px!important;margin-left:2px!important;text-align:left!important}",""])},31:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(2),s=a.n(o),i=a(1),l=a.n(i),c=a(6),u=a.n(c);a(11);function d(t,e,a,r,n,o,s){try{var i=t[o](s),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(r,n)}function v(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var o=t.apply(e,a);function s(t){d(o,r,n,s,i,"next",t)}function i(t){d(o,r,n,s,i,"throw",t)}s(void 0)}))}}var m={components:{vueDropzone:u.a},data:function(){return{page:1,hover:!1,search:"",group:"",list_course:[],list_year:[],list_status:[{name:"Active",value:"1"},{name:"Inactive",value:"0"}],editedIndex:-1,formRules:[function(t){return!!t||"This is required"}],formRulesNumber:[function(t){return!isNaN(parseFloat(t))&&t>=0&&t<=30||"Input number only"}],progressBar:!0,data:[],sub_dialog:!1,header:[{width:160,class:"border",text:"Year",value:"year"},{width:250,class:"border",text:"Course",value:"course"},{class:"border",text:"Class name",value:"name"},{class:"border",text:"Location / Room / Building",value:"location"},{width:10,class:"border",text:"Status",value:"active"},{width:10,class:"border",text:"Action",value:"id",sortable:!1}],form:{year:"",name:"",description:"",location:"",active:"",attachment:[],course:[],id:""},dropzoneOptions:{url:"/api/school/attachment",maxFilesize:25,uploadMultiple:!0,thumbnailWidth:400,addRemoveLinks:!0,headers:{"My-Awesome-Header":"header value"},dictDefaultMessage:"<div style='border: dashed 1px blue;  margin-top: -25px; padding: 5px; font-size: 15px;'> <span style='font-size: 25px; color: blue;' class='mdi mdi-upload'></span> Click or Drag files </div> "}}},mounted:function(){this.getData(),this.getDropdown()},methods:{uploadSuccess:function(t,e){for(var a in e.file)this.form.attachment.push(e.file[a].imagename)},uploadQueComplete:function(t){this.$refs.myVueDropzone.removeAllFiles(t)},uploadError:function(t,e){this.$refs.myVueDropzone.removeAllFiles(t),l.a.fire({type:"warning",title:"Uploading Failed.",html:e})},removeThisFile:function(t){try{this.$refs.myVueDropzone.removeAllFiles(t)}catch(t){}},deletefile:function(t){try{this.$refs.myVueDropzone.removeAllFiles(!0)}catch(t){}this.form.attachment.splice(t,1)},getData:function(){var t=this;return v(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.progressBar=!0,e.next=3,s.a.get("/api/school/class/list",{params:{search:t.search}}).then((function(e){t.data=e.data,t.progressBar=!1}));case 3:case"end":return e.stop()}}),e)})))()},getDropdown:function(){var t=this;return v(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/school/class/dropdowns").then((function(e){t.list_course=e.data.course,t.list_year=e.data.year}));case 2:case"end":return e.stop()}}),e)})))()},store:function(){var t=this;return v(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.subForm.validate()){e.next=3;break}return e.next=3,l.a.fire({title:"Do you want to "+(-1==t.editedIndex?"save":"update")+" this class?",icon:"question",showCancelButton:!0,confirmButtonColor:"#00794b",cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var e=v(n.a.mark((function e(){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/api/school/class/save",t.form);case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),allowOutsideClick:function(){return!l.a.isLoading()}}).then((function(e){console.log(e),e.value&&(t.getData(),t.sub_close(),l.a.fire({icon:"success",title:"The class has been successfully "+(t.editedIndex>-1?"updated":"saved"),html:""}),t.sub_dialog=!1)}));case 3:case"end":return e.stop()}}),e)})))()},sub_editItem:function(t){this.sub_dialog=!0,this.editedIndex=this.data.indexOf(t);var e=t;for(var a in e){if(this.form[a]=e[a],"active"==a&&(this.form[a]=e[a].toString()),"year"==a)for(var r in e[a])this.form[a]=e.year_id;if("course"==a)for(var r in e[a])this.form[a]=e.course_id}},sub_ActiveItem:function(t){var e=this;return v(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.fire({title:"Do you want to "+(1!=t.active?"Inactive ":"Active ")+t.name+"?",icon:"question",showCancelButton:!0,confirmButtonColor:"#00794b",cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var e=v(n.a.mark((function e(){var a,r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/api/school/class/active",{id:t.id,active:null!==(a=t.active)&&void 0!==a?a:0});case 2:return r=e.sent,o=r.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),allowOutsideClick:function(){return!l.a.isLoading()}}).then((function(a){a.value&&l.a.fire({icon:"success",title:"The class has been successfully "+(1!=t.active?"Inactive":"Active"),html:""}),e.getData()}));case 2:case"end":return a.stop()}}),a)})))()},sub_close:function(){this.form={year:"",name:"",description:"",active:"1",attachment:[],course:[],id:""}},addRole:function(){var t=this;this.dialogSettings=!0,this.refreshSettings=!1,this.$nextTick((function(){t.refreshSettings=!0}))}},computed:{formTitle:function(){return-1===this.editedIndex?"Add new ":"Update "}},watch:{page:function(t){this.page=t,this.getData()},data:function(){this.progressBar=!1},sub_dialog:function(t){t||this.sub_close()},menu:function(t){var e=this;t&&setTimeout((function(){return e.$refs.picker.activePicker="YEAR"}))}}},f=(a(238),a(4)),p=Object(f.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-form",{ref:"subForm",attrs:{id:"subForm"}},[a("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.sub_dialog,callback:function(e){t.sub_dialog=e},expression:"sub_dialog"}},[a("v-card",{staticStyle:{"background-color":"#dadcdc"},attrs:{id:"dialog"}},[a("v-toolbar",{attrs:{color:"primary",dark:""}},[t._v("\n          "+t._s(t.formTitle)+" Class\n          "),a("v-spacer"),t._v(" "),a("v-icon",{staticClass:"float-right",attrs:{text:""},on:{click:function(e){t.sub_dialog=!1}}},[t._v("mdi-close\n          ")])],1),t._v(" "),a("br"),t._v(" "),a("v-card-text",{staticStyle:{"background-color":"#dadcdc"}},[a("v-card",{staticClass:"p-4"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"4"}},[a("v-select",{attrs:{rules:t.formRules,outlined:"",dense:"",items:t.list_status,"hide-details":"","item-text":"name","item-value":"value",label:""},model:{value:t.form.active,callback:function(e){t.$set(t.form,"active",e)},expression:"form.active"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("\n                          Status *\n                        ")])])],2)],1)],1),t._v(" "),a("v-row",[a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[a("v-autocomplete",{attrs:{dense:"",outlined:"","return-object":!1,rules:t.formRules,multiple:"",clearable:"","small-chips":"","hide-details":"",items:t.list_year,"item-text":"name","item-value":"id"},model:{value:t.form.year,callback:function(e){t.$set(t.form,"year",e)},expression:"form.year"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("\n                          Year *\n                        ")])])],2)],1),t._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[a("v-autocomplete",{attrs:{dense:"",outlined:"","return-object":!1,rules:t.formRules,multiple:"",clearable:"","small-chips":"","hide-details":"",items:t.list_course,"item-text":"name","item-value":"id"},model:{value:t.form.course,callback:function(e){t.$set(t.form,"course",e)},expression:"form.course"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("\n                          Course *\n                        ")])])],2)],1),t._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[a("v-text-field",{attrs:{rules:t.formRules,outlined:"",dense:"","hide-details":"",label:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("Name *")])])],2)],1),t._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",xl:"12",lg:"12"}},[a("v-textarea",{attrs:{outlined:"",rows:"2",dense:"","hide-details":"",label:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[t._v("\n                          Description  \n                        ")])])],2)],1),t._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",xl:"12",lg:"12"}},[a("v-textarea",{attrs:{outlined:"",rows:"2",dense:"","hide-details":"",label:""},model:{value:t.form.location,callback:function(e){t.$set(t.form,"location",e)},expression:"form.location"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[t._v("\n                          Location / Room / Building  \n                        ")])])],2)],1),t._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",xl:"12",lg:"12"}},[a("vue-dropzone",{ref:"myVueDropzone",staticClass:"dropzonexz",attrs:{id:"training_fileupload",options:t.dropzoneOptions},on:{"vdropzone-success-multiple":t.uploadSuccess,"vdropzone-queue-complete":t.uploadQueComplete,"vdropzone-error":t.uploadError}}),t._v(" "),a("v-text-field",{staticStyle:{display:"none"},attrs:{label:"Document"},model:{value:t.form.attachment,callback:function(e){t.$set(t.form,"attachment",e)},expression:"form.attachment"}})],1)],1),t._v(" "),a("v-row",[a("v-col",{staticStyle:{"overflow-y":"auto","max-height":"300px"},attrs:{cols:"12"}},[a("v-simple-table",{attrs:{dense:""}},[a("thead",[a("tr",[a("th",[t._v("File/s")]),t._v(" "),a("th",[t._v("Action")])])]),t._v(" "),t.form.attachment.length>0?a("tbody",t._l(t.form.attachment,(function(e,r){return a("tr",{key:r},[a("td",[a("a",{attrs:{href:"/storage/files/school/"+e,download:""}},[t._v("\n                              "+t._s(e.split("~")[0])+"\n                            ")])]),t._v(" "),a("td",[a("v-btn",{staticClass:"px-1",class:t.hover?"btn btn-dark text-white":"btn  btn-danger text-white ",attrs:{text:"",small:""},on:{click:function(a){return t.itemDelete(e)}}},[a("small",[a("v-icon",{attrs:{size:"15"}},[t._v(" mdi-delete ")])],1)])],1)])})),0):a("tbody",[a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v("\n                            No Attachment found\n                          ")])])])])],1)],1)],1)],1),t._v(" "),a("hr"),t._v(" "),a("v-row",[a("v-col",[a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"#00794b",depressed:"",dark:""},on:{click:t.store}},[t.form.id?a("div",[a("v-icon",[t._v("mdi-content-save-all")]),t._v(" Update\n                    ")],1):a("div",[a("v-icon",[t._v("mdi-content-save-settings")]),t._v(" Save\n                    ")],1)])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("v-data-table",{attrs:{dense:"",height:"330",loading:t.progressBar,headers:t.header,items:t.data},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-card-actions",[a("v-col",{staticClass:"py-0 pl-0",attrs:{xl:"4",lg:"4",cols:"12"}},[a("v-text-field",{attrs:{small:"",outlined:"",dense:"","hide-details":"",label:"Search"},on:{keyup:t.getData},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"#00794b",depressed:"",dark:"",small:""},on:{click:function(e){t.sub_dialog=!0}}},[a("v-icon",[t._v("mdi-plus")]),t._v(" Add new\n        ")],1),t._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"orange",depressed:"",small:"",dark:""},on:{click:t.getData}},[a("v-icon",[t._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.name",fn:function(e){var r=e.item;return[t._v("\n     "+t._s(r.name)),a("br"),a("small",[t._v(t._s(r.description))])]}},{key:"item.active",fn:function(e){var r=e.item;return[a("v-switch",{staticClass:"m-0",attrs:{dense:"",small:"","hide-details":"",inset:"",value:1},on:{click:function(e){return t.sub_ActiveItem(r)}},model:{value:r.active,callback:function(e){t.$set(r,"active",e)},expression:"item.active"}})]}},{key:"item.id",fn:function(e){var r=e.item;return[a("v-btn",{staticClass:"px-1 btn btn-primary text-white",attrs:{text:"",small:""},on:{click:function(e){return t.sub_editItem(r)}}},[a("small",[a("v-icon",{attrs:{size:"15"}},[t._v(" mdi-pencil ")]),t._v(" Edit ")],1)])]}},{key:"item.year",fn:function(e){var r=e.item;return[a("v-row",{attrs:{"no-gutters":""}},t._l(r.year,(function(e,r){return a("v-col",{key:r,staticClass:"m-0",attrs:{cols:"6"}},[a("v-icon",{attrs:{size:"10",color:"success"}},[t._v("mdi-checkbox-blank-circle")]),a("small",[t._v(" "+t._s(e.name)+" ")])],1)})),1)]}},{key:"item.course",fn:function(e){var r=e.item;return t._l(r.course,(function(e,n){return a("div",{key:n},[r.course.length-1>1?a("div",[n+1<=2?a("small",[a("v-icon",{attrs:{size:"10",color:"dark"}},[t._v("mdi-checkbox-blank-circle")]),t._v("\n            "+t._s(e.name)+"\n          ")],1):t._e(),t._v(" "),n+1==2?a("small",[a("br"),t._v(" "),a("v-icon",{attrs:{size:"10",color:"dark"}},[t._v("mdi-plus")]),t._v("\n            more\n          ")],1):t._e()]):a("div",[a("small",[a("v-icon",{attrs:{size:"10",color:"dark"}},[t._v("mdi-checkbox-blank-circle")]),t._v("\n            "+t._s(e.name)+"\n          ")],1)])])}))}}],null,!0)})],1)}),[],!1,null,null,null);e.default=p.exports},32:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(2),s=a.n(o),i=a(1),l=a.n(i),c=a(6),u=a.n(c);a(11);function d(t,e,a,r,n,o,s){try{var i=t[o](s),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(r,n)}function v(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var o=t.apply(e,a);function s(t){d(o,r,n,s,i,"next",t)}function i(t){d(o,r,n,s,i,"throw",t)}s(void 0)}))}}var m={components:{vueDropzone:u.a},data:function(){return{page:1,hover:!1,search:"",group:"",list_course:[],list_year:[],list_status:[{name:"Active",value:"1"},{name:"Inactive",value:"0"}],editedIndex:-1,formRules:[function(t){return!!t||"This is required"}],formRulesNumber:[function(t){return!isNaN(parseFloat(t))&&t>=0&&t<=30||"Input number only"}],progressBar:!0,data:[],sub_dialog:!1,header:[{width:160,class:"border",text:"Year",value:"year"},{width:250,class:"border",text:"Course",value:"course"},{class:"border",text:"Subject",value:"name"},{class:"border",text:"Description",value:"description"},{width:10,class:"border",text:"Unit",value:"unit"},{width:10,class:"border",text:"Status",value:"active"},{width:10,class:"border",text:"Action",value:"id",sortable:!1}],form:{year:"",name:"",description:"",active:"",unit:"",attachment:[],course:[],id:""},dropzoneOptions:{url:"/api/school/subject/attachment",maxFilesize:25,uploadMultiple:!0,thumbnailWidth:400,addRemoveLinks:!0,headers:{"My-Awesome-Header":"header value"},dictDefaultMessage:"<div style='border: dashed 1px blue;  margin-top: -25px; padding: 5px; font-size: 15px;'> <span style='font-size: 25px; color: blue;' class='mdi mdi-upload'></span> Click or Drag files </div> "}}},mounted:function(){this.getData(),this.getDropdown()},methods:{uploadSuccess:function(t,e){for(var a in e.file)this.form.attachment.push(e.file[a].imagename)},uploadQueComplete:function(t){this.$refs.myVueDropzone.removeAllFiles(t)},uploadError:function(t,e){this.$refs.myVueDropzone.removeAllFiles(t),l.a.fire({type:"warning",title:"Uploading Failed.",html:e})},removeThisFile:function(t){try{this.$refs.myVueDropzone.removeAllFiles(t)}catch(t){}},deletefile:function(t){try{this.$refs.myVueDropzone.removeAllFiles(!0)}catch(t){}this.form.attachment.splice(t,1)},getData:function(){var t=this;return v(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.progressBar=!0,e.next=3,s.a.get("/api/school/subject/list",{params:{search:t.search}}).then((function(e){t.data=e.data,t.progressBar=!1}));case 3:case"end":return e.stop()}}),e)})))()},getDropdown:function(){var t=this;return v(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/school/subject/dropdowns").then((function(e){t.list_course=e.data.course,t.list_year=e.data.year}));case 2:case"end":return e.stop()}}),e)})))()},store:function(){var t=this;return v(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.subForm.validate()){e.next=3;break}return e.next=3,l.a.fire({title:"Do you want to "+(-1==t.editedIndex?"save":"update")+" this subject?",icon:"question",showCancelButton:!0,confirmButtonColor:"#00794b",cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var e=v(n.a.mark((function e(){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/api/school/subject/save",t.form);case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),allowOutsideClick:function(){return!l.a.isLoading()}}).then((function(e){console.log(e),e.value&&(t.getData(),t.sub_close(),l.a.fire({icon:"success",title:"The subject has been successfully "+(t.editedIndex>-1?"updated":"saved"),html:""}),t.sub_dialog=!1)}));case 3:case"end":return e.stop()}}),e)})))()},sub_editItem:function(t){this.sub_dialog=!0,this.editedIndex=this.data.indexOf(t);var e=t;for(var a in e){if(this.form[a]=e[a],"active"==a&&(this.form[a]=e[a].toString()),"year"==a)for(var r in e[a])this.form[a]=e.year_id;if("course"==a)for(var r in e[a])this.form[a]=e.course_id}},sub_ActiveItem:function(t){var e=this;return v(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.fire({title:"Do you want to "+(1!=t.active?"Inactive ":"Active ")+t.name+"?",icon:"question",showCancelButton:!0,confirmButtonColor:"#00794b",cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var e=v(n.a.mark((function e(){var a,r,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/api/school/subject/active",{id:t.id,active:null!==(a=t.active)&&void 0!==a?a:0});case 2:return r=e.sent,o=r.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),allowOutsideClick:function(){return!l.a.isLoading()}}).then((function(a){a.value&&l.a.fire({icon:"success",title:"The category has been successfully "+(1!=t.active?"Inactive":"Active"),html:""}),e.getData()}));case 2:case"end":return a.stop()}}),a)})))()},sub_close:function(){this.form={year:"",name:"",description:"",active:"1",attachment:[],course:[],id:""}},addRole:function(){var t=this;this.dialogSettings=!0,this.refreshSettings=!1,this.$nextTick((function(){t.refreshSettings=!0}))}},computed:{formTitle:function(){return-1===this.editedIndex?"Add new ":"Update "}},watch:{page:function(t){this.page=t,this.getData()},data:function(){this.progressBar=!1},sub_dialog:function(t){t||this.sub_close()},menu:function(t){var e=this;t&&setTimeout((function(){return e.$refs.picker.activePicker="YEAR"}))}}},f=(a(240),a(4)),p=Object(f.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-form",{ref:"subForm",attrs:{id:"subForm"}},[a("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.sub_dialog,callback:function(e){t.sub_dialog=e},expression:"sub_dialog"}},[a("v-card",{staticStyle:{"background-color":"#dadcdc"},attrs:{id:"dialog"}},[a("v-toolbar",{attrs:{color:"primary",dark:""}},[t._v("\n          "+t._s(t.formTitle)+" Subject\n          "),a("v-spacer"),t._v(" "),a("v-icon",{staticClass:"float-right",attrs:{text:""},on:{click:function(e){t.sub_dialog=!1}}},[t._v("mdi-close\n          ")])],1),t._v(" "),a("br"),t._v(" "),a("v-card-text",{staticStyle:{"background-color":"#dadcdc"}},[a("v-card",{staticClass:"p-4"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"4"}},[a("v-select",{attrs:{rules:t.formRules,outlined:"",dense:"",items:t.list_status,"hide-details":"","item-text":"name","item-value":"value",label:""},model:{value:t.form.active,callback:function(e){t.$set(t.form,"active",e)},expression:"form.active"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("\n                          Status *\n                        ")])])],2)],1)],1),t._v(" "),a("v-row",[a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[a("v-autocomplete",{attrs:{dense:"",outlined:"","return-object":!1,rules:t.formRules,multiple:"",clearable:"","small-chips":"","hide-details":"",items:t.list_year,"item-text":"name","item-value":"id"},model:{value:t.form.year,callback:function(e){t.$set(t.form,"year",e)},expression:"form.year"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("\n                          Year *\n                        ")])])],2)],1),t._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[a("v-autocomplete",{attrs:{dense:"",outlined:"","return-object":!1,rules:t.formRules,multiple:"",clearable:"","small-chips":"","hide-details":"",items:t.list_course,"item-text":"name","item-value":"id"},model:{value:t.form.course,callback:function(e){t.$set(t.form,"course",e)},expression:"form.course"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("\n                          Course *\n                        ")])])],2)],1),t._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[a("v-text-field",{attrs:{rules:t.formRules,outlined:"",dense:"","hide-details":"",label:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("Name *")])])],2)],1),t._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",xl:"12",lg:"12"}},[a("v-textarea",{attrs:{outlined:"",rows:"2",dense:"","hide-details":"",label:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[t._v("\n                          Description  \n                        ")])])],2)],1),t._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{rules:t.formRulesNumber,outlined:"",type:"number",dense:"","hide-details":"auto",label:""},model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("Unit *")])])],2)],1),t._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",xl:"12",lg:"12"}},[a("vue-dropzone",{ref:"myVueDropzone",staticClass:"dropzonexz",attrs:{id:"training_fileupload",options:t.dropzoneOptions},on:{"vdropzone-success-multiple":t.uploadSuccess,"vdropzone-queue-complete":t.uploadQueComplete,"vdropzone-error":t.uploadError}}),t._v(" "),a("v-text-field",{staticStyle:{display:"none"},attrs:{label:"Document"},model:{value:t.form.attachment,callback:function(e){t.$set(t.form,"attachment",e)},expression:"form.attachment"}})],1)],1),t._v(" "),a("v-row",[a("v-col",{staticStyle:{"overflow-y":"auto","max-height":"300px"},attrs:{cols:"12"}},[a("v-simple-table",{attrs:{dense:""}},[a("thead",[a("tr",[a("th",[t._v("File/s")]),t._v(" "),a("th",[t._v("Action")])])]),t._v(" "),t.form.attachment.length>0?a("tbody",t._l(t.form.attachment,(function(e,r){return a("tr",{key:r},[a("td",[a("a",{attrs:{href:"/storage/files/school/"+e,download:""}},[t._v("\n                              "+t._s(e.split("~")[0])+"\n                            ")])]),t._v(" "),a("td",[a("v-btn",{staticClass:"px-1",class:t.hover?"btn btn-dark text-white":"btn  btn-danger text-white ",attrs:{text:"",small:""},on:{click:function(a){return t.itemDelete(e)}}},[a("small",[a("v-icon",{attrs:{size:"15"}},[t._v(" mdi-delete ")])],1)])],1)])})),0):a("tbody",[a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v("\n                            No Attachment found\n                          ")])])])])],1)],1)],1)],1),t._v(" "),a("hr"),t._v(" "),a("v-row",[a("v-col",[a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"#00794b",depressed:"",dark:""},on:{click:t.store}},[t.form.id?a("div",[a("v-icon",[t._v("mdi-content-save-all")]),t._v(" Update\n                    ")],1):a("div",[a("v-icon",[t._v("mdi-content-save-settings")]),t._v(" Save\n                    ")],1)])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("v-data-table",{attrs:{dense:"",height:"330",loading:t.progressBar,headers:t.header,items:t.data},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-card-actions",[a("v-col",{staticClass:"py-0 pl-0",attrs:{xl:"4",lg:"4",cols:"12"}},[a("v-text-field",{attrs:{small:"",outlined:"",dense:"","hide-details":"",label:"Search"},on:{keyup:t.getData},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"#00794b",depressed:"",dark:"",small:""},on:{click:function(e){t.sub_dialog=!0}}},[a("v-icon",[t._v("mdi-plus")]),t._v(" Add new\n        ")],1),t._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"orange",depressed:"",small:"",dark:""},on:{click:t.getData}},[a("v-icon",[t._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.active",fn:function(e){var r=e.item;return[a("v-switch",{staticClass:"m-0",attrs:{dense:"",small:"","hide-details":"",inset:"",value:1},on:{click:function(e){return t.sub_ActiveItem(r)}},model:{value:r.active,callback:function(e){t.$set(r,"active",e)},expression:"item.active"}})]}},{key:"item.id",fn:function(e){var r=e.item;return[a("v-btn",{staticClass:"px-1 btn btn-primary text-white",attrs:{text:"",small:""},on:{click:function(e){return t.sub_editItem(r)}}},[a("small",[a("v-icon",{attrs:{size:"15"}},[t._v(" mdi-pencil ")]),t._v(" Edit ")],1)])]}},{key:"item.year",fn:function(e){var r=e.item;return[a("v-row",{attrs:{"no-gutters":""}},t._l(r.year,(function(e,r){return a("v-col",{key:r,staticClass:"m-0",attrs:{cols:"6"}},[a("v-icon",{attrs:{size:"10",color:"success"}},[t._v("mdi-checkbox-blank-circle")]),a("small",[t._v(" "+t._s(e.name)+" ")])],1)})),1)]}},{key:"item.course",fn:function(e){var r=e.item;return t._l(r.course,(function(e,n){return a("div",{key:n},[r.course.length-1>1?a("div",[n+1<=2?a("small",[a("v-icon",{attrs:{size:"10",color:"dark"}},[t._v("mdi-checkbox-blank-circle")]),t._v("\n            "+t._s(e.name)+"\n          ")],1):t._e(),t._v(" "),n+1==2?a("small",[a("br"),t._v(" "),a("v-icon",{attrs:{size:"10",color:"dark"}},[t._v("mdi-plus")]),t._v("\n            more\n          ")],1):t._e()]):a("div",[a("small",[a("v-icon",{attrs:{size:"10",color:"dark"}},[t._v("mdi-checkbox-blank-circle")]),t._v("\n            "+t._s(e.name)+"\n          ")],1)])])}))}}],null,!0)})],1)}),[],!1,null,null,null);e.default=p.exports}}]);