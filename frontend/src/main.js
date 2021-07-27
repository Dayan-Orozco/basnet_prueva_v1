import Vue from 'vue'
import store from '@/store'
import router from '@/router'


import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

//IMPORTAMOS LIBRERIAS DE BOOTSTRAP-VUE
//import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import App from '@/App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  
render: h => h(App)
}).$mount('#app')
