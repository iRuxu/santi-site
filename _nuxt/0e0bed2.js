(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,3,5,17,18],{411:function(t,e,n){t.exports=n.p+"img/logo.71a71eb.png"},412:function(t,e,n){t.exports=n.p+"img/icon-01.0b26a38.svg"},413:function(t,e,n){t.exports=n.p+"img/icon-02.75dd483.svg"},414:function(t,e,n){t.exports=n.p+"img/icon-03.cab46d7.svg"},415:function(t,e,n){t.exports=n.p+"img/icon-04.3be64a9.svg"},416:function(t){t.exports=JSON.parse('{"d":[{"name":"首页","link":"/index"},{"name":"算法商场","link":"/ai"},{"name":"核心产品","link":"/server"},{"name":"行业方案","link":"/programs"},{"name":"关于我们","link":"/about"}],"c":[{"title":"AI算法商城","desc":"打造丰富多样的算力模型，加速行业场景数字化升级","link":"","img":"index/ai.jpg"},{"title":"三体AI边缘计算盒","desc":"最大可支持32路摄像头接入，内置数十种AI算法","link":"","img":"index/box.jpg"},{"title":"让科技更简单<br/>让生活更智能","desc":"用突破性的技术，解决社会和商业中的棘手问题","link":"","img":"index/more.jpg"}],"a":{"box-1":[{"icon":"index/ai-01.svg","name":"AI视觉计算中枢"},{"icon":"index/ai-03.svg","name":"AI智能推理应用平台"}],"box-2":[{"icon":"index/ai.svg","name":"全栈AI技术"}],"box-3":[{"icon":"index/ai-02.svg","name":"AI智能自动训练平台"},{"icon":"index/ai-04.svg","name":"AI算法仓"}]},"b":[{"icon":"index/ai-05.svg","name":"AI训练服务器"},{"icon":"index/ai-06.svg","name":"前端摄像头"},{"icon":"index/ai-07.svg","name":"AI边缘智能终端"}],"f":{"title":"AI赋能行业","desc":"广泛应用于数据中心、电力行业、智慧社区、政务中心、能源化工等多个垂直领域","list":[{"title":"数据中心","desc":"烟火检测、杂物堆积检测、身份识别（非面部）、安全帽检测、脱岗检测、入侵检测、摔倒检测","link":"","bg":"index/i-bg-01.svg"},{"title":"电力行业","desc":"安全帽检测、工装检测、违规行为检测、烟火检测","link":"","bg":"index/i-bg-02.svg"},{"title":"智慧社区","desc":"消防通道检测、烟火检测、车辆违停检测、高空抛物检测、攀爬检测","link":"","bg":"index/i-bg-03.svg"},{"title":"政务中心","desc":"佩戴口罩检测、吸烟检测、玩手机检测、工作人员着装检测、跌倒检测、在岗人数检测、脱岗检测","link":"","bg":"index/i-bg-04.svg"}]},"g":{"title":"将AI智能科技普惠每个人，为各行业的合作伙伴提供了巨大的商业空间","desc":"欢迎入驻三体科技平台，与我们一起共建AI智能生态系统"},"e":["7*24小时服务","精选优质服务商","官方安全检测","售后无忧退订"]}')},546:function(t,e,n){"use strict";var c=n(2),r=n(551);c({target:"String",proto:!0,forced:n(552)("link")},{link:function(t){return r(this,"a","href",t)}})},547:function(t,e,n){},548:function(t,e,n){},549:function(t,e,n){},550:function(t,e,n){},551:function(t,e,n){var c=n(4),r=n(24),o=n(13),l=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var v=o(r(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+d(o(c),l,"&quot;")+'"'),f+">"+v+"</"+e+">"}},552:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},553:function(t,e,n){},554:function(t,e,n){"use strict";n(547)},555:function(t,e,n){"use strict";n(548)},556:function(t,e,n){"use strict";n(549)},557:function(t,e,n){var map={"./icon-01.svg":412,"./icon-02.svg":413,"./icon-03.svg":414,"./icon-04.svg":415};function c(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=r,t.exports=c,c.id=557},558:function(t,e,n){"use strict";n(550)},559:function(t,e,n){"use strict";n.r(e);n(546),n(37);var c=[function(){var t=this._self._c;return t("a",{staticClass:"logo",attrs:{href:"http://",target:"_blank"}},[t("img",{attrs:{src:n(411)}})])}],r=n(416),o={data:function(){return{header:r.d}}},l=(n(554),n(58)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[t._m(0),t._v(" "),e("div",{staticClass:"links"},t._l(t.header,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.link,target:"_blank"}},[t._v("\n                "+t._s(n.name)+"\n            ")])})),0)])])}),c,!1,null,null,null);e.default=component.exports},560:function(t,e,n){"use strict";n.r(e);n(546);var c=n(416),r={data:function(){return{carousel:c.c}},methods:{changeHandle:function(){}}},o=(n(555),n(58)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index-carousel"},[e("el-carousel",{attrs:{autoplay:!0},on:{change:t.changeHandle}},t._l(t.carousel,(function(n,i){return e("el-carousel-item",{key:i},[e("a",{staticClass:"u-link",class:"u-link-".concat(i+1),attrs:{href:n.link,target:"_blank"}},[e("div",{staticClass:"box wp"},[e("span",{staticClass:"title",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("span",{staticClass:"desc"},[t._v(t._s(n.desc))]),t._v(" "),e("span",{staticClass:"button"},[t._v("查看更多")])])])])})),1)],1)}),[],!1,null,null,null);e.default=component.exports},561:function(t,e,n){"use strict";n.r(e);var c={props:["data"]},r=(n(556),n(58)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item-title"},[e("div",{staticClass:"wp"},[e("span",{staticClass:"title"},[t._v(t._s(t.data.title))]),t._v(" "),t.data.desc?e("span",{staticClass:"desc"},[t._v(t._s(t.data.desc))]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},562:function(t,e,n){"use strict";n.r(e);var c=n(416),r={data:function(){return{icon:c.e}}},o=(n(558),n(58)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"icons"},[e("div",{staticClass:"wp"},t._l(t.icon,(function(c,i){return e("div",{key:i,staticClass:"item"},[e("img",{staticClass:"icon",attrs:{src:n(557)("./icon-0".concat(i+1,".svg"))}}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(c))])])})),0)]),t._v(" "),e("div",{staticClass:"content wp"})])}),[],!1,null,null,null);e.default=component.exports},563:function(t,e,n){var c=n(2),r=n(262).values;c({target:"Object",stat:!0},{values:function(t){return r(t)}})},564:function(t,e,n){"use strict";n(553)},565:function(t,e,n){"use strict";n.r(e);var c={props:["data","active","background"],emits:["update"],methods:{change:function(t){this.$emit("update",t)}}},r=(n(564),n(58)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item-tabs",class:{background:t.background}},[e("div",{staticClass:"tabs wp"},t._l(t.data,(function(n){return e("span",{key:n,staticClass:"item",class:{active:t.active==n},on:{click:function(e){return t.change(n)}}},[t._v("\n            "+t._s(n)+"\n        ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},580:function(t,e,n){},602:function(t){t.exports=JSON.parse('{"info":{"title":"产品介绍","label":"三体AI边缘计算服务器","desc":"三体AI边缘计算服务器可搭载30颗TPU芯片BM1684，INT8算力高达528TOPS，支持28800fps 1080P高清视频硬件解码与1500fps 1080P高清视频硬件编码。"},"figure":{"title":"产品图例","list":["server/figure-01.svg","server/figure-02.svg"]},"core":{"title":"功能优势","list":[{"icon":"server/core-01.svg","title":"强劲算力","desc":"支持高达528TOPS的INT8算力或66TFLOPS的FP32算力。"},{"icon":"server/core-02.svg","title":"超强性能","desc":"960路高清视频硬件解码能力、60路高清视频硬件编码能力，视频及图片解码分辨率高达 8K 以上。"},{"icon":"server/core-03.svg","title":"拓展灵活","desc":"存储支持8个2.5”前置热插拔硬盘槽位，10个PCIE3.0扩展槽位，8个DDR4内存槽位，最大容量支持1TB。"},{"icon":"server/core-04.svg","title":"兼容性强","desc":"AMD EPYC X86处理器平台，支持RESTful/IPMI管理接口。"}]},"scenes":{"title":"应用场景","list":[{"bg":"server/scenes-01.svg","direction":"left","label":"应用广泛、场景丰富","desc":"适配众多合作伙伴多种智能算法，完美支持人脸识别、车辆识别、物品识别、视频结构化、行为分析等智能分析应用"},{"bg":"server/scenes-02.svg","direction":"right","label":"易用便捷、全栈高效","desc":"一站式工具包，提供底层驱动环境、编译器、推理部署工具等一系列软件工具。易用便捷，涵盖了神经网络推理阶段所需的模型优化、高效运行时支持等能力，为深度学习应用开发和部署提供易用、高效的全栈式解决方案。最大程度降低算法和软件的开发周期和成本，使用者能快速在算丰各系列AI硬件产品上部署深度学习算法，便捷实现智能应用"}]}}')},603:function(t,e,n){"use strict";n(580)},619:function(t,e,n){"use strict";n.r(e);n(59),n(563);var c=n(602),r={name:"IndexServer",data:function(){return{server:c,active:"",scenes:""}},computed:{tabs:function(){return Object.values(this.server).map((function(t){return t.title}))}},methods:{update:function(t){this.active=t;var e="";for(var n in this.server)this.server[n].title==t&&(e=n);document.getElementById(e).scrollIntoView()},showModal:function(t){return{info:"page-info",figure:"page-figure",core:"page-core",scenes:"page-appliance"}[t]}},mounted:function(){this.active=this.tabs[0]}},o=(n(603),n(58)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-server"},[e("common-header"),t._v(" "),e("client-only",[e("index-carousel"),t._v(" "),e("page-tabs",{attrs:{data:t.tabs,active:t.active},on:{update:t.update}}),t._v(" "),t._l(t.server,(function(n,c){return e("div",{key:c,attrs:{id:c}},[e("page-title",{attrs:{data:{title:n.title}}}),t._v(" "),n.list?[e("div",{staticClass:"m-content wp"},t._l(n.list,(function(n,i){return e(t.showModal(c),{key:i,tag:"component",attrs:{data:n}})})),1)]:e(t.showModal(c),{tag:"component",attrs:{data:n}})],2)}))],2),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(559).default,IndexCarousel:n(560).default,PageTabs:n(565).default,PageTitle:n(561).default,CommonFooter:n(562).default})}}]);