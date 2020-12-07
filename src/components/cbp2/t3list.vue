<template>
  <div class="hello">
    <br />
    t3
    <div class="tempdiv1">
      <Row>
        <Col span="24">
          <div class="outer divhead">
            <div class="inner innerhead">個人資料</div>
            <div v-if="isNotEdit" class="btn_edit">
              <Button @click="pressEdit" size="small">編輯</Button>
            </div>
            <div v-else class="btn_edit">
              <Button @click="pressCencle" size="small">取消</Button>
              &nbsp;
              <Button @click="pressSave" size="small">儲存異動</Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span="6">
          <div class="outer divbody">
            <div class="inner">顧客姓名：</div>
            <div v-if="isNotEdit" class="inner">{{ cusname }}</div>
            <div v-else class="inner">
              <Input style="width: 100px" size="small" v-model="cusname" />
            </div>
          </div>
        </Col>
        <Col span="6">
          <div class="outer divbody">
            <div class="inner">英文姓名：</div>
            <div v-if="isNotEdit" class="inner">{{ cusENname }}</div>
            <div v-else class="inner">
              <Input style="width: 100px" size="small" v-model="cusENname" />
            </div>
          </div>
        </Col>
        <Col span="6">
          <div class="outer divbody">
            <div class="inner">卡人ID：</div>
            <div v-if="isNotEdit" class="inner">{{ cardholderID }}</div>
            <div v-else class="inner">
              <Input style="width: 100px" size="small" v-model="cardholderID" />
            </div>
          </div>
        </Col>
        <Col span="6">
          <div class="outer divbody">
            <div class="inner">歸戶帳號：</div>
            <div v-if="isNotEdit" class="inner">{{ accID }}</div>
            <div v-else class="inner">
              <Input size="small" style="width: 100px" v-model="accID" />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span="12">
          <div class="outer divbody">
            <Badge dot :offset="[0, -10]" :count="companyAddressCount">
              <div class="inner">公司地址：</div>
            </Badge>
            <div v-if="isNotEdit" class="inner">{{ companyAddress }}</div>
            <div v-else class="inner">
              <Input
                size="small"
                style="width: 200px"
                v-model="companyAddress"
              />
            </div>
          </div>
        </Col>
        <Col span="12">
          <div class="outer divbody">
            <Badge dot :offset="[0, -10]" :count="currentAddressCount">
              <div class="inner">現居地址：</div>
            </Badge>
            <div v-if="isNotEdit" class="inner">{{ currentAddress }}</div>
            <div v-else class="inner">
              <Input
                size="small"
                style="width: 200px"
                v-model="currentAddress"
              />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span="6">
          <div class="outer divbody">
            <div class="inner">婚姻狀況：</div>
            <div v-if="isNotEdit" class="inner">{{ maritalStatus }}</div>
            <div v-else class="inner">
              <Select
                v-model="maritalStatus"
                style="width: 70px"
                size="small"
                placeholder="請選擇"
              >
                <Option
                  v-for="item in maritalList"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
              <!-- <input style="width: 100px" v-model="maritalStatus" /> -->
              &nbsp;
              <Poptip placement="right" width="500">
                <Icon type="md-nutrition" @click="test" />
                <div class="api" slot="content">
                  <table>
                    <thead>
                      <tr>
                        <th>結婚日期</th>
                        <th>配偶姓名</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2020/11/18</td>
                        <td>Jerry Chen</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Poptip>
            </div>
          </div>
        </Col>
        <Col span="6">
          <div class="outer divbody">
            <div class="inner">性別：</div>
            <div v-if="isNotEdit" class="inner">{{ gender }}</div>
            <div v-else class="inner">
              <RadioGroup v-model="gender">
                <Radio label="男"></Radio>
                <Radio label="女"></Radio>
                <Radio label="其他"></Radio>
              </RadioGroup>
            </div>
          </div>
        </Col>
        <Col span="12">
          <div class="outer divbody">
            <div class="inner">e-mail：</div>
            <div v-if="isNotEdit" class="inner">{{ email }}</div>
            <div v-else class="inner">
              <Input
                style="width: 300px"
                v-model="email"
                size="small"
                clearable
                @on-blur="testvalidateEmail"
                ref="ref1"
                autofocus
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <div class="outer divbody">
            <div class="inner">ETC車籍維護：</div>
          </div>
        </Col>
        <Col span="18">
          <div class="outer divbody">
            <div class="inner">：</div>
          </div>
        </Col>
      </Row>
      <!-- <t3marriage /> -->
      <!-- <Button @click="modal2 = true">Custom header and footer</Button> -->
      <Modal v-model="modal2" width="360" :closable="false">
        <p slot="header" style="color: #f60; text-align: center">
          <Icon type="ios-information-circle"></Icon>
          <span>錯誤訊息</span>
        </p>
        <div style="text-align: center">
          <p>請確認輸入欄位格式</p>
        </div>
        <div slot="footer">
          <Button
            type="error"
            size="large"
            long
            :loading="modal_loading"
            @click="modal2 = false"
            >離開</Button
          >
        </div>
      </Modal>
      <Modal v-model="modal3" width="360" :closable="false">
        <p slot="header" style="color: #f60; text-align: center">
          <Icon type="ios-information-circle"></Icon>
          <span>等待儲存至後台</span>
        </p>
        <div style="text-align: center">
          <p></p>
        </div>
        <div slot="footer">
          <Button
            type="error"
            size="large"
            long
            :loading="modal_loading"
            @click="modal2 = false"
            >離開</Button
          >
        </div>
      </Modal>
    </div>
    <div class="fixed">我被fixed</div>
  </div>
