<template>
  <div class="hello">
    <div id="info">可滑鼠點 or 鍵盤1~4</div>
    <div id="info">左鍵上一題 右鍵下一題</div>
    <br />
    <br />
    <div id="qq">{{ question }}</div>
    <div class="opSet">
      <br />
      <div v-on:click="op" id="op1" num="1" ref="ref1" class="op">
        {{ op1 }}
      </div>
      <div v-on:click="op" id="op2" num="2" ref="ref2" class="op">
        {{ op2 }}
      </div>
      <div v-on:click="op" id="op3" num="3" ref="ref3" class="op">
        {{ op3 }}
      </div>
      <div v-on:click="op" id="op4" num="4" ref="ref4" class="op">
        {{ op4 }}
      </div>
    </div>

    <br />
    <br />
    <div id="test"></div>
    <button v-on:click="greet">測試用按鈕</button>
  </div>
</template>

<script>
import { qList } from "@/components/fin/sss.js";
import { globalMethods1 } from "@/components/fin/globalMethods.js";
var ans = "";
var index = "";

export default {
  mixins: [globalMethods1],
  name: "HelloWorld2",
  props: {
    msg: String,
  },

  data() {
    return {
      question: null,
      op1: null,
      op2: null,
      op3: null,
      op4: null,
    };
  },

  created: function () {
    index = Math.floor(Math.random() * qList.length);
    console.log("index:" + index + " length:" + qList.length);

    this.op1 = qList[index][3];
    this.op2 = qList[index][4];
    this.op3 = qList[index][5];
    this.op4 = qList[index][6];
    this.question = qList[index][0] + ". " + qList[index][2];
    ans = qList[index][1];
    console.log("ans:" + ans);
  },
  mounted() {    
    window.addEventListener("keyup", this.keyBoardEvent);
  },
  beforeDestroy() {
     window.removeEventListener("keyup", this.keyBoardEvent);
  },
  methods: {
    greet: function () {
      console.log("yoyoyoy");
      this.greet2();
    },
    createSomething() {
      //return this.createElement("div", {}, [createElement("p", "Hello Vue 2!")]);
    },
    op: function (event) {
      if (event.target.getAttribute("num") == ans) {
        console.log("y");
        index = index + 1;
        ans = this.nextQ(index, qList, ans);
      } else {
        event.target.setAttribute("style", "color:red");
        console.log("n");
      }
    },

    keyBoardEvent: function (event) {
      console.log(event.keyCode);
      if (event.keyCode == "49" || event.keyCode == "97") {
        this.$refs["ref1"].click();
      } else if (event.keyCode == "50" || event.keyCode == "98") {
        this.$refs["ref2"].click();
      } else if (event.keyCode == "51" || event.keyCode == "99") {
        this.$refs["ref3"].click();
      } else if (event.keyCode == "52" || event.keyCode == "100") {
        this.$refs["ref4"].click();
      } else if (event.keyCode == "37") {
        index = index - 1;
        ans = this.nextQ(index, qList, ans);
      } else if (event.keyCode == "39") {
        index = index + 1;
        ans = this.nextQ(index, qList, ans);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.op {
  background-color: rgb(215, 253, 241);
}
.op:hover {
  background-color: rgb(138, 255, 127);
}

.hello {
  background-color: #f5e6c5;
  text-align: justify;
}

#info {
  text-align: center;
}
</style>

