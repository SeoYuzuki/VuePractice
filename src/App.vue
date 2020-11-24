<template>
  <div id="app">
    <img style="width: 50px" alt="Vue logo" src="./assets/logo.png" />
    yoyo2
    <Banner msg="Welcome to Your Vue.js App" />
    <footer>fo</footer>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: {
    Banner,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    greet: function () {},
  },
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
