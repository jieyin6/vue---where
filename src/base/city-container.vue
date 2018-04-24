<template>
  <div class="city-container" >
      <h2>{{title}}</h2>
      <ul>
          <li v-for="(city,index) in cities" :key="index">{{city}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    cities: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.city-container{
  h2{
    font-size: 24px;
    margin: 24px 30px;  
  }
  ul{
      overflow: hidden;
      background: #fff;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        width: 25%;
        left: 25%;
        height: 100%;
        border-left:1px solid #ddd;
        border-right: 1px solid #ddd; 
      }
      &::after{
        content: '';
        position: absolute;
        right: 25%;
        width: 25%;
        height: 100%;
        border-right: 1px solid #ddd;
      }
      li{
        float: left;
        width: 25%;
        height: 90px;
        border-bottom: 1px solid #ddd;
        line-height: 90px;
        text-align: center;
        font-size: 28px;
        color: #212121;
      }
  }
}

</style>
