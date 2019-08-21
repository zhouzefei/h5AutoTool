$(function(){
	if($('.dataScrollContent').length>0){
		$.ajax({
			url: ajaxurl+"/lottery/queryTotalPrize?format=json&app=saleappdan",
			data: {},
			dataType: "jsonp",
			success: function(data) {
				var ned=data,str='';
				for(var i=0;i<ned.userPrizeList.length;i++){
					str+="<tr><td width='30%'>"+ned.userPrizeList[i].userNick+"</td><td width='50%' align='center'>"+ned.userPrizeList[i].prizeName+"</td><td width='20%' align='right'>"+(i+2)+"秒前</td></tr>";
				};
				$(".dataScrollContent table").html(str);
				startmarquee(25,80,0,1);
			},
			error:function(data){
				alert('快找程序员领奖');
			}
		});
	};
	//我的中奖纪录
	$('body').on('click','.myGiftList',function(){

	})
});
function startmarquee(lh,speed,delay){ 
	var t; 
	var p=false; 
	var o=$(".dataScrollContent").eq(0)[0]; 
	o.innerHTML+=o.innerHTML; 
	o.onmouseover=function(){p=true} 
	o.onmouseout=function(){p=false} 
	o.scrollTop = 0; 
	function start(){ 
		t=setInterval(scrolling,speed); 
		if(!p){ o.scrollTop += 1;} 
	} 
	function scrolling(){ 
		if(o.scrollTop%lh!=0){ 
			o.scrollTop += 1; 
			if(o.scrollTop>=o.scrollHeight/2) o.scrollTop = 0; 
		}else{ 
			clearInterval(t); 
			setTimeout(start,delay); 
		} 
	} 
	setTimeout(start,delay); 
};    