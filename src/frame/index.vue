<template>
	<div class="ying-index">
		<PublicLeft :userInfo="userInfo"></PublicLeft>
		<div class="public-right">
		    <ul class="public-menu">
		      <li :class="baseInfo"><router-link to="/baseInfo">基本信息</router-link></li>
		      <li :class="workHistory"><router-link to="/workHistory">项目经验</router-link></li>
		      <li :class="other"><router-link to="/other">教育经历</router-link></li>  
		      <li :class="mongoose"><router-link to="/mongoose">mongoose个人信息增删改查</router-link></li> 
		    </ul>
	    	<router-view></router-view>
	    </div>
	</div>
</template>

<script>
import PublicLeft from '../pages/PublicLeft.vue'

export default {
	name: 'Index',
	data () {
		return {
			userInfo: {name: 'liying', phone: '15195601069', email: '2332893183@qq.com', github: 'https://coding.net/u/missYing/p/baseInfo/git'},
		    baseInfo: false,
		    workHistory: false,
		    other: false,
		    mongoose: false
		}
	},
	mounted(){
	    this.getUserInfo()
	},
	components: {
		PublicLeft
	},
	methods: {
		initActive: function(path) { // 初始化menu选中
			switch(path){
				case "/":
				case "/baseInfo":
					this.baseInfo = "active"
					break;
				case "/other":
					this.other = "active"
					break;
				case "/mongoose":
					this.mongoose = "active"
					break;
				default:
					this.workHistory = "active"
			}
		},
	    getUserInfo: function(e) {
			let path = this.$route.path
			this.initActive(path) // 初始化menu选中

	        // 获取用户信息
			this.$axios.get('/api/user/getUserInfo')
			.then((res) => {
				if(res.status == 200) { //发送成功
                    if(res.data.errors) { //参数错误
                        this.$message.error(res.data._message)
                    }
                    else { //请求正确
                        if(res.data.length > 0) this.userInfo = res.data[0];
                    }
                }
			})
			.catch((reject) => {
				console.log(reject)
				this.$message.error('获取用户信息请求失败！')
			})
	    }
	},
	watch: {
		'$route' (to, from) { // 监听路由变化
			switch(from.path){
				case "/":
				case "/baseInfo":
					this.baseInfo = ""
					break;
				case "/other":
					this.other = ""
					break;
				case "/mongoose":
					this.mongoose = ""
					break;
				default:
					this.workHistory = ""
			}
			this.initActive(to.path)
		}
	}
}
</script>

<style lang="scss">
	@import "../assets/css/style.scss";

	.ying-index {
		width: 80%;
		margin: 1.25rem auto;
		position: relative;
		.public-right {
			margin-left: 14.375rem;
			.public-menu {
				background-color: #f0f0f0;
				margin-bottom: 1.5rem;
				li {
					display: inline-block;
					a {
						padding: .625rem .9375rem;
						display: block;
					}
				}
				li.active {
					background-color: #42b983;
					a {
						color: #fff;
					}
				}
			}
		}
	}
</style>
