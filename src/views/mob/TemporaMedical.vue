<!-- 长期医嘱 -->
<!--<template>
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
</template>-->

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
    <!--    <div class="tempora-item">-->
    <!--      <div :class="['tempora-drug',stateShow[item.adviceLevel]]"-->
    <!--           v-for="(item,index) in temporaMedocalData"-->
    <!--           :key="index" >-->
    <!--        <div style="font-weight:bolder;font-size:.1rem;">{{index+1}}</div>-->
    <!--        <div class="drug-table"-->
    <!--             v-for="(subItem,subIndex) in item.medicine"-->
    <!--             :key="subIndex">-->
    <!--          <div style="width:50%;line-height:.25rem;">{{subItem.medicineName}}</div>-->
    <!--          <div style="width:15%;">{{subItem.medicineAmount}}</div>-->
    <!--          <div style="width:20%;">{{subItem.medicinePrice}}元</div>-->
    <!--          <div style="width:35%;">{{subItem.medicineMark}}</div>-->
    <!--        </div>-->
    <!--        <div class="drug-usage">-->
    <!--          <div>{{item.advicePo}}</div>-->
    <!--          <div>{{item.adviceBid}}</div>-->
    <!--          <div>{{item.adviceDay}}</div>-->
    <!--          <div>{{item.adviceSkin}}</div>-->
    <!--          &lt;!&ndash; <div v-if="item.zhushi.anxious" style="color:red;background-color:#fff;border-radius:100%;line-height:.5rem;height:.5rem;width:.5rem;text-align:center;">{{item.zhushi.anxious}}</div> &ndash;&gt;-->
    <!--          <div class="drug-usage-last">-->
    <!--            <div style="font-size:.2rem;">开始：{{item.adviceStartTime}}</div>-->
    <!--            <div style="font-size:.2rem;">结束：{{item.adviceEndTime}}</div>-->

    <!--          </div>-->

    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="tempora-item" v-for="(item,index) in temporaMedocalData" :key="index">
      <div   :class="['tempora-drug','tempora-title',stateShow[item.adviceLevel]]">
        <div>第{{index+1}}组</div>
        <div>{{item.adviceHead}}</div>
        <div>开始:{{item.adviceStartTime}}</div>
      </div>
      <div class="tempora-sub">
        <div class="tempora-sub-left">
          <div class="sub-left-item"   v-for="(subItem,subIndex) in item.medicine" :key="subIndex">
            <div class="sub-drug">
              <div style="font-size: .5rem;color:rgb(248,191,115);">
                {{subItem.medicineName}}
              </div>
              <div>
                {{subItem.medicineAmount}}
              </div>
            </div>
            <div style="width: 30%;font-weight: bolder;">
              {{subItem.medicinePrice}}
            </div>
          </div>
        </div>
        <div class="tempora-sub-right">
          <div>{{item.advicePo}}</div>
          <div>{{item.adviceBid}}</div>
        </div>

        <div style="display: flex;justify-content: space-between;align-items: center;width:100%;margin-bottom: .2rem;">
          <div style="padding-left:.3rem;">备注：{{item.medicineMark}}</div>
          <div style="padding-right:.3rem;">结束：{{item.adviceEndTime}}</div>
        </div>

<!--        aborder-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。-->
<!--        border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。-->

<!--        border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。-->
<!--        border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。-->
<!--        border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。border-*-radius属性的值可分别设定水平半径和垂直半径；若省略垂直半径，则垂直半径默认采用水平半径的值。-->
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
        ],
        stateShow:['','zc','ysh','hssh','yzx','tz'],
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
        let param = { uri: "/api/v1/his/getHisAdviceList",patId:this.$store.getters.patId,adviceType:2 }
        getMobileDoctor(param).then(res => {
          this.temporaMedocalData = res.data;
          // let a = [...res.data]
          // this.temporaMedocalData.concat(a);
          // for(let i=0;i<this.temporaMedocalData.length;i++){
          //   this.temporaMedocalData[i].adviceLevel = Number(this.temporaMedocalData[i].adviceLevel)
          // }
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
      margin: .2rem auto;
      font-size: .4rem;
      .tempora-title {
        display: flex;
        border-top-left-radius: .2rem;
        border-top-right-radius: .2rem;
        line-height: 1rem;
        justify-content: space-around;
        align-items: center;
      }
      .tempora-sub{
        width:100%;
        flex-wrap: wrap;
        height:auto;
        color: black;
        display: flex;
        font-size: .4rem;
        background-color: #fff;
        .tempora-sub-left{
          width: 80%;
          display: flex;
          flex-direction: column;
          .sub-left-item{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .sub-drug{
              width: 70%;
              display: flex;
              padding-left:.3rem;
              flex-direction: column;
              div{
                margin: .2rem 0;
              }
            }
          }
        }
        .tempora-sub-right{
          width: 20%;
          display: flex;
          flex-direction: column;
          justify-content:  space-around;
          align-items: center;
        }
      }
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
        }
        .drug-usage {
          width: 95%;
          display: flex;
          margin: 0.15rem auto;
          justify-content: space-around;
          align-items: center;
          line-height: 0.5rem;
          .drug-usage-last{
            display: flex;
            flex-direction: column;
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
