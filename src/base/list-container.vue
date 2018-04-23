<template>
  <div class="list-container">
      <div class="title">
          <p class="left-title">
              <i></i>
              <span>{{leftTitle}}</span>
          </p>
          <p v-if="more" class="right-title">{{rightTitle}} &gt;</p>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    more: {
      type: Boolean,
      default: false
    },
    leftTitle: {
      type: String,
      default: ''
    },
    rightTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss'>
.list-container{
    background-color: #fff;
  .title{
      display: flex;
      justify-content: space-between;
      padding: 24px 20px 26px 20px;
      height: 44px;
      line-height: 44px;
      .left-title{
        color: #212121;
        font-size: 30px;
      }
      .right-title{
          color: #616161;
      }
  }
}
</style>
