<template>
  <div>
    emit2
    {{ msg }}
    <button v-on:click="msgAdd">tttt</button>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    msg: null,
    jjson: null,
  },
  data() {
    return { total: 0 };
  },
  computed: {},
  methods: {
    msgAdd: function () {
      console.log(this.jjson[0]);
      this.jjson[0].name='appppple';
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

<style  scoped></style>
