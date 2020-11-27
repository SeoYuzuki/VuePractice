<template>
  <div id="app">
    <img style="width: 50px" alt="Vue logo" src="./assets/logo.png" />
    yoyo2
    <Banner msg="Welcome to Your Vue.js App" />
    <!--router-view  -->
    <div style="clear: both">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <footer s>footer</footer>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

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
<style scoped src='@/assets/commonStyle.css'></style>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(224, 205, 243);
  min-height: 500px;
}
footer {
  width: 100%;

}
</style>
