<template>
  <div class="hello">
    <br />
    t3get
    <div>
      <img style="width: 50px" alt="gura" src="@/assets/300px-Gawr_Gura.png" />
      <!-- <img style="width: 50px" alt="Vue logo" src="../assets/logo.png" /> -->
    </div>
    <Button @click="getInfo('gura')">get gura</Button>
    <Button @click="getInfo('peko')">get pekora</Button>
    <Button @click="getInfo('err')">err</Button>
    <div>
      <component
        v-for="(field, name, index) in fields"
        v-bind:is="field.type"
        :key="index"
        v-bind="field.custinfo"
      ></component>
    </div>
  </div>
</template>

<script>
// import t3marriage from "@/components/cbp2/t3marriage.vue";
import t3templete from "@/components/cbp2/t3templete.vue";

export default {
  components: {
    // t3marriage,
    t3templete,
  },
  props: {},
  data() {
    return {
      fields: [],
    };
  },
  computed: {},
  methods: {
    test() {},
    getInfo(str) {
      const url = "http://10.214.141.45:5000/testV";
      this.axios
        .post(url, { waitFor: 0, mes: str }, { timeout: 10000 })
        .then((response) => {
          console.log(response["data"]);
          this.fields.push({
            type: t3templete,
            custinfo: response["data"],
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
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
</style>

