function appLogin () {
	var strLabel='';
	strLabel=   '<div class="panelProto panelWrap appLoginWrap dialog" data-text="app登录框" data-role="panelProto" style="position: absolute; height: 100%; z-index: 99; width: 6.4rem; font-size: 0.2rem; text-align: left; top: 0; left: 0; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px; background-size: 100% 100%;">'
				+'	<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgba(0, 0, 0, 0.85098);">'
				+'		<div class="panelProto panelWrap warpprize LoginDialog panelChild" data-role="panelProto" style="position: absolute; height: 3.28231rem; z-index: 0; width: 5.06rem; font-size: 0.2rem; text-align: left; top: 2.58422rem; left: 0.799531rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px; background-size: 100% 100%;">'
	 			+'			<div class="panelContain" style="height: 100%; width: 100%; position: relative; border-radius: 0.29rem; background-color: rgb(255, 255, 255);">';
	
	var child1= '				<div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 2.96923rem; height: 1.28313rem; cursor: move; text-align: center; top: -0.172656rem; left: 1.06078rem; line-height: normal; margin-left: 0px;">'
				+'					<img src="images/pres/over.png" style="height: 100%; width: 100%;">'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 128px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 128px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 297px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 297px;"></span>'
				+'					<span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+'				</div>';

	var child2= '				<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.24rem; height: auto; width: 3.5rem; text-align: center; top: 1.31766rem; left: 0.827344rem; max-width: 95%; word-wrap: break-word; cursor: move; line-height: 1.5;">'
				+'					<div class="txtShuru" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;">还没有登录哟<br>只有用户登录才有机会</div>'
				+'					<span class="coor proxy coorRightCenter" style="display: none;"></span>'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 72px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 72px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 350px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 350px;"></span>'
				+'				</div>';

	var child3= '				<div class="buttonProto box panelChild" data-role="buttonProto" style="z-index: 0; position: absolute; width: 2.66308rem; height: 0.615385rem; cursor: move; text-align: center; top: 2.33313rem; left: 1.25813rem; line-height: normal;">'
				+'					<input type="button" value="去APP登录" class="btnOpera appLoginGo" style="font-family: Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; color: rgb(255, 255, 255); background-image: url(images/pres/botton-on1.png); background-color: transparent; background-size: 100% 100%;">'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 62px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 62px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 266px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 266px;"></span>'
				+'					<span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+'				</div>';

	var child4= '				<div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 0.615385rem; height: 0.615385rem; cursor: move; text-align: center; top: -0.143125rem; left: 4.56591rem; line-height: normal;">'
				+'					<img src="images/pres/close.png" class="closeAppLogin" style="height: 100%; width: 100%;">'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 61px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 61px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 61px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 61px;"></span>'
				+'					<span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+'				</div>';
			
	strLabel+=child1+child2+child3+child4;

	strLabel   +='			</div>'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 329px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 329px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 506px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 506px;"></span>'
				+'			<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
				+'		</div>';
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
	drag($('.appLoginWrap .dragImg'),'bg',true);
	drag($('.appLoginWrap .txtProto'),'txt',true);
	drag($('.appLoginWrap .panelProto'),'bg',true);
	drag($('.appLoginWrap .buttonProto'),'bg',true);
	drag($('.appLoginWrap .LoginDialog'),'bg',true);
	$('.appLoginWrap .box').trigger('click');
	$('.appLoginWrap .LoginDialog').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('appLoginWrap').RightProto();
	domhistory.pushData("new",__this);
}
		