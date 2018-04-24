<template>
  <div class="top-container">
    <swiper :options="swiperImgOptions" class="swiper" v-if='swiperImg.length'>
        <swiper-slide  v-for="img in swiperImg" :key="img.id" class="swiper-slide">
            <img :src="img.url" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <swiper :options="navOptions" class="nav-swiper">
        <swiper-slide v-for="(item,index) in navList" :key="index">
            <div class="nav-container">
                <div class="nav-item" v-for="(nav, index) in item" :key="index">
                    <img :src="nav.url" />
                    <span>{{nav.desc}}</span>
                </div>
            </div>
        </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="top-list">
        <li>
            <i></i>
            <span>定位</span>
        </li>
        <li>
            <i></i>
            <span>5折泡温泉</span>
        </li>
    </ul>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperImg: [],
      swiperImgOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      },
      navFrist: [],
      navOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    navList () {
      let list = []
      this.navFrist.forEach((item, index) => {
        let page = Math.floor(index / 8)
        // 让数组的值是一个数组
        if (!list[page]) {
          list[page] = []
        }
        list[page].push(item)
      })
      return list
    }
  },
  created () {
    let _this = this
    this.$http.get('/api').then(res => {
      console.log(res)
      if (res.status === 200) {
        _this.swiperImg = res.data.imgUrl
        /*  let list = res.data.iconUrl
        let length = Math.ceil(res.data.iconUrl.length / 8)
        for (let i = 0; i < length; i++) {
          if (i === length - 1) {
            _this.navList.push(list.slice(i * 8))
          } else {
            _this.navList.push(list.slice(i * 8, 8))
          }
        }
        console.log(_this.navList)  */
        _this.navFrist = res.data.iconUrl
      }
    })
  }
}
</script>

<style lang='scss'>
@import 'swiper/dist/css/swiper.css';
.top-container{
  .swiper{
      .swiper-slide{
        img{
          width: 100%;
          height: 100%;
        }
      }
      .swiper-pagination{
          .swiper-pagination-bullet-active{
              background-color: #fff;
          }
      }
  }
  .nav-swiper{
    width: 100%;
    padding: 18px 0 46px 0;
    background-color: #fff;
    position: relative;
    .nav-container{
      .nav-item{
          float: left;
          padding-top: 10px;
          width: 25%;
          img{
            width: 110px;
            height: 110px;
            margin-left: 20%;
          }
          span{
              display: block;
              margin-top: 10px;
              text-align: center;
          }
      }
    }
    .swiper-pagination{
        position: absolute;
        bottom: 12px;
    }
  }
  .top-list{
      position: relative;
      overflow: hidden;
      margin-bottom: 20px;
      &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #eee;
        }
      &::after{
          content: '';
          position: absolute;
          top: 0;
          right: 50%;
          width: 2px;
          height: 100px;
          background-color: #eeeeee;
      }
      li{
          float: left;
          width: 50%;
          height: 100px;
          line-height: 100px;
          background-color: #fff;
          text-align: center;
        }
  }
}
</style>
