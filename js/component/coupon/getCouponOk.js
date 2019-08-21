function getCouponOk(){
	var strLabel='';
	strLabel=   '<div class="panelProto panelWrap getCouponOkWrap dialog" data-text="领取成功" data-role="panelProto" style="position: absolute; height: 100%; z-index: 99; width: 6.4rem; font-size: 0.2rem; text-align: left; top: 0; left: 0; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px; background-size: 100% 100%;">'
				+'		<div class="panelProto panelWrap warpprize getCouponOk panelChild" data-role="panelProto" style="position: absolute; height: 3.28231rem; z-index: 0; width: 5.6rem; font-size: 0.2rem; text-align: left; top: 3.38422rem; left: 0.4rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px; background-size: 100% 100%;">'
	 			+'			<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgb(255, 255, 255);">'
				+'				<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.24rem; height: auto; width: 5.6rem; top: 1rem; left: 0; max-width: 95%; word-wrap: break-word; cursor: move; line-height: 1.5;text-align:center;">'
				+'					<div class="txtShuru" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;">代金券已放至账户 <em id="codeVerifyPhone" style="color:#ff3044;font-style:normal;">15898782231</em></div>'
				+'					<span class="coor proxy coorRightCenter" style="display: none;"></span>'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 72px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 72px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 350px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 350px;"></span>'
				+'				</div>'
				+'				<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.2rem; height: auto; width: 5.6rem; top: 1.4rem; left: 0; max-width: 95%; word-wrap: break-word; cursor: move; line-height: 1.5;text-align:center;">'
				+'					<div class="txtShuru" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;">登录APP即可使用</div>'
				+'					<span class="coor proxy coorRightCenter" style="display: none;"></span>'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 72px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 72px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 350px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 350px;"></span>'
				+'				</div>'
				+'				<div class="buttonProto box panelChild" data-role="buttonProto" style="z-index: 0; position: absolute; width: 5.4rem; height: 0.615385rem; cursor: move; text-align: center; top: 2rem; left: 0.1rem; line-height: normal;">'
				+'					<input type="button" value="下载汽车超人客户端" class="btnOpera appLoginGo" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; color: #fff; border-radius: 0.1rem; background: #ff3044;">'
				+'					<span class="coor proxy coorRightCenter" style="display: none;"></span>'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 30px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 30px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 86px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 86px;"></span>'
				+'				</div>'							
				+'			</div>'
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
	drag($('.getCouponOkWrap .dragImg'),'bg',true);
	drag($('.getCouponOkWrap .txtProto'),'txt',true);
	drag($('.getCouponOkWrap .buttonProto'),'bg',true);
	drag($('.getCouponOkWrap .panelProto'),'bg',true);
	$('.getCouponOkWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('getCouponOkWrap').RightProto();
	domhistory.pushData("new",__this);
};

