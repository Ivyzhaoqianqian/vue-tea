<template>
    <div class="swiper">
        <swiper :modules="modules" :pagination="{ clickable: true }">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  }
}
</script>



<style lang="scss" scoped>
.swiper{
    margin-top:200px;
}
</style>
