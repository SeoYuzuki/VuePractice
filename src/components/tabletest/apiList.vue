<template>
  <div class="hello">
    <div class="div1">
      <div v-if="isConnect == 0">
        <Alert type="warning" show-icon>
          請確認是否連線
          <template slot="desc">
            <Button
              type="warning"
              ghost
              long
              @click="testConnect"
              :loading="loading"
            >
              測試
            </Button>
          </template>
        </Alert>
      </div>
      <div v-if="isConnect == -1">
        <Alert type="error" show-icon>
          連線失敗
          <template slot="desc">
            <Button
              type="error"
              ghost
              long
              @click="testConnect"
              :loading="loading"
            >
              重試
            </Button>
          </template>
        </Alert>
      </div>
      <div v-if="isConnect == 1">
        <Alert type="success" show-icon>
          有連線
          <template slot="desc">
            <Button
              type="success"
              ghost
              long
              @click="testConnect"
              :loading="loading"
            >
              測試
            </Button>
          </template>
        </Alert>
      </div>
      <div class="aaa">URL: {{ url }}</div>
      <div class="aaa">
        <Select v-model="methodModel" style="width: 100px" placeholder="--">
          <Option
            v-for="item in methods"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </Select>
        <Tooltip placement="top-start" max-width="200">
          <div slot="content">
            <p>mes</p>
            <p>
              <i>後端接收mes作對應判斷, <br />err:強制後端出錯斷線</i>
            </p>
          </div>
          <Select v-model="person" style="width: 100px" placeholder="--">
            <Option
              v-for="item in vtList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </Tooltip>
        <Tooltip placement="top-start" max-width="200">
          <div slot="content">
            <p>waitFor</p>
            <p><i>後端會延遲幾毫秒才回覆,用於測試等待行為</i></p>
          </div>
          <Input v-model="waitFor" placeholder="default size" class="btn1" />
        </Tooltip>
        <Button
          type="success"
          @click="pressGo"
          :loading="loading2"
          class="btn1"
        >
          GO
        </Button>
      </div>

      <div class="aaa">postBody:</div>
      <div class="aaa">{{ postBody }}</div>
      <div class="aaa">res:</div>
      <div class="aaa">{{ retxt }}</div>
    </div>
  </div>
</template>

<script>
//import Banner from "@/components/Banner.vue";
// import $ from "jquery";

export default {
  components: {},
  props: {},
  data() {
    return {
      methods: [
        // { value: "GET", label: "GET" },
        { value: "POST", label: "POST" },
      ],
      vtList: [
        { value: "", label: "--" },
        { value: "gura", label: "Gura" },
        { value: "peko", label: "Pekora" },
        { value: "err", label: "err" },
      ],
      waitFor: 1000,
      //   postBody: "{}",
      retxt: "",
      methodModel: "POST",
      person: "",
      url: "http://10.214.141.45:5000/testV",
      isConnect: 0,
      loading: false,
      loading2: false,
    };
  },
  computed: {
    postBody() {
      let aa = {};
      aa.mes = this.person;
      aa.waitFor = this.waitFor;
      return aa;
    },
  },
  methods: {
    testConnect() {
      this.loading = true;
      this.axios
        .post(this.url, { waitFor: 500 }, { timeout: 10000 })
        .then((response) => {
          console.log(response);
          this.isConnect = 1;
        })
        .catch((err) => {
          console.log(err);
          this.isConnect = -1;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    pressGo() {
      this.loading2 = true;

      this.axios
        .post(this.url, this.postBody, { timeout: 10000 })
        .then((response) => {
          console.log(response);
          this.retxt = response.data;
        })
        .catch((err) => {
          console.log(err);
          this.retxt = err;
        })
        .finally(() => {
          this.loading2 = false;
        });
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
.div1 {
  display: inline-block;
  width: 500px;
}
.aaa {
  background-color: rgb(248, 246, 223);
}

.bbb {
  background-color: rgb(36, 34, 16);
}

.btn1 {
  width: 100px;
}
</style>

