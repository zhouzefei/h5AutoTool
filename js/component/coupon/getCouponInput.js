function getCouponInput(){
	var strLabel='';
	strLabel=   '<div class="panelProto panelWrap getCouponInputWrap dialog" data-text="输入手机号" data-role="panelProto" style="position: absolute; height: 100%; z-index: 99; width: 6.4rem; font-size: 0.2rem; text-align: left; top: 0; left: 0; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px; background-size: 100% 100%;">'
				+'		<div class="panelProto panelWrap warpprize getCouponInput panelChild" data-role="panelProto" style="position: absolute; height: 3.28231rem; z-index: 0; width: 5.6rem; font-size: 0.2rem; text-align: left; top: 2.58422rem; left: 0.4rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px; background-size: 100% 100%;">'
	 			+'			<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgb(255, 255, 255);">'
				+'				<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.24rem; height: auto; width: 5.2rem; top: 1.8rem; left: 0; max-width: 95%; word-wrap: break-word; cursor: move; line-height: 1.5;">'
				+'					<div class="txtShuru" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;">汽车超人给你发年终红包啦</div>'
				+'					<span class="coor proxy coorRightCenter" style="display: none;"></span>'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 72px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 72px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 350px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 350px;"></span>'
				+'				</div>'
				+'			</div>'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 329px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 329px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 506px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 506px;"></span>'
				+'			<span class="coor coorBottomRight  proxy" style="display: none;"></span>'				
				+'		</div>'
				+'		<div class="panelProto panelWrap warpprize getCouponInput panelChild" data-role="panelProto" style="position: absolute; height: 0.6rem; z-index: 0; width: 5.4rem; font-size: 0.2rem; text-align: left; top: 5rem; left: 0.4rem; word-wrap: break-word; line-height: normal; cursor: move;">'
				+'			<input type="text" placeholder="请输入手机号" id="code_input" style="font-size:0.2rem;height:0.45rem;border:1px solid #ccc;width:5.3rem;border-radius: 0.1rem;padding-left:0.1rem;">'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 329px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 329px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 506px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 506px;"></span>'
				+'			<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
			    +'		</div>'
				+'	<span class="objBorder borderLeft proxy" style="display: block; height: 1008px;"></span>'
				+'	<span class="objBorder borderRight proxy" style="display: block; height: 1008px;"></span>'
				+'	<span class="objBorder borderTop proxy" style="display: block; width: 640px;"></span>'
				+'	<span class="objBorder borderBottom proxy" style="display: block; width: 640px;"></span>'
				+'	<span class="coor coorBottomRight  proxy" style="display: block;"></span>'
				+'</div>';
	var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.getCouponInputWrap .dragImg'),'bg',true);
	drag($('.getCouponInputWrap .txtProto'),'txt',true);
	drag($('.getCouponInputWrap .buttonProto'),'bg',true);
	drag($('.getCouponInputWrap .panelProto'),'bg',true);
	$('.getCouponInputWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('getCouponInputWrap').RightProto();
	domhistory.pushData("new",__this);
};

