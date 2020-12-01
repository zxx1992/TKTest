/*
* @Author: yongwenhao
* @Date: 2020-05-14 09:13:11
* @describe:安全设置
*/
<template>
    <div class='security'>
        <p class="title">{{$t('layout.securitySet')}}</p>
        <Form :model="formItem" :rules="formRule" label-position="left" :label-width="150" ref="formItem"
              class="info-from">
            <FormItem :label="$t('layout.email')" prop="email" class="input-item">
                <Input v-model.trim="formItem.email" type="email" maxlength="128" clearable/>
            </FormItem>
            <FormItem :label="$t('layout.oldPwd')" prop="password" class="input-item">
                <Input v-model.trim="formItem.password" type="password" maxlength="20" password/>
            </FormItem>
            <FormItem :label="$t('layout.newPwd')" prop="newPwd" class="input-item">
                <Input v-model.trim="formItem.newPwd" type="password" maxlength="20" password/>
            </FormItem>
            <FormItem :label="$t('layout.okNewPwd')" prop="okNewPwd" class="input-item">
                <Input v-model.trim="formItem.okNewPwd" type="password" maxlength="20" password/>
            </FormItem>
            <FormItem>
                <Button type="primary" :loading="loading" @click="onUpdateData">{{$t('layout.updateSet')}}</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import {PutPwdChange} from "../../api/layout";
    import {validateNull, pwdValidate} from "../../common/utils";

    export default {
        name: "security",
        data() {
            return {
                formItem: {
                    email: '',
                    password: '',
                    newPwd: '',
                    okNewPwd: ''
                },
                formRule: {
                    email: [
                        {type: 'email', required: true, message: ' ', trigger: 'blur'}
                    ],
                    password: [
                        {validator: validateNull, required: true, message: ' ', trigger: 'blur'}
                    ],
                    newPwd: [...pwdValidate],
                    okNewPwd: [...pwdValidate],
                },
                loading: false,
            }
        },
        methods: {
            onUpdateData() {

                this.$refs.formItem.validate(valid => {
                    if (valid) {
                        if (this.formItem.newPwd !== this.formItem.okNewPwd) {
                            this.$Message.warning(this.$t('layout.pwdError'));
                            return
                        }
                        this.loading = true;
                        this.loading = true;
                        PutPwdChange({
                            email: this.formItem.email,
                            password: md5(this.formItem.password),
                            newPwd: md5(this.formItem.newPwd)
                        }).then(res => {
                            this.loading = false;
                            if (res.status) {

                            }
                        }).catch(error => {
                            this.loading = false;
                        })
                    }
                })
            },
        }
    }
</script>

<style lang='less' scoped>
    .security {
        .title {
            margin: 20px;
            font-size: 20px;
            font-weight: bold;
        }

        .info-from {
            margin-left: 20px;

            .input-item {
                width: 400px;
            }
        }
    }
</style>
