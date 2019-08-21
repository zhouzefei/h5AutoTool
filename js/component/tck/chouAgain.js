function goodsDialog() {
  var strLabel='';
  strLabel= '<div class="panelProto panelWrap goodsDialogWrap dialog" data-text="实物弹出框" data-role="panelProto" style="position: absolute; height: 100%; z-index: 0; width: 6.4rem; font-size: 0.2rem; text-align: left; top: 0rem; left: 0rem; word-wrap: break-word; line-height: normal; cursor: move; background-size: 100% 100%;">'
			+'	<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgba(0, 0, 0, 0.639216);">'
			+'		<div class="panelProto panelWrap panelChild warpprize goodsDialog" data-role="panelProto" style="position: absolute; height: 6.16rem; z-index: 0; width: 5.43231rem; font-size: 0.2rem; text-align: left; top: 1.2922rem; left: 0.485rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px; background-size: 100% 100%;">'
			+'			<div class="panelContain" style="height: 100%; width: 100%; position: relative; border-radius: 0.18rem; background-color: rgb(255, 255, 255);">'
			+'				<div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 2.98462rem; height: 1.28978rem; cursor: move; text-align: center; top: -0.266166rem; left: 1.35067rem; line-height: normal;">'
			+'					<img src="images/pres/over.png" style="height: 100%; width: 100%;">'
			+'					<span class="objBorder borderLeft proxy" style="display: none; height: 129px;"></span>'
			+'					<span class="objBorder borderRight proxy" style="display: none; height: 129px;"></span>'
			+'					<span class="objBorder borderTop proxy" style="display: none; width: 299px;"></span>'
			+'					<span class="objBorder borderBottom proxy" style="display: none; width: 299px;"></span>'
			+'					<span class="coor coorBottomRight proxy" style="display: none;"></span>'
			+'				</div>'
			+'				<div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 2.41692rem; height: 2.40741rem; cursor: move; text-align: center; top: 1.22573rem; left: 1.61203rem; line-height: normal;">'
			+'					<img src="images/pres/coupons.png" style="height: 100%; width: 100%;">'
			+'					<span class="objBorder borderLeft proxy" style="display: block; height: 240px;"></span>'
			+'					<span class="objBorder borderRight proxy" style="display: block; height: 240px;"></span>'
			+'					<span class="objBorder borderTop proxy" style="display: block; width: 242px;"></span>'
			+'					<span class="objBorder borderBottom proxy" style="display: block; width: 242px;"></span>'
			+'					<span class="coor coorBottomRight proxy" style="display: block;"></span>'
			+'				</div>'
			+'				<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.26rem; height: auto; width: 3.5rem; text-align: center; top: 3.93357rem; left: 0.965rem; max-width: 95%; word-wrap: break-word; cursor: move; margin-left: 0px; color: rgb(255, 69, 36);">'
			+'					<div class="txtShuru goodsTxtDescribe" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;">'
			+'						恭喜您抽中3元现金券'
			+'					</div>'
			+'					<span class="coor proxy coorRightCenter" style="display: none;"></span>'
			+'					<span class="objBorder borderLeft proxy" style="display: none; height: 35px;"></span>'
			+'					<span class="objBorder borderRight proxy" style="display: none; height: 35px;"></span>'
			+'					<span class="objBorder borderTop proxy" style="display: none; width: 350px;"></span>'
			+'					<span class="objBorder borderBottom proxy" style="display: none; width: 350px;"></span>'
			+'				</div>'
			+'				<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.22rem; height: auto; width: 5.37538rem; text-align: center; top: 4.30252rem; left: 0.13rem; max-width: 95%; word-wrap: break-word; cursor: move; margin-left: 0px;">'
			+'					<div class="txtShuru goodsTxtWarn" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;">'
			+'						(温馨提示:2015.12.21~2016.1.3使用更优惠哦!)'
			+'					</div>'
			+'					<span class="coor proxy coorRightCenter" style="display: none;"></span>'
			+'					<span class="objBorder borderLeft proxy" style="display: none; height: 30px;"></span>'
			+'					<span class="objBorder borderRight proxy" style="display: none; height: 30px;"></span>'
			+'					<span class="objBorder borderTop proxy" style="display: none; width: 516px;"></span>'
			+'					<span class="objBorder borderBottom proxy" style="display: none; width: 516px;"></span>'
			+'				</div>'
			+'				<div class="buttonProto box panelChild" data-role="buttonProto" style="z-index: 0; position: absolute; width: 2.9rem; height: 0.615385rem; cursor: move; text-align: center; top: 5.01031rem; left: 1.41188rem; line-height: normal;">'
			+'					<input type="button" value="立即分享" class="btnOpera goodsDialogShare" style="font-family:Microsoft YaHei; height: 100%; width: 100%; font-size: 0.26rem; cursor: move; color: rgb(252, 13, 13); background-image: url(file:///D:/shopSale%20-%20%E5%89%AF%E6%9C%AC/sale/h5Tool/images/pres/botton-on.png); background-color: transparent; background-size: 100% 100%;">'
			+'					<span class="objBorder borderLeft proxy" style="display: none; height: 62px;"></span>'
			+'					<span class="objBorder borderRight proxy" style="display: none; height: 62px;"></span>'
			+'					<span class="objBorder borderTop proxy" style="display: none; width: 290px;"></span>'
			+'					<span class="objBorder borderBottom proxy" style="display: none; width: 290px;"></span>'
			+'					<span class="coor coorBottomRight proxy" style="display: none;"></span>'
			+'				</div>'
			+'				<div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 0.692308rem; height: 0.682418rem; cursor: move; text-align: center; top: -0.174026rem; left: 4.88922rem; line-height: normal;">'
			+'					<img src="images/pres/close.png" class="closeGoods" style="height: 100%; width: 100%;">'
			+'					<span class="objBorder borderLeft proxy" style="display: none; height: 68px;"></span>'
			+'					<span class="objBorder borderRight proxy" style="display: none; height: 68px;"></span>'
			+'					<span class="objBorder borderTop proxy" style="display: none; width: 69px;"></span>'
			+'					<span class="objBorder borderBottom proxy" style="display: none; width: 69px;"></span>'
			+'					<span class="coor coorBottomRight proxy" style="display: none;"></span>'
			+'				</div>'
			+'			</div>'
			+'			<span class="objBorder borderLeft proxy" style="display: none; height: 616px;"></span>'
			+'			<span class="objBorder borderRight proxy" style="display: none; height: 616px;"></span>'
			+'			<span class="objBorder borderTop proxy" style="display: none; width: 543px;"></span>'
			+'			<span class="objBorder borderBottom proxy" style="display: none; width: 543px;"></span>'
			+'			<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
			+'		</div>'
			+'	</div>'
			+'	<span class="objBorder borderLeft proxy" style="display: none; height: 1008px;"></span>'
			+'	<span class="objBorder borderRight proxy" style="display: none; height: 1008px;"></span>'
			+'	<span class="objBorder borderTop proxy" style="display: none; width: 640px;"></span>'
			+'	<span class="objBorder borderBottom proxy" style="display: none; width: 640px;"></span>'
			+'	<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
			+'</div>';

	var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.goodsDialogWrap .dragImg'),'bg',true);
	drag($('.goodsDialogWrap .txtProto'),'txt',true);
	drag($('.goodsDialogWrap .buttonProto'),'bg',true);
	drag($('.goodsDialogWrap .panelProto'),'bg',true);
	drag($('.goodsDialogWrap .goodsDialog'),'bg',true);
	$('.goodsDialogWrap .box').trigger('click');
	$('.goodsDialogWrap .goodsDialog').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('goodsDialogWrap').RightProto();
	domhistory.pushData("new",__this);
}