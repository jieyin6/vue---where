<template>
  <div class="detail-component" ref="detail">
    <div>
        <div class="detail-header">
          <div class="icon-back" @click="back">
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
            <ul v-for="(group,index) in newDetail.categoryList" :key="index" class="tickets">
                <li>
                  <h2>{{group.title}}</h2>
                  <ul v-if='group.children' v-for="(item,index) in group.children" :key="index" class="tickets-detail">
                    <li @click="showSeller">
                      <h3>{{item.title}}</h3>
                      <ul ref="sellerDetail" class="seller-detail" v-for="(seller,index) in item.children" :key="index">
                          <li>{{seller.title}}</li>
                      </ul>
                    </li>
                  </ul>
                </li>
            </ul>
        </div>
        <div class="img-box" v-show="imgShow">
          <div class="img-header">
            <i class="iconfont icon-fanhui" @click="imgShow = false"></i>
            <span>景区图片</span>
          </div>
          <ul>
            <li v-for="(img,index) in newDetail.gallaryImgs" :key="index" @click="imgContainerShow = true">
                <img :src="img" />
            </li>
         </ul>
         <img-container :imgs='newDetail.gallaryImgs' v-show="imgContainerShow" @back='backEvent'></img-container>
      </div>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
import imgContainer from '../base/img-container'
export default {
  components: {
    imgContainer
  },
  data () {
    return {
      details: [],
      sellerShow: false,
      imgShow: false,
      imgContainerShow: false
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
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.detail, {
        scrollY: true,
        click: true
      })
    })
  },
  methods: {
    back () {
      this.$router.back()
    },
    showSeller () {
      console.log(this.$refs.sellerDetail)
      this.$refs.sellerDetail.style.visibility = ''
    },
    backEvent () {
      this.imgContainerShow = false
    }
  }
}
</script>

<style lang='scss'>
.detail-component{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  }
}
</style>
