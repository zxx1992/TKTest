<template>
    <div>
        <div :class="`${prefixCls}-top-button`">
            <slot name="btns"></slot>
            <Button @click="onToggle">{{show}}</Button>
        </div>
        <CollapseTransition>
            <div v-show="isActive" :class="`${prefixCls}-content`">
                <slot name="search"></slot>
                <!-- 按钮 -->
                <div :class="`${prefixCls}-bottom-button`">
                    <Button type="primary" @click="onSearch">{{t("i.searchBar.search")}}</Button>
                    <Button @click="onReset">{{t("i.searchBar.reset")}}</Button>
                    <Button @click="onToggle">{{t("i.searchBar.fold")}}</Button>
                </div>
            </div>
        </CollapseTransition>
    </div>
</template>
<script>
    import CollapseTransition from '../base/collapse-transition';
    import Button from "../button/button"
    import Locale from '../../mixins/locale';
    export default {
        name: "SearchBar",
        components: {CollapseTransition, Button},
        mixins:[Locale],
        data() {
            return {
                isActive: false,
                prefixCls: 'ivu-search-bar'
        }
        },
        computed: {
            show() {
                return this.isActive ? this.t("i.searchBar.fold") : this.t("i.searchBar.unfold")
            }
        },
        methods: {
            // 搜索
            onSearch() {
                this.$emit('on-search')
            },
            // 收起,展开
            onToggle() {
                this.isActive = !this.isActive;
            },
            // 重置
            onReset() {
                this.$emit('on-reset')
            }
        }
    }
</script>