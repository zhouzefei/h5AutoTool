'use strict';
var coupon = function(opt) {
	this.defaults = {
			'bagListUrl': 'http://market.csqccr.com/redbag/getRedbagList4app',
			'RedBagUrl': 'http://market.csqccr.com/redbag/rush4PhoneApp',
			'userId': '',
			'isWx': false,
			'isDebug': false
		},
		this.options = $.extend({}, this.defaults, opt);
};
coupon.prototype = {
	//初始化券领取状态
	'getRedbagList': function(obj) {
		var self = this;
		var ids = obj;
		var opResult = this.options;
		var redParam = {
			'format': 'json',
			'ids': ids
		};
		if (opResult.userId) {
			redParam.userId = opResult.userId;
		};
		$.ajax({
			url: opResult.bagListUrl,
			data: redParam,
			dataType: "jsonp",
			success: function(data) {
				//测试数据
				if (opResult.isDebug) {
					data = {
						'code':0,
						'resultList': [{
							'redbagDO': {
								'id': 1401916
							},
							'hasGet': 1
						}],
						msg: '你猜我要说什么'
					};
				};
				
				if (data.code == 0) {
					for (var i = 0; i < data.resultList.length; i++) {
						if (data.resultList[i].hasGet == 0) {
							newqusStart(self); //未领取
						} else if (data.resultList[i].hasGet == 1) {
							$(".p1,.p2,.p3,.p4,.p5,.loadingbg").remove();
							$(".loadingbg").hide();
							$("#con").css("opacity", "1");
							$(".pages").show();
						}
					}
				}else {
					newqusStart(self); //过期
				}
			}
		});
	},
	//领取红包 
	'receiveRedBag': function(rid) {
		var self = this;
		var opResult = this.options;
		var recBag = {
			'format': 'json',
			'redbagId': rid
		};
		if (this.options.userId) {
			recBag.userId = this.options.userId;
		};
		$.ajax({
			url: opResult.RedBagUrl,
			data: recBag,
			dataType: "jsonp",
			success: function(data) {
				//测试数据
				if (self.options.isDebug) {
					data = {
						'code': 0
					};
				};
				if (data.code == 0) {
					$(".p3,.p4").hide();
					$(".p5").show();
					toPage(2);
					// self.getRedbagList(obj);
				} else if (data.code == -200) {
						toApp.login();
				} else if (data.code == 602) {
					self.addWarn("红包已抢光"); //已领光
					toPage(0);
				} else if (data.code == 603) {
					self.addWarn("红包已过期"); //过期
					toPage(0);
				} else if (data.code == 653) {
					//手机号注册失败
				} else if (data.code == 607) {
					//self.addWarn("红包已领过");
					$(".p2,.p3,.p4,.p5").hide();
					$(".p6").show();
					toPage(1);
				} else {
					self.addWarn("领取失败"); //领取失败
					toPage(0);
				}
			}
		})
	},
	'addWarn': function(str) {
		if ($(".warnMsg").length < 1) {
			$("body").append("<span class='warnMsg'>" + str + "</span> ");
			setTimeout(function() {
				$(".warnMsg").remove()
			}, '3000');
		}
	}
};
//实际业务变量定义于页面中
	function toPage(i) {
		$("#con").css("-webkit-transform", "translate3d(0px, -" + i * h + "px, 0px)");
	}
	function newqusStart(obj){		
		var start_btn = document.querySelectorAll('.start_btn')[0];
		$("body").on("touchend", ".sloution", function() {
			$(".warnMsg").remove();
			$(this).closest('.p2_2').siblings('.p2_3').show();
			if ($(this).hasClass("on")) {
				$(this).toggleClass("on");
			} else {
				$(this).parents(".result").find("p").removeClass("on");
				$(this).toggleClass("on");
			}
		});
		start_btn.addEventListener("touchend", function() {
			toPage(1);
		}, false);
		$(".nextqus").bind("touchstart", function() {
			if ($(this).parents(".quswarp").find(".on").length < 1) {
				// if(btnactive){
				// 	btnactive(this);
				// }
				obj.addWarn("请至少选择一个答案！");
			} else {
				if ($(this).parents(".quswarp").find(".on").attr("data-ok") == "true") {
					okCount++;
				}
				qusStep++;
				// if(btnactive){
				// 	btnactive(this);
				// }
				setTimeout(function() {
					$(".quswarp").hide();
					$(".quswarp").eq(qusStep).show();
				}, 300);
			}
		});
		$(".surequs").bind("touchstart", function() {
			if ($(this).parents(".quswarp").find(".on").length < 1) {
				obj.addWarn("请至少选择一个答案！");
			} else {

				if ($(this).parents(".quswarp").find(".on").attr("data-ok") == "true") {
					okCount++;
				}
				setTimeout(function() {
					$(".p3,.p5,.p6").hide();
					if (okCount == 5) {
						obj.receiveRedBag(redbagId);
					} else {
						$(".p4").show();
						toPage(2);
					}
				}, 300);
			}
		});
		$(".pages").hide();
		$(window).bind("load", function() {
			setTimeout(function() {
				$(".loadingbg").hide();
				$("#con").css("opacity", "1");
				$(".pages").show();
			}, 100);
		});
	};
