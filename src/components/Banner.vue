<template>
  <div class="hello">
    <!-- https://codepen.io/antcook/pen/OboxbO -->
    <div class="tt">aa</div>
    <ul class="menu">
      <li>
        <a href="#"><cssLight /></a>
      </li>
      <li @mouseover="listOne = true" @mouseleave="listOne = false">
        <a href="#"><div class="bb">一般</div></a>

        <transition name="fade">
          <ul v-if="listOne" @click="listOne = false">
            <li><router-link to="/finTest">金融常識 </router-link></li>
            <li><router-link to="/finEthics">道德 </router-link></li>
            <li><router-link to="/example">example </router-link></li>
          </ul>
        </transition>
      </li>

      <li @mouseover="listTwo = true" @mouseleave="listTwo = false">
        <router-link to="/TestMainPage"><div class="bb">測試</div></router-link>

        <transition name="fade">
          <ul v-if="listTwo" @click="listTwo = false">
            <li><router-link to="/TestMainPage">測試 </router-link></li>
          </ul>
        </transition>
      </li>

      <li @mouseover="listThree = true" @mouseleave="listThree = false">
        <a href="#"><div class="bb">測試UI</div></a>

        <transition name="fade">
          <ul v-if="listThree" @click="listThree = false">
            <li>
              <router-link to="/testImage"> testImage! </router-link>
            </li>
            <li>
              <router-link to="/testCSSLeave"> testCSSLeave </router-link>
            </li>
            <li>
              <router-link to="/testSlide"> testSlide </router-link>
            </li>
            <li>
              <router-link to="/testIV01"> testIV01 </router-link>
            </li>
            <li>
              <router-link to="/testIV02"> testIV02 </router-link>
            </li>
            <li>
              <router-link to="/cssLight"> cssLight </router-link>
            </li>
          </ul>
        </transition>
      </li>

      <li @mouseover="listFour = true" @mouseleave="listFour = false">
        <a href="#"><div class="bb">CBP2</div></a>

        <transition name="fade">
          <ul v-if="listFour" @click="listFour = false">
            <li><a href="/apiList">後端API</a></li>
            <li><a href="/t3get">試嵌入</a></li>
            <li><a href="/t3list">試捏</a></li>
            <li><a href="/t1">t1 表格</a></li>
            <li><a href="/t1newtable">t1newtable</a></li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import cssLight from "@/components/testUI/cssLight.vue";
export default {
  name: "HelloWorld2",
  props: {
    msg: String,
  },
  components: {
    cssLight,
  },

  data() {
    return {
      bgColor: "22",
      listOne: false,
      listTwo: false,
      listThree: false,
      listFour: false,
    };
  },
  methods: {
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
</style>

