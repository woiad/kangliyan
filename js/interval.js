$(function(){
	var total =function(){
		var tr_len = $(" .order_con table tr").length/3;
		var num=0;
		for(var i=0;i<tr_len;i++){
			num = num+parseInt($("table tr.con td:nth-child(2)").text().replace(/x/i,""));
		}
		$(".content .order_top li span.badge").text(num);
	}
	total()
	var show = function(){
		var time_start = new Date().getTime();
		var time_end = new Date("2017/5/22 00:00:00").getTime();
		var time_distance = time_end-time_start;
		var hour = Math.floor(time_distance/3600000)
		time_distance-=hour*3600000;
		var min = Math.floor(time_distance/60000)
		time_distance-=min*60000;
		var sec = Math.floor(time_distance/1000)
		time_distance-=sec*1000;
		if(hour<10){
			hour="0"+hour
		}
		if(min<10){
			min="0"+min
		}
		if(sec<10){
			sec="0"+sec
		}
		$("#hour").text(hour);
		$("#min").text(min);
		$("#sec").text(sec)
		$("#hour00").text(hour);
		$("#min00").text(min);
		$("#hour01").text(hour);
		$("#min01").text(min);
		$("#hour02").text(hour);
		$("#min02").text(min);
		$("#hour03").text(hour);
		$("#min03").text(min);
	}
	setInterval(show,1000)
	
})
