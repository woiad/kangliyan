$(function(){
	$(".header .header-top a.quit").bind("click",function(){
		localStorage.removeItem("Use")
	$(".header .header-top a.quit").attr("href","login.html")
	});
	var changName = function(){
		$(".header .header-top a.quit").attr("href","#")
		if(localStorage.getItem("Use") != null && localStorage.getItem("Use") != undefined){
			var obj = localStorage.getItem("userlogininfor");
			var userinfor = JSON.parse(obj);
			console.log(userinfor.userName);
			$(".header .header-top a.login ").hide();
			$(".header .header-top a.regist").hide();
			$(".header .header-top a.quit").show();
		}
	}
	changName()
})
