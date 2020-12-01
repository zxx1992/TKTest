/*
* @Author: yongwenhao
* @Date: 2020-05-14 09:10:30
* @describe:个人资料
*/
<template>
    <div class='information'>
        <p class="title">{{$t('layout.userInfo')}}</p>
        <Form :model="formItem" :rules="formRule" label-position="left" :label-width="150" ref="formItem"
              class="info-from">
            <FormItem :label="$t('layout.name')" prop="userName" class="input-item">
                <Input v-model="formItem.userName" maxlength="128" clearable></Input>
            </FormItem>
            <FormItem :label="$t('layout.email')" prop="userEmail" class="input-item">
                <Input v-model="formItem.userEmail" type="email" maxlength="128" clearable></Input>
            </FormItem>
            <FormItem :label="$t('layout.mobile')" prop="userMobile" class="input-item">
                <Input v-model="formItem.userMobile" type="tel" maxlength="32" clearable></Input>
            </FormItem>
            <FormItem :label="$t('layout.sex')" prop="userSex" class="input-item">
                <RadioGroup v-model="formItem.userSex" vertical>
                    <Radio :label='0'>{{$t('layout.woman')}}</Radio>
                    <Radio :label='1'>{{$t('layout.man')}}</Radio>
                    <Radio :label='2'>{{$t('layout.secrecy')}}</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem :label="$t('layout.role')" prop="roleId" class="input-item">
                <Select v-model.trim="formItem.roleId" filterable>
                    <Option v-for="item in studyList" :key="item.studyId" :value="item.studyId">{{item.studyName}}
                    </Option>
                </Select>
            </FormItem>
            <FormItem :label="$t('layout.overview')" class="input-item">
                <Input v-model="formItem.overview" type="textarea" maxlength="512"
                       :autosize="{minRows: 3,maxRows: 10}"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" :loading="loading" @click="onUpdateForm">{{$t('layout.updateSet')}}</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import {GetUserInfo, PutUserInfo} from "../../api/layout";
    import {USERID_SESSION} from "../../common/storage";

    export default {
        name: "information",
        data() {
            return {
                formItem: {
                    userName: '',
                    userEmail: '',
                    userMobile: '',
                    userSex: null,
                    roleId: null,
                    overview: ''
                },
                formRule: {
                    userName: [
                        {required: true, message: ' ', trigger: 'blur'}
                    ],
                    userEmail: [
                        {type: 'email', required: true, message: ' ', trigger: 'blur'}
                    ],
                    userMobile: [
                        {required: true, message: ' ', trigger: 'blur'}
                    ],
                    userSex: [
                        {type: 'number', required: true, message: ' ', trigger: 'change'}
                    ],
                    roleId: [
                        {type: 'number', required: true, message: ' ', trigger: 'change'}
                    ]
                },

                studyList: [
                    {studyId: 1, studyName: '角色1'},
                    {studyId: 2, studyName: '角色2'},
                    {studyId: 3, studyName: '角色3'}
                ],
                loading: false,
            }
        },
        computed: {
            userId() {
                return USERID_SESSION.getValue() || null;
            }
        },
        methods: {
            init() {
                GetUserInfo(this.userId).then(res => {
                    if (res.status) {
                        this.formItem = {
                            userId: res.data.userId,
                            userName: res.data.userName,
                            userSex: res.data.userSex,
                            userEmail: res.data.userEmail,
                            userMobile: res.data.userMobile,
                            roleId: res.data.rolePo.roleId,
                            overview: res.data.overview,
                        }
                    }
                })
            },
            onUpdateForm() {
                this.$refs.formItem.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        PutUserInfo(this.formItem).then(res => {
                            this.loading = false;
                            if (res.status) {
                                this.init()
                            }
                        }).catch(err => {
                            this.loading = false;
                        })
                    }
                })
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style lang='less' scoped>

    .information {
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
