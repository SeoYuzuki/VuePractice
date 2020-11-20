<template>
  <div class="hello">
    test
    <h1>site : {{ site }}</h1>
    <h1>url : {{ url }}</h1>
    <h1>{{ details() }}</h1>
  </div>
</template>

<script>

const vm = {  
  data() {
    return {
      site: "hihi",
      url: "yoyoyo",
      alexa: "10000",
    };
  },
  methods: {
    details: function () {
      return this.site + " - function！";
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

