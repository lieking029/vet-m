(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{28:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(2),o=a.n(r),i=a(1),c=a.n(i),u=a(6),l=a.n(u);a(11);function v(t,e,a,n,s,r,o){try{var i=t[r](o),c=i.value}catch(t){return void a(t)}i.done?e(c):Promise.resolve(c).then(n,s)}function d(t){return function(){var e=this,a=arguments;return new Promise((function(n,s){var r=t.apply(e,a);function o(t){v(r,n,s,o,i,"next",t)}function i(t){v(r,n,s,o,i,"throw",t)}o(void 0)}))}}var p={components:{vueDropzone:l.a},data:function(){return{data:[],search:"All",page:1,list_services:[],active:!1}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return d(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.progressBar=!0,e.next=3,o.a.get("/api/vet/services/list",{params:{page:t.page,search:t.search}}).then((function(e){t.data=e.data.data,t.progressBar=!1,t.list_services=e.data.services,t.list_services.unshift({name:"All"})}));case 3:case"end":return e.stop()}}),e)})))()},store:function(){var t=this;return d(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.subForm.validate()){e.next=3;break}return e.next=3,c.a.fire({title:"Do you want to "+(-1==t.editedIndex?"save":"update")+"   pet informations?",icon:"question",showCancelButton:!0,confirmButtonColor:"#00794b",cancelButtonColor:"#CC0022",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var e=d(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/api/vet/animals/save",t.form);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),allowOutsideClick:function(){return!c.a.isLoading()}}).then((function(e){console.log(e),e.value&&(t.getData(),t.sub_close(),c.a.fire({icon:"success",title:"The subject has been successfully "+(t.editedIndex>-1?"updated":"saved"),html:""}),t.sub_dialog=!1)}));case 3:case"end":return e.stop()}}),e)})))()}},computed:{formTitle:function(){return-1===this.editedIndex?"Add new ":"Update "}},watch:{page:function(t){this.page=t,this.getData()},data:function(){this.progressBar=!1},sub_dialog:function(t){t||this.sub_close()}}},f=a(4),h=Object(f.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"text-white"},[a("h2",[t._v("Services")])])],1),t._v(" "),a("hr",{staticClass:"m-2 white"}),t._v(" "),a("v-card",{staticClass:"mb-2"},[a("v-card-actions",[a("v-autocomplete",{attrs:{dense:"","hide-details":"",items:t.list_services,"item-text":"name","item-value":"name"},on:{change:function(e){t.getData(),t.page=1}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("template",{slot:"label"},[t._v(" Services ")])],2),t._v(" "),a("v-spacer"),t._v(" "),a("v-pagination",{attrs:{"total-visible":6,length:t.data.last_page,color:"red darken-2"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1),t._v(" "),a("v-row",t._l(t.data.data,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12",sm:"4"}},[a("v-card",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-img",{attrs:{src:"/storage/files/vet/services/"+e.picture,height:"200px"}},[a("span",{staticClass:"text-h5 white--text pl-4 pt-4 d-inline-block"})])],1),t._v(" "),e.amount?a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-card",{staticClass:"p-2",attrs:{flat:""}},[a("h5",[a("strong",{staticClass:"header text-dark"},[t._v(t._s(e.name))])]),t._v("\n               "+t._s(e.description)+" "),a("br"),t._v("\n               \n              Fee: "+t._s(e.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+"\n                ")]),t._v(" "),a("hr",{staticClass:"m-1"})],1):t._e()],1),t._v(" "),a("v-card-actions",{staticClass:"white"},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{depressed:"",text:"",color:"info",small:"",to:{name:"appointments"}}},[t._v("Apply for appointment")])],1)],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=h.exports}}]);