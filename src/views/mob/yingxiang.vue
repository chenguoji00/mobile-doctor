

<!-- 检验报告查看 -->
<template>
  <ZKPage :header="true"
          :container="true"
  >
    <template slot="header">
      <NavBar title=""
              bgColor="rgb(0,121,254)"
              @onClickLeft="goToPage()"
              left-arrow />
    </template>
    <template slot="container">
      <iframe  name = "child" id = "child" src="http://rcp.phd91.com/cloudpacs/dispRender?studyid=4"
               width="100%" height="100%"
               frameborder="0" scrolling="no"
      ></iframe>
    </template>

  </ZKPage>
</template>

<script>
  import NavBar from "@/components/common/nav-bar";
  import ZKPage from "@/components/common/zk-page";
  export default {
    components: {
      NavBar,
      ZKPage
    },
    data() {
      return {
        reportObj:{

        },
        patientData:[]
      };
    },
    computed: {},
    watch: {},
    created() {

    },
    mounted() {},
    methods: {
      goToPage(){
        this.$router.go(-1)
      }
    }

  };
</script>
<style scoped lang="scss">

</style>
