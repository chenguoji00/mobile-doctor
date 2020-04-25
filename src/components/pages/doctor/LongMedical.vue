<!-- 长期医嘱 -->
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
      <div :class="['tempora-drug',item.adviceUrgent==null || item.adviceUrgent==''?'null1':item.adviceUrgent]"
           v-for="(item,index) in temporaMedocalData"
           :key="index">
        <div style="font-weight:bolder;">{{index+1}}</div>
        <div class="drug-table"
             v-for="(subItem,subIndex) in item.medicine"
             :key="subIndex">
          <div style="width:50%;line-height:.25rem;">{{subItem.medicineName}}</div>
          <div style="width:15%;">{{subItem.medicineAmount}}</div>
          <div style="width:10%;">{{subItem.medicinePrice}}元</div>
          <div style="width:30%;">{{subItem.medicineMark}}</div>
        </div>
        <div class="drug-usage">
          <div>{{item.advicePo}}</div>
          <div>{{item.adviceBid}}</div>
          <div>{{item.adviceSkin}}</div>
          <div style="font-size:.1rem;"
               class="drug-time">
            <div>首{{item.adviceHead}}</div>
            <div>末{{item.adviceTail}}</div>
          </div>
          <div style="font-size:.1rem;"
               class="drug-time">
            <div>开始：{{item.adviceStartTime}}</div>
            <div>结束：{{item.adviceEndTime}}</div>
          </div>
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
        // {
        //   status: "ysh",
        //   drug: [
        //     {
        //       drugName: "羟乙基淀粉130/0.4氯化钠注射液[100ml]",
        //       Dosage: "10mg",
        //       price: 19.0,
        //       usage: "研粉分3包，每次一包"
        //     },
        //     {
        //       drugName: "穿黄清热胶囊[10mg*100片]",
        //       Dosage: "1g",
        //       price: 19.0,
        //       usage: "兑温水500ml饮用"
        //     }
        //   ],
        //   zhushi: {
        //     PO: "PO",
        //     BID: "BID",
        //     皮试: "不需皮试",
        //     anxious: "急",
        //     startTime: "2020-03-16 16:43"
        //   }
        // },
        // {
        //   status: "hssh",
        //   drug: [
        //     {
        //       drugName: "维生素B1片[10mg*100片]",
        //       Dosage: "250ml",
        //       price: 3.50,
        //       usage: "研粉分3包，每次一包"
        //     },
        //     {
        //       drugName: "穿黄清热胶囊[10mg*100片]",
        //       Dosage: "1g",
        //       price: 19.0,
        //       usage: "兑温水500ml饮用"
        //     }
        //   ],
        //   zhushi: {
        //     PO: "PO",
        //     BID: "BID",
        //     皮试: "不需皮试",
        //     anxious: "急",
        //     startTime: "2020-03-16 16:43"
        //   }
        // },
        // {
        //   status: "tz",
        //   drug: [
        //     {
        //       drugName: "羟乙基淀粉130/0.4氯化钠注射液[100ml]",
        //       Dosage: "250ml",
        //       price: 3.50,
        //       usage: "显示备注信息"
        //     }
        //   ],
        //   zhushi: {
        //     PO: "胸部",
        //     BID: "QD",
        //     皮试: "不需皮试",
        //     anxious: "",
        //     startTime: "2020-03-16 16:43",
        //     endTime: "2020-03-16 16:43"
        //   }
        // }
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
    getMobileDoctor(){
      getMobileDoctor({ uri: "/api/v1/his/getHisAdviceList" }).then(res => {
        this.temporaMedocalData = res.data;
        console.log(this.temporaMedocalData, "this.patientData");
      });
    }
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
    margin: 0.1rem auto;
    .tempora-drug {
      width: 100%;
      position: relative;
      margin: 0.1rem auto;
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
        justify-content: space-around;
        align-items: center;
        line-height: 0.5rem;
        .drug-time {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          div {
            font-size: 0.2rem;
          }
        }
      }
    }
  }
}
.ysh {
  background-color: rgb(4, 217, 178);
}
.hssh {
  background-color: rgb(250, 205, 145);
}
.tz {
  background-color: rgb(217, 0, 27);
}
.zc {
  background-color: rgb(59, 150, 251);
}
.yzc {
  background-color: rgb(194, 128, 255);
}
.null1 {
  background-color: rgb(194, 128, 255);
}
</style>