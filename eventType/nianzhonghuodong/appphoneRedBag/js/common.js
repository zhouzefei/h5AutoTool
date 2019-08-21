/* 浏览器信息
 * 返回示例
 * {"versions":{"ios":true,"android":false,"iPhone":true,"iPad":false}}
 *
 */
var browser = {
	versions: function() {
		var u = navigator.userAgent.toLocaleLowerCase(),
			app = navigator.appVersion;
		return { //移动终端浏览器版本信息 
			ios: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), //ios终端 
			android: u.indexOf('android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
			iPhone: u.indexOf('iphone') > -1, //是否为iPhone或者QQHD浏览器 
			iPad: u.indexOf('ipad') > -1, //是否iPad 
		};
	}()
}
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
/* cookie操作
 * 示例
 * addCookie("tel", "1589887788", {expires:3600,domain:".qccr.com"}})
 * getCookie("tel")
 * removeCookie("tel",{domain:".qccr.com"}})
 */
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
			options.domain = "";
		}
		document.cookie = encodeURIComponent(String(name)) + "=" + encodeURIComponent(String(value)) + (options.expires != null ? "; expires=" + options.expires.toUTCString() : "") + ("; path=/") + ("; domain=" + options.domain) + (options.secure != null ? "; secure" : "");
	}
}
// 获取Cookie
function getCookie(name) {
	if (name != null) {
		var value = new RegExp("(?:^|; )" + encodeURIComponent(String(name)) + "=([^;]*)").exec(document.cookie);
		return value ? decodeURIComponent(value[1]) : null;
	}
}
// 移除Cookie
function removeCookie(name, options) {
	addCookie(name, null, options);
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
//时间格式化
function formatDate(now){     
	var   month=now.getMonth()+1;     
	var   date=now.getDate();     
	var   hour=now.getHours();     
	var   minute=now.getMinutes();     
	var   second=now.getSeconds();     
	return month+"-"+(date>=10 ? date:("0"+date))+"   "+(hour>=10 ? hour:("0"+hour))+":"+(minute>=10 ? minute:("0"+minute))+":"+(second>=10 ? second:("0"+second));     
};

//转码方法
	function EncodeUtf8(s1)  
	{  
		// escape函数用于对除英文字母外的字符进行编码。如“Visit W3School!”->"Visit%20W3School%21"  
		var s = escape(s1);  
		var sa = s.split("%");//sa[1]=u6211  
		var retV ="";  
		if(sa[0] != "")  
		{  
			retV = sa[0];  
		}  
		for(var i = 1; i < sa.length; i ++)  
		{  
			if(sa[i].substring(0,1) == "u")  
			{  
				retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));  
				if(sa[i].length>=6)  
				{  
					retV += sa[i].substring(5);  
				}  
			}  
			else retV += "%" + sa[i];  
		}  
		return retV;  
	} 
