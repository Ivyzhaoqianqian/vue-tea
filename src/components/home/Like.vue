<template>
  <div class="like">
      <Card>
          <span>猜你喜欢</span>
      </Card>
      <ul>
        <li
            v-for="(item,index) in likeList" 
            :key="index"
        >
            <div>
                <img :src="item.imgUrl" alt="">
            </div>
            <div>
                <h3>{{item.name}}</h3>
                <div class="price">
                    <span>￥</span>
                    <b>{{item.price}}</b>
                </div>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
import Card from "@/components/home/Card.vue";
export default{
    data() {
        return {
            likeList: [
                {
                    id: 1,
                    name: "建盏套装 红色芝麻毫 5件套",
                    price: "299",
                    imgUrl: "./images/like.jpg"
                },
                {
                    id: 2,
                    name: "建盏套装 红色芝麻毫 5件套",
                    price: "299",
                    imgUrl: "./images/like.jpg"
                },
                {
                    id: 3,
                    name: "建盏套装 红色芝麻毫 5件套",
                    price: "299",
                    imgUrl: "./images/like.jpg"
                },
            ],
        };
    },
    components: { Card }
}
</script>

<style lang="scss" scoped>

.like ul{
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.like ul li{
    
    
}

.like ul li h3{
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    margin: 4px 0;
    color: #444;
}
.like img{
    width:200px;
    height: 200px;
}

.price{
    margin-bottom: 12px;
    color: rgb(22, 119, 255);
    font-size: 20px;
}
</style>