</template>

<script>
// import t3marriage from "@/components/cbp2/t3marriage.vue";

export default {
  components: {
    // t3marriage,
  },
  props: {},
  data() {
    return {
      modal2: false,
      modal3: false,
      modal_loading: false,
      isNotEdit: true,
      cusname: "兎田ぺこら",
      cusENname: "Usada Pekora",
      cardholderID: "A123456789",
      accID: "A123456789",
      companyAddress: "兩個字以上就不會紅點",
      currentAddress: "",
      maritalStatus: "已婚",
      gender: "女",
      email: "pekora@hololive.com",
      saveEdit: {},
      maritalList: [
        {
          value: "已婚",
          label: "已婚",
        },
        {
          value: "未婚",
          label: "未婚",
        },
        {
          value: "離婚",
          label: "離婚",
        },
      ],
    };
  },
  computed: {
    companyAddressCount: function () {
      if (this.companyAddress.length > 1) {
        return 0;
      } else {
        return 1;
      }
    },
    currentAddressCount: function () {
      if (this.currentAddress.length > 1) {
        return 0;
      } else {
        return 1;
      }
    },
  },
  methods: {
    rename: function () {
      return "apple";
    },
    test: function () {
      console.log("test");
    },
    pressEdit() {
      this.saveEdit.cusname = this.cusname;
      this.saveEdit.cusENname = this.cusENname;
      this.saveEdit.cardholderID = this.cardholderID;
      this.saveEdit.accID = this.accID;
      this.saveEdit.companyAddress = this.companyAddress;
      this.saveEdit.currentAddress = this.currentAddress;
      this.saveEdit.maritalStatus = this.maritalStatus;
      this.saveEdit.gender = this.gender;
      this.saveEdit.email = this.email;
      console.log(this.saveEdit);

      this.isNotEdit = false;
    },
    pressCencle() {
      this.cusname = this.saveEdit.cusname;
      this.cusENname = this.saveEdit.cusENname;
      this.cardholderID = this.saveEdit.cardholderID;
      this.accID = this.saveEdit.accID;
      this.companyAddress = this.saveEdit.companyAddress;
      this.currentAddress = this.saveEdit.currentAddress;
      this.maritalStatus = this.saveEdit.maritalStatus;
      this.gender = this.saveEdit.gender;
      this.email = this.saveEdit.email;

      this.isNotEdit = true;
    },
    pressSave() {
      this.modal3 = true;
      this.modal_loading = true;

      const url = "http://10.214.141.45:5000/testV";
      this.axios
        .post(url, { waitFor: 500 }, { timeout: 20000 })
        .then((response) => {
          console.log(response["data"]);
          if (response["data"].isSaveSuccessfully == "1") {
            this.modal3 = false;
            this.$Message.success("Save Successfully");
            this.isNotEdit = true;
          } else {
            this.modal3 = false;
            this.$Message.error("Error on Saving");
            //this.pressCencle();
          }
        })
        .catch((err) => {
          console.log(err);
          this.modal3 = false;
          this.pressCencle();
        });
    },
    testvalidateEmail() {
      if (!this.validateEmail(this.email)) {
        //
        console.log("???");
        this.modal2 = true;

        this.$refs.ref1.focus(); //自動對焦
      }
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
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

.apple1 {
  /* background-color: rgb(191, 226, 213); */
  border-bottom: none;
  border-color: rgb(10, 10, 61);
  border-style: solid;
  border-width: 0.1ch;
  /* height: 40px; */
}

.btn_edit {
  display: inline-block;
  position: absolute;
  right: 10px;
}

.divhead {
  background-color: #13693a;
}

.divbody {
  background-color: #eeeeee;
}

.divbody:hover {
  background-color: #ffffff;
}
.outer {
  position: relative; /* ★ */
  height: 40px;
  display: flex; /* ★ */
  align-items: center; /* ★ */

  border-bottom: none;
  border-color: rgb(105, 105, 105);
  border-style: solid;
  border-width: 0.1ch;
}

.inner {
  height: 20px;
  left: 10px;
  display: inline-block;
  position: relative;
}

.inner input {
  height: 20px;
  left: 0px;
  display: inline-block;
  position: relative;
}

.innerhead {
  color: rgb(252, 252, 252);
  font-weight: bold;
}

/* 為了均衡格線寬度 */
.tempdiv1 {
  border-bottom: none;
  border-color: rgb(105, 105, 105);
  border-style: solid;
  border-width: 0.1ch;
}

.fixed {
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  background-color: white;
}
</style>

