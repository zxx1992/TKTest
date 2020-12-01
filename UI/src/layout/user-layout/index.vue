/*
* @Author: yongwenhao
* @Date: 2020-05-14 09:10:11
* @describe:个人中心
*/
<template>
    <div class='personal'>
        <Tabs v-model="tabsName">
            <TabPane :label="$t('layout.userInfo')" name="name1">
                <InfoWarp></InfoWarp>
            </TabPane>
            <TabPane :label="$t('layout.securitySet')" name="name2">
                <SecurityWarp></SecurityWarp>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    import InfoWarp from './user-info'
    import SecurityWarp from './user-security'

    export default {
        name: "index",
        components: {InfoWarp, SecurityWarp},
        data() {
            return {
                tabsName: 'name1'
            }
        }
    }
</script>

<style lang='less' scoped>
</style>
