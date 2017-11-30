$(function(){


// 显示win10菜单下面的子菜单
menuDown($('#win10Menu .ToolBar'));
function menuDown(obj){
	var onoff = true;
	obj.find('p').click(function(){
		if (onoff) {
			obj.find('ul').stop().slideDown();
			obj.find('span').html('&and;');
			onoff = false;
		}else{
			obj.find('ul').stop().slideUp();
			obj.find('span').html('&or;');
			onoff = true;
		}
	});	
}
// 关闭页面
$('#win10Menu .close').click(function(){
	if(confirm('您确定要关闭桌面吗？')){
		$('html').remove();
	}
});

// 显示win10菜单
showMenu();
function showMenu(){
	var onoff = true;
	var WM = $('#win10Menu');
	$('#win10').click(function(ev){
		if (onoff) {
			WM.stop().animate({bottom:41});
			onoff = false;
		}else{
			WM.stop().animate({bottom:-401});
			onoff = true;
		}
		ev.stopPropagation();
	});	
	$(window).click(function(){
		WM.stop().animate({bottom:-401});
		$('#bgImg').animate({right:-482});
		$('.clickR').hide();
		onoff = true;
	});
	WM.click(function(ev){
		ev.stopPropagation();
	});
}


// 显示桌面
$('.showDesktop').click(function(){
	$('.footer-c div').removeClass('active');
	$('.content').hide();
})
// 设置图标位置
var height = $('#icoList').outerHeight();
var num = Math.floor(height/80);
var oLi = $('#icoList li');
var l = 0;
var t = 0;
for (var i = 0; i < oLi.length; i++) {
	if (i > 0) {
		if (i%num) {
			t += 80;
		}else{
			l += 80;
			t = 0;
		}
	}
	oLi.eq(i).css({'left':l,'top':t});
}


$('#ie').click(function(){

});

// 设置时间
setInterval(function(){
 fnTime ();
},1000);
fnTime ();
 function fnTime () {
  var myTime = new Date();
  var iYear = myTime.getFullYear();
  var iMonth = myTime.getMonth()+1;
  var iDate = myTime.getDate();
  var iHours = myTime.getHours();
  var iMin = myTime.getMinutes();
  var P = $('.timeBox p');
  P.eq(0).html(toTwo(iHours)+' : '+ toTwo(iMin));
  P.eq(1).html(iYear+ '/' +iMonth+'/'+iDate);
};
function toTwo ( n ) {
 return n < 10 ?  '0' + n : '' + n;
}





$('#ie').click(function(){
	var oA = $('<div><img src="img/ie.png" alt=""><span>百度</span><em>X</em></div>');
	var oDiv = $('<div class="content"><ul class="clear"><li class="fl websiteLogo"><img src="img/ie.png" alt=""><span>百度</span></li><li class="fr websiteBtn"><input type="text" value="http://www.baidu.com"><img class="go" src="img/go.png" alt=""><img src="img/shrink.jpg" alt=""><img src="img/scale.jpg" alt=""><img src="img/close1.jpg" alt=""></li></ul><iframe src="http://baidu.com"></iframe></div>');
	creation(oA,oDiv);

});

$('#icoList li').dblclick(function(){
	var arr = ['http://chenzhonghai.github.io/projects/tmall','http://www.mango168.top','http://chenzhonghai.github.io/projects/siyuan','http://chenzhonghai.github.io/projects/news','http://www.chenzhonghai.com'];
	var num = $(this).index();
	var val = $(this).find('p').html(); 
	var src = $(this).find('img').attr('src');
	var oA = $('<div><img src="'+src+'" alt=""><span>'+val+'</span><em>X</em></div>');
	var oDiv = $('<div class="content"><ul class="clear"><li class="fl websiteLogo"><img src="'+src+'" alt=""><span>'+val+'</span></li><li class="fr websiteBtn"><input type="text" value="'+arr[num]+'"><img class="go" src="img/go.png" alt=""><img src="img/shrink.jpg" alt=""><img src="img/scale.jpg" alt=""><img src="img/close1.jpg" alt=""></li></ul><iframe src="'+arr[num]+'"></iframe></div>');
	creation(oA,oDiv);
});
function creation(oA,oDiv){
	$('#icoList').before(oDiv);
	$('.footer-c').append(oA);
	$('.footer-c div').removeClass('active');
	$('.footer-c div').eq($('.footer-c div').length-1).addClass('active');
	showEm();
	openList();
	dragDrowser();
	removeDrowser();
	websiteBtn();
	frontDrowser();
}

// 显示底部打开页面关闭按钮
function showEm(){
	$('.footer-c div').hover(function(){
		$(this).find('em').show();
	},function(){
		$(this).find('em').hide();
	});
}

// 打开页面太多弹窗
function openList(){
	var Cwidth = $('.footer-c').outerWidth(true);
	var Nwidth = $(window).outerWidth(true);
	if (Cwidth > Nwidth - 171) {
		$('.content').last().remove();
		$('.footer-c div').last().remove();
		alert('窗口打开太多了！请关闭一些窗口，再打开！');
	}
}
// 拖动浏览器
function dragDrowser(){
	$('.content').mousedown(function(ev){
		var l = parseInt($(this).css('left'));
		var t = parseInt($(this).css('top'));
		var x = ev.pageX;
		var y = ev.pageY;
		var disX = x - l;
		var disY = y - t;
		var X;
		var Y;
		var This = $(this);
		$(document).mousemove(function(ev){
			X = ev.pageX;
			Y = ev.pageY;
			This.css({'left':X-disX,'top':Y-disY});
		});
		$(document).mouseup(function(){
			$(this).unbind("mousemove");
		});
	});
	$('.websiteBtn input').mousedown(function(ev){
		ev.stopPropagation();
	});
}
// 删除页面\添加class
function removeDrowser(){
	$('.footer-c div em').unbind('click').click(function(){
		var num = $(this).parent().index();
		$(this).parent().remove();
		$('.content').eq(num).remove();
		frontDrowser();
	});
	$('.footer-c div').unbind('click').click(function(){
		var i = $(this).hasClass('active');
		var num = $(this).index(); 
		if (i) {
			$('.content').eq(num).hide();
			$('.footer-c div').removeClass('active');
		}else{
			$('.content').css('zIndex',1);
			$('.content').eq(num).show().css('zIndex',10);
			$('.footer-c div').removeClass('active');
			$(this).addClass('active');
		}
	});
}

// 浏览器按钮
function websiteBtn(){
	var onoff = true;
	$('.websiteBtn img').unbind('click').click(function(ev){
		var i = $(this).index();
		if (i == 1) {
			var C = $(this).parent().parent().parent();
			var num = C.index();
			var Val = $(this).parent().find('input').val();
				C.find('iframe').attr({'src':Val});
				C.find('img').eq(0).attr('src','img/ie.png');
				C.find('span').html(Val);
				$('.footer-c div').eq(num).find('img').attr('src','img/ie.png');
				$('.footer-c div').eq(num).find('span').html(Val);
		}
		if (i == 2) {
			$('.footer-c div').removeClass('active');
			$(this).parent().parent().parent().hide();
			ev.stopPropagation();
		}
		if (i == 3) {
			if (onoff) {
				$(this).parent().parent().parent().css({'top':0,'left':0,'width':'100%','height':'calc(100% - 42px)'});
				onoff = false;
			}else{
				$(this).parent().parent().parent().css({'top':'10%','left':'10%','width':'80%','height':'calc(80% - 42px)'});
				onoff = true;
			}
		}
		if (i == 4) {
			var num = $(this).parent().parent().parent().index();
			$(this).parent().parent().parent().remove();
			$('.footer-c div').eq(num).remove();
			frontDrowser();

		}
	});
}

// 点击浏览器显示在前面
function frontDrowser(){
	var C = $('.content');
	var A = $('.footer-c div');
	C.unbind('click').click(function(){
		var num = $(this).index();
		A.removeClass('active');
		A.eq(num).addClass('active');
		C.css('zIndex',1);
		$(this).css('zIndex',10);
	});
}



$('#bgImg div img').click(function(){
	var val = $(this).attr('src');
	$('#wrap').css({'background':'url('+val+')','backgroundSize':'100% 100%'});
});
$('#bgImg p img').click(function(){
	$('#bgImg').animate({right:-482});
});
$('#bgImg').click(function(ev){
	ev.stopPropagation();
});


$('.clickR li').click(function(ev){
	var num = $(this).index();
	if (num == 0) {
		var i = 0;
		var timer = null;

		timer = setInterval(function(){

			if (i%2) {
				$('#icoList').hide();
			}else{
				$('#icoList').show();
			}
			i++;
			if (i == 7) {
			clearInterval(timer);
			}
		},50);
	}
	if (num == 1) {
		$('#bgImg').animate({right:0});
		ev.stopPropagation();
	}
	$(this).parent().hide();
});

$(document).bind("contextmenu", function(){
    return false;
})
$(document).mousedown(function(ev) {
    if (3 == ev.which) {
    	var x = ev.pageX;
    	var y = ev.pageY;
    	var w = $('.clickR').outerWidth(true);
    	var h = $('.clickR').outerHeight(true);
    	var Dw = $(window).outerWidth(true);
    	var Dh = $(window).outerHeight(true);
    	var l = 0;
    	var t = 0;
    	if (x>=Dw-w) {
    		l = Dw-w;
    	}else{
    		l = x;
    	}
    	if (y>=Dh-h) {
    		t = Dh-h;
    	}else{
    		t = y;
    	}
    	$('.clickR').show();
    	$('.clickR').css({'left':l,'top':t});
    } 
})



});