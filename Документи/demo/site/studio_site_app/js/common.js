$(document).ready(function() {

	$('header,footer').animate({
		'width': '100%'
	},1500)
	
	$('.button').click(function(){
		$('.menu').css('width');
		if($('.menu').css('width')==='0px'){
				$('.menu').animate({
				width : 200,
				opacity: 1		
				},500)
		}
		else if($('.menu').css('width')==='200px'){
				$('.menu').animate({
				width : 0,
				opacity: 0	
				},500)	
		}
	})
	$('.menu li a').click(function(){
		if($('.menu').css('width')==='200px'){
				$('.menu').animate({
				width : 0,
				opacity: 0	
				},500)
				
		}
	})
})

