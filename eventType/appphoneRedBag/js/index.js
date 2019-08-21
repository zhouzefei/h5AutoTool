var userId = getQueryString('userId');

var reg = /^1[3|4|5|7|8]\d{9}$/; //手机号码正则
var redbagCode = '9d8963029aaf4f0e9a8f890b8dfa61d7';
var redbagId = '1634279';
var userId= '1235';
if (getQueryString("redbagId")) {
    redbagId = getQueryString("redbagId");
}

//app分享
var shareFriend = function(){
    		var sharedata=["http://static.qichechaoren.com/upload/2015/08/sharelogo.jpeg",
    		"汽车超人老板发年终奖，看到此消息都能领！",
    		"http://market.qccr.com/wechat/getRedbagList4wechat"];
			toApp.sharered(sharedata[0]+"?"+Math.random().toFixed(10),sharedata[1],sharedata[2]);
        }


//领取大礼包
function getGiftBag() {
    getJsonData(
        ajaxUrl+'/redbag/rush4PhoneApp',
        {
        	format: 'json',         
            userId: userId, 
            redbagId: redbagId
        },
        function(data) {
            if (data.code == 0) {
                var redBagName = "";
                var shtml = "";
                if (data.info && data.info.length == 1) {
                    $(".normal").attr("src", "images/yifenqian.png");
                } else if (data.info.length > 1) {
                    var quanLists = "";
                    var sQuanDiv = "";
                    $.each(data.info, function(i, em) {
                        quanLists += '<li>' + em.couponName + '</li>';
                    });
                    sQuanDiv += '<div class="redBag1">';
                    sQuanDiv += '<ul class="quanList">'
                    sQuanDiv += quanLists;
                    sQuanDiv += '</ul>';
                    sQuanDiv += '</div>';
                    $(".redcon").html(sQuanDiv);
                }
                $(".getBag").text("已领取");
                $(".getBag").css("background", "#999");
            } else if (data.code == 602) {
                // 券发完了
                $(".normal").attr("src", "images/red_qiangguang.png");
                $(".lingqu").css("display", "none");
                $(".qiangguang").css("display", "block");

            }else if(data.code == 603){
            	// alert("红包过期");
            	$(".dialogbox .font").text("红包过期");
            	$(".dialogbox,.mask").show();
            } 
            else if (data.code == 607) {
                // alert("很抱歉，您已参加过本次活动。");
                $(".dialogbox .font").text("很抱歉，您已参加过本次活动。");
            	$(".dialogbox,.mask").show();
            }else if(data.code == -200){
            	// 未登录
            	// toApp.login();
            	$(".dialogbox .font").text("领取失败");
            	$(".dialogbox,.mask").show();
            } 
            else {
                // alert("领取失败");
                $(".dialogbox .font").text("领取失败");
            	$(".dialogbox,.mask").show();
            }
        }
    );
}

//判断用户是否领取过红包
function ifGetedGiftBag() {
    getJsonData(
        ajaxUrl+'/redbag/rush4PhoneApp',
        {
        	format: 'json',         
            userId: userId, 
            redbagId: redbagId
        },
        function (data){
        	if (data.code == 607) {
                var redBagName = "";
                var shtml = "";
                if (data.info && data.info.length == 1) {
                    $(".normal").attr("src", "images/yifenqian.png");
                } else if (data.info.length > 1) {
                    var quanLists = "";
                    var sQuanDiv = "";
                    $.each(data.info, function(i, em) {
                        quanLists += '<li>' + em.couponName + '</li>';
                    });
                    sQuanDiv += '<div class="redBag1">';
                    sQuanDiv += '<ul class="quanList">'
                    sQuanDiv += quanLists;
                    sQuanDiv += '</ul>';
                    sQuanDiv += '</div>';
                    $(".redcon").html(sQuanDiv);
                }
                $(".getBag").text("已领取").unbind("touchend");
                $(".getBag").css("background", "#999");
            }
        }

    );
}
