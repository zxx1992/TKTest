/*
* @Author: yongwenhao
* @Date: 2020-05-12 09:36:11
* @describe: 首页左侧布局
*/
<template>
    <div class="nav-wrap">
        <NavHeader class="header" :logoSrc="logoSrc"></NavHeader>
        <NavMenu :class="menuClass" :collapsed="collapsed" :menuList="menuList"></NavMenu>
        <NavFooter class="footer" :collapsed="collapsed"></NavFooter>
    </div>
</template>

<script>
    import NavMenu from './nav-menu'
    import NavHeader from './nav-header'
    import NavFooter from './nav-footer'
    import {config} from "../../config/default.config";

    export default {
        props: {
            collapsed: Boolean
        },
        components: {NavMenu, NavHeader, NavFooter},
        data() {
            return {}
        },
        computed: {
            // logo 图标
            logoSrc() {
                return config.menuLogo[Number(this.collapsed)]
            },
            menuList() {
                return this.$store.state.routers
            },
            menuClass(){
                return this.collapsed? "menu-collapsed":"menu"
            }
        },
    }
</script>

<style lang='less' scoped>
    @import "../../style/constant.less";

    .nav-wrap {
        height: 100vh;
        position: relative;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        display: flex;
        flex-direction: column;

        .header {
            height: 60px;
        }

        .menu {
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .menu-collapsed{
            flex: 1;
        }

        .footer {
            height: 60px;
        }
    }
</style>
