<template>
    <div class="box">
        <breadcrumb></breadcrumb>
        <div class="admin">
            <h2>管理员设置</h2>
            <div>姓名: </div>
            <div>注册时间: </div>
            <div>管理员权限: </div>
            <div>管理员ID: </div>
            <div>更换头像: 
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
     >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
        </div>
    </div>
</template>

<script>
import breadcrumb from "../components/bread.vue";
export default {
  components: { breadcrumb },
    data() {
        return {
            imageUrl:false
        }
    },
}
</script>

<style lang="scss" scoped>

.admin{
    width: 1200px;
    height: 600px;
    margin: 20px auto;
    background-color: #f9fafc;
    padding: 0 20px;
    h2{
        text-align: center;
    }
    div{
        height: 60px;
        line-height: 60px;
    }
}
</style>