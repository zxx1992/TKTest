/*
* @Author: yongwenhao
* @Date: 2020-05-20 15:20:43
* @describe: 头部区域
*/
<template>
    <div class='header-layout'>
        <Dropdown @on-click="onChangeLanguage">
            <span> {{language}} <Icon type="ios-arrow-down"></Icon></span>
            <DropdownMenu slot="list">
                <DropdownItem name='zh'>中文</DropdownItem>
                <DropdownItem name='en'>English</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
    import {LANGUAGE_SESSION} from '../common/storage'

    export default {
        name: "header-layout",
        data() {
            return {}
        },
        computed: {
            language() {
                return LANGUAGE_SESSION.getValue() === 'zh' ? '中文' : 'English'
            }
        },
        methods: {
            onChangeLanguage(lang) {
                this.$i18n.locale = lang;
                LANGUAGE_SESSION.setValue(lang);
                location.reload();
            }
        }
    }
</script>

<style lang='less' scoped>
    .header-layout {
        float: right;
    }
</style>
