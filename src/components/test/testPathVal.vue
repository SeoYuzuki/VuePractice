<template>
  <div>
    單向資料流是Vue元件一個非常明顯的特徵，不應該在子元件中直接修改props的值<br />
    如果傳遞的prop僅僅用作展示，不涉及修改，則在模板中直接使用即可<br />
    如果需要對prop的值進行轉化然後展示，則應該使用computed計算屬性<br />
    如果prop的值用作初始化，應該定義一個子元件的data屬性並將prop作為其初始值<br />
    <br>
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

