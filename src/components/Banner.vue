<template>
  <div class="hello">
    <div id="lilist" v-on:click="op">
      <div id="BannerText">Banner</div>
      <li>
        <div class="div1" ref="ref1">
          <router-link to="/example">example </router-link>
        </div>
      </li>
      <li>
        <div class="div1" ref="ref2">
          <router-link to="/finTest">金融常識 </router-link>
        </div>
      </li>
      <li>
        <div class="div1" ref="ref3">
          <router-link to="/finEthics">道德 </router-link>
        </div>
      </li>
      <li>
        <div class="div1" ref="ref4">
          <router-link to="/TestMainPage">測試 </router-link>
        </div>
      </li>
      <button v-on:click="greet">測試用按鈕2</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { globalMethods1 } from "./globalMethods.js";

export default {
  mixins: [globalMethods1],
  name: "HelloWorld2",
  props: {
    msg: String,
  },

  data() {
    return {
      bgColor: "22",
    };
  },
  methods: {
    greet: function () {
      console.log("babababa");
      this.greet2();

      this.bgColor = "#f5e6c5";
      console.log(this.bgColor);
    },
    op: function (event) {
      console.log(event.target);
      if (event.target.getAttribute("href") == "#/example") {
        this.$refs["ref1"].setAttribute("style", "background-color:#f5e6c5");
        this.$refs["ref2"].setAttribute("style", "background-color:null");
        this.$refs["ref3"].setAttribute("style", "background-color:null");
        this.$refs["ref4"].setAttribute("style", "background-color:null");
      } else if (event.target.getAttribute("href") == "#/a") {
        this.$refs["ref1"].setAttribute("style", "background-color:null");
        this.$refs["ref2"].setAttribute("style", "background-color:#f5e6c5");
        this.$refs["ref3"].setAttribute("style", "background-color:null");
        this.$refs["ref4"].setAttribute("style", "background-color:null");
      } else if (event.target.getAttribute("href") == "#/b") {
        this.$refs["ref1"].setAttribute("style", "background-color:null");
        this.$refs["ref2"].setAttribute("style", "background-color:null");
        this.$refs["ref3"].setAttribute("style", "background-color:#f5e6c5");
        this.$refs["ref4"].setAttribute("style", "background-color:null");
      } else if (event.target.getAttribute("href") == "#/test") {
        this.$refs["ref1"].setAttribute("style", "background-color:null");
        this.$refs["ref2"].setAttribute("style", "background-color:null");
        this.$refs["ref3"].setAttribute("style", "background-color:null");
        this.$refs["ref4"].setAttribute("style", "background-color:#f5e6c5");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li,
#BannerText {
  display: inline-block;
  margin: 0 10px;
}

#lilist {
  background-color: rgb(200, 191, 226);
  border-top-style: solid;
  border-color: rgb(10, 10, 61);
  color: rgb(0, 0, 0);
  margin: 0px;
}

.div1 {
  width: 100px;
  background-color: rgb(200, 191, 226);
  border-bottom: none;
  border-color: rgb(10, 10, 61);
  margin: 0;
}

.red_color {
  background-color: red;
}
.pur_color {
  background-color: rgb(200, 191, 226);
}
</style>

