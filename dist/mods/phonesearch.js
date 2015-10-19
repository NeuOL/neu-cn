//<![CDATA[ 
var titleString = "东北大学校内电话信息查询结果";
initSelect();

//window.onerror = handleError;
//function handleError(message, URI, line) {
//　return true; 
//}

function initSelect(){
	var mainDeptSelect = document.getElementById("mainDeptSelect");
	while(mainDeptSelect.childNodes.length > 0){
		mainDeptSelect.removeChild(mainDeptSelect.childNodes[0]);
	}

	var oneOption = document.createElement("option");
	oneOption.setAttribute("value", -1);
	oneOption.appendChild(document.createTextNode("请选择单位..."));
	mainDeptSelect.appendChild(oneOption);

	var i = 0;
	while(i < mainDeptCount){
		var oneOption = document.createElement("option");
		oneOption.setAttribute("value", i);
		oneOption.appendChild(document.createTextNode(mainDept[i]));
		mainDeptSelect.appendChild(oneOption);
		i++;
	}

	var subDeptSelect = document.getElementById("subDeptSelect");
	while(subDeptSelect.childNodes.length > 0){
		subDeptSelect.removeChild(subDeptSelect.childNodes[0]);
	}
	var oneOption = document.createElement("option");
	oneOption.setAttribute("value", -1);
	oneOption.appendChild(document.createTextNode("全部相关"));
	subDeptSelect.appendChild(oneOption);
}

function refreshSubDeptSelect(){
	var selectMainDept = document.getElementById("mainDeptSelect").value;
	var i;
	selectMainDept = parseInt(selectMainDept);
	if(selectMainDept < 0 || selectMainDept >= mainDeptCount){
		alert("请选择某个单位名称！");
		return;
	}

	var subDeptSelect = document.getElementById("subDeptSelect");
	while(subDeptSelect.childNodes.length > 0){
		subDeptSelect.removeChild(subDeptSelect.childNodes[0]);
	}

	var oneOption = document.createElement("option");
	oneOption.setAttribute("value", -1);
	oneOption.appendChild(document.createTextNode("全部相关"));
	subDeptSelect.appendChild(oneOption);

	try{
		var infoList = eval("subDept" + getFormatNumString(selectMainDept));
		for(i = 0; i < subDeptCount[selectMainDept]; i++){
			var infoTemp = infoList[i];
			var oneOption = document.createElement("option");
			oneOption.setAttribute("value", i);
			oneOption.appendChild(document.createTextNode(infoTemp[0]));
			subDeptSelect.appendChild(oneOption);
		}
	}
	catch(errorObject){
	}
}

function showInfoByMainAndSubDeptName(){
	var selectMainDept = document.getElementById("mainDeptSelect").value;
	selectMainDept = parseInt(selectMainDept);
	if(selectMainDept < 0 || selectMainDept >= mainDeptCount){
		alert("请选择某个单位名称！");
		return;
	}

    initSearchResults();
	showResultsTitle();

	var selectSubDept = document.getElementById("subDeptSelect").value;
	selectSubDept = parseInt(selectSubDept);
	if(selectSubDept == -1){
		showResultsByMainDeptName(selectMainDept);
		return;
	}
	if(selectSubDept < 0 || selectSubDept >= subDeptCount[selectMainDept]){
		alert("请选择某个科室名称！");
		return;
	}

	showResultsByMainAndSubDeptName(selectMainDept, selectSubDept);
}

function searchInfo(){
	var inputInfo = trim(document.getElementById("inputInfo").value);
	var i, k;

	if(inputInfo.length == 0){
		//alert("请输入查询内容！");
		return;
	}

    initSearchResults();
	showResultsTitle();

	var searchResultDiv = document.getElementById("searchResults");
	var iShow = true;
	for(i = 0; i < mainDeptCount; i++){
		if(mainDept[i].indexOf(inputInfo) >= 0){
			showResultsByMainDeptName(i);
			continue;
		}
		iShow = true;
		var infoList = eval("subDept" + getFormatNumString(i));
		for(k = 0; k < subDeptCount[i]; k++){
			var infoTemp = infoList[k];
			if(infoTemp[0].indexOf(inputInfo) >= 0){
				if(iShow){
					//show Main Dept Name
					var deptTitle = document.createElement("div");
					deptTitle.setAttribute("style", "font-weight: bold;");
					deptTitle.appendChild(document.createTextNode("" + mainDept[i]));
					searchResultDiv.appendChild(deptTitle);
					searchResultDiv.appendChild(document.createElement("br"));
					iShow = false;
				}
				
				searchResultDiv.appendChild(document.createTextNode(infoTemp[0] + "：" + infoTemp[1]));
				searchResultDiv.appendChild(document.createElement("br"));
			}
		}

		if(!iShow){
			searchResultDiv.appendChild(document.createElement("br"));
			searchResultDiv.appendChild(document.createElement("br"));
		}
	}
}

