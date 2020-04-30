


<!-- 检查报告 -->
<template>
  <div class='inspectionReport'>
    <div style="display: inline-block;width: 100%;margin-top: .3rem;text-align: center;">
      <div :class="currentDefault==1?'primary':'default'" @click="jianyan(1)" style="width: 50%;line-height:1rem;display:inline-block;height: 1rem;">
        检验
      </div>
      <div :class="currentDefault==2?'primary':'default'" @click="jianyan(2)" style="width: 50%;display:inline-block;height: 1rem;line-height:1rem;">
        检查
      </div>
    </div>
    <div v-if="currentDefault==1">
        <div style="margin: .2rem 3%;width: 94%;background-color:#fff;border-radius: .3rem;">
          <div style="width: 100%;text-align: center;font-size: .5rem;font-weight: bolder;margin:.3rem 0;border-bottom: 1px solid #f0f0f0;line-height: 1rem;">
            血常规五分类
          </div>
          <div>
            科室：测试科
            异常项：
          </div>
          <div style="line-height: 1rem;width: 100%;display: flex;justify-content: space-between;align-items: center">
            <div>检查结果</div>
            <div style="display: flex;justify-content: center;align-items: center;">
              <span>详情</span>
              <img src="../../assets/go.svg" style="height: 20px;width:20px;"/>
            </div>
          </div>
        </div>
    </div>
    <div v-else>

        <div style="margin: .2rem 3%;width: 94%;background-color:#fff;border-radius: .3rem;" v-for="(item,index) in inspecReportData" :key="index">
          <div style="width: 100%;text-align: center;font-size: .5rem;font-weight: bolder;margin:.3rem 0;border-bottom: 1px solid #f0f0f0;line-height: 1rem;">
            {{item.checkName}}
          </div>
          <div style="line-height: 1rem;">
            科室：
          </div>
          <div style="line-height: 1rem;">
            诊断意见：{{item.checkOpinion}}
          </div>
          <div style="line-height: 1rem;width: 100%;display: flex;justify-content: space-between;align-items: center">
            <div>检查结果</div>
            <div style="display: flex;justify-content: center;align-items: center;" @click="statusToGo(item)">
              <span>详情</span>
              <img src="../../assets/go.svg" style="height: 20px;width:20px;"/>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { getMobileDoctor } from 'api/mob_doctor.js';
export default {
  components: {},
  data() {
    return {
      inspecReportData: [],
      pageSize:10,
      pageIndex:1,
      currentDefault:1,
      examineReportData:[],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getMobileDoctor();
    this.getInspect();
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
    getInspect(){
      let param = { uri: "/api/v1/his/getHisInspectionList",patId:this.$store.getters.patId,pageIndex:this.pageIndex, pageSize:this.pageSize };
      getMobileDoctor(param).then(res => {
        this.examineReportData = res.data;
        console.log(this.examineReportData,"this.examineReportData");

      });
    },
    statusToGo(item) {
      if (item.checkState == 2) {
        this.$router.push({
          name: 'CheckReport',
          query: {
            item:JSON.stringify(item)
          }
        });


      }
    },
    jianyan(index){
      this.currentDefault = index;
    },
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
  text-align: center;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  line-height: 0.7rem;
  font-size:.25rem;
  color: black;
  .lookreport{
    color:#4B7902;
  }
}
  .primary{
    background-color: rgb(59,150,259);
    color: white;
  }
  .default{
    background-color:#fff;
    color: #000;
  }
</style>
