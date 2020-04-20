<template>
  <ZKPage :header="true"
          :container="true">
    <template slot="header">
      <NavBar title="4床 王三妹"
              bgColor="rgb(0,121,254)"
              @onClickLeft="goToPage()"
              left-arrow />
    </template>
    <template slot="container">
      <div class="md-example-child md-example-child-tabs md-example-child-tab-bar-2">
        <md-tab-bar v-model="current"
                    :items="items"
                    :maxLength="5" />
        <div v-if="current==1">
          <div v-for="(item,index) in List"
               :key="index">
            <div style="width:98%;margin:0 auto;height:2.4rem;margin:.1rem auto ;background-color:#fff;display:flex;justify-content: center;flex-direction: column;
  align-items: center;">
              <div style="width:100%;height:.5rem;display:flex;justify-content: space-around;align-items: space-around;">
                <div>{{item.diagResult}}</div>
                <div>{{item.measure}}</div>
                <div>操作人：{{item.userName}}</div>
              </div>
              <div style="width:100%;height:.5rem;display:flex;justify-content: space-between;align-items:center;">
                <div style="margin-left:.4rem;">{{item.diagName}}</div>
              </div>
              <div style="width:100%;margin-top:0.1rem;display:flex;justify-content: space-between;align-items:center;">
                <div style="width:40%;display:flex;justify-content: space-between;">
                  <div :class="{ 'mainclass-left':true, 'zhu':zhu(item.mainState),'yi':yi(item.mainState)}">{{item.mainState}}</div>
                  <div :class="{ 'mainclass-right':true, 'zhu':zhu(item.subState),'zf':zf(item.subState)}">{{item.subState}}</div>
                </div>
                <div style="width:20%"></div>
                <div style="width:40%;">
                  {{item.createTime}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="current==2">

        </div>
      </div>
    </template>
  </ZKPage>
</template>

<script>
import NavBar from "@/components/common/nav-bar";
import ZKPage from "@/components/common/zk-page";
import { getMobileDoctor } from "@/service/doctor.js";
export default {
  name: "home",
  data() {
    return {
      current: 1,
      List: [],
      items: [
        { name: 1, label: "诊断录入" },
        { name: 2, label: "检验报告" },
        { name: 3, label: "院内会议" },
        { name: 4, label: "体检报告" },
        { name: 5, label: "体温单" },
        { name: 6, label: "院内会诊" },
        { name: 7, label: "手术申请单" },
        { name: 8, label: "病例" }
      ]
    };
  },
  filters: {
    mainState(value) {
      console.log(value);
    }
  },
  computed: {},
  components: {
    ZKPage,
    NavBar
  },
  mounted() {
    getMobileDoctor({ uri: "/restapi/v1/patient/diagentry" }).then(res => {
      console.log(res, "this is res");
      this.List = res.data;
    });
  },
  watch: {},

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
<style lang='scss'>
.a {
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
.mainclass-left {
  margin-left: 0.4rem;
  width: 0.5rem;
  height: 0.6rem;
  // background-color:rgb(0,191,191);
  text-align: center;
  padding-top: 0.2rem;
  border-radius: 10px;
}
.mainclass-right {
  width: 1rem;
  height: 0.6rem;
  // background-color:rgb(0,191,191);
  text-align: center;
  padding-top: 0.2rem;
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
</style>
