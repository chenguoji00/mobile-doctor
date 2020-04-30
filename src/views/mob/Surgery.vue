<!--  -->
<template>
  <div>
    <div class='surgery' v-for="(item,index) in List" :key="index">
      <div style="line-height: 1rem;display: flex;justify-content: space-around;align-items: center;border-bottom: 1px solid #f0f0f0;">
        <div style="font-size: .4rem;font-weight: bolder;color:rgb(217,0,27); ">
          {{item.operationName}}
        </div>
        <div>
          {{item.operationRoom}}
        </div>
      </div>
      <div style="width: 90%;margin: 0 5%;">
        <div style="display: flex;justify-content:space-between;align-items: center;margin:.3rem 0;">
          <div style="width: 50%;">患者名称:{{$store.getters.patient.patName}}</div>
          <div style="width: 50%;">住院号:{{$store.getters.patient.patNursingLevel}}</div>
        </div>
        <div style="display: flex;justify-content:space-between;align-items: center;margin:.3rem 0;">
          <div style="width: 50%;">主刀医生:{{item.operationChiefDoc}}</div>
          <div style="width: 50%;">床号:</div>
        </div>
        <div style="display: flex;justify-content:space-between;align-items: center;margin:.3rem 0;">
          <div>术前诊断:</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getMobileDoctor } from 'api/mob_doctor.js'
  export default {
    components: {},
    data() {
      return {
        List: [],
        pageIndex:1,
        pageSize:10,
      };
    },
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.getMobileDoctor();
    },
    methods: {
      // https://result.eolinker.com/VAnpd8K632f23a69c2cab2e64d872906dddfe96a88e8810?uri=/api/v1/his/getHisOperationList
      getMobileDoctor() {
        let param = { uri: "/api/v1/his/getHisOperationList",patId:this.$store.getters.patId,pageIndex:this.pageIndex, pageSize:this.pageSize };
        getMobileDoctor(param).then(res => {
          this.List = res.data;
          console.log(this.List, "this.List");
        });
      },
    }
  };
</script>
<style scoped lang="scss">
.surgery{
  width: 100%;
  background-color: #fff;
}
</style>
