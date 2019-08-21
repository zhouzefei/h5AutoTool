function codeVerify(){
	var strLabel='';
	strLabel='<div class="panelProto panelWrap codeVerifyWrap" data-text="短信验证码" data-role="panelProto" style="position: absolute; height: 315.077px; z-index: 0; width: 548.077px; font-size: 0.2rem; text-align: left; top: 275.367px; left: 60.9615px; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px;" iscount="true">'
			+'	<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgb(255, 255, 255); background-size: 100% 100%; background-repeat: no-repeat;">'
			+'		<div class="panelProto panelWrap panelChild" data-role="panelProto" style="position: absolute; height: 63.0769px; z-index: 0; width: 100%; font-size: 0.2rem; text-align: left; top: 258.468px; left: 0px; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px;" iscount="true">'
			+'			<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgba(0, 0, 0, 0); background-size: 100% 100%; background-repeat: no-repeat;">'
			+'				<div class="buttonProto box panelChild" data-role="buttonProto" style="z-index: 0; position: absolute; width: 50%; height: 60px; cursor: move; text-align: center; top: -2px; left: 0.00117375px; line-height: normal;" iscount="true">'
			+'					<div class="btnOpera" style="font-family:Microsoft YaHei; height: 100%; width: 100%; font-size: 0.24rem; cursor: move; line-height: 2.25; color: rgb(255, 255, 255); background-color: rgb(148, 148, 148); background-size: 100% 100%;">'
			+'						取消'
			+'					</div>'
			+'					<span class="objBorder borderLeft proxy" style="display: none; height: 69.5385px;"></span>'
			+'					<span class="objBorder borderRight proxy" style="display: none; height: 69.5385px;"></span>'
			+'					<span class="objBorder borderTop proxy" style="display: none; width: 265.538px;"></span>'
			+'					<span class="objBorder borderBottom proxy" style="display: none; width: 265.538px;"></span>'
			+'					<span class="coor coorBottomRight proxy" style="display: none;"></span>'
			+'				</div>'
			+'				<div class="buttonProto box panelChild" data-role="buttonProto" style="z-index: 0; position: absolute; width: 50%; height: 60px; cursor: move; text-align: center; top: -2px; left: 274px; line-height: normal;" iscount="true">'
			+'					<div class="btnOpera" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.24rem; cursor: move; line-height: 2.25; color: rgb(255, 255, 255); background-color: rgb(255, 36, 36); background-size: 100% 100%;">'
			+'						确定'
			+'					</div>'
			+'					<span class="objBorder borderLeft proxy" style="display: none; height: 70px;"></span>'
			+'					<span class="objBorder borderRight proxy" style="display: none; height: 70px;"></span>'
			+'					<span class="objBorder borderTop proxy" style="display: none; width: 285.538px;"></span>'
			+'					<span class="objBorder borderBottom proxy" style="display: none; width: 285.538px;"></span>'
			+'					<span class="coor coorBottomRight proxy" style="display: none;"></span>'
			+'				</div>'
			+'			</div>'
			+'			<span class="objBorder borderLeft proxy" style="display: none; height: 64px;"></span>'
			+'			<span class="objBorder borderRight proxy" style="display: none; height: 64px;"></span>'
			+'			<span class="objBorder borderTop proxy" style="display: none; width: 515px;"></span>'
			+'			<span class="objBorder borderBottom proxy" style="display: none; width: 515px;"></span>'
			+'			<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
			+'		</div>'
			+'		<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.24rem; height: auto; width: 4.96538rem; text-align: left; top: 27.2969px; left: 25px; max-width: 100%; word-wrap: break-word; cursor: move; margin-left: 0px; line-height: 1.5;" iscount="true">'	
			+'			<div class="txtShuru" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;">'
			+'				请输入短信验证码，以确保您能正常绑定优惠券验证码将发送到手机号：<b>15898483920</b>'
			+'			</div>'	
			+'			<span class="coor proxy coorRightCenter" style="display: none;"></span>	'
			+'			<span class="objBorder borderLeft proxy" style="display: none; height: 72px;"></span>'	
			+'			<span class="objBorder borderRight proxy" style="display: none; height: 72px;"></span>	'
			+'			<span class="objBorder borderTop proxy" style="display: none; width: 497px;"></span>'	
			+'			<span class="objBorder borderBottom proxy" style="display: none; width: 497px;"></span>'
			+'		</div>'
			+'		<div class="panelProto panelWrap panelChild" data-role="panelProto" style="position: absolute; height: 62.0769px; z-index: 0; width: 470.538px; font-size: 0.2rem; text-align: left; top: 140px; left: 30.774px; word-wrap: break-word; line-height: normal; cursor: move;" iscount="true">'
			+'			<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgba(0, 0, 0, 0); background-size: 100% 100%; background-repeat: no-repeat;">'
			+'				<div class="buttonProto box panelChild" data-role="buttonProto" style="z-index: 0; position: absolute; width: 470.077px; height: 59.6923px; cursor: move; text-align: center; top: -0.390625px; left: -1.53846px; line-height: normal;" iscount="true">'
			+'					<input type="tel" placeholder="输入手机号" class="btnOpera" style="font-family: Microsoft YaHei;border:1px solid #ccc; height: 100%; width: 100%; font-size: 0.23rem; text-indent:2px; cursor: move; line-height: 2.25; padding:0;margin:0; border-radius: 0.13rem;background-size: 100% 100%;"/>'
			+'					<span class="objBorder borderLeft proxy" style="display: none; height: 59px;"></span>'
			+'					<span class="objBorder borderRight proxy" style="display: none; height: 59px;"></span>'
			+'					<span class="objBorder borderTop proxy" style="display: none; width: 471px;"></span>'
			+'					<span class="objBorder borderBottom proxy" style="display: none; width: 471px;"></span>'
			+'					<span class="coor coorBottomRight proxy" style="display: none;"></span>'
			+'				</div>'
			+'				<div class="buttonProto box" data-role="buttonProto" style="z-index: 0; position: absolute; width: 180px; height: 61.5385px; cursor: move; text-align: center; top: -0.397808px; left: 291px; line-height: normal;" iscount="true">'
			+'					<div class="btnOpera" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.22rem; cursor: move; line-height: 2.5; border-top-right-radius: 0.13rem;border-bottom-right-radius: 0.13rem; background-color: rgb(135, 132, 132); background-size: 100% 100%;">'
			+'					30秒后重新获取'
			+'					</div>'
			+'					<span class="objBorder borderLeft proxy" style="display: none; height: 61px;"></span>'
			+'					<span class="objBorder borderRight proxy" style="display: none; height: 61px;"></span>'
			+'					<span class="objBorder borderTop proxy" style="display: none; width: 202px;"></span>'
			+'					<span class="objBorder borderBottom proxy" style="display: none; width: 202px;"></span>'
			+'					<span class="coor coorBottomRight proxy" style="display: none;"></span>'
			+'				</div>'
			+'			</div>'
			+'			<span class="objBorder borderLeft proxy" style="display: none; height: 63px;"></span>'
			+'			<span class="objBorder borderRight proxy" style="display: none; height: 63px;"></span>'
			+'			<span class="objBorder borderTop proxy" style="display: none; width: 470px;"></span>'
			+'			<span class="objBorder borderBottom proxy" style="display: none; width: 470px;"></span>'
			+'			<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
			+'		</div>'
			+'	</div>'
			+'	<span class="objBorder borderLeft proxy" style="display: none; height: 315.077px;"></span>'
			+'	<span class="objBorder borderRight proxy" style="display: none; height: 315.077px;"></span>'
			+'	<span class="objBorder borderTop proxy" style="display: none; width: 548.077px;"></span>'
			+'	<span class="objBorder borderBottom proxy" style="display: none; width: 548.077px;"></span>'
			+'	<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
			+'</div>';

	var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.codeVerifyWrap .dragImg'),'bg',true);
	drag($('.codeVerifyWrap .txtProto'),'txt',true);
	drag($('.codeVerifyWrap .buttonProto'),'bg',true);
	drag($('.codeVerifyWrap .panelProto'),'bg',true);
	$('.codeVerifyWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('codeVerifyWrap').RightProto();
	domhistory.pushData("new",__this);
};

