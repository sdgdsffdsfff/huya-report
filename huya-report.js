function report(obj){
    var obj = obj || {};
    var source = {
        pro : "huya_web",//产品给的
        pas : YA.cookie.get('username') || '',
        yyuid : YA.cookie.get('yyuid') || '',
        pageType : "root",
        rso : "",
        rso_desc : "",
        eid : "",
        eid_desc : ""
    }

    for(var property in obj){
       source[property] =  obj[property];
    }


    window.ya = new YA(source.pro,source.pas,{
       pageType: source.pageType,
       yyuid : source.yyuid
    });

    ya.reportProductStartUp({
        pro: source.pro,
        rso: source.rso,
        rso_desc: source.rso_desc
    });

    ya.startProductHeartbeat({
        pro: source.pro,
        rso: source.rso,
        rso_desc: source.rso_desc
    });

    ya.reportProductEvent({
        eid: source.eid,
        eid_desc: source.eid_desc
    })

    //点击上报
    $("body").on('click', '.clickstat',function(event){
        ya.reportProductEvent({
            eid:$(this).attr('eid'),  //产品给的
            eid_desc:$(this).attr('eid_desc')  //产品给的
        })
    });
}


function parseQueryString(url) {
    var pos;
    var obj = {};
    if ((pos = url.indexOf("?")) != -1) {
        var param = url.substring(pos+1, url.length)
        var paramArr = param.split('&');
        var keyValue = [];
        for (var i = 0, l = paramArr.length; i < l; i++) {
            keyValue = paramArr[i].split('=');
            obj[keyValue[0]] = keyValue[1];
        }
    }
    return obj;
}

module.exports ={
    "report": report,
    "parseQueryString":parseQueryString
}