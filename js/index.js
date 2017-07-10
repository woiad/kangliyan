$(function(){
	var wid = $(window).width()
	var lin = $(".banner .banner_content li").length;
	$(".banner_content").css({"width":wid*lin+"px"})
	$(".banner_content li").width(wid+"px");
	var a = 0;
	$(".banner .hd li").click(function(){
		 a = $(this).index();
		$(".banner_content li").animate({"left":-wid*a},700);
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
	})
	$(".banner").mousemove(function(){
		clearInterval(auto)
	});
	$(".banner").mouseout(function(){
		auto = setInterval(show,3000);
	})
	function show(){
		a = a + 1;
		if(a>lin-1){
			a=0
		}
		$(".banner_content li").animate({"left":-wid*a},700);
		$(".banner .hd li ").removeClass("on").eq(a).addClass("on");
	}
	 
	var auto = setInterval(show,3000);
	
	$("a.next").click(function(){
		a = a+1;
		if(a>lin-1){
			a = 0
		}
		$(".banner_content li").animate({"left":-wid*a},700);
		$(".banner .hd li").removeClass("on").eq(a).addClass("on");
	})
	$("a.pre").click(function(){
		a = a-1;
		if(a<0){
			a = lin-1
		}
		$(".banner_content li").animate({"left": -wid*a},700);
		$(".banner .hd li").removeClass("on").eq(a).addClass("on");
	})
	
//	var len = $(".six_floor li").outerWidth();
//	$(".six_floor ul li").css({"width":len+"px"})
//	var Slin = $(".six_floor li").length;
//	for(var i=0;i<lin;i++){
//		$(".six_floor ul li").eq(i).css({"left":i*len+"px"});
//	}
//	
//	$(".six_floor ul li").mouseover(function(){
//		clearInterval(time)
//	})
//	$(".six_floor ul li").mouseout(function(){
//	 time = setInterval(Auto,3000)
//	})
//	var Auto = function(){
//		var bool = true;
//		if(bool){
//			var bool = false;
//			if(lin>5){
//			$(".six_floor li").eq(0).animate({"left":-len+"px"},function(){
//				$(".six_floor li").eq(0).css({"left":len*(lin-1)+"px"}).appendTo($(".six_floor ul"))
//				var bool = true
//			})
//		}
//			for(i=1;i<lin;i++){
//				$(".six_floor li").eq(i).animate({"left":len*(i-1)+"px"},function(){
//					var bool = true
//				})
//			}
//		}
//	}
//	
//	var time = setInterval(function(){
//		Auto()
//	},3000);
//	
//	
	$("#returnTop").click(function(){
		var speed = 1000;
		$("body,html").animate({scrollTop:0},speed)
	})
	
})