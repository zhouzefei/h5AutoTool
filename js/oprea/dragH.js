//拖拽
var Drag=function($ele){
	this.ele=$ele;
};
Drag.prototype={
	'moved':function(self,e){
		domhistory.pushData("drag",{'ele':__this,'styleObj':__this.attr('style')});
	    var offset = $(self).position();
	    self.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
	    $.extend(document, {'move': true, 'move_target': self});
	},
	'clicked':function(self,eleType){
		$(".btn-group").removeClass('open');
		$('#'+$(self).data('role')).show().siblings('section').hide();
		if(__this.hasClass('dragImg')){
			$('#'+$(self).data('role')).find('.img').attr('src',__this.find('img').attr('src'))
		};
		$('.proxy').hide();
		$(self).children('.proxy').show();
		layer();
		if(eleType=='txt'){
			$(".textKeyIn").val($.trim(__this.find('.txtShuru').html()));
		}else if(eleType=='button'){
			$(".btnKeyIn").val($.trim(__this.find('.btnOpera').html()));
		}
		var wWid=__this.width();
		var wHei=__this.height();
		$(self).children('.borderLeft,.borderRight').css('height',wHei+'px');
		$(self).children('.borderTop,.borderBottom').css('width',wWid+'px');
		__this.attr('isCount','true');
	},
	'coorMove':function($this,e,eleType){
		var posix = {
            'w': $this.width()*0.65, 
            'h': $this.height()*0.65, 
            'x': e.pageX, 
            'y': e.pageY
        };
        domhistory.pushData("drag",{'ele':__this,'styleObj':__this.attr('style')});	
	    $.extend(document, {'move': true, 'call_down': function(e) {
	    	var wid=(e.pageX - posix.x) + posix.w;
	    	var hei=(e.pageY - posix.y) + posix.h;
	    	if(eleType=='txt'){
	    		wid=(e.pageX - posix.x) + posix.w;
				$this.css({
		            'width': Math.max(10, wid)/0.65/100+'rem',
		        });
	    	}else{
	    		if(eleType=='img'){
		    		var temp=posix.w/((e.pageX - posix.x) + posix.w);
		    		wid=(e.pageX - posix.x) + posix.w;
		    		hei=posix.h/temp;
		    	}else{
		    		wid=(e.pageX - posix.x) + posix.w;
		    		hei=(e.pageY - posix.y) + posix.h;
		    	}
		    	$this.css({
		            'width': Math.max(10, wid)/0.65+'px',
		            'height': Math.max(10, hei)/0.65+'px'
		        });
		    }
	    	$this.children('.borderTop,.borderBottom').css('width',Math.max(10, wid)/0.65+'px');
	        $this.children('.borderLeft,.borderRight').css('height',Math.max(10, hei)/0.65+'px');
	    }});
	}
};
$(document).mousemove(function(e) {
	e.stopPropagation();
	if (!!this.move) {
		var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
			callback = document.call_down || function() {
				$(this.move_target).css({
					'top':(e.pageY - posix.y)/0.65+'px',
					'left': (e.pageX - posix.x)/0.65+'px'
				}).attr('isCount','true');
			};
		callback.call(this, e, posix);
	}
}).mouseup(function(e) {
	e.stopPropagation();
	if (!!this.move) {
		var callback = document.call_up || function(){};
		callback.call(this, e);
		$.extend(this, {
			'move': false,
			'move_target': null,
			'call_down': false,
			'call_up': false
		});
		__this.removeClass('panel_wid100 panel_btm0');
	}
});
function drag($ele,eleType,ifClicked){
	var objDrag=new Drag($ele);
	var $box = $ele.mousedown(function(e) {
		e.stopPropagation();
		objDrag.moved(this,e);
	}).on('click',function(e){
		e.stopPropagation();
		__this=$(this);
		objDrag.clicked(this,eleType);
	}).on('mousedown', '.coor', function(e) {
		e.stopPropagation();
	    var $this=$(this).parent();
	    objDrag.coorMove($this,e,eleType);
	    return false;
	}).on('click','.coor',function(e){
		e.stopPropagation();
	}).on('click','.mouseup',function(e){
		e.stopPropagation();
	});
};

