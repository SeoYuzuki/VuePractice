import Vue from 'vue'
import App from '@/App.vue'
import App2 from '@/App2.vue'

import router from '@/components/router/index.js'
import store from '@/components/store/storeIndex.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

//import iview from "iview";
//import 'iview/dist/styles/iview.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import 'babel-polyfill'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
//Vue.use(iview)
Vue.use(ViewUI)

Vue.component('Apple', {//需調整config
  template: '<div>此div為用Vue.component匯入 </div>',
  data: function () {
    return {
      counter: 0
    }
  }
})

Vue.component('buttonCounter', {
  template: '<button v-on:click="incrementHandler">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementHandler: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

new Vue({
  render: h => h(App2),
  router,
}).$mount('#app2')


