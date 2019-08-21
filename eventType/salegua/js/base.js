var  ajaxurl="http://market.qccr.com";  
function resize() {
	window.remFontSize = document.documentElement.clientWidth / 10;
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + "px";
}

var b = null;
window.addEventListener("resize", function(){
 clearTimeout(b),
 b = setTimeout(resize, 300);
}, !1);
resize();

//window.location.search
	//获取浏览器参数
	function getQueryString(name) {
		if(window.location.href.indexOf("?")!=window.location.href.lastIndexOf("?"))
		var urls=window.location.href.replace(/\?userId/,"&userId").replace(/^.*\?/,"");
		else
		var urls=window.location.href.replace(/^.*\?/,"");
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = ("?"+urls).substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	}
if(getQueryString("userId")){
	var userNick=getQueryString("userId");
}else{
	alert("请先登录");
}
if(getQueryString("isIPhone")){
	var isIPhone=getQueryString("isIPhone");
}
function getJsonData(url,data,callfunc,errfunc){
	$.ajax({
			url: url,
			data:data,
			dataType: "jsonp",
			jsonp: "callback",
			success: function (data) {			  
				callfunc(data);
			},
			error:function(data){
				if(errfunc)
				errfunc(data);
				else
				callfunc(data);
			}
		});
}

