<template>
  <ul class="ul0">
    <li v-for="(item, index) in showlist" :key="index">
      <div class="h50div">
        <router-link :to="item.link">{{ item.name }} </router-link>
      </div>
      <div
        v-bind:style="{ background: barColor }"
        :class="{ underbarLeft: isLeft }"
      ></div>
      <div
        v-bind:style="{ background: barColor }"
        :class="{ underbarRight: isRight }"
      ></div>
    </li>
  </ul>
</template>

<script>
//import Banner from "@/components/Banner.vue";

export default {
  components: {},
  props: {
    showlist: null,
    barColor: { type: String, default: " #67c864" },
    both: null, //兩邊顯示提示棒
    left: null, //左邊顯示提示棒
    right: null, //右邊顯示提示棒
  },
  data() {
    return {
      isLeft: false,
      isRight: false,
    };
  },
  computed: {},
  methods: {},
  watch: {},
  beforeCreate() {},
  created() {
    // console.log(typeof this.both);
    if (typeof this.both == "string") {
      this.isRight = true;
      this.isLeft = true;
    } else if (typeof this.right == "string") {
      this.isRight = true;
    } else if (typeof this.left == "string") {
      this.isLeft = true;
    } else {
      // default
      this.isLeft = true;
    }
  },
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
.ul0 li {
  display: block;
  float: left;
  position: relative;
  background: rgb(0, 0, 0);
  color: #fff;
  min-width: 180px;
  z-index: 10;
}

.ul0 {
  position: absolute;
  left: 0;
  top: 55px;
  margin: 0;
  padding: 0;
}

.ul0 li {
  background: #333;
  transition: background 0.2s;
}

.ul0 li:hover {
  background: rgb(71, 71, 71);
}

.ul0 a {
  height: 55px;
  display: block;
  padding: 2px;
  color: #fff;
  text-decoration: none;
  line-height: 50px;
}

/**提示棒*/

.ul0 .underbarLeft {
  width: 0;
  height: 5px;
  top: 20px;
  position: absolute;
  transition: 0.5s ease;
}

.ul0 li:hover .underbarLeft {
  left: 0;
  width: 40px;
}

.ul0 .underbarRight {
  width: 0;
  height: 5px;
  right: 0px;
  top: 20px;
  position: absolute;
  transition: 0.5s ease;
}

.ul0 li:hover .underbarRight {
  right: 0;
  width: 40px;
}
</style>

