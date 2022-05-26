<template>
  <div class="home">
    <Header></Header>
    <section>
    <Swiper></Swiper>
    </section>
    

    
  <Tabbar></Tabbar>
 
  <Icons></Icons>
  </div>
  
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/home/Header.vue'
import Swiper from '@/components/home/Swiper.vue';
import Icons from '@/components/home/Icons.vue';




export default {
  name: "Home",
  components:{
    Tabbar,
    Header,
    Swiper,
    Icons
  }
};
</script>
