function getCoupon(){
	var strLabel='';
	strLabel=   '<div class="panelProto panelWrap getCouponWrap" data-text="领取优惠券" data-role="panelProto" style="position: absolute; height: 3.2rem; z-index: 0; width: 6.4rem; font-size: 0.2rem; text-align: left; top: 0; left: 0rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px;">'
				+'	<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-image: url(images/pres/top_bg.jpg); background-color: rgba(0, 0, 0, 0); background-size: 100% 100%; background-repeat: no-repeat;">'
				+'		<div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 2.1rem; height: 2.6rem; cursor: move; text-align: center; top: 0.271971rem; left: 2.15rem; line-height: normal;">'
				+'			<img src="images/pres/red_bg.png" class="myGiftList" style="height: 100%; width: 100%;">'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 46px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 46px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 141px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 141px;"></span>'
				+'			<span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+'		</div>'
				+'		<div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 2.1rem; height: 0.5rem; cursor: move; text-align: center; top: 5.4rem; left: 2.15rem; line-height: normal;">'
				+'			<img src="images/pres/rule.png" class="myGiftList" style="height: 100%; width: 100%;">'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 46px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 46px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 141px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 141px;"></span>'
				+'			<span class="coor coorBottomRight proxy" style="display: none;"></span>'
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
	drag($('.getCouponWrap .dragImg'),'bg',true);
	drag($('.getCouponWrap .txtProto'),'txt',true);
	drag($('.getCouponWrap .buttonProto'),'bg',true);
	drag($('.getCouponWrap .panelProto'),'bg',true);
	$('.getCouponWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('getCouponWrap').RightProto();
	domhistory.pushData("new",__this);
};

