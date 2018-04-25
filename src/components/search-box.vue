<template>
  <div class="search-box">
      <div class="box-top">
        <div class="search-header">
          <i class="iconfont icon-fanhui" @click="back"></i>
        </div>
        <div class="input-box">
          <input type="text" v-model="city"  />
        </div>
      </div>
      <div class="city-list" ref="cityList">
        <div>
          <ul>
              <li v-for="(city, index) in rightCities" :key="index">{{city}}</li>
              <li v-show="rightCities.length === 0 && city !== ''">暂无搜索结果</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      city: '',
      cities: [],
      allCities: [],
      rightCities: [],
    }
  },
  mounted () {
    this.$nextTick(()=> {
      this.scroll = new BScroll(this.$refs.cityList, {
        scrollY: true,
        click: true
      })
    })
  },
  created () {
    let _this = this
      this.$http.get('/api').then(res => {
        if (res.status === 200) {
          _this.cities = res.data.cityArr
          console.log(_this.cities)
          _this.setData()
        }
      })
  },
  methods: {
    setData () {
      let obj = {}
      let arr = []
      let newArr = []
      this.cities.forEach(item => {
        obj = item.data
      })
      obj = obj.cities
      for (let key in obj) {
        arr.push(obj[key])
      }
      arr.forEach(item => {
        item.forEach(city => {
          newArr.push(city)
        })
      })
      console.log(newArr)
      this.allCities = newArr
      this.getData(this.city)
    },
    getData (city) {
      let cityArr = []
      if(city == '') {
        return
      }
      this.allCities.forEach(item => {
        if (item.spell.indexOf(city) !== -1) {
          cityArr.push(item.name)
        } else if (item.name.indexOf(city) !== -1) {
          cityArr.push(item.name)
        } 
      })
      this.rightCities = cityArr
    },
    back () {
      this.$router.back()
    }
  },
  watch: {
    city (newVal) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (newVal === '') {
          this.rightCities = []
          this.city = ''
        }else{
          this.getData(newVal)
        }
      },100)
    }
  }
}
</script>

<style lang='scss'>
.search-box{
    .box-top{
    position: relative;
    z-index: 99;
      .search-header{
        background-color: #00bcd4;
        padding-left: 20px;
        height: 80px;
        line-height: 80px;
       .iconfont{
            font-size: 40px;
            color: #fff;
        }
      }
      .input-box{
        background-color: #00bcd4;
        height: 60px;
        padding: 0 80px;
        input{
          width: 100%;
          height: 40px;
        }
      }
    }
    .city-list{
      position: absolute;
      top: 140px;
      right: 0;
      left: 0;
      bottom: 0;
      ul{
          background-color: #fff;
          margin-bottom: -1px;
          li{
              height:60px;
              padding-left: 40px;
              line-height: 60px;
              border-bottom: 1px solid #eee;
              font-size: 30px;
              color: #000;
          }
      }
    }
}
</style>
