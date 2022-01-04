/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2022-01-04 04:37:17
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4018"],{"0530":function(n,e,t){"use strict";t.r(e),t.d(e,"setupMode1",(function(){return Un})),t.d(e,"setupMode",(function(){return Wn}));var r,i,o,a,u,s,c,d,g,f,l,h,p,v,m,w,_,y,k,b,E,x,C,I,A,S,R=t("b48b"),T=12e4,P=function(){function n(n){var e=this;this._defaults=n,this._worker=null,this._idleCheckInterval=window.setInterval((function(){return e._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return e._stopWorker()}))}return n.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},n.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},n.prototype._checkIfIdle=function(){if(this._worker){var n=Date.now()-this._lastUsedTime;n>T&&this._stopWorker()}},n.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=R["editor"].createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},n.prototype.getLanguageServiceWorker=function(){for(var n,e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._getClient().then((function(e){n=e})).then((function(n){if(e._worker)return e._worker.withSyncedResources(t)})).then((function(e){return n}))},n}();(function(n){n.MIN_VALUE=-2147483648,n.MAX_VALUE=2147483647})(r||(r={})),function(n){n.MIN_VALUE=0,n.MAX_VALUE=2147483647}(i||(i={})),function(n){function e(n,e){return n===Number.MAX_VALUE&&(n=i.MAX_VALUE),e===Number.MAX_VALUE&&(e=i.MAX_VALUE),{line:n,character:e}}function t(n){var e=n;return fn.objectLiteral(e)&&fn.uinteger(e.line)&&fn.uinteger(e.character)}n.create=e,n.is=t}(o||(o={})),function(n){function e(n,e,t,r){if(fn.uinteger(n)&&fn.uinteger(e)&&fn.uinteger(t)&&fn.uinteger(r))return{start:o.create(n,e),end:o.create(t,r)};if(o.is(n)&&o.is(e))return{start:n,end:e};throw new Error("Range#create called with invalid arguments["+n+", "+e+", "+t+", "+r+"]")}function t(n){var e=n;return fn.objectLiteral(e)&&o.is(e.start)&&o.is(e.end)}n.create=e,n.is=t}(a||(a={})),function(n){function e(n,e){return{uri:n,range:e}}function t(n){var e=n;return fn.defined(e)&&a.is(e.range)&&(fn.string(e.uri)||fn.undefined(e.uri))}n.create=e,n.is=t}(u||(u={})),function(n){function e(n,e,t,r){return{targetUri:n,targetRange:e,targetSelectionRange:t,originSelectionRange:r}}function t(n){var e=n;return fn.defined(e)&&a.is(e.targetRange)&&fn.string(e.targetUri)&&(a.is(e.targetSelectionRange)||fn.undefined(e.targetSelectionRange))&&(a.is(e.originSelectionRange)||fn.undefined(e.originSelectionRange))}n.create=e,n.is=t}(s||(s={})),function(n){function e(n,e,t,r){return{red:n,green:e,blue:t,alpha:r}}function t(n){var e=n;return fn.numberRange(e.red,0,1)&&fn.numberRange(e.green,0,1)&&fn.numberRange(e.blue,0,1)&&fn.numberRange(e.alpha,0,1)}n.create=e,n.is=t}(c||(c={})),function(n){function e(n,e){return{range:n,color:e}}function t(n){var e=n;return a.is(e.range)&&c.is(e.color)}n.create=e,n.is=t}(d||(d={})),function(n){function e(n,e,t){return{label:n,textEdit:e,additionalTextEdits:t}}function t(n){var e=n;return fn.string(e.label)&&(fn.undefined(e.textEdit)||y.is(e))&&(fn.undefined(e.additionalTextEdits)||fn.typedArray(e.additionalTextEdits,y.is))}n.create=e,n.is=t}(g||(g={})),function(n){n["Comment"]="comment",n["Imports"]="imports",n["Region"]="region"}(f||(f={})),function(n){function e(n,e,t,r,i){var o={startLine:n,endLine:e};return fn.defined(t)&&(o.startCharacter=t),fn.defined(r)&&(o.endCharacter=r),fn.defined(i)&&(o.kind=i),o}function t(n){var e=n;return fn.uinteger(e.startLine)&&fn.uinteger(e.startLine)&&(fn.undefined(e.startCharacter)||fn.uinteger(e.startCharacter))&&(fn.undefined(e.endCharacter)||fn.uinteger(e.endCharacter))&&(fn.undefined(e.kind)||fn.string(e.kind))}n.create=e,n.is=t}(l||(l={})),function(n){function e(n,e){return{location:n,message:e}}function t(n){var e=n;return fn.defined(e)&&u.is(e.location)&&fn.string(e.message)}n.create=e,n.is=t}(h||(h={})),function(n){n.Error=1,n.Warning=2,n.Information=3,n.Hint=4}(p||(p={})),function(n){n.Unnecessary=1,n.Deprecated=2}(v||(v={})),function(n){function e(n){var e=n;return void 0!==e&&null!==e&&fn.string(e.href)}n.is=e}(m||(m={})),function(n){function e(n,e,t,r,i,o){var a={range:n,message:e};return fn.defined(t)&&(a.severity=t),fn.defined(r)&&(a.code=r),fn.defined(i)&&(a.source=i),fn.defined(o)&&(a.relatedInformation=o),a}function t(n){var e,t=n;return fn.defined(t)&&a.is(t.range)&&fn.string(t.message)&&(fn.number(t.severity)||fn.undefined(t.severity))&&(fn.integer(t.code)||fn.string(t.code)||fn.undefined(t.code))&&(fn.undefined(t.codeDescription)||fn.string(null===(e=t.codeDescription)||void 0===e?void 0:e.href))&&(fn.string(t.source)||fn.undefined(t.source))&&(fn.undefined(t.relatedInformation)||fn.typedArray(t.relatedInformation,h.is))}n.create=e,n.is=t}(w||(w={})),function(n){function e(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:n,command:e};return fn.defined(t)&&t.length>0&&(i.arguments=t),i}function t(n){var e=n;return fn.defined(e)&&fn.string(e.title)&&fn.string(e.command)}n.create=e,n.is=t}(_||(_={})),function(n){function e(n,e){return{range:n,newText:e}}function t(n,e){return{range:{start:n,end:n},newText:e}}function r(n){return{range:n,newText:""}}function i(n){var e=n;return fn.objectLiteral(e)&&fn.string(e.newText)&&a.is(e.range)}n.replace=e,n.insert=t,n.del=r,n.is=i}(y||(y={})),function(n){function e(n,e,t){var r={label:n};return void 0!==e&&(r.needsConfirmation=e),void 0!==t&&(r.description=t),r}function t(n){var e=n;return void 0!==e&&fn.objectLiteral(e)&&fn.string(e.label)&&(fn.boolean(e.needsConfirmation)||void 0===e.needsConfirmation)&&(fn.string(e.description)||void 0===e.description)}n.create=e,n.is=t}(k||(k={})),function(n){function e(n){var e=n;return"string"===typeof e}n.is=e}(b||(b={})),function(n){function e(n,e,t){return{range:n,newText:e,annotationId:t}}function t(n,e,t){return{range:{start:n,end:n},newText:e,annotationId:t}}function r(n,e){return{range:n,newText:"",annotationId:e}}function i(n){var e=n;return y.is(e)&&(k.is(e.annotationId)||b.is(e.annotationId))}n.replace=e,n.insert=t,n.del=r,n.is=i}(E||(E={})),function(n){function e(n,e){return{textDocument:n,edits:e}}function t(n){var e=n;return fn.defined(e)&&L.is(e.textDocument)&&Array.isArray(e.edits)}n.create=e,n.is=t}(x||(x={})),function(n){function e(n,e,t){var r={kind:"create",uri:n};return void 0===e||void 0===e.overwrite&&void 0===e.ignoreIfExists||(r.options=e),void 0!==t&&(r.annotationId=t),r}function t(n){var e=n;return e&&"create"===e.kind&&fn.string(e.uri)&&(void 0===e.options||(void 0===e.options.overwrite||fn.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||fn.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||b.is(e.annotationId))}n.create=e,n.is=t}(C||(C={})),function(n){function e(n,e,t,r){var i={kind:"rename",oldUri:n,newUri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(i.options=t),void 0!==r&&(i.annotationId=r),i}function t(n){var e=n;return e&&"rename"===e.kind&&fn.string(e.oldUri)&&fn.string(e.newUri)&&(void 0===e.options||(void 0===e.options.overwrite||fn.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||fn.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||b.is(e.annotationId))}n.create=e,n.is=t}(I||(I={})),function(n){function e(n,e,t){var r={kind:"delete",uri:n};return void 0===e||void 0===e.recursive&&void 0===e.ignoreIfNotExists||(r.options=e),void 0!==t&&(r.annotationId=t),r}function t(n){var e=n;return e&&"delete"===e.kind&&fn.string(e.uri)&&(void 0===e.options||(void 0===e.options.recursive||fn.boolean(e.options.recursive))&&(void 0===e.options.ignoreIfNotExists||fn.boolean(e.options.ignoreIfNotExists)))&&(void 0===e.annotationId||b.is(e.annotationId))}n.create=e,n.is=t}(A||(A={})),function(n){function e(n){var e=n;return e&&(void 0!==e.changes||void 0!==e.documentChanges)&&(void 0===e.documentChanges||e.documentChanges.every((function(n){return fn.string(n.kind)?C.is(n)||I.is(n)||A.is(n):x.is(n)})))}n.is=e}(S||(S={}));var F,D,L,M,j,O,N,U,W,V,z,H,K,X,B,J,$,q,Q,G,Y,Z,nn,en,tn,rn,on,an,un,sn,cn=function(){function n(n,e){this.edits=n,this.changeAnnotations=e}return n.prototype.insert=function(n,e,t){var r,i;if(void 0===t?r=y.insert(n,e):b.is(t)?(i=t,r=E.insert(n,e,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=E.insert(n,e,i)),this.edits.push(r),void 0!==i)return i},n.prototype.replace=function(n,e,t){var r,i;if(void 0===t?r=y.replace(n,e):b.is(t)?(i=t,r=E.replace(n,e,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=E.replace(n,e,i)),this.edits.push(r),void 0!==i)return i},n.prototype.delete=function(n,e){var t,r;if(void 0===e?t=y.del(n):b.is(e)?(r=e,t=E.del(n,e)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(e),t=E.del(n,r)),this.edits.push(t),void 0!==r)return r},n.prototype.add=function(n){this.edits.push(n)},n.prototype.all=function(){return this.edits},n.prototype.clear=function(){this.edits.splice(0,this.edits.length)},n.prototype.assertChangeAnnotations=function(n){if(void 0===n)throw new Error("Text edit change is not configured to manage change annotations.")},n}(),dn=function(){function n(n){this._annotations=void 0===n?Object.create(null):n,this._counter=0,this._size=0}return n.prototype.all=function(){return this._annotations},Object.defineProperty(n.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),n.prototype.manage=function(n,e){var t;if(b.is(n)?t=n:(t=this.nextId(),e=n),void 0!==this._annotations[t])throw new Error("Id "+t+" is already in use.");if(void 0===e)throw new Error("No annotation provided for id "+t);return this._annotations[t]=e,this._size++,t},n.prototype.nextId=function(){return this._counter++,this._counter.toString()},n}();(function(){function n(n){var e=this;this._textEditChanges=Object.create(null),void 0!==n?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new dn(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach((function(n){if(x.is(n)){var t=new cn(n.edits,e._changeAnnotations);e._textEditChanges[n.textDocument.uri]=t}}))):n.changes&&Object.keys(n.changes).forEach((function(t){var r=new cn(n.changes[t]);e._textEditChanges[t]=r}))):this._workspaceEdit={}}Object.defineProperty(n.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),n.prototype.getTextEditChange=function(n){if(L.is(n)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var e={uri:n.uri,version:n.version},t=this._textEditChanges[e.uri];if(!t){var r=[],i={textDocument:e,edits:r};this._workspaceEdit.documentChanges.push(i),t=new cn(r,this._changeAnnotations),this._textEditChanges[e.uri]=t}return t}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");t=this._textEditChanges[n];if(!t){r=[];this._workspaceEdit.changes[n]=r,t=new cn(r),this._textEditChanges[n]=t}return t},n.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new dn,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},n.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},n.prototype.createFile=function(n,e,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(k.is(e)||b.is(e)?r=e:t=e,void 0===r?i=C.create(n,t):(o=b.is(r)?r:this._changeAnnotations.manage(r),i=C.create(n,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},n.prototype.renameFile=function(n,e,t,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(k.is(t)||b.is(t)?i=t:r=t,void 0===i?o=I.create(n,e,r):(a=b.is(i)?i:this._changeAnnotations.manage(i),o=I.create(n,e,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},n.prototype.deleteFile=function(n,e,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(k.is(e)||b.is(e)?r=e:t=e,void 0===r?i=A.create(n,t):(o=b.is(r)?r:this._changeAnnotations.manage(r),i=A.create(n,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}})();(function(n){function e(n){return{uri:n}}function t(n){var e=n;return fn.defined(e)&&fn.string(e.uri)}n.create=e,n.is=t})(F||(F={})),function(n){function e(n,e){return{uri:n,version:e}}function t(n){var e=n;return fn.defined(e)&&fn.string(e.uri)&&fn.integer(e.version)}n.create=e,n.is=t}(D||(D={})),function(n){function e(n,e){return{uri:n,version:e}}function t(n){var e=n;return fn.defined(e)&&fn.string(e.uri)&&(null===e.version||fn.integer(e.version))}n.create=e,n.is=t}(L||(L={})),function(n){function e(n,e,t,r){return{uri:n,languageId:e,version:t,text:r}}function t(n){var e=n;return fn.defined(e)&&fn.string(e.uri)&&fn.string(e.languageId)&&fn.integer(e.version)&&fn.string(e.text)}n.create=e,n.is=t}(M||(M={})),function(n){n.PlainText="plaintext",n.Markdown="markdown"}(j||(j={})),function(n){function e(e){var t=e;return t===n.PlainText||t===n.Markdown}n.is=e}(j||(j={})),function(n){function e(n){var e=n;return fn.objectLiteral(n)&&j.is(e.kind)&&fn.string(e.value)}n.is=e}(O||(O={})),function(n){n.Text=1,n.Method=2,n.Function=3,n.Constructor=4,n.Field=5,n.Variable=6,n.Class=7,n.Interface=8,n.Module=9,n.Property=10,n.Unit=11,n.Value=12,n.Enum=13,n.Keyword=14,n.Snippet=15,n.Color=16,n.File=17,n.Reference=18,n.Folder=19,n.EnumMember=20,n.Constant=21,n.Struct=22,n.Event=23,n.Operator=24,n.TypeParameter=25}(N||(N={})),function(n){n.PlainText=1,n.Snippet=2}(U||(U={})),function(n){n.Deprecated=1}(W||(W={})),function(n){function e(n,e,t){return{newText:n,insert:e,replace:t}}function t(n){var e=n;return e&&fn.string(e.newText)&&a.is(e.insert)&&a.is(e.replace)}n.create=e,n.is=t}(V||(V={})),function(n){n.asIs=1,n.adjustIndentation=2}(z||(z={})),function(n){function e(n){return{label:n}}n.create=e}(H||(H={})),function(n){function e(n,e){return{items:n||[],isIncomplete:!!e}}n.create=e}(K||(K={})),function(n){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function t(n){var e=n;return fn.string(e)||fn.objectLiteral(e)&&fn.string(e.language)&&fn.string(e.value)}n.fromPlainText=e,n.is=t}(X||(X={})),function(n){function e(n){var e=n;return!!e&&fn.objectLiteral(e)&&(O.is(e.contents)||X.is(e.contents)||fn.typedArray(e.contents,X.is))&&(void 0===n.range||a.is(n.range))}n.is=e}(B||(B={})),function(n){function e(n,e){return e?{label:n,documentation:e}:{label:n}}n.create=e}(J||(J={})),function(n){function e(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:n};return fn.defined(e)&&(i.documentation=e),fn.defined(t)?i.parameters=t:i.parameters=[],i}n.create=e}($||($={})),function(n){n.Text=1,n.Read=2,n.Write=3}(q||(q={})),function(n){function e(n,e){var t={range:n};return fn.number(e)&&(t.kind=e),t}n.create=e}(Q||(Q={})),function(n){n.File=1,n.Module=2,n.Namespace=3,n.Package=4,n.Class=5,n.Method=6,n.Property=7,n.Field=8,n.Constructor=9,n.Enum=10,n.Interface=11,n.Function=12,n.Variable=13,n.Constant=14,n.String=15,n.Number=16,n.Boolean=17,n.Array=18,n.Object=19,n.Key=20,n.Null=21,n.EnumMember=22,n.Struct=23,n.Event=24,n.Operator=25,n.TypeParameter=26}(G||(G={})),function(n){n.Deprecated=1}(Y||(Y={})),function(n){function e(n,e,t,r,i){var o={name:n,kind:e,location:{uri:r,range:t}};return i&&(o.containerName=i),o}n.create=e}(Z||(Z={})),function(n){function e(n,e,t,r,i,o){var a={name:n,detail:e,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function t(n){var e=n;return e&&fn.string(e.name)&&fn.number(e.kind)&&a.is(e.range)&&a.is(e.selectionRange)&&(void 0===e.detail||fn.string(e.detail))&&(void 0===e.deprecated||fn.boolean(e.deprecated))&&(void 0===e.children||Array.isArray(e.children))&&(void 0===e.tags||Array.isArray(e.tags))}n.create=e,n.is=t}(nn||(nn={})),function(n){n.Empty="",n.QuickFix="quickfix",n.Refactor="refactor",n.RefactorExtract="refactor.extract",n.RefactorInline="refactor.inline",n.RefactorRewrite="refactor.rewrite",n.Source="source",n.SourceOrganizeImports="source.organizeImports",n.SourceFixAll="source.fixAll"}(en||(en={})),function(n){function e(n,e){var t={diagnostics:n};return void 0!==e&&null!==e&&(t.only=e),t}function t(n){var e=n;return fn.defined(e)&&fn.typedArray(e.diagnostics,w.is)&&(void 0===e.only||fn.typedArray(e.only,fn.string))}n.create=e,n.is=t}(tn||(tn={})),function(n){function e(n,e,t){var r={title:n},i=!0;return"string"===typeof e?(i=!1,r.kind=e):_.is(e)?r.command=e:r.edit=e,i&&void 0!==t&&(r.kind=t),r}function t(n){var e=n;return e&&fn.string(e.title)&&(void 0===e.diagnostics||fn.typedArray(e.diagnostics,w.is))&&(void 0===e.kind||fn.string(e.kind))&&(void 0!==e.edit||void 0!==e.command)&&(void 0===e.command||_.is(e.command))&&(void 0===e.isPreferred||fn.boolean(e.isPreferred))&&(void 0===e.edit||S.is(e.edit))}n.create=e,n.is=t}(rn||(rn={})),function(n){function e(n,e){var t={range:n};return fn.defined(e)&&(t.data=e),t}function t(n){var e=n;return fn.defined(e)&&a.is(e.range)&&(fn.undefined(e.command)||_.is(e.command))}n.create=e,n.is=t}(on||(on={})),function(n){function e(n,e){return{tabSize:n,insertSpaces:e}}function t(n){var e=n;return fn.defined(e)&&fn.uinteger(e.tabSize)&&fn.boolean(e.insertSpaces)}n.create=e,n.is=t}(an||(an={})),function(n){function e(n,e,t){return{range:n,target:e,data:t}}function t(n){var e=n;return fn.defined(e)&&a.is(e.range)&&(fn.undefined(e.target)||fn.string(e.target))}n.create=e,n.is=t}(un||(un={})),function(n){function e(n,e){return{range:n,parent:e}}function t(e){var t=e;return void 0!==t&&a.is(t.range)&&(void 0===t.parent||n.is(t.parent))}n.create=e,n.is=t}(sn||(sn={}));var gn;(function(n){function e(n,e,t,r){return new ln(n,e,t,r)}function t(n){var e=n;return!!(fn.defined(e)&&fn.string(e.uri)&&(fn.undefined(e.languageId)||fn.string(e.languageId))&&fn.uinteger(e.lineCount)&&fn.func(e.getText)&&fn.func(e.positionAt)&&fn.func(e.offsetAt))}function r(n,e){for(var t=n.getText(),r=i(e,(function(n,e){var t=n.range.start.line-e.range.start.line;return 0===t?n.range.start.character-e.range.start.character:t})),o=t.length,a=r.length-1;a>=0;a--){var u=r[a],s=n.offsetAt(u.range.start),c=n.offsetAt(u.range.end);if(!(c<=o))throw new Error("Overlapping edit");t=t.substring(0,s)+u.newText+t.substring(c,t.length),o=s}return t}function i(n,e){if(n.length<=1)return n;var t=n.length/2|0,r=n.slice(0,t),o=n.slice(t);i(r,e),i(o,e);var a=0,u=0,s=0;while(a<r.length&&u<o.length){var c=e(r[a],o[u]);n[s++]=c<=0?r[a++]:o[u++]}while(a<r.length)n[s++]=r[a++];while(u<o.length)n[s++]=o[u++];return n}n.create=e,n.is=t,n.applyEdits=r})(gn||(gn={}));var fn,ln=function(){function n(n,e,t,r){this._uri=n,this._languageId=e,this._version=t,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(n.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),n.prototype.getText=function(n){if(n){var e=this.offsetAt(n.start),t=this.offsetAt(n.end);return this._content.substring(e,t)}return this._content},n.prototype.update=function(n,e){this._content=n.text,this._version=e,this._lineOffsets=void 0},n.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var n=[],e=this._content,t=!0,r=0;r<e.length;r++){t&&(n.push(r),t=!1);var i=e.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<e.length&&"\n"===e.charAt(r+1)&&r++}t&&e.length>0&&n.push(e.length),this._lineOffsets=n}return this._lineOffsets},n.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var e=this.getLineOffsets(),t=0,r=e.length;if(0===r)return o.create(0,n);while(t<r){var i=Math.floor((t+r)/2);e[i]>n?r=i:t=i+1}var a=t-1;return o.create(a,n-e[a])},n.prototype.offsetAt=function(n){var e=this.getLineOffsets();if(n.line>=e.length)return this._content.length;if(n.line<0)return 0;var t=e[n.line],r=n.line+1<e.length?e[n.line+1]:this._content.length;return Math.max(Math.min(t+n.character,r),t)},Object.defineProperty(n.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),n}();function hn(n){if(n)return{character:n.column-1,line:n.lineNumber-1}}function pn(n){if(n)return{start:hn(n.getStartPosition()),end:hn(n.getEndPosition())}}function vn(n){if(n)return new R["Range"](n.start.line+1,n.start.character+1,n.end.line+1,n.end.character+1)}function mn(n){return"undefined"!==typeof n.insert&&"undefined"!==typeof n.replace}function wn(n){var e=R["languages"].CompletionItemKind;switch(n){case N.Text:return e.Text;case N.Method:return e.Method;case N.Function:return e.Function;case N.Constructor:return e.Constructor;case N.Field:return e.Field;case N.Variable:return e.Variable;case N.Class:return e.Class;case N.Interface:return e.Interface;case N.Module:return e.Module;case N.Property:return e.Property;case N.Unit:return e.Unit;case N.Value:return e.Value;case N.Enum:return e.Enum;case N.Keyword:return e.Keyword;case N.Snippet:return e.Snippet;case N.Color:return e.Color;case N.File:return e.File;case N.Reference:return e.Reference}return e.Property}function _n(n){if(n)return{range:vn(n.range),text:n.newText}}function yn(n){return n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0}(function(n){var e=Object.prototype.toString;function t(n){return"undefined"!==typeof n}function r(n){return"undefined"===typeof n}function i(n){return!0===n||!1===n}function o(n){return"[object String]"===e.call(n)}function a(n){return"[object Number]"===e.call(n)}function u(n,t,r){return"[object Number]"===e.call(n)&&t<=n&&n<=r}function s(n){return"[object Number]"===e.call(n)&&-2147483648<=n&&n<=2147483647}function c(n){return"[object Number]"===e.call(n)&&0<=n&&n<=2147483647}function d(n){return"[object Function]"===e.call(n)}function g(n){return null!==n&&"object"===typeof n}function f(n,e){return Array.isArray(n)&&n.every(e)}n.defined=t,n.undefined=r,n.boolean=i,n.string=o,n.number=a,n.numberRange=u,n.integer=s,n.uinteger=c,n.func=d,n.objectLiteral=g,n.typedArray=f})(fn||(fn={}));var kn=function(){function n(n){this._worker=n}return Object.defineProperty(n.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!1,configurable:!0}),n.prototype.provideCompletionItems=function(n,e,t,r){var i=n.uri;return this._worker(i).then((function(n){return n.doComplete(i.toString(),hn(e))})).then((function(t){if(t){var r=n.getWordUntilPosition(e),i=new R["Range"](e.lineNumber,r.startColumn,e.lineNumber,r.endColumn),o=t.items.map((function(n){var e={label:n.label,insertText:n.insertText||n.label,sortText:n.sortText,filterText:n.filterText,documentation:n.documentation,command:yn(n.command),detail:n.detail,range:i,kind:wn(n.kind)};return n.textEdit&&(mn(n.textEdit)?e.range={insert:vn(n.textEdit.insert),replace:vn(n.textEdit.replace)}:e.range=vn(n.textEdit.range),e.insertText=n.textEdit.newText),n.additionalTextEdits&&(e.additionalTextEdits=n.additionalTextEdits.map(_n)),n.insertTextFormat===U.Snippet&&(e.insertTextRules=R["languages"].CompletionItemInsertTextRule.InsertAsSnippet),e}));return{isIncomplete:t.isIncomplete,suggestions:o}}}))},n}();function bn(n){return n&&"object"===typeof n&&"string"===typeof n.kind}function En(n){return"string"===typeof n?{value:n}:bn(n)?"plaintext"===n.kind?{value:n.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:n.value}:{value:"```"+n.language+"\n"+n.value+"\n```\n"}}function xn(n){if(n)return Array.isArray(n)?n.map(En):[En(n)]}var Cn=function(){function n(n){this._worker=n}return n.prototype.provideHover=function(n,e,t){var r=n.uri;return this._worker(r).then((function(n){return n.doHover(r.toString(),hn(e))})).then((function(n){if(n)return{range:vn(n.range),contents:xn(n.contents)}}))},n}();function In(n){var e=R["languages"].DocumentHighlightKind;switch(n){case q.Read:return e.Read;case q.Write:return e.Write;case q.Text:return e.Text}return e.Text}var An=function(){function n(n){this._worker=n}return n.prototype.provideDocumentHighlights=function(n,e,t){var r=n.uri;return this._worker(r).then((function(n){return n.findDocumentHighlights(r.toString(),hn(e))})).then((function(n){if(n)return n.map((function(n){return{range:vn(n.range),kind:In(n.kind)}}))}))},n}();function Sn(n){var e=R["languages"].SymbolKind;switch(n){case G.File:return e.Array;case G.Module:return e.Module;case G.Namespace:return e.Namespace;case G.Package:return e.Package;case G.Class:return e.Class;case G.Method:return e.Method;case G.Property:return e.Property;case G.Field:return e.Field;case G.Constructor:return e.Constructor;case G.Enum:return e.Enum;case G.Interface:return e.Interface;case G.Function:return e.Function;case G.Variable:return e.Variable;case G.Constant:return e.Constant;case G.String:return e.String;case G.Number:return e.Number;case G.Boolean:return e.Boolean;case G.Array:return e.Array}return e.Function}var Rn=function(){function n(n){this._worker=n}return n.prototype.provideDocumentSymbols=function(n,e){var t=n.uri;return this._worker(t).then((function(n){return n.findDocumentSymbols(t.toString())})).then((function(n){if(n)return n.map((function(n){return{name:n.name,detail:"",containerName:n.containerName,kind:Sn(n.kind),tags:[],range:vn(n.location.range),selectionRange:vn(n.location.range)}}))}))},n}(),Tn=function(){function n(n){this._worker=n}return n.prototype.provideLinks=function(n,e){var t=n.uri;return this._worker(t).then((function(n){return n.findDocumentLinks(t.toString())})).then((function(n){if(n)return{links:n.map((function(n){return{range:vn(n.range),url:n.target}}))}}))},n}();function Pn(n){return{tabSize:n.tabSize,insertSpaces:n.insertSpaces}}var Fn=function(){function n(n){this._worker=n}return n.prototype.provideDocumentFormattingEdits=function(n,e,t){var r=n.uri;return this._worker(r).then((function(n){return n.format(r.toString(),null,Pn(e)).then((function(n){if(n&&0!==n.length)return n.map(_n)}))}))},n}(),Dn=function(){function n(n){this._worker=n}return n.prototype.provideDocumentRangeFormattingEdits=function(n,e,t,r){var i=n.uri;return this._worker(i).then((function(n){return n.format(i.toString(),pn(e),Pn(t)).then((function(n){if(n&&0!==n.length)return n.map(_n)}))}))},n}(),Ln=function(){function n(n){this._worker=n}return n.prototype.provideRenameEdits=function(n,e,t,r){var i=n.uri;return this._worker(i).then((function(n){return n.doRename(i.toString(),hn(e),t)})).then((function(n){return Mn(n)}))},n}();function Mn(n){if(n&&n.changes){var e=[];for(var t in n.changes)for(var r=R["Uri"].parse(t),i=0,o=n.changes[t];i<o.length;i++){var a=o[i];e.push({resource:r,edit:{range:vn(a.range),text:a.newText}})}return{edits:e}}}var jn=function(){function n(n){this._worker=n}return n.prototype.provideFoldingRanges=function(n,e,t){var r=n.uri;return this._worker(r).then((function(n){return n.getFoldingRanges(r.toString(),e)})).then((function(n){if(n)return n.map((function(n){var e={start:n.startLine+1,end:n.endLine+1};return"undefined"!==typeof n.kind&&(e.kind=On(n.kind)),e}))}))},n}();function On(n){switch(n){case f.Comment:return R["languages"].FoldingRangeKind.Comment;case f.Imports:return R["languages"].FoldingRangeKind.Imports;case f.Region:return R["languages"].FoldingRangeKind.Region}}var Nn=function(){function n(n){this._worker=n}return n.prototype.provideSelectionRanges=function(n,e,t){var r=n.uri;return this._worker(r).then((function(n){return n.getSelectionRanges(r.toString(),e.map(hn))})).then((function(n){if(n)return n.map((function(n){var e=[];while(n)e.push({range:vn(n.range)}),n=n.parent;return e}))}))},n}();function Un(n){var e=new P(n),t=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.getLanguageServiceWorker.apply(e,n)},r=n.languageId;R["languages"].registerCompletionItemProvider(r,new kn(t)),R["languages"].registerHoverProvider(r,new Cn(t)),R["languages"].registerDocumentHighlightProvider(r,new An(t)),R["languages"].registerLinkProvider(r,new Tn(t)),R["languages"].registerFoldingRangeProvider(r,new jn(t)),R["languages"].registerDocumentSymbolProvider(r,new Rn(t)),R["languages"].registerSelectionRangeProvider(r,new Nn(t)),R["languages"].registerRenameProvider(r,new Ln(t)),"html"===r&&(R["languages"].registerDocumentFormattingEditProvider(r,new Fn(t)),R["languages"].registerDocumentRangeFormattingEditProvider(r,new Dn(t)))}function Wn(n){var e=[],t=[],r=new P(n);e.push(r);var i=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return r.getLanguageServiceWorker.apply(r,n)};function o(){var e=n.languageId,r=n.modeConfiguration;zn(t),r.completionItems&&t.push(R["languages"].registerCompletionItemProvider(e,new kn(i))),r.hovers&&t.push(R["languages"].registerHoverProvider(e,new Cn(i))),r.documentHighlights&&t.push(R["languages"].registerDocumentHighlightProvider(e,new An(i))),r.links&&t.push(R["languages"].registerLinkProvider(e,new Tn(i))),r.documentSymbols&&t.push(R["languages"].registerDocumentSymbolProvider(e,new Rn(i))),r.rename&&t.push(R["languages"].registerRenameProvider(e,new Ln(i))),r.foldingRanges&&t.push(R["languages"].registerFoldingRangeProvider(e,new jn(i))),r.selectionRanges&&t.push(R["languages"].registerSelectionRangeProvider(e,new Nn(i))),r.documentFormattingEdits&&t.push(R["languages"].registerDocumentFormattingEditProvider(e,new Fn(i))),r.documentRangeFormattingEdits&&t.push(R["languages"].registerDocumentRangeFormattingEditProvider(e,new Dn(i)))}return o(),e.push(Vn(t)),Vn(e)}function Vn(n){return{dispose:function(){return zn(n)}}}function zn(n){while(n.length)n.pop().dispose()}}}]);