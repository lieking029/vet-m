(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{211:function(e,t,a){var n=a(257);"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(9)(n,s);n.locals&&(e.exports=n.locals)},256:function(e,t,a){"use strict";a(211)},257:function(e,t,a){(e.exports=a(8)(!1)).push([e.i,".dropzonexz{height:50px;width:100%}.dropzonexx,.dropzonexz{margin:0!important;padding:0!important;min-height:0!important}.dropzonexx{position:absolute;top:200px;height:40px;width:101%;left:-2px}",""])},41:function(e,t,a){"use strict";a.r(t);var n,s=a(0),r=a.n(s),o=a(2),i=a.n(o),l=a(1),c=a.n(l),d=a(6),u=a.n(d);a(11);function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t,a,n,s,r,o){try{var i=e[r](o),l=i.value}catch(e){return void a(e)}i.done?t(l):Promise.resolve(l).then(n,s)}function p(e){return function(){var t=this,a=arguments;return new Promise((function(n,s){var r=e.apply(t,a);function o(e){m(r,n,s,o,i,"next",e)}function i(e){m(r,n,s,o,i,"throw",e)}o(void 0)}))}}var f={components:{vueDropzone:u.a},data:function(){return{page:1,panel:[0,2],menu:!1,hover:!1,search:"",group:"",veterinarians:[{}],list_type:[],remarks:[{}],age:"",list_status:[{name:"Active",value:1},{name:"Inactive",value:2}],list_gender:[{name:"Male",value:"Male"},{name:"Female",value:"Female"}],editedIndex:-1,formRules:[function(e){return!!e||"This is required"}],formRulesNumber:[function(e){return!isNaN(parseFloat(e))&&e>=0&&e<=30||"Input number only"}],progressBar:!1,data:[],sub_dialog:!1,header:[{width:"20%",text:"Name",value:"type",sortable:!1},{width:"10%",text:"Farm",value:"farm_name",sortable:!1},{width:"45%",text:"Owner",value:"owner",sortable:!1},{width:"25%",text:"Action",value:"id",sortable:!1}],form:{id:"",name:"",farm_name:"",type:"",specific_type:"",description:"",location:"",count:"",picture:"",owner:"",email:"",address:"",phone:"",veterinarians:[],attachment:[],remarks:[],active:1},dropzoneOptions:{url:"/api/vet/animals/attachment",maxFilesize:25,uploadMultiple:!0,thumbnailWidth:400,addRemoveLinks:!0,headers:{"My-Awesome-Header":"header value"},dictDefaultMessage:"<div style='border: dashed 1px orange;  margin-top: -25px; padding: 5px; font-size: 15px;'> <span style='font-size: 25px; color: blue;' class='mdi mdi-upload'></span> Click or Drag files </div> "},dropzoneOptionsPicture:{url:"/api/vet/animals/picture",maxFilesize:25,uploadMultiple:!0,thumbnailWidth:400,addRemoveLinks:!0,headers:{"My-Awesome-Header":"header value"},dictDefaultMessage:"<div style='border: dashed 1px orange;   margin-top: -25px; padding: 5px; font-size: 15px;'> <span style='font-size: 25px; padding-left: 20px; color: blue;' class='mdi mdi-camera'></span> Upload </div> "}}},mounted:function(){this.getData(),this.getDropdown()},methods:(n={uploadSuccessPicture:function(e,t){this.form.picture=t},uploadQueCompletePicture:function(e){this.$refs.myVueDropzonex.removeAllFiles(e)},uploadErrorPicture:function(e,t){this.$refs.myVueDropzonex.removeAllFiles(e),c.a.fire({type:"warning",title:"Uploading Failed.",html:t})},uploadSuccess:function(e,t){for(var a in t.file)this.form.attachment.push(t.file[a].imagename)},uploadQueComplete:function(e){this.$refs.myVueDropzone.removeAllFiles(e)},uploadError:function(e,t){this.$refs.myVueDropzone.removeAllFiles(e),c.a.fire({type:"warning",title:"Uploading Failed.",html:t})},removeThisFile:function(e){try{this.$refs.myVueDropzone.removeAllFiles(e)}catch(e){}},deletefile:function(e){try{this.$refs.myVueDropzone.removeAllFiles(!0)}catch(e){}this.form.attachment.splice(e,1)},getAge:function(){var e=Date.now()-new Date(this.form.birth_date).getTime(),t=new Date(e);this.age=Math.abs(t.getUTCFullYear()-1970)},itemDelete:function(e){var t=this;this.editedIndex=this.form.attachment.indexOf(e),c.a.fire({title:"Do you want to delete this attachment?",icon:"question",showCancelButton:!0,cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(e){e.isConfirmed&&(t.form.attachment.splice(t.editedIndex,1),c.a.fire({icon:"success",title:"The attachment has been successfully deleted.",html:'Press "Save" button to commit changes.'}))}))}},v(n,"uploadSuccessPicture",(function(e,t){this.form.picture=t})),v(n,"uploadQueCompletePicture",(function(e){this.$refs.myVueDropzonex.removeAllFiles(e)})),v(n,"uploadErrorPicture",(function(e,t){this.$refs.myVueDropzonex.removeAllFiles(e),c.a.fire({type:"warning",title:"Uploading Failed.",html:t})})),v(n,"AddFieldRemarks",(function(e){this.remarks.push({})})),v(n,"RemoveFieldRemarks",(function(e){this.remarks.splice(e,1),this.form.remarks.splice(e,1)})),v(n,"AddFieldVet",(function(e){this.veterinarians.push({})})),v(n,"RemoveFieldVet",(function(e){this.veterinarians.splice(e,1),this.form.veterinarians.splice(e,1)})),v(n,"getData",(function(){var e=this;return p(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.progressBar=!0,t.next=3,i.a.get("/api/vet/animals/list",{params:{search:e.search}}).then((function(t){e.data=t.data,e.progressBar=!1}));case 3:case"end":return t.stop()}}),t)})))()})),v(n,"getDropdown",(function(){var e=this;return p(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.progressBar=!0,t.next=3,i.a.get("/api/vet/animals/dropdowns").then((function(t){e.list_type=t.data,e.progressBar=!1}));case 3:case"end":return t.stop()}}),t)})))()})),v(n,"store",(function(){var e=this;return p(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.subForm.validate()){t.next=3;break}return t.next=3,c.a.fire({title:"Do you want to "+(-1==e.editedIndex?"save":"update")+"   pet informations?",icon:"question",showCancelButton:!0,confirmButtonColor:"#00794b",cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var t=p(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/api/vet/animals/save",e.form);case 2:return a=t.sent,n=a.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),allowOutsideClick:function(){return!c.a.isLoading()}}).then((function(t){console.log(t.value),t.value&&(e.getData(),e.sub_close(),c.a.fire({icon:"success",title:"The subject has been successfully "+(e.editedIndex>-1?"updated":"saved"),html:""}),e.sub_dialog=!1)}));case 3:case"end":return t.stop()}}),t)})))()})),v(n,"sub_editItem",(function(e){for(var t in this.sub_dialog=!0,this.editedIndex=this.data.indexOf(e),this.veterinarians=[],this.attachment=[],this.remarks=[],this.form=e,e){if("active"==t&&(this.form[t]=parseInt(e[t])),"veterinarians"==t){for(var a in e[t])this.form[t][a]=e[t][a];for(var n=0;n<this.form[t].length;n++)this.AddFieldVet()}if("remarks"==t){for(var a in e[t])this.form[t][a]=e[t][a];for(var s=0;s<this.form[t].length;s++)this.AddFieldRemarks()}}this.getAge()})),v(n,"sub_ActiveItem",(function(e){var t=this;return p(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,c.a.fire({title:"Do you want to "+(1==e.active?"Inactive ":"Active ")+e.name+"?",icon:"question",showCancelButton:!0,confirmButtonColor:"#00794b",cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var t=p(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/api/vet/animals/active",{id:e.id,active:1==e.active?2:1});case 2:return a=t.sent,n=a.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),allowOutsideClick:function(){return!c.a.isLoading()}}).then((function(a){a.value&&c.a.fire({icon:"success",title:"The "+e.name+" has been successfully "+(1==e.active?"Inactive":"Active"),html:""}),t.getData()}));case 3:case"end":return a.stop()}}),a)})))()})),v(n,"sub_close",(function(){this.form={id:"",name:"",farm_name:"",type:"",specific_type:"",description:"",location:"",count:"",owner:"",email:"",address:"",phone:"",veterinarians:[],attachment:[],remarks:"",active:1},this.veterinarians=[],this.attachment=[],this.remarks=[]})),v(n,"addRole",(function(){var e=this;this.dialogSettings=!0,this.refreshSettings=!1,this.$nextTick((function(){e.refreshSettings=!0}))})),n),computed:{formTitle:function(){return-1===this.editedIndex?"Add new ":"Update "}},watch:{page:function(e){this.page=e,this.getData()},data:function(){this.progressBar=!1},sub_dialog:function(e){e||this.sub_close()}}},h=(a(256),a(4)),_=Object(h.a)(f,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-form",{ref:"subForm",attrs:{id:"subForm"}},[a("v-dialog",{attrs:{fullscreen:""},model:{value:e.sub_dialog,callback:function(t){e.sub_dialog=t},expression:"sub_dialog"}},[a("v-card",{staticStyle:{"background-color":"#dadcdc"},attrs:{id:"dialog"}},[a("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("\n          "+e._s(e.formTitle)+" Animal\n          "),a("v-spacer"),e._v(" "),a("v-icon",{staticClass:"float-right",attrs:{text:""},on:{click:function(t){e.sub_dialog=!1}}},[e._v("mdi-close\n          ")])],1),e._v(" "),a("v-card-text",{staticClass:"pt-2",staticStyle:{"overflow-y":"auto","background-color":"#dadcdc"}},[a("v-card",{staticClass:"p-4",attrs:{flat:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-card",{staticClass:"p-4"},[a("v-row",[a("span",[a("b",[e._v("Animal Informations")])]),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-card",{staticClass:"p-2 m-2",attrs:{width:"200",height:"200"}},[a("v-img",{attrs:{width:"190",contain:"",height:"190",src:e.form.picture?"/storage/files/vet/animals/picture/"+e.form.picture:"/img/pets/a1.jpg"}}),e._v(" "),a("v-card-actions",[a("vue-dropzone",{ref:"myVueDropzonex",staticClass:"dropzonexx",attrs:{id:"training_fileuploadx",options:e.dropzoneOptionsPicture},on:{"vdropzone-success-multiple":e.uploadSuccessPicture,"vdropzone-queue-complete":e.uploadQueCompletePicture,"vdropzone-error":e.uploadErrorPicture}})],1),e._v(" "),a("br")],1)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"8"}},[a("v-row",[a("v-spacer"),e._v(" "),a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{rules:e.formRules,dense:"",small:"","hide-details":"",items:e.list_status,"item-text":"name","item-value":"value"},model:{value:e.form.active,callback:function(t){e.$set(e.form,"active",t)},expression:"form.active"}},[a("template",{slot:"label"},[e._v("\n                                    Status "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[a("v-text-field",{attrs:{"hide-details":"",label:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[e._v("Name")])])],2)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[a("v-select",{attrs:{rules:e.formRules,"hide-details":"",items:e.list_type,"item-text":"name","item-value":"id"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("template",{slot:"label"},[e._v("\n                                  Animal/s Type\n                                  "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.form.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.form,"date",t)},"update:return-value":function(t){return e.$set(e.form,"date",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{rules:e.formRules,"hide-details":"",readonly:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}},"v-text-field",s,!1),n),[a("template",{slot:"label"},[e._v("\n                                      Date "),a("abbr",{staticClass:"text-danger"},[e._v("* ")])])],2)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}},[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("\n                                    Cancel\n                                  ")]),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.$refs.menu.save(e.form.date),e.getAge()}}},[e._v("\n                                    OK\n                                  ")])],1)],1)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[a("v-text-field",{attrs:{"hide-details":"",label:""},model:{value:e.form.specific_type,callback:function(t){e.$set(e.form,"specific_type",t)},expression:"form.specific_type"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[e._v("Specific type")])])],2)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"8"}},[a("v-text-field",{attrs:{"hide-details":"",label:""},model:{value:e.form.farm_name,callback:function(t){e.$set(e.form,"farm_name",t)},expression:"form.farm_name"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[e._v("Farm Name")])])],2)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{"hide-details":"",label:""},model:{value:e.form.count,callback:function(t){e.$set(e.form,"count",t)},expression:"form.count"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[e._v("Count")])])],2)],1)],1)],1)],1)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[a("v-textarea",{attrs:{"hide-details":"",rows:"2",label:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[e._v("Description")])])],2)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[a("v-textarea",{attrs:{"hide-details":"",rows:"2",label:""},model:{value:e.form.location,callback:function(t){e.$set(e.form,"location",t)},expression:"form.location"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[e._v("Location")])])],2)],1)],1),e._v(" "),a("hr"),e._v(" "),a("span",[a("b",[e._v("My Owner details")])]),e._v(" "),a("v-row",[a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[a("v-text-field",{attrs:{rules:e.formRules,"hide-details":"",label:""},model:{value:e.form.owner,callback:function(t){e.$set(e.form,"owner",t)},expression:"form.owner"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px",color:"red"}},[e._v("\n                            Owner Name *\n                          ")])])],2)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[a("v-text-field",{attrs:{"hide-details":"",label:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[e._v("Email")])])],2)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[a("v-text-field",{attrs:{"hide-details":"",label:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[e._v("Phone #")])])],2)],1),e._v(" "),a("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[a("v-textarea",{attrs:{rows:"2","hide-details":"",label:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}},[a("template",{slot:"label"},[a("div",{staticStyle:{"font-size":"14px"}},[e._v("Address")])])],2)],1)],1)],1)],1),e._v(" "),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-expansion-panels",{attrs:{multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("b",[e._v("My Documents / Attachments\n                      ")])]),e._v(" "),a("v-expansion-panel-content",[a("v-row",[a("v-col",{staticClass:"py-1",attrs:{cols:"12",xl:"12",lg:"12"}},[a("vue-dropzone",{ref:"myVueDropzone",staticClass:"dropzonexz",attrs:{id:"training_fileupload",options:e.dropzoneOptions},on:{"vdropzone-success-multiple":e.uploadSuccess,"vdropzone-queue-complete":e.uploadQueComplete,"vdropzone-error":e.uploadError}}),e._v(" "),a("v-text-field",{staticStyle:{display:"none"},attrs:{label:"Document"},model:{value:e.form.attachment,callback:function(t){e.$set(e.form,"attachment",t)},expression:"form.attachment"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{staticStyle:{"overflow-y":"auto","max-height":"200px"},attrs:{cols:"12"}},[a("v-simple-table",{attrs:{dense:""}},[a("thead",[a("tr",[a("th",[e._v("File/s")]),e._v(" "),a("th",[e._v("Action")])])]),e._v(" "),e.form.attachment.length>0?a("tbody",e._l(e.form.attachment,(function(t,n){return a("tr",{key:n},[a("td",[a("a",{attrs:{href:"/storage/files/animals/attachment"+t,download:""}},[e._v("\n                                    "+e._s(t.split("~")[0])+"\n                                  ")])]),e._v(" "),a("td",[a("v-btn",{staticClass:"px-1",class:e.hover?"btn btn-dark text-white":"btn  btn-danger text-white ",attrs:{text:"",small:""},on:{click:function(a){return e.itemDelete(t)}}},[a("small",[a("v-icon",{attrs:{size:"15"}},[e._v(" mdi-delete ")])],1)])],1)])})),0):a("tbody",[a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"3"}},[e._v("\n                                  No Attachment found\n                                ")])])])])],1)],1)],1)],1),e._v(" "),a("v-expansion-panel",[a("v-expansion-panel-header",[a("b",[e._v("My Veterinarians")])]),e._v(" "),a("v-expansion-panel-content",[a("v-btn",{attrs:{color:"primary","x-small":""},on:{click:function(t){return e.AddFieldVet(e.veterinarians.length)}}},[a("v-icon",[e._v("mdi-plus")]),e._v(" Add\n                      ")],1),e._v(" "),a("v-card",{staticClass:"pt-4",staticStyle:{"overflow-y":"auto","overflow-x":"hidden"},attrs:{flat:"",height:"130"}},e._l(e.veterinarians,(function(t,n){return a("v-row",{key:n},[a("v-col",{staticClass:"py-1",attrs:{cols:"11"}},[a("v-card-actions",{staticClass:"p-0"},[a("v-textarea",{attrs:{rows:"1",dense:"",outlined:"","hide-details":""},model:{value:e.form.veterinarians[n],callback:function(t){e.$set(e.form.veterinarians,n,t)},expression:"form.veterinarians[key]"}},[a("template",{slot:"label"},[e._v("\n                                  "+e._s(n+1)+". Veterinarian\n                                ")])],2),e._v(" "),a("v-btn",{attrs:{text:"",small:"",color:"danger"},on:{click:function(t){return e.RemoveFieldVet(n)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)],1)],1)})),1)],1)],1),e._v(" "),a("v-expansion-panel",[a("v-expansion-panel-header",[a("b",[e._v("Remarks")])]),e._v(" "),a("v-expansion-panel-content",[a("v-btn",{attrs:{color:"primary","x-small":""},on:{click:function(t){return e.AddFieldRemarks(e.remarks.length)}}},[a("v-icon",[e._v("mdi-plus")]),e._v(" Add\n                      ")],1),e._v(" "),a("v-card",{staticClass:"p-4",staticStyle:{"overflow-y":"auto","overflow-x":"hidden"},attrs:{flat:""}},e._l(e.remarks,(function(t,n){return a("v-row",{key:n},[a("v-col",{staticClass:"py-1",attrs:{cols:"11"}},[a("v-card-actions",{staticClass:"p-0"},[a("v-textarea",{attrs:{rows:"3",dense:"",outlined:"","hide-details":""},model:{value:e.form.remarks[n],callback:function(t){e.$set(e.form.remarks,n,t)},expression:"form.remarks[key]"}},[a("template",{slot:"label"},[e._v("\n                                  "+e._s(n+1)+".Remarks\n                                ")])],2),e._v(" "),a("v-btn",{attrs:{text:"",small:"",color:"danger"},on:{click:function(t){return e.RemoveFieldRemarks(n)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)],1)],1)})),1)],1)],1)],1)],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"#00794b",depressed:"",dark:""},on:{click:e.store}},[e.form.id?a("div",[a("v-icon",[e._v("mdi-content-save-all")]),e._v(" Update\n                ")],1):a("div",[a("v-icon",[e._v("mdi-content-save-settings")]),e._v(" Save\n                ")],1)])],1)],1)],1)],1)],1)],1),e._v(" "),a("v-data-table",{staticClass:"border table-striped thead-dark",attrs:{dense:"",height:"455",loading:e.progressBar,"fixed-header":"",headers:e.header,items:e.data},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-card-actions",[a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"#00794b",depressed:"",dark:""},on:{click:function(t){e.sub_dialog=!0}}},[a("v-icon",[e._v("mdi-plus")]),e._v(" New\n        ")],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-col",{staticClass:"py-0 pl-0",attrs:{xl:"6",lg:"6",cols:"12"}},[a("v-text-field",{attrs:{small:"",outlined:"",dense:"","hide-details":"",label:"Search (Name, Breed or Owner)"},on:{keyup:e.getData},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"orange",depressed:"",small:"",text:"",dark:""},on:{click:e.getData}},[a("v-icon",[e._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.type",fn:function(t){var n=t.item;return[a("b",[e._v(e._s(n.name))]),a("br"),e._v("\n      "+e._s(n.type.name)),a("br"),e._v(" "),a("small",[e._v(e._s(n.count))])]}},{key:"item.farm_name",fn:function(t){var n=t.item;return[e._v("\n      "+e._s(n.farm_name)),a("br"),e._v(" "),a("small",[e._v(e._s(n.location))])]}},{key:"item.owner",fn:function(t){var n=t.item;return[a("small",[e._v("\n        Owner: "+e._s(n.owner)),a("br"),e._v("\n        Address: "+e._s(n.address)+" "),a("br"),e._v("\n        Phone #: "+e._s(n.phone)+" / "+e._s(n.email))])]}},{key:"item.id",fn:function(t){var n=t.item;return[a("v-btn",{staticClass:"px-1 btn btn-primary text-white",attrs:{text:"",small:""},on:{click:function(t){return e.sub_editItem(n)}}},[a("small",[a("v-icon",{attrs:{size:"15"}},[e._v(" mdi-pencil ")]),e._v(" Edit / View ")],1)]),e._v(" "),2==n.active?a("v-btn",{attrs:{color:"success",small:"",dark:""},on:{click:function(t){return e.sub_ActiveItem(n)}}},[a("v-icon",[e._v("mdi-checkbox-marked-outline")])],1):e._e(),e._v(" "),1==n.active?a("v-btn",{attrs:{color:"danger",small:"",dark:""},on:{click:function(t){return e.sub_ActiveItem(n)}}},[a("v-icon",[e._v("mdi-close-circle")])],1):e._e()]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=_.exports}}]);