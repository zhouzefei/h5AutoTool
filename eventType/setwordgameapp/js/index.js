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
            else
                callfunc(data);
        }
    });
};
//弹框
var mpt = function(text, fun) {
    $('body').append('<div id="mpt-full"><div id="mpt"><p>' + text + '</p></div></div>');
    setTimeout('$("#mpt-full").hide()', 1500);
    setTimeout('$("#mpt-full").remove()', 2500);
};

var userId = getQueryString('userId');
//获取集字的数据
var wordCollect = {
    phone: "",
    apply: function() { //报名参加,判断用户是否集过字,集了几个分别是哪几个
        getJsonData(
            ajaxUrl + '/words/toCollectwords4app', {
                format: 'json',
                userId: userId
            },
            function(data) {
                if (data.code == 0) {
                    wordCollect.phone = data.wordCollections[0].phone;
                    // alert(data.wordCollections[0].phone);
                    if (data.gameFlag == 2) {
                        for (var i = 0; i < 7; i++) {
                            var lightStr = "<img src=\"images\/lighter" + (i + 1) + ".png\"  class=\"lighter\">";
                            $(".banner div").eq(i).html(lightStr);
                        }
                        $(".wordNum span").html("7");
                        $(".btn .check").show().siblings().hide();
                        var coupo = '<span>' + data.prizes[0].couponAmount + '</span>';
                        // coupo += '<span>' + data.prizes.couponType + '</span>';
                        //$(".done .coupon").html(coupo);
                        $(".coupon span").eq(0).text(data.prizes[0].couponAmount);                  
                        $(".done .info b").html(wordCollect.phone);
                        btnSta.check();
                    } else if (data.gameFlag == 1) {
                        $(".wordNum span").html("0");
                        judgeDate();
                        $('.startColle').click(function() {
                            slotMachine.conSloMa(0);
                            wordCollect.ifCollect(1);
                            setTimeout(function() {
                                $(".btn .friend").show().siblings().hide();
                                $(".btn .friend").click(function() {
                                    btnSta.friend();
                                });
                                $(".wordNum span").html("1");
                                var lightStr = "<img src=\"images\/lighter1.png\"  class=\"lighter\">";
                                $(".banner div").eq(0).html(lightStr);
                            }, 7000);
                        });
                    } else {
                        var collectData = data.wordCollections;
                        var colData = new Array();
                        var lightStr = '';
                        $.each(collectData, function(i, item) {
                            colData.push(item.wordIndex);
                        });
                        var length = colData.length;
                        colData.splice(0, 1);
                        $(".wordNum span").html(colData.length);
                        for (var i = 0; i <= colData.length; i++) {
                            var lightStr = "<img src=\"images\/lighter" + colData[i] + ".png\"  class=\"lighter\">";
                            $(".banner div").eq(colData[i] - 1).html(lightStr);
                            slotMachine.creatNumArr(colData[i]);
                        }
                        $(".btn .friend").show().siblings().hide();
                        $(".btn .friend").click(function() {
                            btnSta.friend();
                        });
                        judgeDate();
                    }
                } else if (data.code == -200) {
                    mpt("未登录");
                    judgeDate();
                    toApp.login();
                }else{
                    judgeDate();
                }
            }
        );
    },
    ifCollect: function(r) { //把集好的字发送给后端
        getJsonData(
            ajaxUrl + '/words/collectwords4app', {
                format: 'json',
                userId: userId,
                wordIndex: r
            },
            function(ndata) {
                if (ndata.code == 0) {
                    // mpt("集成功");
                    setTimeout(this.judgSta, 1500);
                } else if (ndata.code == -200) {
                    toApp.login();
                } else {
                    mpt(ndata.msg);
                }
            }
        );
    },
    judgSta: function() {
        var lightStr = "<img src=\"images\/lighter" + r + ".png\"  class=\"lighter\">";
        $(".banner div").eq(r - 1).html(lightStr);
        var colN = parseInt($(".wordNum span").html()) + 1;
        $(".wordNum span").html(colN);
    }
};
//老虎机
var slotMachine = {
    isBegin: false, //点击开始
    h: 2, //老虎机转动地方的高度,单位rem
    numArr: [1, 2, 3, 4, 5, 6, 7], //几个数字
    worldArr: ['超', '人', '请', '我', '做', '保', '养'],
    creatNumArr: function(del) { //删除已经选中的数字       
        this.numArr.splice(this.numArr.indexOf(del), 1);
        return this.numArr;
    },
    creatNumRand: function(numArr) { //随机选择数组中的某一值
        var numRand = Math.floor(Math.random() * numArr.length + 1) - 1;
        return (this.numArr[numRand]);
    },
    conSloMa: function(num) {
        if (this.isBegin) {
            // shareFriend();
            return false;
        }
        this.isBegin = true;
        $(".gundongcon").addClass('cartoon');
        $(".cartoon").css('backgroundPositionY', (-10 * this.h * this.worldArr.length - 2 * num) + 'rem');
        $(".cartoon").css('webkitTransition', 'all ease-in-out 6s 0.5s');
        //num {"0":"超","1":"人","2":"请","3":"我","4":"做","5":"保","6":"养"}
    }
};


//APP分享
var shareFriend = function() {
    var sharedata = ["http://static.qichechaoren.com/upload/2015/08/sharelogo.jpeg?v="+ new Date().getTime(),
        "快帮我抢保养红包",
        "http://market.csqccr.com/wechat/toCollectWords?phone=" + wordCollect.phone
    ];
    toApp.sharered(sharedata[0] + "?" + Math.random().toFixed(10), sharedata[1], sharedata[2]);
}

var btnSta = {
    check: function() {
        // $(".content").hide();
        // $(".done").show();
        $(".btn p").hide();
        $(".btn .check").show();
        $(".btn .check").click(function(){
            $(".content").hide();
            $(".done").show();
        });
    },
    friend: function() {
        shareFriend();
    }
};
function judgeDate(){
    if(new Date().getTime() > Date.parse("2016/3/11")){   //活动结束
        $(".btn p").hide();
        $(".btn .over").show(); 
    }
}
