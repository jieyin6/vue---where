<template>
  <div class="index-footer">
     <ul class="product-container">
       <li>
          <i></i>
          <span>机票</span> 
        </li>
        <li>
          <i></i>
          <span>酒店</span> 
        </li>
        <li>
          <i></i>
          <span>公寓</span>
        </li> 
        <li>
          <i></i>
          <span>团购</span> 
        </li>
        <li>
          <i></i>
          <span>火车票</span>  
        </li> 
        <li>
          <i></i>
          <span>景点</span> 
        </li> 
        <li>
          <i></i>
          <span>接送机</span> 
        </li>
        <li>
          <i></i>
          <span>度假</span> 
        </li>
        <li class="toggle">更多</li>
     </ul>
     <div class="link-container">
         <router-link to='/'>登录</router-link>
         <router-link to='/'>我的订单</router-link>
         <router-link to='/'>最近浏览</router-link>
         <router-link to='/'>关于我们</router-link>
    </div>
    <div class="footer">
        <ul>
            <li class="active">触屏版</li>
            <li>电脑版</li>
        </ul>
        <span>Qunar 京ICP备05021087意见反馈</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.index-footer{
    overflow: hidden;
    .product-container{
        margin: 0 94px;
        padding: 20px 20px 0 20px;
        position: relative;
        overflow: hidden;
        li{
            float: left;
            width: 25%;
            height: 62px;
            line-height: 62px;
            font-size: 12px;
            color: #9e9e9e;
        }
        .toggle{
            position: absolute;
            top: 97px;
            right: 6px;
        }
    }
    .link-container{
        width: 100%;
        height: 78px;
        line-height: 78px;
        border-bottom: 1px solid #cacaca;
        a{
          float: left;
          padding-left: 40px;
          color: #00afc7;
        }
    }
    .footer{
        padding-top: 20px;
        ul{
            height: 28px;
            line-height: 28px;
            li{
                box-sizing: border-box;
                float: left;
                width: 50%;
                font-size: 14px;
                color: #00afc7;
                &:nth-of-type(1){
                   padding-right: 30px;
                    text-align: right;
                }
                &:nth-of-type(2){
                    padding-left: 30px;
                    text-align: left;
                }
            }
            .active{
                color: #000;
            }
        }
        span{
            display: block;
            padding: 20px;
            font-size: 14px;
            color: #9e9e9e;
            text-align: center;
        }
    }
}
</style>
