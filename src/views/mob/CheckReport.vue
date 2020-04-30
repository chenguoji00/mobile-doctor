<!-- 检验报告查看 -->
<template>
  <ZKPage :header="true"
          :container="true"
          >
    <template slot="header">
      <NavBar title=""
              bgColor="rgb(0,121,254)"
              @onClickLeft="goToPage()"
              left-arrow rightShow=true>
        <div slot="right" @click="goToYX">查看影像</div>
      </NavBar>
    </template>
    <template slot="container">
      <div class="top-content">
        <div class="top-info">
          <div>
            <span>姓名：</span>{{patientData.patName}}
          </div>
          <div>
            <span>性别：</span>{{patientData.patSex}}
          </div>
          <div>
            <span>年龄：</span>{{patientData.patAgeDays}}
          </div>
        </div>
        <div class="top-info">
          <div>
            <span>检验设备：</span>{{reportObj.checkDevice}}
          </div>
          <div>
            <span>检查号：</span>{{reportObj.checkNumber}}
          </div>
        </div>
        <div class="top-info">
          <div>
            <span>检查部位：</span>{{reportObj.checkPart}}
          </div>
        </div>
        <div style="width:90%;margin:0 auto;">
          <img :src="reportObj.checkImage_path" />
        </div>
        <div style="font-weight:bolder;">
          <div>
            <span>【影像表现】</span>
          </div>
        </div>

          <p style="text-indent:2em;line-height:.5rem;">
            {{reportObj.checkPerform}}
          </p>
        <div style="font-weight:bolder;">
          <div>
            <span>【诊断意见】</span>
          </div>
        </div>
        <p style="text-indent:2em;line-height:.5rem;height:2rem;">
          {{reportObj.checkOpinion}}
        </p>
      </div>
      <div class="foot-content">
        <div>报告医生：{{reportObj.checkDoc}}</div>
        <div class="foot-content-right">
          <div class="foot-right-top">审核医生：{{reportObj.checkAuditDoc}}</div>
          <div>报告日期：{{reportObj.checkTime}}</div>
        </div>
      </div>
      <div style="color:#ccc;text-align:center;">*此报告仅供本院临床医生参考，签字生效*</div>
    </template>

  </ZKPage>
</template>

<script>
  import { getMobileDoctor } from 'api/mob_doctor.js';
import NavBar from "@/components/common/nav-bar";
import ZKPage from "@/components/common/zk-page";
export default {
  components: {
    NavBar,
    ZKPage
  },
  data() {
    return {
      reportObj:{

      },
      patientData:[]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.reportObj = JSON.parse(this.$route.query.item);
    getMobileDoctor({ uri: "/api/v1/his/getHisPatById",patId:this.$store.getters.patId }).then(res => {
        console.log(res, "this.patientData");
        this.patientData = res.data;
        console.log(this.patientData,"this is siis sisi is  ")

      });
  },
  mounted() {},
  methods: {
    goToYX(){
      console.log("查看印象");
      this.$router.push('yingxiang');
    },
    goToPage(){
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped lang="scss">
.top-content {
  width: 100%;
  line-height: 1rem;
  .top-info {
    display: flex;
    width: 92%;
    margin: 0 auto;
    justify-content: flex-start;
    div {
      flex: 1;
      span {
        font-weight: bolder;
      }
    }
  }
}
.foot-content{
  display: flex;
  position: relative;
  bottom: .1rem;
  left: 0;
  width:100%;
  height:1rem;
  justify-content: space-around;
  .div{
    flex: 1;
  }
  .foot-content-right{
    display: flex;
    flex-direction: column;
    .foot-right-top{
      margin-bottom: .1rem;
    }
  }
}
</style>
