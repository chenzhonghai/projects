$(function(){
// 添加第一张图片到最后，设置图片列表的宽
Width($('.imgList'));
function Width(obj){
	var imgWidth = obj.find('li').eq(0).outerWidth(true);
	var le = obj.find('li').length;
	var num = imgWidth * le;
	obj.css('width',num);
}

// 滚动图
carousel($('.carousel'));
function carousel(obj){
	var oPrev = obj.find('.prev');
	var oNext = obj.find('.next');
	var imgList = obj.find('.imgList')
	var imgWidth = obj.find('li').eq(0).outerWidth(true);
	var le = obj.find('li').length;
	oPrev.click(function(){
		if (parseInt(imgList.css('left')) > -imgWidth) {
			imgList.css('left',(le-4) * -imgWidth);
		}
		imgList.stop().animate({'left':'+=285'});
	});
	oNext.click(function(){
		if (parseInt(imgList.css('left')) < (le-5) * -imgWidth) { 
			imgList.css('left',0);
		}
		imgList.stop().animate({'left':'-=285'});
	});
}

// 移入显示底部新闻
show($('.information div a'));
function show(obj){
	obj.mouseover(function(){
		var num = $(this).index();
		obj.removeClass('active');
		$(this).addClass('active');
		$('.information li').hide();
		$('.information li').eq(num).show();
	});
}


});