$(function(){
	$("#box").html("<img />");
	$("#box").css({"display":"none"})
	$("#small_box").mouseover(function(){
		$("#box").stop(true,true).fadeIn(300)
		var src =  $("#small_box img").attr("src");
		$("#box img").attr("src",src).css({"position":"absolute","width":"1250px"})
		$("#box01").stop(true,true).fadeIn(300)
	});
	$("#small_box").mouseout(function(){
		$("#box").stop(true,true).fadeOut(300)
		$("#box01").stop(true,true).fadeOut(300)
	});
	$("#small_box").mousemove(function(e){
		var imgX=e.pageX;
		var imgY=e.pageY;
		console.log(imgX)
		console.log(imgY)
		var smallLeft = $("#small_box").offset().left;
		console.log(smallLeft)
		var smallTop = $("#small_box").offset().top;
		console.log(smallTop)
		var box1Left = imgX-smallLeft-$("#box01").innerWidth()/2
		var box1Top = imgY-smallTop-$("#box01").innerHeight()/2
		console.log(box1Left)
		console.log(box1Top)
		if(box1Left<0){
			box1Left =0;
		}else if(box1Left>($("#small_box").innerWidth()-$("#box01").innerWidth())){
			box1Left = $("#small_box").innerWidth()-$("#box01").innerWidth();
		}
		if(box1Top<0){
			box1Top = 0;
		}else if(box1Top>($("#small_box").innerHeight()-$("#box01").innerHeight())){
			box1Top = $("#small_box").innerHeight()-$("#box01").innerHeight()
		}
		$("#box01").css({left:box1Left+"px",top:box1Top+"px"})
		$("#box>img").css({left:-box1Left*3+"px",top:-box1Top*3+"px"})
	})
	
	/**************产品轮播*********************/
	var Wid = $("#swich_pic li").outerWidth(true);
	var len = $("#swich_pic li").length;
		for(i=0;i<len;i++){
			$("#swich_pic li").eq(i).css({"left":i*Wid+"px"})
		}
	
	$(".pro_img a.next").click(function(){
		show();
	});
	$(".pro_img a.pre").click(function(){
		 var bool =true;
		if(bool){
			if(len>4){
				bool =false;
				for(i=0;i<len-1;i++){
					$("#swich_pic li").eq(i).animate({"left":Wid*(i+1)+"px"},function(){
					var bool =true;
					});
					console.log(Wid*(i+1))
				}
				$("#swich_pic li").eq(len-1).prependTo("#swich_pic").css({"left":-Wid*len+"px"}).animate({"left":0},function(){
					  var bool =true;
				})
			}
		}
	});
	var show = function(){
		var bool = true
		if(bool){
			if(len>5){
				var bool =false
				$("#swich_pic li").eq(0).animate({"left":-Wid+"px"},function(){
					$("#swich_pic li").eq(0).css({"left":Wid*(len-1)+"px"}).appendTo($("#swich_pic"));
					  bool = true
				})
			}
			for(i=1;i<len;i++){
				$("#swich_pic li").eq(i).animate({"left":Wid*(i-1)+"px"},function(){
					 bool=true;
				})
			}
		}
	}
	
	
	/**************产品上下轮播****************/
   var hg = $(".content .look li").outerHeight(true);
   var lilen = $(".content .look li").length;
   $(" .look a.up").click(function(){
   	var bool = true;
   	if(bool){
   		var boo= false;
   		if(bool){
				bool=false;
				$(".content .look ul").animate({margintop:-hg+"px"},function(){
				$(".content .look ul li").eq(0).appendTo(".content .look ul");
				$(".content .look ul").css({"margintop":0+"px"});
				bool=true;
				})
		}
   	}
   })
   $(".look a.pre").click(function(){
   				var bool=true;
				if(bool){
					bool=false;
					$(".look ul li").eq(3).prependTo(".look ul").css({"margintop":-hg+"px"}).animate({margintop:0+"px"},function(){
						bool=true;
					});
				}
	});
	
	/***********加入购物车******************/
	var proLocal = localStorage.getItem('MyProlist'),
		MyProlist = [],
		len,
		proLocalJson = JSON.parse(proLocal);
		if(proLocalJson !=null){
			len = proLocalJson.length;
			for(var i = 0;i<len;i++){
				MyProlist.push(proLocalJson[i])
			}
		}
		
		
	$(".pro_int>.shop_car").click(function(){
		
		var pro_tittle = $(".pro_int h1").html(),
			sale_price = $(".price p:nth-child(3) strong").html(),
			pro_size = $(" P.size span.on").html(),
			addres = $("ul.send_mon li:nth-child(3) p").html(),
			pro_image = $(".big_pic").attr('src'),
			pro_num = $(" p.num input").val(),
			totall = parseInt(sale_price*pro_num);
		for(var x=0;x<MyProlist.length;x++){
			if(pro_size == MyProlist[x].size){
				MyProlist[x].number = parseInt(MyProlist[x].number)+parseInt(pro_num)
				MyProlist[x].totall = parseInt(MyProlist[x].number*MyProlist[x].price)
				localStorage.setItem("MyProlist",JSON.stringify(MyProlist));
				tip_num(pro_size);
				shop_num()
				return false;
			}
		}
		localDate(pro_tittle,sale_price,addres,pro_image,pro_num,pro_size,totall);
		tip_num(pro_size);
		shop_num()
	})
	
	function localDate(tittle,price,address,image,number,size,totall){
		var product={
			tittle:tittle,
			price:price,
			address:address,
			image:image,
			number:number,
			size:size,
			totall:totall
		}
		MyProlist.push(product)
		localStorage.setItem("MyProlist",JSON.stringify(MyProlist));
		console.log(localStorage.getItem('MyProlist'))
	}
	/*****************产品 品论切换*********************/
	$(".shop_details ul.top li").each(function(index,element){
		$(this).click(function(){
			$(".shop_details ul.top li.on").removeClass("on");
			$(this).addClass("on");
			$(this).siblings().removeClass("on")
			$(".shop_details .option ul.opt_con>li").hide().eq(index).css({"display":"block"});
		})
	});
	$(".content .shop_details ul.all_eva>li").each(function(index,element){
		$(this).click(function(){
			$(this).css({"color":"red"});
			$(this).siblings().css({"color":"#999999"})
			$(".shop_details .assess>ul>li").hide().eq(index).show();
		})
	});
	$("#page li a").click(function(){
		$(this).css({"color":"#CC0000"}).parent("li").css({"border":"none","background":"none",});
		$(this).parent("li").siblings("li").css({"border":"1px solid #b3b3b3","background":"#d8d8d8"}).find("a").css({"color":"#333333"})
		$(this).parent("li").siblings("li:nth-child(8)").css({"border":"none","background":"none"})
	});
	var  shop_num = function(){
		if(localStorage.getItem("MyProlist") != null && localStorage.getItem("MyProlist") != undefined){
			var list = localStorage.getItem("MyProlist"),
				listJson = JSON.parse(list),
				num =0;
			for(var i=0;i<listJson.length;i++){
				num =i+1;
				console.log(num)
			}
			$(".header .header_content .shop_car .badge").text(num)
		}else{
			$(".header .header_content .shop_car .badge").text(0);
		}
			
	}
	shop_num();
	var tip_num = function(pro_size){
		var size = pro_size;
		if(localStorage.getItem("MyProlist") != null && localStorage.getItem("MyProlist") != undefined){
				var list = localStorage.getItem("MyProlist"),
				listJson = JSON.parse(list);
				for(var i=0;i<listJson.length;i++){
					if( size== listJson[i].size){
							if(listJson[i].number>99){
								alert("该商品数量已达购买数量上限,你最多可以购买99件该商品");
								listJson[i].number=99;
								listJson[i].totall=parseInt(listJson[i].number*listJson[i].price);
								localStorage.setItem("MyProlist",JSON.stringify(listJson));
								return false;
							}
							
						
					}
				}
			};
		};
})
