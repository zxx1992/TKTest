/*
* @Author: yongwenhao
* @Date: 2020-05-11 11:31:55
* @describe: 登录页面
*/
<template>
    <div class='login'>
        <div class="logo-warp">
            <img :src="logo" alt="" class="">
        </div>
        <div class="content-warp">
            <!--左边图片 -->
            <img :src="cover" alt="" class="img">
            <!--右边主体 -->
            <div class="content">
                <LoginWarp @onChangeType="onChangeType" v-if="isShowType==='login'"></LoginWarp>
                <pwdEdit @onChangeType="onChangeType" v-if="isShowType==='edit'"></pwdEdit>
                <pwdForget @onChangeType="onChangeType" v-if="isShowType==='forget'"></pwdForget>
            </div>
        </div>
        <div class="foot-warp">
            {{foot}}
        </div>
    </div>
</template>

<script>
    import LoginWarp from './login-form'
    import pwdEdit from './pwd-edit'
    import pwdForget from './pwd-forget'

    export default {
        name: "login",
        props: {
            logo: {
                type: String,
                default: 'http://admin.m-clinical.cn/img/logo.3c186715.png'
            },
            cover: {
                type: String,
                default: 'http://admin.m-clinical.cn/img/login_bg.7518c3b8.jpg'
            },
            foot: {
                type: String,
                default: '北京科林利康医学研究有限公司'
            },
        },
        components: {LoginWarp, pwdEdit, pwdForget},
        data() {
            return {
                isShowType: 'login', // login-layout/edit/forget 登录/修改密码/忘记密码
            }
        },
        methods: {
            onChangeType(str) {
                this.isShowType = str || 'login';
            }
        }
    }
</script>

<style lang='less' scoped>
    .login {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F5F8FA;
        position: relative;

        .logo-warp {
            width: 100%;
            color: #3ABEC4;
            text-align: center;
            position: absolute;
            top: 0;

            img {
                max-height: 8vh;
            }
        }

        .content-warp {
            width: 760px;
            height: 460px;
            display: flex;
            overflow: hidden;
            border-radius: 2px;
            background-color: beige;

            .img {
                width: 50%;
            }

            .content {
                flex: 1;
                display: flex;
                background-color: white;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        .foot-warp {
            position: absolute;
            bottom: 10px;
        }
    }
</style>
