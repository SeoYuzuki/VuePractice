import Vue from 'vue'
import App from './App.vue'

import router from './components/router/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
