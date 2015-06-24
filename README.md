
# 使用文档 #
	
> 该上报依赖于jquery

----------

##引用js资源
	
    <script type="text/javascript" src="http://szhuodong.duowan.com/s/rp/ya-huya.min.js" data-fixed="true" pro="testpas" noreport="" id="yaScript"></script>


##html
	//点击上报
	//eid 和 eid_desc 的值是产品给的 
	<div class="clickstat" eid="click/home/tjyx/tjyx8" eid_desc="点击/首页/推荐游戏/推荐游戏8"></div>

##方法调用

	huyaReport = require('huya-report');
	

	huyaReport.report({
        rso: huyaReport.parseQueryString(location.href)['rso'] || "", //外部来源
        rso_desc: decodeURIComponent(huyaReport.parseQueryString(location.href)['rso_desc']) || "",//外部来源
        eid: "pageview/home",  //产品给的
        eid_desc:"pageview/首页"  //产品给的
    });


##api方法
	//获取mid
	YA.mid.get()

	//获取session_id
	YA.session_id.get()

	//获取cookie的值
	YA.cookie.get('username')