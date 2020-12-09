<template>
  <div class="hello">
    <br />
    <div class="tempdiv1">
      <Row>
        <i-col span="24">
          <div class="outer divhead">
            <div class="inner innerhead">個人資料</div>
            <div v-if="isNotEdit" class="btn_edit">
              <Button @click="pressEdit" size="small">編輯</Button>
            </div>
            <div v-else class="btn_edit">
              <Button @click="pressCencle" size="small">取消</Button>
              &nbsp;
              <Button @click="pressSave(1)" size="small">儲存異動(成功)</Button>
              &nbsp;
              <Button @click="pressSave(2)" size="small">儲存異動(失敗)</Button>
              &nbsp;
              <Button @click="pressSave(3)" size="small"
                >儲存異動(timeout)</Button
              >
            </div>
          </div>
        </i-col>
      </Row>

      <Row>
        <i-col span="6">
          <div class="outer divbody">
            <div class="inner">顧客姓名：</div>
            <div v-if="isNotEdit" class="inner">{{ cusname }}</div>
            <div v-else class="inner">
              <Input style="width: 100px" size="small" v-model="cusname" />
            </div>
          </div>
        </i-col>
        <i-col span="6">
          <div class="outer divbody">
            <div class="inner">英文姓名：</div>
            <div v-if="isNotEdit" class="inner">{{ cusENname }}</div>
            <div v-else class="inner">
              <Input style="width: 100px" size="small" v-model="cusENname" />
            </div>
          </div>
        </i-col>
        <i-col span="6">
          <div class="outer divbody">
            <div class="inner">卡人ID：</div>
            <div v-if="isNotEdit" class="inner">{{ cardholderID }}</div>
            <div v-else class="inner">
              <Input style="width: 100px" size="small" v-model="cardholderID" />
            </div>
          </div>
        </i-col>
        <i-col span="6">
          <div class="outer divbody">
            <div class="inner">歸戶帳號：</div>
            <div v-if="isNotEdit" class="inner">{{ accID }}</div>
            <div v-else class="inner">
              <Input size="small" style="width: 100px" v-model="accID" />
            </div>
          </div>
        </i-col>
      </Row>

      <Row>
        <i-col span="12">
          <div class="outer divbody">
            <Tooltip content="地址長度過小" placement="top-end" :offset="30">
              <Badge dot :offset="[0, -10]" :count="companyAddressCount">
                <div class="inner">公司地址：</div>
              </Badge>
            </Tooltip>
            <div v-if="isNotEdit" class="inner">{{ companyAddress }}</div>
            <div v-else class="inner">
              <Input
                size="small"
                style="width: 200px"
                v-model="companyAddress"
              />
            </div>
          </div>
        </i-col>
        <i-col span="12">
          <div class="outer divbody">
            <Tooltip content="地址長度過小" placement="top-end" :offset="30">
              <Badge dot :offset="[0, -10]" :count="currentAddressCount">
                <div class="inner">現居地址：</div>
              </Badge>
            </Tooltip>
            <div v-if="isNotEdit" class="inner">{{ currentAddress }}</div>
            <div v-else class="inner">
              <Input
                size="small"
                style="width: 200px"
                v-model="currentAddress"
              />
            </div>
          </div>
        </i-col>
      </Row>

      <Row>
        <i-col span="6">
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
        </i-col>
        <i-col span="6">
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
        </i-col>
        <i-col span="12">
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
        </i-col>
      </Row>
      <Row>
        <i-col span="6">
          <div class="outer divbody">
            <div class="inner">ETC車籍維護：</div>
          </div>
        </i-col>
        <i-col span="18">
          <div class="outer divbody">
            <div class="inner">：</div>
          </div>
        </i-col>
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
          <Button type="error" size="large" long @click="modal2 = false"
            >離開</Button
          >
        </div>
      </Modal>
      <Modal v-model="modal3" width="360" :closable="false">
        <p slot="header" style="color: #2db7f5; text-align: center">
          <Icon type="ios-information-circle"></Icon>
          <span>等待儲存至後台</span>
        </p>
        <div style="text-align: center">
          <p></p>
        </div>
        <div slot="footer">
          <Button
            type="info"
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
  props: {
    cusname: String,
    cusENname: String,
    cardholderID: String,
    accID: String,
    companyAddress: {
      type: String,
      default: "",
    },
    currentAddress: {
      type: String,
      default: "",
    },
    maritalStatus: String,
    gender: String,
    email: String,
  },
  data() {
    return {
      modal2: false,
      modal3: false,
      modal_loading: false,
      isNotEdit: true,

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
    pressSave(mode) {
      this.modal3 = true;
      this.modal_loading = true;
      let SuccessCode = "";
      let timeout = 20000;
      if (mode == 1) {
        SuccessCode = "1";
      } else if (mode == 2) {
        SuccessCode = "2";
      } else if (mode == 3) {
        timeout = 500;
      }

      const url = "http://10.214.141.45:5000/testV";
      this.axios
        .post(url, { waitFor: 2000 }, { timeout: timeout })
        .then((response) => {
          console.log(response["data"]);
          if (response["data"].isSaveSuccessfully == SuccessCode) {
            this.$Message.success("Save Successfully");
            this.isNotEdit = true;
          } else {
            this.$Message.error("Error on Saving");
          }
        })
        .catch((err) => {
          console.log(err);
          this.pressCencle();
          this.$Message.error("Error on Saving");
        })
        .finally(() => {
          this.modal3 = false;
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

