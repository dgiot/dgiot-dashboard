/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2022年06月27日16时34分24秒
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25e40988"],{"00a5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"error-container"},[i("div",{staticClass:"error-content"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{lg:12,md:12,sm:24,xl:12,xs:24}},[i("div",{staticClass:"pic-error"},[i("el-image",{staticClass:"pic-error-parent",attrs:{src:s("b8e1")}}),i("el-image",{staticClass:"pic-error-child left",attrs:{src:s("b8e1")}})],1)]),i("el-col",{attrs:{lg:12,md:12,sm:24,xl:12,xs:24}},[i("div",{staticClass:"bullshit"},[i("div",{staticClass:"bullshit-oops"},[t._v(" "+t._s(t.oops)+" ")]),i("div",{staticClass:"bullshit-headline"},[t._v(" "+t._s(t.headline)+" ")]),i("div",{staticClass:"bullshit-info"},[t._v(" "+t._s(t.info)+" ")]),i("router-link",{staticClass:"bullshit-return-home",attrs:{to:"/"}},[t._v(" "+t._s(t.jumpTime)+"s "+t._s(t.btn)+" ")])],1)])],1)],1)])},r=[],a=s("5880"),o=Object.defineProperty,l=Object.defineProperties,n=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,s)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,m=(t,e)=>{for(var s in e||(e={}))u.call(e,s)&&d(t,s,e[s]);if(c)for(var s of c(e))p.call(e,s)&&d(t,s,e[s]);return t},b=(t,e)=>l(t,n(e)),h={name:"Page403",beforeRouteLeave(t,e,s){this.delVisitedRoute(this.$route.path),clearInterval(this.timer),s()},data(){return{jumpTime:5,oops:"抱歉!",headline:"您没有操作角色...",info:"当前帐号没有操作角色,请联系管理员。",btn:"返回",timer:0}},computed:m({},Object(a["mapGetters"])({visitedRoutes:"tabs/visitedRoutes"})),mounted(){this.timeChange()},methods:b(m({},Object(a["mapActions"])({delVisitedRoute:"tabs/delVisitedRoute"})),{timeChange(){this.timer=setInterval(()=>{this.jumpTime?this.jumpTime--:(this.delVisitedRoute(this.$route.path),this.$router.push("/"),clearInterval(this.timer))},1e3)}})},f=h,v=(s("19ff"),s("2877")),g=Object(v["a"])(f,i,r,!1,null,"a5ed6aba",null);e["default"]=g.exports},"19ff":function(t,e,s){"use strict";s("755c")},"755c":function(t,e,s){},b8e1:function(t,e,s){t.exports=s.p+"static/img/403.0c7b2e18.png"}}]);