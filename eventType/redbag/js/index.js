/* rem标准统一
 * 返回示例
 * 运行后  1rem 相当于 屏幕大小除于10的像素 例如 ：iPhone4S下面就是 1rem = 32px
 *
 */
function resize() {
    window.remFontSize = document.documentElement.clientWidth / 10;
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + "px"
}
var b = null;
window.addEventListener("resize", function() {
    clearTimeout(b),
        b = setTimeout(resize, 300)
}, !1);
resize();
/* 获取浏览器参数
 * 返回示例
 * getQueryString("phone")=1354455445
 *
 */
function getQueryString(name) {
        if (window.location.href.indexOf("?") != window.location.href.lastIndexOf("?"))
            var urls = window.location.href.replace(/\?/g, "&").replace(/^.*?&/, "")
        else
            var urls = window.location.href.replace(/^.*\?/, "");
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = ("?" + urls).substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

//jsonp封装  
function getJsonData(url,data,callfunc,errfunc){
    $.ajax({
        url: url,
        data:data,
        dataType: "jsonp",
        jsonp: "callback",
        success: function (data) {
            callfunc(data);
        },
        error:function(data)
        {
            if(errfunc)
                errfunc(data);
            else
                callfunc(data);
        }   
    });
};


var mpt = function(text, fun) {
    $('body').append('<div id="mpt-full"><div id="mpt"><p>' + text + '</p></div></div>');
    setTimeout('$("#mpt-full").hide()', 1500);
    setTimeout('$("#mpt-full").remove()', 2500);
};

//领取大礼包
function getGiftBag() {
    getJsonData(
        ajaxUrl + '/redbag/rush4PhoneApp', {
            format: 'json',
            userId: userId,
            redbagId: redbagId,
            source:"springActivity"
        },
        function(data) {
            if (data.code == 0) {
                $(".getBag").text("已领取,去购买吧").addClass("gobuy");
                $(".gobuy").on("touchend", function() {
                    location.href = "http://sale.qccr.com/ssycx/huhangmendianList/index.shtml";
                });
            } else if (data.code == 602) {
                // 券发完了
                mpt("券发完了");
            } else if (data.code == 603) {
                // alert("红包过期");
                mpt("券发完了");
            } else if (data.code == 607) {
                // alert("很抱歉，您已参加过本次活动。");
                mpt("很抱歉，您已参加过本次活动");
            } else if (data.code == -200) {
                // 未登录
                toApp.login();
            } else {
                // alert("领取失败");
                mpt("领取失败");
            }
        }
    );
}

//判断用户是否领取过红包
function ifGetedGiftBag() {
    getJsonData(
        ajaxUrl + '/redbag/check4rushApp',   //这个接口只能判断有没有领取过红包，不能具体获得用户获得的优惠券
         {
            format: 'json',
            userId: userId,
            redbagId: redbagId
        },
        function(ndata) {
            if (ndata.code == 607) {
                    $(".getBag").text("已领取,去购买吧").addClass("gobuy");
                    $(".gobuy").on("touchend", function() {
                        location.href = "http://sale.qccr.com/ssycx/huhangmendianList/index.shtml";
                    });               
            }
        }
    );
}
