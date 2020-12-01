/*
* @Author: yongwenhao
* @Date: 2020-05-11 11:40:25
* @describe: 登录
*/
<template>
    <div class="login-warp">
        <Form :model="formItem" :rules="formRule" label-position="top" class="from-group" ref="loginForm">
            <FormItem :label="$t('layout.email')" prop="email">
                <Input v-model.trim="formItem.email" type="email" maxlength="128" clearable/>
            </FormItem>
            <FormItem :label="$t('layout.pwd')" prop="pwd">
                <Input v-model.trim="formItem.pwd" type="password" maxlength="20" password/>
            </FormItem>
            <div class="btn">
                <Button type="primary" :loading="loading" @click="onLogin">{{$t('layout.login')}}</Button>
            </div>
        </Form>
        <div class="footer">
            <span @click="onSetType('forget')">{{$t('layout.pwdForget')}}</span>
            <Dropdown @on-click="onChangeLanguage">
                <span> {{language}} <Icon type="ios-arrow-down"></Icon></span>
                <DropdownMenu slot="list">
                    <DropdownItem name='zh'>中文</DropdownItem>
                    <DropdownItem name='en'>English</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>

<script>
    import {TOKEN_SESSION, LANGUAGE_SESSION, USERNAME_SESSION, USERID_SESSION} from "../../common/storage";
    import md5 from "md5"
    import {PostLogin} from '../../api/layout'
    import {validateNull} from "../../common/utils";

    export default {
        name: "login-warp",
        data() {
            return {
                language: '中文',
                formItem: {
                    email: '',
                    pwd: ''
                },
                formRule: {
                    email: [
                        {type: 'email', required: true, message: ' ', trigger: 'blur'}
                    ],
                    pwd: [
                        {validator: validateNull, required: true, message: ' ', trigger: 'blur'}
                    ],
                },
                loading: false
            }
        },
        methods: {
            onLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        PostLogin({
                            userEmail: this.formItem.email,
                            userPwd: md5(this.formItem.pwd)
                        }).then(res => {
                            this.loading = false;
                            if (res.status) {
                                TOKEN_SESSION.setValue(res.data.token || '');
                                USERNAME_SESSION.setValue(res.data.userName || '');
                                USERID_SESSION.setValue(res.data.userId || null);
                                this.$router.replace("/");
                            } else if (res.code === '1005' || res.code === '2006') {
                                this.$emit('onChangeType', 'edit')
                            }
                        }).catch(error => {
                            this.loading = false;
                        })
                    }
                })
            },
            onChangeLanguage(lang) {
                this.$i18n.locale = lang;
                this.language = lang === 'zh' ? '中文' : 'English';
                LANGUAGE_SESSION.setValue(lang);
                location.reload();
            },
            onSetType(str) {
                this.$emit('onChangeType', str)
            }
        },
        mounted() {
            LANGUAGE_SESSION.setValue(this.$i18n.locale || 'zh');
            this.language = this.$i18n.locale === 'zh' ? '中文' : 'English';
        }
    }
</script>

<style lang='less' scoped>
    .login-warp {
        width: 70%;
        margin: 0 auto;

        .from-group {
            .btn {
                text-align: center;
            }
        }

        .footer {
            margin-top: 30px;
            padding: 0 10px;
            cursor: pointer;

            .ivu-dropdown {
                float: right;
            }
        }
    }
</style>
