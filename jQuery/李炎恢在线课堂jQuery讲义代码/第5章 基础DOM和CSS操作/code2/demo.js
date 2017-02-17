

$(function () {

	//alert($('div').css('color'));
	//$('div').css('color', 'red');
	/*
	var box = $('div').css(['color', 'width', 'height']);
	
	
	for (var i in box) {
		alert(i + ':' + box[i]);
	}
	
	$.each(box, function (attr, value) {
		alert(attr + ':' + value);
	});
	
	
	//alert($('div')[0]);
	
	$('div').each(function (index, element) {
		alert(index + ':' + element);
	});

	
	//$('div').css('color', 'red').css('background-color', '#ccc');
	$('div').css({
		'color' : 'blue',
		'background-color' : '#eee',
		'width' : '200px',
		'height' : '30px'
	});
	

	
	var w = xxx;
	w + x = 20
	w = w+ 20 * 20 全局很难受

	
	$('div').css('width', function (index, value) {
		//局部操作，很舒服
		return parseInt(value) - 500 + 'px';
	})
	

	
	
	//$('div').addClass('red');
	//$('div').addClass('red bg size');
	//$('div').removeClass('bg');
	//$('div').removeClass('red size');
	
	$('div').click(function () {
		$(this).toggleClass('red size');				//两个样式之间的切换，默认样式和指定样式的切换
	});

	
	var count = 0;
	$('div').click(function () {
		alert('');
		$(this).toggleClass('red size', count++ % 5 == 0);			//频率问题
	});

	
	
	$('div').click(function () {
		//这里只是click的局部，而又是toggle的全局
		$(this).toggleClass('red');			
		if ($(this).hasClass('red')) {
			$(this).removeClass('green');
		} else {
			$(this).toggleClass('green');
		}
	});

	
	$('div').click(function () {
		$(this).toggleClass(function () {
			return $(this).hasClass('red') ? 'green' : 'red';
		});				
	});

	
	$('div').click(function () {
		$(this).toggleClass(function () {
			//局部
			if ($(this).hasClass('red')) {
				$(this).removeClass('red');
				return 'green';
			} else {
				$(this).removeClass('green');
				return 'red';
			}
		});				
	});
	

	
	var count  = 0;
	$('div').click(function () {
		$(this).toggleClass(function () {
			//局部
			if ($(this).hasClass('red')) {
				$(this).removeClass('red');
				return 'green';
			} else {
				$(this).removeClass('green');
				return 'red';
			}
		}, count++ % 2 == 0);		//出现问题			
	});
	
	*/	
	
	
	var count  = 0;
	$(document).click(function () {
		$('div').toggleClass(function (index, className, switchBool) {
			alert(index + ':' + className + ':' + switchBool);
			//局部
			if ($(this).hasClass('red')) {
				$(this).removeClass('red');
				return 'green';
			} else {
				$(this).removeClass('green');
				return 'red';
			}
		}, count++ % 2 == 0);				
	});
	
});


























