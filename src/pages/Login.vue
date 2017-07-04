<template>
    <div class="ying-login">
        <h3>this is logo</h3>
        <el-form :label-position="labelPosition" :model="loginForm">
            <el-form-item label="用户名:">
                <el-input v-model="loginForm.name" placeholder="请输入手机号码" :maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="loginForm.password" placeholder="请输入密码(6-16位,字母和数字组成)" :maxlength="16"></el-input>
            </el-form-item>
            <el-button type="primary" size="large" :loading="loading" @click="loginSubmit">登录</el-button>
        </el-form>
    </div>
</template>

<script>
import validate from '../assets/js/validate'

export default {
    name: 'hello',
    data () {
        return {
            labelPosition: 'top',  //top:顶部对齐,left:左对齐,right:右对齐
            loginForm: {
              name: '',
              password: ''
            },
            loading: false
        }
    },
    methods: {
        validateData: function(name, password) { //验证数据是否正确
            if(!validate.isPhone(name)) {
                this.$message.error('请输入正确的用户名')
                return false
            }
            else if(!validate.isPwd(password)) {
                this.$message.error('请输入正确的密码')
                return false
            }
            else return true;
        },
        loginSubmit: function(e) {
            if(this.validateData(this.loginForm.name, this.loginForm.password)) { //验证数据通过
                e.target.innerText = '提交中...', this.loading = true

                //接口对接todo

                this.$message({
                    type: 'success',
                    message: '登录成功'
                })

                //登录成功后跳转首页
                this.$router.push('/')
            }
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
            padding: 0 2rem 2rem;
            font-size: 22px;
            text-align: center;
        }
        .el-form {
            background-color: #fff;
            padding: 2rem;
        }
        .el-button {
            display: block;
            width: 100%;
        }
    }
</style>
