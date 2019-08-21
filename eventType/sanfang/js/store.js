var page=1;
var lng='',
    lat='',
    isLoad=true;
var mpt = function(text,fun){
  $('body').append('<div id="mpt-full"><div id="mpt"><p>' + text + '</p></div></div>');
  setTimeout('$("#mpt-full").hide(1000)',1000);
  setTimeout('$("#mpt-full").remove()',2000);
}
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  else{
    mpt('无法获取当前地址');
    lat=30.2773660000;
    lng=120.1075200000;
  }
  }
function showPosition(position)
  {
  lat=position.coords.latitude 
  lng=position.coords.longitude;  
  }
function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      //x.innerHTML="User denied the request for Geolocation.";
      mpt('无法获取地址');
      break;
    case error.POSITION_UNAVAILABLE:
      //x.innerHTML="Location information is unavailable."
      mpt('无法获取地址');
      break;
    case error.TIMEOUT:
      //x.innerHTML="The request to get user location timed out."
      mpt('无法获取地址');
      break;
    case error.UNKNOWN_ERROR:
      //x.innerHTML="An unknown error occurred."
      mpt('无法获取地址');
      break;
    }
    lat=30.2773660000;
    lng=120.1075200000;
  }
  function is_weixn(){  
  var ua = navigator.userAgent.toLowerCase();  
  if(ua.match(/MicroMessenger/i)=="micromessenger") {  
    return true;  
  } else {  
    return false;  
  }  
}  
if(!is_weixn())
{
  
}else{
  url = encodeURIComponent(location.href.split('#')[0]);
  $.ajax({
        
        dataType: "jsonp",
    url: "http://market.qccr.com/weixin/share?url="+url,
        success: function (data) {
        data=data.info; 
      wx.config({
          debug:true,
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
          wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function (res) {
      alert(res);
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
    }
  });         
  wx.error(function(res){

  });
  });
  },
  error: function () {}

});  
}
function getMesg(json){
    $('.load').show(); 
    getJsonData(ajaxUrl+'/store/info?',json,function(data){
      if(data.code==0){        
        appendStore(data.info);
        isLoad=true;
      }
      else if(data.code==-107){
        $('.storeMesgBox').html('<p style="text-align:center">'+data.msg+'</p>');
        isLoad=true;
      }   
    })
}
function appendStore(data){ //插入门店信息
  var shtml='';
  $.each(data,function(i,em){
    var pj='';
    for(var i=0;i<parseInt(em.average);i++){
      pj += '<span></span>';
      }
    for(var i=0;i<(5-parseInt(em.average));i++){
      pj +='<span class="graystar"></span>';
    }
    shtml +='<div class="storeMesgWrap">'
        + '<h2>'+em.sa+'</h2>'
        + '<div class="storeMesg">'
        + '<p class="storeImg"><img src="'+em.imgUrl+'" alt=""></p>'
        + '<div class="mesgList">'
        + '<p class="storeName">'+em.sn+'</p>'
        + '<p class="storeScore">'
        + pj+'<b>'+em.average+'分</b>'
        + '</p>'
        + '<p class="evaluate"><span class="flaotLeft">'+em.count+'评价</span><span class="floatRight">'+em.dist+'</span></p>'
        + '</div>'
        + '</div>'
        + '<a href="javascript:;" class="chooseStore" data-id="'+em.sid+'">选择该门店</a>'
          + '</div>'
  })      
  $('.storeMesgBox').append(shtml);
}
getLocation(); //获取当前经纬度
//按条件查找数据
function storeData(isRecently){
  var sSearchType=$('.select option:selected').val(),
      nAreaType=$('#txt_area').attr('data-type'),
      nAreaId=$('#txt_area').attr('data-value'),
      sKeyWord=$('.orderNum').val()=='请输入您要搜索的内容' ? '' : $('.orderNum').val(),
      sTypeVal=$('.orderShopList option:selected').val();
  $('.storeMesgBox').html('');
  if(isRecently){
    getMesg({page:page,areaId:nAreaId,areaType:nAreaType,searchType:sSearchType,keyWord:sKeyWord,type:sTypeVal,lat:lat,lng:lng,num:6,h5:1});
  }
  else{
    getMesg({page:page,areaId:nAreaId,areaType:nAreaType,searchType:sSearchType,keyWord:sKeyWord,type:sTypeVal,num:6,h5:1});
  }
}
//搜索按钮事件
function searchStore(){
  $('.searchStore').on('click',function(){
    page=1;
    if(isLoad){
      isLoad=false;
      storeData(false);
    }        
  })
}
//滚动加载
$(window).on('scroll', function() {
  var iH = $(window).scrollTop() + $(window).height();
  if(iH-20>=$('body').height()){
    page++;
    var sSearchType=$('.select option:selected').val(),
        nAreaType=$('#txt_area').attr('data-type'),
        nAreaId=$('#txt_area').attr('data-value'),
        sKeyWord=$('.orderNum').val()=='请输入您要搜索的内容' ? '' : $('.orderNum').val(),
        sTypeVal=$('.orderShopList option:selected').val();
    if(isLoad){
      isLoad=false;
      getMesg({page:page,areaId:nAreaId,areaType:nAreaType,searchType:sSearchType,keyWord:sKeyWord,type:sTypeVal,num:6,h5:1});
    }
  }           
})

window.onload=function(){
  // 默认加载数据
getMesg({page:1,searchType:0,type:$('.orderShopList option:selected').val(),num:6,h5:1});
  searchStore(); //执行搜索按钮事件
  $('.select').change(function(){ //下拉框选择事件    
    page=1;
    var zj=$('.select option:selected').val();    
    if(zj==0){
      getJsonData(ajaxUrl+'/activity/getCityByLocation?latitude=30.2773660000&longitude=120.1075200000','',function(data){
        //console.log(data)
        $('#txt_area').html(data.info.areaName+'<b></b>');
      });
      storeData(true);     
    }
    else{
      storeData(false);
    }
  })
  var orderNo=getQueryString('orderNo'),
      placeMobileNo=getQueryString('orderTel'),
      sourceFrom=getQueryString('sourceFrom'),
      serverOder=getQueryString('serverOder');
  $('.storeBox').delegate('.chooseStore','click',function(){ //选择该门店事件
    var r=confirm("确认预约该店？\r确定门店后将无法自己更换");
    var storeId=$(this).attr('data-id');
    if (r==true){        
        //window.location.href="chooseStore.html";
        getJsonData(ajaxUrl+'/order/appointShop?orderNo='+orderNo+'&placeMobileNo='+placeMobileNo+'&sourceFrom='+sourceFrom+'&storeId='+storeId+'&serviceOrderId='+serverOder,'',function(data){
          if(data.code==0){
            window.location.href='noChoose.html?orderNo='+orderNo+'&orderTel='+placeMobileNo+'&sourceFrom='+sourceFrom+'&appointState=2';
          }
          else{
            alert(data.msg)
          }
        })        
    }
    else{
      return false;
    }
  })
}
