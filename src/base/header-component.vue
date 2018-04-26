<template>
  <div class="header-component">
      <i class="iconfont icon-fanhui"></i>
      <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss'>
.header-component{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 88px;
    line-height: 88px;
    z-index: 98;
    font-size: 32px;
    color: #fff;
    text-align: center;
    background-color: #00bcd4;
    .iconfont{
      float: left;
      margin-left: 20px;
      font-size: 32px;
    }
}

</style>
