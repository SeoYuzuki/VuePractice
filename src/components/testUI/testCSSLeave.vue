<template>
  <div class="hello">
    <div class="dropdown">
      <button @click="myFunction" class="dropbtn">Dropdown</button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <br />
      <br />
      <br />
      <button
        @mouseover="myFunction2"
        @mouseleave="myFunction2"
        class="dropbtn"
      >
        over
      </button>
      <br />
      <span style="display: inline">
        <button @click="show = !show">Click Me!</button>
        <transition mode="out-in">
          <div class="block" v-if="show">Block 1</div>
          <p class="block" v-else>Block 2</p>
        </transition>
        <transition mode="out-in">
          <div class="block" v-if="show">Block 1</div>
          <p class="block" v-else>Block 2</p>
        </transition>
      </span>
      <br />
      <span style="display: inline">
        <!-- <button
          style="display: inline-block"
          @mouseover="over2(true)"
          @mouseleave="over2(false)"
          class="dropbtn"
        >
          over2
        </button> -->
        <div
          style="display: inline-block"
          class="block"
          @mouseover="over2(true)"
          @mouseout="over2(false)"
        >
          Block 0
        </div>
        <transition mode="out-in">
          <div class="block" v-if="show2">Block 1</div>
        </transition>
        <transition mode="out-in">
          <div class="block" v-if="show2">Block 1</div>
        </transition>
      </span>
    </div>
  </div>
</template>

<script>
//import Banner from "@/components/Banner.vue";

export default {
  components: {},
  props: {},
  data() {
    return {
      kk: 0,
      show: true,
      show2: false,
      hello: "H",
      hoverTarget: "none",
    };
  },
  computed: {
    buttonMessage: function () {
      switch (this.docState) {
        case "saved":
          return "Edit!";
        case "edited":
          return "Save!";
        case "editing":
          return "Cancel!";
        default:
          return "";
      }
    },
  },
  methods: {
    myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
      this.show = !this.show;
    },
    myFunction2(e) {
      console.log(e);
    },
    changeShow() {
      this.show = !this.show;
      //this.hello = this.hello + "H";
    },
    over2(v) {
      this.show2 = v;
    },
    parentHover: function () {
      this.hoverTarget = "parent";
    },
    childHover: function (event) {
      event.stopPropagation();
      this.hoverTarget = "child";
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
<style scoped src='@/assets/commonStyle.css'></style>
<style scoped>
.hello {
  background-color: rgb(245, 230, 197);
  text-align: justify;
}

.dropbtn {
  background-color: #82b83b;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  text-align: left;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: #2980b9;
}

.dropdown {
  width: auto;
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: rgb(216, 108, 108);
}

.show {
  display: block;
}

.block {
  background: #999;
  color: #fff;
  display: table-cell;
  font-size: 16px;
  padding: 16px;
  width: 100px;

  text-align: center;
  vertical-align: middle;
}
</style>

