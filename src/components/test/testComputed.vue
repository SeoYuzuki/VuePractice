<template>
  <div class="hello">
    testComputed
    <br />
    <input id="num3" v-model="firstName" />
    <input id="num4" v-model="lastName" />
    <input id="num5" v-model="fullName" />
    <p>fullName：{{ fullName }}</p>
    <input id="num2" v-model="message" />
    <p>原始訊息：{{ message }}</p>
    <p>反轉訊息：{{ reversedMessage }}</p>
  </div>
</template>


<script>
import $ from "jquery";

export default {
  data() {
    return {
      message: "Hello World!",
      firstName: "Bill",
      lastName: "Chen",
    };
  },

  created: function () {
    
  },
  mounted: function () {
    console.log($('#num2').val());
  },
  methods: {},
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
    fullName: {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      set: function (newValue) {
        var name = newValue.split(" ");
        this.firstName = name[0];
        this.lastName = name[name.length - 1];
      },
    },
  },
  watch: {
    firstName: function (curVal, oldVal) {
      console.log("curVal:" + curVal + "/oldVal:" + oldVal);
    },
    lastName(curVal) {
      console.log(curVal);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

