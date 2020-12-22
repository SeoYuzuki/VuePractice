<template>
  <div class="hello">
    t1
    <div class="a">
      <div class="head1">
        <div>申請書資料</div>
        <button class="btn_edit" @click="test">編輯</button>
      </div>
      <br />
      <table border="1" cellpadding="5" class="head2">
        <tr>
          <td colspan="4" class="chead">使用了 colspan 的欄位</td>
        </tr>
        <tr>
          <td>表格欄位</td>
          <td>表格欄位</td>
          <td>表格欄位</td>
          <td>表格欄位</td>
        </tr>
      </table>
      <br />
    </div>
    <Table
      :columns="columns14"
      :data="data5"
      :show-header="true"
      border
      :span-method="handleSpan"
      :row-class-name="rowClassName"
    ></Table>
  </div>
</template>

<script>
//import Banner from "@/components/Banner.vue";

export default {
  components: {},
  props: {},
  data() {
    return {
      rowClassName2: "banana",
      columns14: [
        {
          title: "我是真表頭= =",
          align: "center",

          children: [
            {
              title: "表頭子1",
              key: "c1",
              render: this.columnRender0,
            },
            {
              title: "表頭子2",
              key: "c2",
            },
            {
              title: "表頭子3",
              key: "c3",
            },
            {
              title: "表頭子4",
              key: "c4",
              renderHeader: this.renderHeader,
              //render: this.columnRender,
            },
          ],
        },
      ],
      data5: [
        {
          c1: "我是假表頭QQ",
        },
        {
          c1: "顧客姓名:",
          c2: "英文姓名:",
          c3: "London No. 1 Lake Park",
          c4: "2016-10-01",
        },
        {
          c1: "Joe Black",
          c2: 30,
          c3: "Sydney No. 1 Lake Park",
          c4: "2016-10-02",
          cellClassName: {
            name: "demo-table-info-cell-name",
          },
        },
        {
          c1: "Jon Snow",
          c2: 26,
          c3: "Ottawa No. 2 Lake Park",
          c4: "2016-10-04",
          className: "demo-table-info-column",
        },
      ],
    };
  },
  computed: {},
  methods: {
    test: function () {
      this.rowClassName2 = "kkk";
    },
    columnRender0: function (h, params) {
      console.log(h);
      console.log(params);
      if (params.index == 0) {
        return h("div", [
          params.row.c1,
          h(
            "Button",
            {
              props: {
                type: "primary",
                size: "small",
              },
              style: {
                marginRight: "5px",
                right: "10px",
                position: "absolute",
              },
              on: {
                click: () => {
                  this.show(params.index);
                },
              },
            },
            "編輯"
          ),
        ]);
      } else {
        return h("div", [
          this.rowClassName2,
          params.row.c1,
          h("input", {
            props: {},
            style: {},
            on: {
              input: function (event) {
                this.$emit("test", event.target.value);
              },
            },
            domProps: {
              value: this.rowClassName2,
            },
          }),
        ]);
      }
    },
    columnRender: function (h, params) {
      return h("div", [
        h(
          "Button",
          {
            props: {
              type: "primary",
              size: "small",
            },
            style: {
              marginRight: "5px",
            },
            on: {
              click: () => {
                this.show(params.index);
              },
            },
          },
          "View"
        ),
        h(
          "Button",
          {
            props: {
              type: "error",
              size: "small",
            },
            on: {
              click: () => {
                this.remove(params.index);
              },
            },
          },
          "Delete"
        ),
      ]);
    },
    renderHeader: function (h, params) {
      return h(
        "div",
        {
          style: {
            color: "#FF7D41",
          },
          on: {
            click: () => {
              console.log(params);
            },
          },
        },
        "被渲染"
      );
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
      if (rowIndex === 2 && columnIndex === 0) {
        return {
          rowspan: 2,
          colspan: 1,
        };
      } else if (rowIndex === 3 && columnIndex === 0) {
        return {
          rowspan: 0,
          colspan: 0,
        };
      }
    },
    rowClassName() {
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

