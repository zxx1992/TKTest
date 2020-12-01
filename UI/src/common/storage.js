/**
 * author: duxin
 * date: 2020/5/13
 * describe: Storage
 */

const KEY = {
    TOKEN: "token",
    LANGUAGE: 'language',
    USERNAME:'userName',
    USERID:'userId'
};

export const TOKEN_SESSION = {
    setValue: (value) => {
        sessionStorage.setItem(KEY.TOKEN, value)
    },
    getValue: () => {
        return sessionStorage.getItem(KEY.TOKEN)
    },
    clear: () => {
        sessionStorage.removeItem(KEY.TOKEN)
    }
};
export const LANGUAGE_SESSION = {
    setValue: (value) => {
        sessionStorage.setItem(KEY.LANGUAGE, value)
    },
    getValue: () => {
        return sessionStorage.getItem(KEY.LANGUAGE)
    },
    clear: () => {
        sessionStorage.removeItem(KEY.LANGUAGE)
    }
};
// 用户名
export const USERNAME_SESSION = {
    setValue: (value) => {
        sessionStorage.setItem(KEY.USERNAME, value)
    },
    getValue: () => {
        return sessionStorage.getItem(KEY.USERNAME)
    },
    clear: () => {
        sessionStorage.removeItem(KEY.USERNAME)
    }
};
// 用户Id
export const USERID_SESSION = {
    setValue: (value) => {
        sessionStorage.setItem(KEY.USERID, value)
    },
    getValue: () => {
        return sessionStorage.getItem(KEY.USERID)
    },
    clear: () => {
        sessionStorage.removeItem(KEY.USERID)
    }
};

