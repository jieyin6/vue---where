<template>
  <div class="detail-component">
    <div>
        <div class="detail-header">
          <div class="icon-back" @click="back">
              <i class="iconfont icon-fanhui"></i>
          </div>
          <img :src="newDetail.bannerImg" />
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      details: [],
      sellerShow: false
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
  methods: {
    back () {
      this.$router.back()
    },
    showSeller () {
      console.log(this.$refs.sellerDetail)
      this.$refs.sellerDetail.style.visibility = ''
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
  }
}
</style>
