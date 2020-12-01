/*
* @Author: yongwenhao
* @Date: 2020-05-11 11:31:30
* @describe: 首页
*/
<template>
    <Layout>
        <Sider collapsible v-model="collapsed">
            <NavLayout :collapsed="collapsed"></NavLayout>
        </Sider>
        <Layout>
            <Content>
                <Header>
                    <HeaderLayout></HeaderLayout>
                </Header>
                <!--面包屑导航-->
                <BreadcrumbLayout></BreadcrumbLayout>
                <div class="nav-content">
                    <router-view/>
                </div>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import NavLayout from './nav-layout'
    import BreadcrumbLayout from './breadcrumb-layout'
    import HeaderLayout from './header-layout'

    export default {
        name: 'index',
        components: {NavLayout, BreadcrumbLayout, HeaderLayout},
        data() {
            return {
                collapsed: false
            }
        },
        methods: {}
    }
</script>

<style lang='less' scoped>
    @import '../style/constant.less';
    .nav-content{
        background-color: white;
        margin: 0 15px 15px 15px;
        min-height: 80vh;
        padding: 15px;
    }
</style>
