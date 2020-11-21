<template>
  <div class="hello">
    <div style="display: inline-block; margin: 0 10px;">
      <router-link to="/finTest/finTestH">逐題考</router-link>
    </div>
    <div style="display: inline-block;margin: 0 10px;">
      <router-link to="/finTest/finTestT">模擬考100題!</router-link>
    </div>
    <div>
      <div class="card" style="width: 30rem">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
//export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: rgb(245, 230, 197);
  text-align: justify;
}
</style>

