$(function(){
	$(".content .pay_way li").bind("click",function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on")
	})
	$(".swich_top>ul>li").each(function(index,element){
		$(this).click(function(){
			$(".swich_top li.on").removeClass();
	   	    $(this).addClass("on");
	   	    $(".swich_con li").hide().eq(index).show();
		})
	})
	
	$(".content .order_top .advanced p ").bind("click",function(){
		$(".advanced  dl").css({"display":"block"});
	})
	$(".content .order_top .advanced dl dd").bind("click",function(){
		$(".content .order_top .advanced dl").css({"display":"none"})
	})
	
	/****************产品轮播*******************/
	var Wid = $(" .pro .swich_con dd").outerWidth(true);
	var len = $(" .pro .swich_con dd").length;
	$(" .pro .swich_con dl").css({"width":Wid*(len-1)+"px"});
	for(i=0;i<len;i++){
		$(".pro .swich_con dd").eq(i).css({"left":Wid*i+"px"})
	};
	
	$(" .pro .swich_con a.next").click(function(){
		AutoPlay();
	})
	
	$(".pro .swich_con a.pre").click(function(){
		var bool = true;
		if(bool){
			if(len>5){
				for(var i=0;i<len-1;i++){
						$(".pro .swich_con dd").eq(i).animate({"left":Wid*(i+1)+"px"},function(){
							bool=true;
						})
				}
				$(".pro .swich_con dd").eq(len-1).prependTo(".pro .swich_con dl").css({"left":-Wid+"px"}).animate({"left":0+"px"},function(){
						bool=true;
				});	
			}
		}
	})
	$("#pre,#next").mouseover(function(){
		clearInterval(time)
	});
	$("#pre,#next").mouseout(function(){
		time = setInterval(function(){
			AutoPlay(1)
		},3000)
	})
	 function AutoPlay (){
	 	var bool = true;
		if(bool){
			var bool =false;
			if(len>5){
				$(".pro .swich_con dd").eq(0).animate({"left":-Wid+"px"},function(){
					$(".pro .swich_con dd").eq(0).css({"left":Wid*(len-1)+"px"}).appendTo(".pro .swich_con dl");
					bool = true;
				})
			};
			for(i=1;i<len;i++){
				$(".pro .swich_con dd").eq(i).animate({"left":Wid*(i-1)+"px"},function(){
					bool = true
				})
			}
		}
	}
	var time = setInterval(function(){
		AutoPlay()
	},3000)
})
