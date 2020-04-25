<!-- 临时医嘱 -->
<template>
  <div class='temporaMedical'>
    <div class="tempora-top">
      <div style="color:rgb(59,150,251);"><span style="background-color:rgb(59,150,251);"
              class="top-item"></span>暂存</div>
      <div style="color:rgb(4,217,178);"><span style="background-color:rgb(4,217,178);"
              class="top-item"></span>已审核</div>
      <div style="color:rgb(244,175,85);"><span style="background-color:rgb(244,175,85);"
              class="top-item"></span>护士审核</div>
      <div style="color:rgb(194,128,255);"><span style="background-color:rgb(194,128,255);"
              class="top-item"></span>已执行</div>
      <div style="color:rgb(217,0,27);"><span style="background-color:rgb(217,0,27);"
              class="top-item"></span>停止</div>
    </div>
    <div class="tempora-item">
      <div :class="['tempora-drug',item.status]"
           v-for="(item,index) in temporaMedocalData"
           :key="index" >
        <div style="font-weight:bolder;">{{index+1}}</div>
        <div class="drug-table"
             v-for="(subItem,subIndex) in item.drug"
             :key="subIndex">
          <div style="width:50%;line-height:.25rem;">{{subItem.drugName}}</div>
          <div style="width:15%;">{{subItem.Dosage}}</div>
          <div style="width:10%;">{{subItem.price}}元</div>
          <div style="width:30%;">{{subItem.usage}}</div>
        </div>
        <div class="drug-usage">
          <div>{{item.zhushi.PO}}</div>
          <div>{{item.zhushi.BID}}</div>
          <div>{{item.zhushi.days}}</div>
          <div>{{item.zhushi.皮试}}</div>
          <div v-if="item.zhushi.anxious" style="color:red;background-color:#fff;border-radius:100%;line-height:.5rem;height:.5rem;width:.5rem;text-align:center;">{{item.zhushi.anxious}}</div>
          <div style="font-size:.2rem;">开始：{{item.zhushi.startTime}}</div>
        </div>
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
      temporaMedocalData: [
        {
          status: "ysh",
          drug: [
            {
              drugName: "羟乙基淀粉130/0.4氯化钠注射液[100ml]",
              Dosage: "10mg",
              price: 19.0,
              usage: "研粉分3包，每次一包"
            },
            {
              drugName: "穿黄清热胶囊[10mg*100片]",
              Dosage: "1g",
              price: 19.0,
              usage: "兑温水500ml饮用"
            }
          ],
          zhushi: {
            PO: "PO",
            BID: "BID",
            days: "7天",
            皮试: "不需要皮试",
            anxious: "急",
            startTime: "2020-03-16 16:43"
          }
        },
        {
          status: "hssh",
          drug: [
            {
              drugName: "羟乙基淀粉130/0.4氯化钠注射液[100ml]",
              Dosage: "10mg",
              price: 19.0,
              usage: "研粉分3包，每次一包"
            },
            {
              drugName: "穿黄清热胶囊[10mg*100片]",
              Dosage: "1g",
              price: 19.0,
              usage: "兑温水500ml饮用"
            }
          ],
          zhushi: {
            PO: "PO",
            BID: "BID",
            days: "7天",
            皮试: "不需要皮试",
            anxious: "急",
            startTime: "2020-03-16 16:43"
          }
        },
        {
          status: "tz",
          drug: [
            {
              drugName: "彩超（含报告）乳腺及其引流区淋巴结",
              Dosage: "1项",
              price: 117.00,
              usage: ""
            }
          ],
          zhushi: {
            PO: "胸部",
            BID: "QD",
            days: "",
            皮试: "",
            anxious: "",
            startTime: "2020-03-16 16:43"
          }
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {
    // this.getMobileDoctor();
  },
  mounted() {},
  methods: {

  
  }
};
</script>
<style lang="scss" scoped>
.temporaMedical {
  .tempora-top {
    width: 100%;
    background-color: #fff;
    height: 0.8rem;
    line-height: 0.8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      font-size: 0.2rem;
    }
    .top-item {
      margin-right: 6px;
      display: inline-block;
      width: 12px;
      height: 12px;

      text-align: center;
    }
  }
  .tempora-item {
    width: 100%;
    color: #fff;
    margin:.1rem auto;
    .tempora-drug {
      width: 100%;
      position: relative;
      margin:.1rem auto;
      .drug-table {
        border-bottom: 1px solid #fff;
        width: 95%;
        display: flex;
        margin: 0.15rem auto;
        padding-bottom: 0.1rem;
        div {
          font-size: 0.23rem;
        }
      }
      .drug-usage {
        width: 95%;
        display: flex;
        margin: 0.15rem auto;
        justify-content: space-around;
        align-items: center;
        line-height: 0.8rem;
      }
    }
  }
}
.ysh{
  background-color: rgb(4,217,178);
}
.hssh{
  background-color: rgb(250,205,145);
}
.tz{
  background-color: rgb(217,0,27);
}
.zc{
  background-color: rgb(59,150,251);
}
.yzc{
  background-color: rgb(194,128,255);
}
</style>