<!-- 病历报告 -->
<template>
  <div class='inspectionReport'>
    <div class="p-title-box-2">
      <div>病历</div>
      <div>状态</div>
      <div>创建时间</div>
    </div>
    <div class="p-title-box-3" v-for="(item,index) in inspecReportData" :key="index">
      <div style="font-size:14px;">{{item.recordName}}</div>
      <div style="font-size:14px;">{{item.recordState}}</div>
      <div style="font-size:14px;">{{item.recordTime}}</div>
    </div>
  </div>
</template>

<script>
import { getMobileDoctor } from "@/service/doctor.js";
export default {
  components: {},
  data() {
    return {
        inspecReportData:[
            // {"medicalRecord":'住院病案首页',"status":'未签名',"inspectTime":'2020.3.12 14:21:30'},
            // {"medicalRecord":'入院记录',"status":'已完成',"inspectTime":'2020.3.12 14:44:30'},
            // {"medicalRecord":'日常病程',"status":'已完成',"inspectTime":'2020.3.12 14:12:30'},
        ]
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getMobileDoctor();
  },
  mounted() {},
  methods: {
    getMobileDoctor() {
      getMobileDoctor({ uri: "/api/v1/his/getHisRecordList" }).then(res => {
        this.inspecReportData = res.data;
        console.log(this.inspecReportData, "this.inspecReportData");
      });
    },
  }
};
</script>
<style lang="scss" scoped>
.p-title-box-2 {
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  height: .8rem;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  line-height: .8rem;
  font-size: .3rem;
  color:#0079FE;
  
  div {
    width: 33%;
    height: 100%;
    p {
      font-weight: bolder;
    }
  }
}
.p-title-box-3 {
width: 100%;
border-bottom: 1px solid #fff;
  background-color: #f0f0f0;
  
  height: .7rem;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  line-height: .7rem;
  font-size: .1rem;
  color:black;
  div {
    width: 33%;
    height: 100%;
  }
}
</style>