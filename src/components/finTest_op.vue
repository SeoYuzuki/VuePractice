<template>
  <div class="hello">
    <div class="opSet">
      <form>
        <div>{{ question }}</div>
        <div ref="ref1">
          <input
            type="radio"
            :id="opid + '_1'"
            name="op"
            value="1"
            v-model="picked"
          />
          <label :for="opid + '_1'">{{ op1 }}</label>
          <br />
        </div>
        <div ref="ref2">
          <input
            type="radio"
            :id="opid + '_2'"
            name="op"
            value="2"
            v-model="picked"
          />
          <label :for="opid + '_2'">{{ op2 }}</label>
          <br />
        </div>
        <div ref="ref3">
          <input
            type="radio"
            :id="opid + '_3'"
            name="op"
            value="3"
            v-model="picked"
          />
          <label :for="opid + '_3'">{{ op3 }}</label>
          <br />
        </div>
        <div ref="ref4">
          <input
            type="radio"
            :id="opid + '_4'"
            name="op"
            value="4"
            v-model="picked"
          />
          <label :for="opid + '_4'">{{ op4 }}</label>
          <br />
        </div>
      </form>
      <br />
    </div>
  </div>
</template>

<script>
import { globalMethods1 } from "./globalMethods.js";

export default {
  mixins: [globalMethods1],
  name: "HelloWorld2",
  props: {
    ops: null,
    isShowAns: null,
    opid: null,
  },

  data() {
    return {
      question: null,
      op1: null,
      op2: null,
      op3: null,
      op4: null,
      someHtml: null,
      picked: null,
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
  background-color: #8aff7f;
}

.hello {
  background-color: #f5e6c5;
  text-align: justify;
}

#info {
  text-align: center;
}
</style>

