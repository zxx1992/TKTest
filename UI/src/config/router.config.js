/**
 * author: duxin
 * date: 2020/5/13
 * describe:
 */

import LoginPage from "../layout/login-layout/login"

//路由白名单
export const whiteRouterList = [
    {
        path: "/login",
        name: "Login",
        component: LoginPage
    }
];
//自定义的路由
export const customRouter = {
    HOME: {
        path: "home",
        name: "HOME",
        component: ()=>import("../components/ComponentStyle")
    }
};
