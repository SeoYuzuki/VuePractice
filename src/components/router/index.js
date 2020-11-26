import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
import finTestinOrder from "@/components/fin/finTestinOrder.vue";
import finTest from "@/components/fin/finTest.vue";
import finEthics from "@/components/fin/finEthics.vue";
import finTestMock100 from "@/components/fin/finTestMock100.vue";

import testMainPage from "@/components/test/testMainPage.vue";
import testAxios from "@/components/test/testAxios.vue";
import testImage from "@/components/test/testImage.vue";
import testComputed from "@/components/test/testComputed.vue";
import testStore from "@/components/test/testStore.vue";


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
      {
        path: 'testStore',
        name: 'testStore',
        component: testStore
      },
      ],
    },

  ]
});



export default router;
