<!--  -->
<template>
  <div class='dignosticEntry'>
    <div v-for="(item,index) in List"
         :key="index">
      <div class="dignosticContent">
        <div class="dignostic-top">
          <!-- <div>{{item.diagResult}}</div> -->
          <div style="width:50%;">{{item.diagMethod}}</div>
          <div>操作人：{{item.diagUserName}}</div>
        </div>
        <div class="dignostic-center">
          <div style="margin-left:.4rem;">{{item.diagName}}</div>
        </div>
        <div class="dignostic-bottom">
          <div class="dig-bottom-left">
            <div :class="{ 'mainclass-left':true, 'zhu':zhu(item.diagMainState),'yi':yi(item.diagMainState)}">{{item.diagMainState}}</div>
            <div :class="{ 'mainclass-right':true, 'zhu':zhu(item.diagSubState),'zf':zf(item.diagSubState)}">{{item.diagSubState}}</div>
          </div>
          <div style="width:20%"></div>
          <div style="width:40%;">
            {{item.diagTime}}
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
      List: []
    };
  },
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    getMobileDoctor({ uri: "/api/v1/his/getHisDiagList",patId:this.$store.getters.patId }).then(res => {
      console.log(res, "this is res");
      this.List = res.data;
    });
  },
  methods: {
    zhu(item) {
      if (item == "主" || item == "有效") {
        return true;
      }
    },
    yi(item) {
      if (item == "疑") {
        return true;
      }
    },
    zf(item) {
      if (item == "作废") {
        return true;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.dignosticEntry {
  .dignosticContent {
    width: 98%;
    margin: 0 auto;
    height: 2.4rem;
    margin: 0.1rem auto;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: .27rem;
    .dignostic-top {
      width: 100%;
      height: 0.5rem;
      display: flex;
      justify-content: space-around;
      align-items: space-around;
    }
    .dignostic-center {
      width: 100%;
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .dignostic-bottom {
      width: 100%;
      margin-top: 0.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .dig-bottom-left {
        width: 40%;
        display: flex;
        justify-content: space-between;
        .mainclass-left {
          margin-left: 0.4rem;
          width: 0.5rem;
          height: 0.6rem;
          // background-color:rgb(0,191,191);
          text-align: center;
          line-height:.6rem;
          border-radius: 10px;
        }
        .mainclass-right {
          width: 1rem;
          height: 0.6rem;
          // background-color:rgb(0,191,191);
          text-align: center;
          line-height:.6rem;
          border-radius: 10px;
        }
        .zhu {
          background-color: rgb(0, 191, 191);
        }
        .yi {
          background-color: rgb(245, 154, 15);
        }
        .zf {
          background-color: rgb(217, 0, 27);
        }
      }
    }
  }
}
</style>