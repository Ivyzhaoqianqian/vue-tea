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
    </header>
</template>

<style lang="scss" scoped>
$background-color:rgba(166,46,41);
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

</style>