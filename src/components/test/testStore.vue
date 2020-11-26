<template>
  <div>
    hihi e
    <!-- <BlockUI :message="logoutMsg" v-show="isShowLogoutSpinner">
      <font-awesome-icon icon="cog" size="3x" spin fixed-width>
      </font-awesome-icon>
    </BlockUI> -->
    <p>Loading: {{ ifLoading }}</p>
    <p>doneTodosCount: {{ doneTodosCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  props: {},
  data() {
    return {
      logoutMsg: "系統登出中，請稍候!!",
    };
  },
  computed: {
    ...mapGetters(["isShowLogoutSpinner"]),
    ifLoading() {
      // 在這邊吐回state裡面的isLoading
      return this.$store.state.appleColor;
    },
    doneTodosCount() {
      return this.$store.getters.doneTodos;
    },
  },
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

<style lang="scss" scoped></style>
