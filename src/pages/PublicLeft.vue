<template>
    <ul class="public-left">
    	<li><img src="../assets/images/user.jpg">{{ userInfo.name }}</li>
    	<li>联系方式:{{ userInfo.phone }}</li>
    	<li>邮箱:{{ userInfo.email }}</li>
    	<li><a :href="userInfo.github">GitHub地址:{{ userInfo.github }}</a></li>
    </ul>
</template>

<script>
	export default {
  		name: 'PublicLeft',
  		props: {
			userInfo:{
				required: true,
				default:""
			}
	    }
  	}
</script>
<style lang="scss">
	@import "../assets/css/style.scss";

	.public-left {
		background-color: #42b983;
		padding: .625rem .9375rem;
		color: #fff;
		width: 11.5625rem;
		min-height: 31.25rem;
		float: left;
		>li {
			padding: .625rem 0;
			img {
				width: 5rem;
				height: 5rem;
				@include radius(50%);
				margin-right: .625rem;
				display: inline-block;
	    		vertical-align: middle;
			}
			a {
				color: #fff;
				word-break: break-all; /*支持IE，chrome，FF不支持*/
	    		word-wrap: break-word; /*支持IE，chrome，FF*/
			}
		}
	}
</style>