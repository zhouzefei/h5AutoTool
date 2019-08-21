function anistr()
{
	var strVar="";
	 strVar += "@-webkit-keyframes flipInX{";
    strVar += "0%{";
    strVar += "height: 2.19rem;";
    strVar += "}";
    strVar += "40%{";
    strVar += "height: "+($(".moreList li").length*2.19+0.20*($(".moreList li").length-1))+"rem;";
    strVar += "}";
    strVar += "70%{				";
    strVar += "height: "+($(".moreList li").length*2.19-0.20*($(".moreList li").length-1))+"rem;";
    strVar += "}";
    strVar += "100%{";
    strVar += " height: "+($(".moreList li").length*2.19)+"rem;";
    strVar += "}";
    strVar += "}";
	return strVar;
}
var active=false;

var phone={
	data:{},
	creatElement:function(obj)
	{
		var strVar = "";
		strVar += "<div class=\"mask\" style=\"height: "+$('body').height()+"px; display: none;\"><\/div>";
		strVar += "<div class=\"hbWindow\" style=\"display:none\">";
		strVar += "	<div class=\"hbWindowCon\">";
		strVar += "		<div class=\"hbTip\">";
		strVar += "			<p class=\"hbImg\">";
		strVar += "				<img src=\"images/hb.png\" alt=\"\">";
		strVar += "			<\/p>";
		strVar += "			<p>";
		strVar += "				恭喜获得一个红包！";
		strVar += "			<\/p>";
		strVar += "		<\/div>";
		strVar += "		<div class=\"RedEnvelope receiveRedEnvelope\">";
		strVar += "			<input type=\"text\" placeholder=\"请输入您的手机号码\" class=\"enterTel\"><a href=\"javascript:;\" class=\"lqhbBtn\">领取红包<\/a>";
		strVar += "		<\/div>";
		strVar += "		<p class=\"colse\">";
		strVar += "			X";
		strVar += "		<\/p>";
		strVar += "	<\/div>";
		strVar += "<\/div>";
		return strVar;
	},
	bindEvent:function(e)
	{
		$('.colse').click(function(){
			$('.mask,.hbWindow').hide();
		});
		var reg=/^[1]\d{10}$/;
		$('.lqhbBtn').click(function(){
			console.log($('.enterTel').val());
			if(reg.test($('.enterTel').val())){
				$('.mask,.hbWindow').hide();
				//$.ajax({url:url,dataType:"jsonp",success:function(data){
					var code=0;
						if(code==0)
						{
							conponView.states=2;	
							conponView.initstat($('.RedEnvelope'));
						}
						
						//$('.btnGet').html("已领取").addClass('off');
						//$('.btnGet').off();
					//}});
				
			}
			else{
				alert('请输入正确的手机号码');
			}
		});
	}
	,
	initstat:function(ele){
		phone.render(ele);
		this.bindEvent();
	},
	render:function(ele){
		var html=this.creatElement(productList.data);
		ele.append(html);
		
	}
}
var productList={
	data:{},
	creatElement:function(obj)
	{
		var strVar = "";
		for(var i=0;i<obj.length;i++)
		{
			strVar += "<li>";
			strVar += "<a ><img src=\""+obj[i].src+"\"  alt=\"\"><\/a>";
			strVar += "<p class=\"productName\">";
			strVar += obj[i].title;
			strVar += "<\/p>";
			strVar += "<p class=\"productPrice\">";
			strVar += "	<span>￥"+obj[i].price+"<\/span>";
			strVar += "	<span>X"+obj[i].count+"<\/span>";
			strVar += "<\/p>";
			strVar += "<\/li>";
		}
		return strVar;
	},
	initstat:function(ele){
		//$.ajax({url:url,dataType:"jsonp",success:function(data){
			productList.data=
			[
			{src:"images/goods.jpg","title":"普利司通  Bridgestone Turanza GR-80 195/65R15 91V","price":20.00,count:1},
			{src:"images/goods.jpg","title":"普利司通  Bridgestone Turanza GR-80 195/65R15 91V","price":20.00,count:1},
			
			];
			productList.render(ele);
			console.log(anistr());
			$("#dynamic").html(anistr());
		//}});	
	},
	render:function(ele){
		var html=this.creatElement(productList.data);
		ele.html(html);
		
	}
}

var commentList={
	data:{},
	createDate:function(date){
		return "9-1 22：00";
	},
	creatElement:function(obj)
	{
		var strVar = "";
		for(var i=0;i<obj.length;i++)
		{
			strVar += "<li>";
			strVar += "<p class=\"friendImg\">";
			strVar += "	<img src=\""+obj[i].src+"\" alt=\"\">";
			strVar += "<\/p>";
			strVar += "<p class=\"friendMesg\">";
			strVar += "	<span><b>"+obj[i].userName+"<\/b>"+(i+1)+"楼 "+this.createDate(obj[i].date)+"<\/span>";
			strVar += "	<span>"+obj[i].comment+"<\/span>";
			strVar += "<\/p>";
			strVar += "<p class=\"quan\">";
			strVar += "	<span class=\"jia\">+<\/span>"+obj[i].commentName;
			strVar += "<\/p>";
			strVar += "<\/li>";
		}
		return strVar;
	},
	updataStata:function(ele){
		$.ajax({url:url,dataType:"jsonp",success:function(data){
			commentList.data=data;
			commentList.render(ele);
		}});	
	},
	initstat:function(ele){
		//$.ajax({url:url,dataType:"jsonp",success:function(data){
			commentList.data=[{src:"images/goods.jpg",userName:"Crazy.liu",comment:"万水千山总是情，领个红包行不行！",date:"9-1 22：00","commentName":"一分钱洗车券"},{src:"images/goods.jpg",userName:"Crazy.liu",comment:"万水千山总是情，领个红包行不行！",date:"9-1 22：00","commentName":"一分钱洗车券"}];
			commentList.render(ele);
		//}});	
	},
	render:function(ele){
		var html=this.creatElement(commentList.data);
		ele.html(html);
	}
}

