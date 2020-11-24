<template>
  <div class="hello">
    test

    <div style="display: inline-block; margin: 0 10px">
      <router-link to="/TestMainPage/testAxios">testAxios</router-link>
    </div>
    <div style="display: inline-block; margin: 0 10px">
      <router-link to="/TestMainPage/testAxios">testAxios!</router-link>
    </div>
    <div>
      <div class="card" style="width: 30rem">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wikiTxt: "",
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
      this.axios.get(url).then((response) => {
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

