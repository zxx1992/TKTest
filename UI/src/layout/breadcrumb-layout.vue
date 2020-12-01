/**
* author: duxin
* date: 2020/5/15
* describe:面包屑
*/

<template>
    <div>
        <Breadcrumb class="breadcrumb">
            <BreadcrumbItem v-for="item in pathList" :to="item.path">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "breadcrumb-layout",
        data() {
            return {
                pathList: []
            }
        },
        created() {
            this.initPath()
        },
        watch: {
            "$route"() {
                this.initPath()
            }
        },
        methods:{
            initPath(){
                this.pathList = this.$route.matched.map(item => {
                    return {
                            path: item.path || "/",
                            name: item.name || "首页"
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .breadcrumb {
        margin: 10px;
    }
</style>