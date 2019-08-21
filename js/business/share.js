function share(sharedata){
	if(!is_weixn()){
		try{
			toApp.share2(sharedata[0].imgUrl+"?"+Math.random().toFixed(10),sharedata[0].title+sharedata[0].content,sharedata[0].url);
		}catch(e){
		}
		try{
			toApp.share("dd");
		}catch(e){
		}
		try{
			 if(getQueryString("isIPhone")=="true")
			 	location.href="objc://share:/"+encodeURIComponent(sharedata[0].imgUrl)+":/"+encodeURIComponent(sharedata[0].title+sharedata[0].content)+":/"+encodeURIComponent(sharedata[0].url);
		}catch(e){
		}
	}else{
		var script=document.createElement('script');
		script.onload=function(){
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
						 	//分享朋友圈
						 	wx.onMenuShareTimeline({
						 	    title: sharedata[0].title, 
						 	    desc: sharedata[0].content,
						 	    link: sharedata[0].url?sharedata[0].url:location.href, // 分享链接
						 	    imgUrl: sharedata[0].imgUrl+"?"+Math.random().toFixed(10), // 分享图标
						 	    success: function () {
						 	    	sharedata[0].success();
						 	    },
						 	    cancel: function () { 
						 	    	sharedata[0].cancel();
						 	    }
						 	});
						 	//分享给朋友
						 	wx.onMenuShareAppMessage({
						 		title: sharedata[1].title, 
						 	    desc: sharedata[1].content,
						 	    link: sharedata[1].url?sharedata[0].url:location.href, // 分享链接
						 	    imgUrl: sharedata[1].imgUrl+"?"+Math.random().toFixed(10), // 分享图标
						 	    success: function () {
						 	    	sharedata[1].success();
						 	    },
						 	    cancel: function () { 
						 	    	sharedata[1].cancel();
						 	    }
						 	});
						}); 
						wx.error(function(res){
						});
		        },
		        error: function () {}
		  	  });
		}
		script.src='http://res.wx.qq.com/open/js/jweixin-1.0.0.js';
		document.head.appendChild(script);
	}
}