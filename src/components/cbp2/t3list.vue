<template>
  <div class="hello">
    <br />
    t3
    <Row>
      <Col span="24">
        <div class="dd">
          申請書資料
          <button class="btn_edit" @click="test">編輯1</button>
        </div>
      </Col>
    </Row>

    <Row :class-name="rename()">
      <Col span="12">
        <div class="dd">aaa</div>
      </Col>
      <Col span="12">
        <div class="dd">aaa</div>
      </Col>
    </Row>

    <Row>
      <Col span="8">
        <div class="dd">aaa</div>
      </Col>
      <Col span="8"><div class="dd">aaa</div></Col>
      <Col span="8"><div class="dd">aaa</div></Col>
    </Row>

    <Row>
      <Col span="6"> <div class="dd">ccc</div></Col>
      <Col span="6"> <div class="dd">ccc</div></Col>
      <Col span="6"> <div class="dd">ccc</div></Col>
      <Col span="6"> <div class="dd">ccc</div></Col>
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
  methods: {
    rename: function () {
      return "apple";
    },
    test: function () {
      return "apple";
    },
  },
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
.hello {
  display: inline-block;
  width: 800px;
}

.dd {
  background-color: rgb(191, 226, 213);
  border-bottom: none;
  border-color: rgb(10, 10, 61);
  border-style: solid;
  border-width: 0.1ch;
}

.btn_edit {
  display: inline-block;
}

/* .div_head {
  display: inline-block;
  position: relative;
  background-color: rgb(78, 78, 78);
  color: rgb(240, 240, 240);
  height: 40px;
  width: 800px;
}

.div_head div {
  display: inline-block;
  position: absolute;
  top: 25%;
  left: 10px;
}

.div_head button {
  display: inline-block;
  position: absolute;
  top: 25%;
  right: 10px;
} */
</style>