var conponView={
	data:{},
	states:3,
	creatElement:function(obj)
	{
		var strVar = "";
		if(this.states==1)
		{
			strVar += "<a href=\"http://a.app.qq.com/o/simple.jsp?pkgname=com.twl.qichechaoren&ckey=CK1309439168404\">下载汽车超人客户端<\/a>";
		}else
		{
			 strVar += "<div class=\"RedEnvelopeCon\" >";
			 strVar += "	<p class=\"coupon\">";
			 strVar += "		<span>"+obj.conponName+"<\/span><span>"+obj.conponUserArea+"<\/span>";
			 strVar += "	<\/p>";
			 strVar += "	<p class=\"account\">";
			 strVar += "		优惠券已放置账户";
			 strVar += "		<span>"+obj.userNick+"<\/span>";
			 strVar += "	<\/p>";
			 strVar += "	<p class=\"appuse\">";
			 strVar += "		登录APP即可使用";
			 strVar += "	<\/p>";
			 strVar += "<\/div>";
			 strVar += "<a href=\"http://a.app.qq.com/o/simple.jsp?pkgname=com.twl.qichechaoren&ckey=CK1309439168404\">下载汽车超人客户端<\/a>";
			 $(".RedEnvelope").css('margin-top',"0");
			 $('.btnGet').html("已领取").addClass('off');
			 $('.btnGet').off();
		}
		return strVar;
	},
	updataStata:function(ele){
		$.ajax({url:url,dataType:"jsonp",success:function(data){
			if(data.code==-200)
			{
				conponView.states=1;
			}else
			{
				conponView.states=2;
			}
			conponView.data=data;
			conponView.render(ele);
			
		}});	
	},
	initstat:function(ele){
		//$.ajax({url:url,dataType:"jsonp",success:function(data){
			conponView.data={conponName:"1分钱洗车券",userNick:"13567116114",conponUserArea:"支持所有洗车服务"};
			conponView.render(ele);
			
		//}});	
	},
	render:function(ele){
		var html=this.creatElement(conponView.data);
		ele.html(html);
	}
}

var lingBtn={
	states:0,
	initState:function(ele){
		//$.ajax({"url":url,dataType:"jsonp",success:function(data){
			lingBtn.render(ele);
			var code=0;
			if(code==0)
			{
				lingBtn.bindEvent();
			}
			//
		//}});
	},
	creatElement:function()
	{
		var strVar = "";
		if(this.states==0)
		strVar += "<a href=\"javascript:;\" class=\"btnGet\">领取红包<\/a>";
		else
		{
			strVar += "<a href=\"javascript:;\" class=\"btnGet off\">已领取<\/a>";
		}
		
		//$('.btnGet').addClass('off');
			// $('.btnGet').off();
		return strVar;
	},
	bindEvent:function(){
		if(this.states==0)
		{
			$('.btnGet').on('click',function(){
				//$.ajax({url:url,dataType:"jsonp",success:function(data){
					//if(data.code==-300)
					//{
						var code=300;
						if(code==300)
						{
							if($(".hbWindow").length==0)
							phone.initstat($("body"));
							$('.mask,.hbWindow').show();
						}else if(code==0)
						{
							conponView.states=2;
							conponView.initstat($(".RedEnvelope"));
							
						}
						
					//}
				//}});
			});	
		}
	}
	,
	render:function(ele){
		var html=lingBtn.creatElement();
		ele.append(html);
	}
}
var page={
	init:function(){
		productList.initstat($(".moreList"));
		conponView.initstat($(".RedEnvelope"));
		commentList.initstat($(".hysqList"));
		lingBtn.initState($(".hyzlCon"));
		this.bindEvent();
		
		var str="";
		
		
		$("").html()
		
		//RedEnvelope
		
	},
	bindEvent:function(){
		$('.tipMask').height($('body').height());
		$('.moon img').click(function(){
			var $productsList=$(this).parents('.productsList'),
				$li=$(this).parent().siblings('.moreList').find('li'),
				$notFirstLi=$li.not($li.eq(0));
			if($productsList.hasClass('productOne')){
				$productsList.removeClass('productOne')
				$(".moreList").addClass("sdisod");
				
				//$notFirstLi.show();
			}		
			else{
				$productsList.addClass('productOne');
				$(".moreList").removeClass("sdisod");
				//$(".moreList").css("height","");
				//$notFirstLi.hide();
			}
		}).trigger('click')
		
		$('.tipMask').click(function(){
			$(this).hide();
		});
	
	}
}