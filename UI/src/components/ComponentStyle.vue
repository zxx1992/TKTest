<template>
    <div class="hello">
        <!-- 按钮 Button -->
        <h1>Button 按钮</h1>
        <h4>尺寸</h4>
        <Button type="primary" size="large">大按钮</Button>
        <Button type="default">中按钮</Button>
        <Button type="primary" size="small">小按钮</Button>
        <h4>失效/文字</h4>
        <Button :disabled="true">失效按钮</Button>
        <Button type="text">文字按钮</Button>
        <hr>
        <!-- 面包屑 Breadcrumb -->
        <h1>Breadcrumb 面包屑</h1>
        <h4></h4>
        <Breadcrumb>
            <BreadcrumbItem v-for="item in pathList" :to="item.path">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
        <hr>
        <!-- 下拉框 Select -->
        <h1>Select 下拉框</h1>
        <h4>尺寸</h4>
        <Select size="small" style="width:220px">
            <Option value="beijing">New York</Option>
            <Option value="shanghai" disabled>London</Option>
        </Select>
        <Select style="width:220px">
            <Option value="beijing">New York</Option>
            <Option value="shanghai" disabled>London</Option>
        </Select>
        <Select size="large" style="width:220px">
            <Option value="beijing">New York</Option>
            <Option value="shanghai" disabled>London</Option>
        </Select>
        <h4>带禁用</h4>
        <Select style="width:220px">
            <Option value="beijing">New York</Option>
            <Option value="shanghai" disabled>London</Option>
        </Select>
        <h4>带头像/图标</h4>
        <Select style="width:260px">
            <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix"
                    size="small"/>
            <Option value="beijing">
                <Icon type="icontouxiang" size="18" class="portrait"/>
                New York
            </Option>
            <Option value="shanghai">
                <Icon type="icontuichu" size="18" class="portrait"/>
                London
            </Option>
        </Select>
        <h4>多选</h4>
        <Select v-model="select1" multiple style="width:260px">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
        </Select>
        <hr>
        <h1>Page 分页</h1>
        <h4></h4>
        <Page :total="100" show-sizer show-elevator show-total/>
        <hr>
        <h1>Input 输入框</h1>
        <h4>尺寸</h4>
        <Input disabled size="large" value="阿三大萨达所" placeholder="Enter something..." style="width: 300px"/>
        <Input placeholder="Enter something..." style="width: 300px"/>
        <Input size="small" placeholder="Enter something..." style="width: 300px"/>
        <h4>类型</h4>
        <Input placeholder="Enter something..." style="width: 300px"/>
        <Input type="textarea" placeholder="Enter something..." style="width: 300px"/>
        <hr>
        <h1>Tooltip 全局提示</h1>
        <h4></h4>
        <Button @click="success1">success</Button>
        <Button @click="warning1">warning</Button>
        <Button @click="error1">error</Button>
        <hr>
        <h1>Tooltip 文字提示 </h1>
        <h4>位置 12种位置</h4>
        <Tooltip content="top-start-top-start-top-star" placement="top-start">
            <Button>top-start</Button>
        </Tooltip>
        <Tooltip content="bottom-end-bottom-end" placement="bottom-end">
            <Button>bottom-end</Button>
        </Tooltip>
        <hr>
        <!-- tabs -->
        <h1>Tabs 标签页</h1>
        <h4>常用</h4>
        <Tabs type="card">
            <TabPane label="标签一">标签一的内容</TabPane>
            <TabPane label="标签二">标签二的内容</TabPane>
            <TabPane label="标签三">标签三的内容</TabPane>
        </Tabs>
        <h4></h4>
        <Tabs badge>
            <TabPane label="标签一" count="12">标签一的内容</TabPane>
            <TabPane label="标签二">标签二的内容</TabPane>
            <TabPane label="标签三">标签三的内容</TabPane>
        </Tabs>
        <h4>带禁用</h4>
        <Tabs>
            <TabPane label="标签一">标签一的内容</TabPane>
            <TabPane label="标签二" disabled>标签二的内容</TabPane>
            <TabPane label="标签三">标签三的内容</TabPane>
        </Tabs>
        <h4>可关闭</h4>
        <Tabs type="card" closable @on-tab-remove="handleTabRemove">
            <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
            <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
            <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
        </Tabs>
        <!-- 气泡 -->
        <h1>Poptip 气泡</h1>
        <h4>位置 12种</h4>
        <Poptip title="Title" content="content">
            <Button>top</Button>
        </Poptip>
        <Poptip placement="right">
            <Button>right</Button>
            <div slot="content">
                右侧出现
            </div>
        </Poptip>
        <h4>出现方式</h4>
        <Poptip title="Title" content="content">
            <Button>左键单击</Button>
        </Poptip>
        <Poptip trigger="hover" title="Title" content="content">
            <Button>鼠标移入</Button>
        </Poptip>
        <hr>
        <!-- Notice 通知提醒 -->
        <h1>Notice 通知提醒</h1>
        <h4>自动关闭/手动关闭</h4>
        <Button type="primary" @click="open(false)">手动关闭</Button>
        <Button @click="open1(false,3)">自动关闭</Button>
        <h4>标题和内容</h4>
        <Button @click="info(false)">普通 Info</Button>
        <Button @click="success(false)">成功 Success</Button>
        <Button @click="warning(false)">警告 Warning</Button>
        <Button @click="error(false)">错误 Error</Button>
        <h4>内容</h4>
        <Button @click="info(true)">普通 Info</Button>
        <Button @click="success(true)">成功 Success</Button>
        <Button @click="warning(true)">警告 Warning</Button>
        <Button @click="error(true)">错误 Error</Button>
        <hr>
        <!-- Alert 警告提示 -->
        <h1>Alert 警告提示 </h1>
        <h4>只有标题</h4>
        <Alert show-icon>An info prompt</Alert>
        <Alert type="success" show-icon>A success prompt</Alert>
        <Alert type="warning" show-icon>A warning prompt</Alert>
        <Alert type="error" show-icon>An error prompt</Alert>
        <h4>标题和内容</h4>
        <Alert show-icon>
            An info prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt.
            </template>
        </Alert>
        <Alert type="success" show-icon>
            A success prompt
            <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
        </Alert>
        <Alert type="warning" show-icon>
            A warning prompt
            <template slot="desc">
                Content of prompt. Content of prompt. Content of prompt.
            </template>
        </Alert>
        <Alert type="error" show-icon>
            An error prompt
            <span slot="desc">
        Custom error description copywriting.
      </span>
        </Alert>
        <hr>
        <!-- modal -->
        <h1>Modal 模态框</h1>
        <h4>基础版本</h4>
        <Button type="primary" @click="modal1 = true">基础版本</Button>
        <Modal v-model="modal1" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
            <p>基础版本</p>
        </Modal>
        <h4>可拖拽</h4>
        <Button type="primary" @click="modal2 = true">可拖拽</Button>
        <Modal v-model="modal2" title="可拖拽" @on-ok="ok" @on-cancel="cancel" draggable scrollable>
            <p>可拖拽</p>
        </Modal>
        <h4>全屏</h4>
        <Button type="primary" @click="modal3 = true">全屏</Button>
        <Modal v-model="modal3" fullscreen title="全屏">
            <div>全屏</div>
        </Modal>
        <hr>
        <!-- Drawer 抽屉 -->
        <h1> Drawer 抽屉</h1>
        <h4>位置</h4>
        <Button @click="drawer1 = true" type="primary">右侧</Button>
        <Drawer title="按钮" placement="right" :closable="true" v-model="drawer1">
            <div slot="header">
                <Button>按钮</Button>
            </div>
            <p>右上角关闭按钮可以去掉</p>
        </Drawer>
        <Button @click="drawer2 = true" type="primary">左侧</Button>
        <Drawer title="按钮" placement="left" :closable="true" v-model="drawer2" :mask-closable="false">
            <div slot="header">
                <Button>按钮</Button>
            </div>
            <p>点击遮罩不能关闭</p>
        </Drawer>
        <hr>
        <!-- 上传 -->
        <h1>Upload 上传</h1>.
        <h4>样式</h4>
        <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>上传</p>
            </div>
        </Upload>
        <br>
        <Upload action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline">上传</Button>
        </Upload>
        <hr>
        <!-- 导航 -->
        <h1>Menu 导航</h1>
        <h4>切换主题</h4>
        <RadioGroup v-model="theme1">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
        </RadioGroup>
        <h4></h4>
        <Menu mode="vertical" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper"/>
                内容管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people"/>
                用户管理
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats"/>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct"/>
                综合设置
            </MenuItem>
        </Menu>
        <hr>
        <!-- 下拉框 -->
        <h1>Dropdown 下拉框</h1>
        <h4>触发方式</h4>
        <Dropdown>
            <span>鼠标移入<Icon type="ios-arrow-down"></Icon></span>
            <DropdownMenu slot="list">
                <DropdownItem>返回</DropdownItem>
                <DropdownItem style="color: #ed4014">删除</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown trigger="click" style="margin-left: 20px">
            <span>左键单击<Icon type="ios-arrow-down"></Icon></span>
            <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown trigger="contextMenu" style="margin-left: 20px">
            <span>右键单击<Icon type="ios-arrow-down"></Icon></span>
            <DropdownMenu slot="list">
                <DropdownItem>返回</DropdownItem>
                <DropdownItem style="color: #ed4014">删除</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <h4>带禁用</h4>
        <Dropdown>
            <Button type="primary">
                下拉菜单
                <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem disabled>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <hr>
        <!-- 日期 -->
        <h1>DatePicker 日期</h1>
        <h4>位置</h4>
        <DatePicker type="year" placeholder="年" style="width: 200px"></DatePicker>
        <DatePicker type="month" placeholder="月" style="width: 200px"></DatePicker>
        <DatePicker type="date" placeholder="日" style="width: 200px"></DatePicker>
        <DatePicker type="datetime" placeholder="精确到秒" style="width: 200px"></DatePicker>
        <DatePicker type="datetimerange" placeholder="时间段" style="width: 200px"></DatePicker>
        <hr>
        <!-- tree/ -->
        <h1>tree 组织结构</h1>
        <h4>普通</h4>
        <Tree :data="tree1"></Tree>
        <h4>可勾选</h4>
        <Tree :data="tree2" show-checkbox></Tree>
        <hr>
        <!-- 单选 -->
        <h1>Radio 单选</h1>
        <h4>单个</h4>
        <Radio>Radio</Radio>
        <h4>多个</h4>
        <RadioGroup>
            <Radio label="apple">
                <Icon type="icontuichu"/>
                <span> 选项1</span>
            </Radio>
            <Radio label="android">
                <Icon type="icontuichu"/>
                <span> 选项2</span>
            </Radio>
            <Radio label="windows">
                <Icon type="icontuichu"/>
                <span> 选项3</span>
            </Radio>
        </RadioGroup>
        <hr>
        <!-- 多选框 -->
        <h1>Checkbox 多选框</h1>
        <h4>单个</h4>
        <Checkbox> Checkbox</Checkbox>
        <h4>多个</h4>
        <CheckboxGroup>
            <Checkbox label="twitter">
                <Icon type="icontuichu"/>
                <span> 选项1</span>
            </Checkbox>
            <Checkbox label="facebook">
                <Icon type="icontuichu"/>
                <span> 选项2</span>
            </Checkbox>
            <Checkbox label="github">
                <Icon type="icontuichu"/>
                <span> 选项3</span>
            </Checkbox>
        </CheckboxGroup>
        <hr>
        <!-- Table -->
        <h1>Table 表格</h1>
        <Table :columns="columns1" :data="data2">
            <template slot-scope="{ row }" slot="name">
                <span class="orderStatus" :style="{ backgroundColor: row.bc}"></span>
                <strong>{{ row.name }}</strong>
            </template>
        </Table>
        <hr>
        <!-- 富文本 -->
        <h1>富文本</h1>
        <quill-editor></quill-editor>
    </div>
