<template>
  <div class="hello">
    test
    <div>安裝cli: npm install -g @vue/cli</div>
    <div>建立專案: vue create myproj</div>
    <div>改port: npm run serve -- --port 3000</div>
    <h1>site : {{ site }}</h1>
    <h1>url : {{ url }}</h1>
    <h1>{{ details() }}</h1>
    <h1>{{ cap }}</h1>
    <button v-on:click="greet3">測試用按鈕3</button>
    <button v-on:click="greet4">測試用按鈕4</button>
  </div>
</template>

<script>
const vm = {
  data() {
    return {
      site: "hihi",
      url: "yoyoyo",
      alexa: "10000",
      cap: "",
    };
  },
  created: function () {},
  methods: {
    details: function () {
      return this.site + " - function！";
    },
    greet3: function () {
      //非同步get req
      console.log("33");
      this.axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => (this.cap = response));
    },
    greet4: function () {
      console.log("45");
  
      const url = "api/testV";
      //const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
      this.axios.get(url).then((response) => {
        console.log(response['data']);
      });
    },
  },
};

export default vm;
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

