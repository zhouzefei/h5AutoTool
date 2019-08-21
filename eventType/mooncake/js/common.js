
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
        options.path = "${setting.cookiePath}";
      }
      if (options.domain == null) {
        options.domain = "${setting.cookieDomain}";
      }
      document.cookie = encodeURIComponent(String(name)) + "=" + encodeURIComponent(String(value)) + (options.expires != null ? "; expires=" + options.expires.toUTCString() : "") + ("; path=/") + ("; domain=${setting.cookieDomain}") + (options.secure != null ? "; secure" : "");
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
  //发送请求接口
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
  }
  function resize() {
    window.remFontSize = document.documentElement.clientWidth / 10;
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + "px";
  }
  var b = null;
  window.addEventListener("resize", function(){
    clearTimeout(b),
    b = setTimeout(resize, 300);
  }, !1);
  resize();

  var tipWindows={
      status:0,
      close:0,
      data:{counts: 100},
      createElement:function(ojb){
        var strVar = "";
          strVar += "<div class=\"hbWindow\">";
          strVar += "<div class=\"hbWindowCon\">";
          strVar += " <div class=\"hbTip\">";
          strVar += "   <p>";
          strVar += "     <img src=\"images/xiaoyuebing_07.png\"/>";
          strVar += "     <span class=\"multiply\">x<\/span>";
          strVar += "     <span class=\"count\">"+ojb.counts+"<\/span>";
          strVar += "   <\/p>";
          strVar += "   <p>";
          strVar += "     您在10秒内制作领了"+ojb.counts+"个月饼";
          strVar += "   <\/p>";
          strVar += " <\/div>";
          strVar += " <div class=\"RedEnvelope\">";
          if(this.status==0){
            strVar += "   <a class=\"makeOther\">";
            strVar += "           再次制作";
            strVar += "   <\/a>";
            strVar += "   <a>";
            strVar += "           喊好友来帮忙";
            strVar += "   <\/a>";
          }else if(this.status==1)
          {
            strVar += "   <a>";
            strVar += "           次数已用完";
            strVar += "   <\/a>";
            strVar += "   <a>";
            strVar += "           喊好友来帮忙";
            strVar += "   <\/a>";
          }else if(this.status==2)
          {
            strVar += "   <a href=\"makeCake.html\">";
            strVar += "           我也要参与";
            strVar += "   <\/a>";
            strVar += "   <a href=\"cakeList.html\">";
            strVar += "           好友排行榜";
            strVar += "   <\/a>";
          }
          strVar += " <\/div>";
          if(this.close == 0){
            strVar += " <p class=\"colse\">";
            strVar += " <\/p>";
          }
          strVar += "<\/div>";
          strVar += "<\/div>";
          return strVar;
        
      },
      initState:function(ele){
        this.render(ele);
        $(".makeOther").bind("click",function(){

          $(this).closest(".mask").hide();
          makeCake.init();

          Countdown.start();
          $("#mycanvas").show();
          Countdown.paly();



        });
        $(".colse").bind("click",function(){
          window.location.href="index.html";
        });
      },
      render:function(ele){
        var htmls=this.createElement(this.data);
        ele.html(htmls);
        
        ele.show();
      }
      
    };
