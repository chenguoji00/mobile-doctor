<!-- 院内会诊 -->
<template>
  <div class='hospital-consulation'>
    <!-- Item列表 -->
    <div class="consulat-item" v-for="(item,index) in hospitalConsult" :key="index">
      <div class="consulat-item-left">
        <div class="consulat-item-left-item">
          已评价
        </div>
      </div>
      <div class="consulat-item-right">
          <div class="item-top">{{item.applyDocName}}&nbsp;&nbsp;&nbsp;  {{item.authDocName}}</div>
          <div class="item-center">会诊标题：{{item.patName}}、{{item.patSex|exChangeSex}}、{{item.age}}岁</div>
          <div class="item-center">会诊时间：{{item.patClinicDateText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMobileDoctor } from "@/service/doctor.js";
export default {
  components: {},
  data() {
    return {
      hospitalConsult:[]
    };
  },
  filters:{
    exChangeSex(item){
      return item==1?'男':'女'
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getMobileDoctor();
  },
  mounted() {},
  methods: {
    getMobileDoctor(){
      getMobileDoctor({ uri: "/api/v1/his/getPatientAndOrderHistory",patId:this.$store.getters.patId }).then(res => {
        this.hospitalConsult = res.data;
        console.log(this.hospitalConsult, "this.patientData");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.hospital-consulation {
  width: 100%;
  font-size: .1rem;
  .consulat-item {
    width: 100%;
    height: 1.7rem;
    font-size: .1rem;
    display: flex;
    margin:.1rem 0;
    box-shadow: 1px 1px 10px #888888;
    .consulat-item-left {
      width: 25%;
      height: 100%;
      background-color: #fff;
      margin: 0 auto;
      position: relative;
      text-align: center;
      
      .consulat-item-left-item {
        position: relative;
        top: 50%; /*偏移*/
        margin:-.5rem auto 0 auto;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        background-color: #2CD6C9;
        border-radius: 100%;
        font-weight: 700;
        color: #fff;
      }
    }
    .consulat-item-right {
      width: 75%;
      height: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .item-center,.item-top{
          margin: .2rem 0 0 .2rem;
      }
      .item-top{
          font-size: .3rem;
          font-weight: bolder;
      }
      
    }
  }
}
</style>