var coverImg=[
		8.4*(document.documentElement.clientWidth / 10),
		3.786*(document.documentElement.clientWidth / 10)
];
var rules={
	create:function(){
		var strVar = "";
		strVar += "<div class=\"warpguizhe\" >";
		strVar += "	<div class=\"swarp\">";
		strVar += "	<\/div>";
		strVar += "	<div class=\"srule\">";
		strVar += "		<div class=\"stitle\">";
		strVar += "			活动说明";
		strVar += "		<\/div>";
		strVar += "		<div class=\"textbox\">";
		strVar += "		<h3 class=\"tith3\">";
		strVar += "			活动时间:";
		strVar += "		<\/h3>";
		strVar += "			<p class=\"sdate\">";
		strVar += "				2015.12.7~2015.12.18";
		strVar += "			<\/p>";
		strVar += "		<h3 class=\"tith3\">";
		strVar += "			活动规则：";
		strVar += "		<\/h3>";
		strVar += "			<p>";
		strVar += "				用户在汽车超人官方网站及APP每成功支付1笔订单,可获得1次刮奖机会；"
		strVar += "			<\/p>";
		strVar += "			<p>";
		strVar += "				刮奖机会不限次数，成功支付多笔订单，可获得多次刮奖机会；";
		strVar += "			<\/p>";
		strVar += "			<p>";
		strVar += "				奖品有原价1176元黄山自驾游（含两人住宿及门票），100元中石化加油卡，200元中石化加油卡，超人公仔充电宝，钢铁侠系列鼠标，燃油宝，超值优惠券；";
		strVar += "			<\/p>";
		strVar += "			<p>";
		strVar += "				优惠券自动发放到后台，请在领券后7天内使用，逾期作废；";
		strVar += "			<\/p>";
		strVar += "			<p>";
		strVar += "				实物奖品颜色、规格随机发货，以实物为准，图片仅供参考；";
		strVar += "			<\/p>";
		strVar += "			<p>";
		strVar += "				获得黄山自驾游奖项的用户，汽车超人客服会在12月18日前联系您兑奖；";
		strVar += "			<\/p>";
		strVar += "			<p>";
		strVar += "				如用户获奖后出现退款，获得的实物奖品将不予发放；";
		strVar += "			<\/p>";
		strVar += "			<p>";
		strVar += "				获得实物奖品的用户，请留意汽车超人客服来电确认收件信息，奖品会在12月31日前寄出，邮费由汽车超人承担；";
		strVar += "			<\/p>";		
		strVar += "			<p>";
		strVar += "				如果用户出现违规行为（包括但不限于利用系统漏洞、黑客工具等非正常方式参与），汽车超人有权撤销用户中奖资格，并要求用户退还抽奖所得到的奖品；";
		strVar += "			<\/p>";	
		strVar += "			<p>";
		strVar += "				黄山自驾游奖项的使用最终解释权归驴妈妈旅游网所有；";
		strVar += "			<\/p>";		
		strVar += "			<p>";
		strVar += "				特维轮网络科技（杭州）有限公司在法律规定范围内对此活动享有解释权；";
		strVar += "			<\/p>";		

		strVar += "			<span class=\"sclose\"><img src=\"images/close.png\" width=\"32px;\"/><\/span>";
		strVar += "		<\/div>";
		strVar += "	<\/div>";
		strVar += "<\/div>";
		return strVar;
	},
	init:function()
	{
		$("body").append(this.create());
	},
	event:function(){
		$(".j_guize").bind("click",function(){	
			
			if($(".warpguizhe").length>0)
			{
				$(".warpguizhe").show();
			}else
			{
				rules.init();
				var allw=$(window).height()-160;
				yuanh=$(".textbox").height();
				if(allw<yuanh){
					$(".textbox").height(allw);
				}else{
					$(".textbox").height(yuanh);
				}
			
			}
			
			
		});
		$("body").on("click",".sclose",function(){
			$(".warpguizhe").hide();
		})

	}
};
var noGift="<p class='noGift'>哎呀！礼品包是空的<br/>您还未刮中奖品哦！</p>";
var mygift={
	create:function(){
	var name="sfasf"
		var strVar = "";
		strVar += "<div  id=\"recoder\" style=\"width:100%;\"  > ";
		strVar += "		<div class=\"heard\"><a class=\"recodes\" ><\/a><\/div>";
		strVar += "		<div class=\"cjrecord\">";
					
	
		strVar += "		<\/div>";
		strVar += "<\/div>";
		return strVar;
	},
	updateRecode:function(){
		$(".jp").remove();
		$.ajax({
			dataType: "jsonp",
			jsonp: "callback",
			url: ajaxurl+"/lottery/myPrizes4App.jhtml",
			data:{"format":"json","app":"appshuang","userId":userNick},
			success: function (data) {	
				// data={"PrizeList":[],"code":0};		
				if(data.code==0){
					if(data.PrizeList.length>0){
						$(".nojl").hide();
						for(var i=0;i<data.PrizeList.length;i++)
						{	var PrizeList=data.PrizeList[i];
							var strVar = "";
							strVar += "<div class=\"jp clearfix\">";
							strVar += "	<img src=\" images/quanbg.png\"> ";
							strVar += "			<div class=\"fontbox\">";
							strVar += "				<div class=\"jpname\"><p class=\"h1\"><b>￥"+PrizeList.couponAmount+"</b><span>"+PrizeList.prizeName+"×"+PrizeList.prizeNum+"<\/span><\/p></div>";
							strVar += "				<div class=\"miaosu\"><p class=\"h2\">"+PrizeList.couponDesc+"<\/p>";
							strVar += "				<p class=\"h2\">"+PrizeList.validate+"<\/p></div>";
							strVar += "			<\/div>";
							strVar += "			<div><\/div>";
							strVar += "		<\/div>";
							$(".cjrecord").append(strVar);
							if(!PrizeList.couponAmount){					
								$(".jpname").eq(i).find("p b").hide();
							}
							if(PrizeList.couponType>0){
								var miao=$(".cjrecord .jp").eq(i).find(".miaosu p");
								miao.eq(0).html("客服将在5个工作日内联系您安排发奖，请");
								miao.eq(1).html("保持手机畅通");
							}
							
						}
						
					
					}else{
						// $(".recodes").addClass("centerGoback")
						$(".cjrecord").html(noGift);
						$(".nojl").show();
						$("body").height(document.documentElement.clientHeight);
					}
					
			
				}else{
					$(".nojl").show();
					$(".cjrecord").html(noGift);
					// $(".recodes").addClass("centerGoback")
					$("body").height(document.documentElement.clientHeight);
				}
				
			}
				
		})
	},
	init:function(){
		$("body").append(this.create());
	},
	event:function(){
		$(".j_gift").bind("click",function(){	
			$("#recoder").remove();
			$(".page1,.pageend").hide();
			$("html").addClass("re");
			mygift.init();
			mygift.updateRecode();
			$("#recoder").show();
			$("body").on("touchend",".recodes",function(){
				$("#recoder").hide();
				$(".page1,.pageend").show();
				$("html").removeClass("re");
			})
			
		});
		
	}
}