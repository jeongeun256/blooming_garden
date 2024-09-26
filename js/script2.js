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
	
	//menu2~4 popup
	
	//.popup2_1이 안보이게 한다.
	$('.popup2_1').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow2_1 a').click(function(){
		$('.popup2_1').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button2').click(function(){
		$('.popup2_1').fadeOut(100);
	});
	
	//.popup2_2이 안보이게 한다.
	$('.popup2_2').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow2_2 a').click(function(){
		$('.popup2_2').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button2').click(function(){
		$('.popup2_2').fadeOut(100);
	});
	
	//.popup2_3이 안보이게 한다.
	$('.popup2_3').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow2_3 a').click(function(){
		$('.popup2_3').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button2').click(function(){
		$('.popup2_3').fadeOut(100);
	});
	
	//.popup2_4이 안보이게 한다.
	$('.popup2_4').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow2_4 a').click(function(){
		$('.popup2_4').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button2').click(function(){
		$('.popup2_4').fadeOut(100);
	});
	
	//.popup2_5이 안보이게 한다.
	$('.popup2_5').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow2_5 a').click(function(){
		$('.popup2_5').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button2').click(function(){
		$('.popup2_5').fadeOut(100);
	});
	
	//.popup2_6이 안보이게 한다.
	$('.popup2_6').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow2_6 a').click(function(){
		$('.popup2_6').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button2').click(function(){
		$('.popup2_6').fadeOut(100);
	});
	
	//.popup2_7이 안보이게 한다.
	$('.popup2_7').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow2_7 a').click(function(){
		$('.popup2_7').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button2').click(function(){
		$('.popup2_7').fadeOut(100);
	});
	
	
	//modal3_1이 안보이게 한다.
	$('.modal3_1').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow3_1 a').click(function(){
		$('.modal3_1').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button3').click(function(){
		$('.modal3_1').fadeOut(100);
	});
	
	//modal3_2이 안보이게 한다.
	$('.modal3_2').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow3_2 a').click(function(){
		$('.modal3_2').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button3').click(function(){
		$('.modal3_2').fadeOut(100);
	});
	
	//modal3_3이 안보이게 한다.
	$('.modal3_3').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow3_3 a').click(function(){
		$('.modal3_3').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button3').click(function(){
		$('.modal3_3').fadeOut(100);
	});
	
	//modal3_4이 안보이게 한다.
	$('.modal3_4').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow3_4 a').click(function(){
		$('.modal3_4').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button3').click(function(){
		$('.modal3_4').fadeOut(100);
	});
	
	//modal3_5이 안보이게 한다.
	$('.modal3_5').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow3_5 a').click(function(){
		$('.modal3_5').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button3').click(function(){
		$('.modal3_5').fadeOut(100);
	});
	
	//modal3_6이 안보이게 한다.
	$('.modal3_6').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow3_6 a').click(function(){
		$('.modal3_6').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button3').click(function(){
		$('.modal3_6').fadeOut(100);
	});
	
	//modal3_7이 안보이게 한다.
	$('.modal3_7').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow3_7 a').click(function(){
		$('.modal3_7').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button3').click(function(){
		$('.modal3_7').fadeOut(100);
	});
	
	//menu4_popup이 안보이게 한다.
	$('.popup4_1').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow4_1 a').click(function(){
		$('.popup4_1').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button4').click(function(){
		$('.popup4_1').fadeOut(100);
	});
	
	//menu4_popup이 안보이게 한다.
	$('.popup4_2').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow4_2 a').click(function(){
		$('.popup4_2').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button4').click(function(){
		$('.popup4_2').fadeOut(100);
	});
	
	//menu4_popup이 안보이게 한다.
	$('.popup4_3').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow4_3 a').click(function(){
		$('.popup4_3').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button4').click(function(){
		$('.popup4_3').fadeOut(100);
	});
	
	//menu4_popup이 안보이게 한다.
	$('.popup4_4').hide();
	//popup을 띄우는 글자/사진을 클릭하면 popup이 보인다.
	$('.popupwindow4_4 a').click(function(){
		$('.popup4_4').fadeIn(100);
	});
	//popup안에 close를 클릭하면 popup이 안 보인다.
	$('.button4').click(function(){
		$('.popup4_4').fadeOut(100);
	});
});

