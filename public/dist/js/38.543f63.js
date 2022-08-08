(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{56:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(5),i=a(2),o=a.n(i);function c(t,e,a,n,r,s,i){try{var o=t[s](i),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(n,r)}function u(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var s=t.apply(e,a);function i(t){c(s,n,r,i,o,"next",t)}function o(t){c(s,n,r,i,o,"throw",t)}i(void 0)}))}}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v={metaInfo:function(){return{title:"Dashboard"}},middleware:"auth",computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(s.b)({user:"auth/user"})),data:function(){return{window:0,active:!1,overlay:!1,items:[],type:"month",employees:"",empl:"",types:["month","week","day","4day"],mode:"stack",modes:["stack","column"],weekday:[0,1,2,3,4,5,6],weekdays:[{text:"Sun - Sat",value:[0,1,2,3,4,5,6]},{text:"Mon - Sun",value:[1,2,3,4,5,6,0]},{text:"Mon - Fri",value:[1,2,3,4,5]},{text:"Mon, Wed, Fri",value:[1,3,5]}],value:"",starts:"",ends:"",events:[],appointments_data:[],counts:[]}},mounted:function(){this.user?(this.getAppointments(),this.getCounts()):this.$router.push({name:"login"}).catch((function(t){}))},methods:{getFormatDate:function(t,e){return moment(t).format(e)},getParamCalendar:function(){},getAppointments:function(){var t=this;return u(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/vet/dashboard/appointments").then((function(e){console.log(e.data),t.appointments_data=e.data}));case 2:case"end":return e.stop()}}),e)})))()},getCounts:function(){var t=this;return u(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/vet/dashboard/counts").then((function(e){t.items=[{text:"My Pets",value:e.data.pets,image:"https://walrus-app-tna7x.ondigitalocean.app/img/Dashboard/aaaa.png"},{text:"My Animals",value:e.data.animals,image:"https://walrus-app-tna7x.ondigitalocean.app/img/Dashboard/aaaaaa.png"},{text:"Appointments",value:e.data.appointments,image:"https://walrus-app-tna7x.ondigitalocean.app/img/Dashboard/aaaaa.png"},{text:"Orders",value:e.data.orders,image:"https://walrus-app-tna7x.ondigitalocean.app/img/Dashboard/aaa.png"}]}));case 2:case"end":return e.stop()}}),e)})))()}}},d=a(4),m=Object(d.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card-text",{staticClass:"p-1"},[a("v-row",[a("v-col",{staticClass:"text-white"},[a("h2",[t._v("Hi, "+t._s(t.user.first_name))])])],1),t._v(" "),a("hr",{staticClass:"m-2 white"}),t._v(" "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-row",{attrs:{"no-gutters":""}},t._l(t.items,(function(e,n){return a("v-col",{key:n,staticClass:"text-center m-2",attrs:{cols:"3"}},[a("v-card",{staticClass:"p-2"},[a("v-card-actions",[a("v-img",{staticClass:"rounded",attrs:{contain:"",width:"70",height:"60",src:e.image}}),t._v(" "),a("h1",{staticStyle:{"font-size":"25px"}},[a("b",[t._v(t._s(e.value))])])],1),t._v(" "),a("span",{staticStyle:{"font-size":"10px"}},[a("b",[t._v(t._s(e.text))])])],1)],1)})),1)],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-container",{staticClass:"text-white",staticStyle:{height:"400px"}},[a("div",[a("h6",[a("b",[t._v("Appointments")])]),t._v(" "),a("hr"),t._v(" "),0==t.appointments_data.length?a("div",{staticClass:"text-center"},[t._v("No Appointments found")]):a("v-row",{attrs:{align:"center"}},[a("v-item-group",{staticClass:"shrink mr-6",attrs:{mandatory:"",tag:"v-flex"},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},t._l(t.appointments_data,(function(e,n){return a("v-item",{key:n,scopedSlots:t._u([{key:"default",fn:function(e){var n=e.active,r=e.toggle;return[a("div",[a("v-btn",{attrs:{"input-value":n,icon:""},on:{click:r}},[a("v-icon",[t._v("mdi-record")])],1)],1)]}}],null,!0)})})),1),t._v(" "),a("v-col",[a("v-window",{staticClass:" text-white",attrs:{vertical:""},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},[t._v("  "+t._s(t.appointments_data)+"\n      "),t._l(t.appointments_data,(function(e,n){return a("v-window-item",{key:n},[a("v-card",{staticClass:"p-2 ",attrs:{flat:""}},[a("v-card-text",[a("v-row",{staticClass:"mb-4",attrs:{align:"center"}},[a("v-avatar",{staticClass:"mr-4",attrs:{color:"grey",size:"60"}},[e.pet.picture?a("v-img",{attrs:{src:"https://walrus-app-tna7x.ondigitalocean.app/storage/files/vet/animal/"+e.pet.picture}}):t._e()],1),t._v(" "),a("strong",[a("div",{staticClass:"text-h6"},[t._v(t._s(e.pet.name))]),t._v(" "),a("small",[t._v(t._s(e.dated))])])],1),t._v(" "),a("strong",[t._v(t._s(e.service)+" ")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v(t._s(e.remarks)+" ")])],1)],1)],1)}))],2)],1)],1)],1)])],1)],1),t._v(" "),a("v-overlay",{attrs:{value:t.overlay}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)],1)}),[],!1,null,null,null);e.default=m.exports}}]);