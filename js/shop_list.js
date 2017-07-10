$(function(){
	var more = document.getElementsByClassName("more");
		for(var j=0;j<more.length;j++){
			var bool=true;
			more[j].onclick=function(){
				if(bool){
					this.parentNode.getElementsByClassName("more_down")[0].style.display="block";
					bool=false;
				}else{
					this.parentNode.getElementsByClassName("more_down")[0].style.display="none";
					bool=true;
				}
			}
		}
		
	$("#address").bind("click",function(){
		$("#add_down").css({"display":"block"})
	})
	$("#add_down>li").click(function(){
		$("#address i").text($(this).html());
		$("#add_down").css({"display":"none"})
	})
})
