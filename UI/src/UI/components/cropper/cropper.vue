<template>
    <div style="height: 300px">
        <VueCropper
                ref="cropper"
                :img="option.img"
                :outputSize="option.outputSize"
                :outputType="option.outputType"
                :info="true"
                :full="option.full"
                :canMove="option.canMove"
                :canMoveBox="option.canMoveBox"
                :original="option.original"
                :autoCrop="option.autoCrop"
                :fixed="option.fixed"
                :fixedNumber="option.fixedNumber"
                :centerBox="option.centerBox"
                :infoTrue="option.infoTrue"
                :fixedBox="option.fixedBox"
        ></VueCropper>
    </div>
</template>

<script>
    import VueCropper from "vue-cropper"

    export default {
        name: "Cropper",
        props: {
            fixedAvatar: {
                type: Array,
                default: () => {
                    return [1, 1]
                }
            },
            imgInfo: {
                type: String,
                default: ''
            }
        },
        components: {VueCropper},
        data() {
            return {
                option: {
                    img: this.imgInfo, // 裁剪图片的地址
                    info: true, // 裁剪框的大小信息
                    outputSize: 1, // 裁剪生成图片的质量
                    outputType: 'jpeg', // 裁剪生成图片的格式
                    canScale: false, // 图片是否允许滚轮缩放
                    autoCrop: true, // 是否默认生成截图框
                    fixedBox: true, // 固定截图框大小 不允许改变
                    fixed: true, // 是否开启截图框宽高固定比例
                    fixedNumber: this.fixedAvatar, // 截图框的宽高比例
                    full: true, // 是否输出原图比例的截图
                    canMoveBox: false, // 截图框能否拖动
                    original: false, // 上传图片按照原始比例渲染
                    centerBox: true, // 截图框是否被限制在图片里面
                    infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
                },
            }
        },
        watch: {
            imgInfo(newV) {
                if (newV) this.option.img = newV;
            }
        },
        methods: {}
    }
</script>

<style lang='less' scoped>
</style>
