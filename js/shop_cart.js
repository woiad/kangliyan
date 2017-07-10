 angular.module("shopCar",[])
 .controller("shopController",function($scope){
 	$scope.MyProlist = JSON.parse(localStorage.getItem("MyProlist"))
 	$scope.inputVal = []
 	for(var i=0;i<$scope.MyProlist.length;i++){
 		$scope.inputVal.push(parseInt($scope.MyProlist[i].number))
 	}
 });




$(function(){
	$("p.send").bind("click",function(){
		$("#memu").css({"display":"block"});
		$("#memu>li").click(function(){
			
				$("p.send i").text($(this).text());
				$("#memu").css({"display":"none"})
		})
	});
	var cont = function(){
		var len1 = $("tbody td input[type=checkbox]").length-2;
		var len2 = $(".main input[type=checkbox]:checked").length;
		return len1-len2;
	};
	
	var total = function(){
		var check = $("tr.goods input[type=checkbox]:checked");
		var a =0,
			n=0;
		for(var i =0;i<check.length;i++){
			a+=parseInt(check.eq(i).parents("td").siblings("td.min_total").text())
			n=i+1;
		}
		if(a>387){
			a=parseInt(a-80);
		}
		$(".acc_det p.totall i").text("￥"+a.toFixed(2));
		$("p.chose i").text(n);
	};
	$(".add").click(function(){
		var num =parseInt($(this).siblings(".prd_num").val());
		++num;
		if(num>99){
			num=99;	
		}
		var tdv3 = parseInt($(this).parent().siblings("td:nth-child(4)").html());
		$(this).parents().siblings(".min_total").text(tdv3*num+".00");
		$(this).siblings(".prd_num").val(num);
		total();
		var list = localStorage.getItem("MyProlist"),
			listJson = JSON.parse(list);
			tr_len = $(this).parents("tr").index()-1;
			listJson[tr_len].number = num;
			listJson[tr_len].totall = parseInt(tdv3*num);
			localStorage.setItem("MyProlist",JSON.stringify(listJson))
		shop_num();
	})
	$(".sub").click(function(){
		var num = parseInt($(this).siblings(".prd_num").val());
		--num;
		if(num<1){
			num=1;
		}
		var tdv3 = parseInt($(this).parent().siblings("td:nth-child(4)").html());
		$(this).parents().siblings(".min_total").text(tdv3*num+".00");
		$(this).siblings(".prd_num").val(num);
		total();
		var list = localStorage.getItem("MyProlist"),
			listJson = JSON.parse(list),
			tr_len = $(this).parents("tr").index()-1;
			listJson[tr_len].number = num;
			listJson[tr_len].totall = parseInt(tdv3*num);
			localStorage.setItem("MyProlist",JSON.stringify(listJson))
		shop_num()
	})
	 $("thead th label input").click(function(){
		if($(this).is(":checked")){
			$("tbody td label.c-checkbox input").prop("checked",true)
			$(" table tr.activitly input").prop("checked",true)
			total();
		}else{
			$("tbody td label.c-checkbox input").prop("checked",false);
			$("tr.account .acc_det p.totall i").text("0.00");
			$(" tr.account .acc_det p.chose i").text("0")
			
		}
	});
	$("tr.activitly input").click(function(){
		if($(this).is(":checked")){
			$("thead th label input").prop("checked",true);
			$(" table tbody tr input").prop("checked",true);
			total();
		}else{
			$("thead th label input").prop("checked",false);
			$("tbody td label.c-checkbox input").prop("checked",false);
			$("tr.account .acc_det p.totall i").text("0.00");
			$(" tr.account .acc_det p.chose i").text("0")
		}
	})
	$(" tr.account .acc_det input").click(function(){
		if($(this).is(":checked")){
			$("thead th label input").prop("checked",true);
			$(" table tr.activitly input").prop("checked",true);
			$("tbody td label.c-checkbox input").prop("checked",true)
			total();
		}else{
			$("thead th label input").prop("checked",false);
			$("tbody td label.c-checkbox input").prop("checked",false);
			$("tr.account .acc_det p.totall i").text("0.00");
			$(" tr.account .acc_det p.chose i").text("0")
		}
	});
	$("tbody tr.goods input[type=checkbox]").bind("click",function(){
		if(!cont()){
			$("thead input").prop("checked",true)
			$(" table tbody td input").prop("checked",true)
		}else{
			$("thead input").removeAttr("checked");
			$(" tr.account .acc_det input").removeAttr("checked");
			$("tr.activitly input").removeAttr("checked")
		}
		total();
	});
	$("tbody td:nth-child(5) input").change(function(){
		var numA = $(this).val();
		if(isNaN(numA)){
			numA = 1;
		}else if(numA>99){
			numA =99;
		}else if(numA<1){
			numA =1;
		}
		numA = Math.round(numA);
		$(this).val(numA);
	    var tdv3 = parseInt($(this).parent().siblings("td:nth-child(4)").html());
			$(this).parents().siblings(".min_total").text(parseInt(tdv3*numA)+".00");
		total();
		var list = localStorage.getItem("MyProlist"),
			listJson = JSON.parse(list);
			tr_len = $(this).parents("tr").index()-1;
			listJson[tr_len].number = numA;
			listJson[tr_len].totall = parseInt(tdv3*numA);
			localStorage.setItem("MyProlist",JSON.stringify(listJson))
		shop_num();
	});
	$("td a.delete, a.collec").bind("click",function(){
		if(confirm("亲，确认删除？")){
			var c_len = $(".main input[type=checkbox]:checked").length;
			if($(this).parent("td").siblings(".main").find("input").is(":checked")){
				var del_money = $(this).parent("td").siblings(".min_total").text(),
					old_total = $(".acc_det p.totall i").text().replace(/￥/i,""),
					new_money = parseInt(old_total-del_money);
				var qua = $("p.chose i").text();					 
				if(new_money<0){
					new_money  =0;
				}
				$(".acc_det p.totall i").text("￥"+new_money+".00");
				$("p.chose i").text(parseInt(qua-1));
				var c_len = $(".main input[type=checkbox]:checked").length-1;
			}
			var len = $("table tbody tr").length;
			var check = $(".main input[type=checkbox]:checked");
			if(len-3<=0){
				$("table input[type=checkbox]").prop("checked",false)
			}else if(len-3==c_len){
				if($("tr td.main input").is(":checked")){
					var a=0,
						n=0;
					var old_momey = parseInt($(this).parents("td").siblings("td.min_total").text());
					$("table input[type=checkbox]").prop("checked",true);
					for(var i =0;i<c_len;i++){
						a+=parseInt(check.eq(i).parents("td").siblings("td.min_total").text())
						n=i+1;
					}
					if(a>387){
						a=parseInt(a-80);
					}
					$(".acc_det p.totall i").text("￥"+a.toFixed(2));
					$("p.chose i").text(n);
					
				}else{
					$("table input[type=checkbox]").prop("checked",false)
				}
			}
			var list = localStorage.getItem("MyProlist"),
				listJson = JSON.parse(list);
			var tr_len = $(this).parents("tr").index()-1;
			for(var i=0;i<listJson.length;i++){
				if(i==tr_len){
					listJson.splice(i,1);
				}
			}
			localStorage.setItem("MyProlist",JSON.stringify(listJson));
			shop_num();
			$(this).parents("tr").remove();
		}
	});
	$(" table p.delete").click(function(){
		var val =0;
		if(confirm("亲,确认删除选中商品？")){
			$("tbody input[name=del]:checked").each(function(){
			var list = localStorage.getItem("MyProlist"),
				listJson = JSON.parse(list);
			var n =$(this).parents("tr").index();
			var tr_len = n-1;
			for(var i=0;i<listJson.length;i++){
				if(i==tr_len){
					listJson.splice(i,1);
				}
			}
			localStorage.setItem("MyProlist",JSON.stringify(listJson));
			$("table tbody").find("tr:eq("+n+")").remove();
			$("thead input").prop("checked",false);
			$("tbody input").prop("checked",false);
			$(" table tr.account input").prop("checked",false);
			$(".acc_det p.chose i").text("0");
			$(".content table tr.account .acc_det p.totall i").text("0")
			})
			shop_num();
		}
	});
	var  shop_num = function(){
			if(localStorage.getItem("MyProlist")!=null && localStorage.getItem("MyProlist")!= undefined){
					var list = localStorage.getItem("MyProlist"),
					listJson = JSON.parse(list),
					num =0;
				for(var i=0;i<listJson.length;i++){
					num =i+1;
				}
				$(".header .header_content .shop_car .badge").text(num);
				$(".content .shop_cart h1 i").text(num)
			}
	}
	shop_num();
})
