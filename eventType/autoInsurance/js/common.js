
var myTime = {
    /**
     * 当前时间戳
     * @return <int>        unix时间戳(秒)  
     */
    CurTime: function(){
        return Date.parse(new Date())/1000;
    },
    /**              
     * 日期 转换为 Unix时间戳
     * @param <string> 2014-01-01 20:20:20  日期格式              
     * @return <int>        unix时间戳(秒)              
     */
    DateToUnix: function(string) {
        var f = string.split(' ', 2);
        var d = (f[0] ? f[0] : '').split('-', 3);
        var t = (f[1] ? f[1] : '').split(':', 3);
        return (new Date(
                parseInt(d[0], 10) || null,
                (parseInt(d[1], 10) || 1) - 1,
                parseInt(d[2], 10) || null,
                parseInt(t[0], 10) || null,
                parseInt(t[1], 10) || null,
                parseInt(t[2], 10) || null
                )).getTime() / 1000;
    },
    /**              
     * 时间戳转换日期              
     * @param <int> unixTime    待时间戳(秒)              
     * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)              
     * @param <int>  timeZone   时区              
     */
    UnixToDate: function(unixTime, isFull, timeZone) {
        if (typeof (timeZone) == 'number')
        {
            unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
        }
        var time = new Date(unixTime * 1000);
        var ymdhis = "";
        ymdhis += time.getUTCFullYear() + "-";
        ymdhis += (time.getUTCMonth()+1) + "-";
        ymdhis += time.getUTCDate();
        if (isFull === true)
        {
            ymdhis += " " + time.getUTCHours() + ":";
            ymdhis += time.getUTCMinutes() + ":";
            ymdhis += time.getUTCSeconds();
        }
        return ymdhis;
    }
};
var dataUrl = "http://192.168.3.102:9775/buddy/insurance";
var appSecret = "0DA05F7F0514300BA75D0F6ABFA200B4";
var appId = 10120;
var version = "1.0.0";
var timestamp;
var userId = getQueryString("userId");

var signCreate = function(method,param,callfunc){
  var theDate = new Date();
  var year = theDate.getUTCFullYear();
  var month= theDate.getMonth()+1;
  var date= theDate.getDate();
  var hour= theDate.getHours();
  var minute= theDate.getMinutes();
  var second= theDate.getSeconds();
  timestamp = year+"-"+(month>=10 ? month:("0"+month))+"-"+(date>=10 ? date:("0"+date))+" "+(hour>=10 ? hour:("0"+hour))+":"+(minute>=10 ? minute:("0"+minute))+":"+(second>=10 ? second:("0"+second));
  var sign;

  var str = appSecret + "appId" + appId + "method" + method + "param" + param + "timestamp" + timestamp +"version" + version;
  sign = hex_md5(str);

  getInsuranceData(method,param,sign,callfunc);
}
var getInsuranceData = function(method,param,sign,callfunc){
  getJsonData(dataUrl,{appId: appId,method: method,param: param,timestamp: timestamp,version: version,sign: sign},callfunc);
};

/*
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?9ba8813c577021cb449578468da2085b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();*/
