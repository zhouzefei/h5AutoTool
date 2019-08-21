var isActive=false;
var dZp = function(id,ajaxurl,args){//领红包类
	this.id=id || 12;
	this.args=args;
	this.ajaxurl=ajaxurl || "http://market.qccr.com";
	//抽奖App
	//args={"userId":userNick,"app":"saleappdan"}
	this.getAppChou=function(){
		var _this=this;
		if(isActive)
			return false;
		isActive=true;
		$.ajax({
			url: _this.ajaxurl+"/lottery/lotteryForApp.jhtml?format=json",
			data: args,
			dataType: "jsonp",
			success: function(data) {
				var b=data;
				if(b.code==-108){
					return false;
				}else if(b.code==0){
					if(b.info='再试试'){

					}else{
						
					}
				}else if(b.code==601){
					_this.rotate(126,'goodsDialogWrap');
				}else if(b.code==-200){
					_this.rotate(0,'appLoginWrap');
				}
				isActive=false;
			},
			error:function(data){
				isActive=false;
				_this.rotate(0,'goodsDialogWrap');
			}
		});
	};
	//中奖名单
	this.winList=function(){

	};
	//动态滚动
	this.dataScroll=function(){

	};
	//转盘滚动效果
	this.rotate=function(deg,showType){
		$(".zpRotate").css({"webkitTransition":"all 2s ease-out","webkitTransform":"rotate("+(360*4+deg)+"deg)","transition":"all 2s ease-out","transform":"rotate("+(360*4+deg)+"deg)"});
		setTimeout(function(){
			$(".zpRotate").css({"webkitTransition":"all 0s ease-out","webkitTransform":"rotate("+deg+"deg)","transition":"all 0s ease-out","transform":"rotate("+deg+"deg)"});
			$("."+showType).show();
			isActive=false;//避免重复点击	
		},2000);
	}
};