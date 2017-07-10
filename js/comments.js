$(function(){
	/************下拉菜单**********************/
	$(".pro_int ul.send_mon li:nth-child(3) span").bind("click",function(){
		$(".pro_int ul.send_mon li dl").css({"display":"block"});
		 $(".pro_int ul.send_mon li dl dd").bind("click",function(){
		 	$(".pro_int ul.send_mon li:nth-child(3) p").text($(this).text());
		 	$(".pro_int ul.send_mon li dl").css({"display":"none"});
		 });
	});
	
	$("  ul.serv li:nth-child(5) p").bind("click",function(){
		$("ul.serv li:nth-child(5) dl").css({"display":"block"});
		 $("ul.serv li:nth-child(5) dl dd").bind("click",function(){
		 	$("ul.serv li:nth-child(5) p").text($(this).text());
		 	$("ul.serv li:nth-child(5) dl").css({"display":"none"});
		 });
	});
	/***************添加边框******************/
	$(".content .pro_int P.size span").bind("click",function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
	})
	$(".content .pro_int P.color a").bind("click",function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
	});
	/*****************数量*********************************/
	$("p.num input").change(function(){
		 var value = $("p.num input").val()
			if(isNaN(value)){
				$("p.num input").val(1)
			}else if(value>99){
				$("p.num input").val(99)
			}else if(value<=0){
				$("p.num input").val(1)
			}
	});
	
	$(".content .pro_int p.num span.add").bind("click",function(){
		var v = $("p.num input").val();
		v++;
		if(v>99){
			v =1;
		}
		$("p.num input").val(v);
	});
	$(".content .pro_int p.num span.sub").bind("click",function(){
		var v = $("p.num input").val();
		v--;
		if(v<1){
			v =1;
		}
		$("p.num input").val(v);
	});
	
	/***************大图**********************/
	$("#swich_pic>li>img").click(function(){
		var src = $(this).attr("src");
		$("#small_box>img").attr("src",src)
	})
	
	/****************checkbox******************/
	$(".content .match li label input").bind("click",function(){
		if($(this).is(":checked")){
			$(this).parent().addClass("c-true")
			$(this).parent().siblings("p").css({"display":"block"})
		}else{
			$(this).parent().removeClass("c-true")
			$(this).parent().siblings("p").css({"display":"none"})
		}
	})
})
