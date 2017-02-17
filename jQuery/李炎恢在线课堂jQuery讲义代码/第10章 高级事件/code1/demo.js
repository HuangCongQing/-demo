

$(function () {

	/*
	$('input').click(function () {
		alert('我将要使用模拟用户操作来触发！');
	});	
	
	//模拟用户点击操作
	$('input').trigger('click');
	
	$('input').click(function () {
		alert('我将要使用模拟用户操作来触发！');
	}).trigger('click');

	$('input').click(function (e, data1, data2) {
		alert(data1 + '|' + data2);
	}).trigger('click', ['123', 'abc']);	
	
	$('input').click(function (e, data1, data2) {
		alert(data1 + '|' + data2);
	}).trigger('click', ['123', 'abc']);	
	
	//trigger额外数据，只有一条的时候，可以省略中括号，多条不能省略，第二条之后就无法识别了
	
	$('input').click(function (e, data1, data2, data3, data4) {
		alert(data1 + '|' + data2 + '|' + data3[1] + '|' + data4.user);
	}).trigger('click', ['123', 'abc', ['a', 'b' , 'c'], {user : 'Lee'}]);	
	
	$('input').bind('click', {user : 'Lee'} ,function (e, data1, data2, data3, data4) {
		alert(data1 + '|' + data2 + '|' + data3[1] + '|' + data4.user + '|' + e.data.user);
	}).trigger('click', ['123', 'abc', ['a', 'b' , 'c'], {user : 'Lee'}]);	
	
	
	//click,mouseover这些系统事件，自定义事件就是自己起名字的事件
	$('input').bind('myEvent', function () {
		alert('自定义事件！');
	}).trigger('myEvent');
	
	$('input').click(function () {
		alert('我将要使用模拟用户操作来触发！');
	}).click();
	
	$('input').click(function () {
		alert('我将要使用模拟用户操作来触发！');
	}).triggerHandler('click');
	
	$('input').click(function () {
		alert('我将要使用模拟用户操作来触发！');
	}).triggerHandler('click');
	
	//trigger提交后跳转，没有阻止默认行为
	//$('form').trigger('submit');
	
	//trigger提交后没有跳转，默认行为被阻止了
	//$('form').triggerHandler('submit');
	
	$('form').submit(function (e) {
		e.preventDefault();
	}).trigger('submit');
	
	$('input').click(function () {
		alert('我将要使用模拟用户操作来触发！');
	}).trigger('click');
	
	$('input').click(function () {
		alert('我将要使用模拟用户操作来触发！');
	}).triggerHandler('click');
	
	$('input').click(function () {
		alert('我将要使用模拟用户操作来触发！');
	}).trigger('click').css('color', 'red');					//返回jQuery对象，可以连缀
	
	$('input').click(function () {
		alert('我将要使用模拟用户操作来触发！');
		return 123;
	}).triggerHandler('click').css('color', 'red');		//返回return值，或undefined
	
	$('div').bind('myEvent', function () {
		alert('自定义事件！');
	})
	
	$('.d3').trigger('myEvent');						//会冒泡
	
	$('div').bind('myEvent', function () {
		alert('自定义事件！');
	})
	
	$('.d3').triggerHandler('myEvent');				//不会冒泡
	*/


	$('input').bind('click.abc', function () {
		alert('abc');
	});
	
	$('input').bind('click.xyz', function () {
		alert('xyz');
	});
	
	$('input').bind('mouseover.abc', function () {
		alert('abc');
	});
	
	//$('input').unbind('click.abc');
	//$('input').unbind('.abc');
	$('input').trigger('click.abc');
	
});


























