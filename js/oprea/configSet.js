function configSet(){

}
//撤销
$('body').on('click','.iconBack',function(){
	$(".configShow").removeClass('on');
	$(".frameConfig").animate({'top':'1800px'},'fast')
});