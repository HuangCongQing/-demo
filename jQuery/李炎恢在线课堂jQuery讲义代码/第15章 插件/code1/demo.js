

$(function () {

	//第一步，引入jquery文件
	//第二步，引入validate.js
	//第三步，加载validate
	$('form').validate();
	//第四步，不得为空，给表单字段class="required"

	
	var user = ['about', 'famliy', 'but', 'black'];
	$('form input[name=user]').autocomplete(user, {
		minChars : 0
	});
	
	
});


























