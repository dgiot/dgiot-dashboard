/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2022年06月22日16时14分48秒
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2db5d34c"],{"0a22":function(t,e,s){},"8cdb":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"error-container"},[i("div",{staticClass:"error-content"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{lg:12,md:12,sm:24,xl:12,xs:24}},[i("div",{staticClass:"pic-error"},[i("el-image",{staticClass:"pic-error-parent",attrs:{src:s("a81b")}}),i("el-image",{staticClass:"pic-error-child left",attrs:{src:s("a81b")}})],1)]),i("el-col",{attrs:{lg:12,md:12,sm:24,xl:12,xs:24}},[i("div",{staticClass:"bullshit"},[i("div",{staticClass:"bullshit-oops"},[t._v(" "+t._s(t.oops)+" ")]),i("div",{staticClass:"bullshit-headline"},[t._v(" "+t._s(t.headline)+" ")]),i("div",{staticClass:"bullshit-info"},[t._v(" "+t._s(t.info)+" ")]),i("el-button",{staticStyle:{float:"left"},attrs:{round:"",size:"medium",type:"primary"},on:{click:t.back}},[t._v(" "+t._s(t.$translateTitle("message.return to previous page"))+" ")]),i("router-link",{staticClass:"bullshit-return-home",attrs:{to:"/"}},[t._v(" "+t._s(t.$translateTitle("message.Exit home"))+" ")]),i("el-button",{staticStyle:{"margin-left":"20px"},attrs:{round:"",size:"medium",type:"primary"},on:{click:t.logout}},[t._v(" "+t._s(t.$translateTitle("message.sign out"))+" ")])],1)])],1)],1)])},r=[],a=s("5880"),o=s("1e51"),l=Object.defineProperty,n=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(t,e,s)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,h=(t,e)=>{for(var s in e||(e={}))p.call(e,s)&&m(t,s,e[s]);if(c)for(var s of c(e))d.call(e,s)&&m(t,s,e[s]);return t},b=(t,e)=>n(t,u(e)),v=(t,e,s)=>new Promise((i,r)=>{var a=t=>{try{l(s.next(t))}catch(e){r(e)}},o=t=>{try{l(s.throw(t))}catch(e){r(e)}},l=t=>t.done?i(t.value):Promise.resolve(t.value).then(a,o);l((s=s.apply(t,e)).next())}),g={name:"Page404",beforeRouteLeave(t,e,s){this.delVisitedRoute(this.$route.path),clearInterval(this.timer),s()},data(){return{jumpTime:5,oops:"抱歉!",headline:"当前页面不存在...",info:"请检查您输入的网址是否正确，或点击下面的按钮返回首页。",btn:"返回首页",timer:0}},computed:h({},Object(a["mapGetters"])({visitedRoutes:"tabs/visitedRoutes",objectId:"user/objectId"})),mounted(){},methods:b(h({},Object(a["mapActions"])({delVisitedRoute:"tabs/delVisitedRoute",_logout:"user/logout"})),{timeChange(){this.timer=setInterval(()=>{this.jumpTime?this.jumpTime--:(this.delVisitedRoute(this.$route.path),this.$router.push("/"),clearInterval(this.timer))},1e3)},logout(){return v(this,null,(function*(){yield this._logout(),yield this.$router.push(Object(o["toLoginRoute"])(this.$route))}))},back(){return v(this,null,(function*(){yield this.$router.go(-1)}))}})},f=g,y=(s("aea7"),s("2877")),_=Object(y["a"])(f,i,r,!1,null,"e3165680",null);e["default"]=_.exports},a81b:function(t,e,s){t.exports=s.p+"static/img/404.e51b09c3.png"},aea7:function(t,e,s){"use strict";s("0a22")}}]);