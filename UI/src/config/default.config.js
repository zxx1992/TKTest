/**
 * author: duxin
 * date: 2020/5/13
 * describe: 默认配置
 */
import logoMax from "../assets/logo_max.png"
export const config = {
    menuSwitchIcon: ["iconzhankai", "iconshouqi"],
    menuLogo: [logoMax, logoMax],
    mode: "light",
    language: {
        en: Object.assign(require('../lang/en')), // 英文语言包
        zh: Object.assign(require('../lang/zh')), // 中文语言包
    }
};
