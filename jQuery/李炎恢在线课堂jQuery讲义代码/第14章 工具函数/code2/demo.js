

$(function () {

	/*
	var arr = [1,2,3];
	alert($.isArray(arr));
	
	var fn = function () {};
	alert($.isFunction(fn));
	
	var obj = {};
	alert($.isEmptyObject(obj));
	
	var obj = {};
	obj = new Object();
	alert(obj);
	obj = window;
	obj = new Object('name');
	alert(obj);
	alert($.isPlainObject(obj));
	
	alert($.contains($('#box').get(0), $('#pox').get(0)));
	
	//var arr = [1,2,3];
	var obj = {};
	alert($.type(obj));
	
	
	var num = 1.23;
	alert($.isNumeric(num));
	
	var win = window;
	alert($.isWindow(window));
	
	var obj = {
		name : 'Lee',
		age : 100
	};
	
	alert($.param(obj));
	

	//alert($.browser.msie + ':' + $.browser.version);
	//alert($.browser.mozilla);
	
	if ($.support.opacity == true) {
		$('#box').css('opacity', 0.5);
	} else {
		$('#box').css('filter', 'alpha(opacity=50)');
	}
	*/
	

	
	var obj = {
		name : 'Lee',
		test : function () {
			//var _this = obj;
			//alert(_this.name);
			alert(this.name);
		}
	};
	
	obj.test();
	$('#box').click($.proxy(obj, 'test'));

	
});


























