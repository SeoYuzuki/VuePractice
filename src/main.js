import Vue from 'vue'
import App from '@/App.vue'
import App2 from '@/App2.vue'

import router from '@/components/router/index.js'
import store from '@/components/store/storeIndex.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'babel-polyfill'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

Vue.component('Apple', {//需調整config
  template: '<div>此div為用Vue.component匯入 </div>',
  data: function () {
    return {
      counter: 0
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

new Vue({
  render: h => h(App2),
  router,
}).$mount('#app2')


