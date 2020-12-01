<template>
    <div class="error">
        <img src="../assets/404.png">
        <p class="error-p">抱歉，您访问的页面走丢了！</p>
    </div>
</template>

<script>
    export default {
        props: {
            msg: String
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .error {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;

        img {
            width: 300px;
        }

        .error-p {
            font-size: 18px;
            margin-top: 15px;
        }
    }

</style>