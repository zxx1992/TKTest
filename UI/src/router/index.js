import Vue from "vue";
import VueRouter from 'vue-router'
import {TOKEN_SESSION} from "../common/storage";
import {whiteRouterList, customRouter} from "../config/router.config"
import store from "../store"
import MainPage from "../layout" //默认首页

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: whiteRouterList,
    scrollBehavior: () => ({y: 0})
});

router.beforeEach((to, from, next) => {
    if (TOKEN_SESSION.getValue()) {
        /* 判断token是否存在 */
        if (store.state.routers.length === 0) {
            store.dispatch("getMenuData").then((menuList) => {
                router.addRoutes(generateRouter(menuList));
                next({...to, replace: true})
            });
        } else {
            next()
        }
    } else {
        if (whiteIncludes(to.name)) {
            // 在免登录白名单，直接进入
            next()
        } else {
            next({name: "Login", replace: true})
        }
    }
});

//白名单匹配
function whiteIncludes(name) {
    return !!whiteRouterList.find(item => {
        return item.name === name
    })
}

//将菜单生成路由
function generateRouter(menuList) {
    if (!Array.isArray(menuList)) {
        return []
    }
    let routerList = menuList.map(menu => {
        return customRouter[menu.menuId]
    });
    routerList.push({
        path:"user",
        name:"USER",
        component:()=>import("../layout/user-layout/index")
    });
    return [
        {
            path: "/",
            component: MainPage,
            children:routerList
        },
        {
            path: "*",
            component: () => import("../layout/404")
        }
    ]
}

export default router;
