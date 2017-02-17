

$(function () {

	//$('div').wrap('<strong class="b"></strong>');
	//$('div').wrap('<strong />');
	//$('div').wrap('<strong>123</strong>');
	//$('div').wrap('<strong><em></em></strong>');
	
	//$('div').wrap($('strong').get(0));
	//$('div').wrap(document.createElement('strong'));
	
	//$('div').wrap(function (index) {
	//	return '<strong>' + index + '</strong>'
	//});
	
	//$('div').wrap('<strong><em></em></strong>');
	//$('div').unwrap();
	//$('div').unwrap();
	
	//$('div').wrap('<strong></strong>');
	//$('div').wrapAll('<strong></strong>');
	//$('div').wrapAll(document.createElement('strong'));
	
	//$('div').wrap('<strong></strong>');
	//$('div').wrapInner('<strong></strong>');
	//$('div').wrapInner(document.createElement('strong'));
	//$('div').wrapInner(function (index) {
	//	return '<strong>' + index + '</strong>'
	//});
	
	$('div').click(function () {
		alert('ycku.com');
	});
	
	//$('div').clone(true).appendTo('body');
	//$('div').remove();
	//$('div').remove('.box');
	
	//alert($('div').remove().get(0));
	//$('div').remove().appendTo('body');
	//$('div').detach().appendTo('body');
	//$('div').empty();
	
	//$('div').replaceWith('<span>DOM</span>');
	$('<span>DOM</span>').replaceAll('div');
	
});


























