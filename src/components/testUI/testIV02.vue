<template>
  <div class="hello">
    <Row>
      <Col span="12">
        <Rate show-text v-model="valueText" />
      </Col>
      <Col span="12">
        <Rate show-text allow-half v-model="valueCustomText">
          <span style="color: #f5a623">{{ valueCustomText }}</span>
        </Rate>
        <Rate v-model="valueText" character="A" />
        <Rate v-model="valueText" character="好" />
        <Rate v-model="valueText" icon="ios-heart" />
      </Col>
    </Row>
    <i-circle :percent="percent">
      <span class="demo-Circle-inner" style="font-size: 24px"
        >{{ percent }}%</span
      >
    </i-circle>
    <i-circle :percent="percent" stroke-color="#5cb85c">
      <Icon type="ios-checkmark" size="60" style="color: #5cb85c"></Icon>
    </i-circle>
    <i-circle :percent="percent" stroke-color="#ff5500">
      <span class="demo-Circle-inner">
        <Icon type="ios-close" size="50" style="color: #ff5500"></Icon>
      </span>
    </i-circle>
    <Slider v-model="percent" id="s1"></Slider>
    <Slider v-model="percent" id="s2" :disabled="isDisabled"></Slider>
    <RadioGroup v-model="buttonSize" type="button">
      <Radio label="large">Large</Radio>
      <Radio label="default">Default</Radio>
      <Radio label="small">small</Radio>
    </RadioGroup>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Badge dot>
      <Button type="error" @click="setDisable">Error</Button>
    </Badge>
    <br />
    <Tabs class="tab1">
      <TabPane label="标签一">标签一的内容</TabPane>
      <TabPane label="标签二" disabled>标签二的内容</TabPane>
      <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
    <br />
    <br />
    <Badge dot>
      <a href="#" class="demo-badge">aaa</a>
    </Badge>
    <Badge dot>
      <Icon type="ios-notifications-outline" size="26"></Icon>
    </Badge>
    <Badge dot>
      <a href="#">可以是一个链接</a>
    </Badge>
    <br />
    <Badge :count="100" type="success">
      <a href="#" class="demo-badge">haha</a>
    </Badge>
    <br />
    <br />
    <Badge color="blue" text="blue" />
    <Upload multiple type="drag" action="http://10.214.141.45:5000/">
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>Click or drag files here to upload</p>
      </div>
    </Upload>   
    </div>
  </div>
</template>

<script>
//import Banner from "@/components/Banner.vue";

export default {
  components: {},
  props: {},
  data() {
    return {
      valueText: 3,
      valueCustomText: 3.8,
      percent: 20,
      buttonSize: "100px",
      isDisabled: true,
      apple: "1",
      orange: "2",
    };
  },
  computed: {},
  methods: {
    setDisable() {
      this.isDisabled = !this.isDisabled;
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
.tab1 TabPane {
  color: red;
}
</style>

