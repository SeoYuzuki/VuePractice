<template>
  <div class="hello">
    <br />
    <div id="info">100題 寫完交卷ㄅ</div>

    <br />
    <br />

    <div id="test"></div>

    <button type="button" v-on:click="addFormElement()">發考卷!</button>
    <button v-on:click="submitTest">交卷!</button>
    <button v-on:click="clean">清理?!</button>
    <component
      v-for="field in fields"
      v-bind:is="field.type"
      :key="field.id"
      :ops="field.ops"
      :isShowAns="isShowAns"
    ></component>
    
  </div>
</template>

<script>
//<finTest_op op1="Welcome to Your Vue.js App" />
import { qList } from "./sss.js";
import { globalMethods1 } from "./globalMethods.js";
import finTest_op from "./finTest_op.vue";

export default {
  mixins: [globalMethods1],
  components: {
    finTest_op,
  },
  name: "HelloWorld2",
  props: {
    msg: String,
  },

  data() {
    return {
      fields: [],
      isShowAns: true,
      question: null,

      count: 0,
    };
  },

  created: function () {},

  methods: {
    addFormElement: function () {
      this.clean();

      this.isShowAns = true;
      let i = 0;
      let hash = Math.floor(Math.random() * 10000); // 要是不加這個hash id, clean雖然依舊生效, 但畫面無法如期更新 
      for (; i < 10; i++) {
        let index = Math.floor(Math.random() * qList.length);
        console.log(index);
        this.fields.push({
          type: finTest_op,
          ops: qList[index],
          id: hash+"id" + i,
        });
      }
    },

    submitTest: function () {
      this.isShowAns = false;
    },
    clean: function () {
      console.log("ccc");
      this.fields = [];
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

