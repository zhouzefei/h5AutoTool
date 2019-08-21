var operaObj={};
$(function(){
	$('.commponent dd').click(function(){
		var componType=$(this).data('type');
		switch(componType){
			case 'zp':zp(); break;
			case 'tck':tck(); break;
			case 'ggl':ggl(); break;
			case 'yzm':yzm(); break;
			case 'appLogin':appLogin(); break;
			case 'goodsDialog':goodsDialog(); break;
			case 'dataScroll':dataScroll(); break;
			case 'arrow':arrow();break;
			case 'getCouponBtn':getCouponBtn(); break;			
			case 'myWalletBtn':myWalletBtn();break;
			case 'shareBtn':shareBtn();break;
			case 'codeVerify':codeVerify();break;
			case 'getCouponState':getCouponState();break;
			case 'getCouponInput':getCouponInput();break;
			case 'getCouponFailed':getCouponFailed();break;
			case 'getCouponOk':getCouponOk();break;
			case 'beforeGetState':beforeGetState();break;
			case 'afterGetState':afterGetState();break;
			case 'getQuanRuler':getQuanRuler();break;
			case 'wxGetBtn':wxTxtBefore();break;
		}
	});
});

$('.eventType').change(function(){
	operaObj.eventType=$(this).val();
});
$('.taskType').change(function(){
	operaObj.taskType=$(this).val();
});
$('.statusType').change(function(){
	operaObj.statusType=$(this).val();
});
$('.assType').change(function(){
	operaObj.assType=$(this).val();
});
$('.confirmBind').click(function(){
	if(operaObj.eventType && operaObj.taskType){
		__this.on(operaObj.eventType,function(){
			var taskDo=operaObj.taskType+'()';
			eval('('+taskDo+')');
		});
	};
});