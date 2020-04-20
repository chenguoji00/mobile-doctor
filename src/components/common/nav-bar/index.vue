<template>
  <div class="nut-navbar" v-bind:style="{ backgroundColor: bgColor,color:color}">
    <div class="nav-left" @click="cLeft">
      <span :class="leftShow" v-show="leftShow !=''"></span>
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <h3 class="nav-title" v-show="title !=''">
        <span v-show="title">{{title}}</span>
      </h3>
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
  height: 100px;
  z-index: 99999;
  position: relative;
  border-bottom:  solid #f7f7f7 1px;

  .nav-left {
    position: absolute;
    top: 0px;
    left: 30px;
    height: 100px;
    line-height: 100px;
    span {
      font-size: 60px;
    }
  }

  .nav-center {
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    line-height: 100px;
    span {
      font-size: 32px;
    }
  }

  .nav-right {
    position: absolute;
    top: 0px;
    right: 30px;
    height: 100px;
    line-height: 100px;
    span {
      font-size: 60px;
    }
  }
}
</style>