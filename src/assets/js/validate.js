export default {
	/**
   	[isPhone 验证手机号]
    @params {[string]} phone
    @return Booleans(true or false)
    **/
	isPhone: function(phone) {
		var reg = new RegExp(/^1[3|5|7|8]\d{9}$/);
		return reg.test(phone);
	},
	/**
   	[isPwd 验证密码[6-16位数字或字母]]
    @params {[string]} pwd
    @return Booleans(true or false)
    **/
	isPwd: function(pwd) {
		var reg = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/);
		return reg.test(pwd);
	},
	/**
   	[isEmpty 检查是否为空]
    @params {[number | string]} val
    @return Booleans(true or false)
    **/
    isEmpty: function(val) {
        return val.trim().length <= 0;
    },
    /**
   	[isEmail 检查邮箱是否正确]
    @params {[string]} email:邮箱地址
    @return Booleans
    **/
    isEmail: function(email) {
    	var reg = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        return reg.test(email);
    }
}