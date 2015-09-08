define(["slide","superfish","jquery"],function(require,exports,module){
	
// 	slider
	var slide = require('slide');
	var menu = require('superfish');
	slide.slideInit();
	menu.menuInit();
	
	exports.slide = function () {
		
		// Slideshow 
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
		
		console.log(jQuery);
	}
		
// 	nav
	exports.nav = function(){

	
	
		$(".sf-menu").superfish();



	}
	
	exports.navData = function(){
		
		console.log(11);
		var html = "";
		html += ("<ul class=\"sf-menu\">");

		html += ("<li> <a href=\"../intro_index.htm\">东大简介</a>");
		html += ("<ul>");
		html += ("<li> <a href=\"../intro_info.htm\">东大简介</a> </li>");
		html += ("<li> <a href=\"../history_zhangxueliang.htm\">张学良老校长</a> </li>");
		html += ("<li> <a href=\"../history_history.htm\">光辉校史</a> </li>");
		html += ("<li> <a href=\"../intro_leader.htm\">现任领导</a> </li>");
		html += ("<li> <a href=\"../intro_academician.htm\">院士风采</a> </li>");
		html += ("<li> <a href=\"../intro_guide.htm\">校园导游</a> </li>");
		html += ("<li> <a href=\"http://www.neu.edu.cn/files/info_title.htm\">校标校名校训校歌</a> </li>");
		html += ("</ul>");
		html += ("</li>");
		
		html += ("<li><a href=\"../org_index.htm\">组织结构</a>");
		html += ("<ul>");
		html += ("<li><a href=\"../org_index.htm#college\">院系导航</a></li>");
		html += ("<li><a href=\"../org_index.htm#management\">管理部门</a></li>");
		html += ("<li><a href=\"../org_index.htm#direct\">直属部门</a></li>");
		html += ("</ul>");
		html += ("</li>");
		
		html += ("<li> <a href=\"../teach_res_index.htm\">教学科研</a>");
		html += ("<ul>");
		html += ("<li> <a href=\"../edu_manage.htm\" target=\"_self\">教务系统</a> </li>");
		html += ("<li> <a href=\"http://www.neu.edu.cn/indexsource/2009_course.htm\" target=\"_blank\">精品课程</a> </li>");
		html += ("<li> <a href=\"http://aao.neu.edu.cn\" target=\"_blank\">教学研究</a> </li>");
		html += ("<li> <a href=\"http://kjc.neu.edu.cn\" target=\"_blank\">科研项目</a> </li>");
		html += ("<li> <a href=\"http://cxzx.neu.edu.cn\" target=\"_blank\">创新基地</a> </li>");
		html += ("<li> <a href=\"../edu_lab.htm\" target=\"_self\">国家重点实验室</a> </li>");
		html += ("<li> <a href=\"../edu_evaluation.htm\" target=\"_self\">本科教学质量报告</a> </li>");
		html += ("<li> <a href=\"../2014_teachingachievement.htm\" target=\"_self\">2014年教学成果奖申报</a> </li>");
		html += ("</ul>");
		html += ("</li>");
		
		html += ("<li> <a href=\"../teachers_index.htm\">师资队伍</a>");
		html += ("<ul>");
		html += ("<li> <a href=\"../teachers_intr.htm\">师资介绍</a> </li>");
		html += ("<li> <a href=\"http://202.118.27.233/want_ads/want_ads.asp\" target=\"_blank\">人才招聘</a> </li>");
		html += ("</ul>");
		html += ("</li>");
		
		html += ("<li> <a href=\"../international_index.htm\">国际合作</a>");
		html += ("<ul>");
		html += ("<li> <a href=\"http://int.neu.edu.cn/cn/index.asp\" target=\"_blank\">交流合作</a> </li>");
		html += ("<li> <a href=\"http://www.sie.neu.edu.cn/en/index.asp\" target=\"_blank\">来华留学</a> </li>");
		html += ("<li> <a href=\"http://int.neu.edu.cn/cn/html/n_20134221042182426.asp\" target=\"_blank\">双百计划</a> </li>");
		html += ("<li> <a href=\"http://int.neu.edu.cn/cn/pages/Agreement_schools.asp\" target=\"_blank\">协议院校</a> </li>");
		html += ("</ul>");
		html += ("</li>");
		
		html += ("<li> <a href=\"../map_index.htm#direct\">快速链接</a>");
		html += ("<ul>");
		html += ("<li> <a href=\"http://www.neualumni.org.cn/\" target=\"_blank\">校友总会</a> </li>");
		html += ("<li> <a href=\"http://xdh.neualumni.org.cn/\" target=\"_blank\">校董会</a> </li>");
		html += ("<li> <a href=\"http://www.chlef.org/\" target=\"_blank\">张学良教育基金会</a> </li>");
		html += ("<li> <a href=\"http://202.118.8.4\" target=\"_blank\">图书馆</a> </li>");
		html += ("<li> <a href=\"http://neunews.neu.edu.cn\" target=\"_blank\">东大新闻网</a> </li>");
		html += ("<li> <a href=\"http://weekly.neu.edu.cn\" target=\"_blank\">东北大学报</a> </li>");
		html += ("<li> <a href=\"http://online.neu.edu.cn/\" target=\"_blank\">广播电视网</a> </li>");
		html += ("<li> <a href=\"http://www.neupioneer.com/\" target=\"_blank\">先锋网</a> </li>");
		html += ("<li> <a href=\"http://zs.neu.edu.cn\" target=\"_blank\">招生信息网</a> </li>");
		html += ("<li> <a href=\"http://study.neu.edu.cn\" target=\"_blank\">研究生院网上办公系统</a> </li>");
		html += ("<li> <a href=\"http://job.neu.edu.cn\" target=\"_blank\">就业信息网</a> </li>");
		html += ("<li> <a href=\"http://xkjs.neu.edu.cn/xuefeng/\" target=\"_blank\">学风建设专题网</a> </li>");
		html += ("<li> <a href=\"http://job.graduate.neu.edu.cn/\" target=\"_blank\">研究生就业信息网</a> </li>");
		html += ("<li> <a href=\"http://psy.neu.edu.cn/\" target=\"_blank\">心理健康港湾</a> </li>");
		html += ("<li> <a href=\"http://qzzx.neu.edu.cn/\" target=\"_blank\">勤助在线网</a> </li>");
		html += ("<li> <a href=\"http://www.neucy.cn/\" target=\"_blank\">科技产业集团</a> </li>");
		html += ("<li> <a href=\"http://www.neusoft.com\" target=\"_blank\">东软集团</a> </li>");
		html += ("<li> <a href=\"http://www.neusoft.edu.cn\" target=\"_blank\">东软信息学院</a> </li>");
		html += ("<li> <a href=\"http://www.neu.edu.cn/network/\" target=\"_blank\">校园网服务</a> </li>");
		html += ("<li> <a href=\"http://www.synet.edu.cn\" target=\"_blank\">CERNET东北地区网络中心</a> </li>");
		html += ("<li> <a href=\"http://www.qncx.cn/\" target=\"_blank\">昌宁新闻网</a> </li>");
		html += ("<li> <a href=\"http://president.neu.edu.cn/\" target=\"_blank\">校长信箱</a> </li>");
		html += ("</ul>");
		html += ("</li>");
		
		html += ("<li class=\"last\"><a href=\"../map_index.htm#resources\">校内资源</a>");
		html += ("<ul style=\"left: -74px;\">");
		html += ("<li> <a href=\"http://network.neu.edu.cn\" target=\"_blank\">网络中心黑板报</a> </li>");
		html += ("<li> <a href=\"http://ipgw.neu.edu.cn\" target=\"_blank\">校园网IP控制网关</a> </li>");
		html += ("<li> <a href=\"http://tree.neu.edu.cn\" target=\"_blank\">校园网用户管理</a> </li>");
		html += ("<li> <a href=\"http://ecard.neu.edu.cn/\" target=\"_blank\">校园卡服务中心</a> </li>");
		html += ("<li> <a href=\"http://ecard.neu.edu.cn/selfsearch/\" target=\"_blank\">校园卡自助查询平台</a> </li>");
		html += ("<li> <a href=\"http://apps.neu.edu.cn/sunrise/\" target=\"_blank\">校园卡信息确认平台</a> </li>");
		html += ("<li> <a href=\"http://202.118.1.83\" target=\"_blank\">邮件服务</a> </li>");
		html += ("<li> <a href=\"http://vpn.neu.edu.cn\" target=\"_blank\">VPN服务</a> </li>");
		html += ("<li> <a href=\"http://faculty.neu.edu.cn/\" target=\"_blank\">教师主页</a> </li>");
		html += ("<li> <a href=\"http://conf.neu.edu.cn/\" target=\"_blank\">学术会议</a> </li>");
		html += ("<li> <a href=\"http://blog.neu.edu.cn/\" target=\"_blank\">东大博客</a> </li>");
		html += ("<li> <a href=\"http://neucert.neu.edu.cn\" target=\"_blank\">网络应急响应NETCERT</a> </li>");
		html += ("<li> <a href=\"http://antivirus.neu.edu.cn\" target=\"_blank\">校内防病毒服务</a> </li>");
		html += ("<li> <a href=\"http://wsus.neu.edu.cn/\" target=\"_blank\">Windows补丁升级</a> </li>");
		html += ("<li> <a href=\"http://mirror.neu.edu.cn/\" target=\"_blank\">开源软件镜像</a> </li>");
		html += ("<li> <a href=\"http://hpc.neu.edu.cn/\" target=\"_blank\">高性能计算平台</a> </li>");
		html += ("<li> <a href=\"http://ntp.neu.edu.cn/\">网络授时服务</a> </li>");
		html += ("<li> <a href=\"http://search.neu.edu.cn/\" target=\"_blank\">Web搜索引擎</a> </li>");
		html += ("<li> <a href=\"http://202.118.1.125/\" target=\"_blank\">FTP搜索引擎</a> </li>");
		html += ("<li> <a href=\"http://www.neu.edu.cn/files/info_calender.htm\">校历</a> </li>");
		html += ("<li> <a href=\"http://www.neu.edu.cn/files/info_phonenumber.htm\">常用电话</a> </li>");
		html += ("<li> <a href=\"ftp://ftp.neu.edu.cn/\" target=\"_blank\">校内FTP</a> </li>");
		html += ("<li> <a href=\"http://geoip.neu.edu.cn/\" target=\"_blank\">IP地址归属查询</a> </li>");
		html += ("<li> <a href=\"http://219.216.96.35/\" target=\"_blank\">校园地图[导游]</a> </li>");
		html += ("<li> <a href=\"../about_index.htm\">关于我们</a> </li>");
		html += ("</ul>");
		html += ("</li>");
		
		html += ("</ul>");
		
		$("nav.menu").html(html);
		
		console.log($("nav.menu"));
	}
	
})


