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

function getJsonData(url, data, callfunc, errfunc) {
    $.ajax({
        url: url,
        data: data,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(data) {
            if (data.code == 0) {
                callfunc(data);
            } else {
                if (errfunc)
                    errfunc(data);
                else
                    new superLog(data.info);
            }
        },
        error: function(data) {
            if (errfunc)
                errfunc(data);
        }
    });
}

var userId = getQueryString('userId');
var ajaxUrl='http://api.qichechaoren.com';
// var ajaxUrl = 'http://192.168.3.214:9775';
if (/\.qccr\.com/.test(location.href))
    ajaxUrl = 'http://api.qichechaoren.com';

function getKouLingBag(command, userId) {
    getJsonData(
        ajaxUrl + '/redbag/h5/command', {
            command: command,
            userId: userId
        },
        function(data) {
            var klData = data.info;
            if (klData.code == 1) {
                $('.g-body').show();
                $(".check").bind("touchend",function(){
                    $(".g-body").hide();
                    toApp.wallet();
                });
            } else if (klData.code == 0) {
                var qiangguang = '<div class="m-text">';
                qiangguang += '<img src="images/dialog2.png" />';
                qiangguang += '<p class="u-ticket1 "> 已抢过！</p>';
                qiangguang += '<p class="u-tips3">客官，把机会留给别人吧！</p>';
                qiangguang += '</div>';
                qiangguang += '<div class="m-btn">';
                qiangguang += '<a href="#">好吧，我知道了！</a>';
                qiangguang += '</div>';
                $(".g-dialog").html(qiangguang);
                $('.g-body').show();
                $(".m-btn").bind("touchend", function() {
                    $(".g-body").hide();
                });
            } else {
                mpt(klData.describe);
            }
        }
    );
}
