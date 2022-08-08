

// window.Vue = require('vue');

import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue';
import store from '~/store'
import router from '~/router'
import vuetify from '~/plugins/vuetify'
import App from '~/Components/App'
import Vuetify from 'vuetify'

import '~/plugins'
import '~/Components'
window.moment = require('moment');

Vue.use(Vuetify)
Vue.config.devtools = true;
new Vue({
    el: '#app',
    vuetify,
    store,
    router,
    ...App
  })