</template>

<script>

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                pathList: [
                    {
                        path: "/",
                        name: "首页"
                    },
                    {
                        path: "/user",
                        name: "用户"
                    },
                    {
                        path: "/pro",
                        name: "项目"
                    }
                ],
                select1: [],
                modal1: false,
                modal2: false,
                modal3: false,
                drawer1: false,
                drawer2: false,
                theme1: 'light',
                tab0: true,
                tab1: true,
                tab2: true,
                columns1: [
                    {
                        title: 'Name',
                        slot: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address',
                    }
                ],
                data2: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                        bc: '#52C41A'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                        bc: '#EE440F'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02',
                        bc: '#000000'
                    }
                ],
                tree1: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                tree2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            handleTabRemove(name) {
                this['tab' + name] = false;
            },
            info(nodesc) {
                this.$Notice.info({
                    title: 'Notification title',
                    duration: 1000,
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            success1() {
                this.$Message.success('This is a success tip');
            },
            warning1() {
                this.$Message.warning('This is a warning tip');
            },
            error1() {
                this.$Message.error('This is an error tip');
            },
            success(nodesc) {
                this.$Notice.success({
                    title: 'Notification title', duration: 1000,
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            warning(nodesc) {
                this.$Notice.warning({
                    title: 'Notification title', duration: 1000,
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            error(nodesc) {
                this.$Notice.error({
                    title: 'Notification title', duration: 1000,
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            open(nodesc) {
                this.$Notice.open({
                    title: '手动关闭',
                    duration: 1000,
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            open1(nodesc, time) {
                this.$Notice.open({
                    title: '自动消失',
                    duration: time,
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            ok() {
                this.$Message.info('Clicked ok');
            },
            cancel() {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>
<style lang='less' scoped>
    .orderStatus {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 3px;
    }

    .hello {
        margin-top: -20px;
    }

    h1 {
        margin-top: 20px;
    }

    h4 {
        margin: 20px 0 10px;
    }

    hr {
        margin-top: 20px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        /*display: inline-block;*/
        /*margin: 0 10px;*/
    }

    a {
        color: #42b983;
    }
</style>
