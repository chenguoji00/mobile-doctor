<template>
  <div class="cube-page">
    <header class="header" v-show="header">
      <slot name="header"></slot>
    </header>

    <main refs="scrollView" class="page-container">
      <slot name="container"></slot>
    </main>

    <footer class="footer" v-show="footer">
      <slot name="footer"></slot>
    </footer>

    <div v-if="netloading && isShowLoad" class="loading">
      <md-activity-indicator style="z-index: 90000;" type="carousel" :size="15"></md-activity-indicator>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import BScroll from "better-scroll";
export default {
  data() {
    return {};
  },
  props: {
    header: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    },
    isShowLoad: {
      type: Boolean,
      default: true
    }
  },
  created(){},
  // components: {
  //   BScroll,
  // },
  methods: {
    // _initScroll() {
    //   this.scrollView = new BScroll(this.$refs.scrollView, {
    //     click: true //结合BScroll的接口使用,是否将click事件传递,默认被拦截了
    //   });
    // },
  }
};
</script>

<style lang="scss"  scoped>
.cube-page {
  position: absolute;

  z-index: 10;
  top: 0;
  left: 0;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  display: flex;
  display: -webkit-flex;

  flex-direction: column;
  .header {
    padding: 0px;
    background-color: rgb(0,121,254);
    margin: 0px;
    width: 100%;
    border: 0;
  }
  .page-container {
    background-color: #f9f9f9;
    padding: 0px;
    margin: 0px;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    border: 0;
  }

  .footer {
    border: 0;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: auto;
  }
}

.loading {
  text-align: center;
  position: fixed;
  z-index: 900;
  line-height: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  color: #3b78a6;
  // justify-content:center;
  flex-direction: column;
  align-items: center;
  .md-activity-indicator {
    width: auto;
    height: auto;
    margin-top: 500px;
    text-align: center;
    order: 1;
  }
}
</style>