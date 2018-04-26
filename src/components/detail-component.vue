<template>
  <div class="detail-component" ref="detail">
    <div>
        <div class="detail-header" v-if='!imgContainerShow'>
          <div class="icon-back" @click="back" v-if='iconShow'>
              <i class="iconfont icon-fanhui"></i>
          </div>
          <img :src="newDetail.bannerImg" @click="imgShow=true" />
          <div class="sight-name">{{ newDetail.sightName}}</div>
        </div>
        <div class="tickets-container">
            <ul class="tickets-nav">
                <li class="active">门票</li>
                <li>一日游</li>
                <li>热销组合</li>
            </ul>
            <menu-tree :list='newDetail.categoryList'></menu-tree>
        </div>
        <div class="img-box" v-if="imgShow">
          <div class="img-header">
            <i class="iconfont icon-fanhui" @click="imgShowEvent"></i>
            <span>景区图片</span>
          </div>
          <ul>
            <li v-for="(img,index) in newDetail.gallaryImgs" :key="index" @click="imgContainerShowEvent">
                <img :src="img" />
            </li>
         </ul>
        </div>
        <header-component :style="opacityStyle" :title="newDetail.sightName" v-if='headerShow'></header-component>
        <div class="blank">aaaaaaaaaaaaaaa</div>
      </div>
      <div class="background" v-if="imgContainerShow" @click="imgContainerShowEvent">
        <img-container :imgs='newDetail.gallaryImgs' ></img-container>
      </div>
  </div>
</template>

<script>
// import Bscroll from 'better-scroll'
import imgContainer from '../base/img-container'
import menuTree from '../base/menu-tree'
import headerComponent from '../base/header-component'
export default {
  components: {
    imgContainer,
    menuTree,
    headerComponent
  },
  data () {
    return {
      details: [],
      sellerShow: false,
      imgShow: false,
      imgContainerShow: false,
      headerShow: false,
      iconShow: true,
      opacityStyle: {
          opacity: 0
      },
      top: 0
    }
  },
  computed: {
    newDetail () {
      let obj = {}
      this.details.forEach(item => {
        obj = item
      })
      obj = obj.data
      return obj
    }
  },
  created () {
    let _this = this
    this.$http.get('/api').then(res => {
      if (res.status === 200) {
        _this.details = res.data.detail
      }
    })
  },
 /* mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.detail, {
        scrollY: true,
        click: true
      })
    })
  },*/
  activated () {
    window.addEventListener('scroll', () => {
      this.top = document.documentElement.scrollTop
    })
  },
  deactivated () {
    console.log(111)
    window.removeEventListener('scroll')
  },
  methods: {
    back () {
      this.$router.back()
    },
    backEvent () {
      this.imgContainerShow = false
    },
    imgShowEvent () {
      this.imgShow = false
    },
    imgContainerShowEvent () {
      this.imgContainerShow = !this.imgContainerShow
    }
  },
  watch: {
    top (oldVal,newVal) {
      if (newVal === 0) {
        this.opacityStyle.opacity = 0
        this.headerShow = false
        this.iconShow = true
      } else if (newVal < 41) {
        if (newVal < oldVal) {
          this.iconShow = false
        } else {
          this.iconShow = true 
        }
      } else if (newVal > 41 && newVal < 183) {
        let num = this.opacityStyle.opacity
        if (newVal < oldVal) {
          this.opacityStyle.opacity = num >= 1 ? 1 : num + 0.01
        } else {
          this.opacityStyle.opacity = num <= 0 ? 0 : num - 0.01
        }
        this.headerShow = true
      } 
    } 
      
  }
}
</script>

<style lang='scss'>
.detail-component{
  div{
      .detail-header{
          width: 100%;
          height: 456px;
          position: relative;
          .icon-back{
            position: absolute;
            top: 10px;
            left: 10px;
            box-sizing: border-box;
            width: 72px;
            height: 72px;
            line-height: 72px;
            padding-left: 15px;
            border-radius: 36px;
            background-color: #000;
            opacity: .5;
            .iconfont{
              font-size: 36px;
              color: #fff;
              font-weight: 800;
            }
          }
          img{
              width: 100%;
              height: 100%;
          }
          .sight-name{
             position: absolute;
             bottom: 36px;
             left: 20px;
             height: 40px;
             line-height: 40px;
             font-size: 36px;
             color: #fff;
          }
      }
      .tickets-container{
        .tickets-nav{
          display: flex;
          justify-content: space-around;
          background-color: #fff;
          li{
              width: 140px;
              height: 92px;
              line-height: 92px;
              font-size: 32px;
              text-align: center;
            }
          .active{
            border-bottom: 1px solid #00bcd4;
          }
        }
        .tickets{
            margin-bottom: 20px;
            background-color: #fff;
            li{
                h2{
                    padding: 0 20px;
                    height: 88px;
                    line-height: 88px;
                    color: #333;
                    font-size: 32px;
                }
                .tickets-detail{
                    li{
                        margin-bottom: -1px;
                        padding: 24px 20px;
                        height: 96px;
                        line-height: 96px;
                        border-bottom: 1px solid #eee;
                        font-size: 30px;
                        .seller-detail{
                          visibility: hidden;
                          li{
                              height: 84px;
                              line-height: 84px;
                              padding: 25px;
                              font-size: 24px;
                          }
                        }
                    }
                }
            }
        }
      }
      .img-box{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        .img-header{
            position: fixed;
            z-index: 100;
            height: 88px;
            line-height: 88px;
            width: 100%;
            background-color: #fff;
            border-bottom: 1px solid #e0e0e0;
            text-align: center;
            font-size: 32px;
            .iconfont{
                float: left;
                margin-left: 20px;
                font-size: 32px;
            }
        }
        ul{
           position: absolute;
           top: 88px;
           left: 0;
           right: 0;
           bottom: 0;
           background-color: #eee;
           padding: 20px 20px 40px 20px;
          li{
              float: left;
              box-sizing: border-box;
              width: 50%;
              height: 266px;
              padding-right: 10px;
              margin-bottom: 10px;
              &:nth-of-type(2n){
                padding-left: 10px;
                padding-right: 0;
              }
              img{
                width: 100%;
                height: 100%;
              }
          }
        }
    }
    .blank{
        height: 600px;
        line-height: 600px;
        width: 100%;
    }
  }
  .background{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 199;
    background-color: #000;
  }
}
</style>
