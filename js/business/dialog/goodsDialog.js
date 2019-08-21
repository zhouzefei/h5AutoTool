$(function(){
	//关闭
	$('body').on('touchend','.closeGoods',function(){
		$(this).closest('.goodsDialogWrap').hide();
	});
	//分享
	$('body').on('touchend','.goodsDialogShare',function(){
		var sharedata=$("#shareData").val();
		var defaultShare=[{
							title:"红包不停 抢购不停",
							content:"超人春节不打烊 红包发不停，为你的爱车囤点货吧。",
							url:"http://sale.qccr.com/ssycx/springNoHome/H5CouponWx.shtml",
							imgUrl:"http://sale.qccr.com/ssycx/springNoHome/images/wxShare.jpg?v="+Math.random().toFixed(10),
							success:function(){},
							cancel:function(){}
						},{
							title:"红包不停 抢购不停",
							content:"超人春节不打烊 红包发不停，为你的爱车囤点货吧。",
							url:"http://sale.qccr.com/ssycx/springNoHome/H5CouponWx.shtml",
							imgUrl:"http://sale.qccr.com/ssycx/springNoHome/images/wxShare.jpg?v="+Math.random().toFixed(10),
							success:function(){},
							cancel:function(){}
						}];
		sharedata=sharedata||defaultShare;
		share(sharedata);
	});
})

