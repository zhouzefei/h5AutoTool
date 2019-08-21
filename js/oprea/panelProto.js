'use strict';
function panelProto(){
	$('.addPanelType').click(function(e){
		e.stopPropagation();
		var panel=new NewCompon();
		panel.addPanel();
	});
	$(".widInput").on('keyup',function(){
		var wid_val = $(this).val();
		if(wid_val == '100%') {
			!__this.hasClass('panel_wid100') && __this.addClass('panel_wid100');
		}else{
			__this.removeClass('panel_wid100');
		}
		__this.width(uniChange(wid_val));
	}).on('blur',function(){
		__this.trigger('click');
	});
	$(".heiInput").on('keyup',function(){
		__this.height(uniChange($(this).val()));
	}).on('blur',function(){
		__this.trigger('click');
	});
	BaseOpera('#panelPicker').ColorProto('btnBg');
	BaseOpera('.slipanelSliderder').SliderProto('','backgroundColor');
}
function uniChange(val){
	var temp=val;
	if(!isNaN(temp)){
		temp=temp/100+'rem';
	}else if(temp.indexOf('px')>-1){
		temp=temp.split('px')[0]/100+'rem';
	}
	return temp;
}