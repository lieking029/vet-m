(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{214:function(t,e,s){var a=s(263);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(9)(a,i);a.locals&&(t.exports=a.locals)},25:function(t,e,s){"use strict";s.r(e);var a=s(0),i=s.n(a),r=s(2),n=s.n(r),o=s(1),l=s.n(o),c=s(6),d=s.n(c);s(11);function m(t,e,s,a,i,r,n){try{var o=t[r](n),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(a,i)}function p(t){return function(){var e=this,s=arguments;return new Promise((function(a,i){var r=t.apply(e,s);function n(t){m(r,a,i,n,o,"next",t)}function o(t){m(r,a,i,n,o,"throw",t)}n(void 0)}))}}var u={components:{vueDropzone:d.a},data:function(){return{page:1,search:"",menu:!1,list_petname:[],list_services:[],list_type:[{name:"My Pets",id:1},{name:"My Farm Animals",id:2}],editedIndex:-1,formRules:[function(t){return!!t||"This is required"}],formRulesNumber:[function(t){return!isNaN(parseFloat(t))&&t>=0&&t<=30||"Input number only"}],progressBar:!1,data:[],sub_dialog:!1,header:[{width:"5%",text:"Name",value:"details.name",sortable:!1},{width:"20%",text:"Service",value:"service",sortable:!1},{width:"55%",text:"Owner",value:"owner",sortable:!1},{width:"25%",text:"Action",value:"id",sortable:!1}],form:{id:"",pet_id:"",service_id:"",amount:"",type:"",breed:"",gender:"",birth_date:"",owner:"",email:"",phone:"",address:"",picture:"",remarks:"",specific_type:"",description:"",count:"",farm_name:"",types:1,descriptions:""}}},mounted:function(){this.getData(),this.getAnimals(),this.getServiceList()},methods:{getData:function(){var t=this;return p(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.progressBar=!0,e.next=3,n.a.get("/api/vet/appointment/list",{params:{search:t.search}}).then((function(e){t.data=e.data,t.progressBar=!1}));case 3:case"end":return e.stop()}}),e)})))()},getAnimals:function(){var t=this;return p(i.a.mark((function e(){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="",s=1==t.form.types?"/api/vet/appointment/pet/list":"/api/vet/appointment/animal/list",e.next=4,n.a.get(s).then((function(e){t.list_petname=e.data}));case 4:case"end":return e.stop()}}),e)})))()},getAnimalDetails:function(t){1==this.form.types?(this.form.breed=this.list_petname[this.list_petname.indexOf(t)].breed,this.form.gender=this.list_petname[this.list_petname.indexOf(t)].gender,this.form.birth_date=this.list_petname[this.list_petname.indexOf(t)].birth_date,this.form.owner=this.list_petname[this.list_petname.indexOf(t)].owner,this.form.email=this.list_petname[this.list_petname.indexOf(t)].email,this.form.phone=this.list_petname[this.list_petname.indexOf(t)].phone,this.form.address=this.list_petname[this.list_petname.indexOf(t)].address,this.form.picture=this.list_petname[this.list_petname.indexOf(t)].picture):(this.form.type=this.list_petname[this.list_petname.indexOf(t)].type.name,this.form.specific_type=this.list_petname[this.list_petname.indexOf(t)].specific_type,this.form.description=this.list_petname[this.list_petname.indexOf(t)].description,this.form.farm_name=this.list_petname[this.list_petname.indexOf(t)].farm_name,this.form.count=this.list_petname[this.list_petname.indexOf(t)].count,this.form.owner=this.list_petname[this.list_petname.indexOf(t)].owner,this.form.email=this.list_petname[this.list_petname.indexOf(t)].email,this.form.phone=this.list_petname[this.list_petname.indexOf(t)].phone,this.form.address=this.list_petname[this.list_petname.indexOf(t)].address,this.form.picture=this.list_petname[this.list_petname.indexOf(t)].picture)},getServiceList:function(){var t=this;return p(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.get("/api/vet/appointment/service/list").then((function(e){t.list_services=e.data}));case 2:case"end":return e.stop()}}),e)})))()},getServiceDetails:function(t){this.form.amount=this.list_services[t-1].amount,this.form.descriptions=this.list_services[t-1].description},store:function(){var t=this;return p(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.subForm.validate()){e.next=3;break}return e.next=3,l.a.fire({title:"Do you want to "+(-1==t.editedIndex?"save":"update")+" appointment?",icon:"question",showCancelButton:!0,confirmButtonColor:"#00794b",cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var e=p(i.a.mark((function e(){var s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.post("/api/vet/appointment/save",t.form);case 2:return s=e.sent,a=s.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),allowOutsideClick:function(){return!l.a.isLoading()}}).then((function(e){e.value&&(t.getData(),t.sub_close(),l.a.fire({icon:"success",title:"The subject has been successfully "+(t.editedIndex>-1?"updated":"saved"),html:""}),t.sub_dialog=!1)}));case 3:case"end":return e.stop()}}),e)})))()},sub_editItem:function(t){this.sub_dialog=!0,this.editedIndex=this.data.indexOf(t),1==t.type?this.form={id:t.id,types:t.type,pet_id:t.details,service_id:t.service.id,amount:t.amount,dated:t.dated,breed:t.details.breed,gender:t.details.gender,birth_date:t.details.birth_date,owner:t.details.owner,email:t.details.email,phone:t.details.phone,address:t.details.address,picture:t.details.picture,remarks:t.remarks}:this.form={id:t.id,types:t.type,pet_id:t.details,service_id:t.service.id,amount:t.amount,dated:t.dated,remarks:t.remarks,count:t.details.count,description:t.details.description,farm_name:t.details.farm_name,type:t.details.types.name,specific_type:t.details.specific_type,picture:t.details.picture,owner:t.details.owner,email:t.details.email,phone:t.details.phone,address:t.details.address},this.getAnimals(),console.log(t)},sub_ActiveItem:function(t){var e=this;return p(i.a.mark((function s(){return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l.a.fire({title:"Do you want to cancel your appointment?",icon:"question",showCancelButton:!0,confirmButtonColor:"#00794b",cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var e=p(i.a.mark((function e(){var s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.post("/api/vet/appointment/cancel",{id:t.id});case 2:return s=e.sent,a=s.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),allowOutsideClick:function(){return!l.a.isLoading()}}).then((function(t){t.value&&l.a.fire({icon:"success",title:"The appointment has been successfully cancelled.",html:""}),e.getData()}));case 2:case"end":return s.stop()}}),s)})))()},sub_close:function(){this.form={id:"",pet_id:"",service_id:"",amount:"",type:"",breed:"",gender:"",birth_date:"",owner:"",email:"",phone:"",address:"",picture:"",remarks:"",specific_type:"",description:"",count:"",farm_name:"",types:1,descriptions:""}},addRole:function(){var t=this;this.dialogSettings=!0,this.refreshSettings=!1,this.$nextTick((function(){t.refreshSettings=!0}))}},computed:{formTitle:function(){return-1===this.editedIndex?"Add new ":"Update "}},watch:{page:function(t){this.page=t,this.getData()},data:function(){this.progressBar=!1},sub_dialog:function(t){t||this.sub_close()}}},f=(s(262),s(4)),v=Object(f.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-form",{ref:"subForm",attrs:{id:"subForm"}},[s("v-dialog",{attrs:{width:"900"},model:{value:t.sub_dialog,callback:function(e){t.sub_dialog=e},expression:"sub_dialog"}},[s("v-card",{staticStyle:{"background-color":"#dadcdc"},attrs:{id:"dialog"}},[s("v-toolbar",{attrs:{color:"primary",dark:""}},[t._v("\n          "+t._s(t.formTitle)+" Appointment details\n          "),s("v-spacer"),t._v(" "),s("v-icon",{staticClass:"float-right",attrs:{text:""},on:{click:function(e){t.sub_dialog=!1}}},[t._v("mdi-close\n          ")])],1),t._v(" "),s("v-card-text",{staticClass:"pt-2",staticStyle:{"overflow-y":"auto","background-color":"#dadcdc"}},[s("v-card",{staticClass:"p-2",attrs:{flat:""}},[s("v-row",{attrs:{"no-gutters":""}},["1"==t.form.types?s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-card",{staticClass:"p-4"},[s("v-row",[s("v-col",{staticClass:"p-2 m-0",attrs:{cols:"12",lg:"4"}},[s("v-card",{staticClass:"p-2",attrs:{height:"100%",width:"100%"}},[s("v-img",{attrs:{contain:"",src:t.form.picture?"https://provincial-veterinary-clinic-po9ld.ondigitalocean.app/storage/files/vet/pets/picture/"+t.form.picture:"https://provincial-veterinary-clinic-po9ld.ondigitalocean.app/img/Pets/a1.jpg"}})],1)],1),t._v(" "),s("v-col",{attrs:{cols:"12",lg:"8"}},[s("v-row",[s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-text-field",{attrs:{"hide-details":"",disabled:"",label:""},model:{value:t.form.breed,callback:function(e){t.$set(t.form,"breed",e)},expression:"form.breed"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Breed")])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-text-field",{attrs:{rules:t.formRules,"hide-details":"",disabled:""},model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}},[s("template",{slot:"label"},[t._v(" Gender ")])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-text-field",{attrs:{rules:t.formRules,"hide-details":"",disabled:""},model:{value:t.form.birth_date,callback:function(e){t.$set(t.form,"birth_date",e)},expression:"form.birth_date"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Birthdate")])])],2)],1)],1)],1)],1),t._v(" "),s("v-row",[s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-text-field",{attrs:{disabled:"","hide-details":"",label:""},model:{value:t.form.owner,callback:function(e){t.$set(t.form,"owner",e)},expression:"form.owner"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Owner Name")])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[s("v-text-field",{attrs:{"hide-details":"",disabled:"",label:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Email")])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[s("v-text-field",{attrs:{"hide-details":"",disabled:"",label:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Phone #")])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-text-field",{attrs:{"hide-details":"",disabled:"",label:""},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Address")])])],2)],1)],1)],1)],1):s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-card",{staticClass:"p-4"},[s("v-row",[s("v-col",{staticClass:"p-2 m-0",attrs:{cols:"12",lg:"4"}},[s("v-card",{staticClass:"p-2",attrs:{height:"100%",width:"100%"}},[s("v-img",{attrs:{contain:"",src:t.form.picture?"https://walrus-app-tna7x.ondigitalocean.app/storage/files/vet/animals/picture/"+t.form.picture:"https://walrus-app-tna7x.ondigitalocean.app/img/Pets/a1.jpg"}})],1)],1),t._v(" "),s("v-col",{attrs:{cols:"12",lg:"8"}},[s("v-row",[s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-text-field",{attrs:{"hide-details":"",disabled:"",label:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Type")])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"8"}},[s("v-text-field",{attrs:{rules:t.formRules,"hide-details":"",disabled:""},model:{value:t.form.specific_type,callback:function(e){t.$set(t.form,"specific_type",e)},expression:"form.specific_type"}},[s("template",{slot:"label"},[t._v(" Specific Type ")])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"4"}},[s("v-text-field",{attrs:{rules:t.formRules,"hide-details":"",disabled:""},model:{value:t.form.count,callback:function(e){t.$set(t.form,"count",e)},expression:"form.count"}},[s("template",{slot:"label"},[t._v(" Count ")])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-text-field",{attrs:{rules:t.formRules,"hide-details":"",disabled:""},model:{value:t.form.farm_name,callback:function(e){t.$set(t.form,"farm_name",e)},expression:"form.farm_name"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Farm Name ")])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-text-field",{attrs:{rules:t.formRules,"hide-details":"",disabled:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Description ")])])],2)],1)],1)],1)],1),t._v(" "),s("v-row",[s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-text-field",{attrs:{disabled:"","hide-details":"",label:""},model:{value:t.form.owner,callback:function(e){t.$set(t.form,"owner",e)},expression:"form.owner"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Owner Name")])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[s("v-text-field",{attrs:{"hide-details":"",disabled:"",label:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Email")])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"6"}},[s("v-text-field",{attrs:{"hide-details":"",disabled:"",label:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Phone #")])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-text-field",{attrs:{"hide-details":"",disabled:"",label:""},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Address")])])],2)],1)],1)],1)],1),t._v(" "),s("v-col",{attrs:{cols:"12",lg:"6"}},[s("v-card-text",[s("v-row",[s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-select",{attrs:{rules:t.formRules,outlined:"",dense:"","hide-details":"",items:t.list_type,"item-text":"name","item-value":"id"},on:{change:t.getAnimals},model:{value:t.form.types,callback:function(e){t.$set(t.form,"types",e)},expression:"form.types"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Type\n                          "),s("abbr",{staticClass:"text-danger"},[t._v("* ")])])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.form.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){return t.$set(t.form,"date",e)},"update:return-value":function(e){return t.$set(t.form,"date",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[s("v-text-field",t._g(t._b({attrs:{dense:"",outlined:"",rules:t.formRules,"hide-details":"",readonly:""},model:{value:t.form.dated,callback:function(e){t.$set(t.form,"dated",e)},expression:"form.dated"}},"v-text-field",i,!1),a),[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("\n                                Appointment Date\n                              "),s("abbr",{staticClass:"text-danger"},[t._v("* ")])])])],2)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),s("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.form.dated,callback:function(e){t.$set(t.form,"dated",e)},expression:"form.dated"}},[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                            Cancel\n                          ")]),t._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.form.dated)}}},[t._v("\n                            OK\n                          ")])],1)],1)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-autocomplete",{attrs:{rules:t.formRules,outlined:"",dense:"","hide-details":"",items:t.list_petname,"item-text":"name","return-object":""},on:{change:t.getAnimalDetails},model:{value:t.form.pet_id,callback:function(e){t.$set(t.form,"pet_id",e)},expression:"form.pet_id"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Pet / Animal\n                          "),s("abbr",{staticClass:"text-danger"},[t._v("* ")])])])],2)],1),t._v(" "),s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-autocomplete",{attrs:{rules:t.formRules,outlined:"","hide-details":"",dense:"",items:t.list_services,"item-text":"name","item-value":"id"},on:{change:t.getServiceDetails},model:{value:t.form.service_id,callback:function(e){t.$set(t.form,"service_id",e)},expression:"form.service_id"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Service\n                          "),s("abbr",{staticClass:"text-danger"},[t._v("* ")])])])],2)],1)],1),t._v(" "),s("v-row",[s("v-col",{staticClass:"py-1",attrs:{cols:"12",lg:"12"}},[s("v-textarea",{attrs:{"hide-details":"",rows:"3",outlined:"",dense:"",label:""},model:{value:t.form.remarks,callback:function(e){t.$set(t.form,"remarks",e)},expression:"form.remarks"}},[s("template",{slot:"label"},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("Reason / Description ")])])],2)],1)],1),t._v(" "),s("v-row",[s("v-col",[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"6"}},[t._v("Service Descriptions:")]),t._v(" "),t.form.amount?s("v-col",{attrs:{cols:"6"}},[t._v("\n                            "+t._s(t.form.descriptions))]):t._e()],1),t._v(" "),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"6"}},[t._v("Service Fee:")]),t._v(" "),t.form.amount?s("v-col",{attrs:{cols:"6"}},[t._v("Php\n                            "+t._s(t.form.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))]):t._e()],1)],1)],1)],1)],1)],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"#00794b",depressed:"",dark:""},on:{click:t.store}},[t.form.id?s("div",[s("v-icon",[t._v("mdi-content-save-all")]),t._v(" Update Appointment\n              ")],1):s("div",[s("v-icon",[t._v("mdi-content-save-settings")]),t._v(" Save Appointment\n              ")],1)])],1)],1)],1)],1)],1)],1),t._v(" "),s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{staticClass:"text-white"},[s("h2",[t._v("Appointments")])])],1),t._v(" "),s("hr",{staticClass:"m-2 white"}),t._v(" "),s("v-data-table",{staticClass:"border table-striped thead-dark",attrs:{dense:"",height:"420",loading:t.progressBar,headers:t.header,items:t.data},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-card-actions",[s("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"#00794b",depressed:"",dark:""},on:{click:function(e){t.sub_dialog=!0}}},[s("v-icon",[t._v("mdi-plus")]),t._v(" New Appointment\n          ")],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"orange",depressed:"",small:"",text:"",dark:""},on:{click:t.getData}},[s("v-icon",[t._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.service",fn:function(e){var a=e.item;return[t._v("\n      "+t._s(a.service.name)),s("br"),t._v(" "),s("small",[t._v(t._s(a.service.handle_by))])]}},{key:"item.owner",fn:function(e){var a=e.item;return[s("small",[t._v("\n\n          Owner: "+t._s(a.details.owner)),s("br"),t._v("\n          Address: "+t._s(a.details.address)+" "),s("br"),t._v("\n          Phone #: "+t._s(a.details.phone)+" / "+t._s(a.details.email))])]}},{key:"item.id",fn:function(e){var a=e.item;return[s("v-btn",{staticClass:"px-1 btn btn-primary text-white",attrs:{text:"",small:""},on:{click:function(e){return t.sub_editItem(a)}}},[s("small",[s("v-icon",{attrs:{size:"15"}},[t._v(" mdi-pencil ")]),t._v(" Edit / View ")],1)]),t._v(" "),s("v-btn",{attrs:{color:"danger",small:"",dark:""},on:{click:function(e){return t.sub_ActiveItem(a)}}},[t._v("\n          Cancel\n        ")])]}}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports},262:function(t,e,s){"use strict";s(214)},263:function(t,e,s){(t.exports=s(8)(!1)).push([t.i,".dropzonexz{height:50px;width:100%}.dropzonexx,.dropzonexz{margin:0!important;padding:0!important;min-height:0!important}.dropzonexx{position:absolute;top:200px;height:40px;width:101%;left:-2px}",""])}}]);