define(function(require,exports,module){

	var $ = require('jquery');
	var slide = require('slide');
	var smSlider = require('smallslider');

	__initSlider();
	slide.slideInit();
	function __initSlider() {
		smSlider.initSlider();
		(function __initSlider() {
			$('#img-slider').smallslider({
				 switchEffect: 'ease',
				 switchPath: 'left',
				 switchMode: 'click',
				 autoStart: true,
				 showText: false,
				 switchTime: 1000
		 });
	 })();

	 if( $(".news-item")[0]  ) {
		 if( $(".news-item")[0].style.display !== 'block' ) {
				__initSlider();
		 }
	 }

	}

  // Judge ie6
	(function() {
		var isIE=!!window.ActiveXObject;
		var isIE6=isIE&&!window.XMLHttpRequest;
		if( isIE6 ) {
			document.documentElement.style.display = "none";
			alert("您的浏览器版本太低，请升级浏览器!点击确认跳转至旧版。");
			window.location.href = "./version2015";
		}
	})();

	// Reset all
	$("#slider").bind('click', function() {
		window.location.href="./index.html";
	});
/*	function resetAll() {
		if( $("#foot").length > 0 ) {
			var offsetTop = $("#foot").offset().top;
			if(offsetTop < 1500) {
				$(".embed_left").css("display", "none");
				$(".embed_left_2").css("display", "none");
			}
		}
		if( $(".main_frame_sub") ) {

		}

		// console.log( $(".main_frame_sub").height() );
		if( $(".main_frame_sub").height() < 517 ) {
			$(".main_frame_sub").height("520");
			$(".passage").height("430");
			$(".detail_sub").height("540");
		}
	}
	resetAll();
*/
	function resetAll() {
		$(document).ready(function() {
			// alert($(".left_sub").height());
			if ($(".left_sub").height() > $(".detail_2").height()) {
				$(".embed_left").css("display", "none");
				$(".embed_left_2").css("display", "none");
			}
		});
	}
	resetAll();

	exports.slide = function () {
		$("#slider").responsiveSlides({
			auto: true,
			pager: false,
			nav: true,
			speed: 500,
			timeout:5000,
			pager: true,
			pauseControls: true,
			namespace: "slider"
		});
	}

	exports.nav = function(){
		var Nav = require('nav');
		var n = new Nav("nav.menu");
		n._init();

		var _width = document.documentElement.clientWidth;
	    if(_width < 650){
	        n.removeHover();
	    }else{
		    n.addHover();
	    }
	}

	exports.topicData = function(){

		var html = "<a href=\"http://zxz.neu.edu.cn\" target=\"_blank\">\
						<img src=\"./assets/images/sanyansanshi.jpg\" />\
					</a>\
					<a href=\"http://uzone.univs.cn/school_2129.html\" target=\"_blank\">\
						<img src=\"./assets/images/changyeshuxiang.jpg\" />\
					</a>\
					<a href=\"http://zxz.neu.edu.cn\" target=\"_blank\">\
						<img src=\"./assets/images/sanyansanshi.jpg\" />\
					</a>";

		$("#topics .news").html(html);
	}

	exports.timeline = function(){
		var $prev = $("#timeline .prev");
		var $container = $("#timeline .contain");
		var $prevWrapper = $("#timeline .prev-wrapper");
		var $nextWrapper = $("#timeline .next-wrapper");
		var $next = $("#timeline .next");
		var $newsCon1 = $("#timeline ul");
		var $news = $("#timeline li");
		var size = $news.size();
		var _width = document.documentElement.clientWidth;
		var liLength = 282;
		if( _width < 1200 ){
			liLength = 235;
		}else if( _width < 1600 ){
			liLength = 282;
		}else if( _width>=1600 ){
			liLength = 376;
		}else if( !_width ){
			liLength = 282;
		}

		if( size<=4 ){
			$prev.hide();
			$next.hide();
		}

		$(window).resize(function() {
			resetAll();
			_width = document.documentElement.clientWidth;
			if( _width < 1200 ){
				liLength = 235;
			}else if( _width < 1600 ){
				liLength = 282;
			}else{
				liLength = 376;
			}
			$newsCon1.animate({marginLeft:"0px"});
			
			$newsCon1.css("width", (size*liLength+20)+"px");
			$nextWrapper.bind('click', function(){
				if( animating ) return;
				animating = true;
				if( parseInt($newsCon1.css("marginLeft"))<(-liLength*(size-4)+1) ){
					// console.log("move");
					$newsCon1.animate({marginLeft:0+"px"}, function() {
						animating = false;
					});
				}else{
					$newsCon1.animate({marginLeft:'-='+liLength+'px'}, function() {
						animating = false;
					});
				}
			});
		});

		$newsCon1.css("width", (size*liLength+20)+"px");

		var animating = false;
		$prevWrapper.bind('click', function(){
			if( animating ) return;
			animating = true;
			if( parseInt($newsCon1.css("marginLeft"))>(-1) ){
				$newsCon1.animate({marginLeft:(-liLength*(size-4))+"px"}, function() {
					animating = false;
				});
			}else{
				$newsCon1.animate({marginLeft:'+='+liLength+'px'}, function() {
					animating = false;
				});
			}
		});

		$nextWrapper.bind('click', function(){
			if( animating ) return;
			animating = true;
			if( parseInt($newsCon1.css("marginLeft"))<(-liLength*(size-4)+1) ){
				// console.log("move");
				$newsCon1.animate({marginLeft:0+"px"}, function() {
					animating = false;
				});
			}else{
				$newsCon1.animate({marginLeft:'-='+liLength+'px'}, function() {
					animating = false;
				});
			}
		});

		var __enter = false;
		$container.bind('mouseenter', function() {
				return __enter = true;
		});

		$container.bind('mouseleave', function() {
			return __enter = false;
		});

		setInterval(function() {
			if( !__enter )
				$nextWrapper.trigger('click');
		}, 5000);

	}

	exports.timelineData = function(){

	}

	exports.iframeBlockStyle = function(){
/*
		$("#imageNews iframe").bind('load', function(){

			var doc = this.contentDocument;

		    var head = doc.getElementsByTagName('head')[0];
		    var link = document.createElement('link');
		    link.rel="stylesheet";
		    link.type = "text/css";
		    link.href = 'http://momosdiary.duapp.com/links/main.css';
		    head.appendChild(link);
		});

		<style type="text/css" media="screen">

	</style>
*/

		var style0 = document.createElement('style');
		    style0.media="screen";
		    style0.type = "text/css";
		    style0.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";
		var style1 = document.createElement('style');
		    style1.media="screen";
		    style1.type = "text/css";
		    style1.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";
		var style2 = document.createElement('style');
		    style2.media="screen";
		    style2.type = "text/css";
		    style2.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";
		var style3 = document.createElement('style');
		    style3.media="screen";
		    style3.type = "text/css";
		    style3.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";

		$("#universityNewsIframe")[0].contentDocument.getElementsByTagName("head")[0].appendChild(style0);
		$("#media .news iframe")[0].contentDocument.getElementsByTagName("head")[0].appendChild(style1);
		$("#academyNews .news iframe")[0].contentDocument.getElementsByTagName("head")[0].appendChild(style2);
		$("#inform .news iframe")[0].contentDocument.getElementsByTagName("head")[0].appendChild(style3);

		$("#imageNews iframe").bind('load', function(){
			var doc = this.contentDocument;
			var window = this.contentWindow;
/*

		    var link = doc.getElementsByTagName('link')[1];
		    link.href = 'http://momosdiary.duapp.com/links/main.css';
*/


			var style0 = document.createElement('style');
		    style0.media="screen";
		    style0.type = "text/css";
		    style0.innerHTML = "#container{width:auto;margin:0px;position:relative}#container .clear{display:none}#slides{float:left;width:230px}#slide_grident{display:none}.slidesContainer{float:left}.slidesPagination{margin-top:-20px;float:right;position:relative;z-index:20}#slides .clear{display:none}#news_text{float:right;width:210px}#news_text a{text-decoration:none;color:#3e3a39}.img_news_tilte{height:26px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size:18px;line-height:26px}.img_news_description{font-size:14px} @media screen and (max-width: 1280px){#news_text{width:190px}}/*  @media screen and (max-width: 1200px){#news_text{width:120px}} */";

		    doc.getElementsByTagName("head")[0].appendChild(style0);


		    window.$("img").css({"width":"230px" , "height":"150px"});
		    window.$(".slidesControl").css({"width":"230px" , "height":"150px"});
		    window.$(".slidesContainer").css({"width":"230px" , "height":"150px"});
		});


/*
		$("#universityNews .news iframe").load(function(){

			var doc = this.contentDocument;
		    var head = doc.getElementsByTagName('head')[0];
		    var style = document.createElement('style');
		    style.media="screen";
		    style.type = "text/css";
		    style.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";
		    head.appendChild(style);
		});

		$("#media .news iframe").bind('load', function(){

			var doc = this.contentDocument;
		    var head = doc.getElementsByTagName('head')[0];
		    var style = document.createElement('style');
		    style.media="screen";
		    style.type = "text/css";
		    style.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";
		    head.appendChild(style);
		});

		$("#academyNews .news iframe").bind('load', function(){

			var doc = this.contentDocument;
		    var head = doc.getElementsByTagName('head')[0];
		    var style = document.createElement('style');
		    style.media="screen";
		    style.type = "text/css";
		    style.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";
		    head.appendChild(style);
		});

		$("#inform .news iframe").bind('load', function(){

			var doc = this.contentDocument;
		    var head = doc.getElementsByTagName('head')[0];
		    var style = document.createElement('style');
		    style.media="screen";
		    style.type = "text/css";
		    style.innerHTML = "body{margin:0}.widget ul{list-style:none;margin:0;padding:0 0}.widget li{line-height:25px;height: 25px;overflow: hidden;}.widget a{font-size:15px;color:#3e3a39;text-decoration:none}.linktitle{float:left}.datetime{float:right;color:#032b83;font-size: 15px;}.clear{clear:both;padding:0;margin:0}";
		    head.appendChild(style);
		});
*/


// exports.navData = function(){
	// 	var html = " <section class='menu' id='smenu'><div style='float:right;background:url(\"./assets/images/nav.png\") no-repeat left center;width:30px;height:40px;'></div>导航</section> ";
	// 	html += ("<ul id='nav'>");

	// 	html += ("<li> <a href=\"../intro_index.htm\">东大简介</a>");
	// 	html += ("<ul>");
	// 	html += ("<li> <a href=\"../intro_info.htm\">东大简介</a> </li>");
	// 	html += ("<li> <a href=\"../history_zhangxueliang.htm\">张学良老校长</a> </li>");
	// 	html += ("<li> <a href=\"../history_history.htm\">光辉校史</a> </li>");
	// 	html += ("<li> <a href=\"../intro_leader.htm\">现任领导</a> </li>");
	// 	html += ("<li> <a href=\"../intro_academician.htm\">院士风采</a> </li>");
	// 	html += ("<li> <a href=\"../intro_guide.htm\">校园导游</a> </li>");
	// 	html += ("<li> <a href=\"http://www.neu.edu.cn/files/info_title.htm\">校标校名校训校歌</a> </li>");
	// 	html += ("</ul>");
	// 	html += ("</li>");

	// 	html += ("<li><a href=\"../org_index.htm\">组织结构</a>");
	// 	html += ("<ul>");
	// 	html += ("<li><a href=\"../org_index.htm#college\">院系导航</a></li>");
	// 	html += ("<li><a href=\"../org_index.htm#management\">管理部门</a></li>");
	// 	html += ("<li><a href=\"../org_index.htm#direct\">直属部门</a></li>");
	// 	html += ("</ul>");
	// 	html += ("</li>");

	// 	html += ("<li> <a href=\"../teach_res_index.htm\">教学科研</a>");
	// 	html += ("<ul>");
	// 	html += ("<li> <a href=\"../edu_manage.htm\" target=\"_self\">教务系统</a> </li>");
	// 	html += ("<li> <a href=\"http://www.neu.edu.cn/indexsource/2009_course.htm\" target=\"_blank\">精品课程</a> </li>");
	// 	html += ("<li> <a href=\"http://aao.neu.edu.cn\" target=\"_blank\">教学研究</a> </li>");
	// 	html += ("<li> <a href=\"http://kjc.neu.edu.cn\" target=\"_blank\">科研项目</a> </li>");
	// 	html += ("<li> <a href=\"http://cxzx.neu.edu.cn\" target=\"_blank\">创新基地</a> </li>");
	// 	html += ("<li> <a href=\"../edu_lab.htm\" target=\"_self\">国家重点实验室</a> </li>");
	// 	html += ("<li> <a href=\"../edu_evaluation.htm\" target=\"_self\">本科教学质量报告</a> </li>");
	// 	html += ("<li> <a href=\"../2014_teachingachievement.htm\" target=\"_self\">2014年教学成果奖申报</a> </li>");
	// 	html += ("</ul>");
	// 	html += ("</li>");

	// 	html += ("<li> <a href=\"../teachers_index.htm\">师资队伍</a>");
	// 	html += ("<ul>");
	// 	html += ("<li> <a href=\"../teachers_intr.htm\">师资介绍</a> </li>");
	// 	html += ("<li> <a href=\"http://202.118.27.233/want_ads/want_ads.asp\" target=\"_blank\">人才招聘</a> </li>");
	// 	html += ("</ul>");
	// 	html += ("</li>");

	// 	html += ("<li> <a href=\"../international_index.htm\">国际合作</a>");
	// 	html += ("<ul>");
	// 	html += ("<li> <a href=\"http://int.neu.edu.cn/cn/index.asp\" target=\"_blank\">交流合作</a> </li>");
	// 	html += ("<li> <a href=\"http://www.sie.neu.edu.cn/en/index.asp\" target=\"_blank\">来华留学</a> </li>");
	// 	html += ("<li> <a href=\"http://int.neu.edu.cn/cn/html/n_20134221042182426.asp\" target=\"_blank\">双百计划</a> </li>");
	// 	html += ("<li> <a href=\"http://int.neu.edu.cn/cn/pages/Agreement_schools.asp\" target=\"_blank\">协议院校</a> </li>");
	// 	html += ("</ul>");
	// 	html += ("</li>");

	// 	html += ("<li> <a href=\"../map_index.htm#direct\">快速链接</a>");
	// 	html += ("<ul>");
	// 	html += ("<li> <a href=\"http://www.neualumni.org.cn/\" target=\"_blank\">校友总会</a> </li>");
	// 	html += ("<li> <a href=\"http://xdh.neualumni.org.cn/\" target=\"_blank\">校董会</a> </li>");
	// 	html += ("<li> <a href=\"http://www.chlef.org/\" target=\"_blank\">张学良教育基金会</a> </li>");
	// 	html += ("<li> <a href=\"http://202.118.8.4\" target=\"_blank\">图书馆</a> </li>");
	// 	html += ("<li> <a href=\"http://neunews.neu.edu.cn\" target=\"_blank\">东大新闻网</a> </li>");
	// 	html += ("<li> <a href=\"http://weekly.neu.edu.cn\" target=\"_blank\">东北大学报</a> </li>");
	// 	html += ("<li> <a href=\"http://online.neu.edu.cn/\" target=\"_blank\">广播电视网</a> </li>");
	// 	html += ("<li> <a href=\"http://www.neupioneer.com/\" target=\"_blank\">先锋网</a> </li>");
	// 	html += ("<li> <a href=\"http://zs.neu.edu.cn\" target=\"_blank\">招生信息网</a> </li>");
	// 	html += ("<li> <a href=\"http://study.neu.edu.cn\" target=\"_blank\">研究生院网上办公系统</a> </li>");
	// 	html += ("<li> <a href=\"http://job.neu.edu.cn\" target=\"_blank\">就业信息网</a> </li>");
	// 	html += ("<li> <a href=\"http://xkjs.neu.edu.cn/xuefeng/\" target=\"_blank\">学风建设专题网</a> </li>");
	// 	html += ("<li> <a href=\"http://job.graduate.neu.edu.cn/\" target=\"_blank\">研究生就业信息网</a> </li>");
	// 	html += ("<li> <a href=\"http://psy.neu.edu.cn/\" target=\"_blank\">心理健康港湾</a> </li>");
	// 	html += ("<li> <a href=\"http://qzzx.neu.edu.cn/\" target=\"_blank\">勤助在线网</a> </li>");
	// 	html += ("<li> <a href=\"http://www.neucy.cn/\" target=\"_blank\">科技产业集团</a> </li>");
	// 	html += ("<li> <a href=\"http://www.neusoft.com\" target=\"_blank\">东软集团</a> </li>");
	// 	html += ("<li> <a href=\"http://www.neusoft.edu.cn\" target=\"_blank\">东软信息学院</a> </li>");
	// 	html += ("<li> <a href=\"http://www.neu.edu.cn/network/\" target=\"_blank\">校园网服务</a> </li>");
	// 	html += ("<li> <a href=\"http://www.synet.edu.cn\" target=\"_blank\">CERNET东北地区网络中心</a> </li>");
	// 	html += ("<li> <a href=\"http://www.qncx.cn/\" target=\"_blank\">昌宁新闻网</a> </li>");
	// 	html += ("<li> <a href=\"http://president.neu.edu.cn/\" target=\"_blank\">校长信箱</a> </li>");
	// 	html += ("</ul>");
	// 	html += ("</li>");

	// 	html += ("<li class=\"last\"><a href=\"../map_index.htm#resources\">校内资源</a>");
	// 	html += ("<ul>");
	// 	html += ("<li> <a href=\"http://network.neu.edu.cn\" target=\"_blank\">网络中心黑板报</a> </li>");
	// 	html += ("<li> <a href=\"http://ipgw.neu.edu.cn\" target=\"_blank\">校园网IP控制网关</a> </li>");
	// 	html += ("<li> <a href=\"http://tree.neu.edu.cn\" target=\"_blank\">校园网用户管理</a> </li>");
	// 	html += ("<li> <a href=\"http://ecard.neu.edu.cn/\" target=\"_blank\">校园卡服务中心</a> </li>");
	// 	html += ("<li> <a href=\"http://ecard.neu.edu.cn/selfsearch/\" target=\"_blank\">校园卡自助查询平台</a> </li>");
	// 	html += ("<li> <a href=\"http://apps.neu.edu.cn/sunrise/\" target=\"_blank\">校园卡信息确认平台</a> </li>");
	// 	html += ("<li> <a href=\"http://202.118.1.83\" target=\"_blank\">邮件服务</a> </li>");
	// 	html += ("<li> <a href=\"http://vpn.neu.edu.cn\" target=\"_blank\">VPN服务</a> </li>");
	// 	html += ("<li> <a href=\"http://faculty.neu.edu.cn/\" target=\"_blank\">教师主页</a> </li>");
	// 	html += ("<li> <a href=\"http://conf.neu.edu.cn/\" target=\"_blank\">学术会议</a> </li>");
	// 	html += ("<li> <a href=\"http://blog.neu.edu.cn/\" target=\"_blank\">东大博客</a> </li>");
	// 	html += ("<li> <a href=\"http://neucert.neu.edu.cn\" target=\"_blank\">网络应急响应NETCERT</a> </li>");
	// 	html += ("<li> <a href=\"http://antivirus.neu.edu.cn\" target=\"_blank\">校内防病毒服务</a> </li>");
	// 	html += ("<li> <a href=\"http://wsus.neu.edu.cn/\" target=\"_blank\">Windows补丁升级</a> </li>");
	// 	html += ("<li> <a href=\"http://mirror.neu.edu.cn/\" target=\"_blank\">开源软件镜像</a> </li>");
	// 	html += ("<li> <a href=\"http://hpc.neu.edu.cn/\" target=\"_blank\">高性能计算平台</a> </li>");
	// 	html += ("<li> <a href=\"http://ntp.neu.edu.cn/\">网络授时服务</a> </li>");
	// 	html += ("<li> <a href=\"http://search.neu.edu.cn/\" target=\"_blank\">Web搜索引擎</a> </li>");
	// 	html += ("<li> <a href=\"http://202.118.1.125/\" target=\"_blank\">FTP搜索引擎</a> </li>");
	// 	html += ("<li> <a href=\"http://www.neu.edu.cn/files/info_calender.htm\">校历</a> </li>");
	// 	html += ("<li> <a href=\"http://www.neu.edu.cn/files/info_phonenumber.htm\">常用电话</a> </li>");
	// 	html += ("<li> <a href=\"ftp://ftp.neu.edu.cn/\" target=\"_blank\">校内FTP</a> </li>");
	// 	html += ("<li> <a href=\"http://geoip.neu.edu.cn/\" target=\"_blank\">IP地址归属查询</a> </li>");
	// 	html += ("<li> <a href=\"http://219.216.96.35/\" target=\"_blank\">校园地图[导游]</a> </li>");
	// 	html += ("<li> <a href=\"../about_index.htm\">关于我们</a> </li>");
	// 	html += ("</ul>");
	// 	html += ("</li>");

	// 	html += ("</ul>");

	// 	// $("nav.menu").html(html);
	// }


	}

})