function searchInfoBySubDeptName(){
	var inputInfo = trim(document.getElementById("subDeptName").value);
	var i = 0;

	if(inputInfo.length == 0){
		//alert("请输入查询内容！");
		return;
	}

    initSearchResults();
	showResultsTitle();

	var j, k;
	var iShow = true;
	var searchResultDiv = document.getElementById("searchResults");
	for(j = 0; j < mainDeptCount; j++ ){
		iShow = true;
		var infoList = eval("subDept" + getFormatNumString(j));
		for(k = 0; k < subDeptCount[j]; k++){
			var infoTemp = infoList[k];
			if(infoTemp[0].indexOf(inputInfo) >= 0){
				if(iShow){
					//show Main Dept Name
					var deptTitle = document.createElement("div");
					deptTitle.setAttribute("style", "font-weight: bold;");
					deptTitle.appendChild(document.createTextNode("" + mainDept[j]));
					searchResultDiv.appendChild(deptTitle);
					searchResultDiv.appendChild(document.createElement("br"));
					iShow = false;
				}
				
				searchResultDiv.appendChild(document.createTextNode(infoTemp[0] + "：" + infoTemp[1]));
				searchResultDiv.appendChild(document.createElement("br"));
			}
		}

		if(!iShow){
			searchResultDiv.appendChild(document.createElement("br"));
			searchResultDiv.appendChild(document.createElement("br"));
		}
	}
}

function searchInfoByMainDeptName(){
	var inputInfo = trim(document.getElementById("mainDeptName").value);
	var i = 0;

	if(inputInfo.length == 0){
		//alert("请输入查询内容！");
		return;
	}

    initSearchResults();
	showResultsTitle();
	while(i < mainDeptCount){
		if(mainDept[i].indexOf(inputInfo) >= 0){
			showResultsByMainDeptName(i);
		}
		i++;
	}
}

function initSearchResults(){
	var searchResultDiv = document.getElementById("searchResults");
	while(searchResultDiv.childNodes.length >0){
		searchResultDiv.removeChild(searchResultDiv.childNodes[0]);
	}
}

function showResultsTitle(){
	var searchResultDiv = document.getElementById("searchResults");
	var theTitle = document.createElement("h2");
	theTitle.setAttribute("style", "text-align: center;");
	theTitle.appendChild(document.createTextNode(titleString));
	searchResultDiv.appendChild(document.createElement("br"));
	searchResultDiv.appendChild(theTitle);
	searchResultDiv.appendChild(document.createElement("br"));
}

function showResultsByMainDeptName(num){
	if(num >= mainDeptCount) return;

	var searchResultDiv = document.getElementById("searchResults");
	var deptTitle = document.createElement("div");
	deptTitle.setAttribute("style", "font-weight: bold;");
	deptTitle.appendChild(document.createTextNode("" + mainDept[num]));
	searchResultDiv.appendChild(deptTitle);
	searchResultDiv.appendChild(document.createElement("br"));
	
	var infoList = eval("subDept" + getFormatNumString(num));
	var i;
	for(i = 0; i < subDeptCount[num]; i++){
		var infoTemp = infoList[i];
		searchResultDiv.appendChild(document.createTextNode(infoTemp[0] + "：" + infoTemp[1]));
		searchResultDiv.appendChild(document.createElement("br"));
	}
	searchResultDiv.appendChild(document.createElement("br"));
	searchResultDiv.appendChild(document.createElement("br"));
}

function showResultsByMainAndSubDeptName(main, sub){
	if(main >= mainDeptCount) return;
	if(sub >= subDeptCount[main]) return;

    initSearchResults();
	showResultsTitle();
	var searchResultDiv = document.getElementById("searchResults");
	var infoList = eval("subDept" + getFormatNumString(main));
	var infoTemp = infoList[sub];
	var deptTitle = document.createElement("div");
	deptTitle.setAttribute("style", "font-weight: bold;");
	deptTitle.appendChild(document.createTextNode("" + mainDept[main]));
	searchResultDiv.appendChild(deptTitle);
	searchResultDiv.appendChild(document.createElement("br"));
	searchResultDiv.appendChild(document.createTextNode(infoTemp[0] + "：" + infoTemp[1]));
	searchResultDiv.appendChild(document.createElement("br"));
}

function getFormatNumString(num){
	if(isNumber(num)){
		num = Math.round(num);
		if(num >= 0 && num <=9){
			return "0" + num;
		}else{
			return num;
		}
	}else{
		return "";
	}
}

function isNumber(obj){ 
    return (typeof obj=='number')&&obj.constructor==Number; 
}

function trim(str){  //删除左右两端的空格
 return str.replace(/(^\s*)|(\s*$)/g, "");
}

function ltrim(str){  //删除左边的空格
 return str.replace(/(^\s*)/g, "");
}

function rtrim(str){  //删除右边的空格
 return str.replace(/(\s*$)/g, "");
}
//]]>