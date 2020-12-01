/*
* @Author: yongwenhao
* @Date: 2020-05-19 14:56:51
* @describe: 公共框架接口
*/
import axios from './http'
// 登录
export const PostLogin = params => {
    return axios.post("/login", params);
};
// 修改用户密码
export const PutPwdChange = params => {
    return axios.put("/user/pwd/change", params);
};
// 用户密码修改（可用户忘记密码，邮箱code验证）
export const PutPwdReset = params => {
    return axios.put("/user/pwd/reset", params);
};
// 重置用户密码发送验证码
export const GetVerifyCode = params => {
    return axios.get("/user/pwd/verify/code", {params});
};
// 获取用户
export const GetUserInfo = userId => {
    return axios.get(`/user/${userId}`);
};
// 修改用户
export const PutUserInfo = params => {
    return axios.put("/user/modify", params);
};
