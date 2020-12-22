<template>
  <div class="hello">
    <br />
    <css3ImageComp :items="showlist" :cheight="'480px'"> </css3ImageComp>
  </div>
</template>

<script>
import css3ImageComp from "@/components/testUI/css3ImageComp.vue";

export default {
  components: { css3ImageComp },
  props: {},
  data() {
    return {
      showlist: [
        { src: "img/1.jpg", text: "AA" },
        { src: "img/2.jpg", text: "BB" },
        { src: "img/3.jpg", text: "CC" },
        { src: "img/4.jpg", text: "DD" },
        { src: "img/5.jpg", text: "EE" },
        { src: "img/6.jpg", text: "FF" },
        { src: "img/7.jpg", text: "GG" },
        { src: "img/8.jpg", text: "HH" },
        { src: "img/9.png", text: "HH" },
        { src: "img/8.jpg", text: "HH" },
      ],
    };
  },
  computed: {},
  methods: {
    ff() {
      console.log(this.showlist);
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

