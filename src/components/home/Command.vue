<template>
  <div class="command">
      <Card></Card>
      <ul>
        <li
            v-for="(item,index) in commandList" 
            :key="index"
        >
            <h2>
                <img :src="item.imgUrl" alt="">
            </h2>
            <div>
                <h3>{{item.name}}</h3>
                <p>{{item.content}}</p>
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
import Card from "./Card.vue";
export default{
    data() {
        return {
            commandList: [
                {
                    id: 1,
                    name: "龙井1号铁罐250g",
                    content: "鲜爽甘醇 口粮首选",
                    price: "68",
                    imgUrl: "./images/command1.jpg"
                },
                {
                    id: 1,
                    name: "龙井1号铁罐250g",
                    content: "鲜爽甘醇 口粮首选",
                    price: "68",
                    imgUrl: "./images/command1.jpg"
                },
                {
                    id: 1,
                    name: "龙井1号铁罐250g",
                    content: "鲜爽甘醇 口粮首选",
                    price: "68",
                    imgUrl: "./images/command1.jpg"
                },
            ],
        };
    },
    components: { Card }
}
</script>

<style lang="scss" scoped>

.command ul li{
    position: relative;
    border: 1px solid #ccc;
}

.command ul li > div{
    position: absolute;
    right:10px;
    top:0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 48px;

}

.command ul li > div h3{
    font-size: 14px;
    color: #aaa;
}

.command ul li > div p{
    font-size: 20px;
    color: #333;
}

.price{
    color: rgb(22, 119, 255);
    font-size: 20px;
    padding-top: 24px;
}
.command img{
    width:200px;
    height: 200px;
}

</style>