<!-- 病历报告 -->
<template>
  <div class='medicalDetail'>
    <ZKPage :header="true"
            :container="true">
      <template slot="header">
        <NavBar title=""
                bgColor="rgb(0,121,254)"
                @onClickLeft="goToPage()"
                left-arrow />
      </template>
      <template slot="container">
        <img :src="imagePath" style="width: 100%;height:100%;"/>
      </template>
    </ZKPage>
  </div>
</template>

<script>
  import NavBar from "@/components/common/nav-bar";
  import ZKPage from "@/components/common/zk-page";
  export default {
    components: {NavBar,ZKPage},
    data() {
      return {
        imagePath:'',
      };
    },
    computed: {

    },
    watch: {},
    created() {
      this.imagePath = this.$route.query.imagePath;
    },
    mounted() {},
    methods: {
      goToPage(){
        this.$router.go(-1)
      }
    }
  };
</script>
<style lang="scss" scoped>

</style>
