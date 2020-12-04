<template>
  <div class="hello">
    <br />
    t2
    <Button type="info" @click="isShow = !isShow">編輯</Button>
    <div id="app">
      <div v-if="isShow">{{ cardname }}</div>
      <div v-else>
        <input style="width: 50px" v-model="cardname" placeholder="edit me" />
      </div>
    </div>
    <Row>
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">{{cardname}}</Col>
      <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
    </Row>
  </div>
</template>

<script>
//import Banner from "@/components/Banner.vue";

export default {
  components: {},
  props: {},
  data() {
    return { isShow: true, cardname: "頂級卡" };
  },
  computed: {},
  methods: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  activated() {},
  deactivated() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head1 {
  display: inline-block;
  position: relative;
  background-color: rgb(78, 78, 78);
  color: rgb(240, 240, 240);
  height: 40px;
  width: 800px;
}

.head1 div {
  display: inline-block;
  position: absolute;
  top: 25%;
  left: 10px;
}

.btn_edit {
  display: inline-block;
  position: absolute;
  top: 25%;
  right: 10px;
}

.head2 {
  width: 800px;
  display: inline-block;
  border: 2px #ffb326 solid;
  text-align: center;
}

.head2 tr td {
  flex: 1 100%;

  /* background-color: rgb(250, 248, 248); */
}

.chead {
  flex: 1 100%;
  display: inline-block;
  background-color: rgb(39, 100, 87);
}
</style>

