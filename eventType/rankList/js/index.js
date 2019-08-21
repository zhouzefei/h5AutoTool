var w = document.documentElement.clientWidth,
	h = document.documentElement.clientHeight;
//var ajaxurl="http://market.qccr.com";
	var ajaxurl="http://market.yfbqccr.com";
	if(/\.qccr\./.test(location.href))
	{
		ajaxurl="http://market.qccr.com";
	}
	$("body").css("width",w);
	// tab切换
	$(".tab span").bind("touchend",function(){
		var index = $(this).index();		
		$(".tab span").removeClass("bg");
		$(this).addClass("bg");
		$(".main>div").hide();
		$(".main>div").eq(index).show();
		if(index == 0){    			 //这里的逻辑跟刚进入页面的判断一样
			$(".nav span").each(function(){
				if($(this).attr("data-date") == myDay){
					$(this).addClass("hover");
					$(this).siblings().removeClass("hover");
					date = myDay;     //date是传到接口的当前日期
					getData(date);
				}
			});
		}else{
			$(".listOfAll").css("display","block");	
			getTotalData();
		}
	});
	//获取总排行的数据
	function getTotalData(){
 		$.ajax(
 				{
 					url:ajaxurl+"/activity/getRankList",
 					dataType:"jsonp",
 					data:{
 						format:"json",
 						pagesize:100
 					},
 					success:function(data){
 						list = createRankList(data.info);
 						createList = $(".listOfAll ul").html(list);
 						return createList;
 					}
 				}
 			);
 	}
	//获取日排行榜的数据
 	function getData(date){
 		$.ajax(
 				{
 					url:ajaxurl+"/activity/getDayRankList",
 					dataType:"jsonp",	
 					data:{
 						format:"json",
 						pagesize:100,
 						day:date
 					},
 					success:function(data){
 						list = createRankList(data.info);
 						createList = $(".listOfDay ul").html(list);
 						return createList;
 					}
 				}
 			);
 	}
    //生成排行榜
    function createRankList(obj){
    	var strVar = "";
    	if(obj.activityStatistics.length == 0){
				strVar += "<li style='text-align:center;color:#fff;padding-top:1rem;' >";
				strVar += "<p>暂时没有排行信息</p>	";
				strVar += "<\/li>";
			}
		for(var i = 0;i<obj.activityStatistics.length;i++){
				strVar += "<li>";
			    strVar += "<p class=\"headPortrait\">";
			    strVar += "<img src=\""+(obj.activityStatistics[i].wechatHead?obj.activityStatistics[i].wechatHead:"images/default_nor_avatar.png")+"\" alt=\"\">";
			    strVar += "<\/p>";
			    if(i == 0)
			    {
			    	strVar += "<p class=\"ranking rankFisrt\">";
			    	strVar += "<span>"+(i+1)+"<\/span>";
			    	strVar += "<\/p>";
			    }else if(i == 1)
			    {
			    	strVar += "<p class=\"ranking rankSecond\">";
			    	strVar += "<span>"+(i+1)+"<\/span>";
			    	strVar += "<\/p>";
			    }else if(i == 2)
			    {
			    	strVar += "<p class=\"ranking rankThere\">";
			    	strVar += "<span>"+(i+1)+"<\/span>";
			    	strVar += "	<\/p>";
			    }else
			    {
			    	strVar += "<p class=\"ranking\">";
			    	strVar += "<span>"+(i+1)+"<\/span>";
			    	strVar += "<\/p>";
			    }
			    strVar += "<p class=\"listMdesg\">";
			    strVar += "<span class=\"listName\">"+(obj.activityStatistics[i].wechatNickName?obj.activityStatistics[i].wechatNickName:"&nbsp;")+"<\/span>";
			    strVar += "<span class=\"listVantages\">"+obj.activityStatistics[i].doggameTotalPoints+"积分<\/span>";
			    strVar += "<\/p>";
			    strVar += "<\/li>";
		}
		return strVar;
    }
	//获取当天日期，判断有没有过活动时间，过了的话直接选中总榜，没有过的话直接显示当天的排行榜
	//获取当前时间
	var myDate = new Date();
	var myYear = myDate.getFullYear();
	var myMonth = myDate.getMonth()+1;
	myMonth = myMonth < 10 ? '0'+ myMonth : myMonth;
	var myDay = myDate.getDate();
	myDay = myDay < 10 ? '0'+ myDay : myDay;
	var date = myYear+"-"+myMonth+"-"+myDay;
		datas = [];
	$(".nav span").each(function(){
		datas.push($(this).attr("data-date").split("-")[2]);
	});
	if(datas.indexOf(myDay.toString()) == -1){
			$(".tab>span").removeClass("bg");
			$(".tab>span").eq(1).addClass("bg");
			$(".main>div").hide();
			$(".main>div").eq(1).show();
			$(".listOfAll").css("display","block");			 
			getTotalData();
			// $(".listOfAll").html("还没有数据");  //测试使用			
		}else{			
			$(".tab>span").removeClass("bg");
			$(".tab>span").eq(0).addClass("bg");
			$(".main>div").hide();
			$(".main>div").eq(0).show();
			$(".nav span").each(function(){
				if($(this).attr("data-date").split("-")[2] == myDay){
					$(this).addClass("hover");
					$(this).siblings().removeClass("hover");
					getData(date);
					// $(".listOfDay").html("aaaaaaaa");   //测试使用
				}
			});
		}
//切换nav的日期同时切换排行榜的内容
$(".nav span").bind("touchend",function(){
	$(".nav span").removeClass("hover");
	$(this).addClass("hover");
	date = $(this).attr("data-date");
	if(date.split("-")[2] <= myDay){
		getData(date);
	}else{
		$(".listOfDay ul").html("<li style='text-align:center;color:#fff;padding-top:1rem;'><p>暂时没有排行信息</p></li>");   //测试使用
	}
});

