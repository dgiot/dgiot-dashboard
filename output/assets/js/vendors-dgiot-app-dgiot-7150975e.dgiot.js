/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2021-12-31 17:03:49
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendors-dgiot-app-dgiot-7150975e"],{"0496":function(t,e,n){var r=function(){var t=function(t,e,n,r){for(n=n||{},r=t.length;r--;n[t[r]]=e);return n},e=[1,13],n=[1,14],r=[1,15],i=[1,16],s=[1,17],o=[1,18],a=[1,19],l=[1,20],c=[5,17,21,26],h=[5,17,21,26,30],u=[5,7,9,10,12,14,16,17,21,22,25,26,30],f=[17,21],y=[21,26],p={trace:function(){},yy:{},symbols_:{error:2,json_document:3,json_document_body:4,EOF:5,json_null_literal:6,NULLTOKEN:7,json_boolean_literal:8,TRUETOKEN:9,FALSETOKEN:10,json_string:11,STRING_LITERAL:12,json_number:13,NUMBER_LITERAL:14,json_object:15,"{":16,"}":17,json_comments:18,json_member_list:19,json_member:20,",":21,":":22,json_with_comments_value:23,json_array:24,"[":25,"]":26,json_element_list:27,json_value:28,json_comment:29,COMMENTS:30,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",7:"NULLTOKEN",9:"TRUETOKEN",10:"FALSETOKEN",12:"STRING_LITERAL",14:"NUMBER_LITERAL",16:"{",17:"}",21:",",22:":",25:"[",26:"]",30:"COMMENTS"},productions_:[0,[3,2],[6,1],[8,1],[8,1],[11,1],[13,1],[15,2],[15,3],[15,3],[19,1],[19,3],[20,3],[20,4],[20,4],[20,5],[24,2],[24,3],[24,3],[27,1],[27,3],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[29,1],[18,1],[18,2],[23,1],[23,2],[23,2],[23,3],[4,1]],performAction:function(t,e,n,r,i,s,o){var a=s.length-1;switch(i){case 1:return{type:"document",body:s[a-1],range:m(n,t)};case 2:this.$={type:"null",value:null,range:m(n,t)};break;case 3:this.$={type:"boolean",value:!0,range:m(n,t)};break;case 4:this.$={type:"boolean",value:!1,range:m(n,t)};break;case 5:this.$={type:"string",value:g(s[a].substring(1,s[a].length-1),s[a].substring(0,1)),range:m(n,t)};break;case 6:this.$={type:"number",value:/\./.test(s[a])?parseFloat(s[a]):parseInt(s[a],10),raw:s[a],range:m(n,t)};break;case 7:this.$={type:"object",members:[],range:m(n,t)};break;case 8:case 9:this.$={type:"object",members:s[a-1],range:m(n,t)};break;case 10:this.$=[s[a]];break;case 11:case 20:this.$=s[a-2].concat(s[a]);break;case 12:this.$={type:"property",key:[s[a-2]],value:s[a],range:m(n,t)};break;case 13:this.$={type:"property",key:s[a-3].concat(s[a-2]),value:s[a],range:m(n,t)};break;case 14:this.$={type:"property",key:[s[a-3]].concat(s[a-2]),value:s[a],range:m(n,t)};break;case 15:this.$={type:"property",key:s[a-4].concat(s[a-3]).concat(s[a-2]),value:s[a],range:m(n,t)};break;case 16:this.$={type:"array",members:[],range:m(n,t)};break;case 17:case 18:this.$={type:"array",members:s[a-1],range:m(n,t)};break;case 19:this.$=s[a];break;case 27:this.$={type:"comment",value:s[a],range:m(n,t)};break;case 28:case 30:this.$=[s[a]];break;case 29:case 31:this.$=s[a-1].concat(s[a]);break;case 32:this.$=[s[a-1]].concat(s[a]);break;case 33:this.$=s[a-2].concat(s[a-1]).concat(s[a]);break;case 34:this.$=s[a];break}},table:[{3:1,4:2,6:6,7:e,8:7,9:n,10:r,11:8,12:i,13:9,14:s,15:10,16:o,18:5,23:3,24:11,25:a,28:4,29:12,30:l},{1:[3]},{5:[1,21]},{5:[2,34]},t(c,[2,30],{29:12,18:22,30:l}),{6:6,7:e,8:7,9:n,10:r,11:8,12:i,13:9,14:s,15:10,16:o,24:11,25:a,28:23,29:24,30:l},t(h,[2,21]),t(h,[2,22]),t(h,[2,23]),t(h,[2,24]),t(h,[2,25]),t(h,[2,26]),t(u,[2,28]),t(h,[2,2]),t(h,[2,3]),t(h,[2,4]),t([5,17,21,22,26,30],[2,5]),t(h,[2,6]),{11:29,12:i,17:[1,25],18:26,19:27,20:28,29:12,30:l},{6:6,7:e,8:7,9:n,10:r,11:8,12:i,13:9,14:s,15:10,16:o,18:32,23:33,24:11,25:a,26:[1,30],27:31,28:4,29:12,30:l},t(u,[2,27]),{1:[2,1]},t(c,[2,32],{29:24,30:l}),t(c,[2,31],{29:12,18:34,30:l}),t(u,[2,29]),t(h,[2,7]),{11:36,12:i,17:[1,35],29:24,30:l},{17:[1,37],21:[1,38]},t(f,[2,10]),{18:40,22:[1,39],29:12,30:l},t(h,[2,16]),{21:[1,42],26:[1,41]},{6:6,7:e,8:7,9:n,10:r,11:8,12:i,13:9,14:s,15:10,16:o,24:11,25:a,26:[1,43],28:23,29:24,30:l},t(y,[2,19]),t(c,[2,33],{29:24,30:l}),t(h,[2,8]),{18:45,22:[1,44],29:12,30:l},t(h,[2,9]),{11:29,12:i,18:47,20:46,29:12,30:l},{6:6,7:e,8:7,9:n,10:r,11:8,12:i,13:9,14:s,15:10,16:o,18:5,23:48,24:11,25:a,28:4,29:12,30:l},{22:[1,49],29:24,30:l},t(h,[2,17]),{6:6,7:e,8:7,9:n,10:r,11:8,12:i,13:9,14:s,15:10,16:o,18:5,23:50,24:11,25:a,28:4,29:12,30:l},t(h,[2,18]),{6:6,7:e,8:7,9:n,10:r,11:8,12:i,13:9,14:s,15:10,16:o,18:5,23:51,24:11,25:a,28:4,29:12,30:l},{22:[1,52],29:24,30:l},t(f,[2,11]),{11:36,12:i,29:24,30:l},t(f,[2,12]),{6:6,7:e,8:7,9:n,10:r,11:8,12:i,13:9,14:s,15:10,16:o,18:5,23:53,24:11,25:a,28:4,29:12,30:l},t(y,[2,20]),t(f,[2,13]),{6:6,7:e,8:7,9:n,10:r,11:8,12:i,13:9,14:s,15:10,16:o,18:5,23:54,24:11,25:a,28:4,29:12,30:l},t(f,[2,14]),t(f,[2,15])],defaultActions:{3:[2,34],21:[2,1]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],r=[null],i=[],s=this.table,o="",a=0,l=0,c=0,h=2,u=1,f=i.slice.call(arguments,1),y=Object.create(this.lexer),p={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(p.yy[g]=this.yy[g]);y.setInput(t,p.yy),p.yy.lexer=y,p.yy.parser=this,"undefined"==typeof y.yylloc&&(y.yylloc={});var m=y.yylloc;i.push(m);var v=y.options&&y.options.ranges;"function"===typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;var d,b,_,$,k,E,w,j,x,L=function(){var t;return t=y.lex()||u,"number"!==typeof t&&(t=e.symbols_[t]||t),t},S={};while(1){if(_=n[n.length-1],this.defaultActions[_]?$=this.defaultActions[_]:(null!==d&&"undefined"!=typeof d||(d=L()),$=s[_]&&s[_][d]),"undefined"===typeof $||!$.length||!$[0]){var I="";for(E in x=[],s[_])this.terminals_[E]&&E>h&&x.push("'"+this.terminals_[E]+"'");I=y.showPosition?"Parse error on line "+(a+1)+":\n"+y.showPosition()+"\nExpecting "+x.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(a+1)+": Unexpected "+(d==u?"end of input":"'"+(this.terminals_[d]||d)+"'"),this.parseError(I,{text:y.match,token:this.terminals_[d]||d,line:y.yylineno,loc:m,expected:x})}if($[0]instanceof Array&&$.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+d);switch($[0]){case 1:n.push(d),r.push(y.yytext),i.push(y.yylloc),n.push($[1]),d=null,b?(d=b,b=null):(l=y.yyleng,o=y.yytext,a=y.yylineno,m=y.yylloc,c>0&&c--);break;case 2:if(w=this.productions_[$[1]][1],S.$=r[r.length-w],S._$={first_line:i[i.length-(w||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(w||1)].first_column,last_column:i[i.length-1].last_column},v&&(S._$.range=[i[i.length-(w||1)].range[0],i[i.length-1].range[1]]),k=this.performAction.apply(S,[o,l,a,p.yy,$[1],r,i].concat(f)),"undefined"!==typeof k)return k;w&&(n=n.slice(0,-1*w*2),r=r.slice(0,-1*w),i=i.slice(0,-1*w)),n.push(this.productions_[$[1]][0]),r.push(S.$),i.push(S._$),j=s[n[n.length-2]][n[n.length-1]],n.push(j);break;case 3:return!0}}return!0}};function g(t,e){var n="`"===e?/\\([\\bfnrtv`\$])/g:'"'===e?/\\([\"\\bfnrtv])/g:/\\([\'\\bfnrtv])/g;return t.replace(n,(function(t,e){return"b"===e?"\b":"f"===e?"\f":"n"===e?"\n":"r"===e?"\r":"t"===e?"\t":"v"===e?"\v":e}))}function m(t,e){return{start:{line:t-e.replace(/^\s+/,"").split(/(?:\r\n|\n|\r)/).length+1},end:{line:t}}}var v=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=t[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in i)this[s]=i[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),s=0;s<i.length;s++)if(n=this._input.match(this.rules[i[s]]),n&&(!e||n[0].length>e[0].length)){if(e=n,r=s,this.options.backtrack_lexer){if(t=this.test_match(n,i[s]),!1!==t)return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?(t=this.test_match(e,i[r]),!1!==t&&t):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){var t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions["INITIAL"].rules},topState:function(t){return t=this.conditionStack.length-1-Math.abs(t||0),t>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{flex:!0},performAction:function(t,e,n,r){switch(n){case 0:break;case 1:return 12;case 2:return 7;case 3:return 9;case 4:return 10;case 5:return 14;case 6:return"/";case 7:return"*";case 8:return 22;case 9:return 25;case 10:return 26;case 11:return 16;case 12:return 17;case 13:return";";case 14:return 21;case 15:return 30;case 16:return 30;case 17:return 5;case 18:return"INVALID";case 19:console.log(e.yytext);break}},rules:[/^(?:\s+)/,/^(?:("((\\([\'\"\\bfnrtv]))|([^\"\\]))*"))/,/^(?:null)/,/^(?:true)/,/^(?:false)/,/^(?:((([-+]?([0]|(([1-9])([0-9])*))\.([0-9])*(([eE])([-+]?([0-9])))?)|([-+]?\.([0-9])(([eE])([-+]?([0-9])))?)|([-+]?([0]|(([1-9])([0-9])*))(([eE])([-+]?([0-9])))?))))/,/^(?:\/)/,/^(?:\*)/,/^(?::)/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?:,)/,/^(?:\s*\/\/.*\s*)/,/^(?:\s*[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]\s*)/,/^(?:$)/,/^(?:.)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],inclusive:!0}}};return t}();function d(){this.yy={}}return p.lexer=v,d.prototype=p,p.Parser=d,new d}();e.parser=r,e.Parser=r.Parser,e.parse=function(){return r.parse.apply(r,arguments)}},4327:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.stringify=e.parse=e.parser=void 0;var r=n("0496");function i(t){var e=t.body.length,n=0;while(n<e){var r=t.body[n];if("comment"!==r.type)return f(r);n++}throw new Error("Json 格式错误，数值为空")}function s(t){return t.value}function o(t){return t.value}function a(t){return t.value}function l(t){return t.value}function c(t){return t.value}function h(t,e){var n=[],r=[];return t.members.forEach((function(i,s){var o=null,a=s-1;while(a>=0){if(o=t.members[a],"comment"!==o.type)break;a--}"comment"!==i.type?(e&&(e[n.length]=[r.length?r:0]),n.push(f(i)),r=[]):e&&"comment"!==(null===o||void 0===o?void 0:o.type)&&(null===o||void 0===o?void 0:o.range.end.line)===i.range.start.line?(e[n.length-1][1]=e[n.length-1][1]||[],e[n.length-1][1].push(f(i))):r.push(f(i))})),r.length&&e&&(e.$$=r),n}function u(t){var e={};e.$$comments=e.$$comments||{};var n=[];return t.members.forEach((function(r,i){var s,o,a;if("comment"!==r.type){var l=i>0?t.members[i-1]:null,c=null===(s=l)||void 0===s?void 0:s.key.filter((function(t){return"comment"!==t.type}))[0],h=c?f(c):"",u=null===(o=l)||void 0===o?void 0:o.value.filter((function(t){return"comment"!==t.type}))[0],y=[],p=[],g=[],m=[],v=null,d=null;r.key.forEach((function(t){"comment"!==t.type?v=t:v?p.push(f(t)):u&&(null===t||void 0===t?void 0:t.range.start.line)===(null===u||void 0===u?void 0:u.range.end.line)?(e.$$comments[h][4]=e.$$comments[h][4]||[],e.$$comments[h][4].push(f(t))):y.push(f(t))})),r.value.forEach((function(t){"comment"!==t.type?d=t:d?m.push(f(t)):g.push(f(t))}));var b=f(v);"array"===(null===(a=d)||void 0===a?void 0:a.type)?(e.$$comments["$"+b]={},e[b]=f(d,e.$$comments["$"+b])):e[b]=f(d),e.$$comments[b]=[y.length?y:0,p.length?p:0,g.length?g:0,m.length?m:0]}else n.push(f(r))})),n.length&&(e.$$comments=e.$$comments||{},e.$$comments.$$=n),v(e),e}function f(t,e){if("document"===t.type)return i(t);if("comment"===t.type)return s(t);if("string"===t.type)return o(t);if("null"===t.type)return a(t);if("boolean"===t.type)return l(t);if("number"===t.type)return c(t);if("array"===t.type)return h(t,e);if("object"===t.type)return u(t);throw new Error("Unknown ast type: "+t.type)}function y(t){var e=r.parse(t);return f(e)}function p(t){return d(t)}e.parser=r,e.parse=y,e.stringify=p;var g=2;function m(t){var e="";while(t-- >0)e+=" ";return e}function v(t){t.$$comments&&(Object.keys(t.$$comments).forEach((function(e){var n=t.$$comments[e];if("$"===e[0]&&b(n)){var r=Object.keys(n);r.length&&r.forEach((function(t){if("$$"!==t){var e=n[t],r=e.length;while(r-- >0){if(e[r])break;e.splice(r,1)}e.length||delete n[t]}})),Object.keys(n).length||delete t.$$comments[e]}else if(Array.isArray(n)){var i=n.length;while(i-- >0){if(n[i])break;n.splice(i,1)}n.length||delete t.$$comments[e]}})),Object.keys(t.$$comments).length||delete t.$$comments)}function d(t,e,n){if(void 0===e&&(e=0),b(t)){var r=t.$$comments,i=Object.keys(t),s=i.indexOf("$$comments");~s&&i.splice(s,1);var o=i.length,a=["{"];if(i.forEach((function(n,i){var s=null===r||void 0===r?void 0:r[n],l=t[n],c="",h="";s?(c=(s[0]?s[0].join(""):"")+'"'+n+'"',h=(s[1]?s[1].join(""):"")+":"+(s[2]?s[2].join(""):" ")+d(l,e+g,null===r||void 0===r?void 0:r["$"+n])+(s[3]?s[3].join("").replace(/\n *$/,""):"")+(o-1===i?"":",")+(s[4]?s[4].join("").replace(/\n *$/,""):""),c=c.replace(/^\n/,"").replace(/(\n|^) *?([^\s])/g,(function(t,n,r){return""+n+m(e+g)+("*"===r?" *":r)}))):(c=m(e+g)+'"'+n+'"',h=": "+d(l,e+g,null===r||void 0===r?void 0:r["$"+n])+(o-1===i?"":",")),a.push(c+h)})),Array.isArray(null===r||void 0===r?void 0:r.$$)){var l=(""+r.$$.join("")).trim().replace(/(\n|^) *?([^\s])/g,(function(t,n,r){return""+n+m(e+g)+("*"===r?" *":r)}));a.push(l)}return a.push(m(e)+"}"),a.join("\n")}if(Array.isArray(t)){var c=["["],h=t.length;return t.forEach((function(t,r){var i=null===n||void 0===n?void 0:n[r];if(Array.isArray(i)){var s=""+(i[0]?i[0].join("").replace(/^\n/,""):""),o=d(t,e+g)+(h-1===r?"":",")+(i[1]?i[1].join(""):"");s=(s+o.substring(0,1)).replace(/^\n/,"").replace(/(\n|^) *?([^\s])/g,(function(t,n,r){return""+n+m(e+g)+("*"===r?" *":r)})),c.push(s+o.substring(1))}else c.push(m(e+g)+d(t,e+g)+(h-1===r?"":","))})),Array.isArray(null===n||void 0===n?void 0:n.$$)&&c.push(n.$$.join("").replace(/^\n|\n$/g,"").replace(/(\n|^) *?([^\s])/g,(function(t,n,r){return""+n+m(e+g)+("*"===r?" *":r)}))),c.push(m(e)+"]"),c.join("\n")}return JSON.stringify(t,null,g)}function b(t){return"[object Object]"===Object.prototype.toString.call(t)}},5744:function(t,e,n){"use strict";var r=e,i=n("257d").Buffer,s=n("da59");r.toBuffer=function(t,e,n){var r;if(n=~~n,this.isV4Format(t))r=e||new i(n+4),t.split(/\./g).map((function(t){r[n++]=255&parseInt(t,10)}));else if(this.isV6Format(t)){var s,o=t.split(":",8);for(s=0;s<o.length;s++){var a,l=this.isV4Format(o[s]);l&&(a=this.toBuffer(o[s]),o[s]=a.slice(0,2).toString("hex")),a&&++s<8&&o.splice(s,0,a.slice(2,4).toString("hex"))}if(""===o[0])while(o.length<8)o.unshift("0");else if(""===o[o.length-1])while(o.length<8)o.push("0");else if(o.length<8){for(s=0;s<o.length&&""!==o[s];s++);var c=[s,1];for(s=9-o.length;s>0;s--)c.push("0");o.splice.apply(o,c)}for(r=e||new i(n+16),s=0;s<o.length;s++){var h=parseInt(o[s],16);r[n++]=h>>8&255,r[n++]=255&h}}if(!r)throw Error("Invalid ip address: "+t);return r},r.toString=function(t,e,n){e=~~e,n=n||t.length-e;var r=[];if(4===n){for(var i=0;i<n;i++)r.push(t[e+i]);r=r.join(".")}else if(16===n){for(i=0;i<n;i+=2)r.push(t.readUInt16BE(e+i).toString(16));r=r.join(":"),r=r.replace(/(^|:)0(:0)*:0(:|$)/,"$1::$3"),r=r.replace(/:{3,4}/,"::")}return r};var o=/^(\d{1,3}\.){3,3}\d{1,3}$/,a=/^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;function l(t){return t?t.toLowerCase():"ipv4"}r.isV4Format=function(t){return o.test(t)},r.isV6Format=function(t){return a.test(t)},r.fromPrefixLen=function(t,e){e=t>32?"ipv6":l(e);var n=4;"ipv6"===e&&(n=16);for(var s=new i(n),o=0,a=s.length;o<a;++o){var c=8;t<8&&(c=t),t-=c,s[o]=255&~(255>>c)}return r.toString(s)},r.mask=function(t,e){t=r.toBuffer(t),e=r.toBuffer(e);var n=new i(Math.max(t.length,e.length)),s=0;if(t.length===e.length)for(s=0;s<t.length;s++)n[s]=t[s]&e[s];else if(4===e.length)for(s=0;s<e.length;s++)n[s]=t[t.length-4+s]&e[s];else{for(s=0;s<n.length-6;s++)n[s]=0;for(n[10]=255,n[11]=255,s=0;s<t.length;s++)n[s+12]=t[s]&e[s+12];s+=12}for(;s<n.length;s++)n[s]=0;return r.toString(n)},r.cidr=function(t){var e=t.split("/"),n=e[0];if(2!==e.length)throw new Error("invalid CIDR subnet: "+n);var i=r.fromPrefixLen(parseInt(e[1],10));return r.mask(n,i)},r.subnet=function(t,e){for(var n=r.toLong(r.mask(t,e)),i=r.toBuffer(e),s=0,o=0;o<i.length;o++)if(255===i[o])s+=8;else{var a=255&i[o];while(a)a=a<<1&255,s++}var l=Math.pow(2,32-s);return{networkAddress:r.fromLong(n),firstAddress:l<=2?r.fromLong(n):r.fromLong(n+1),lastAddress:l<=2?r.fromLong(n+l-1):r.fromLong(n+l-2),broadcastAddress:r.fromLong(n+l-1),subnetMask:e,subnetMaskLength:s,numHosts:l<=2?l:l-2,length:l,contains:function(t){return n===r.toLong(r.mask(t,e))}}},r.cidrSubnet=function(t){var e=t.split("/"),n=e[0];if(2!==e.length)throw new Error("invalid CIDR subnet: "+n);var i=r.fromPrefixLen(parseInt(e[1],10));return r.subnet(n,i)},r.not=function(t){for(var e=r.toBuffer(t),n=0;n<e.length;n++)e[n]=255^e[n];return r.toString(e)},r.or=function(t,e){if(t=r.toBuffer(t),e=r.toBuffer(e),t.length===e.length){for(var n=0;n<t.length;++n)t[n]|=e[n];return r.toString(t)}var i=t,s=e;e.length>t.length&&(i=e,s=t);var o=i.length-s.length;for(n=o;n<i.length;++n)i[n]|=s[n-o];return r.toString(i)},r.isEqual=function(t,e){if(t=r.toBuffer(t),e=r.toBuffer(e),t.length===e.length){for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}if(4===e.length){var i=e;e=t,t=i}for(n=0;n<10;n++)if(0!==e[n])return!1;var s=e.readUInt16BE(10);if(0!==s&&65535!==s)return!1;for(n=0;n<4;n++)if(t[n]!==e[n+12])return!1;return!0},r.isPrivate=function(t){return/^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t)||/^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t)||/^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t)||/^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t)||/^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t)||/^f[cd][0-9a-f]{2}:/i.test(t)||/^fe80:/i.test(t)||/^::1$/.test(t)||/^::$/.test(t)},r.isPublic=function(t){return!r.isPrivate(t)},r.isLoopback=function(t){return/^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/.test(t)||/^fe80::1$/.test(t)||/^::1$/.test(t)||/^::$/.test(t)},r.loopback=function(t){if(t=l(t),"ipv4"!==t&&"ipv6"!==t)throw new Error("family must be ipv4 or ipv6");return"ipv4"===t?"127.0.0.1":"fe80::1"},r.address=function(t,e){var n=s.networkInterfaces();if(e=l(e),t&&"private"!==t&&"public"!==t){var i=n[t].filter((function(t){var n=t.family.toLowerCase();return n===e}));if(0===i.length)return;return i[0].address}var o=Object.keys(n).map((function(i){var s=n[i].filter((function(n){return n.family=n.family.toLowerCase(),n.family===e&&!r.isLoopback(n.address)&&(!t||("public"===t?r.isPrivate(n.address):r.isPublic(n.address)))}));return s.length?s[0].address:void 0})).filter(Boolean);return o.length?o[0]:r.loopback(e)},r.toLong=function(t){var e=0;return t.split(".").forEach((function(t){e<<=8,e+=parseInt(t)})),e>>>0},r.fromLong=function(t){return(t>>>24)+"."+(t>>16&255)+"."+(t>>8&255)+"."+(255&t)}},"80c1":function(t,e){function n(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&n(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},f249:function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}}}]);