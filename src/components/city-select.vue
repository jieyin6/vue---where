<template>
  <div class="city-select" >
    <div class="header">
      <i class="iconfont icon-fanhui" @click="back"></i>
      <span>城市选择</span>
    </div>
    <div class="city-container" ref='CitiesWrapper'>
     <div>
      <div class="nav-header">
        <ul>
          <li class="active">境内</li>
          <li>境外.港澳台</li>
        </ul>
        <div class="search-box" @click="toSearchBox">
            <div>请输入城市名或拼音</div>
        </div>
      </div>
      <div class="hot-cities">
          <h2>热门城市</h2>
          <ul>
              <li v-for="city in hotCities" :key="city.id">{{city.name}}</li>
          </ul>
      </div>
      <div class="words-sort">
          <h2>字母排序</h2>
          <ul>
              <li v-for="(key,index) in words" :key="index" @click="getIndex(index)">{{key}}</li>
          </ul>
      </div>
      <div class="words-city" v-for="(item,key) in newCities" :key="key" ref="cities">
          <h2>{{key}}</h2>
          <ul>
            <li v-for="(city,index) in item" :key="index">{{city.name}}</li>
          </ul>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
// import cityContainer from '../base/city-container'
import BScroll from 'better-scroll'
export default {
  components: {
    // cityContainer
  },
  data () {
    return {
      cityArr: []
    }
  },
  computed: {
    hotCities () {
      let obj = {}
      let arr = []
      this.cityArr.forEach(item => {
        obj = item.data
      })
      arr = obj.hotCities
      return arr
    },
    words () {
      let obj = {}
      let arr = []
      this.cityArr.forEach(item => {
        obj = item.data
      })
      obj = obj.cities
      for (let key in obj) {
        arr.push(key)
      }
      return arr
    },
    newCities () {
      let obj = {}
      this.cityArr.forEach(item => {
        obj = item.data
      })
      obj = obj.cities
      return obj
    }
  },
  created () {
    let _this = this
    this.$http.get('/api').then(res => {
      if (res.status === 200) {
        console.log(res.data)
        _this.cityArr = res.data.cityArr
      }
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.CitiesWrapper, {
        scrollY: true,
        click: true
      })
    })
  },
  methods: {
    getIndex (index) {
      console.log(index)
      this.scroll.scrollToElement(this.$refs.cities[index])
    },
    back () {
      this.$router.back()
    },
    toSearchBox () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang='scss'>
.city-select{
  .header{
      width: 100%;
      height: 68px;
      line-height: 68px;
      background-color: #00bcd4;
      text-align: center;
      font-size: 32px;
      color: #fff;
      position: relative;
      z-index: 99;
      i{
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 88px;
      }
      .iconfont{
          font-size: 28px;
      }
  }
  .city-container{
      position: fixed;
      top: 68px;
      left: 0;
      right: 0;
      bottom: 0;
      .nav-header{
        padding: 20px 100px;
        background-color: #00bcd4;
        color: #fff;
        ul{
            width: 100%;
            border: 1px solid #fff;
            overflow: hidden;
            li{
                float: left;
                width: 50%;
                height: 40px;
                line-height: 40px;
                text-align: center;
            }
            .active{
                color: #00bcd4;
                background-color: #fff;
            }
        }
        .search-box{
          margin-top: 15px;
          div{
              width: 100%;
              height: 40px;
              line-height: 40px;
              text-align: center;
              background-color: #fff;
              color: #000;
          }
        }
     }
     .hot-cities{
         overflow: hidden;
         h2{
             font-size: 24px;
             margin: 24px 30px;
         }
         ul{
             overflow: hidden;
             background-color: #fff;
             position: relative;
             margin-bottom: -1px;
             &::before{
               content: '';
               position: absolute;
               left: 33.33%;
               width: 33.33%;
               height: 100%;
               border-right: 1px solid #ddd;
               border-left: 1px solid #ddd;
             }
             li{
                 float: left;
                 width: 33.33%;
                 height: 90px;
                 line-height: 90px;
                 font-size: 28px;
                 border-bottom: 1px solid #ddd;
                 color: #212121;
                 text-align: center;
            }
         }
     }
     .words-sort{
       h2{
             font-size: 24px;
             margin: 24px 30px;
         }
       ul{
           overflow: hidden;
           background-color: #fff;
           li{
               float: left;
               width: 16.66%;
               height: 90px;
               line-height: 90px;
               text-align: center;
               font-size: 28px;
               color: #212121;
           }
       }
     }
     .words-city{
       overflow: hidden;
       h2{
         font-size: 24px;
         margin: 24px 30px;
       }
       ul{
         overflow: hidden;
         background: #fff;
         position: relative;
         margin-bottom: -1px;
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
  }
}
</style>
