<template>
  <div>
    emit
    <p>{{ total }}</p>
    <Apple />
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button v-on:click="checkB">check book</button>
    <e2 :msg="total" :jjson="books" />
    <p>name:{{ name }}</p>
  </div>
</template>

<script>
import e2 from "@/components/test/testPathValSon.vue";

export default {
  components: { e2 },

  data() {
    return {
      total: null,
      books: [
        {
          id: "a00001",
          name: "0 陷阱！0 誤解！8 天重新認識 JavaScript！",
          author: "Kuro Hsu",
          publishedAt: "2019/09",
        },
        {
          id: "a00002",
          name: "重新認識 Vue.js",
          author: "Kuro Hsu",
          publishedAt: "unknown",
        },
      ],
      name: "bala",
    };
  },
  computed: {},
  methods: {
    incrementTotal: function () {
      this.total += 1;
    },
    checkB: function () {
      console.log(this.books);
    },
  },
  watch: {
    books: {
      deep: true,
      handler() {
        this.name = this.books[0].name;
      },
    },
  },
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

<style  scoped></style>

