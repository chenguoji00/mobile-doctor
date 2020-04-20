<template>
  <ZKPage :footer="false" :header="true" :isShowLoad="false">
    <template slot="header">
      <div class="top-bar">
        <div class="md-icon-return backicon" @click="goToPage()"></div>

        <div class="search-wrapper" @click="goToPage('search')">
          <div class="search-box">
            <div class="icon md-icon-search"></div>
            <input class="text" type="text" placeholder="搜索疾病 /科室 /医生" />
          </div>
        </div>

        <div class="searchicon" @click="goToPage('search')">搜索</div>
      </div>
    </template>

    <div slot="container" class="home-centent">
      <div class="dp-list">
        <div class="row">
          <img
            @click="goToPage('finddoctor',{deptId:66867,deptname:'耳鼻喉科'})"
            class="dp-it"
            src="~/images/dp-ebh.09e384e.png"
            alt
          />
          <img
            @click="goToPage('finddoctor',{deptId:66601,deptname:'儿科'})"
            class="dp-it"
            src="~/images/dp-er.2a1ab99.png"
            alt
          />
          <img
            @click="goToPage('finddoctor',{deptId:66602,deptname:'妇科'})"
            class="dp-it"
            src="~/images/dp-fu.482fbbb.png"
            alt
          />
          <img
            @click="goToPage('finddoctor',{deptId:66871,deptname:'中医科'})"
            class="dp-it"
            src="~/images/dp-zhongyi.0dcc2c9.png"
            alt
          />
        </div>

        <div class="row">
          <img
            @click="goToPage('finddoctor',{deptId:66857,deptname:'外科'})"
            class="dp-it"
            src="~/images/dp-wai.ae6c1d8.png"
            alt
          />
          <img
            @click="goToPage('finddoctor',{deptId:66853,deptname:'皮肤科'})"
            class="dp-it"
            src="~/images/dp-pifu.4e9b2bb.png"
            alt
          />
          <img
            @click="goToPage('finddoctor',{deptId:66853,deptname:'内科'})"
            class="dp-it"
            src="~/images/dp-nei.2f76a59.png"
            alt
          />
          <img @click="goToPage('doctor')" class="dp-it" src="~/images/dp-more.5f2631b.png" alt />
        </div>
      </div>

      <div class="rec-doctor-title" v-sticky="{ zIndex: 1,stickyTop: -1,  disabled: false}">
        <span class="name">推荐医生</span>
      </div>

      <template v-if="loadDt">
        <md-skeleton v-for="(i,k) in 3" :key="k" avatar title></md-skeleton>
      </template>

      <div
        v-else
        class="dt-it"
        v-for="(i,k) in recDoctorList"
        :key="k"
        @click="goToPage('doctorDetail',{doctorId:i.doctorId})"
      >
        <img v-real-img="i.doctorPic" :src="defaultDoctorImg(i.sex)" alt />
        <div class="ct">
          <div class="info">
            <span class="dtname">{{i.doctorName}}</span>
            {{i.level}}
            <span
              style="color:#3d91fe;background-color: #e8f0fe;padding: 2px;"
            >可挂号</span>
          </div>
          <div class="dept">{{i.hospitalName}} {{i.deptName}}</div>
          <div class="specialty">擅长：{{i.specialty}}</div>
        </div>
      </div>
    </div>
  </ZKPage>
</template>

<script>

import ZKPage from "@/components/common/zk-page";
import { bannerList } from "@/service/home.js";
import { recDoctorList } from "@/service/doctor.js";
export default {

  data() {
    return {
      loadDt: true,
      recDoctorList: [],
      isFinished: false
    };
  },
  components: {
    ZKPage
  },
  mounted() {
    recDoctorList().then(res => {
      if (res.code == 200 && res.data != null) {
        this.loadDt = false;
        this.recDoctorList = res.data;
      }
    });
  },

  methods: {
    $_onEndReached() {
      if (this.isFinished) {
        return;
      }
      // async data
      setTimeout(() => {
        this.list += 5;
        if (this.list >= 20) {
          this.isFinished = true;
        }
        this.$refs.scrollView.finishLoadMore();
      }, 1000);
    },
    doSearch() {
      this.$router.push("/finddoctor?deptId=66743&deptname=内一科");
    },
    doConsultation() {
      this.$router.push("/finddoctor?deptId=66743&deptname=内一科");
    }
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/common.scss";
@import "@/assets/css/doctorlist.scss";

.top-bar {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #fff;
  .backicon {
    text-align: center;
    min-width: 100px;
    font-size: 50px;
  }

  .searchicon {
    min-width: 100px;
    text-align: center;
    margin-right: 10px;
    font-size: 0.3rem;
  }
  .search-wrapper {
    width: 90%;
    height: 100px;
    padding: 20px 0px 20px 0px;
    border: 0px;
    flex-grow: 1;

    .search-box {
      color: $textColor;
      overflow: hidden;
      width: 100%;
      height: 60px;
      background-color: #f5f5f5;
      border-radius: 30px;
      line-height: 60px;
      text-align: center;
      position: relative;
      display: flex;
      align-items: center;
      .icon {
        position: absolute;
        left: 20px;
        top: 0px;
        font-size: 40px;
        font-weight: bolder;
        display: block;
        text-align: center;
        color: $themeColor;
        width: 50px;
        height: 100%;
        font-weight: bolder;
        float: left;
      }
      .text {
        width: 75%;
        height: 90%;
        margin-left: 70px;
        border: 0px;
        background-color: #f5f5f5;
      }
      .clear {
        color: $themeColor;
        position: absolute;
        right: 20px;
        top: 0px;
        font-size: 40px;
        font-weight: bolder;
        display: block;
        text-align: center;
        width: 50px;
        height: 100%;
        font-weight: bolder;
        float: left;
      }
    }
  }
}

.home-centent {
  padding: 0px;
  border: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  background-color: #fff;
  .dp-list {
    background-color: #fff;
    width: 100%;
    height: auto;
    .row {
      display: flex;
      width: 100%;
      justify-content: space-around;

      .dp-it {
        width: 160px;
        height: 160px;
      }
    }
  }

  .md-skeleton {
    margin-top: 20px;
  }
  .rec-doctor-title {
    margin-top: 0px;
    background-color: #fff;
    width: 100%;
    height: 90px;
    line-height: 90px;
    color: $textColor;
    display: flex;
    justify-content: space-between;
    .name {
      margin-left: 20px;
      font-size: 32px;
    }
    .iocn {
      margin-right: 20px;
      font-size: 50px;
    }
  }
}
</style>
