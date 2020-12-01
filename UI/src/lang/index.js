/*
* @Author: yongwenhao
* @Date: 2020-05-15 14:04:07
* @describe: 国际化
*/

import Vue from 'vue';
import zh from '../UI/locale/lang/zh-CN' // iview 自带的语言包
import en from '../UI/locale/lang/en-US' // iview 自带的语言包
import {use} from '../UI/locale/index'; // 引入 Iview 自带的语言方法
import VueI18n from 'vue-i18n';
import {config} from '../config/default.config'

Vue.use(VueI18n);
const messages = config.language;
import {LANGUAGE_SESSION} from '../common/storage'

export const i18n = new VueI18n({
    locale: (() => {
        let lang = LANGUAGE_SESSION.getValue() || 'zh';
        if (lang === "zh") {
            use(zh);
        } else {
            use(en);
        }
        return lang
    })(),
    messages
});
