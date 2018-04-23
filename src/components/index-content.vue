<template>
  <div class="index-container">
      <list-content :leftTitle='leftTitle' class="list-content">
          <ul>
              <li v-for="(item,index) in list" :key="index">
                <div class="item-container">
                 <img :src="item.url" />
                 <div class="item-content">
                     <h2>{{item.title}}</h2>
                     <p class="comment">{{item.comment}}条评论</p>
                     <div class="bottom-container">
                       <p class="price"><span>¥</span>{{item.num}}<span>起</span></p>
                       <p class="address">{{item.address}}</p>
                     </div>
                 </div>
                 </div>
              </li>
          </ul>
          <div class="all-product">查看所有产品</div>
      </list-content>
      <div class="weekend-container">
          <h2>周末去哪儿</h2>
          <ul>
              <li v-for="(weekend,index) in weekendList" :key="index">
                  <img :src="weekend.url"/>
                  <div class="weekend-content">
                    <h3>{{weekend.name}}</h3>
                    <p>{{weekend.desc}}</p>
                  </div>
              </li>
          </ul>
      </div>
      <div class="tips-container">
          <i></i>
          <span>票面价是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
      </div>
    </div>
</template>

<script>
import listContent from '../base/list-container'
export default {
  components: {
    listContent
  },
  data () {
    return {
      leftTitle: '猜你喜欢',
      list: [],
      weekendList: []
    }
  },
  created () {
    let _this = this
    this.$http.get('/api').then(res => {
      if (res.status === 200) {
        _this.list = res.data.recommend
        _this.weekendList = res.data.weekend
      }
    })
  }
}
</script>

<style lang='scss'>
 .index-container{
  .list-content{
      ul{
          margin-left: 24px;
          li{
              padding: 20px 0;
              position: relative;
              &::after{
                content: '';
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color:#eee;
              }
              .item-container{
                display: flex;
              img{
                height: 200px;
              }
              .item-content{
                  width: 100%;
                  padding:26px 24px  0 22px;
                  position: relative;
                  h2{
                      height: 44px;
                      line-height: 44px;
                      color: #212121;
                      font-size: 30px;
                  }
                  .comment{
                      margin-top: 14px;
                      height: 34px;
                      line-height: 34px;
                      color: #616161;
                      font-size: 24px;
                  }
                  .bottom-container{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 22px;
                    .price{
                      font-size: 40px;
                      color: #ff8300;
                      span:nth-of-type(1){
                        font-size: 24px;
                        color:#ff8300;
                      }
                      span:nth-of-type(2){
                        font-size: 24px;
                        color:#616161;
                    }
                  }
                  .address{
                      color: #616161;
                      font-size: 24px;
                      line-height: 46px;
                  }
                }
            }
         }
      }
  }
  .all-product{
     padding: 20px 0;
     color: #00afc7;
     height: 40px;
     line-height: 40px;
     text-align: center;
    }
  }
  .weekend-container{
    h2{
        font-size: 26px;
        height: 80px;
        line-height: 80px;
        padding-left: 26px;
    }
    ul{
        li{
            margin-bottom: 10px;
            background-color: #fff;
            img{
                width: 100%;
            }
            .weekend-content{
              padding: 14px 20px 20px 20px;
              text-align: left;
              h3{
                  height: 48px;
                  line-height: 48px;
                  font-size: 26px;
                  color: #212121;
                  white-space: nowrap;
                  text-overflow: ellipsis;
              }
              p{
                  height: 42px;
                  line-height: 42px;
                  font-size: 24px;
                  color: #616161;
                  white-space: nowrap;
                  text-overflow: ellipsis;
              }
            }
        }
    }
  }
  .tips-container{
      height: 32px;
      line-height: 32px;
      margin-top: 10px;
      background-color: #fff;
      padding: 14px 10px;
      font-size: 24px;
      color: #616161;
  }
 }
</style>
