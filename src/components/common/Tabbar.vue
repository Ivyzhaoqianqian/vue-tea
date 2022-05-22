<template>
  <div class="tabbar">
    <ul>
       <li>
            <img src="../../images/home.png" height="30px" alt="首页">
            <span>
                首页
            </span>
        </li>
        <li>
            <img src="../../images/home.png" height="30px" alt="首页">
            <span>
                首页
            </span>
        </li>
       <li>
            <img src="../../images/home.png" height="30px" alt="首页">
            <span>
                首页
            </span>
        </li>
        <li>
            <img src="../../images/home.png" height="30px" alt="首页">
            <span>
                首页
            </span>
        </li>
    </ul>
  </div>
</template>

<script>

</script>


<style scoped>

    .tabbar{
        
        position: fixed;
        left:0;
        bottom: 0;
        z-index: 999;
        width: 100%;
        height: 2rem;
        background-color: #fff
    };
    .tabbar ul{
        display: flex;
        justify-content:space-around 
    };
    .tabbar ul li{
        display: flex;
        flex-direction: column;
    }
    
</style>

