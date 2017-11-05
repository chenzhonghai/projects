$(function(){

// 搜索框
	$('.search input').eq(0).focus(function(){
		$('.search-list').show();
		if ($(this).val() === "请输入搜索内容...") {
			$(this).val('');
			$(this).css('color','#333333');
		}
	});	
	$('.search input').eq(0).blur(function(){
		if ($(this).val() === "") {
			$(this).val('请输入搜索内容...');
			$(this).css('color','#B9B9C8');
			$('.search-list').hide();
		}
		else if ($(this).val() != "") {
			$('.search-list').hide();
		}
	});

//搜索提交
	$('.search form').submit(function(event){
		if ($('.search input').eq(0).val() === "请输入搜索内容...") {
			event.preventDefault();
			alert('您没有没有输入搜索内容！(｡◕ˇ﹏ˇ◕｡ ) 呜~');
		}
	});

// 右上角功能菜单
	
	// 设置
	$('.onoff>a').eq(0).click(function(){
		$('.onoff-list').show();
		// event.stopPropagation();
		return false;
	});
	$(document).click(function(){
		$('.onoff-list').hide();
	});
	// 关闭窗口
	$('.onoff>a').eq(2).click(function(){
		$('#wrap').animate({opacity:0},1000,function(){
			$('#wrap').remove();
		});
	});
	// 缩小放大窗口
	$('.onoff>a').eq(1).click(function(){
		$('#wrap').animate({height:48},200);
		$('#wrap').animate({width:160},200);
	});
	$('#wrap').click(function(){
		if ($('#wrap').width() < 748){
			$('#wrap').animate({width:748},200);
			$('#wrap').animate({height:538},200);
		}
	});


// 滑动导航
	$('.nav-onoff').bind('click mouseenter',function(){
		slide();
	});

	function slide(){		
		if ($('.nav-box-list').css('top') === '0px') {
			$('.nav-box-list a').removeClass('active');
			$('.navList2 a').eq(0).addClass('active'); 
			$('#content>ul>li').hide();
			$('.main2>li').eq(0).show();
			$('.nav-onoff').html('<em> 	&lt&lt </em><span>返回</span>');
			$('.nav-box-list').animate({top:-40},200);
		}
		if ($('.nav-box-list').css('top')==='-40px') {
			$('.nav-box-list a').removeClass('active');
			$('.navList1 a').eq(0).addClass('active');
			$('#content>ul>li').hide();
			$('.main1>li').eq(0).show();
			$('.nav-onoff').html('<span>更多</span><em> &gt&gt </em>');
			$('.nav-box-list').animate({top:0},200);
		}	
	}

	showMain($('.navList1 a'),$('.main1>li'));
	showMain($('.navList2 a'),$('.main2>li'));

	function showMain(obj1,obj2){
		obj1.mouseenter(function(){
			$('.nav-box-list a').removeClass('active');
			$(this).addClass('active');
			$('#content>ul>li').hide();
			obj2.eq($(this).index()).show();
		});
	}

// 鼠标移入图片透明
	opacity($('.imgList img')); 
	opacity($('.imgLink img')); 
	opacity($('.shopImg img'));
	opacity($('.carousel2-left div img')); 
	function opacity(obj){
		obj.hover(function(){
			$(this).css('opacity','0.8');
			},function(){
			$(this).css('opacity','1');
		});		
	}

// 鼠标移入图片边框变红
	$('.adImg img').hover(function(){
		$(this).css('borderColor','#F40000');
		},function(){
		$(this).css('borderColor','#DDDDDD');
	});

// 轮播图
	for (var i = 0; i < $('.carousel').length; i++) {
		carousel($('.carousel').eq(i));
	}

	function carousel(obj){
		var imgList = obj.find('.imgList'); 
		var	aImg = obj.find('img');
		var imgWidth = parseInt(obj.find('img').eq(0).css('width'));
		var aDot = obj.find('.carousel-bottom-right a');
		var aText = obj.find('.carousel-bottom-left li');
		var next = obj.find('.next');
		var prev = obj.find('.prev');
		var iNow = 0;
		var timer = null;
		// 触摸圆点切换图片
			aDot.mouseover(function(){
				iNow = $(this).index();
				imgSwitch();
			});	
		// 上一张图片
			prev.click(function(){
				iNow--;
				if (iNow < 0) {
					iNow = aDot.length-1;
				}
				imgSwitch();
			});
		// 下一张图片
			next.click(function(){
				iNow++;
		    	if (iNow > aDot.length-1) {
		    		iNow = 0;
		    	}
		    	imgSwitch();
			});
		// 自动轮播图片
			autoPlay();	
		    obj.hover(function(){clearInterval(timer);},autoPlay);

			function autoPlay(){
				timer = setInterval(function(){
					iNow++;
			    	if (iNow > aDot.length-1) {
			    		iNow = 0;
			    	}
			    	imgSwitch();
			    },3000);
		   	}
		   	function imgSwitch(){
				aDot.removeClass('active');
				aText.hide();
				aDot.eq(iNow).addClass('active');
				aText.eq(iNow).show();
	    		imgList.stop(true,true).animate({left:-iNow*imgWidth});
		   	}
	}

// 淡入淡出轮播图
	carousel2($('.carousel2'));

	function carousel2(obj){
		var aImgBox = obj.find('.picBox a');
		var aText = obj.find('.price li');
		var aMinImgBox = obj.find('.carousel2-right a');	
		var iNow = 0;
		var timer = null;
		var onOff = true;

			aMinImgBox.mouseover(function(){
				iNow = $(this).index();
				Fade();
			});

			autoPlay();	

		    obj.hover(function (){ clearInterval(timer); }, autoPlay);

		    function autoPlay(){
				timer = setInterval(function(){
					if (onOff) {
						iNow++;
						if (iNow > aMinImgBox.length-1) {
							iNow-=2;
							onOff = false;
						}
					}else{
						iNow--;
						if (iNow < 0) {
							iNow+=2;
							onOff = true;
						}
					}
					Fade();
				},3000)
			}

			function Fade(){
				aText.hide();
				aMinImgBox.removeClass('active');
				aImgBox.stop(true,true).fadeOut().css('zIndex', 1);
				aText.eq(iNow).show();
				aMinImgBox.eq(iNow).addClass('active');
				aImgBox.eq(iNow).stop(true,true).fadeIn().css('zIndex', 2);
			}
	}	

});