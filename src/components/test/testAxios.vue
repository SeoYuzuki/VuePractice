<template>
  <div class="hello">
    test
    <div>安裝cli: npm install -g @vue/cli</div>
    <div>建立專案: vue create myproj</div>
    <div>改port: npm run serve -- --port 3000</div>
    <br />
    <div>非同步get練習</div>
    <button v-on:click="axios1">測試axios1</button>
    <button v-on:click="axios2">測試axios2</button>
    <button v-on:click="axios3">測試axios3</button>
    <div v-html="wikiTxt"></div>

    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
        {{ option.text }}
      </option>
      <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value+1">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: "",
      wikiTxt: "",
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
  created: function () {},
  methods: {
    axios1: function () {
      this.hihi();
      console.log("axios1");
      this.axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => (this.wikiTxt = response["data"]["time"]));
    },
    axios2: function () {
      console.log("axios2");

      const url = "http://10.214.141.45:5000/testV";
      //const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
      this.axios.post(url, { a: 123 }).then((response) => {
        this.wikiTxt = response;
        //console.log(response["data"]);
      });
    },
    axios3: function () {
      console.log("axios3");

      const url = "https://zh.wikipedia.org/wiki/Wiki";
      const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
      this.axios.get(cors + url).then((response) => {
        console.log("??");
        console.log(response);
        this.wikiTxt = response["data"];
      });
    },
    hihi: function () {
      let mmm = "me";
      var ss = `foo ${mmm} bar`;
      console.log(ss);
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
  background-color: rgb(245, 230, 197);
  text-align: justify;
}

#info {
  text-align: center;
}
</style>

