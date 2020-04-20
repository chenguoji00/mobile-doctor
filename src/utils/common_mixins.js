import * as constants from 'src/AppConstants'

import { mapState, mapGetters, mapActions } from 'vuex';

import moment from 'moment'

export default {
  data() {
    return {
      UserImg: 'this.src="' +require('@/assets/images/unknown.jpg') + '"'
    }
  },
  filters: {
    fRecipeUseSatus(id) {
      if (id == 0) {
        return "未使用";
      }
      if (id == 1) {
        return "已使用";
      }
      if (id == 2) {
        return "已作废";
      }
    },
    fDate(dateStr, patten) {
      if (!dateStr) {
        return ''
      }
      return moment(dateStr).format(patten || 'YYYY-MM-DD HH:mm')
    },
    fSex(id) {
      return constants.SEX[id];
    },
    fPhone(cellValue) {
      if (Number(cellValue) && String(cellValue).length === 11) {
        var mobile = String(cellValue)
        var reg = /^(\d{3})\d{4}(\d{4})$/
        return mobile.replace(reg, '$1****$2')
      } else {
        return cellValue
      }
    },
    fIDCard(cellValue) {
      if (Number(cellValue) && String(cellValue).length === 18) {
        var idcard = String(cellValue)
        return idcard.substring(0, 10) + '*****' + idcard.substring(14, 17);
      } else {
        return cellValue
      }
    },
    fOrderStatus(id){
      //0待支付,1已支付,2已完成,3已关闭,4已取消,5已退款
      let arr=['待支付','已支付','已完成','已关闭','已取消','退款中','已退款']
      return arr[id];
    },
    fOrderType(id){
      return constants.ORDER_TYPE[id];
    },
    fSCType(id){
      return constants.SCTYPE[id];
    },
    fTime(str){
      return str.substring(10,str.length-3);
    },
    fInquiryType(id){
      if (id == 1) {
        return "待接诊";
      }
      if (id == 2) {
        return "已接诊";
      }
      if (id == 3) {
        return "已完成";
      }
    },
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      api_token: state => state.api_token,
      netloading: state => state.netloading,
    }),

  },
  methods: {
    getIocnStr(odt) {
      if (odt == 1) {
        return "md-icon-message";
      }
      if (odt == 2) {
        return "md-icon-dianhua";
      }
      if (odt == 3) {
        return "md-icon-chakantiezishipin";
      }

      if (odt == 4) {
        return "md-icon-chufang";
      }
      return "md-icon-shangpin";

    },
    defaultDoctorImg(sex) {
      if(sex){
        return sex == 1 ?  require('@/assets/images/doctor_m.png'): require('@/assets/images/doctor_wm.png')
      }

    },
    defaultUserImg(){
      return require('@/assets/images/unknown.jpg');
    } ,
    fPhone(cellValue) {
      if (Number(cellValue) && String(cellValue).length === 11) {
        var mobile = String(cellValue)
        var reg = /^(\d{3})\d{4}(\d{4})$/
        return mobile.replace(reg, '$1****$2')
      } else {
        return cellValue
      }
    },
    fIDCard(cellValue) {
      if (Number(cellValue) && String(cellValue).length === 18) {
        var idcard = String(cellValue)
        return idcard.substring(0, 4) + '******' + idcard.substring(15, 17);
      } else {
        return cellValue
      }
    },
    getSex(id) {
      return constants.SEX[id];
    },
    getAges(str) {
      if (str == null) {
        return '';
      }
      var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
      if (r == null) return false;
      var d = new Date(r[1], r[3] - 1, r[4]);
      if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
        var Y = new Date().getFullYear();
        return (Y - r[1]) + "岁";
      }
    },
    getAgeByIdCard(identityCard) {
      var len = (identityCard + "").length;
      if (len == 0) {
        return '';
      } else {
        if ((len != 15) && (len != 18))//身份证号码只能为15位或18位其它不合法
        {
          return '';
        }
      }
      var strBirthday = "";
      if (len == 18)//处理18位的身份证号码从号码中得到生日和性别代码
      {
        strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
      }
      if (len == 15) {
        strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
      }
      //时间字符串里，必须是“/”
      var birthDate = new Date(strBirthday);
      var nowDateTime = new Date();
      var age = nowDateTime.getFullYear() - birthDate.getFullYear();
      //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
      // if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
      //   age--;
      // }
      return age+'岁';
    },
    getOrderTypeName(id) {
      if (id == "1") {
        return "图文问诊";
      }
      if (id == "2") {
        return "语音问诊";
      }
      if (id == "3") {
        return "视频问诊";
      }
    },

    formPrice(price, isnum) {
      if (isnum && price != null && price > 0) {
        return price / 100 + "";
      }
      if (price != null) {
        return "￥" + price / 100;
      }
      return "￥0.00";
    },

    //手机号码校验
    testPone(pone) {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(pone)) {
        return false;
      } else {
        return true;
      }
    },
    //校验身份证号码正确性
    testIdCard(id) {
      var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
      //号码规则校验
      if (!format.test(id)) {
        return false;
      }
      //区位码校验
      //出生年月日校验   前正则限制起始年份为1900;
      var year = id.substr(6, 4),//身份证年
        month = id.substr(10, 2),//身份证月
        date = id.substr(12, 2),//身份证日
        time = Date.parse(month + '-' + date + '-' + year),//身份证日期时间戳date
        now_time = Date.parse(new Date()),//当前时间戳
        dates = (new Date(year, month, 0)).getDate();//身份证当月天数
      if (time > now_time || date > dates) {
        return false;
      }
      //校验码判断
      var c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];   //系数
      var b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];  //校验码对照表
      var id_array = id.split("");
      var sum = 0;
      for (var k = 0; k < 17; k++) {
        sum += parseInt(id_array[k]) * parseInt(c[k]);
      }
      return id_array[17].toUpperCase() === b[sum % 11].toUpperCase();
    },

    doctorImg(sex) {
      return sex == 1
        ? require("@/assets/images/doctor_m.png")
        : require("@/assets/images/doctor_wm.png");
    },
    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    },

    goToPage(page, data) {
      if (page == null || page === '') {
        this.$router.goBack();
      } else {
        this.$router.push({
          name: page,
          query: data
        });
      }
    },
  }
}
