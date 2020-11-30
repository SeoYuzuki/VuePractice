<template>
  <div class="hello">
    <Button @click="toggle = !toggle">toggle!</Button>
    <div v-if="toggle">
      <Select v-model="model1" style="width: 200px" placeholder='笑鼠人'>
        <Option
          v-for="item in cityList"
          :value="item.value"
          :key="item.value"
          >{{ item.label }}</Option
        >
      </Select>
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
      toggle: true,
      cityList: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      model1: "",
    };
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
</style>

