// define(["jquery"],function(require,exports){
define(function(require,exports,module){
	
	var $ = require('jquery');
	
	function Nav(container){
		this.container = $(container);
	}
	
	module.exports = Nav;
	
	Nav.prototype.addHover = function(){
		var NavWaitSlide;
		$('#nav > li').hover(
			function(){
				var current_li=$(this),
					targ=$(current_li).find('ul:first');
					if(!$(targ).is(':visible')){
						$(targ).slideDown(200);
					}
			},
			function(){
				$(this).find('ul').hide();
			}
		);
	}
	
	Nav.prototype.removeHover = function(){
		$('#nav > li').unbind("mouseenter").unbind("mouseleave");
	}
	
	Nav.prototype._init = function(){
		this.addHover();
		
		//ie6
		if ( !-[1,] ){ //is IE
			if( !window.XMLHttpRequest ){ //is IE6
				$("header.header").prepend("<div class='ie6' style='display:none;'><span>关闭</span>非常抱歉，本站不再支持您的浏览器，请升级您的浏览器到 <a href='http://www.microsoft.com/zh-cn/download/internet-explorer-8-details.aspx' target='_blank'>更高的版本</a>！以获得更好的观看效果。</div>");
				$(".ie6").animate({height:"toggle",opacity:"toggle"},1000);
				$(".ie6 span").click(function(){$(".ie6").slideUp()});
			}
		}

	}

})