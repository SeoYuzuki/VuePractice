<template>
  <div class="hello">
    <css3ImageComp> kaka </css3ImageComp>

    yo:<slot />
  </div>
</template>

<script>
import css3ImageComp from "@/components/testUI/css3ImageComp.vue";
//import Banner from "@/components/Banner.vue";

export default {
  components: { css3ImageComp },
  props: {
    showlist: null,
  },
  data() {
    return {
      showlist2: this.showlist,
    };
  },
  computed: {},
  methods: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.showlist2);
  },
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

