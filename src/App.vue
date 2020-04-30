<template>
  <div class="app" id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- tabbar -->
<!--    <TabBar></TabBar>-->
  </div>
</template>
<script>
import TabBar from '@/components/TabBar'

export default {
  name: 'App',
  components: {
    TabBar
  },
  methods: {
    getQueryVariable(variable) {
      console.log(this.$store,"this.$store");
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    },
  },
  created() {
    let patId = this.getQueryVariable("patId");
    console.log(patId,"tasd");
      if(patId){
        this.$store.commit("SET_PAT_ID",patId);
      }else{
        console.log(123)
      }
    }
}
</script>
<style lang="scss"></style>
