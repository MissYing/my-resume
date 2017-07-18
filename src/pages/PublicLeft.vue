<template>
    <ul class="public_left">
    	<li><img src="../assets/images/user.jpg"></li>
    	<li class="name">{{ userInfo.name }}</li>
    	<li class="intention">求职意向:移动前端/web前端</li>
    	<li class="address">上海</li>
    	<li class="phone">{{ userInfo.phone }}</li>
    	<li class="email">{{ userInfo.email }}</li>
    	<li class="github"><a :href="userInfo.github">{{ userInfo.github }}</a></li>
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
</style>