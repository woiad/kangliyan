$(function(){
	$("body").on("click",".addr_text .remove",function(){
		var sub = parseInt($("#coun_sub").text());
		var add = parseInt($("#coun_add").text());
		sub+=1;
		add-=1;
		$("#coun_sub").text(sub);
		$("#coun_add").text(add)
		$(this).parents(".addr_text").remove()
	})
	$("#appear").bind("click",function(){
		$(".content .right .bulid_adr").css({"display":"block"});
	});
	$("#close_adr").bind("click",function(){
		$("input[type=text]").val("");
		$(".content  .bulid_adr").css({"display":"none"});
	});
});
var checkUser = function(v){
	if(v==""){
		$("#nameTip").css({"visibility":"visible"})
	}else{
		$("#nameTip").css({"visibility":"hidden"})
	}
}

var checkUser = function(v){
	if(v==""){
		$("#nameTip").css({"visibility":"visible"})
	}else{
		$("#nameTip").css({"visibility":"hidden"})
	}
}

var checkZone = function(v){
	if(v==""){
		$("#zoneTip").css({"visibility":"visible"})
	}else{
		$("#zoneTip").css({"visibility":"hidden"})
	}
}

var checkAddr = function(v){
	if(v==""){
		$("#addTip").css({"visibility":"visible"})
	}else{
		$("#addTip").css({"visibility":"hidden"})
	}
}

var checkPhone = function(v){
	var reg=/^1(3|4|5|7|8)\d{9}$/;
	if(reg.test(v)){
		$("#phoneTip").css({"visibility":"hidden"})
	}else{
		$("#phoneTip").css({"visibility":"visible"})
	}
}

var checkEmail = function(v){
	var e_reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	if(e_reg.test(v)){
		$("#emailsTip").css({"visibility":"hidden"})
	}else{
		$("#emailsTip").css({"visibility":"visible"})
	}
}
	var localAddres = localStorage.getItem("addreslit"),
		localAddresJson = JSON.parse(localAddres),
		addreslist = [];
		if(localAddresJson !=null){
			for(var i=0;i<localAddresJson.length;i++){
				addreslist.push(localAddresJson)
			}
		}
		
var strollage = function(){
	var name = document.getElementById("userName").value;
	var zone = document.getElementById("zone").value;
	var address = document.getElementById("address").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var sum=19;
	if(name==""||zone==""||address==""||phone==""){
		alert("请完善地址资料")
	}else{
		var add = parseInt(document.getElementById("coun_add").innerHTML);
		sum = sum-add;
		add +=1;
		if(sum<0){
			return false;
		}
		console.log(sum )
		document.getElementById("coun_sub").innerHTML=sum;
		document.getElementById("coun_add").innerHTML=add;
		var addr_text = document.getElementById("addres_text")
		var name = document.getElementById("userName").value;
		var zone = document.getElementById("zone").value;
		var address = document.getElementById("address").value;
		var phone = document.getElementById("phone").value;
		var email = document.getElementById("email").value;
		var telephone =document.getElementById("telephone").value;
		var  elseName =document.getElementById("elseName").value;
		var old_Node = document.getElementById("addres_text");
		var p =document.createElement("p");
		var text_div = document.getElementById("addres_text");
		var ul = document.createElement("ul");
		var div = document.createElement("div");
		var div2 = document.createElement("div");
		var a1 = document.createElement("a");
		var a2 = document.createElement("a");
		var a3 = document.createElement("a");
//		setStroage(name,zone,address,phone,email,telephone,elseName);
//		var addreslist = localStorage.getItem("addreslit"),
//			addreJson = JSON.parse(addreslist),
//			addressLength = add-;
//			
		a1.setAttribute("href","#");
		a2.setAttribute("href","#");
		a3.setAttribute("href","#")
		div2.className="tip";
		div2.appendChild(a1);
		div2.appendChild(a2);
		div2.appendChild(a3);
		a1.innerHTML="设为默认";
		a2.innerHTML="使用一键购";
		a3.innerHTML="编辑";
		ul.innerHTML=
		'<li><strong>收货人：&nbsp;</strong>'+name+'</li>'+
		'<li><strong>所在地区：&nbsp;</strong>'+zone+'</li>'+
		'<li><strong>地址: &nbsp;</strong>'+address+'</li>'+
		'<li><strong>手机： &nbsp;</strong>'+phone+'</li>'+
		'<li><strong>固定电话：&nbsp;</strong>'+telephone+'</li>'+
		'<li><strong>电子邮箱：&nbsp;</strong>'+email+'</li>'+
		'<li><strong>地址别名：&nbsp;</strong>'+elseName+'</li>'
		div.className="addr_text";
		div.appendChild(p);
		div.appendChild(div2);
		p.innerHTML="x"
		p.className="remove"
		div.appendChild(ul);
		insertAfter(div,old_Node);
	}
}
var setStroage = function(names,zones,addresss,phones,emails,telephones,elseNames){
	var Address = {
		name:names,
		zone:zones,
		address:addresss,
		phone:phones,
		email:emails,
		telephone:telephones,
		elseName:elseNames
	}
	addreslist.push(Address);
	localStorage.setItem("addreslit",JSON.stringify(addreslist));
}

function insertAfter(newElement, targetElement){  
    var parent = targetElement.parentNode;  
    if (parent.lastChild == targetElement) {  
        // 如果最后的节点是目标元素，则直接添加。因为默认是最后  
        parent.appendChild(newElement);  
    } else {  
        parent.insertBefore(newElement, targetElement.nextSibling);  
        //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面  
    }  
}  

