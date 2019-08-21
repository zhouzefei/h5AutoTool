function getCouponBtn(){
	var strLabel='';
	strLabel='<div class="panelProto panelWrap appCouponBtnWrap panel_wid100 " data-text="app领取优惠券按钮" data-role="panelProto" style="position: absolute; height: 204.462px; z-index: 0; width: 100%; font-size: 0.2rem; text-align: left; top: 0px; left: 0px; word-wrap: break-word; line-height: normal; cursor: move;" iscount="true">'
			+'	<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgb(144, 211, 86); background-size: 100% 100%; background-repeat: no-repeat;">'
			+'		<div class="buttonProto box panelChild" data-role="buttonProto" style="z-index: 0; position: absolute; width: 530.385px; height: 63px; cursor: move; text-align: center; top: 64px; left: 59.5px; line-height: normal; margin-left: 0px;" iscount="true">'			
			+'			<div class="btnOpera getBigGift" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; line-height: 2.5; color: rgb(255, 255, 255); border-radius: 0.17rem; background-color: rgb(245, 17, 17); background-size: 100% 100%;">'			
			+'						领取大礼包'			
			+'			</div>'			
			+'			<span class="objBorder borderLeft proxy" style="height: 63px; display: none;"></span>'			
			+'			<span class="objBorder borderRight proxy" style="height: 63px; display: none;"></span>	'		
			+'			<span class="objBorder borderTop proxy" style="width: 530px; display: none;"></span>'			
			+'			<span class="objBorder borderBottom proxy" style="width: 530px; display: none;"></span>	'		
			+'			<span class="coor coorBottomRight proxy" style="display: none;"></span>	'	
			+'		</div>		'
			+'		<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.26rem; height: auto; width: auto; text-align: left; top: 16px; left: 63.0613px; max-width: 100%; word-wrap: break-word; cursor: move;" iscount="true">'			
			+'			<div class="txtShuru callbackState" style="height:100%;min-height:0.3rem;width:100%;background-color: transparent; color:#999"></div>'				
			+'			<span class="coor proxy coorRightCenter" style="display: none;"></span>'			
			+'			<span class="objBorder borderLeft proxy" style="height: 30px; display: none;"></span>'			
			+'			<span class="objBorder borderRight proxy" style="height: 30px; display: none;"></span>'			
			+'			<span class="objBorder borderTop proxy" style="width: 0px; display: none;"></span>'			
			+'			<span class="objBorder borderBottom proxy" style="width: 0px; display: none;"></span>'		
			+'		</div>'	
			+'		<div class="buttonProto box shareBtnWrap clone panelChild" data-role="buttonProto" data-text="分享" style="z-index: 0; position: absolute; width: 253.846px; height: 58.4615px; cursor: move; text-align: center; top: 139px; left: 330.757px; line-height: normal;" iscount="true">'	
			+'			<div class="btnOpera" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; line-height: 2.5; color: rgb(102, 102, 102); border-radius: 0.15rem; background-color: rgb(255, 208, 0); background-size: 100% 100%;">'		
			+'				分享'	
			+'			</div>'	
			+'			<span class="objBorder borderLeft proxy" style="height: 59px; display: none;"></span>'	
			+'			<span class="objBorder borderRight proxy" style="height: 59px; display: none;"></span>'	
			+'			<span class="objBorder borderTop proxy" style="width: 254px; display: none;"></span>'	
			+'			<span class="objBorder borderBottom proxy" style="width: 254px; display: none;"></span>	'
			+'			<span class="coor coorBottomRight proxy" style="display: none;"></span>'
			+'		</div>'
			+'		<div class="buttonProto box myWalletBtnWrap panelChild" data-role="buttonProto" data-text="我的钱包按钮" style="z-index: 0; position: absolute; width: 253.846px; height: 58.4615px; cursor: move; text-align: center; top: 139px; left: 63.0444px; line-height: normal;" iscount="true">'	
			+'			<div class="btnOpera" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; line-height: 2.5; color: rgb(102, 102, 102); border-radius: 0.15rem; background-color: rgb(255, 208, 0); background-size: 100% 100%;">'		
			+'				我的超人钱包'	
			+'			</div>'	
			+'			<span class="objBorder borderLeft proxy" style="height: 59px; display: none;"></span>'	
			+'			<span class="objBorder borderRight proxy" style="height: 59px; display: none;"></span>'	
			+'			<span class="objBorder borderTop proxy" style="width: 254px; display: none;"></span>'	
			+'			<span class="objBorder borderBottom proxy" style="width: 254px; display: none;"></span>	'
			+'			<span class="coor coorBottomRight proxy" style="display: none;"></span>'
			+'		</div>'
			+'	</div>'
			+'  <span class="objBorder borderLeft proxy" style="display: none; height: 204.462px;"></span>'
			+'	<span class="objBorder borderRight proxy" style="display: none; height: 204.462px;"></span>'
			+'	<span class="objBorder borderTop proxy" style="display: none; width: 642px;"></span>'
			+'	<span class="objBorder borderBottom proxy" style="display: none; width: 642px;"></span>'
			+'	<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
			+'</div>';
	var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.appCouponBtnWrap .dragImg'),'bg',true);
	drag($('.appCouponBtnWrap .txtProto'),'txt',true);
	drag($('.appCouponBtnWrap .buttonProto'),'bg',true);
	drag($('.appCouponBtnWrap .panelProto'),'bg',true);
	$('.appCouponBtnWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('appCouponBtnWrap').RightProto();
	domhistory.pushData("new",__this);
};

