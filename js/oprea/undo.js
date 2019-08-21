var domhistory={
	data:[],
	removeDom:function(dom,data){
		dom.remove();
	},
	unDrag:function(dom,data){
		dom.attr('style',data);
	},
	undoRemove:function(dom,parentObj){
		parentObj.append(dom);
		dom.trigger('click');
		BaseOpera('box').RightProto();
		drag(dom,'bg',false);
	},
	undo:function(){
		var pre=domhistory.data.pop();
		if(pre.opp=="new"){
			domhistory.removeDom(pre.data);
		}else if(pre.opp=="drag"){
			domhistory.unDrag(pre.data.ele,pre.data.styleObj);
		}else if(pre.opp=='undoRemove'){
			domhistory.undoRemove(pre.data.obj,pre.data.parentObj);

		}
	},		
	pushData:function(opp,data){
		domhistory.data.push({opp:opp,data:data});
	}
};
$('body').on('keydown',function(event){
	if (event.ctrlKey == true && event.keyCode == 90) {
        event.returnvalue = false;
        domhistory.undo();
    }
})