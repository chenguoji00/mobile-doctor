<!-- 检验报告 -->
<template>
  <div class='inspectionReport'>
    <div class="p-title-box-2">
      <div>项目</div>
      <div>状态</div>
      <div>送检时间</div>
    </div>
    <div class="p-title-box-3"
         v-for="(item,index) in examineReportData"
         :key="index">
      <div style="width:35%;">{{item.inspectionName}}</div>
      <div style="width:25%;" :class="{'lookreport':item.inspectionStatet==2}"
           @click="statusToGo(item)">{{item.inspectionStatet==2?'查看报告':'报告未出'}}</div>
      <div style="width:40%;">{{item.inspectionTime}}</div>
    </div>
  </div>
</template>

<script>
import { getMobileDoctor } from "@/service/doctor.js";
export default {
  components: {},
  data() {
    return {
      examineReportData: [],
      pageIndex:1,
      pageSize:10,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    let param = { uri: "/api/v1/his/getHisInspectionList",patId:this.$store.getters.patId,pageIndex:this.pageIndex, pageSize:this.pageSize };
    getMobileDoctor(param).then(res => {
      this.examineReportData = res.data;
      console.log(this.examineReportData,"this.examineReportData");
    });
  },
  methods: {
    statusToGo(item) {
      console.log(item)
      if (item.inspectionStatet == 2) {
        this.goToPage("diagnosereport", {
          inspectionId: item.inspectionId
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.p-title-box-2 {
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  height: 0.8rem;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  line-height: 0.8rem;
  font-size: 0.3rem;
  color: #0079fe;

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
  height: 0.7rem;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  line-height: 0.7rem;
  font-size: 0.25rem;
  color: black;
  .lookreport{
    color:#4B7902;
  }
}
</style>

