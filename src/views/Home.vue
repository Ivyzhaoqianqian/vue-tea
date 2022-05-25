<template>
  <div class="home">
    <Header></Header>
    这是首页内容

    
  <Tabbar></Tabbar>

  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/home/Header.vue'




export default {
  name: "Home",
  components:{
    Tabbar,
    Header,
  
  }
};
</script>
