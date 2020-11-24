<template>
  <div class="hello">
    <div class="opSet">
      <form>
        <div>{{ question }}</div>

        <label :for="this.$vnode.key + '_1'" class="op_label" ref="ref1">
          <input
            type="radio"
            :id="this.$vnode.key + '_1'"
            name="op"
            value="1"
            v-model="picked"
          />{{ op1 }}
        </label>

        <label :for="this.$vnode.key + '_2'" class="op_label" ref="ref2">
          <input
            type="radio"
            :id="this.$vnode.key + '_2'"
            name="op"
            value="2"
            v-model="picked"
          />{{ op2 }}
        </label>

        <label :for="this.$vnode.key + '_3'" class="op_label" ref="ref3">
          <input
            type="radio"
            :id="this.$vnode.key + '_3'"
            name="op"
            value="3"
            v-model="picked"
          />{{ op3 }}
        </label>

        <label :for="this.$vnode.key + '_4'" class="op_label" ref="ref4">
          <input
            type="radio"
            :id="this.$vnode.key + '_4'"
            name="op"
            value="4"
            v-model="picked"
          />{{ op4 }}
        </label>
      </form>

      <br />
    </div>
  </div>
</template>

<script>
import { globalMethods1 } from "./globalMethods.js";
// {{this.$vnode.key}} 取得該元件被設定的key

export default {
  mixins: [globalMethods1],
  name: "HelloWorld2",
  props: {
    ops: null,
    isShowAns: null,
  },

  data() {
    return {
      question: null,
      op1: null,
      op2: null,
      op3: null,
      op4: null,
      someHtml: null,
      picked: null, // 被選的元件
    };
  },

  created: function () {
    this.op1 = this.ops[3];
    this.op2 = this.ops[4];
    this.op3 = this.ops[5];
    this.op4 = this.ops[6];
    this.question = this.ops[0] + ". " + this.ops[2];
  },
  watch: {
    isShowAns: function (val) {
      // 當此數值改變時觸發!
      console.log("val:" + val);
      this.showAns();
    },
  },
  methods: {
    showAns: function () {
      console.log(this.ops[1] + "" + this.picked);
      if (this.ops[1] == this.picked) {
        //
      } else if (this.picked == undefined) {
        this.$refs["ref" + this.ops[1]].setAttribute(
          "style",
          "background-color:#8aff7f"
        );
      } else {
        this.$refs["ref" + this.picked].setAttribute("style", "color:red");
        this.$refs["ref" + this.ops[1]].setAttribute(
          "style",
          "background-color:#8aff7f"
        );
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.opSet {
  text-align: left;
}

.op_label {
  display: flex;
  width: 500px;
  background-color: #ffffff;
}
.op_label:hover {
  background-color: #d3e8f1;
}

#info {
  text-align: center;
}
</style>

