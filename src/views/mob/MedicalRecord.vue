<!-- 病历报告 -->
<template>
  <div class='inspectionReport'>
<!--    <div class="p-title-box-2">-->
<!--      <div>病历</div>-->
<!--      <div>状态</div>-->
<!--      <div>创建时间</div>-->
<!--    </div>-->
<!--    <div class="p-title-box-3" v-for="(item,index) in inspecReportData" :key="index">-->
<!--      <div style="font-size:14px;">{{item.recordName}}</div>-->
<!--      <div style="font-size:14px;">{{item.recordState}}</div>-->
<!--      <div style="font-size:14px;">{{item.recordTime}}</div>-->
<!--    </div>-->

    <div @click="medicalClick(item)" v-for="(item,index) in inspecReportData" :key="index" style="border-radius:.2rem;background-color: #fff;width:100%;display: flex;height: 3rem;margin: .2rem 0;justify-content: space-between;align-items: center;">
      <div style="display: flex;flex-direction: column;justify-content: flex-start;align-items: center;">
        <div style="font-size: .5rem;font-weight: bolder;margin: .3rem 0;padding-left: .5rem;">
          {{item.recordName}}
        </div>
        <div style="font-size: .3rem;padding-left:.5rem;">
          {{item.recordTime}}
        </div>
      </div>
      <div style="font-size: .4rem;color: rgb(255,55,76);font-weight: bolder;padding-right: .5rem;">
        {{item.recordState}}
      </div>
    </div>



  </div>
</template>

<script>
  import { getMobileDoctor } from 'api/mob_doctor.js';
  import NavBar from "@/components/common/nav-bar";
  import ZKPage from "@/components/common/zk-page";
export default {
  components: {},
  data() {
    return {
        inspecReportData:[
            // {"medicalRecord":'住院病案首页',"status":'未签名',"inspectTime":'2020.3.12 14:21:30'},
            // {"medicalRecord":'入院记录',"status":'已完成',"inspectTime":'2020.3.12 14:44:30'},
            // {"medicalRecord":'日常病程',"status":'已完成',"inspectTime":'2020.3.12 14:12:30'},
        ],
        pageIndex:1,
        pageSize:10,
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
      let param = { uri: "/api/v1/his/getHisRecordList",patId:this.$store.getters.patId,pageIndex:this.pageIndex, pageSize:this.pageSize };
      getMobileDoctor(param).then(res => {
        this.inspecReportData = res.data;
        console.log(this.inspecReportData, "this.inspecReportData");
      });
    },
    medicalClick(item){
      console.log(item,"this is item");
      this.$router.push({
        name: 'medicaldetail',
        query: {
          imagePath:item.recordImagePath
        }
      });
    }
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
