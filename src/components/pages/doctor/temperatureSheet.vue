<!-- 体温单 -->
<template>
  <div class=''>
    <div class="temperature-top">
      <div @click="preClick" style="border-radius:30px;background-color:rgb(0,121,254);color:#fff;text-align:center;width:100px;height:30px;line-height:30px;">上一页</div>
      <div @click="nextClick" style="border-radius:30px;background-color:rgb(0,121,254);color:#fff;text-align:center;width:100px;height:30px;line-height:30px;">下一页</div>
    </div>
    <div style="width:100%;">
      <img :src="currentimg" style="width:100%;" alt="">
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
components: {},
  data() {
    return {
      currentimg:'',
      currentIndex:0,
      imageList:['http://hyjfile.qn.phd91.com/%E4%BD%93%E6%B8%A9%E5%8D%951.png','http://hyjfile.qn.phd91.com/%E4%BD%93%E6%B8%A9%E5%8D%952_%E9%A1%B5%E9%9D%A2_1.png','http://hyjfile.qn.phd91.com/%E4%BD%93%E6%B8%A9%E5%8D%952_%E9%A1%B5%E9%9D%A2_2.png','http://hyjfile.qn.phd91.com/%E4%BD%93%E6%B8%A9%E5%8D%953_%E9%A1%B5%E9%9D%A2_1.png','http://hyjfile.qn.phd91.com/%E4%BD%93%E6%B8%A9%E5%8D%953_%E9%A1%B5%E9%9D%A2_2.png']
    }
  },
//监听属性 类似于data概念
computed: {

},
//监控data中的数据变化
watch: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  this.currentimg = this.imageList[0];
  this.currentIndex = 0;
  console.log(this.currentimg,"this.currentimg");
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
methods: {
  preClick(){
    if(this.currentIndex>0){
      this.currentIndex--;
      this.currentimg = this.imageList[this.currentIndex];
    }
  },
  nextClick(){
    if(this.currentIndex<4){
      this.currentIndex++;
      this.currentimg = this.imageList[this.currentIndex];
    }
  }
},
}
</script>
<style scoped lang="scss">
  .temperature-top{
    width:100%;
    height:1rem;
    display: flex;
    position: fixed;
    top: 2rem;
    left: 0;
    z-index: 1000000;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
  }
</style>