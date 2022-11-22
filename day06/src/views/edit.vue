<template>
    <div class="li">
        <breadcrumb></breadcrumb>
        <div class="edit">
            <div id="box"></div>
        </div>
        <div class="btn">
            <el-button type="primary">提交</el-button>
        </div>
    </div>
</template>

<script>
import breadcrumb from "../components/bread.vue";
import ip from "wangeditor"
export default {
    mounted() {
        const editor = new ip('#box')
		editor.create()
    },
      components: { breadcrumb },
}
</script>

<style lang="scss" scoped>
.li{
    overflow: hidden;
}
.edit{
    display: flex;
    margin-top: 30px;
}
.box{
    width: 100%;
    margin-top: 20px;
}
#box{
    width: 100% !important;
}
.btn{
    text-align: center;
    margin-top: 30px;
}
</style>