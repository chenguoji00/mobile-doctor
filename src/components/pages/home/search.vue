<template>
  <ZKPage :footer="false" :header="true">
    <template slot="header">
      <div class="top-bar">
        <div class="md-icon-return backicon" @click="goToPage()"></div>

        <div class="search-wrapper">
          <div class="search-box">
            <div class="icon md-icon-search"></div>
            <input class="text" type="text" v-model="inputText" placeholder="搜索疾病 /科室 /医生" />
            <div v-show="inputText!=''" class="clear md-icon-delete" @click="clearText()"></div>
          </div>
        </div>

        <div class="searchicon" @click="doSearch()">搜索</div>
      </div>
    </template>

    <div slot="container" class="home-centent">
      <div class="hisitory" v-if=" inputText==''">
        <div class="title">历史搜索</div>
        <div class="search-item">
          <div @click="hisitorySearch(i)" class="item" v-for="i in searchitemList" :key="i">{{i}}</div>
        </div>

        <div class="btn">
          <md-button class="clearbtn" size="small" plain round icon="delete" inline>清除历史记录</md-button>
        </div>
      </div>

      <template v-if="list.length>0 && inputText!=''">
        <div class="rec-doctor-title" v-sticky="{ zIndex: 1,stickyTop: -1,  disabled: false}">
          <span class="name">推荐医生</span>
        </div>

        <div
          class="dt-it"
          v-for="(i,k) in list"
          :key="k"
          @click="goToPage('doctorDetail',{doctorId:i.doctorId})"
        >
          <img v-real-img="i.doctorPic" :src="defaultDoctorImg(i.userInfo.sex)" alt />
          <div class="ct">
            <div class="info">
              <span class="dtname">{{i.userInfo!=null ?i.userInfo.nickName:''}}</span>
              {{i.level}}
              <span
                style="color:#3d91fe;background-color: #e8f0fe;padding: 2px;"
              >可挂号</span>
            </div>
            <div class="dept">{{i.hospitalName}} {{i.deptName}}</div>
            <div class="specialty">擅长：{{i.specialty}}</div>
          </div>
        </div>
      </template>
    </div>
  </ZKPage>
</template>



<script>
import VueSticky from "vue-sticky";
import ZKPage from "@/components/common/zk-page";
import { bannerList } from "@/service/home.js";
import { searchDoctors } from "@/service/doctor.js";
export default {
  directives: {
    sticky: VueSticky
  },
  data() {
    return {
      inputText: "",
      searchitemList: ["高血压", "普通妇科", "小儿消化"],
      list: []
    };
  },
  components: {
    ZKPage
  },
  mounted() {},

  methods: {
    hisitorySearch(i) {
      this.inputText = i;
      this.doSearch();
    },
    clearText() {
      this.list = [];
      this.inputText = "";
    },
    doSearch() {
      if (this.inputText == "") {
        this.$toast.failed("请输入搜索内容");
        return;
      }
      searchDoctors({ keyword: this.inputText }).then(res => {
        if (res.code == 200 && res.data != null) {
          this.list = res.data;
        }
      });
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
  .hisitory {
    width: 100%;
    height: 90px;
    line-height: 90px;
    .title {
      color: $textColor;
      margin-left: 20px;
      font-size: 30px;
    }
    .search-item {
      width: 100%;
      height: auto;
      padding: 20px;
      .item {
        color: $textColor;
        float: left;
        height: 0.5rem;
        line-height: 0.5rem;
        margin: 0 0.27rem 0.27rem 0;
        padding: 0 0.27rem;
        font-size: 0.27rem;
        min-width: 0.826667rem;
        border-radius: 0.05rem;
        background: #f5f5f5;
      }
    }
    .btn {
      font-size: 0.27rem;
      color: $textColor;
      margin-top: 100px;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      .clearbtn {
        width: 400px;
      }
    }
  }

  .rec-doctor-title {
    margin-top: 0px;
    background-color: #fff;
    width: 100%;
    height: 90px;
    line-height: 90px;
    color: #000000;
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
