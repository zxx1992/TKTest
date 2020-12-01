<template>
    <div class="footer-wrap" :style="styles">
        <router-link :to="{name:'USER'}">
            <Icon type="icontouxiang" size="18" class="portrait"/>
            <span v-show="!collapsed" class="username">{{username}}</span>
        </router-link>
        <Icon v-show="!collapsed" type="icontuichu" color="#E76C5E" size="18" @click="onLogOut"/>
    </div>
</template>

<script>
    import {USERNAME_SESSION} from "../../common/storage";

    export default {
        props: {
            collapsed: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                justify: "space-between"
            }
        },
        computed: {
            username() {
                return USERNAME_SESSION.getValue() || ''
            },
            styles() {
                return {
                    justifyContent: this.justify
                }
            }
        },
        watch: {
            collapsed() {
                if (this.collapsed) {
                    setTimeout(() => {
                        this.justify = this.collapsed ? "center" : "space-between"
                    }, 200)
                } else {
                    this.justify = this.collapsed ? "center" : "space-between"
                }
            }
        },
        methods: {
            onLogOut() {
                sessionStorage.clear();
                this.$store.commit("setRouters", []);
                this.$router.replace("/login");
            }
        }
    }
</script>

<style lang='less' scoped>
    @import "../../style/constant.less";

    .footer-wrap {
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        padding-left: 15px;
        padding-right: 15px;
        align-items: center;

        .username {
            padding-left: 10px;
            color: #000;
        }

        .icontuichu {
            cursor: pointer;
        }

        .portrait {
            color: @primary-color;
        }
    }
</style>
