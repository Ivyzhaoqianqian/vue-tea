<template>
  <ul class="icons">
    <li
        v-for="(item,index) in iconsList" 
        :key="index">
        <img :src="item.imgUrl" alt="">
        <span>{{item.title}}</span>
    </li>
  </ul>
    
</template>

<script>
export default{
  name:'Icons',
  data(){
    return{
      iconsList:[
        {
          id:1,
          title:'自饮茶',
          imgUrl:'./images/icons1.png'
        },
        {
          id:2,
          title:'茶具',
          imgUrl:'./images/icons2.png'
        },
        {
          id:3,
          title:'茶礼盒',
          imgUrl:'./images/icons3.png'
        },
        {
          id:4,
          title:'领福利',
          imgUrl:'./images/icons4.png'
        },
        {
          id:5,
          title:'官方验证',
          imgUrl:'./images/icons5.png'
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.icons{
    display: flex ;
    justify-content:space-around ;
    margin-top:150px;
    left: 0;
}

.icons li{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icons img{
    width: 40px;
    height: 40px;
}

.icons span{
    padding-top: 6px;
    font-size: 14px;
}

</style>