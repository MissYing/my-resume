<template>
	<div class="ying-index">
		<ul class="public_left">
	    	<li><img src="../assets/images/user.jpg"></li>
	    	<li class="name">{{ userInfo.name }}</li>
	    	<li class="intention">求职意向:移动前端/web前端</li>
	    	<li class="address">上海</li>
	    	<li class="phone">{{ userInfo.phone }}</li>
	    	<li class="email">{{ userInfo.email }}</li>
	    	<li class="github"><a :href="userInfo.github">{{ userInfo.github }}</a></li>
	    </ul>
		<div class="public-right">
		    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
			  	<el-menu-item index="1"><router-link to="/baseInfo">基本信息</router-link></el-menu-item>
			  	<el-menu-item index="2"><router-link to="/workHistory">项目经验</router-link></el-menu-item>
			  	<el-menu-item index="3"><router-link to="/education">教育经历</router-link></el-menu-item>
			  	<el-menu-item index="4"><router-link to="/mongoose">mongoose个人信息增删改查</router-link></el-menu-item>
			</el-menu>
	    	<router-view></router-view>
	    </div>
	</div>
</template>

<script>

export default {
	name: 'Index',
	data () {
		return {
			activeIndex: '1',
			userInfo: {name: 'liying', phone: '15195601069', email: '2332893183@qq.com', github: 'https://coding.net/u/missYing/p/my-resume/git'},
		    baseInfo: false,
		    workHistory: false,
		    education: false,
		    mongoose: false
		}
	},
	mounted() {
	    this.getUserInfo()
	},
	components: {
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key)
        	this.activeIndex = key //默认选中项
      	},
		initActive: function(path) { // 初始化menu选中
			switch(path){
				case "/workHistory":
					this.activeIndex = '2'
					break;
				case "/education":
					this.activeIndex = '3'
					break;
				case "/mongoose":
					this.activeIndex = '4'
					break;
				default:
					this.activeIndex = '1'
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
	}
}
</script>

<style lang="scss">
	@import "../assets/css/style.scss";

	.ying-index {
		width: 80%;
		margin: auto;
		padding-top: 1.25rem;
		position: relative;
		.public_left {
			background-color: #42b983;
			padding: .625rem .9375rem;
			color: #fff;
			width: 11.5625rem;
			min-height: 31.25rem;
			float: left;
			>li {
				position: relative;
				padding: .625rem 0;
				img {
					width: 6rem;
					height: auto;
					display: block;
					margin: auto;
				}
				a {
					color: #fff;
					word-break: break-all; /*支持IE，chrome，FF不支持*/
		    		word-wrap: break-word; /*支持IE，chrome，FF*/
				}
			}
			.address:before, .phone:before, .email:before, .github:before {
				content: "";
				display: inline-block;
				vertical-align: middle;
				margin-right: .5rem;
				width: 1rem;
				height: 1rem;
				@include bg();
			}
			.address:before {
				background-image: url('../assets/images/address.png');
			}
			.phone:before {
				background-image: url('../assets/images/phone.png');
			}
			.email:before {
				background-image: url('../assets/images/email.png');
			}
			.github:before {
				background-image: url('../assets/images/github.png');
			}
			.name {
				@include fontSize(1.5rem);
				text-align: center;
			}
			.intention {
				@include fontSize(.9rem);
				border-top: .01rem solid #e8e8e8;
				color: #1f1809;
				@include paddingB(3rem);
			}
		}
		.public-right {
			margin-left: 14.375rem;
			.el-menu {
				margin-bottom: 1.5rem;
				overflow: hidden;
				.el-menu:after, .el-menu:before {
					display: none;
				}
				.el-menu-item {
					line-height: inherit;
					height: inherit;
					border-bottom-width: 0;
					&:hover {
						border-bottom: none;
					}
					a {
						line-height: 2.8125rem;
						height: 2.8125rem;
						display: block;
					}
				}
				.is-active {
					background-color: #42b983;
					color: #fff;
				}
			}
		}
	}
</style>
