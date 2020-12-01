/*
* @Author: yongwenhao
* @Date: 2020-05-11 15:49:23
* @describe: 左侧导航
*/
<template>
        <Menu theme="light" width="100%" :collapsed="collapsed">
            <template v-for="item in menuList">
                <template v-if="!item.children">
                    <MenuItem :name="item.menuId" :to="{name:item.menuId}">
                        <Icon slot="icon" size="18" :type="item.icon"/>
                        {{item.menuName}}
                    </MenuItem>
                </template>
                <template v-else>
                    <Submenu :name="item.menuId" :to="{name:item.menuId}">
                        <Icon slot="icon" size="18" :type="item.icon"/>
                        <template slot="title">
                            {{item.menuName}}
                        </template>
                        <template v-for="value in item.children">
                            <MenuItem :name="value.menuId" :to="{name:value.menuId}">
                                {{value.menuName}}
                            </MenuItem>
                        </template>
                    </Submenu>
                </template>
            </template>
        </Menu>
</template>
<script>
    export default {
        props: {
            collapsed: {
                type: Boolean,
                default: false
            },
            menuList:{
                type: Array,
                default: ()=>{
                    return[]
                }
            }
        }
    }
</script>

<style lang='less' scoped>
</style>
