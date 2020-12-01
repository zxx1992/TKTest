/**
 * author: duxin
 * date: 2020/5/13
 * describe: 状态管理
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {},
    state: {
        routers: [] //全局权限导航菜单
    },
    mutations: {
        setRouters(state, data) {
            state.routers = data;
        }
    },
    actions: {
        getMenuData({commit}) {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    let menuList = [
                        {
                            menuId: "HOME",
                            menuName:" 首页",
                            icon:"icontuichu"
                        }
                    ];
                    commit("setRouters", menuList);
                    resolve(menuList)
                }, 300)
            });
        }
    },
})