(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ffacd5c"],{"14c3":function(e,t,o){var r=o("c6b6"),n=o("9263");e.exports=function(e,t){var o=e.exec;if("function"===typeof o){var a=o.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"25f0":function(e,t,o){"use strict";var r=o("6eeb"),n=o("825a"),a=o("d039"),s=o("ad6d"),l="toString",i=RegExp.prototype,c=i[l],u=a((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f=c.name!=l;(u||f)&&r(RegExp.prototype,l,(function(){var e=n(this),t=String(e.source),o=e.flags,r=String(void 0===o&&e instanceof RegExp&&!("flags"in i)?s.call(e):o);return"/"+t+"/"+r}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var r=o("23e7"),n=o("b727").filter,a=o("1dde"),s=o("ae40"),l=a("filter"),i=s("filter");r({target:"Array",proto:!0,forced:!l||!i},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,o){"use strict";var r=o("d784"),n=o("825a"),a=o("7b0b"),s=o("50c4"),l=o("a691"),i=o("1d80"),c=o("8aa5"),u=o("14c3"),f=Math.max,m=Math.min,p=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,b=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,o,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,x=g?"$":"$0";return[function(o,r){var n=i(this),a=void 0==o?void 0:o[e];return void 0!==a?a.call(o,n,r):t.call(String(n),o,r)},function(e,r){if(!g&&v||"string"===typeof r&&-1===r.indexOf(x)){var a=o(t,e,this,r);if(a.done)return a.value}var i=n(e),p=String(this),d="function"===typeof r;d||(r=String(r));var h=i.global;if(h){var S=i.unicode;i.lastIndex=0}var k=[];while(1){var C=u(i,p);if(null===C)break;if(k.push(C),!h)break;var w=String(C[0]);""===w&&(i.lastIndex=c(p,s(i.lastIndex),S))}for(var U="",R=0,$=0;$<k.length;$++){C=k[$];for(var _=String(C[0]),E=f(m(l(C.index),p.length),0),T=[],I=1;I<C.length;I++)T.push(b(C[I]));var O=C.groups;if(d){var P=[_].concat(T,E,p);void 0!==O&&P.push(O);var A=String(r.apply(void 0,P))}else A=y(_,p,E,T,O,r);E>=R&&(U+=p.slice(R,E)+A,R=E+_.length)}return U+p.slice(R)}];function y(e,o,r,n,s,l){var i=r+e.length,c=n.length,u=h;return void 0!==s&&(s=a(s),u=d),t.call(l,u,(function(t,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return o.slice(0,r);case"'":return o.slice(i);case"<":l=s[a.slice(1,-1)];break;default:var u=+a;if(0===u)return t;if(u>c){var f=p(u/10);return 0===f?t:f<=c?void 0===n[f-1]?a.charAt(1):n[f-1]+a.charAt(1):t}l=n[u-1]}return void 0===l?"":l}))}}))},6547:function(e,t,o){var r=o("a691"),n=o("1d80"),a=function(e){return function(t,o){var a,s,l=String(n(t)),i=r(o),c=l.length;return i<0||i>=c?e?"":void 0:(a=l.charCodeAt(i),a<55296||a>56319||i+1===c||(s=l.charCodeAt(i+1))<56320||s>57343?e?l.charAt(i):a:e?l.slice(i,i+2):s-56320+(a-55296<<10)+65536)}};e.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(e,t,o){"use strict";var r=o("6547").charAt;e.exports=function(e,t,o){return t+(o?r(e,t).length:1)}},9263:function(e,t,o){"use strict";var r=o("ad6d"),n=o("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,l=a,i=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=i||u||c;f&&(l=function(e){var t,o,n,l,f=this,m=c&&f.sticky,p=r.call(f),d=f.source,h=0,b=e;return m&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),b=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(d="(?: "+d+")",b=" "+b,h++),o=new RegExp("^(?:"+d+")",p)),u&&(o=new RegExp("^"+d+"$(?!\\s)",p)),i&&(t=f.lastIndex),n=a.call(m?o:f,b),m?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=f.lastIndex,f.lastIndex+=n[0].length):f.lastIndex=0:i&&n&&(f.lastIndex=f.global?n.index+n[0].length:t),u&&n&&n.length>1&&s.call(n[0],o,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(n[l]=void 0)})),n}),e.exports=l},"9f7f":function(e,t,o){"use strict";var r=o("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a640:function(e,t,o){"use strict";var r=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&r((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v(" 订阅转换 "),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px"}},[e._v(e._s(e.backendVersion))])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"120px","label-position":"left"}},[o("el-form-item",{attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持订阅或ss/ssr/vmess单链接。多个链接请每行一个或用 | 分隔"},on:{blur:e.saveSubUrl},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"客户端:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),1)],1),o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"包含节点:"}},[o("el-input",{attrs:{placeholder:"节点名包含的关键字，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"节点名不包含的关键字，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"输出文件名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"输出为 Node List",border:""},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Emoji"},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash New Field"},model:{value:e.form.new_name,callback:function(t){e.$set(e.form,"new_name",t)},expression:"form.new_name"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"启用 UDP"},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"过滤非法节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("更多选项")])],1),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:e.form.tpl.surge.doh,callback:function(t){e.$set(e.form.tpl.surge,"doh",t)},expression:"form.tpl.surge.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:e.form.tpl.clash.doh,callback:function(t){e.$set(e.form.tpl.clash,"doh",t)},expression:"form.tpl.clash.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"网易云"},model:{value:e.form.insert,callback:function(t){e.$set(e.form,"insert",t)},expression:"form.insert"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("定制功能")])],1)],1)],1)],1):e._e(),o("div",{staticStyle:{"margin-top":"50px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链接:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("生成短链接")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("上传配置")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"700px"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[o("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("参考配置")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"10000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("确 定")])],1)],1)],1)},n=[],a=(o("4de4"),o("c975"),o("b64b"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),"https://775555.xyz/wp-admin/admin.php?page=highwaypro"),s="https://raw.githubusercontent.com/vinzst/subconverter/master/base/config/example_external_config.ini",l="https://github.com/vinzst/subconverter/releases",i="https://sub.886600.xyz/sub?",c="https://suo.yt/short",u="https://api.886600.xyz/config/upload",f="https://tool.oschina.net/encrypt?type=3",m={data:function(){var e={backendVersion:"",advanced:"1",isPC:!0,options:{clientTypes:{"Clash新参数":"clash&new_name=true","ClashR新参数":"clashr&new_name=true",Clash:"clash",ClashR:"clashr",Surge2:"surge&ver=2",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan",QuantumultX:"quanx",Surfboard:"surfboard",Loon:"loon",ss:"ss",ssr:"ssr",ssd:"ssd",v2ray:"v2ray"},customBackend:{run:"https://sub.886600.xyz/sub?"},backendOptions:[{value:"https://sub.886600.xyz/sub?"}],remoteConfig:[{label:"默认",options:[{label:"不选,由接口提供方提供",value:""}]},{label:"run",options:[{label:"ACL4SSR_Online 默认版 分组比较全 (与Github同步)",value:"https://raw.githubusercontent.com/vinzst/mess/main/rule.ini"}]},{label:"universal",options:[{label:"No-Urltest",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/no-urltest.ini"},{label:"Urltest",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/universal/urltest.ini"}]},{label:"customized",options:[{label:"Maying",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/maying.ini"},{label:"rixCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/rixcloud.ini"},{label:"Nirvana",value:"https://raw.githubusercontent.com/Mazetsz/ACL4SSR/master/Clash/config/V2rayPro.ini"},{label:"V2Pro",value:"https://raw.githubusercontent.com/Mazeorz/airports/master/Clash/V2Pro.ini"},{label:"YoYu",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/yoyu.ini"},{label:"Ytoo",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ytoo.ini"},{label:"NyanCAT",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nyancat.ini"},{label:"Nexitally",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/nexitally.ini"},{label:"SoCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/socloud.ini"},{label:"ARK",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ark.ini"},{label:"ssrCloud",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/customized/ssrcloud.ini"}]},{label:"Special",options:[{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://subconverter.oss-ap-southeast-1.aliyuncs.com/Rules/RemoteConfig/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",remoteConfig:"",excludeRemarks:"官网|过期|流量|用户|域名|地址|最新||电报|游戏|10倍|3倍率|十倍|倍率X5|x10",includeRemarks:"",filename:"runrun",emoji:!0,nodeList:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,scv:!1,fdn:!0,appendType:!1,insert:!0,new_name:!0,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:f,sampleConfig:s},t=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(t){for(var o=e.options.remoteConfig[1].options,r=0;r<o.length;r++)o[r].label.length>10&&(o[r].label=o[r].label.replace(/\s.*/,""));for(var n={},a=Object.keys(e.options.customBackend),l=0;l<a.length;l++){var i=a[l].replace(/\(.*/,"");n[i]=e.options.customBackend[a[l]]}e.options.customBackend=n}return e},created:function(){document.title="在线订阅转换",this.isPC=this.$getOS().isPc,this.form.sourceSubUrl=this.getLocalStorageItem("sourceSubUrl")},mounted:function(){this.form.clientType="clash&new_name=true",this.form.customBackend="https://sub.886600.xyz/sub?",this.form.remoteConfig="https://raw.githubusercontent.com/vinzst/mess/main/rule.ini",this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(a)},gotoTgChannel:function(){window.open(f)},gotoGayhub:function(){window.open(l)},gotoRemoteConfig:function(){window.open(s)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},makeUrl:function(){var e=this;if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var t=""===this.form.customBackend?i:this.form.customBackend,o=""===this.form.remoteConfig?"":this.form.remoteConfig,r=this.form.sourceSubUrl;if(r=r.replace(/(\n|\r|\n\r)/g,"|"),-1!==r.indexOf("losadhwse")&&(-1!==t.indexOf("py6.pw")||-1!==t.indexOf("subconverter-web.now.sh")||-1!==t.indexOf("subconverter.herokuapp.com")||-1!==t.indexOf("api.wcc.best")))return this.$alert("此机场订阅已将该后端屏蔽，请自建后端转换。","转换错误提示",{confirmButtonText:"确定",callback:function(t){e.$message({type:"error",message:"action: ".concat(t)})}}),!1;this.customSubUrl=t+"target="+this.form.clientType+"&url="+encodeURIComponent(r)+"&insert="+this.form.insert,""!==o&&(this.customSubUrl+="&config="+encodeURIComponent(o)),"2"===this.advanced&&(""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&udp="+this.form.udp.toString()+"&tfo="+this.form.tfo.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString(),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;this.loading=!0;var t=new FormData;t.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(c,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("短链接已复制到剪贴板")):e.$message.error("短链接获取失败："+t.data.Message)})).catch((function(){e.$message.error("短链接获取失败")})).finally((function(){e.loading=!1}))},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.url?(e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),e.form.remoteConfig=t.data.Url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("远程配置上传失败："+t.data.Message)})).catch((function(){e.$message.error("远程配置上传失败")})).finally((function(){e.loading=!1}))},backendSearch:function(e,t){var o=this.options.backendOptions,r=e?o.filter(this.createFilter(e)):o;t(r)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(i.substring(0,i.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))},saveSubUrl:function(){""!==this.form.sourceSubUrl&&this.setLocalStorageItem("sourceSubUrl",this.form.sourceSubUrl)},getLocalStorageItem:function(e){var t=+new Date,o=localStorage.getItem(e),r="";if(null!==o){var n=JSON.parse(o);n.expire>t?r=n.value:localStorage.removeItem(e)}return r},setLocalStorageItem:function(e,t){var o="86400",r=+new Date,n={setTime:r,ttl:parseInt(o),expire:r+1e3*o,value:t};localStorage.setItem(e,JSON.stringify(n))}}},p=m,d=o("2877"),h=Object(d["a"])(p,r,n,!1,null,null,null);t["default"]=h.exports},ac1f:function(e,t,o){"use strict";var r=o("23e7"),n=o("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,o){"use strict";var r=o("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b64b:function(e,t,o){var r=o("23e7"),n=o("7b0b"),a=o("df75"),s=o("d039"),l=s((function(){a(1)}));r({target:"Object",stat:!0,forced:l},{keys:function(e){return a(n(e))}})},c975:function(e,t,o){"use strict";var r=o("23e7"),n=o("4d64").indexOf,a=o("a640"),s=o("ae40"),l=[].indexOf,i=!!l&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:i||!c||!u},{indexOf:function(e){return i?l.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,o){"use strict";o("ac1f");var r=o("6eeb"),n=o("d039"),a=o("b622"),s=o("9263"),l=o("9112"),i=a("species"),c=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),m=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));e.exports=function(e,t,o,f){var d=a(e),h=!n((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),b=h&&!n((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[i]=function(){return o},o.flags="",o[d]=/./[d]),o.exec=function(){return t=!0,null},o[d](""),!t}));if(!h||!b||"replace"===e&&(!c||!u||m)||"split"===e&&!p){var g=/./[d],v=o(d,""[e],(function(e,t,o,r,n){return t.exec===s?h&&!n?{done:!0,value:g.call(t,o,r)}:{done:!0,value:e.call(o,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:m}),x=v[0],y=v[1];r(String.prototype,e,x),r(RegExp.prototype,d,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}f&&l(RegExp.prototype[d],"sham",!0)}}}]);
//# sourceMappingURL=chunk-1ffacd5c.1abab53d.js.map