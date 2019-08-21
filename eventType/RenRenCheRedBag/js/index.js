// $('.mask').height(document.documentElement.clientHeight);
$(".mask").height($(".box").height());
//获取浏览器参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var reg = /^1[3|4|5|7|8]\d{9}$/;

 var ajaxUrl='http://market.qccr.com';

// var ajaxUrl='http://market.yfbqccr.com';

   // var ajaxUrl = 'http://test.qichechaoren.com/mengwei';

if (/\.qccr\.com/.test(location.href))
    ajaxUrl = 'http://market.qccr.com';
// var redbagCode = 'a6536d18d26c4c65a3ad74eb929758a7';
// var redbagCode = "1764840";
var redbagCode = "d29ff5d5-00df-4c96-bbb1-793a3c124ad2";
if (getQueryString("redbagCode")) {
    redbagCode = getQueryString("redbagCode");
}
$('.cancleBtn').click(function() {
    $('.mask,.winBox').hide();
    $('.mesgCheck input').val('');
});
$('.dialogbox .btn').click(function() {
    $('.dialogbox').hide();
});


function getJsonData(url, data, callfunc, errfunc) {
    $.ajax({
        url: url,
        data: data,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(data) {
            callfunc(data);
        },
        error: function(data) {
            if (errfunc)
                errfunc(data);
        }
    });
}

function timeout(num, obj) {
    var timer = null;
    timer = setInterval(function() {
        num--;
        obj.html(num + 's后重新获取')
        if (num <= 0) {
            obj.html('获取验证码');
            obj.removeClass('cur');
            clearInterval(timer);
        }
    }, 1000)
}

function getTelCode(tel) {
    $('.getCode').off();
    $('.getCode').on('click', function() {
        var _this = $(this);
        if ($(this).hasClass('cur')) {
            return false;
        } else {
            $('.winBox .tx b').html(tel);
            //var sTel=$('.tx b').html();/redbag/sendAuthCode4Redbag
            getJsonData(
                ajaxUrl + '/redbag/sendAuthCode4Redbag?format=json&phone=' + tel, {},
                function(data) {
                    if (data.code == 0) {
                        _this.addClass('cur')
                        _this.html('30s后重新获取');
                        timeout(30, _this);
                    } else {
                        // alert('验证码发送失败');
                        $('.dialogbox .font').text('验证码发送失败');
                $('.dialogbox').show();
                    }
                })
        }
    }).trigger('click');
}

function isGet(tel) {
    $('.sureBtn').off();
    $('.sureBtn').on('click', function() {
        var sCode = $('.mesgCheck input').val();
        if (sCode) {
            getredBagMesg(tel, sCode);
        } else {
            // alert('请输入短信验证码');
            $('.dialogbox .font').text('请输入短信验证码');
                $('.dialogbox').show();
        }
    })
}

function getredBagMesg(tel, code) {
    getJsonData(
        ajaxUrl + '/redbag/rush4PhoneAndApp?format=json',
         {
            redbagCode: redbagCode,
            authCode: code,
            phone: tel,
            smsMsg: " 恭喜获得1分钱洗车券，全国20000家门店洗车仅需支付1分钱，有效期30天，点击使用http://t.cn/R4yfrvL",
            source: "renrencheRedBag"
        },
        function(data) {
            if (data.code == 0) {
                //console.log(data.info)
                if (data.info && data.info.length == 1) {
                    var shtml =
                        '1分钱洗车券已放到<b>' + tel + '</b>的汽车超人账户，请尽快登录app使用哟~';
                }
                $('.topCon p').html(shtml);
                $('.redEnvelope').css("display", "none");
                $('.getSucces').css("display", "block");
                $('.mask,.winBox').hide();
            } else if (data.code == 604 || data.code == -603) {
                // alert('红包已过期');
                // $('.mask,.winBox').hide();
                $('.mesgCheck input').val('');
                $('.dialogbox .font').text('红包已过期');
                $('.dialogbox').show();
            } else if (data.code == -2031) {
                // alert('验证码错误');
                $('.dialogbox .font').text('验证码错误');
                $('.dialogbox').show();
            } else if (data.code == 607) {
                // alert('很抱歉，您已参加过本次活动。');
                // $('.mask,.winBox').hide();
                $('.mesgCheck input').val('');
                $('.dialogbox .font').text('很抱歉，您已参加过本次活动。');
                $('.dialogbox').show();
            } else if (data.code == 602) {
                // alert('来晚啦！红包都被抢光了捏');
                $('.dialogbox').show();
            } else {
                // alert('领取失败');
                $('.dialogbox .font').text('领取失败');
                $('.dialogbox').show();
            }
        })
}
$('.getBtn').click(function() {
    var sTel = $('.telNum').val();
    if (reg.test(sTel)) {
        $('.mask,.winBox').show();
        getTelCode(sTel);
        isGet(sTel);
    } else {
        // alert('请输入正确的手机号码');
        $('.dialogbox .font').text('请输入正确的手机号码');
                $('.dialogbox').show();
    }
})
