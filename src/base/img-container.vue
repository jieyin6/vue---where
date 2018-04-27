<template>
  <div class="img-container">
    <div class="swiper">
    <swiper :options="imgOptions">
        <swiper-slide v-for="(img,index) in imgs" :key="index">
            <img :src="img" />
        </swiper-slide>
    </swiper>
     <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      imgOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  }
}
</script>

<style lang='scss'>
@import 'swiper/dist/css/swiper.css';
.img-container{
  .swiper{
    img{
        width: 100%;
        vertical-align: top;
     }
    }
    .swiper-pagination{
        height: 80px;
        line-height: 80px;
        bottom: 40px;
        color: #fff;
        font-size: 24px;
    }
  }
</style>
