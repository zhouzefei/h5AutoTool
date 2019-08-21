function dataScroll(){
	var strLabel='';
	strLabel=   '<div class="panelProto panelWrap dataScrollWrap" data-text="数据滚动" data-role="panelProto" style="position: absolute; height: 3.2rem; z-index: 0; width: 6.4rem; font-size: 0.2rem; text-align: left; top: 1.2rem; left: 0rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px;">'
				+'	<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-image: url(file:///D:/shopSale%20-%20%E5%89%AF%E6%9C%AC/sale/h5Tool/images/pres/fotter_02.png); background-color: rgba(0, 0, 0, 0); background-size: 100% 100%; background-repeat: no-repeat;">'
				+'		<div class="dragImg box panelChild" data-role="imgProto" style="z-index: 0; position: absolute; width: 1.40615rem; height: 0.460637rem; cursor: move; text-align: center; top: 0.271971rem; left: 0.0890625rem; line-height: normal;">'
				+'			<img src="images/pres/buttonjl.png" class="myGiftList" style="height: 100%; width: 100%;">'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 46px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 46px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 141px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 141px;"></span>'
				+'			<span class="coor coorBottomRight proxy" style="display: none;"></span>'
				+'		</div>'
				+'		<div class="panelProto panelWrap panelChild" data-role="panelProto" style="position: absolute; height: 0.33rem; z-index: 0; width: 2.41077rem; font-size: 0.2rem; text-align: left; top: 0.322969rem; left: 1.995rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px;">'
				+'			<div class="panelContain" style="height: 100%; width: 100%; position: relative; background-color: rgba(0, 0, 0, 0); background-size: 100% 100%; background-repeat: no-repeat;">'
				+'				<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.22rem; height: auto; width: 0.853846rem; text-align: left; top: 0.0414663rem; left: 0.18149rem; max-width: 95%; word-wrap: break-word; cursor: move; color: rgb(255, 255, 255);">'
				+'					<div class="txtShuru" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;">您还有</div>'
				+'					<span class="coor proxy coorRightCenter" style="display: none;"></span>'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 30px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 30px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 86px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 86px;"></span>'
				+'				</div>'
				+'				<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.26rem; height: auto; width: 0.396154rem; text-align: center; top: 0.025769rem; left: 1.02696rem; max-width: 95%; word-wrap: break-word; cursor: move; color: rgb(255, 255, 255); line-height: 1.35;">'
				+'					<div class="txtShuru timesCount" style="height: 100%; min-height: 0.3rem; width: 100%; border-radius: 0.17rem; background-color: rgb(255, 157, 10);">0</div>'
				+'					<span class="coor proxy coorRightCenter" style="display: none;"></span>'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 35px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 35px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 39px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 39px;"></span>'
				+'				</div>'
				+'				<div class="box txtProto panelChild" data-role="txtProto" style="position: absolute; min-height: 0.3rem; z-index: 0; font-size: 0.22rem; height: auto; width: 0.884615rem; text-align: left; top: 0.0409494rem; left: 1.55023rem; max-width: 95%; word-wrap: break-word; cursor: move; color: rgb(255, 255, 255);">'
				+'					<div class="txtShuru" style="height: 100%; min-height: 0.3rem; width: 100%; background-color: transparent;">次机会</div>'
				+'					<span class="coor proxy coorRightCenter" style="display: none;"></span>'
				+'					<span class="objBorder borderLeft proxy" style="display: none; height: 30px;"></span>'
				+'					<span class="objBorder borderRight proxy" style="display: none; height: 30px;"></span>'
				+'					<span class="objBorder borderTop proxy" style="display: none; width: 88px;"></span>'
				+'					<span class="objBorder borderBottom proxy" style="display: none; width: 88px;"></span>'
				+'				</div>'
				+'			</div>'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 33px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 33px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 241px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 241px;"></span>'
				+'			<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
				+'		</div>'
				+'		<div class="panelProto panelWrap panelChild" data-role="panelProto" style="position: absolute; height: 1.44769rem; z-index: 0; width: 5.44538rem; font-size: 0.2rem; text-align: left; top: 1.3537rem; left: 0.48rem; word-wrap: break-word; line-height: normal; cursor: move; margin-left: 0px;">'
				+'			<div class="panelContain dataScrollContent" style="overflow:hidden;height:100%;width:100%;background-size:100% 100%;background-repeat:no-repeat;background-color:none; position:relative;"><table style="width:100%;height:100%;"></table></div>'
				+'			<span class="objBorder borderLeft proxy" style="display: none; height: 145px;"></span>'
				+'			<span class="objBorder borderRight proxy" style="display: none; height: 145px;"></span>'
				+'			<span class="objBorder borderTop proxy" style="display: none; width: 545px;"></span>'
				+'			<span class="objBorder borderBottom proxy" style="display: none; width: 545px;"></span>'
				+'			<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
				+'		</div>'
				+'	</div>'
				+'	<span class="objBorder borderLeft proxy" style="display: none; height: 320px;"></span>'
				+'	<span class="objBorder borderRight proxy" style="display: none; height: 320px;"></span>'
				+'	<span class="objBorder borderTop proxy" style="display: none; width: 640px;"></span>'
				+'	<span class="objBorder borderBottom proxy" style="display: none; width: 640px;"></span>'
				+'	<span class="coor coorBottomRight  proxy" style="display: none;"></span>'
				+'</div>';
	var $label = $(strLabel);
	BaseOpera.AddDom($label);
	//事件绑定
	drag($('.dataScrollWrap .dragImg'),'bg',true);
	drag($('.dataScrollWrap .txtProto'),'txt',true);
	drag($('.dataScrollWrap .buttonProto'),'bg',true);
	drag($('.dataScrollWrap .panelProto'),'bg',true);
	$('.dataScrollWrap .box').trigger('click');
	$label.trigger('click');
	drag($label,'bg',false);
	BaseOpera('dataScrollWrap').RightProto();
	domhistory.pushData("new",__this);
};

