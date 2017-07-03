<template>
    <div class="ying-login">
        <h3>this is logo</h3>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="账号:">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="formLabelAlign.password"></el-input>
            </el-form-item>
            <el-button type="primary" size="large" :loading="loading">主要按钮</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            labelPosition: 'top',  //top:顶部对齐,left:左对齐,right:右对齐
            formLabelAlign: {
              name: '',
              password: '',
              loading: false
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init: function(){
            this.$message({
                type: 'success',
                message: '登录成功'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '../assets/css/style.scss';

    .ying-login {
        @include contentTransform();
        width: 360px;
        h3 {
            color: #20a0ff;
            padding: 2rem;
            font-size: 22px;
            text-align: center;
        }
        .el-form {
            background-color: #fff;
            padding: 2rem;
        }
    }
</style>
