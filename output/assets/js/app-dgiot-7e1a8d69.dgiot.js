/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2021-12-31 11:18:57
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app-dgiot-7e1a8d69"],{"19af":function(e,t,n){var o={"./FRender.js":"d82d","./amis.js":"5030","./beFull.js":"d463","./dgiot.js":"59ab7","./directive.js":"3f21","./drag.js":"7062","./driver.js":"9d39","./element.js":"73b5","./errorLog.js":"f46a","./permissions.js":"2576","./support.js":"a7e8","./vue-audio-visual.js":"5b72"};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}c.keys=function(){return Object.keys(o)},c.resolve=r,e.exports=c,c.id="19af"},2576:function(e,t,n){"use strict";n.r(t);var o=n("e97b"),c=n("fb07"),r=n("d0d7"),u=n.n(r),s=(n("f764"),n("5662"),n("a18c")),i=n("4360"),a=n("1af2"),l=n.n(a),d=n("bcc7"),f=n("1e51"),p=n("f121");l.a.configure({easing:"ease",speed:500,trickleSpeed:200,showSpinner:!1}),s["default"].beforeEach(function(){var e=Object(c["a"])(u.a.mark((function e(t,n,c){var r,s;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i["default"].dispatch("routes/setRoutesOpenTime",{router:t.meta.component,timestamp:moment(new Date).valueOf()}),r=i["default"].getters["settings/theme"].showProgressBar,r&&l.a.start(),s=i["default"].getters["user/token"],p["loginInterception"]||(s=!0),!s){e.next=29;break}if(!i["default"].getters["routes/routes"].length){e.next=10;break}"/login"===t.path?(c({path:"/dashboard"}),r&&l.a.done()):c(),e.next=27;break;case 10:if(e.prev=10,!p["loginInterception"]){e.next=14;break}e.next=16;break;case 14:return e.next=16,i["default"].dispatch("user/setVirtualRoles");case 16:return e.next=18,i["default"].dispatch("routes/setRoutes",p["authentication"]);case 18:c(Object(o["a"])(Object(o["a"])({},t),{},{replace:!0})),e.next=27;break;case 21:return e.prev=21,e.t0=e["catch"](10),dgiotlog.warn("错误拦截:",e.t0),e.next=26,i["default"].dispatch("user/resetAll");case 26:c(Object(f["toLoginRoute"])(t));case 27:e.next=40;break;case 29:if(!p["routesWhiteList"].includes(t.path)){e.next=39;break}if(!p["supportVisit"]||i["default"].getters["routes/routes"].length){e.next=36;break}return e.next=33,i["default"].dispatch("routes/setRoutes","visit");case 33:c(Object(o["a"])(Object(o["a"])({},t),{},{replace:!0})),e.next=37;break;case 36:c();case 37:e.next=40;break;case 39:c(Object(f["toLoginRoute"])(t));case 40:case"end":return e.stop()}}),e,null,[[10,21]])})));return function(t,n,o){return e.apply(this,arguments)}}()),s["default"].afterEach((function(e){var t;e.meta&&e.meta.title?(t=e.meta.component,document.title=Object(d["default"])("".concat(e.meta.title))):t=e,_.isPlainObject(t)||dgiotlog.getDgiotlog("src/dgiot/plugins/permissions.js").info("router ->",t),dgiot.router=t,l.a.status&&l.a.done()}))},"3f21":function(e,t,n){"use strict";n.r(t);n("f764"),n("5662"),n("1d17"),n("98da"),n("f1e1"),n("b037");var o=n("b0a0");Vue.directive("permissions",{inserted:function(e,t){var n=t.value;n&&(Object(o["hasAccess"])(n)||e.parentNode&&e.parentNode.removeChild(e))}}),Vue.directive("drag-dialog",{inserted:function(e,t,n){var o=e.querySelector(".el-dialog__header"),c=e.querySelector(".el-dialog");o.style.cssText+=";cursor:move;",c.style.cssText+=";top:0px;";var r=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();o.onmousedown=function(e){var t=e.clientX-o.offsetLeft,n=e.clientY-o.offsetTop,u=c.offsetWidth,s=c.offsetHeight,i=document.body.clientWidth,a=document.body.clientHeight,l=c.offsetLeft,d=i-c.offsetLeft-u,f=c.offsetTop,p=a-c.offsetTop-s,g=r(c,"left"),m=r(c,"top");g.includes("%")?(g=+document.body.clientWidth*(+g.replace(/\%/g,"")/100),m=+document.body.clientHeight*(+m.replace(/\%/g,"")/100)):(g=+g.replace(/\px/g,""),m=+m.replace(/\px/g,"")),document.onmousemove=function(e){var o=e.clientX-t,r=e.clientY-n;-o>l?o=-l:o>d&&(o=d),-r>f?r=-f:r>p&&(r=p),c.style.cssText+=";left:".concat(o+g,"px;top:").concat(r+m,"px;")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}}),Vue.directive("drag",{bind:function(e,t,n){if(e.querySelector(".el-dialog__header")&&e.querySelector(".el-dialog")){var o=e.querySelector(".el-dialog__header"),c=e.querySelector(".el-dialog");o.style.cssText+=";cursor:move;",c.style.cssText+=";top:0;";var r=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,null)[t]}}();o.onmousedown=function(e){var t=e.clientX-o.offsetLeft,u=e.clientY-o.offsetTop,s=c.offsetWidth,i=c.offsetHeight,a=document.body.clientWidth,l=document.body.clientHeight,d=c.offsetLeft,f=a-c.offsetLeft-s,p=c.offsetTop,g=l-c.offsetTop-i,m=r(c,"left"),b=r(c,"top");m.includes("%")?(m=+document.body.clientWidth*(+m/100),b=+document.body.clientHeight*(+b/100)):(m=+m.slice(0,-2),b=+b.slice(0,-2)),document.onmousemove=function(e){var o=e.clientX-t,r=e.clientY-u;-o>d?o=-d:o>f&&(o=f),-r>p?r=-p:r>g&&(r=g),c.style.cssText+=";left:".concat(o+m,"px;top:").concat(r+b,"px;"),n.child.$emit("drag-dialog")},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}}}})},5030:function(e,t,n){"use strict";n.r(t);n("c3b8"),n("cd7d"),n("8b05");var o=n("796d");window.qs=o},"59ab7":function(e,t,n){"use strict";n.r(t);var o=n("f121"),c=n("4208"),r=n("4360"),u=n("5d7c"),s=n("12cb"),i=r["default"].getters["user/token"],a=(r["default"].getters["settings/language"],s["default"].t("vabI18n.".concat("developer.Data is loading")));Vue.prototype.$baseToken=function(){return i||Object(u["getToken"])()},Vue.prototype.$baseLoading=function(e,t){var n;return n=e?c["Loading"].service({lock:!0,text:t||a,spinner:"vab-loading-type"+e,background:"hsla(0,0%,100%,0.8)"}):c["Loading"].service({lock:!0,text:t||a,background:"hsla(0,0%,100%,.8)"}),n},Vue.prototype.$baseColorfullLoading=function(e,t){var n;if(e){switch(e){case 1:e="dots";break;case 2:e="gauge";break;case 3:e="inner-circles";break;case 4:e="plus";break}n=c["Loading"].service({lock:!0,text:t||a,spinner:e+"-loader",background:"hsla(0,0%,100%,.8)"})}else n=c["Loading"].service({lock:!0,text:t||a,spinner:"dots-loader",background:"hsla(0,0%,100%,.8)"});return n},Vue.prototype.$baseMessage=function(e,t,n,r){Object(c["Message"])({showClose:!0,message:e,type:t,dangerouslyUseHTMLString:n,duration:o["messageDuration"],customClass:r})},Vue.prototype.$baseAlert=function(e,t,n){c["MessageBox"].alert(e,t||"温馨提示",{confirmButtonText:"确定",dangerouslyUseHTMLString:!0,callback:function(){n&&n()}}).then((function(){}))},Vue.prototype.$baseConfirm=function(e,t,n,o,r,u){c["MessageBox"].confirm(e,t||"温馨提示",{confirmButtonText:r||"确定",cancelButtonText:u||"取消",closeOnClickModal:!1,type:"warning",lockScroll:!1}).then((function(){n&&n()})).catch((function(){o&&o()}))},Vue.prototype.$baseNotify=function(e,t,n,r,u){Object(c["Notification"])({title:t,message:e,position:r||"top-right",type:n||"success",duration:u||o["messageDuration"]})},Vue.prototype.$baseTableHeight=function(e){},Vue.prototype.$baseEventBus=new Vue},"5b72":function(e,t,n){"use strict";n.r(t);var o=n("8ac7");Vue.use(o["a"])},7062:function(e,t,n){"use strict";n.r(t);n("f764"),n("5662"),n("1d17"),n("98da"),n("f1e1");t["default"]={bind:function(e,t,n){var o=e.querySelector(".el-dialog__header"),c=e.querySelector(".el-dialog");o.style.cssText+=";cursor:move;",c.style.cssText+=";top:0px;";var r=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();o.onmousedown=function(e){var t=e.clientX-o.offsetLeft,u=e.clientY-o.offsetTop,s=c.offsetWidth,i=c.offsetHeight,a=document.body.clientWidth,l=document.body.clientHeight,d=c.offsetLeft,f=a-c.offsetLeft-s,p=c.offsetTop,g=l-c.offsetTop-i,m=r(c,"left"),b=r(c,"top");m.includes("%")?(m=+document.body.clientWidth*(+m.replace(/\%/g,"")/100),b=+document.body.clientHeight*(+b.replace(/\%/g,"")/100)):(m=+m.replace(/\px/g,""),b=+b.replace(/\px/g,"")),document.onmousemove=function(e){var o=e.clientX-t,r=e.clientY-u;-o>d?o=-d:o>f&&(o=f),-r>p?r=-p:r>g&&(r=g),c.style.cssText+=";left:".concat(o+m,"px;top:").concat(r+b,"px;"),n.child.$emit("dragDialog")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}}},"73b5":function(e,t,n){"use strict";n.r(t);n("16b8");var o=n("4208"),c=n.n(o),r=(n("6693"),n("ede3"),n("12cb")),u=(n("44e4"),n("8a4c")),s=n.n(u);Vue.component(s.a.name,s.a),Vue.use(c.a,{size:"small",i18n:function(e,t){return r["default"].t(e,t)}})},"9d39":function(e,t,n){"use strict";n.r(t);var o=n("b730"),c=n.n(o);n("f90c");Vue.prototype.$Driver=c.a},a55b:function(e,t,n){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},a7e8:function(e,t,n){"use strict";n.r(t);var o=n("4208"),c=n("f121");(window.ActiveXObject||"ActiveXObject"in window)&&Object(o["MessageBox"])({title:"温馨提示",message:'检测到您当前浏览器使用的是IE内核，自2015年3月起，微软已宣布弃用IE，且不再对IE提供任何更新维护，请<a target="_blank" style="color:blue" href="https://www.microsoft.com/zh-cn/edge/">点击此处</a>访问微软官网更新浏览器，如果您使用的是双核浏览器,请您切换浏览器内核为极速模式',type:"warning",showClose:!0,showConfirmButton:!1,closeOnClickModal:!1,closeOnPressEscape:!1,closeOnHashChange:!1,dangerouslyUseHTMLString:!0}),dgiotlog.log(" %c ".concat(c["title"],"  %c 基于dgiot构建 "),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;")},d463:function(e,t){function n(e){function t(e){if(e.requestFullscreen)e.requestFullscreen();else if(e.mozRequestFullScreen)e.mozRequestFullScreen();else if(e.webkitRequestFullScreen)e.webkitRequestFullScreen();else{if(!e.msRequestFullScreen)return alert("当前浏览器不支持全屏，请更换浏览器"),!1;e.msRequestFullScreen()}}return t(document.getElementById("".concat(e)))}function o(e){function t(e){if(dgiotlog.log("exitFullscreen",e),document.exitFullscreen)document.exitFullscreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();else{if(!document.msExitFullscreen)return alert("当前浏览器不支持全屏，请更换浏览器"),!1;document.msExitFullscreen()}}return t(document.getElementById("".concat(e)))}Vue.prototype.$beFull=n,Vue.prototype.$exitFull=o},d82d:function(e,t){},f46a:function(e,t,n){"use strict";n.r(t);n("f764"),n("5662");var o=n("4360"),c=n("28d7"),r=n("f121"),u=r["errorLog"],s=function(){var e="production";return Object(c["isString"])(u)?e===u:!!Object(c["isArray"])(u)&&u.includes(e)};s()&&(Vue.config.errorHandler=function(e,t,n){dgiotlog.warn("错误拦截:",e,t,n);var c=window.location.href;Vue.nextTick((function(){o["default"].dispatch("errorLog/addErrorLog",{err:e,vm:t,info:n,url:c}).then((function(){}))}))})}}]);