$(function(){


// 设置背景图的高
$(window).resize(function(){
	imgHeight();
});	
imgHeight();
function imgHeight(){
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	var img = $('#content>li>img');
	if (w > 980) {
		img.css('height',h);
	}
}
	


$(window).scroll(function(){
	var t = $(this).scrollTop();
	var h = $(this).outerHeight();
	var goTop = $('#goTop');
	var li = $('#content>li');
	var a = $('.nav a');
	if(t>h){
		goTop.show();
	}else{
		goTop.hide();
	}
	li.each(function(i){
		if (t > $(this).offset().top - 10) {
			a.removeClass('active');
			a.eq(i).addClass('active');
		}
	});
});

// 点击回到顶部
$('#goTop').click(function(){
	$('html,body').animate({scrollTop:0});
});

// 导航移入字体颜色改变
aHover();
function aHover(){
	$('.nav a').hover(function(){
		var i = $(this).hasClass('active');
		if (!i) {
			$(this).css('color','#f84343');
		}
	},function(){$(this).css('color','#fff');});
}

// 点击导航定位
$('.nav a').click(function(){
	var This = $(this);
	var j = $(this).index();
	var n = $('#content>li').eq(j).offset().top;
	$(this).css('color','#fff');
	$('html,body').animate({scrollTop:n},function(){
		$('.nav a').removeClass('active');
		This.addClass('active');
	});
});


});