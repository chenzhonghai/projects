$(function(){

// 顶部移入显示
show($('.mytaobao'));
show($('.favorite'));
show($('.mobile'));
show($('.seller'));
show($('.sitemap'));
function show(obj){
	obj.mouseover(function(){
		$(this).css('background','#fff');
		$(this).find('div').show();
	});
	obj.mouseout(function(){
		$(this).css('background','none');
		$(this).find('div').hide();
	});
}

// 搜索框获得焦点清除默认值
clearValue($('.search .text'));
clearValue($('.fixed-search .text'));
function clearValue(obj){
	obj.focus(function(){
		if (obj.val() == '搜索 天猫 商品/品牌/店铺') {
			obj.val('');
		}
	});
	obj.blur(function(){
		if (obj.val() == '') {
			obj.val('搜索 天猫 商品/品牌/店铺');
		}
	});
}

$(window).scroll(function(){
// 固定定位搜索栏、左侧边栏显示隐藏
	var i = $(this).scrollTop();
	if (i >=$('#content').offset().top-200) {
		$('#sidebar-left').fadeIn();
		$('#fixed-search').slideDown();
	}else{
		$('#sidebar-left').fadeOut();
		$('#fixed-search').slideUp();
	}
// 可视区对应的左侧边栏菜单显示颜色
	showColor($('.content>div'));
	function showColor(obj){
		var oA = $('#sidebar-left a');
		obj.each(function(j){
			if (i > $(this).offset().top-300 && i < $(this).offset().top + $(this).outerHeight() - 300 ) {
				if (j == 1) {
					oA.eq(j).css('background','#00b262');
				}
				if (j == 2) {
					oA.eq(j).css('background','#7a45e5');
				}
				if (j == 3) {
					oA.eq(j).css('background','#EA5F8D');
				}
				if (j == 4) {
					oA.eq(j).css('background','#0AA6E8');
				}
				if (j == 5) {
					oA.eq(j).css('background','#64c333');
				}
				if (j == 6) {
					oA.eq(j).css('background','#F15453');
				}
				if (j == 7) {
					oA.eq(j).css('background','#19C8A9');
				}
				if (j == 8) {
					oA.eq(j).css('background','#ff0036');
				}
			}else{
				if (j == 0 || j == 9) {
					return;
				}
				oA.eq(j).css('background','#626262');
			}
		});
	}


});

// 点击左侧边栏菜单定位
Position($('#sidebar-left a'));
function Position(obj){
	obj.click(function(){
		var i = $(this).index();
		if (i == 0) {
			$('html,body').animate({scrollTop:$('.brand').offset().top-50});
		}
		if (i == 1) {
			$('html,body').animate({scrollTop:$('.tmall-mart').offset().top-50});
		}
		if (i == 2) {
			$('html,body').animate({scrollTop:$('.tmall-hk').offset().top-50});
		}
		if (i == 3) {
			$('html,body').animate({scrollTop:$('.electronic').offset().top-50});
		}
		if (i == 4) {
			$('html,body').animate({scrollTop:$('.home').offset().top-50});
		}
		if (i == 5) {
			$('html,body').animate({scrollTop:$('.fashion').offset().top-50});
		}
		if (i == 6) {
			$('html,body').animate({scrollTop:$('.grocery').offset().top-50});
		}
		if (i == 7) {
			$('html,body').animate({scrollTop:$('.outdoors').offset().top-50});
		}
		if (i == 8) {
			$('html,body').animate({scrollTop:$('.like').offset().top-50});
		}
		if (i == 9) {
			$('html,body').animate({scrollTop:0});
		}
	});
}

// 右侧边栏移入菜单显示子元素
show2($('.sidebar-right a'));
function show2(obj){
	obj.mouseover(function(){
		$(this).css('background','#fe0c3f');
		$(this).find('em').show();
		$(this).find('p').show().stop(true).animate({left:-90,opacity:1});
	});
	obj.mouseout(function(){
		$(this).css('background','#000');
		$(this).find('em').hide();
		$(this).find('p').animate({left:-120,opacity:0},function(){
			$(this).hide();
		});
	});
}

// 右侧边栏点击回到顶部
$('.toTop').click(function(){
	$('html,body').animate({scrollTop:0});
});

// 商品分类移入显示
show1($('.category-list li'));
show1($('.categoryContent>li'));
function show1(obj){
	obj.hover(function(){
		var num = $(this).index();
		var oA = $('.category-list li').eq(num).find('a');
		obj.parent().parent().css('width','850px');
		$('.category-list li').eq(num).css({'background':'#fff'});
		$('.categoryContent>li').eq(num).show();
		oA.css('fontWeight','bold');
		if (num==0 || num==3) {
			oA.css('color','#e54077');
		}
		if (num==1 || num==5 || num==9 || num==11) {
			oA.css('color','#427def');
		}
		if (num==2 || num==4) {
			oA.css('color','#6347ed');
		}
		if (num==6) {
			oA.css('color','#fa5c5c');
		}
		if (num==7 || num==8 || num==12) {
			oA.css('color','#f7a831');
		}
		if (num==10 || num==14) {
			oA.css('color','#dd2727');
		}
		if (num==13 || num==15) {
			oA.css('color','#3bc7b0');
		}	
	},function(){
		obj.parent().parent().css('width','auto');
		$('.category-list li').eq($(this).index()).find('a').css({'color':'#fff','fontWeight':'normal'});
		$('.category-list li').eq($(this).index()).css({'background':''});
		$('.categoryContent>li').eq($(this).index()).hide();
	});
}

// 轮播图
carousel($('.carousel'));
function carousel(obj){
	var aDot = obj.find('li');
	var aImg = obj.find('img');
	var aColor = ['#e8e8e8','#d30039','#e2e5e5','#6bada9','#7446ee','#fd68a0',];
	var iNow = 0;
	var timer = null;

	fade();
	aDot.click(function(){
		iNow = $(this).index();
		fade();
	});
	autoPlay();
	obj.hover(function(){
		clearInterval(timer);
	},autoPlay);
	function autoPlay(){
		timer = setInterval(function(){
			iNow++;
			if (iNow > aDot.length-1) {
				iNow = 0;
			}
			fade();
		},2000);
	}
	function fade(){
		aImg.fadeOut().css('zIndex', 1);
		aImg.eq(iNow).fadeIn().css('zIndex', 2);
		aDot.removeClass('active');
		aDot.eq(iNow).addClass('active');
		var oColor = aColor[iNow];
		$('#carousel').animate({backgroundColor: aColor[iNow]})
	}
}

// 迷你轮播图
carousel1($('.min-carousel'));
function carousel1(obj){
	var aSpan = obj.find('span');
	var aA = obj.find('a');
	var iNow = 0;
	fn1();
	aSpan.mouseover(function(){
		iNow = $(this).index();
		fn1();
	});
	autoPlay();
	obj.hover(function(){
		clearInterval(timer);
	},autoPlay);
	function autoPlay(){
		timer = setInterval(function(){
			iNow++;
			if (iNow > aSpan.length-1) {
				iNow = 0;
			}
			fn1();
		},2000);
	}

	function fn1(){
		aSpan.removeClass('active');
		aSpan.eq(iNow).addClass('active');
		aA.hide();
		aA.eq(iNow).show();
	}
}

// 鼠标移入改变图片透明度
Opacity($('.brand-activity img'));
Opacity($('.brand-ad img'));
Opacity($('.commodity-ad img'));
Opacity($('.min-carousel img'));
Opacity($('.commodity-list img'));
function Opacity(obj){
	obj.mouseover(function(){
		$(this).css('opacity','0.7');
	});
	obj.mouseout(function(){
		$(this).css('opacity','1');
	});
}



});