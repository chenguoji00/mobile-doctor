<template>
  <div id="app"  class="animated fadeIn">
    <navigation>
      <router-view></router-view>
    </navigation>
  </div>
</template>

<script>
import { NoticeBar, Dialog, Toast } from "mand-mobile";
import { mapState, mapGetters, mapActions } from "vuex";
import { updateReadNum } from "@/service/chat.js";
import * as types from "store/mutation-types";
import * as constants from "src/AppConstants";
import { userInfoByopenId ,msgDoctor} from "@/service/member.js";
import { getTokenByOpenId } from "@/service/login.js";
import { getNoticeBar ,upVisits} from "@/service/home.js";
import fixedInput from "@/utils/fixedInput";

export default {
  name: "App",
  mixins: [fixedInput],
  data() {
    return {
      isok: false,
      transitionName: "",
      noticeBar:null
    };
  },
  computed: {
    ...mapState({
      chatWith: state => state.chatWith,
      contacts: state => state.contacts
    })
  },
  created() {
    
  },
  mounted() {
    
  },
  updated() {
    
  },


  destroyed() {
    
  },
  methods: {
    
    },
    initNoticeBar(){
      
    },
    init() {
      // this.$store.commit(types.UPDATE_NETLOADING, false);
      // setTimeout(() => {
      //   document.getElementById("loading").style.animation = "narrow 0.5s";
      // }, 500);
      // setTimeout(() => {
      //   document.body.removeChild(document.getElementById("loading"));
      //   this.isok = true;
      // }, 500);
    // }
  }
};
</script>
<style lang="scss">
.md-tab-bar {
  background-color: #fff;
}

.hide {
  visibility: hidden;
}
</style>
