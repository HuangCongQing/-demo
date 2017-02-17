

$(function () {

	/*
	//冒泡和阻止冒泡
	$('input').click(function (e) {
		e.stopPropagation();				//禁止冒泡
		alert('input');
	});
	
	$('div').click(function (e) {
		e.stopPropagation();	
		alert('div');
	});
	
	$(document).click(function () {
		alert('document');
	});
	
	$('a').click(function (e) {
		e.preventDefault();				//阻止默认行为
		alert('ycku.com');
	});
	
	//禁止表单提交
	$('input').click(function (e) {	
		e.preventDefault();
		alert('表单提交');
	});
	$('form').submit(function (e) {
		e.preventDefault();
	});
	
	//阻止冒泡又禁止了默认行为

	
	//阻止冒泡又禁止了默认行为
	$('a').click(function (e) {
		alert('ycku.com');
		return false;
	});
	
	$('div').click(function () {
		alert('div');
	});
	
	$(document).click(function () {
		alert('document');
	});
	
	$('a').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		alert(e.isDefaultPrevented());
		alert(e.isPropagationStopped());
	});
	
	$('a').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
	});
	
	$('a').click(function (e) {
		alert(e.isDefaultPrevented());
		alert(e.isPropagationStopped());
	});
	*/
	

	$('a').click(function (e) {
		e.stopImmediatePropagation();
		alert(e.isImmediatePropagationStopped());
		alert('a1');
	});
	
	$('a').click(function (e) {
		alert('a2');
	});
	
	$('div').click(function (e) {
		alert('div');
	});
	
	$(document).click(function () {
		alert('document');
	});
	
	
});


























