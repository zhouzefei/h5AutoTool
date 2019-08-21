$().ready(function () {
    
});

//获取浏览器参数
function getQueryString(name) {
			if(window.location.href.indexOf("?")!=window.location.href.lastIndexOf("?"))
			var urls=window.location.href.replace(/\?userId.*$/,"&userId").replace(/^.*\?/,"");
			else
			var urls=window.location.href.replace(/^.*\?/,"");
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
			var r = ("?"+urls).substr(1).match(reg); 
			if (r != null) return unescape(r[2]); return null; 
}

var is_weixin = function () {
    var a = navigator.userAgent.toLowerCase();
    if (a.match(/MicroMessenger/i) == "micromessenger") {
        return true
    } else {
        return false
    }
};

var getJsonData = function (type, url, data, callfunc, errfunc) {
    $.ajax({
        type:!type?"get":type,
        url: url,
        data: data,
        success: function (data) {
            if (callfunc)
                callfunc(data);
        },
        error: function (data) {
            if (errfunc)
                errfunc(data);
        }
    });
}
var getJsonDataP = function (type, url, data, callfunc, errfunc) {
    $.ajax({
    	type:!type?"get":type,
        url: url,
        data: data,
        dataType: "jsonp",
        jsonp: "callback",
        success: function (data) {
            if (callfunc)
                callfunc(data);
        },
        error: function (data) {
            if (errfunc)
                errfunc(data);
        }
    });
}

var dateFormat = function (date, format) {
    date = new Date(date);
    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        }
        else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
}

var iDialog = {
    options: { width:160,height:90,lock: true, quickClose: false, auto: false, time: 2000 },
    show: function (content, options, callback) {
        if (options != null && typeof (options) != "undefined") {
            for (var key in options) {
                iDialog.options[key] = options[key];
            }
        }
        var tmplHtml = '<div id="idialog"><div class="imask" style="display: none;position: absolute;top: 0px;left: 0px;background-color: #333;z-index: 998;opacity: 0.7;-moz-opacity: 0.3;filter: alpha(opacity=30);"></div>' +
            '<div class="ipopup" style="display: none;position: fixed;border: 0px solid rgba(178,178,178,.3);border-radius: 6px;background: #fff;z-index: 999;max-width:90%;">' +
            '<div class="iclose" style="position:absolute;top:-10px;right:-10px;width:22px;height:22px;color:#f00;z-index:1000;cursor:pointer;"></div>' +
            '<div class="icontent"></div></div></div>';
        var ele = $(tmplHtml);
        if ($("#idialog").length <= 0) {
            $("body").append(ele);
            $(".iclose").on({
                click: function () {
                    iDialog.close();
                    return false;
                }
            });
        }
        $("#idialog .icontent").html(content);

        if (iDialog.options.lock) {
            iDialog.showMask();
        }
        iDialog.showContent();

        if (iDialog.options.auto) {
            setTimeout(function () {
                iDialog.close();
            }, iDialog.options.time);
        }

        if (callback != null && typeof (callback) != "undefined" && typeof (callback) == "function") {
            callback();
        }
    },
    showMask: function () {
        var documentHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        var documentWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        $("#idialog .imask").css({ "height": documentHeight + "px", "width": documentWidth + "px" }).show();
        if (iDialog.options.quickClose) {
            $("#idialog .imask").on("click", function () {
                iDialog.close();
            });
        }
    },
    showContent: function () {
        var ipopupobj = $("#idialog .ipopup");
        ipopupobj.show();
        iDialog.resize();
        iDialog.center(ipopupobj);
        ipopupobj.removeClass('zoomOut').addClass('zoomIn').removeClass('animated').addClass('animated');
    },
    resize: function () {
        var content = $("#idialog .icontent");
        var width = iDialog.options.width;
        var height = iDialog.options.height;
        content.removeAttr("style");
        if (content.children().length == 0) {
            content.css({ "padding":"20px"});
            return false;
        }
        content.css({ "height": height, "width": width});
    },
    center: function (obj) {
        var top = ($(window).height() - $(obj).height()) / 2;
        var left = ($(window).width() - $(obj).width()) / 2;
        $(obj).css({ "top": top + "px", "left": left + "px" });
    },
    close: function () {
        $("#idialog .ipopup").hide();
        $("#idialog .ipopup").removeClass('zoomIn').addClass("zoomOut").removeClass('animated').addClass('animated');
        $("#idialog .imask").hide();
    }  
}

var mpt = function(text,fun){
	$('body').append('<div id="mpt-full"><div id="mpt"><p>' + text + '</p></div></div>');
	setTimeout('$("#mpt-full").hide()',1500);
	setTimeout('$("#mpt-full").remove()',2500);
}

// 添加Cookie
function addCookie(name, value, options) {
	if (arguments.length > 1 && name != null) {
		if (options == null) {
			options = {};
		}
		if (value == null) {
			options.expires = -1;
		}
		if (typeof options.expires == "number") {
			var time = options.expires;
			var expires = options.expires = new Date();
			expires.setTime(expires.getTime() + time * 1000);
		}
		if (options.path == null) {
			options.path = "/";
		}
		if (options.domain == null) {
			options.domain = ".qccr.com";
		}
		document.cookie = encodeURIComponent(String(name)) + "=" + encodeURIComponent(String(value)) + (options.expires != null ? "; expires=" + options.expires.toUTCString() : "") + ("; path=/") + ("; domain="+options.domain) + (options.secure != null ? "; secure" : "");
	}
}
// 获取Cookie
function getCookie(name) {
	if (name != null) {
		var value = new RegExp("(?:^|; )" + encodeURIComponent(String(name)) + "=([^;]*)").exec(document.cookie);
		return value ? decodeURIComponent(value[1]) : null;
	}
}



