function getCouponState(){
	var strLabel='';
	strLabel=   '<div class="panelProto panelWrap getCouponStateWrap" data-text="领取优惠券状态" data-role="panelProto" style="position: absolute; height: 6.4rem; z-index: 0; width: 6.4rem; font-size: 0.2rem; text-align: left; top: 0; left: 0rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px;">'
				+'	<div class="panelContain" style="height: 100%; width: 100%; position: relative; ">'
				+'		<div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 6.4rem; height: 6.4rem; cursor: move; text-align: center; top: 0; left: 0; line-height: normal;">'
				+'			<img src="images/pres/shuru.png" class="myGiftList" style="height: 100%; width: 100%;">'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 46px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 46px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 141px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 141px;"></span>'
				+'			<span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+'		</div>'	
				+'		<div class="buttonProto box panelChild" data-role="buttonProto" style="z-index: 0; position: absolute; width: 5.4rem; height: 0.615385rem; cursor: move; text-align: center; top: 6.8rem; left: 0.5rem; line-height: normal;">'
				+'			<input type="button" value="已领取" class="btnOpera appLoginGo" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; color: rgb(255, 255, 255); background: #999;border-radius:0.1rem;">'
				+'			<span class="coor proxy coorRightCenter" style="display: none;"></span>'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 30px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 30px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 86px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 86px;"></span>'
				+'		</div>'
				+'	</div>'
				+'	<span class="objBorder borderLeft proxy" style="display: block; height: 1008px;"></span>'
				+'	<span class="objBorder borderRight proxy" style="display: block; height: 1008px;"></span>'
				+'	<span class="objBorder borderTop proxy" style="display: block; width: 640px;"></span>'
				+'	<span class="objBorder borderBottom proxy" style="display: block; width: 640px;"></span>'
				+'	<span class="coor coorBottomRight  proxy" style="display: block;"></span>'
				+'</div>';
	var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.getCouponStateWrap .dragImg'),'bg',true);
	drag($('.getCouponStateWrap .txtProto'),'txt',true);
	drag($('.getCouponStateWrap .buttonProto'),'bg',true);
	drag($('.getCouponStateWrap .panelProto'),'bg',true);
	$('.getCouponStateWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('getCouponStateWrap').RightProto();
	domhistory.pushData("new",__this);
};

