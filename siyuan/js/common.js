$(function(){
// 设置导航移入显示
	$('.nav li').mouseover(function(){
		$(this).find('a').eq(0).css({'background':'#eeeeee','borderColor':'#6ac37f'});
		$(this).find('img').show();
		$(this).find('div').show();
	});
	$('.nav li').mouseout(function(){
		$(this).find('a').eq(0).css({'background':'#fbfbfb','borderColor':'#fbfbfb'});
		$(this).find('img').hide();
		$(this).find('div').hide();
	});

// 内容中的搜索框
	$('.main-search input').eq(0).focus(function(){
		if ($(this).val() === "请输入您要搜索的课程关键词") {
			$(this).val('');
			$(this).css('color','#333333');
		}
	});	
	$('.main-search input').eq(0).blur(function(){
		if ($(this).val() === "") {
			$(this).val('请输入您要搜索的课程关键词');
			$(this).css('color','#e1e3e2');
		}
	});
// 移入改变颜色
$('.menu li').mouseover(function(){
	$(this).css('background','#6ac37f');
});
$('.menu li').mouseout(function(){
	$(this).css('background','transparent');
});

// 下拉框
$('.precontract li').click(function(){
	var This = $(this);
	$(this).find('div').show();
	$(this).find('a').click(function(){
		var pHtml = $(this).html();
		This.find('p').html(pHtml);
		This.find('div').hide();
		return false;
	});
});

});