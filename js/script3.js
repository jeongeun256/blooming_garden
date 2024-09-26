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
	//store1 tap
	$('.gift_tab li a').click(function(){
		//탭의 메뉴의 a를 클릭하면
		$(this) .parent() .addClass('on') .siblings() .removeClass('on');
		//a의 부모에 on을 추가하고 나머지 형제 li는 on을 지워라. 
	});
	//store2 popup in tap
	$('.popuptab li a').click(function(){
		//탭의 메뉴의 a를 클릭하면
		$(this) .parent() .addClass('thumb') .siblings() .removeClass('thumb');
		//a의 부모에 on을 추가하고 나머지 형제 li는 on을 지워라. 
	});

	//store2 popup
	//popup이 안보이게 한다.
		$('.popup2_1').hide();
		//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
		$('.popupwindow2_1 a').click(function(){
			$('.popup2_1').fadeIn(100);
		});
		//popup안에 close를 클릭하면 popup이 안 보인다.
		$('.button2').click(function(){
			$('.popup2_1').fadeOut(100);
		});
		
	//store3 popup
	//popup이 안보이게 한다.
		$('.popup3_1').hide();
		//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
		$('.popupwindow3_1 a').click(function(){
			$('.popup3_1').fadeIn(100);
		});
		//popup안에 close를 클릭하면 popup이 안 보인다.
		$('.button3').click(function(){
			$('.popup3_1').fadeOut(100);
		});
		
	//store4 popup
	//popup이 안보이게 한다.
		$('.popup4_1').hide();
		//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
		$('.popupwindow4_1 a').click(function(){
			$('.popup4_1').fadeIn(100);
		});
		//popup안에 close를 클릭하면 popup이 안 보인다.
		$('.button4').click(function(){
			$('.popup4_1').fadeOut(100);
		});
});

