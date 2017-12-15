$(function(){

// 侧边栏	
$('#sideOnoff').click(function(){
	$(this).animate({right:-26},function(){
		$('#side').animate({right:0});
	});
});
$('#side .li1 a').click(function(){
	$(this).parent().parent().animate({right:-154},function(){
		$('#sideOnoff').animate({right:0});
	});
});

// 导航
$('.navA a').mouseenter(function(){
	var i = $(this).index();
	if (i!=0) {
		$('.navLi li').stop().slideUp();
		$('.navLi li').eq(i-1).stop().slideDown();
	}
});
$('.navLi').mouseleave(function(){
	$(this).find('li').stop().slideUp();
});

// 回到顶部
$('#goTop').click(function(){
	$('html,body').animate({scrollTop:0});
});
// 头部轮播图
carousel();
function carousel(){
	var obj = $('.carousel');
	var oDiv = obj.find('div');
	var oDot = obj.find('a');
	var i = 0;
	var timer = null;
	oDot.mouseenter(function(){
		i = $(this).index();
		fn1();
	});
	autoPlay();
	obj.hover(function (){
		clearInterval(timer);
	}, function (){
		autoPlay();
	});
	function autoPlay(){
		timer = setInterval(function(){
			i++;
			if (i > oDot.length-1) {
				i=0;
			}
			fn1();
		},3000);
	}
	function fn1(){
		oDot.removeClass('active');
		oDot.eq(i).addClass('active');
		oDiv.stop().animate({opacity:0},1000);
		oDiv.eq(i).stop().animate({opacity:1},1000);
	}
}

// 轮播图2
carousel2();
function carousel2(){
	var oA = $('.content-1-l .title a');
	var ul = $('.content-1-l .ulWrap ul');
	var i = 0;

	oA.mouseenter(function(){
		i = $(this).index();
		fn1();
	});

	function fn1(){
		oA.removeClass('active');
		oA.eq(i).addClass('active');
		ul.stop().animate({left:-865*i});
	}
}
// 轮播图3
carousel3();
function carousel3(){
	var obj = $('.carousel3');
	var prev = obj.find('.prev');
	var next = obj.find('.next');
	var liList = obj.find('.liList');
	var i = 0;
	prev.click(function(){
		i--;
		if (i < 0) {
			i = 2;
			liList.css('left',-2700);
		}
		liList.stop().animate({left:-900*i});
	});
	next.click(function(){
		i++;
		if (i > 3 ) {
			i = 1;
			liList.css('left',0);
		}
		liList.stop().animate({left:-900*i});
	});
}
// 轮播图4
carousel4();
function carousel4(){
	var obj = $('.carousel4');
	var imgList = obj.find('.imgList');
	var prev = obj.find('.prev');
	var next = obj.find('.next');
	var i = 0 ;
	var timer = null;
		prev.click(function(){
			i--;
			if (i < 0) {
				i = 7;
				imgList.css('left',-2376);
			}
			fn1();
		});
		next.click(function(){
			i++;
			if (i > 8 ) {
				i = 1;
				imgList.css('left',0);
			}
			fn1();
		});

	autoPlay();

	obj.hover(function (){
		clearInterval(timer);
	}, function (){
		autoPlay();
	});
	function autoPlay(){
		timer = setInterval(function(){
			i++;
			if (i > 8 ) {
				i = 1;
				imgList.css('left',0);
			}
			fn1();
		},2000);
	}
	function fn1(){
		imgList.stop().animate({left:-297*i});
	}
}




});