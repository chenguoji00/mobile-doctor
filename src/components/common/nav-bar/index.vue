<template>
  <div class="nut-navbar" v-bind:style="{ backgroundColor: bgColor,color:color}">
    <div class="nav-left" @click="cLeft">
<!--      <span  v-show="leftShow !=''">-->
        <img src="../../../assets/back.svg" style="width: 30px;height:30px;" />
<!--      </span>-->
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <div class="nav-title" v-show="title !=''">
        <span v-show="title">{{title}}</span>
      </div>
      <slot name="center"></slot>
    </div>
    <div class="nav-right" @click="cRight">
      <span :class="rightShow" v-show="rightShow !=''"></span>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    leftShow: {
      type: String,
      default: "md-icon-return"
    },
    rightShow: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {};
  },
  methods: {
    cRight() {
      this.$emit("onClickRight");
    },
    cLeft() {
      this.$emit("onClickLeft");
    }
  }
};
</script>
<style lang='scss' scoped>
.nut-navbar {
  height: 1.5rem;
  z-index: 99999;
  position: relative;
  border-bottom:  solid #f7f7f7 1px;

  .nav-left {
    position: absolute;
    top: .25rem;
    left: 30px;
    height: 1.5rem;
    line-height: 1.5rem;
    span {
      font-size: .5rem;
    }
  }

  .nav-center {
    width: auto;
    overflow: hidden;
    text-align: center;
    line-height: 1.5rem;
    .nav-title{
      span {
        font-size: .5rem;
      }
    }

  }

  .nav-right {
    position: absolute;
    top: 0px;
    right: 30px;
    height: 1.5rem;
    line-height: 1.5rem;
    span {
      font-size: 1.5rem;
    }
  }
}
</style>
