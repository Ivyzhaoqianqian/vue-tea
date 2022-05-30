<template>
    <div class="title">
        <slot>
            <span>爆款推荐</span>
        </slot>
    </div>
</template>

<style lang="scss" scoped>
.title {
    width: 100%;
    text-align: center;
    padding: 10px 0;
}

.title span{
    font-size: 18px;
    color: rgb(22, 119, 255);
    position: relative;
}

.title span::before{
    content: '';
    position:absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: block;
    background: rgb(22, 119, 255);
    top:50%;
    margin-top: -4px;
    left: -1rem;
}

.title span::after{
    content: '';
    position:absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: block;
    background: rgb(22, 119, 255);
    top:50%;
    margin-top: -4px;
    right: -1rem;
}


</style>