<template>
  <div class="hello">
    <br />
    <button v-on:click="show = !show">Toggle</button>
    <transition name="slide">
      <p v-if="show" style="position: absolute">{{ message }}</p>
    </transition>
    <transition name="slide">
      <p v-if="!show" style="position: absolute">{{ message2 }}</p>
    </transition>
  </div>
</template>

<script>
//import Banner from "@/components/Banner.vue";

export default {
  components: {},
  props: {},
  data() {
    return {
      message: "Click for AAAAAAAAAA",
      message2: "Click for BBBBBBBBBB",
      show: true,
    };
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>

