/**
 * author: duxin
 * date: 2020/5/11
 * describe: 工具类
 */
import Vue from 'vue';
// 导入语言
import {i18n} from '../lang/index';

window.vm = new Vue({i18n});

//判断数据类型
export function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}

// 深拷贝
export function deepCopy(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if (t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}

// base64 转为 file 格式
export function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
}

// 验证是否为空
export const validateNull = (rule, value, callback) => {
    if (value) {
        callback();
    } else {
        callback(new Error(' '));
    }
};
// 密码校验：长度为6-20，必须包含数字和字母
const regValidate = (rule, value, callback) => {
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    if (!reg.test(value)) {
        callback(new Error(window.vm.$t('layout.pwdRule')));
    } else {
        callback()
    }

};
export const pwdValidate = [
    {
        required: true,
        message: ' ',
        trigger: 'blur'
    },
    {
        type: "string",
        min: 6,
        message: window.vm.$t('layout.pwdLength6'),
        trigger: "blur"
    },
    {
        type: "string",
        max: 20,
        message: window.vm.$t('layout.pwdLength20'),
        trigger: "blur"
    },
    {
        validator: regValidate,
        trigger: "blur"
    },
];

