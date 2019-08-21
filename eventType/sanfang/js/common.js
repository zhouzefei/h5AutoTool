var hexcase=0;var b64pad="";var chrsz=8;function hex_md5(s){return binl2hex(core_md5(str2binl(s),s.length*chrsz))}function b64_md5(s){return binl2b64(core_md5(str2binl(s),s.length*chrsz))}function str_md5(s){return binl2str(core_md5(str2binl(s),s.length*chrsz))}function hex_hmac_md5(key,data){return binl2hex(core_hmac_md5(key,data))}function b64_hmac_md5(key,data){return binl2b64(core_hmac_md5(key,data))}function str_hmac_md5(key,data){return binl2str(core_hmac_md5(key,data))}function md5_vm_test(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}function core_md5(x,len){x[len>>5]|=128<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd)}return Array(a,b,c,d)}function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b)}function md5_ff(a,b,c,d,x,s,t){return md5_cmn((b&c)|((~b)&d),a,b,x,s,t)}function md5_gg(a,b,c,d,x,s,t){return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t)}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t)}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|(~d)),a,b,x,s,t)}function core_hmac_md5(key,data){var bkey=str2binl(key);if(bkey.length>16){bkey=core_md5(bkey,key.length*chrsz)}var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^909522486;opad[i]=bkey[i]^1549556828}var hash=core_md5(ipad.concat(str2binl(data)),512+data.length*chrsz);return core_md5(opad.concat(hash),512+128)}function safe_add(x,y){var lsw=(x&65535)+(y&65535);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&65535)}function bit_rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}function str2binl(str){var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz){bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(i%32)}return bin}function binl2str(bin){var str="";var mask=(1<<chrsz)-1;for(var i=0;i<bin.length*32;i+=chrsz){str+=String.fromCharCode((bin[i>>5]>>>(i%32))&mask)}return str}function binl2hex(binarray){var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&15)+hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&15)}return str}function binl2b64(binarray){var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3){var triplet=(((binarray[i>>2]>>8*(i%4))&255)<<16)|(((binarray[i+1>>2]>>8*((i+1)%4))&255)<<8)|((binarray[i+2>>2]>>8*((i+2)%4))&255);
for(var j=0;j<4;j++){if(i*8+j*6>binarray.length*32){str+=b64pad}else{str+=tab.charAt((triplet>>6*(3-j))&63)}}}return str};
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
//获取浏览器参数
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
}
function gomd5 (url,data) {
	// body...\
	var newurl=url.split('#')[0].split('?')[1];
	var keyArr=[],
		valArr={},
		str='';
	if(newurl)
	{
		var queryString=newurl.split('&');		
		$.each(queryString,function(index,em){
			keyArr.push(em.split('=')[0]);
			valArr[em.split('=')[0]]=em.split('=')[1];
		})
	}
	$.each(data,function(index,em){
		keyArr.push(index);
		valArr[index]=em;

	})
	keyArr.push("appId");
	valArr['appId']=100761;
	keyArr.sort();
	for(var i=0;i<keyArr.length;i++){
		str += keyArr[i]+valArr[keyArr[i]];
	}
	data.sign=hex_md5(str+'5E81BC405945109951C1ECA9D23A1C37').toUpperCase();
	data.appId= 100761;
	data.sign=str;
}
function getJsonData(url,data,callfunc,errfunc){
  if(typeof data=="string"){data={}}
  gomd5 (url,data) ;
  $.ajax({
      url: url,
      data:data,
      dataType: "jsonp",
      jsonp: "callback",
      success: function (data) {
        callfunc(data);
        $('.load').hide();
      },
      error:function(data)
      {
        if(errfunc)
        errfunc(data);
        else
        callfunc(data);
      }
    });
}
//
var ajaxUrl='http://192.168.3.240:9775';
var ul=location.href;
if(/\.qccr\./.test(ul))
{
	 ajaxUrl='http://api.qichechaoren.com';
}else if(/\.yfbqccr\./.test(ul))
{
	 ajaxUrl='http://api.yfbqccr.com';
}

/*var ajaxUrl1='http://192.168.3.239:9770'*/
// 微信分享
function is_weixn(){  
		var ua = navigator.userAgent.toLowerCase();  
		if(ua.match(/MicroMessenger/i)=="micromessenger") {  
			return true;  
		} else {  
			return false;  
		}  
	}
function shareWeixin(ojb){
if(!is_weixn())
{
}else
{
	var url = encodeURIComponent(location.href.split('#')[0]);
	$.ajax({
        
        dataType: "jsonp",
        url: "http://market.qccr.com/weixin/share?url="+url,
        success: function (data) {
	   	  data=data.info;	
		  wx.config({
	   			debug:false,
	    		appId: data.appId, // 必填，公众号的唯一标识
	   			timestamp:data.timestamp, // 必填，生成签名的时间戳
	    		nonceStr: data.nonceStr, // 必填，生成签名的随机串
	    		signature: data.signature,// 必填，签名，见附录1
			     jsApiList: ['onMenuShareTimeline',
			                 'onMenuShareAppMessage',
			                 'onMenuShareQQ',
			                 'onMenuShareWeibo'
			                 ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
				
				wx.ready(function(){
					var imgUrl="http://sale.qccr.com/wenda/images/share.jpg?"+Math.random().toFixed(10);
				 	//分享朋友圈
				 	wx.onMenuShareTimeline({
				 	    title: ojb[0].title, 
				 	    desc: ojb[0].content,
				 	    link: ojb[0].url?ojb[0].url:location.href, // 分享链接
				 	    imgUrl: ojb[0].imgUrl, // 分享图标
				 	    success: function () {
				 	    	ojb[0].success();
				 	    	//$(".share_img").hide();
				 	    },
				 	    cancel: function () { 
				 	    	ojb[0].cancel();
				 	        // 用户取消分享后执行的回调函数
				 	    }
				 	});
				 	//分享给朋友
				 	wx.onMenuShareAppMessage({
				 		title: ojb[1].title, 
				 	    desc: ojb[1].content,
				 	    link: ojb[1].url?ojb[0].url:location.href, // 分享链接
				 	    imgUrl: ojb[1].imgUrl, // 分享图标
				 	    success: function () {
				 	    	ojb[1].success();
				 	    	//$(".share_img").hide();
				 	    },
				 	    cancel: function () { 
				 	    	ojb[1].cancel();
				 	        // 用户取消分享后执行的回调函数
				 	    }
				 	});
				}); 
				wx.error(function(res){
		
				});

        },
        error: function () {}
  	  });
}
	
}