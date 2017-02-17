

$(function () {

	//普通绑定.bind
	//普通解绑.unbind
	
	//事件委托.live .delegate
	//解除委托.die .undelegate
	
	//新方法绑定.on
	//新方法解绑.off
	
	/*
	$('.button').on('click', function () {
		alert('替代bind');
	});
	
	$('.button').on('click', {user : 'Lee'}, function (e) {
		alert('替代bind' + e.data.user);
	});
	
	$('.button').on('mouseover mouseout', function (e) {
		alert('移入移出');
	});
	
	$('.button').on({
		mouseover : function () {
			alert('移入');
		},
		mouseout : function () {
			alert('移出');
		}
	});
	
	$('form').on('submit', function () {
		return false;
	});
	
	//$('form').on('submit', false);
	
	$('.button').on('click', function () {
		alert('替代bind');
	});
	
	$('.button').off('click');
	
	//替代.live .delegate
	$('#box').on('click', '.button', function () {
		$(this).clone().appendTo('#box');
	});
	
	//替代.live .delegate
	$('#box').on('click', '.button', function () {
		$(this).clone().appendTo('#box');
	});
	
	//移出事件委托
	$('#box').off('click', '.button');
	
	//仅一次事件触发
	$('.button').one('click', function () {
		alert('仅一次事件触发！');
	});
	
	//仅一次事件触发
	$('#box').one('click', '.button', function () {
		$(this).clone().appendTo('#box');
	});
	*/
	
	

	


});


























