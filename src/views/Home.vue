<template>
  <div class="home">
    <Header></Header>
    <section>
    <Swiper></Swiper>
    <Icons></Icons>
    <Command></Command>
    </section>
    

    
  <Tabbar></Tabbar>
 
 
  </div>
  
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/home/Header.vue'
import Swiper from '@/components/home/Swiper.vue';
import Icons from '@/components/home/Icons.vue';
import Command from '@/components/home/Command.vue';




export default {
  name: "Home",
  components:{
    Tabbar,
    Header,
    Swiper,
    Icons,
    Command,
}
};
</script>
