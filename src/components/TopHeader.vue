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
        <div class="city-select">
            <span class="city-name">北京</span>
            <i class="iconfont icon-jiantou"></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {

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
        max-width: 188px;
        min-width: 136px;
        height: 88px;
        line-height: 88px;
        .city-select{
            padding: 0 22px;
            .city-name{
                font-size: 25px;
            }
        }
    }
}
</style>
