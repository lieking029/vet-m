(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{62:function(t,a,e){"use strict";e.r(a);var n=e(0),r=e.n(n),o=e(13),s=e.n(o),c=e(2),i=e.n(c),l=e(1),u=e.n(l);function v(t,a,e,n,r,o,s){try{var c=t[o](s),i=c.value}catch(t){return void e(t)}c.done?a(i):Promise.resolve(i).then(n,r)}var f={middleware:"auth",data:function(){return{snackbar:{active:!1,message:""},snackbar2:{active:!1,message:""},token:"",value:null,value1:null,rules:{passwordRules:[function(t){return!!t||"This is required"},function(t){return t&&t.length<=10||"Password must be 10 characters"}]},form:new s.a({password:"",confirm:""}),remember:!1}},methods:{change:function(){var t,a=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.$refs.form.validate()&&u.a.fire({title:"Do you want to save this changes?",type:"warning",showCancelButton:!0,confirmButtonColor:"#00794b",cancelButtonColor:"#CC0022",confirmButtonText:"Confirm"}).then((function(t){t.value&&i.a.post("/api/changepassword",a.form).then((function(t){a.snackbar={active:!0,iconText:"check",iconColor:"success",message:"Successfully saved."},a.$refs.form.reset()}))}));case 1:case"end":return t.stop()}}),t)})),function(){var a=this,e=arguments;return new Promise((function(n,r){var o=t.apply(a,e);function s(t){v(o,n,r,s,c,"next",t)}function c(t){v(o,n,r,s,c,"throw",t)}s(void 0)}))})()}}},m=e(4),d=Object(m.a)(f,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"min-width":"280px"}},[e("v-snackbar",{attrs:{vertical:t.$vuetify.breakpoint.xsOnly,"min-width":"auto",timeout:"2500"},scopedSlots:t._u([{key:"action",fn:function(a){var n=a.attrs;return[e("v-btn",t._b({attrs:{small:t.$vuetify.breakpoint.smAndDown,color:"primary",text:""},on:{click:function(a){t.snackbar.active=!1}}},"v-btn",n,!1),[t._v("Close")])]}}]),model:{value:t.snackbar.active,callback:function(a){t.$set(t.snackbar,"active",a)},expression:"snackbar.active"}},[e("span",[e("v-icon",{attrs:{color:t.snackbar.iconColor}},[t._v(t._s("mdi-"+t.snackbar.iconText))])],1),t._v("\n    "+t._s(t.snackbar.message)+"\n    ")]),t._v(" "),e("v-snackbar",{attrs:{vertical:t.$vuetify.breakpoint.xsOnly,"min-width":"auto",timeout:"10000"},scopedSlots:t._u([{key:"action",fn:function(a){var n=a.attrs;return[e("v-btn",t._b({attrs:{small:t.$vuetify.breakpoint.smAndDown,color:"primary",text:""},on:{click:function(a){return t.action(t.snackbar2.type)}}},"v-btn",n,!1),[t._v("Yes")]),t._v(" "),e("v-btn",t._b({attrs:{small:t.$vuetify.breakpoint.smAndDown,color:"primary",text:""},on:{click:function(a){t.snackbar2.active=!1}}},"v-btn",n,!1),[t._v("Cancel")])]}}]),model:{value:t.snackbar2.active,callback:function(a){t.$set(t.snackbar2,"active",a)},expression:"snackbar2.active"}},[e("span",[e("v-icon",{attrs:{color:t.snackbar2.iconColor}},[t._v(t._s("mdi-"+t.snackbar2.iconText))])],1),t._v("\n    "+t._s(t.snackbar2.message)+"\n    ")]),t._v(" "),""==t.token?e("v-container",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pa-2",attrs:{cols:"12"}},[e("v-card",{staticClass:"pa-2 mx-auto",attrs:{width:"400",flat:""}},[e("v-card-text",[e("v-card",{attrs:{flat:""}},[e("v-row",[e("v-col",{staticClass:"text-center"},[e("h4",[t._v("Change Password")])])],1),t._v(" "),e("br"),t._v(" "),e("v-form",{ref:"form"},[e("v-text-field",{attrs:{rules:t.rules.passwordRules,"append-icon":t.value1?"mdi-eye-off":"mdi-eye",type:t.value1?"text":"password",label:"New Password"},on:{"click:append":function(){return t.value1=!t.value1}},model:{value:t.form.password,callback:function(a){t.$set(t.form,"password",a)},expression:"form.password"}}),t._v(" "),e("v-text-field",{attrs:{rules:t.rules.passwordRules,"append-icon":t.value?"mdi-eye-off":"mdi-eye",type:t.value?"text":"password",label:"Confirm Password"},on:{"click:append":function(){return t.value=!t.value}},model:{value:t.form.confirmation,callback:function(a){t.$set(t.form,"confirmation",a)},expression:"form.confirmation"}}),t._v(" "),e("v-btn",{staticClass:"text-white mt-2",attrs:{color:"primary",block:""},on:{click:t.change}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1):t._e()],1)}),[],!1,null,null,null);a.default=d.exports}}]);