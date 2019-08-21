$(function(){
	var data={
		'userId':userId,
		'redbagId':redbagId
	};
	var appQuan = new QuanComponents();
	appQuan.debug=true;
	appQuan.receiveSuccess=function(data){
		getStatus(data);
	};
	appQuan.robbed=function(data){
		$('.getCouponBtnWrap .getBigGift').css({'backgroundColor':'#999'}).text('已抢光');
		$('.shareBtnWrap,.myWalletBtnWrap').remove();
		var txt=$('.getCouponBtnWrap .callbackState').text()||'很遗憾，您来晚了！';
		$('.getCouponBtnWrap .callbackState').text(txt).css({'opacity':1,'backgroundColor':'transparent'});
		$('.getCouponBtnWrap').css({'paddingTop':'20px'});
	};
	appQuan.outDate=function(data){
		$('.getCouponBtnWrap .getBigGift').css({'backgroundColor':'#999'}).text('红包已过期');
	};
	appQuan.alreadyReceive=function(data){
		getStatus(data);
	};
	appQuan.login=function(data){
		toApp.login();
	};
	appQuan.error=function(data){

	};
	function getStatus(data){
		$('.getCouponBtnWrap .getBigGift').css({'backgroundColor':'#999'}).text('已领取');
		if(data.info && data.info.length==1){
			var imgUrlState=$('.afterOneInfo').attr('src');
			$('.beforeQuanState img').attr('src',imgUrlState);
		}else if (data.info && data.info.length > 1){
			$('.beforeQuanState').hide();
			$('.afterQuanState').show();
			var backUrl=$('.afterStateUrl').css('backgroundImage')||'';
			$('.afterStateUrl').parent().remove();
			if(backUrl){backUrl=backUrl.replace(/url\((.*?)\/(images\/.*?)\)/, 'url($2);');}
			var liStr='<ul style="height:90%; overflow-x:hidden; overflow-y:auto;padding-top:.1rem;" class="afterState">';
			var liStyle='background-size:100% 100%;width:5.5rem; margin:.14rem auto;line-height:.75rem; height:.75rem;color:#fff;font-size.2rem;text-indent:.3rem;letter-spacing:1px; vertical-align:middle;';
			for(var i=0; i<7; i++){
				liStr+='<li style="background:'+backUrl+' no-repeat;'+liStyle+'">'
					  +'	<span style="font-size:.4rem;vertical-align:middle;">¥20</span>'
					  +'	<label style="vertical-align:middle;margin-left:2px;">商品券</label>'
					  +'</li>';
			}
			liStr+='</ul>';
		};
		$('.afterQuanState>.panelContain').html(liStr);
	}
	appQuan.ifAppGetQuan(data);
});