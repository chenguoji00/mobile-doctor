<!-- 患者界面 -->
<template>
  <div class='patientPage'>
    <!-- 基本信息 start -->
    <div class="base-info">
      <div class="base-info-title">
        基本信息
      </div>
      <div class="base-info-content">
        <div class="base-content-top">
          <div><span class="color-set">姓名：</span>{{patientData.patName}}</div>
          <div style="text-align:center;"><span class="color-set">性 &nbsp; &nbsp; &nbsp; 别：</span>{{getSex(patientData.patSex)}}</div>
          <div style="text-align:center;"><span class="color-set">年龄：</span>{{patientData.patAgeDays}}</div>
        </div>
        <div class="base-content-top">
          <div><span class="color-set">血型：</span>{{patientData.patBlood}}</div>
          <div style="text-align:center;"><span class="color-set">婚姻状态：</span>{{patientData.patMarriage|exChangeMarry}}</div>
          <div style="text-align:center;"><span class="color-set">体重：</span>{{patientData.patWeight}}KG</div>
        </div>
        <div class="base-content-bottom">
          <div><span class="color-set">身份证：</span>{{patientData.patIdentityCard}}</div>
        </div>
        <div class="base-content-bottom">
          <div><span class="color-set">联系方式：</span><a :href="'tel:' + patientData.patPhone">{{patientData.patPhone}}</a></div>
        </div>
      </div>
    </div>
    <!-- 基本信息 end --> 
    <!-- 住院信息 start -->
    <div class="hospitalized-info">
      <div class="hospitalized-info-title">
        住院信息
      </div>
      <div class="hospitalized-info-content">
        <div class="hospitalized-content-top">
          <div><span class="color-set">住院号：</span>{{patientData.patNursingLevel}}</div>
          <div style="text-align:left;"><span class="color-set">护理级别：</span>{{patientData.patBedNumber}}</div>
        </div>
        <div class="hospitalized-content-top">
          <div><span class="color-set">床位号：</span></div>
          <div style="text-align:left;"><span class="color-set">入院诊断：</span>{{patientData.patDiagnosis}}</div>
        </div>
        <div class="hospitalized-content-top">
          <div><span class="color-set">住院医师：</span>{{patientData.patResident}}</div>
          <div style="text-align:left;"><span class="color-set">病情：</span>{{patientData.patIllness}}</div>
        </div>

        <div class="hospitalized-content-top">
          <div><span class="color-set">主任医师：</span>{{patientData.patChiefDoc}}</div>
          <div style="text-align:left;"><span class="color-set">管床护士：</span>{{patientData.patTubeNurse}}</div>
        </div>
        <div class="hospitalized-content-top">
          <div><span class="color-set">主治医师：</span>{{patientData.patMainDoc}}</div>
          <div style="text-align:left;"><span class="color-set">病床等级：</span>{{patientData.patBedGrade}}</div>
        </div>

        <div class="hospitalized-content-top">
          <div><span class="color-set">入院时间：</span>{{patientData.patStayTime}}</div>
          <div style="text-align:left;"><span class="color-set">住院天数：</span>{{patientData.patStayDay}}天</div>
        </div>
      </div>
    </div>
    <!-- 住院信息 end -->
    <!-- 费用信息 start -->
     <div class="hospitalized-info">
      <div class="hospitalized-info-title">
        费用信息
      </div>
      <div class="hospitalized-info-content">
        <div class="hospitalized-content-top">
          <div><span class="color-set">费用类型：</span>{{patientData.patFeeType}}</div>
          <div style="text-align:left;"><span class="color-set">总费用：</span>{{patientData.patTotalFee}}</div>
        </div>
        <div class="hospitalized-content-top">
          <div><span class="color-set">预交金：</span>{{patientData.patPreFee}}</div>
          <div style="text-align:left;"><span class="color-set">余额：</span>{{patientData.patBalance}}</div>
        </div>
        
      </div>
    </div>
    <!-- 费用信息 end -->
  </div>
</template>

<script>
import { getMobileDoctor } from "@/service/doctor.js";
export default {
  components: {},
  data() {
    return {
      patientData:[],
    };
  },
  filters:{
    exChangeMarry(item){
      if(item==1)return'已婚'
      else if(item==2) return'未婚'
      else return '未知'
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getMobileDoctor()
  },
  mounted() {},
  methods: {
    getMobileDoctor(){
      getMobileDoctor({ uri: "/api/v1/his/getHisPatById",patId:this.$store.getters.patId }).then(res => {
        console.log(res, "this.patientData");
        this.patientData = res.data;
        
      });
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/css/common.scss";
.patientPage {
  width: 100%;
  height: 100%;
  .base-info {
    width: 100%;
    .base-info-title {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      padding-left: 0.3rem;
      color: $themeColor;
      border-bottom: 1px solid #fff;
      font-size: .2rem;
    }
    .base-info-content {
      width: 96%;
      margin: 0 auto;
      .base-content-top {
        display: flex;
        line-height: 0.6rem;
        width: 100%;
        div {
          font-size: .25rem;
          width: 33%;
        }
      }
      .base-content-bottom {
        display: flex;
        text-align: center;
        line-height: 0.6rem;
        width: 100%;
        div {
          font-size: .25rem;
        }
        a{
            color:$themeColor !important;
        }
      }
    }
  }
  .hospitalized-info {
    width: 100%;
    .hospitalized-info-title {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      padding-left: 0.3rem;
      color: $themeColor;
      border-bottom: 1px solid #fff;
    }
    .hospitalized-info-content {
      width: 96%;
      margin: 0 auto;
      .hospitalized-content-top {
        display: flex;
        line-height: 0.6rem;
        width: 100%;
        div {
          font-size: .25rem;
          width: 50%;
        }
      }
      .hospitalized-content-bottom {
        display: flex;
        text-align: center;
        line-height: 0.6rem;
        width: 100%;
        div {
          font-size: .25rem;
        }
      }
    }
  }
}
.color-set{
    color:#888;
}
</style>