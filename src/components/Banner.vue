<template>
  <div class="hello">
    <!-- https://codepen.io/antcook/pen/OboxbO -->
    <div class="tt">aa</div>
    <ul class="menu">
      <li @mouseover="listZ = true" @mouseleave="listZ = false">
        <a href="#"><cssLight v-bind:tt="listZ" /></a>
      </li>
      <li
        @mouseover="listOne = true"
        @mouseleave="listOne = false"
        @click="listOne = !listOne"
      >
        <a href="#">
          <div class="h50div">一般</div>
        </a>
        <BannerField
          :showlist="listA"
          v-if="listOne"
          barColor="#6464c8"
          both
        ></BannerField>
      </li>
      <li
        @mouseover="listTwo = true"
        @mouseleave="listTwo = false"
        @click="listTwo = !listTwo"
      >
        <a href="#">
          <div class="h50div">測試</div>
        </a>
        <BannerField
          :showlist="listB"
          v-if="listTwo"
          barColor="#00CED1"
          both
        ></BannerField>
      </li>
      <li
        @mouseover="listThree = true"
        @mouseleave="listThree = false"
        @click="listThree = !listThree"
      >
        <a href="#">
          <div class="h50div">測試UI</div>
        </a>
        <BannerField
          :showlist="listC"
          v-if="listThree"
          barColor="#FFD700"
          left
        ></BannerField>
      </li>

      <li
        @mouseover="listFour = true"
        @mouseleave="listFour = false"
        @click="listFour = !listFour"
      >
        <a href="#">
          <div class="h50div">CBP2</div>
        </a>
        <BannerField :showlist="listD" v-if="listFour" right></BannerField>
      </li>
    </ul>
  </div>
</template>

<script>
import cssLight from "@/components/testUI/cssLight.vue";
import BannerField from "@/components/BannerField.vue";

export default {
  name: "HelloWorld2",
  props: {
    msg: String,
  },
  components: {
    cssLight,
    BannerField,
  },

  data() {
    return {
      bgColor: "22",
      listZ: false,
      listOne: false,
      listTwo: false,
      listThree: false,
      listFour: false,
      listA: [
        { name: "金融常識", link: "/finTest" },
        { name: "道德", link: "/finEthics" },
        { name: "example", link: "/example" },
      ],
      listB: [{ name: "測試", link: "/TestMainPage" }],
      listC: [
        { name: "testImage", link: "/testImage" },
        { name: "testCSSLeave", link: "/testCSSLeave" },
        { name: "testSlide", link: "/testSlide" },
        { name: "testIV01", link: "/testIV01" },
        { name: "testIV02", link: "/testIV02" },
        { name: "cssLight2", link: "/cssLight2" },
      ],
      listD: [
        { name: "後端API", link: "/apiList" },
        { name: "試嵌入", link: "/t3get" },
        { name: "試捏", link: "/t3list" },
        { name: "表格", link: "/t1" },
      ],
    };
  },
  watch: {},
  methods: {
    test() {
      console.log("test");
    },
    greet: function () {
      console.log("babababa");
      this.greet2();

      this.bgColor = "#f5e6c5";
      console.log(this.bgColor);
    },
  },
};
</script>


 <style scoped src='@/assets/menuStyle.css'></style>
<style scoped>
.hello {
  font-size: 0;
  text-align: center;
}

.div1 {
  width: 100px;
  background-color: rgb(200, 191, 226);
  border-bottom: none;
  border-color: rgb(10, 10, 61);
  margin: 0;
}

.tt {
  background-color: rgb(236, 183, 183);
}

/** */
li {
  width: 50px;
  float: left;
  /* -webkit-transition: 0.5s ease; */
  cursor: pointer;
}
li:hover {
  text-shadow: 0px -2px 0px #000000, 0 0 5px rgba(255, 255, 255, 0.8),
    0 -4px 15px rgba(255, 255, 255, 0.5);
}
/* li:hover .underbar {
  left: 0;
  width: 40px;
  background: #6464c8;
} */

li:nth-of-type(1):hover ~ .underbar {
  left: 0;
  width: 40px;
  background: #6464c8;
}
li:nth-of-type(2):hover ~ .underbar {
  left: 50px;
  width: 40px;
  background: #c86464;
}
li:nth-of-type(3):hover ~ .underbar {
  left: 100px;
  width: 40px;
  height: 1px;
  background: rgba(150, 250, 250, 0.5);
  box-shadow: 0 0 10px #46fafa;
}
li:nth-of-type(4):hover ~ .underbar {
  left: 150px;
  width: 50px;
  height: 1px;
  background: rgba(150, 250, 250, 0.5);
  box-shadow: 0 0 10px #46fafa;
}
</style>

