/*
$(function () {
	
	$('#box').css('color', 'red');
	
});

jQuery(function () {
	
	jQuery('#box').css('color', 'red');
	
});

alert($ === jQuery);  //相等、恒等

$().css('color', 'red');


$(function () {
	/*
	//alert($);			//jQuery对象的内部
	alert($());			//返回的jQuery对象
	alert($('#box'));	//返回的也是jQuery对象
	alert($('#box').css('color', 'red'));		//还是返回的jQuery对象

	
	$('#box').css('color', 'red').css('font-size', '200px').css('font-weight', 'bold');

window.onload = function () {
	$('#box').css('color', 'red');
}

window.onload = function () {
	alert(1);
}
	
window.onload = function () {
	alert(2);
}

$(document).ready(function () {
	alert(1);	
});

$(document).ready(function () {
	alert(2);	
});

	
});

$(function () {
	alert(1);	
});

$(function () {
	alert(2);	
});

$(function () {
	//alert($('#box'));			//返回jQuery对象
	//alert(document.getElementById('box'));		//[object HTMLDivElement]，原生DOM对象
	
	//alert($('#box').get(0));		//[object HTMLDivElement]
	
	//alert($(document.getElementById('box')).css('color', 'red'));		//jQuery对象和DOM对象之间的互换
});

	*/

	/*
var $$ = jQuery;
	
$(function () {						//jQuery库在base库之前引用，那么$所有权就是base库的
	

	alert($('#box').ge(0));
	alert($$('#box').get(0));
	
	
});
*/

jQuery.noConflict();				//自行了断，把自己的$所有权剔除

var $$ = jQuery;

$(function () {						//jQuery库在base库之后引用，那么$所有权就是jQuery库的
	

	alert($('#box').ge(0));
	alert($$('#box').get(0));
	
	
});







