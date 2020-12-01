<template>
    <div :class="classes">
        <div v-if="loading" :class="`${prefixCls}-spin`">
            <Spin size="large"></Spin>
        </div>
        <template v-else>
            <slot></slot>
        </template>
    </div>
</template>
<script>
    import Spin from "../spin/spin"

    const prefixCls = 'ivu-loading-bar';

    export default {
        name: 'LoadingBar',
        components: {Spin},
        props: {
            loading: Boolean
        },
        data() {
            return {
                prefixCls: prefixCls,
            };
        },
        computed: {
            classes() {
                return `${prefixCls}`;
            },
        }
    };
</script>
