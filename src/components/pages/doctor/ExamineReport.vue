


<!-- 检查报告 -->
<template>
  <div class='inspectionReport'>
    <div class="p-title-box-2">
      <div>项目</div>
      <div>状态</div>
      <div>检查时间</div>
    </div>
    <div class="p-title-box-3"
         v-for="(item,index) in inspecReportData"
         :key="index">
      <div style="width:35%;">{{item.checkName}}</div>
      <div :class="{'lookreport':item.checkState == 2}"
          style="width:25%;" @click="statusToGo(item)">{{item.checkState == 1?'报告未出':'查看报告'}}</div>
      <div style="font-size:0.2rem;width:35%;">{{item.checkTime}}</div>
    </div>
  </div>
</template>

<script>
import { getMobileDoctor } from "@/service/doctor.js";
export default {
  components: {},
  data() {
    return {
      inspecReportData: [],
      pageSize:10,
      pageIndex:1,
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
      let param = { uri: "/api/v1/his/getHisCheckList",patId:this.$store.getters.patId,pageIndex:this.pageIndex, pageSize:this.pageSize };
      getMobileDoctor(param).then(res => {
        this.inspecReportData = res.data;
        console.log(this.inspecReportData, "this.inspecReportData");
      });
    },
    statusToGo(item) {
      if (item.checkState == 2) {
        this.goToPage("checkreport", {
          key: item.patId,
          item:JSON.stringify(item)
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
  font-size: 0.2rem;
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
  color: black;
  .lookreport{
    color:#4B7902;
  }
}
</style>