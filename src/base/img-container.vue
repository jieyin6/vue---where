<template>
  <div class="img-container" @click="back">
    <div class="swiper">
    <swiper :options="imgOptions">
        <swiper-slide v-for="(img,index) in imgs" :key="index">
            <img :src="img" />
        </swiper-slide>
    </swiper>
    </div>
    <div class="background"></div>
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
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style lang='scss'>
.img-container{
  .swiper{
     position: absolute;
     top: 25%;
     left: 0;
     z-index: 200;
    .swiper-wrapper{
      .swiper-slide{
            img{
                width: 100%;
                
            }
        }
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
