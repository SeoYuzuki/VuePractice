<template>
  <div class="hello">
    <div>testPropsOrEmit</div>
    <testPropsOrEmit2 :func0="holo" @testemit="peko"></testPropsOrEmit2>
    <i class="ivu-icon ivu-icon-md-arrow-dropup"></i>
    <i class="ivu-icon ivu-icon-md-arrow-dropup apple"></i>
    <p :class="$style.red">This should be red</p>
  </div>
</template>

<script>
import testPropsOrEmit2 from "@/components/test/testPropsOrEmit2.vue";

export default {
  components: { testPropsOrEmit2 },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    holo() {
      console.log("guragura");
    },
    peko(e) {
      console.log("pekopeko", e);
    },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.apple {
  color: rgb(255, 0, 85);
  size: 50ch;
  font-size: 1cm;
}
</style>

<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>