var QuanComponents = function(){//领红包类
	//app查询是否领券
	this.debug=false;
	this.ifAppGetQuan=function(data)
	{
		var _this=this;
		$.ajax({
			url: ajaxurl+'/redbag/check4rushApp?format=json',
			data: data,
			dataType: "jsonp",
		}).done(function(data){
			var codeState=data.code;
			if(_this.debug){
				data.code=607;
				codeState=607;
				data.info=[{'a':'b'},{'b':'c'}];
			};
			switch(codeState){
				case 0:
					_this.receiveSuccess(data);break;
				case 602: //已抢光
					_this.robbed(data);break;
				case 603: //过期
					_this.outDate(data);break;
				case 607: //已领取
					_this.alreadyReceive(data);break;
				case -200://未登录
					_this.login(data);break;
				default:  //领取失败
					_this.error(data);break;
			};
		}).fail(function(data){alert(1);
			console.log(data);
		});
	};
	//app领取红包
	this.appGetQuan=function(data){
		var _this=this;
		$.ajax({
			url: ajaxurl+"/redbag/rush4PhoneApp?format=json",
			data: data,
			dataType: "jsonp"
		}).done(function(data){
			var codeState=data.code;
			if(_this.debug){
				codeState=0;
				data.code=0;
			}
			switch(codeState){
				case 602: //券发完了
					_this.robbed(data);break;
				case 603: //过期
					_this.outDate(data);break;
				case 607: //已经参加过
					_this.alreadyReceive(data);break;
				case -200://未登录
					_this.login(data);break;
				default:  //领取失败
					_this.error(data);break;
			}
		}).fail(function(data){
			console.log(data);
		});
	};
	//通过cookie和红包id查询红包需要绑定手机号
	this.getRedbagListForCookieAndRedbagId=function(data){
		var _this=this;
		$.ajax({
			url: ajaxurl + "/redbag/redbagList4wechat?format=json",
			dataType: "jsonp",
			data:data,
			success: function(data) {
				if (data.code == 0) {
						if (data.resultList[0].hasGet == 0) {
							_this.noReceive(data); //未领取
						} else if (data.resultList[i].hasGet == 1) {
							_this.alreadyReceive(data);
						}
				}else {
					_this.noReceive(data); //过期
				}
			},
			error: function(data) {
				_this.defaultStatue(data);//意外情况处理
			}
		});
	};
	//通过cookie和红包id领取红包需要绑定手机号
	this.receiveRedbagForCookieAndRedbageId=function(data){
		var _this=this;
		$.ajax({
			url: ajaxurl+"/redbag/rush4PhoneWechat",
			data: data,
			dataType: "jsonp",
			success: function(data) {
				//测试数据
				if (_this.config.debug) {
					data = {
						'code': 607
					};
				};
				if (data.code == 0) {
					_this.receiveSuccess(data);
				} else if (data.code == -200) {
					_this.login(data);
				} else if (data.code == 602) {
					_this.robbed(data)//已领光
				} else if (data.code == -603||data.code == 604) {
					_this.expired(data); //过期
				} else if (data.code == 653) {
					_this.faile(data);
					//手机号注册失败
				} else if (data.code == 607) {
					_this.alreadyReceive(data);
				} else {
					_this.defaultStatue(data);//意外情况处理
				}
			}
		});
	};
	//通过手机号码和红包code领取红包并发送短信
	this.receiveRedbagForTelandRedbagCode=function(data){
		var _this=this;
		$.ajax({
			url: ajaxurl + "/activity/receiveRewards4wechat?format=json",
			dataType: "jsonp",
			data:data,
			success: function(data) {
				isactive = false;
				if (_this.config.debug) {
					data={"rewardStatus":1,"info":[{"id":null,"redbagId":null,"wechatNick":null,"wechatHead":null,"createTime":1454383008000,"couponPrice":-20.0,"couponName":"20元商品定期优惠券","comment":null,"applyType":2},{"id":null,"redbagId":null,"wechatNick":null,"wechatHead":null,"createTime":1454383008000,"couponPrice":-0.01,"couponName":"测试1分钱","comment":null,"applyType":2}],"code":0};
				};
				//var ;
				if (data.code == 0 && data.rewardStatus == 1) {
					_this.receiveSuccess(data);
				} else if (data.code == 0 && data.rewardStatus == 0) {
					_this.alreadyReceive(data);
				} else {
					_this.defaultStatue(data);//意外情况处理
				}
			},
			error: function(data) {
				_this.defaultStatue(data);//意外情况处理
			}
		});
	};
	//获取验证码
	this.getcode=function(tel,isone){
		var _this=this;
		var codeurl='/redbag/sendAuthCode4Redbag?format=json&phone='+tel;
		if(isone)
		codeurl='/redbag/sendAuthCode4NewUser?format=json&phone='+tel;
		$.ajax({
			url:ajaxurl + codeurl,
			dataType: "jsonp",
			success: function(data) {
				if(data.code==0){
					_this.autocodeSuccess(data);
				}
				else if(data.code==1){
					_this.autocodeFail(data);
				}
				else{
					_this.autocodeFail(data);
				}
			},
			error: function(data) {
				_this.autocodeFail(data);//意外情况处理
			}
		});
	};
	//通过手机号码，验证码和红包code领取红包并发送短信
	this.receiveRedbagForNormal=function(data,isone){
		var _this=this;
		var codeurl="/redbag/rush4PhoneAndApp?format=json";
		if(isone)
		codeurl='/redbag/rush4NewUser?format=json';
		$.ajax({
			url: ajaxurl + codeurl,
			dataType: "jsonp",
			data:data,
			success: function(data) {
				if (data.code == 0) {
					_this.receiveSuccess(data);
				} else if (data.code == 602) {
					_this.robbed(data)//已领光
				} else if (data.code == -603||data.code == 604) {
					_this.expired(data); //过期
				}else if(data.code==-2031){
					_this.autocodeerror(data);
				}
				else if (data.code == 607||data.code==1) {
					_this.alreadyReceive(data);
				} else {
					_this.defaultStatue(data);//意外情况处理
				}		
			},
			error: function(data) {
				_this.defaultStatue(data);//意外情况处理
			}
		});
	};
	this.autocodeerror=function(data){
		this.addWarn("验证码错误");
	};
	this.autocodeSuccess=function(data){
		this.addWarn("验证码发送成功");
	};
	this.autocodeFail=function(data){
		this.addWarn("验证码发送失败");
	};
	this.login=function(data){//登录
		this.addWarn("请先登录");
	};	
	this.autocodeerror=function(){
		this.addWarn("验证码错误");
	};
	this.defaultStatue=function(data){
		this.addWarn("出错了");
	};
	this.receiveSuccess=function(data){//领取成功
		this.addWarn("领取成功");
	};
	this.noReceive=function(data){//未领取
		this.addWarn("未领取");
	};
	this.alreadyReceive=function(data){//已领取
		this.addWarn("已领取");
	};
	this.robbed=function(data){//券发完了
		this.addWarn("券发完了");
	};
	this.outDate=function(data){//已过期	
		this.addWarn("已过期");
	};
	this.error=function(data){
		this.addWarn("出错了");
	};
	this.addWarn=function(str){
		if($(".warnMsg").length<1){
			$("body").append("<span class='warnMsg'>"+str+"</span> ");
        	setTimeout(function(){$(".warnMsg").remove()},'3000');
		}
	};
}