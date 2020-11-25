import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "../HelloWorld.vue";
import finTestinOrder from "../finTestinOrder.vue";
import finTest from "../finTest.vue";
import finEthics from "../finEthics.vue";
import finTestMock100 from "../finTestMock100.vue";

import testMainPage from "../testMainPage.vue";
import testAxios from "../testAxios.vue";
import testImage from "../testImage.vue";
import testComputed from "../testComputed.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  // base: process.env.VUE_APP_PUBLIC_PATH,
  //routes
  routes: [

    {
      path: '/example',
      name: 'example',
      component: HelloWorld
    },
    {
      path: '/finTest',
      name: 'finTest',
      component: finTest,
      children: [{
        path: 'finTestH',
        name: 'finTestH',
        component: finTestinOrder
      },
      {
        path: 'finTestT',
        name: 'finTestT',
        component: finTestMock100
      },
      ],
    },

    {
      path: '/finEthics',
      name: 'finEthics',
      component: finEthics
    },

    {

      path: '/testMainPage',
      name: 'testMainPage',
      component: testMainPage,
      children: [{
        path: 'testAxios',
        name: 'testAxios',
        component: testAxios
      },
      {
        path: 'testImage',
        name: 'testImage',
        component: testImage
      },
      {
        path: 'testComputed',
        name: 'testComputed',
        component: testComputed
      },
      ],
    },

  ]
});



export default router;
