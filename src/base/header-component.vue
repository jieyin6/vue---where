<template>
  <div class="header-component">
      <div class="header" v-if='!show' :style="opacityStyle">
        <i class="iconfont icon-fanhui" @click="back"></i>
        <span>{{title}}</span>
      </div>
      <div class="icon-back" @click="back" v-if='show'>
        <i class="iconfont icon-fanhui"></i>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      top: '',
      show: true,
      opacityStyle: {
          opacity: 1
      }
    }
  },
  activated () {
    console.log(111)
    window.addEventListener('scroll', this.scrollEvent)
  },
  methods: {
    scrollEvent () {
      this.top = document.documentElement.scrollTop
      console.log(this.top)
    },
    back () {
      this.$router.back()
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
  z-index: 98;
  .header{
    height: 88px;
    line-height: 88px;
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
  .icon-back{
    box-sizing: border-box;
    width: 72px;
    height: 72px;
    line-height: 72px;
    padding-left: 15px;
    margin: 20px 0 0 20px;
    border-radius: 36px;
    background-color: #000;
    opacity: .5;
    .iconfont{
      font-size: 36px;
      color: #fff;
      font-weight: 800;
        }
    }
}

</style>
