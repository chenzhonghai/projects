
$(function(){
// 导航开关
	navOnoff();
	function navOnoff(){
		if (true) {}
		var i = 0;
		$('.onOff').click(function(){
			i++;
			if (i%2) {
				$('.nav').slideDown();
				$('.onOff').html('&times;')
			}else{
				$('.nav').slideUp();
				$('.onOff').html('&equiv;')	
			}
		});
	}

// 设置轮播图的高
carouselTop();
$(window).resize(function(){
	carouselTop();
});	
function carouselTop(){
	var imgWidth = $('.carousel>img').eq(0).outerWidth();
	var imgHight = imgWidth/2.4; 
	$('.carousel').css('height',imgHight);
}

// 轮播图
	carousel($('.carousel'));
	function carousel(obj){
		var aImg = obj.find('img');
		var oPrev = obj.find('.prev');
		var oNext = obj.find('.next');
		var aDot = obj.find('.dotBox a');	
		var iNow = 0;
		var timer = null;
		var onOff = true;

		Fade();
		aDot.click(function(){
			iNow = $(this).index();
			Fade();
		});
		oPrev.click(function(){
			iNow--;
			if (iNow < 0) {
				iNow = aDot.length-1;
			}
			Fade();
		});
		oNext.click(function(){
			iNow++;
			if (iNow > aDot.length-1) {
				iNow = 0;
			}
			Fade();
		});

		autoPlay();	

	    obj.hover(function (){
	    	clearInterval(timer);
	    	oPrev.fadeIn();
	    	oNext.fadeIn();
	    }, function (){
	    	autoPlay();
	    	oPrev.fadeOut();
	    	oNext.fadeOut();
	    });

	    function autoPlay(){
			timer = setInterval(function(){
				iNow++;
				if (iNow > aDot.length-1) {
					iNow = 0;
				}
				Fade();
			},3000);
		}

		function Fade(){
			aDot.removeClass('active');
			aImg.stop(true,true).fadeOut().css('zIndex', 1);
			aDot.eq(iNow).addClass('active');
			aImg.eq(iNow).stop(true,true).fadeIn().css('zIndex', 2);

		}
	}	

});