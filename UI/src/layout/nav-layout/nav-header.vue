<template>
    <div class='main-logo-warp'>
        <img :src="logoSrc" alt="">
    </div>
</template>

<script>
    export default {
        name: "main-logo-warp",
        props: {
            logoSrc: {
                type: [Object,String],
                default: ''
            }
        }
    }
</script>

<style lang='less' scoped>
    .main-logo-warp {
        text-align: center;
        width: 100%;
        img {
            width: 80%;
            height: 100%;
            object-fit: contain;
            line-height: 100%;
        }
    }
</style>
