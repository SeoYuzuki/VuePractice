<template>
  <div id="nav-container2">
    <div class="toggle-icon2">
      <span class="bar">
        <div @click="test" class="lildiv">aaa</div>
      </span>
      <span class="bar"><div @click="test" class="lildiv">bbb</div></span>

      <span class="bar"
        ><div @click="test" class="lildiv">
          <Button type="info">Info</Button>
        </div></span
      >
    </div>
  </div>
</template>

<script>
//import Banner from "@/components/Banner.vue";
import $ from "jquery";

export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    test() {
      console.log(111111);
      event.stopPropagation();
    },
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    $(".toggle-icon2").click(function () {
      $("#nav-container2").toggleClass("pushed2");
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
#nav-container2 {
  height: 100%;
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
/* .pushed2 .toggle-icon2 {
 
} */

/**垂直槓 */
.pushed2 .bar:nth-of-type(1) {
  border-right: 2.8em solid rgb(10, 4, 4);
  border-left: 0.5em solid #050202;

  margin-left: -1.5em;
  margin-top: 8em;
  transform: rotate(-90deg) translateY(0em);
}

.pushed2 .bar:nth-of-type(2) {
  border-right: 2.8em solid rgb(10, 4, 4);
  border-left: 0.5em solid #050202;

  margin-left: -1.5em;
  margin-top: 4em;

  transform: rotate(-90deg) translateY(0em);
}

.pushed2 .bar:nth-of-type(3) {
  border-right: 2.8em solid rgb(10, 4, 4);
  border-left: 0.5em solid #050202;

  margin-left: -1.5em;
  margin-top: 4em;

  transform: rotate(-90deg) translateY(0em);
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
.pushed2 .toggle-icon2:hover .bar:nth-of-type(1) {
  border-right-color: rgba(186, 196, 50, 100%);
}

.pushed2 .toggle-icon2:hover .bar:nth-of-type(2) {
  border-right-color: #ac2d2f;
}
.pushed2 .toggle-icon2:hover .bar:nth-of-type(3) {
  border-right-color: #468a3c;
}

.pushed2 .toggle-icon2 .bar:nth-of-type(1):hover {
  box-shadow: 0.4em 0 0.6em 0.1em rgba(119, 121, 21, 0.75);
}

.pushed2 .toggle-icon2 .bar:nth-of-type(2):hover {
  box-shadow: 0.4em 0 0.6em 0.1em rgba(205, 40, 44, 0.75);
}

.pushed2 .toggle-icon2 .bar:nth-of-type(3):hover {
  box-shadow: 0.4em 0 0.6em 0.1em rgba(65, 116, 60, 0.65);
}

.lildiv {
  display: inline-block;
  position: relative;
  height: 3.8em;
  width: 18em;
  background-color: rgb(241, 241, 241);
  text-align: left;
  color: rgb(27, 20, 20);
}

.lildiv2 {
  display: inline-block;
  position: absolute;
  top: -30px;
  height: 4.8em;
  width: 18em;
  background-color: rgb(0, 0, 0);
  text-align: left;
  color: rgb(27, 20, 20);

  box-sizing: border-box;
}

.ccc {
  background-color: rgb(0, 0, 0);
  display: block;
  /* height: 0em; */
}

.pushed2 .test {
  display: block;
  height: 50px;
  background-color: rgb(173, 0, 0);
}
</style>

