(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{55:function(a,s,t){"use strict";t.r(s);var e=t(0),r=t.n(e),n=t(13),o=t.n(n),i=t(2),c=t.n(i);function l(a,s,t,e,r,n,o){try{var i=a[n](o),c=i.value}catch(a){return void t(a)}i.done?s(c):Promise.resolve(c).then(e,r)}function d(a){return function(){var s=this,t=arguments;return new Promise((function(e,r){var n=a.apply(s,t);function o(a){l(n,e,r,o,i,"next",a)}function i(a){l(n,e,r,o,i,"throw",a)}o(void 0)}))}}var u={middleware:"guest",metaInfo:function(){return{title:"Reset Password"}},data:function(){return{value1:!1,value:!1,snackbar:{status:!1,message:"",color:""},form:new o.a({email:"",password:"",password_confirmation:""})}},created:function(){this.getEmail()},methods:{getEmail:function(){var a=this;return d(r.a.mark((function s(){return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return console.log(a.$route.query.ref),s.next=3,c.a.get("/api/password/param",{params:{ref:a.$route.query.ref}}).then((function(s){a.form.email=s.data}));case 3:case"end":return s.stop()}}),s)})))()},reset:function(){var a=this;return d(r.a.mark((function s(){var t;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.form.password==a.form.password_confirmation){s.next=5;break}return a.snackbar.status=!0,a.snackbar.color="danger",a.snackbar.message="Password didn`t match, Please try again.",s.abrupt("return");case 5:if(a.form.password||a.form.password_confirmation){s.next=10;break}return a.snackbar.status=!0,a.snackbar.color="danger",a.snackbar.message="Please input password.",s.abrupt("return");case 10:return s.next=12,a.form.post("/api/password/reset",a.form);case 12:t=s.sent,t.data?(a.snackbar.status=!0,a.snackbar.color="primary",a.snackbar.message="Password has been successfully reset, you can now login your new password.",setTimeout(window.location="/login",3e3)):(a.snackbar.status=!0,a.snackbar.color="danger",a.snackbar.message="   Invalid password, Please try again.");case 15:case"end":return s.stop()}}),s)})))()}}},f=t(4),m=Object(f.a)(u,(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("v-container",[t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{staticClass:"m-auto",attrs:{md:"5"}},[t("v-card",{staticClass:"m-auto",attrs:{width:"500",flat:""}},[t("v-card-text",[t("v-card",{attrs:{flat:""}},[t("v-row",[t("v-col",{staticClass:"text-center"},[t("h4",[a._v("New Password")])])],1),a._v(" "),t("form",{on:{submit:function(s){return s.preventDefault(),a.send.apply(null,arguments)},keydown:function(s){return a.form.onKeydown(s)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-10 mx-auto"},[t("v-text-field",{class:{"is-invalid":a.form.errors.has("email")},attrs:{dense:"",readonly:"",disabled:"",outlined:"","hide-details":"",label:"Email"},model:{value:a.form.email,callback:function(s){a.$set(a.form,"email",s)},expression:"form.email"}}),a._v(" "),t("has-error",{attrs:{form:a.form,field:"email"}})],1)]),a._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-10 mx-auto"},[t("v-text-field",{class:{"is-invalid":a.form.errors.has("password")},attrs:{dense:"",outlined:"","append-icon":a.value1?"mdi-eye-off":"mdi-eye",type:a.value1?"text":"password","hide-details":"",label:"New Password"},on:{"click:append":function(){return a.value1=!a.value1}},model:{value:a.form.password,callback:function(s){a.$set(a.form,"password",s)},expression:"form.password"}})],1)]),a._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-10 mx-auto"},[t("v-text-field",{class:{"is-invalid":a.form.errors.has("password_confirmation")},attrs:{dense:"",outlined:"","append-icon":a.value?"mdi-eye-off":"mdi-eye",type:a.value?"text":"password","hide-details":"",label:"Confirm Password"},on:{"click:append":function(){return a.value=!a.value}},model:{value:a.form.password_confirmation,callback:function(s){a.$set(a.form,"password_confirmation",s)},expression:"form.password_confirmation"}})],1)])])],1),a._v(" "),t("hr"),a._v(" "),t("v-card-actions",[t("v-btn",{attrs:{text:"",color:"info",to:{name:"login"},small:""}},[a._v("\n                    Login\n                  ")]),a._v(" "),t("v-spacer"),a._v(" "),t("v-btn",{staticClass:"info",attrs:{loading:a.form.busy},on:{click:a.reset}},[a._v("\n                    Save\n                  ")])],1)],1)],1)],1)],1)],1),a._v(" "),t("v-snackbar",{staticClass:"text-center text-dark",staticStyle:{top:"70%"},attrs:{top:"",color:a.snackbar.color+" lighten-2"},model:{value:a.snackbar.status,callback:function(s){a.$set(a.snackbar,"status",s)},expression:"snackbar.status"}},[a._v(a._s(a.snackbar.message))])],1)}),[],!1,null,null,null);s.default=m.exports}}]);