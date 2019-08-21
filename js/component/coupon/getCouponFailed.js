function getCouponFailed(){
	var strLabel='';
	strLabel=   '<div class="panelProto panelWrap getCouponFailedWrap dialog" data-text="短信验证码" data-role="panelProto" style="position: absolute; height: 100%; z-index: 99; width: 6.4rem; font-size: 0.2rem; text-align: left; top: 0; left: 0; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px; background-size: 100% 100%;">'
				+'	<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgba(0, 0, 0, 0.85098);">'
				+'		<div class="panelProto panelWrap warpprize getCouponFailed panelChild" data-role="panelProto" style="position: absolute; height: 2rem; z-index: 0; width: 5.6rem; font-size: 0.2rem; text-align: left; top: 3.3rem; left: 0.4rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px; background-size: 100% 100%;">'
	 			+'			<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgb(255, 255, 255);">'
				+'				<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.24rem; height: auto; width: 5.2rem; top: 0.8rem; left: 0.3rem; max-width: 95%; word-wrap: break-word; cursor: move; line-height: 1.5;">'
				+'					<div class="txtShuru" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;text-align:center;">很遗憾，券发完了，下次早点来~</div>'
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
				+'		<div class="panelProto panelWrap warpprize getCouponFailed panelChild" data-role="panelProto" style="position: absolute; height: 0.6rem; z-index: 0; width: 5rem; font-size: 0.2rem; text-align: left; top: 4.1rem; left: 0.72rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px; background-size: 100% 100%;">'
				+'			<div class="buttonProto box panelChild" data-role="buttonProto" style="z-index: 0; position: absolute; width: 5.6rem; height: 0.615385rem; cursor: move; text-align: center; top: 1.16rem; left: -0.32rem; line-height: normal;">'
				+'				<input type="button" value="确定" class="btnOpera verifyOkBtn" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; color: rgb(0, 0, 0); background: #ff3044; color:#fff;">'
				+'				<span class="coor proxy coorRightCenter" style="display: none;"></span>'
				+'				<span class="objBorder borderLeft proxy" style="display: none; height: 30px;"></span>'
				+'				<span class="objBorder borderRight proxy" style="display: none; height: 30px;"></span>'
				+'				<span class="objBorder borderTop proxy" style="display: none; width: 86px;"></span>'
				+'				<span class="objBorder borderBottom proxy" style="display: none; width: 86px;"></span>'
				+'			</div>'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 329px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 329px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 506px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 506px;"></span>'
				+'			<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
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
	drag($('.getCouponFailedWrap .dragImg'),'bg',true);
	drag($('.getCouponFailedWrap .txtProto'),'txt',true);
	drag($('.getCouponFailedWrap .buttonProto'),'bg',true);
	drag($('.getCouponFailedWrap .panelProto'),'bg',true);
	$('.getCouponFailedWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('getCouponFailedWrap').RightProto();
	domhistory.pushData("new",__this);
};