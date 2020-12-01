import axios from "axios";
import {TOKEN_SESSION} from "../common/storage";
import {resCode} from "../common/code";
import UI from "./../UI"

axios.defaults.baseURL = "http://10.0.5.125:8081/panda";

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (sessionStorage["token"]) {
            config.headers.common["Authorization"] = `bearer ${TOKEN_SESSION.getValue()}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (!response.data.status) {
            UI.Message.error(resCode(response.data.code));
            if (response.data.code === '1005' || response.data.code === '2006') {
                return response.data;
            }
        } else {
            return response.data;
        }
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    sessionStorage.clear();
                    location.replace("/login");
                    break;
            }
        }
        return Promise.reject(error); // 返回接口返回的错误信息
    }
);
export default axios;
