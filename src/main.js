import Vue from 'vue'
import App from './App.vue'

import router from './components/router/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'


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
}).$mount('#app')
