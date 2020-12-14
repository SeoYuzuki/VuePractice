<template>
  <div
    id="nav-container2"
    @mouseover="isPushed = true"
    @mouseleave="isPushed = false"
    @click="trigger"
    :class="{ standing: isPushed }"
  >
    <div class="toggle-icon2">
      <span class="bar">
        <div @click="clickdiv" class="lildiv">
          <router-link to="/"> homePage </router-link>
        </div>
      </span>
      <span class="bar"><div @click="clickdiv" class="lildiv">bbb</div> </span>

      <span class="bar">
        <div @click="clickdiv" class="lildiv"></div>
      </span>
    </div>
    <div class="testdiv"></div>
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
      isPushed: false,
    };
  },
  computed: {},
  methods: {
    trigger() {
      this.isPushed = !this.isPushed;
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
#nav-container2 {
  height: 105%;
  width: 100%;
  background-color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;

  /* top: 50%; */
  /*left: 50%;
  margin: -3em;*/
}

/*toggle-icon*/
.toggle-icon2 {
  display: block;
  position: relative;
  width: 100%;
  margin: -2.2em auto 0 0.2em;
  transition: margin 600ms;
  cursor: pointer;
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

.toggle-icon2 .bar div {
  display: none;
  opacity: 0;

  /* transition-property: opacity, transform, margin, border-right-color,
    box-shadow;
  transition-duration: 1000ms, 1000ms, 1000ms, 1000ms, 1000ms; */
}

/**躺平 */
.toggle-icon2 .bar:nth-of-type(1) {
  transform: translateY(1.8em);
}
.toggle-icon2 .bar:nth-of-type(2) {
  transform: translateY(1.8em);
}
.toggle-icon2 .bar:nth-of-type(3) {
  transform: translateY(1.8em);
}

/* pushed*/
/* .standing .toggle-icon2 {
 
} */

/**垂直槓 */
.standing .bar:nth-of-type(1) {
  border-right: 2.8em solid #c7c7c7;
  border-left: 0.5em solid #c7c7c7;

  margin-left: -1.5em;
  margin-top: 8em;
  transform: rotate(-90deg) translateY(0em);
}

.standing .bar:nth-of-type(2) {
  border-right: 2.8em solid #c7c7c7;
  border-left: 0.5em solid #c7c7c7;

  margin-left: -1.5em;
  margin-top: 4em;

  transform: rotate(-90deg) translateY(0em);
}

.standing .bar:nth-of-type(3) {
  border-right: 2.8em solid #c7c7c7;
  border-left: 0.5em solid #c7c7c7;

  margin-left: -1.5em;
  margin-top: 4em;

  transform: rotate(-90deg) translateY(0em);
}
/**包裹元件 */

.standing .bar:nth-of-type(n) div {
  display: inline-block;
  position: relative;
  height: 3.8em;
  width: 18em;
  opacity: 100;
  background: rgb(71, 71, 71);

  /* text-align: left; */
  color: rgb(255, 255, 255);
  text-align: center;

  transform: rotate(90deg) translateY(7.6em) translateX(7.9em);

  animation-delay: 3s;
  animation: change 1s 1;

  text-shadow: 0px -2px 0px #000000, 0 0 5px rgba(255, 255, 255, 0.8),
    0 -4px 15px rgba(255, 255, 255, 0.5);
}

@keyframes change {
  0% {
    background: rgba(237, 255, 159, 0);
    height: 1.8em;
    width: 5em;
  }

  100% {
    background: rgb(71, 71, 71);
    height: 3.8em;
    width: 18em;
  }
}

.standing .bar:nth-of-type(1) div:hover {
  /* box-shadow: 0.4em 0.1em 0.4em 0.1em rgba(208, 211, 23, 0.75); */
  /* animation: changeBG 2s infinite; */
  /* animation-fill-mode: forwards; */
}
.standing .bar:nth-of-type(2) div:hover {
  /* box-shadow: 0.4em 0.1em 0.4em 0.1em rgba(231, 31, 35, 0.75); */
  /* animation: changeBG2 2s infinite; */
}
.standing .bar:nth-of-type(3) div:hover {
  /* box-shadow: 0.4em 0.1em 0.4em 0.1em rgba(54, 197, 41, 0.75); */
  /* animation: changeBG3 2s infinite; */
}

@keyframes changeBG {
  0% {
    box-shadow: 0.4em 0.1em 0.3em 0.1em rgba(208, 211, 23, 0.75);
  }

  50% {
    box-shadow: 0.4em 0.1em 0.6em 0.2em rgba(251, 255, 14, 0.9);
  }

  100% {
    box-shadow: 0.4em 0.1em 0.3em 0.1em rgba(208, 211, 23, 0.75);
  }
}

@keyframes changeBG2 {
  0% {
    box-shadow: 0.4em 0.2em 0.3em 0.1em rgba(231, 31, 35, 0.75);
  }

  50% {
    box-shadow: 0.4em 0.1em 0.6em 0.2em rgba(255, 27, 31, 0.9);
  }

  100% {
    box-shadow: 0.4em 0.2em 0.3em 0.1em rgba(231, 31, 35, 0.75);
  }
}

@keyframes changeBG3 {
  0% {
    box-shadow: 0.4em 0.2em 0.3em 0.1em rgba(54, 197, 41, 0.75);
  }

  50% {
    box-shadow: 0.4em 0.1em 0.6em 0.2em rgba(48, 241, 30, 0.95);
  }

  100% {
    box-shadow: 0.4em 0.2em 0.3em 0.1em rgba(54, 197, 41, 0.75);
  }
}

/* .standing .toggle-icon2:hover .bar:nth-of-type(1) {
  border-right-color: rgb(230, 243, 55);
  border-left-color: rgb(230, 243, 55);
}

.standing .toggle-icon2:hover .bar:nth-of-type(2) {
  border-right-color: #ff3438;
}
.standing .toggle-icon2:hover .bar:nth-of-type(3) {
  border-right-color: #23b60c;
} */

.standing .toggle-icon2 .bar:nth-of-type(1):hover {
  border-right-color: rgb(230, 243, 55);
  border-left-color: rgb(230, 243, 55);
}

.standing .toggle-icon2 .bar:nth-of-type(2):hover {
  border-right-color: #ff3438;
  border-left-color: #ff3438;
}

.standing .toggle-icon2 .bar:nth-of-type(3):hover {
  border-right-color: #23b60c;
  border-left-color: #23b60c;
}

.standing .testdiv {
  /* display: float; */
  position: absolute;
  z-index: -50;
  height: 13.7em;
  width: 19em;
  background-color: rgb(0, 0, 0);
  transform: rotate(0deg) translateY(-12.1em) translateX(0em);

  animation: change2 0.5s 1;
}

@keyframes change2 {
  0% {
    background-color: rgba(0, 0, 0, 0);
    height: 13.7em;
    width: 5em;
  }

  100% {
    height: 13.7em;
    /* width: 19.9em; */
    width: 19em;
  }
}
</style>

