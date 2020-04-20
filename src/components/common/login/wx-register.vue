<template>
  <div class="wxRgB">
    <span class="close-icon md-icon-delete_fill" @click="goToPage()"></span>
    <div class="userInfo">
      <div class="header">
        <img class="userAvatar" :src="userInfo.avatar==null?defaultUserImg():userInfo.avatar" alt />
      </div>
      <div class="username">你好 {{userInfo.nickName}}!</div>
      <div class="wel">请您绑定手机</div>
    </div>

    <div class="operation">
      <div v-if="!showForm" class="operation">
        <div class="optionBtn">
          <div class="btn" @click="showEle()">前往绑定</div>
          <div class="btn" @click="goToPage('home')">我不想绑定</div>
        </div>
      </div>

      <div v-if="showForm" class="registerForm animated fadeInUp delay-0.5s">
        <md-field class="form">
          <md-input-item type="phone" :error="errorInfo.phone" v-model="phone" title="手机号:">
            <div class="input-operator" slot="right" @click="getCode">{{tipText}}</div>
          </md-input-item>
          <md-input-item
            type="digit"
            v-model="code"
            :maxlength="4"
            title="验证码:"
            :error="errorInfo.code"
          ></md-input-item>
          <md-button class="rgsbtn" type="primary" round @click="doRegister">绑定</md-button>
        </md-field>
      </div>
    </div>
  </div>
</template>
<script>
import { phoneUpdate } from "@/service/member.js";
import { sendSms } from "@/service/login.js";
export default {
  data() {
    return {
      phone: "",
      code: "",
      tipText: "获取验证码",
      time: 60,
      interval: null,
      errorInfo: { phone: "", code: "" },
      isCodeSend: false,
      showForm: false,
      wxUser: {}
    };
  },
  methods: {
    setTime() {
      this.time = this.time - 1;
      this.tipText = this.time + "秒后重发";
      if (this.time <= 0) {
        this.isCodeSend = false;
        this.tipText = "重新获取";
        return;
      }
      setTimeout(this.setTime, 1000);
    },
    getCode() {
      if (this.isCodeSend) {
        return;
      }

      if (this.phone == "") {
        this.errorInfo.phone = "手机号不能为空";
        return;
      }

      if (!this.testPone(this.phone)) {
        this.errorInfo.phone = "手机号码无效";
        return;
      }

      this.errorInfo.phone = "";

      let param = {
        phone: this.phone
      };
      sendSms(param).then(res => {
        if (res.code == 200) {
          this.isCodeSend = true;
          this.$toast.succeed("验证码已发送");
        } else {
          this.$dialog.alert({
            title: "提示",
            content: res.msg,
            confirmText: "确定"
          });
        }
      });

      this.setTime();
    },
    showEle() {
      this.showForm = true;
    },
    doRegister() {
      if (this.phone == "") {
        this.errorInfo.phone = "手机不能为空";
        return;
      } else {
        this.errorInfo.phone = "";
      }

      if (this.code == "") {
        this.errorInfo.code = "验证码不能为空";
        return;
      } else {
        this.errorInfo.code = "";
      }

      let param = {
        phone: this.phone,
        code: this.code,
        userId: this.userInfo.userId
      };
      phoneUpdate(param).then(res => {
        if (res.code == 200) {
          this.$toast.succeed("绑定成功");
          this.goToPage("home");
        } else {
          this.$dialog.alert({
            title: "提示",
            content: res.msg,
            confirmText: "确定"
          });
        }
      });
    },
    getWXUserInfo(openid, access_token) {
      let param = {
        access_token: access_token,
        openid: openid
      };
      userInfoByopenId(param).then(res => {
        if (res.errcode == null) {
          this.wxUser = res;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.wxRgB {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:$themeColor;

  .close-icon{
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 80px;
    color: #fff;
  }

  .userInfo {
    width: 100%;
    height: 40%;
    //   background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    align-items: center;

    .header {
      height: 300px;
      width: 100%;
      text-align: center;
      .userAvatar {
        margin-top: 50px;
        width: 200px;
        height: 200px;
        border-radius: 100px;
      }
    }

    .username {
      line-height: 100px;
      height: 100px;
      width: 100%;
      text-align: center;
      font-size: 0.45rem;
      color: #fff;
    }

    .wel {
      line-height: 100px;
      height: 100px;
      width: 100%;
      text-align: center;
      font-size: 0.3rem;
      color: #fff;
    }
  }

  .operation {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .optionBtn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 250px;
      width: 80%;

      .btn {
        line-height: 100px;
        font-size: 0.3rem;
        width: 100%;
        height: 100px;
        background-color: #fff;
        border-radius: 50px;
        color: rgb(70, 67, 67);
        text-align: center;
      }
    }

    .registerForm {
      border-top-left-radius: 80px;
      border-top-right-radius: 80px;
      width: 100%;
      height: 100%;
      background-color: #fff;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .form {
        width: 80%;
        height: auto;
        .rgsbtn {
          margin-top: 80px;
        }
      }
    }
  }
}
</style>