$(function(){
	 var pages = $(" ul.swich>li").length;
    	index = 0;
	
	$(".content .right .pro_list h1 a").bind("click",function(){
			if(index < pages-1){
       			index++;
    		}else{
      	  		index = 0;
   	 		}
    	 $("ul.swich>li").eq(index).show().siblings().hide();

	})
})