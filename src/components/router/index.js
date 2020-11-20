import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "../HelloWorld.vue";
import HelloWorld2 from "../HelloWorld2.vue";
import finTest from "../finTest.vue";
import HelloWorld3 from "../HelloWorld3.vue";
import TestPage from "../TestPage.vue";
import finTestMock100 from "../finTestMock100.vue";

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
        component: HelloWorld2
      },
      {
        path: 'finTestT',
        name: 'finTestT',
        component: finTestMock100
      },
      ],
    },
    {
      path: '/a',
      name: 'aname',
      component: HelloWorld2
    },
    {
      path: '/b',
      name: 'bname',
      component: HelloWorld3
    },
    {

      path: '/test',
      name: 'testPage',
      component: TestPage
    },

  ]
});



export default router;
