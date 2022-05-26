<template>
    <header>
        <h1>
            <img src="@/assets/images/tea.png"/>
        </h1>
        <div class="search">
            <i class="iconfont icon-search"></i>
            <span>搜索您喜欢的...</span>
        </div>
        <div class="kefu">
            <i class="iconfont icon-kefu"></i>
        </div>

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
        
    </header>
</template>

<script>


export default {
    data() {
        return {
            value: "1",
        };
    },
    
}

</script>



<style lang="scss" scoped>
$background-color:rgb(22, 119, 255);
header {
    background-color:$background-color;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 50px;
}

header h1 {
    width: 48px;
    height: 48px;  
}

img{
    height: 48px;
}
.search{
    display: flex;
    align-items: center;
    width: 260px;
    height: 36px;
    background: #fff;
    border-radius: 15px;
}
.search i {
    padding: 8px;
    font-size: 24px;
    color: #ccc;
}
.search span{
    color: #ccc;
}
.kefu i{
    font-size: 24px;
    color: #fff;
}

.ly-tabs{
    position: fixed;
    top: 56px;
    left: 0;
    border-bottom: none;
}




</style>