//拖拽
var dragDetail={};
$(document).mousemove(function(e) {
	e.stopPropagation();
	if (!!this.move) {
		var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
			callback = document.call_down || function() {
				if(document.isChild){
					$(this.move_target).css({
						'top':(e.pageY - posix.y)/0.65/100+'rem',
						'left': (e.pageX - posix.x)/0.65/100+'rem'
					});
				}else{
					dragDetail.top=(e.pageY - posix.y)/0.65;
					dragDetail.left=(e.pageX - posix.x)/0.65;
					$(this.move_target).css({
						'top':(e.pageY - posix.y)/0.65+'px',
						'left': (e.pageX - posix.x)/0.65+'px'
					}).attr('data-prototype',$.trim(JSON.stringify(dragDetail)));
				}

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
	}
});
function drag($ele,eleType,ifClicked){
	var isClick=ifClicked;
	var isChild=false;
	if($ele.hasClass('panelChild')){
		isChild=true;
	}
	var $box = $ele.mousedown(function(e) {
		e.stopPropagation();
	    var offset = $(this).position();
	    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
	    $.extend(document, {'move': true, 'move_target': this,'isChild':isChild});
	}).on('click',function(e){
		e.stopPropagation();
		__this=$(this);
		$(".btn-group").removeClass('open');
		$('#'+$(this).data('role')).show().siblings('section').hide();
		if(__this.hasClass('dragImg')){
			$('#'+$(this).data('role')).find('.img').attr('src',__this.find('img').attr('src'))
		};
		$('.proxy').hide();
		$(this).children('.proxy').show();
		layer();
		if(eleType=='txt'){
			$(".textKeyIn").val($.trim(__this.find('.txtShuru').html()));
		}
		var wWid=__this.width();
		var wHei=__this.height();
		var wTop=__this.position().top;
		var wLeft=__this.position().left;
		$(this).children('.borderLeft,.borderRight').css('height',wHei+'px');
		$(this).children('.borderTop,.borderBottom').css('width',wWid+'px');
		if(!isChild){
			// if(!isClick){
				if(eleType!='txt'){
		    		dragDetail={
						width:wWid,
						height:wHei,
						top:wTop,
						left:wLeft
					};
		    	}else{
		    		dragDetail={
						width:wWid,
						top:wTop,
						left:wLeft
					};
		    	}
				__this.attr('data-prototype',$.trim(JSON.stringify(dragDetail)));
			// }
		}else{
			if(!isClick){
				if(eleType=='txt'){
					$ele.css({'top':wTop/100+'rem','left':wLeft/100+'rem','width':wWid/100+'rem'});
				}else{
					$ele.css({'top':wTop/100+'rem','left':wLeft/100+'rem','width':wWid/100+'rem','height':wHei/100+'rem'});
				}
			}
		}
		isClick=true;
	}).on('mousedown', '.coor', function(e) {
		e.stopPropagation();
	    var $this=$(this).parent();
	    var posix = {
	            'w': $this.width()*0.65, 
	            'h': $this.height()*0.65, 
	            'x': e.pageX, 
	            'y': e.pageY
	        };
	    $.extend(document, {'move': true, 'call_down': function(e) {
	    	var wid=(e.pageX - posix.x) + posix.w;
	    	var hei=(e.pageY - posix.y) + posix.h;
	    	dragDetail.width=Math.max(10, wid)/0.65;
	    	if(eleType!='txt'){
	    		dragDetail.height=Math.max(10, hei)/0.65;
	    	}
	    	if(!isChild){
		    	if(eleType=='txt'){
		    		wid=(e.pageX - posix.x) + posix.w;
					$this.css({
			            'width': Math.max(10, wid)/0.65+'px',
			        }).attr('data-prototype',$.trim(JSON.stringify(dragDetail)));
					$this.children('.borderTop,.borderBottom').css('width',dragDetail.width+'px');
		    	}else if(eleType=='img'){
		    		var temp=posix.w/((e.pageX - posix.x) + posix.w);
		    		wid=(e.pageX - posix.x) + posix.w;
		    		hei=posix.h/temp;
		    		dragDetail.width=wid/0.65;
		    		dragDetail.height=hei/0.65;
		    		$this.css({
			            'width': Math.max(10, wid)/0.65+'px',
			            'height': Math.max(10, hei)/0.65+'px'
			        }).attr('data-prototype',$.trim(JSON.stringify(dragDetail)));
			        $this.children('.borderTop,.borderBottom').css('width',Math.max(10, wid)/0.65+'px');
			        $this.children('.borderLeft,.borderRight').css('height',Math.max(10, hei)/0.65+'px');
		    	}else{
		    		wid=(e.pageX - posix.x) + posix.w;
		    		hei=(e.pageY - posix.y) + posix.h;
		    		$this.css({
			            'width': Math.max(10, wid)/0.65+'px',
			            'height': Math.max(10, hei)/0.65+'px'
			        }).attr('data-prototype',$.trim(JSON.stringify(dragDetail)));
			        $this.children('.borderTop,.borderBottom').css('width',Math.max(10, wid)/0.65+'px');
			        $this.children('.borderLeft,.borderRight').css('height',Math.max(10, hei)/0.65+'px');
		    	}
		    }else{
		    	if(eleType=='txt'){
		    		wid=(e.pageX - posix.x) + posix.w;
					$this.css({
			            'width': Math.max(10, wid)/0.65/100+'rem',
			        });
			        $this.children('.borderTop,.borderBottom').css('width',Math.max(10, wid)/0.65/100+'rem');
		    	}else if(eleType=='img'){
		    		var temp=posix.w/((e.pageX - posix.x) + posix.w);
		    		wid=(e.pageX - posix.x) + posix.w;
		    		hei=posix.h/temp;
		    		$this.css({
			            'width': Math.max(10, wid)/0.65/100+'rem',
			            'height': Math.max(10, hei)/0.65/100+'rem'
			        });
			        $this.children('.borderTop,.borderBottom').css('width',Math.max(10, wid)/0.65/100+'rem');
			        $this.children('.borderLeft,.borderRight').css('height',Math.max(10, hei)/0.65/100+'rem');
		    	}else{
		    		wid=(e.pageX - posix.x) + posix.w;
		    		hei=(e.pageY - posix.y) + posix.h;
		    		$this.css({
			            'width': Math.max(10, wid)/0.65/100+'rem',
			            'height': Math.max(10, hei)/0.65/100+'rem'
			        });
			        $this.children('.borderTop,.borderBottom').css('width',Math.max(10, wid)/0.65/100+'rem');
			        $this.children('.borderLeft,.borderRight').css('height',Math.max(10, hei)/0.65/100+'rem');
		    	}
		    }
	    }});
	    return false;
	}).on('click','.coor',function(e){
		e.stopPropagation();
	}).on('click','.mouseup',function(e){
		e.stopPropagation();
	});
}