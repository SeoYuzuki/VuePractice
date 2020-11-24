<template>
  <div class="hello">
    test

    <div style="display: inline-block; margin: 0 10px">
      <router-link to="/TestMainPage/testAxios">testAxios</router-link>
    </div>
    <div style="display: inline-block; margin: 0 10px">
      <router-link to="/TestMainPage/testImage">testImage!</router-link>
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
    return {};
  },
  created: function () {},
  methods: {},
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

