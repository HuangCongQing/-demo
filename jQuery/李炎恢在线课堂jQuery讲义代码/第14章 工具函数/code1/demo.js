

$(function () {

	/*
	var str = '                    jQuery                     ';
	alert(str);
	alert($.trim(str));
	
	var arr = ['张三', '李四', '王五', '马六'];
	$.each(arr, function (index, value) {
		$('#box').html($('#box').html() + (index+1) + '.' + value + '<br />');
	});
	
	$.each($.ajax(), function (name, fn) {
		$('#box').html($('#box').html() + name + '<br /><br />');
	});
	
	var arr = [4,2,6,9,11,25,38,59];
	var arrGrep = $.grep(arr, function (element, index) {
		return index < 5 && element < 6;  //这里按道理是布尔值，但整体返回一个数组
	});
	alert(arrGrep);
	
	var arr = [4,2,6,9,11,25,38,59];
	var arrMap = $.map(arr, function (element, index) {
		//return index < 5 && element < 6;	//这里就是按布尔值返回的
		 if (index < 5 && element < 6) {
			return element + 1;
		 }
	});
	
	alert(arrMap);
	
	var arr = [4,2,6,9,11,25,38,59];
	alert($.inArray(11, arr));
	
	var arr = [4,2,6,9,11,25,38,59];
	var arr2 = [200,300];
	alert($.merge(arr, arr2));

	
	var arr = [5,2,9,4,11,57,89,1,23,8];
	var arr2 = [2,9,4];
	var arr3 = $.merge(arr, arr2);
	alert($.unique(arr3));
	
	var divs = $('div').get();
	divs = divs.concat($('.box').get());
	alert($(divs).size());
	$.unique(divs);
	alert($(divs).size());
	*/
	
	alert($('li').toArray().length);
	alert($($('li').toArray()).size());
	
	
});


























