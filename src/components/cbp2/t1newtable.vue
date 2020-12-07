<template>
  <div class="hello">
    <Table
      class="data-manage-table"
      border
      :disabled-hover="true"
      :columns="columns"
      :data="datalist"
      :show-header="false"
      :span-method="handleSpan"
    >
      <!-- <div v-if="isShow">
        <input style="width: 50px" v-model="cardname" placeholder="edit me" />
      </div> -->
      <template slot-scope="{ row, index }" slot="slot1">
        <div v-if="index == 0">
          <div class="div_edit">
            我是假表頭QQ
            <button class="btn_edit" @click="test">編輯</button>
          </div>
        </div>
        <div v-else>{{ row["c1"] }}</div>
      </template>
      <template slot-scope="{ row }" slot="slot2">
        <div>{{ row["address"] }}</div>
      </template>
      <template slot-scope="{ row, index }" slot="name">
        <Input v-model="datalist[index]['name']" />
      </template>
      <template slot-scope="{ row, index }" slot="sex">
        <Input v-model="datalist[index]['sex']" />
      </template>
    </Table>
    <Button type="success" @click="submit">提交</Button>
  </div>
</template>

<script>
//import Banner from "@/components/Banner.vue";

export default {
  components: {},
  props: {},
  data() {
    return {
      cardname: "aaac",
      isShow: true,
      columns: [
        //{ winWidth: 120, align: "center", title: "c1", key: "address" },
        { winWidth: 120, align: "center", title: "c1", slot: "slot1" },
        { winWidth: 120, align: "center", title: "c2", slot: "slot2" },
        { winWidth: 80, align: "center", title: "c3", slot: "name" },
        { winWidth: 80, align: "center", title: "c4", slot: "sex" },
      ],
      datalist: [
        { address: "假表頭" },
        { c1: "haha", address: "上海a", name: "111", sex: "aa" },
        { c1: "呼呼", address: "上海", name: "111", sex: "aa" },
        { c1: "破壞死光", address: "上海", name: "555", sex: "666" },
      ],
    };
  },
  computed: {},
  methods: {
    test() {},
    submit() {
      console.log(this.datalist);
    },
    handleSpan: function ({ row, column, rowIndex, columnIndex }) {
      let a = row + column;
      if (a == "1") {
        console.log(1);
      }
      // 设置要合并的行和要合并的列
      if (rowIndex === 0 && columnIndex === 0) {
        return [1, 4];
      } else if (rowIndex === 0 && columnIndex === 1) {
        return [0, 0];
      } else if (rowIndex === 0 && columnIndex === 2) {
        return [0, 0];
      } else if (rowIndex === 0 && columnIndex === 3) {
        return [0, 0];
      }
      // if (rowIndex === 2 && columnIndex === 0) {
      //   return {
      //     rowspan: 2,
      //     colspan: 1,
      //   };
      // } else if (rowIndex === 3 && columnIndex === 0) {
      //   return {
      //     rowspan: 0,
      //     colspan: 0,
      //   };
      // }
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
  width: 1000px;
  display: inline-block;
}

.div_edit {
  background-color: rgb(78, 78, 78);
  color: rgb(240, 240, 240);
  /* padding: 10px; */
}

.btn_edit {
  display: inline-block;
}

.ivu-table-cell {
  background-color: rgb(182, 48, 48);
}

.ivu-table-column-center {
  background-color: rgb(182, 48, 48);
  padding: 0px;
}

.ivu-table-column-center div {
  background-color: rgb(191, 173, 235);
  padding: 5px;
}

.ivu-table-column-center {
  display: inline-block;
  background-color: rgb(48, 182, 120);
}

.ivu-table-row {
  background-color: rgb(182, 48, 48);
}
</style>

