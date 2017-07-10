$(function(){
	$(".content .pay_way ul li").each(function(index,element){
		$(this).click(function(){
			$(this).addClass("on")
			$(this).siblings().removeClass("on");
			$(".content .bank ul li").hide().eq(index).show();
		})
	})
	
	$(".content .bank ul li dd").bind("click",function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on")
	})
	
	$("#pay").click(function(){
		if(confirm("亲，确定支付吗？")){
			$(this).attr("href","pay_success.html")
		}else{
			$(this).attr("href","pay_failure.html")
		}
	})
})
