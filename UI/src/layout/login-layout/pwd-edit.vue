/*
* @Author: yongwenhao
* @Date: 2020-05-11 11:43:39
* @describe: 修改密码
*/
<template>
    <div class="password-edit">
        <Form :model="formItem" :rules="formRule" label-position="top" class="from-group" ref="editForm">
            <FormItem :label="$t('layout.email')" prop="email">
                <Input v-model.trim="formItem.email" type="email" maxlength="128" clearable/>
            </FormItem>
            <FormItem :label="$t('layout.oldPwd')" prop="password">
                <Input v-model.trim="formItem.password" type="password" maxlength="20" password/>
            </FormItem>
            <FormItem :label="$t('layout.newPwd')" prop="newPwd">
                <Input v-model.trim="formItem.newPwd" type="password" maxlength="20" password/>
            </FormItem>
            <div class="btn">
                <Button type="primary" :loading="loading" @click="onEditPwd">{{$t('layout.modify')}}</Button>
                <span @click="onSetType">{{$t('layout.goBack')}}</span>
            </div>
        </Form>
    </div>
</template>

<script>
    import {PutPwdChange} from '../../api/layout'
    import md5 from "md5"
    import {validateNull, pwdValidate} from "../../common/utils";

    export default {
        name: "password-edit",
        data() {
            return {
                formItem: {
                    email: '',
                    password: '',
                    newPwd: ''
                },
                formRule: {
                    email: [
                        {type: 'email', required: true, message: ' ', trigger: 'blur'}
                    ],
                    password: [
                        {validator: validateNull, required: true, message: ' ', trigger: 'blur'}
                    ],
                    newPwd: [...pwdValidate]
                },
                loading: false
            }
        },
        methods: {
            // 切换状态
            onSetType(str) {
                this.$emit('onChangeType')
            },
            // 修改密码
            onEditPwd() {
                this.$refs.editForm.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        PutPwdChange({
                            email: this.formItem.email,
                            password: md5(this.formItem.password),
                            newPwd: md5(this.formItem.newPwd)
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
            }
        }
    }
</script>

<style lang='less' scoped>
    .password-edit {
        width: 70%;
        margin: 0 auto;

        .from-group {
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
