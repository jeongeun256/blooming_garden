$(function(){
	//서브메뉴를 숨긴다.
	$(".submenu_wrap").hide();
	//gnb li에 마우스를 올리면,
	$("#gnb li").mouseenter(function(){
		
		$(".submenu_wrap").stop().slideDown();
	});
	$("nav").mouseleave(function(){
		
		$(".submenu_wrap").stop().slideUp();
	});	
	
	//news_tap
	$('.news_tap li a').click(function(){
		//탭의 메뉴의 a를 클릭하면
		$(this).parent().addClass('on').siblings().removeClass('on');
		//a의 부모에 on을 추가하고 나머지 형제 li는 on을 지워라. 
	});
});
