/**
 * 
 */
function is_weixn(){  
		var ua = navigator.userAgent.toLowerCase();  
		if(ua.match(/MicroMessenger/i)=="micromessenger") {  
			return true;  
		} else {  
			return false;  
		}  
	}
function shareWeixin(ojb){
	if(!is_weixn())
	{
	}else
	{
		var url = encodeURIComponent(location.href.split('#')[0]);
		$.ajax({
	        
	        dataType: "jsonp",
	        url: "http://market.qccr.com/weixin/share?url="+url,
	        success: function (data) {
		   	  data=data.info;	
			  wx.config({
		   			debug:false,
		    		appId: data.appId, // 必填，公众号的唯一标识
		   			timestamp:data.timestamp, // 必填，生成签名的时间戳
		    		nonceStr: data.nonceStr, // 必填，生成签名的随机串
		    		signature: data.signature,// 必填，签名，见附录1
				     jsApiList: ['onMenuShareTimeline',
				                 'onMenuShareAppMessage',
				                 'onMenuShareQQ',
				                 'onMenuShareWeibo'
				                 ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
					});
					
					wx.ready(function(){
						var imgUrl="http://sale.qccr.com/wenda/images/share.jpg?"+Math.random().toFixed(10);
					 	//分享朋友圈
					 	wx.onMenuShareTimeline({
					 	    title: ojb[0].title, 
					 	    desc: ojb[0].content,
					 	    link: ojb[0].url?ojb[0].url:location.href, // 分享链接
					 	    imgUrl: ojb[0].imgUrl, // 分享图标
					 	    success: function () {
					 	    	ojb[0].success();
					 	    	//$(".share_img").hide();
					 	    },
					 	    cancel: function () { 
					 	    	ojb[0].cancel();
					 	        // 用户取消分享后执行的回调函数
					 	    }
					 	});
					 	//分享给朋友
					 	wx.onMenuShareAppMessage({
					 		title: ojb[1].title, 
					 	    desc: ojb[1].content,
					 	    link: ojb[1].url?ojb[0].url:location.href, // 分享链接
					 	    imgUrl: ojb[1].imgUrl, // 分享图标
					 	    success: function () {
					 	    	ojb[1].success();
					 	    	//$(".share_img").hide();
					 	    },
					 	    cancel: function () { 
					 	    	ojb[1].cancel();
					 	        // 用户取消分享后执行的回调函数
					 	    }
					 	});
					}); 
					wx.error(function(res){
			
					});
	
	        },
	        error: function () {}
	  	  });
	}
	
}
	