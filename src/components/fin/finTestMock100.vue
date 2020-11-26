<template>
  <div>
    <br />
    <div class="info">
      <div>我想考</div>
      <input id="num2" v-model="testNumber" />
      <div>題 寫完交卷ㄅ</div>
    </div>

    <br />
    <br />

    <div id="test">
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
  </div>
</template>

<script>
//<finTest_op op1="Welcome to Your Vue.js App" />
import { qList } from "@/components/fin/sss.js";
import { globalMethods1 } from "@/components/fin/globalMethods.js";
import finTest_op from "@/components/fin/finTest_op.vue";

export default {
  mixins: [globalMethods1],
  components: {
    finTest_op,
  },
  props: {
    msg: String,
  },

  data() {
    return {
      fields: [],
      isShowAns: true,
      question: null,

      idcount: 0,
      testNumber: 10,
    };
  },

  created: function () {},
  watch: {},

  methods: {
    addFormElement: function () {
      this.clean();

      this.isShowAns = true;
      let i = 0;

      for (; i < this.testNumber; i++) {
        let index = Math.floor(Math.random() * qList.length);
        console.log(index);
        this.fields.push({
          type: finTest_op,
          ops: qList[index],
          id: this.idcount + "id" + i,
        });
      }
      this.idcount = this.idcount + 1; // 要是不加這個hash id, clean雖然依舊生效, 但畫面無法如期更新
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
.op {
  background-color: rgb(215, 253, 241);
}
.op:hover {
  background-color: rgb(138, 255, 127);
}

#test {
  display: inline-block;
  vertical-align: middle;
}

.info {
  display: inline-block;
}

.info div {
  display: inline-block;
}

.info input {
  display: inline-block;
  width: 30px;
}
</style>

