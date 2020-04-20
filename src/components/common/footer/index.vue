<template>
  <div class="fnvbar">
    <div class="custom-item" @click="changeIndex(i.name)" :key="k" v-for="(i,k) in items">
      <md-icon class="icon" :class="{'activeColor':active==i.name}" :name="i.icon" />
      <span class="text" :class="{'activeColor':active==i.name}" v-text="i.label"></span>
      <div v-if="i.name=='message' && hasNewMsg " class="dot"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  props: {
    nowIndex: {
      type: String,
      default: "home"
    }
  },
  computed: {
    ...mapState({
      contacts: state => state.contacts
    }),
    hasNewMsg() {
      let list = this.contacts;
      for (let i = 0; i < list.length; i++) {
        if (list[i].unRead > 0) {
          return true;
        }
      }
      return false;
    }
  },
  methods: {
    changeIndex(name) {
      this.goToPage(name);
    }
  },
  data() {
    return {
      active: this.nowIndex,
      items: [
        { name: "home", label: "首页", icon: "homepage", path: "/" },
        { name: "message", label: "问诊", icon: "activity", path: "/message" },
        // { name: "doctor", label: "医生", icon: "doctor", path: "/doctor" },
        // { name: "shop", label: "商城", icon: "shop_fill", path: "" },
        { name: "member", label: "我的", icon: "mine", path: "/member" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.fnvbar {
  border-top: solid #f7f7f7 1px;
  color: #6e6b6b;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;


  .activeColor {
    color: #3d99fe;
  }

  .custom-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80px;
    flex: 1;
    .dot {
      position: absolute;
      right: 60px;
      top: 10px;
      width: 16px;
      height: 16px;
      background-color: #fe3d46;
      border-radius: 8px;
      overflow: hidden;
    }

    .icon {
      font-size: 45px;
    }

    .text {
      font-size: 26px;
    }
  }
}
</style>

