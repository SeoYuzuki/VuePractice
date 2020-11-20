<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <Banner msg="Welcome to Your Vue.js App" />
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue"; // <HelloWorld msg="Welcome to Your Vue.js App" />
//import HelloWorld2 from "./components/HelloWorld2.vue";
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
    //HelloWorld2,
    Banner,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  activated() {},
  deactivated() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
