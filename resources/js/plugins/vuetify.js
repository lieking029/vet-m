// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)
 

export default new Vuetify( {
    theme: {
        themes: {
            light: {
                primary: '#40939f',
                info: '#00C897',
                success: '#22d78f',
                warning: '#ff6f69',
                danger: '#f81504',
                secondary: '#FDFFA9',
            },
        }
    }
}
)
