<template>
  <div class="hello">
    AAAAAAAAA
    <div
      id="nav-container2"
      @click="trigger"
      :class="{ navc2: true, lying: !isPushed2, standing: isPushed2 }"
    >
      <span class="bar"><div class="lildiv1"></div> </span>
      <span class="bar"><div class="lildiv1">BBB</div> </span>
      <span class="bar"> <div class="lildiv1">CCCCCCCCCCCCCCCCCCCC</div></span>
      <!-- <div class="lildiv2">ccc</div> -->
      <!-- <div class="toggle-icon2" :class="{ pushed2: isPushed2 }"> -->
      
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
//import Banner from "@/components/Banner.vue";
// import $ from "jquery";

export default {
  components: {},
  props: {
    tt: null,
  },
  data() {
    return {
      isPushed2: false,
    };
  },
  computed: {},
  methods: {
    trigger() {
      this.isPushed2 = !this.isPushed2;
    },
    clickdiv() {
      console.log("clickdiv");
      event.stopPropagation();
    },
  },
  watch: {
    // tt: function (e) {
    //   console.log(e)
    // },
  },
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
.box {
  height: 100px;
  width: 100px;
  border: 1px solid black;

  background-color: #f00;
  border-radius: 40%;
  margin-left: 0;
  background-color: #eef;
  transform: rotate(30000000000deg);

  transition: all 5s 0s;
}

.box:hover {
  border-radius: 0%;
  margin-left: 50px;
  background-color: #fee;
  transform: rotate(0deg);

  transition: all 1s 0s;
}

/** */

.hello {
  background: rgb(255, 185, 185);
  display: inline-block;
  width: 800px;
}

.lying {
  display: inline-block;
  position: absolute;

  transition-property: transform, margin, border-right-color, box-shadow;
  background-color: rgb(54, 54, 54);
}

.standing {
  display: inline-block;
  position: absolute;
  /* height: 190px; */
  transform: scale(1, 1);
  background-color: rgb(94, 94, 94);
}

.navc2 .bar {
  display: block;
  width: 3.8em;
  height: 0.4em;
  margin: 0.9em;
  border-right: 2.8em solid rgb(207, 207, 207);
  border-left: 0.5em solid #cecece;

  /* box-sizing: border-box; */

  transition-property: transform, margin, border-right-color, box-shadow;

  transition-duration: 600ms;
}

.toggle-icon2 .bar {
  display: block;
  width: 3.8em;
  height: 0.4em;
  margin: 0.9em;
  border-right: 2.8em solid rgb(207, 207, 207);
  border-left: 0.5em solid #cecece;

  box-sizing: border-box;

  transition-property: transform, margin, border-right-color, box-shadow;

  transition-duration: 600ms;
}

/**躺平 */
/* .toggle-icon2 .bar:nth-of-type(1) {
  transform: translateY(1.8em);
}
.toggle-icon2 .bar:nth-of-type(2) {
  transform: translateY(1.8em);
}
.toggle-icon2 .bar:nth-of-type(3) {
  transform: translateY(1.8em);
} */

/**垂直槓 */
.standing .bar:nth-of-type(1) {
  border-right: 2.8em solid rgb(10, 4, 4);
  border-left: 0.5em solid #050202;

  margin-left: -20%;
  margin-top: 2em;

  transform: rotate(-90deg) translateY(0em);
  z-index: 10;
}

.standing .bar:nth-of-type(2) {
  border-right: 2.8em solid rgb(10, 4, 4);
  border-left: 0.5em solid #050202;

  margin-left: -20%;
  margin-top: 4em;
  transform: rotate(-90deg) translateY(0em);
  z-index: 10;
}
.standing .bar:nth-of-type(3) {
  border-right: 2.8em solid rgb(10, 4, 4);
  border-left: 0.5em solid #050202;

  margin-left: -20%;
  margin-top: 4em;
  transform: rotate(-90deg) translateY(0em);
  z-index: 10;
}

/**包裹元件 */
.pushed2 .bar:nth-of-type(1) div {
  display: inline-block;
  opacity: 100;
  transform: rotate(90deg) translateY(7.7em) translateX(7.7em);

  /* animation-delay: 3s; */
  animation: change 3s 1;
}
.pushed2 .bar:nth-of-type(2) div {
  display: inline-block;
  opacity: 100;
  transform: rotate(90deg) translateY(7.7em) translateX(7.7em);

  /* animation-delay: 3s; */
  animation: change 3s 1;
}
.pushed2 .bar:nth-of-type(3) div {
  display: inline-block;
  opacity: 100;
  transform: rotate(90deg) translateY(7.7em) translateX(7.7em);

  /* animation-delay: 3s; */
  animation: change 3s 1;
}
@keyframes change {
  0% {
    background: rgba(237, 255, 159, 0);
    height: 3.8em;
    width: 10em;
  }
  /* 30% {
    background: rgba(170, 35, 35, 0.5);
    height: 3.8em;
    width: 8em;
  } */
  100% {
    background: rgba(248, 255, 219, 1);
    height: 3.8em;
    width: 18em;
  }
  /* from {
    background: rgba(237, 255, 159, 0);
  }
  to {
    background: rgba(237, 255, 159, 0.8);
  } */
}
.standing:hover .bar:nth-of-type(1) {
  border-right-color: rgba(186, 196, 50, 100%);
}

.standing:hover .bar:nth-of-type(2) {
  border-right-color: #ac2d2f;
}
.standing:hover .bar:nth-of-type(3) {
  border-right-color: #468a3c;
}

.standing .bar:nth-of-type(1):hover {
  box-shadow: 0.4em 0 0.6em 0.1em rgba(194, 197, 28, 0.75);
}

.standing .bar:nth-of-type(2):hover {
  box-shadow: 0.4em 0 0.6em 0.1em rgba(224, 34, 37, 0.75);
}

.standing .bar:nth-of-type(3):hover {
  box-shadow: 0.4em 0 0.6em 0.1em rgba(49, 201, 35, 0.65);
}

.standing .bar .lildiv1 {
  display: inline-block;
  height: 50px;
  width: 150px;
  background-color: rgba(51, 51, 51, 0.75);
  color: rgba(255, 255, 255, 0.75);
  transform: rotate(90deg) translateY(110%) translateX(40%);
}

.lying .bar .lildiv1 {
  display: none;
  height: 50px;
  width: 150px;
  background-color: rgba(51, 51, 51, 0.75);
  color: rgba(255, 255, 255, 0.75);
  transform: rotate(90deg) translateY(110%) translateX(40%);
}
</style>

