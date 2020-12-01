/*
* @Author: yongwenhao
* @Date: 2020-05-11 11:43:39
* @describe: 忘记密码
*/
<template>
    <div class="password-forget">
        <Form :model="formItem" :rules="formRule" label-position="top" class="from-group" ref="forgetForm">
            <FormItem :label="$t('layout.email')" prop="email">
                <Input v-model.trim="formItem.email" type="email" maxlength="128" clearable/>
            </FormItem>
            <FormItem :label="$t('layout.newPwd')" prop="newPwd">
                <Input v-model.trim="formItem.newPwd" type="password" maxlength="20" password clearable/>
            </FormItem>
            <FormItem :label="$t('layout.okNewPwd')" prop="okNewPwd">
                <Input v-model.trim="formItem.okNewPwd" type="password" maxlength="20" password clearable/>
            </FormItem>
            <FormItem :label="$t('layout.code')" prop="code">
                <div class="auth-code">
                    <Input v-model="formItem.code" maxlength="5"></Input>
                    <Button class="code-btn" @click="onGetCode" v-if="!time">{{$t('layout.getCode')}}</Button>
                    <Button class="code-btn" disabled v-else>{{time}}</Button>
                </div>
            </FormItem>
            <slot name="form-btn">
                <div class="btn">
                    <Button type="primary" :loading="loading" @click="onForgetPwd">{{$t('layout.modify')}}</Button>
                    <span @click="onSetType">{{$t('layout.goBack')}}</span>
                </div>
            </slot>
        </Form>
    </div>
</template>

<script>
    import {GetVerifyCode, PutPwdReset} from "../../api/layout";
    import md5 from "md5"
    import {pwdValidate} from "../../common/utils";

    export default {
        name: "password-forget",
        data() {
            return {
                formItem: {
                    email: '',
                    newPwd: '',
                    okNewPwd: '',
                    code: ""
                },
                formRule: {
                    email: [
                        {type: 'email', required: true, message: ' ', trigger: 'blur'}
                    ],
                    newPwd: [...pwdValidate],
                    okNewPwd: [...pwdValidate],
                    code: [
                        {required: true, message: ' ', trigger: 'blur'}
                    ],
                },
                loading: false,
                time: null,
                codeInterval: null
            }
        },

        methods: {
            // 切换状态
            onSetType(str) {
                this.$emit('onChangeType')
            },
            // 修改密码
            onForgetPwd() {
                this.$refs.forgetForm.validate(valid => {
                    if (valid) {
                        if (this.formItem.newPwd !== this.formItem.okNewPwd) {
                            this.$Message.warning(this.$t('layout.pwdError'));
                            return
                        }
                        this.loading = true;
                        PutPwdReset({
                            email: this.formItem.email,
                            newPwd: md5(this.formItem.newPwd),
                            code: this.formItem.code
                        }).then(res => {
                            this.loading = false;
                            if (res.status) {
                                this.$emit('onChangeType', 'login')
                            }
                        }).catch(error => {
                            this.loading = false;
                        })
                    }
                })
            },
            // 获取验证码
            onGetCode() {
                if (!this.formItem.email) {
                    this.$Message.warning(this.$t('layout.emailNull'));
                    return
                }
                GetVerifyCode({email: this.formItem.email}).then(res => {
                    if (res.status) {
                        this.handleCountdownCode()
                    }
                })
            },
            // 验证码倒计时 10分钟
            handleCountdownCode() {
                const TIME_COUNT = 600;
                if (!this.time) {
                    this.time = TIME_COUNT;
                    this.codeInterval = setInterval(() => {
                        if (this.time > 1 && this.time <= TIME_COUNT) {
                            this.time--;
                        } else {
                            clearInterval(this.codeInterval);
                            this.codeInterval = null;
                            this.time = null;
                        }
                    }, 1000)
                }
            }
        },
        beforeDestroy() {
            clearInterval(this.codeInterval);
        }
    }
</script>

<style lang='less' scoped>
    .password-forget {
        width: 70%;
        margin: 0 auto;

        .from-group {
            .auth-code {
                position: relative;
                display: flex;

                .code-btn {
                    margin-left: 10px;
                }
            }

            .btn {
                width: 69%;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
</style>
