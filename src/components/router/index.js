import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
//金融常識
import finTest from "@/components/fin/finTest.vue";
import finTestinOrder from "@/components/fin/finTestinOrder.vue";
import finTestMock100 from "@/components/fin/finTestMock100.vue";
//道德
import finEthics from "@/components/fin/finEthics.vue";
//測試
import testMainPage from "@/components/test/testMainPage.vue";
import testAxios from "@/components/test/testAxios.vue";
import testComputed from "@/components/test/testComputed.vue";
import testStore from "@/components/test/testStore.vue";
import testPathVal from "@/components/test/testPathVal.vue";
//測試UI設計
import testImage from "@/components/testUI/testImage.vue";
import testCSSLeave from "@/components/testUI/testCSSLeave.vue";



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
      {
        path: 'testPathVal',
        name: 'testPathVal',
        component: testPathVal
      },
      {
        path: 'testCSSLeave',
        name: 'testCSSLeave',
        component: testCSSLeave
      },


      ],
    },

  ]
});



export default router;
