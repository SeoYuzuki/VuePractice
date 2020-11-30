<template>
  <div class="hello">
    <!-- https://codepen.io/antcook/pen/OboxbO -->
    <div class="tt">aa</div>
    <ul class="menu">
      <li><a>左</a></li>
      <li @mouseover="listOne = true" @mouseleave="listOne = false">
        <a href="#">一般</a>

        <transition name="fade">
          <ul v-if="listOne" @click="listOne = false">
            <li><router-link to="/finTest">金融常識 </router-link></li>
            <li><router-link to="/finEthics">道德 </router-link></li>
            <li><router-link to="/example">example </router-link></li>
          </ul>
        </transition>
      </li>

      <li @mouseover="listTwo = true" @mouseleave="listTwo = false">
        <router-link to="/TestMainPage">測試 </router-link>

        <transition name="fade">
          <ul v-if="listTwo" @click="listTwo = false">
            <li><router-link to="/TestMainPage">測試 </router-link></li>
          </ul>
        </transition>
      </li>

      <li @mouseover="listThree = true" @mouseleave="listThree = false">
        <a href="#">測試UI</a>

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
          </ul>
        </transition>
      </li>

      <li @mouseover="listFour = true" @mouseleave="listFour = false">
        <a href="#">Menu Item4</a>

        <transition name="fade">
          <ul v-if="listFour" @click="listFour = false">
            <li><a href="#">Sub Menu Item</a></li>
            <li><a href="#">Sub Menu Item</a></li>
            <li><a href="#">Sub Menu Item</a></li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld2",
  props: {
    msg: String,
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

