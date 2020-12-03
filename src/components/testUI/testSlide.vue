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
    <br />
    <br />
    <br />
    <br />
    <br />
    <table id="only-body-table" class="sindu-table sindu_origin_table">
      <thead>
        <tr>
          <th class="sindu_handle">Movie Title</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Gross</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="sindu_handle">Howard The Duck<i class="handle"></i></td>
          <td>"Comedy"</td>
          <td>1986</td>
          <td>$16,295,774</td>
        </tr>
        <tr>
          <td class="sindu_handle">Star Wars<i class="handle"></i></td>
          <td>Adventure, Sci-fi</td>
          <td>1977</td>
          <td>$460,935,665</td>
        </tr>

        <tr>
          <td class="sindu_handle">American Graffiti<i class="handle"></i></td>
          <td>Comedy, Drama</td>
          <td>1973</td>
          <td>$115,000,000</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import Banner from "@/components/Banner.vue";
//import tableDragger from "table-dragger";
import tableDragger from "../../../node_modules/table-dragger/dist/table-dragger.min.js";

export default {
  components: {},
  props: {},
  data() {
    return {
      message: "Click for AAAAAAAAAAAAAAAAAA",
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
  mounted() {
    tableDragger(document.querySelector("#only-body-table"), {
      mode: "row",
      onlyBody: true,
    });
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

