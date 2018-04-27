<template>
  <div class="top-header">
    <div class="left">
        <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="center-container">
        <i class="iconfont icon-sousuo"></i>
        <span class="center-text">输入城市/景点/游玩主题</span>
    </div>
    <div class="right-container">
        <router-link class="city-select" to='/city'>
            <span class="city-name">{{city}}</span>
            <i class="iconfont icon-jiantou"></i>
        </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'city'
    ])
  }
}
</script>

<style lang='scss' scoped>
.top-header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 88px;
    background-color: #00bcd4;
    text-align: center;
    color: #fff;
    .left{
        width: 40px;
        padding: 0 20px;
        line-height: 88px;
        .iconfont{
            font-size: 30px;
            font-weight: 800;
        }
    }
    .center-container{
        box-sizing: border-box;
        margin: 14px 0;
        width: 100%;
        height: 60px;
        background-color: #fff;
        line-height: 60px;
        border-radius: 10px;
        position: relative;
        .iconfont{
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-30px);
            color: #e4e7ea;
            font-size: 35px;
        }
         .center-text{
            position: absolute;
            left: 65px;
            font-size: 25px;
            color: #e4e7ea;
        }
    }
    .right-container{
        min-width: 112px;
        height: 88px;
        line-height: 88px;
        padding: 0 10px;
        text-align: center;
        .city-select{
            color: #fff;
            .city-name{
                font-size: 25px;
            }
        }
    }
}
</style>
