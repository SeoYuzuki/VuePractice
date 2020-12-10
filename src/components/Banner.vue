<template>
  <div class="hello">
    <!-- https://codepen.io/antcook/pen/OboxbO -->
    <div class="tt">aa</div>
    <ul class="menu">
      <li @mouseover="listZ = true" @mouseleave="listZ = false">
        <a href="#"><cssLight v-bind:tt="listZ" /></a>
      </li>
      <li @mouseover="listOne = true" @mouseleave="listOne = false">
        <a href="#">
          <div class="h50div">一般</div>
          <!-- <div class="underbar"></div> -->
        </a>

        <transition name="fade">
          <ul v-if="listOne" @click="listOne = false">
            <li>
              <div class="h50div">
                <router-link to="/finTest">金融常識 </router-link>
              </div>
              <div class="underbar"></div>
              <div class="underbar2"></div>
            </li>

            <li>
              <div class="h50div">
                <router-link to="/finEthics">道德 </router-link>
              </div>
              <div class="underbar"></div>
            </li>
            <li>
              <div class="h50div">
                <router-link to="/example">example </router-link>
              </div>
              <div class="underbar"></div>
            </li>
          </ul>
        </transition>
      </li>

      <li @mouseover="listTwo = true" @mouseleave="listTwo = false">
        <router-link to="/TestMainPage"
          ><div class="h50div">測試</div></router-link
        >

        <transition name="fade">
          <ul v-if="listTwo" @click="listTwo = false">
            <li>
              <div class="h50div">
                <router-link to="/TestMainPage">測試 </router-link>
              </div>
              <div class="underbar"></div>
            </li>
          </ul>
        </transition>
      </li>

      <li @mouseover="listThree = true" @mouseleave="listThree = false">
        <a href="#"><div class="h50div">測試UI</div></a>

        <transition name="fade">
          <ul v-if="listThree" @click="listThree = false">
            <li>
              <div class="h50div">
                <router-link to="/testImage"> testImage! </router-link>
              </div>
              <div class="underbar"></div>
            </li>
            <li>
              <div class="h50div">
                <router-link to="/testCSSLeave"> testCSSLeave </router-link>
              </div>
              <div class="underbar"></div>
            </li>
            <li>
              <div class="h50div">
                <router-link to="/testSlide"> testSlide </router-link>
              </div>
              <div class="underbar"></div>
            </li>
            <li>
              <div class="h50div">
                <router-link to="/testIV01"> testIV01 </router-link>
              </div>
              <div class="underbar"></div>
            </li>
            <li>
              <div class="h50div">
                <router-link to="/testIV02"> testIV02 </router-link>
              </div>
              <div class="underbar"></div>
            </li>
            <li>
              <div class="h50div">
                <router-link to="/cssLight2"> cssLight2 </router-link>
              </div>
              <div class="underbar"></div>
            </li>
          </ul>
        </transition>
      </li>

      <li @mouseover="listFour = true" @mouseleave="listFour = false">
        <a href="#"><div class="h50div">CBP2</div></a>

        <transition name="fade">
          <ul v-if="listFour" @click="listFour = false">
            <li>
              <div class="h50div">
                <router-link to="/apiList"> 後端API </router-link>
              </div>
              <div class="underbar2"></div>
            </li>
            <li>
              <div class="h50div">
                <router-link to="/t3get"> 試嵌入 </router-link>
              </div>
              <div class="underbar"></div>
            </li>
            <li>
              <div class="h50div">
                <router-link to="/t3list"> 試捏 </router-link>
              </div>
              <div class="underbar"></div>
            </li>
            <li>
              <div class="h50div">
                <router-link to="/t1"> t1 表格 </router-link>
              </div>
              <div class="underbar"></div>
            </li>
            <li>
              <div class="h50div">
                <router-link to="/t1newtable"> t1newtable </router-link>
              </div>
              <div class="underbar"></div>
            </li>
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
      listZ: false,
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

