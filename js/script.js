$(function(){
	//서브메뉴를 숨긴다.
	$(".submenu_wrap").hide();
	//gnb li에 마우스를 올리면
	$("#gnb li").mouseenter(function(){
		
		$(".submenu_wrap").stop().slideDown();
	});
	$("nav").mouseleave(function(){
		
		$(".submenu_wrap").stop().slideUp();
	});	
});