<template>
  <div class="swiper-main">
    <swiper :options="swiperOption" >
    <!-- slides -->
      <swiper-slide 
        v-for="(item,index) in swiperList" 
        :key="index">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
    <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
    
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default{
  name:'Swiper',
  
  data(){
    return{
      swiperList:[
        {
          id:1,
          imgUrl:'./images/swiper1.jpg'
        },
        {
          id:2,
          imgUrl:'./images/swiper2.jpg'
        },
        {
          id:3,
          imgUrl:'./images/swiper3.jpg'
        }
      ],
      swiperOption:{
        autoplay:3000,
        speed:1000,
        pagination: {
          el: '.swiper-pagination',
        },
      }
    }
  },
  components:{
    swiper,
    swiperSlide
  },

}
</script>



<style lang="scss" scoped>
.swiper-main {
    width: 100%;
    height: 4.4rem;
    position: relative;
    top: 110px;
    left: 0;
    
};
.swiper-main img{
  width: 100%;
  height: 13rem;
};
.swiper-pagination{
  width: 100%;
  position: absolute;
  align-items: center;
  bottom: 2px;
  
}
</style>
