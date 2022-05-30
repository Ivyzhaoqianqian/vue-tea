<template>
  <div class="home">
    <div class="headers">
      <div class="headers-main">
        <Header></Header>
        <ly-tabs v-model="value">
            <ly-tab-item name="1" title="推荐" />
            <ly-tab-item name="2" title="红茶" />
            <ly-tab-item name="3" title="绿茶" />
            <ly-tab-item name="4" title="铁观音" />
            <ly-tab-item name="5" title="花茶" />
            <ly-tab-item name="6" title="普洱茶" />
            <ly-tab-item name="7" title="茶具" />
            <ly-tab-item name="8" title="其他" />
        </ly-tabs>
      </div>
    </div>
    <section ref="scroll">
      <div>
        <Swiper></Swiper>
        <Icons></Icons>
        <Command></Command>
        <Like></Like>
      </div>
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
import BetterScroll from '@better-scroll/core';
import Like from '@/components/home/Like.vue';




export default {
  name: "Home",
  components:{
    Tabbar,
    Header,
    Swiper,
    Icons,
    Command,
    Like
},  
  mounted() {
      this.init()
  },
  methods: {
      init() {
        this.bs = new BetterScroll(this.$refs.scroll, {
          probeType: 3,
          click: true
        })
      },
  },
  data() {
        return {
            value: "1",
        };
  },
  
};
</script>

<style lang="scss" scoped>

.home{ 
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.headers{
  width: 100%;
  height: 2.8rem;
}

.headers headers-main{
  position: fixed;
  left: 0;
  top:0;
}

section{
  margin-top:3rem ;
  flex: 1;
  overflow: hidden;
}
</style>
