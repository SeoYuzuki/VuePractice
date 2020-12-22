<template>
  <div class="hello">
    <div>testPropsOrEmit2</div>
    <Button @click="func0">t1</Button>
    <Button @click="func2">t2</Button>
    <Button @click="func3">t3</Button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    func0: Function,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    func2() {
      this.$emit("testemit", "123456");
    },
    func3() {
      this.$emit("func0");
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
</style>

