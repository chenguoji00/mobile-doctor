<!-- 诊断报告查看 -->
<template>
  <ZKPage :header="true"
          :container="true">
    <template slot="header">
      <NavBar title=""
              bgColor="rgb(0,121,254)"
              @onClickLeft="goToPage()"
              left-arrow />
    </template>
    <template slot="container">
      <div class="report-title">
        血常规五分类
      </div>
      <div class="report-table">
        <div>项目</div>
        <div>结果</div>
        <div>参考值</div>
      </div>
      <div :class="['report-table-value',{'shangshen':item.indexValue==1},{'xiajiang':item.indexValue==-1}]" v-for="item in ReportData" :key="item.key">
        <div style="width:33%;text-align:center;padding-left:.2rem;">{{item.reportName}}</div>
        <div style="width:33%;flex:1;text-align:center;">
          <span>{{item.reportValue}}</span>
          <span  v-if="item.indexValue==1">&#8593;</span>
          <span  v-else-if="item.indexValue==-1">&#8595;</span>
          </div>
        <div style="width:33%;">{{item.reportMinValue}}-{{item.reportMaxValue}}</div>
      </div>
    </template>
  </ZKPage>
</template>

<script>
import { getMobileDoctor } from "@/service/doctor.js";
import NavBar from "@/components/common/nav-bar";
import ZKPage from "@/components/common/zk-page";
export default {
  components: {
    NavBar,
    ZKPage
  },
  data() {
    return {
      ReportData:[
        // {"key":1,"project":'红细胞压积',"result":'42.3',"Reference":'36.5-47.8',"indexValue":0},
        // {"key":2,"project":'红细胞平均体积',"result":'50.3',"Reference":'36.5-47.8',"indexValue":1},
        // {"key":3,"project":'平均血红蛋白量',"result":'42.3',"Reference":'36.5-47.8',"indexValue":0},
        // {"key":4,"project":'红细胞压积',"result":'42.3',"Reference":'36.5-47.8',"indexValue":0},
        // {"key":5,"project":'红细胞平均体积',"result":'42.3',"Reference":'36.5-47.8',"indexValue":0},
        // {"key":6,"project":'平均血红蛋白量',"result":'42.3',"Reference":'36.5-47.8',"indexValue":0},
        // {"key":7,"project":'红细胞压积',"result":'2.3',"Reference":'36.5-47.8',"indexValue":-1},
        // {"key":8,"project":'红细胞平均体积',"result":'42.3',"Reference":'36.5-47.8',"indexValue":0},
        // {"key":9,"project":'平均血红蛋白量',"result":'42.3',"Reference":'36.5-47.8',"indexValue":0},
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log();
    this.getMobileDoctor();
  },
  mounted() {},
  methods: {
    getMobileDoctor(){
      let param = { uri: "/api/v1/his/getHisReportList",inspectionId:this.$route.query.inspectionId };
      getMobileDoctor(param).then(res => {
        this.ReportData = res.data;
        console.log(this.ReportData,"this.examineReportData reportValue");
        for(let i=0;i<this.ReportData.length;i++){
          if(this.ReportData[i].reportValue> this.ReportData[i].reportMaxValue){
            this.ReportData[i].indexValue = 1;
          }else if(this.ReportData[i].reportValue< this.ReportData[i].reportMinValue){
            this.ReportData[i].indexValue = -1;
          }
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.report-title {
  width: 100%;
  font-weight: bolder;
  text-align: center;
  line-height: 1rem;
  font-size: 0.34rem;
  
}
.report-table{
    display: flex;
    flex-direction: row;
    text-align: center;
    border-top: 1px solid #f0f0f0;
    line-height: .7rem;
    border-bottom: 1px solid #f0f0f0;
    font-size: .1rem;
    div{
      width:33%;
      text-align: center;
    }
  }
.report-table-value{
    display: flex;
    flex-direction: row;
    text-align: center;
    border-top: 1px solid #f0f0f0;
    line-height: .7rem;
    border-bottom: 1px solid #f0f0f0;
    font-size: .1rem;
    div{
      width:33%;
      text-align: center;
    }
}
.shangshen{
  color:red;
}
.xiajiang{
  color:rgb(51,215,203)
}
</style>