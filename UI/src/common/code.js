/*
* @Author: yongwenhao
* @Date: 2020-05-19 16:02:09
* @describe: code
*/
// 后台code
export function resCode(key) {
    let code = {
        "1001": window.vm.$t("code.errorParam"),
        "1002": window.vm.$t("code.errorSys"),
        "1003": window.vm.$t("code.abnormalStatus"),
        "1004": window.vm.$t("code.pwdFreeze"),
        "1005": window.vm.$t("code.editNewPwd"),
        "1006": window.vm.$t("code.noUser"),

        "2001": window.vm.$t("code.roleUnique"),
        "2002": window.vm.$t("code.roleNoDel"),
        "2003": window.vm.$t("code.roleSystem"),
        "2004": window.vm.$t("code.EmailSystem"),
        "2005": window.vm.$t("code.errorPwd"),
        "2006": window.vm.$t("code.agingPwd"),
        "2007": window.vm.$t("code.recentPwd"),
        "2008": window.vm.$t("code.getCode"),
        "2009": window.vm.$t("code.errorCode"),
        "2010": window.vm.$t("code.submitDoNot"),

    };
    return code[key] ? code[key] :window.vm.$t("code.errorParam");
}
