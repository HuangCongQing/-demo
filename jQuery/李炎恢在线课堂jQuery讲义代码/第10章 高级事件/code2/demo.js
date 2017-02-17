

$(function () {

	/*
	//.bind绑定了三个事件
	$('.button').bind('click', function () {
		alert('事件不委托！');
	});
	
	//使用live绑定的是document，而非button
	//所以，永远只会绑定一次事件，
	$('.button').live('click', function () {
		alert('事件委托！');
	});
	
	//.bind无法动态绑定事件
	$('.button').bind('click', function () {
		$(this).clone().appendTo('#box');
	});
	
	//.live可以动态绑定事件，因为事件绑定在document上
	$('.button').live('click', function () {
		$(this).clone().appendTo('#box');
	});

	//.live绑定在document上，而点击. button其实是冒泡到document上
	//并且点击document时候，需要验证event.type和event.target才能触发
	
	//.live是不支持元素连缀的
	$('#box').children(0).live('click', function () {
		$(this).clone().appendTo('#box');
	});
	
	$('.button').live('click', function () {
		$(this).clone().appendTo('#box');
	});
	
	$('.button').die('click'); //和unbind一个意思
	
	$('.button').bind('click', function () {
		$(this).clone(true).appendTo('#box');
	});
	
	$('.button').live('click', function () {
		$('<input type="button" value="按钮" class="button" />').appendTo('#box');
	});	
	*/
	
	//.live的替代方法.delegate
	$('#box').delegate('.button', 'click', function () {
		$(this).clone().appendTo('#box');
	})
	
	$('#box').undelegate('.button', 'click');
	
	//live语义不清晰，由于他没有指定绑定了谁，所以不清晰
	//delegate语义清晰，绑定谁，谁就在开头
	

});


























