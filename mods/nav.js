define(["jquery"],function(require,exports){

exports.navInit = function(){

$(function(){
	
	//导航
	var vNavWaitSlide,NavWaitSlide;
	  $('#nav > li').hover(
		  function(){
			  $(this).find('a:first').addClass("hover");
			  var current_li=$(this),targ=$(current_li).find('ul:first');
			  NavWaitSlide = setTimeout(function() { 
				  if(!$(targ).is(':visible'))
				  {
						$(targ).slideDown(200);
				  }
			  },100)
		  },
		 function(){
			  clearTimeout(NavWaitSlide);
			  $(this).find('ul').hide();
			  $(this).find('a:first').removeClass("hover");
		  }
		);
	
	//ie6
	

	if ( !-[1,] ){ //is IE
		 if( !window.XMLHttpRequest ){ //is IE6
			 $("header.header").prepend("<div class='ie6' style='display:none;'><span>关闭</span>非常抱歉，本站不再支持您的浏览器，请升级您的浏览器到 <a href='http://www.microsoft.com/zh-cn/download/internet-explorer-8-details.aspx' target='_blank'>更高的版本</a>！以获得更好的观看效果。</div>");
			 $(".ie6").animate({height:"toggle",opacity:"toggle"},1000);
			 $(".ie6 span").click(function(){$(".ie6").slideUp()})
	}}

	//小屏幕menu
	

/*
	$("#smenu").toggle(function(){
		$("#nav").slideDown(100);
		},
		function(){
		$("#nav").slideUp(100);
		}
	)
*/
	
	$("#submenu").toggle(
		function(){
			$(this).next().slideDown(100);
		},
		function(){
			if($("#submenu .menuicon").is(':visible')){
				$(this).next().slideUp(100)
			};
		}
	)
	
	$("#smenu").click(function(){
		var $nav = $("#nav");
		if( $nav.is(":visible") ){
			$nav.slideUp(100);
		}else{
			$nav.slideDown(100);
		}
	});

	
	
	//右侧menu
/*
	$("section.leftNav li").each(function(){
		if($(this).find('ul:first').length>0)
		{
			$(this).find('i:first').show();
			if($(this).hasClass('current'))
			{
				$(this).find('i:first').removeClass("thuicon-plus");
				$(this).find('i:first').addClass("current thuicon-minus");
			}
		}
		else
		{
			$(this).find('i:first').hide();
		}
	}) 
*/
	
	$("section.leftNav li i").click(
		function(){
			if($(this).siblings("ul").is(":visible")){
				$(this).removeClass("current  thuicon-minus");
				$(this).addClass("thuicon-plus");
				$(this).siblings("ul").slideUp('fast');
				}else
				{
					$(this).removeClass("thuicon-plus");
					$(this).addClass("current thuicon-minus");
					$(this).siblings("ul").slideDown('fast');
				}
			})
	
	//tab
		$('.swapmenu li').click(function(){
			var dex=$(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			$('#'+$(this).parent().attr("targ")).children().eq(dex).fadeIn().siblings().hide();

		})
	
})

}

})