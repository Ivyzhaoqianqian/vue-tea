<template>
  <div class="home">
    <Header></Header>
    <section>
    <Swiper></Swiper>
    </section>

    
  <Tabbar></Tabbar>

  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/home/Header.vue'
import Swiper from '@/components/home/Swiper.vue';




export default {
  name: "Home",
  components:{
    Tabbar,
    Header,
    Swiper
  }
};
</script>
