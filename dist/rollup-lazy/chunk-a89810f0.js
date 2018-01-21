"use strict";var __chunk85590140_js=require("./chunk-85590140.js"),BrowserXhr=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e.decorators=[{type:__chunk85590140_js.Injectable}],e.ctorParameters=function(){return[]},e}(),RequestMethod={Get:0,Post:1,Put:2,Delete:3,Options:4,Head:5,Patch:6};RequestMethod[RequestMethod.Get]="Get",RequestMethod[RequestMethod.Post]="Post",RequestMethod[RequestMethod.Put]="Put",RequestMethod[RequestMethod.Delete]="Delete",RequestMethod[RequestMethod.Options]="Options",RequestMethod[RequestMethod.Head]="Head",RequestMethod[RequestMethod.Patch]="Patch";var ReadyState={Unsent:0,Open:1,HeadersReceived:2,Loading:3,Done:4,Cancelled:5};ReadyState[ReadyState.Unsent]="Unsent",ReadyState[ReadyState.Open]="Open",ReadyState[ReadyState.HeadersReceived]="HeadersReceived",ReadyState[ReadyState.Loading]="Loading",ReadyState[ReadyState.Done]="Done",ReadyState[ReadyState.Cancelled]="Cancelled";var ResponseType={Basic:0,Cors:1,Default:2,Error:3,Opaque:4};ResponseType[ResponseType.Basic]="Basic",ResponseType[ResponseType.Cors]="Cors",ResponseType[ResponseType.Default]="Default",ResponseType[ResponseType.Error]="Error",ResponseType[ResponseType.Opaque]="Opaque";var ContentType={NONE:0,JSON:1,FORM:2,FORM_DATA:3,TEXT:4,BLOB:5,ARRAY_BUFFER:6};ContentType[ContentType.NONE]="NONE",ContentType[ContentType.JSON]="JSON",ContentType[ContentType.FORM]="FORM",ContentType[ContentType.FORM_DATA]="FORM_DATA",ContentType[ContentType.TEXT]="TEXT",ContentType[ContentType.BLOB]="BLOB",ContentType[ContentType.ARRAY_BUFFER]="ARRAY_BUFFER";var ResponseContentType={Text:0,Json:1,ArrayBuffer:2,Blob:3};ResponseContentType[ResponseContentType.Text]="Text",ResponseContentType[ResponseContentType.Json]="Json",ResponseContentType[ResponseContentType.ArrayBuffer]="ArrayBuffer",ResponseContentType[ResponseContentType.Blob]="Blob";var Headers=function(){function e(t){var n=this;this._headers=new Map,this._normalizedNames=new Map,t&&(t instanceof e?t.forEach(function(e,t){e.forEach(function(e){return n.append(t,e)})}):Object.keys(t).forEach(function(e){var r=Array.isArray(t[e])?t[e]:[t[e]];n.delete(e),r.forEach(function(t){return n.append(e,t)})}))}return e.fromResponseHeaderString=function(t){var n=new e;return t.split("\n").forEach(function(e){var t=e.indexOf(":");if(t>0){var r=e.slice(0,t),o=e.slice(t+1).trim();n.set(r,o)}}),n},e.prototype.append=function(e,t){var n=this.getAll(e);null===n?this.set(e,t):n.push(t)},e.prototype.delete=function(e){var t=e.toLowerCase();this._normalizedNames.delete(t),this._headers.delete(t)},e.prototype.forEach=function(e){var t=this;this._headers.forEach(function(n,r){return e(n,t._normalizedNames.get(r),t._headers)})},e.prototype.get=function(e){var t=this.getAll(e);return null===t?null:t.length>0?t[0]:null},e.prototype.has=function(e){return this._headers.has(e.toLowerCase())},e.prototype.keys=function(){return Array.from(this._normalizedNames.values())},e.prototype.set=function(e,t){Array.isArray(t)?t.length&&this._headers.set(e.toLowerCase(),[t.join(",")]):this._headers.set(e.toLowerCase(),[t]),this.mayBeSetNormalizedName(e)},e.prototype.values=function(){return Array.from(this._headers.values())},e.prototype.toJSON=function(){var e=this,t={};return this._headers.forEach(function(n,r){var o=[];n.forEach(function(e){return o.push.apply(o,e.split(","))}),t[e._normalizedNames.get(r)]=o}),t},e.prototype.getAll=function(e){return this.has(e)?this._headers.get(e.toLowerCase())||null:null},e.prototype.entries=function(){throw new Error('"entries" method is not implemented on Headers class')},e.prototype.mayBeSetNormalizedName=function(e){var t=e.toLowerCase();this._normalizedNames.has(t)||this._normalizedNames.set(t,e)},e}(),ResponseOptions=function(){function e(e){void 0===e&&(e={});var t=e.body,n=e.status,r=e.headers,o=e.statusText,s=e.type,a=e.url;this.body=null!=t?t:null,this.status=null!=n?n:null,this.headers=null!=r?r:null,this.statusText=null!=o?o:null,this.type=null!=s?s:null,this.url=null!=a?a:null}return e.prototype.merge=function(t){return new e({body:t&&null!=t.body?t.body:this.body,status:t&&null!=t.status?t.status:this.status,headers:t&&null!=t.headers?t.headers:this.headers,statusText:t&&null!=t.statusText?t.statusText:this.statusText,type:t&&null!=t.type?t.type:this.type,url:t&&null!=t.url?t.url:this.url})},e}(),BaseResponseOptions=function(e){__chunk85590140_js.__extends(t,e);function t(){return e.call(this,{status:200,statusText:"Ok",type:ResponseType.Default,headers:new Headers})||this}return t.decorators=[{type:__chunk85590140_js.Injectable}],t.ctorParameters=function(){return[]},t}(ResponseOptions),ConnectionBackend=function(){return function(){}}(),XSRFStrategy=function(){return function(){}}();function normalizeMethodName(e){if("string"!=typeof e)return e;switch(e.toUpperCase()){case"GET":return RequestMethod.Get;case"POST":return RequestMethod.Post;case"PUT":return RequestMethod.Put;case"DELETE":return RequestMethod.Delete;case"OPTIONS":return RequestMethod.Options;case"HEAD":return RequestMethod.Head;case"PATCH":return RequestMethod.Patch}throw new Error('Invalid request method. The method "'+e+'" is not supported.')}var isSuccess=function(e){return e>=200&&e<300};function getResponseURL(e){return"responseURL"in e?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}function stringToArrayBuffer(e){for(var t=new Uint16Array(e.length),n=0,r=e.length;n<r;n++)t[n]=e.charCodeAt(n);return t.buffer}function paramParser(e){void 0===e&&(e="");var t=new Map;if(e.length>0){e.split("&").forEach(function(e){var n=e.indexOf("="),r=-1==n?[e,""]:[e.slice(0,n),e.slice(n+1)],o=r[0],s=r[1],a=t.get(o)||[];a.push(s),t.set(o,a)})}return t}var QueryEncoder=function(){function e(){}return e.prototype.encodeKey=function(e){return standardEncoding(e)},e.prototype.encodeValue=function(e){return standardEncoding(e)},e}();function standardEncoding(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var URLSearchParams=function(){function e(e,t){void 0===e&&(e=""),void 0===t&&(t=new QueryEncoder),this.rawParams=e,this.queryEncoder=t,this.paramsMap=paramParser(e)}return e.prototype.clone=function(){var t=new e("",this.queryEncoder);return t.appendAll(this),t},e.prototype.has=function(e){return this.paramsMap.has(e)},e.prototype.get=function(e){var t=this.paramsMap.get(e);return Array.isArray(t)?t[0]:null},e.prototype.getAll=function(e){return this.paramsMap.get(e)||[]},e.prototype.set=function(e,t){if(void 0!==t&&null!==t){var n=this.paramsMap.get(e)||[];n.length=0,n.push(t),this.paramsMap.set(e,n)}else this.delete(e)},e.prototype.setAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){var r=t.paramsMap.get(n)||[];r.length=0,r.push(e[0]),t.paramsMap.set(n,r)})},e.prototype.append=function(e,t){if(void 0!==t&&null!==t){var n=this.paramsMap.get(e)||[];n.push(t),this.paramsMap.set(e,n)}},e.prototype.appendAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){for(var r=t.paramsMap.get(n)||[],o=0;o<e.length;++o)r.push(e[o]);t.paramsMap.set(n,r)})},e.prototype.replaceAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){var r=t.paramsMap.get(n)||[];r.length=0;for(var o=0;o<e.length;++o)r.push(e[o]);t.paramsMap.set(n,r)})},e.prototype.toString=function(){var e=this,t=[];return this.paramsMap.forEach(function(n,r){n.forEach(function(n){return t.push(e.queryEncoder.encodeKey(r)+"="+e.queryEncoder.encodeValue(n))})}),t.join("&")},e.prototype.delete=function(e){this.paramsMap.delete(e)},e}(),Body=function(){function e(){}return e.prototype.json=function(){return"string"==typeof this._body?JSON.parse(this._body):this._body instanceof ArrayBuffer?JSON.parse(this.text()):this._body},e.prototype.text=function(e){if(void 0===e&&(e="legacy"),this._body instanceof URLSearchParams)return this._body.toString();if(this._body instanceof ArrayBuffer)switch(e){case"legacy":return String.fromCharCode.apply(null,new Uint16Array(this._body));case"iso-8859":return String.fromCharCode.apply(null,new Uint8Array(this._body));default:throw new Error("Invalid value for encodingHint: "+e)}return null==this._body?"":"object"==typeof this._body?JSON.stringify(this._body,null,2):this._body.toString()},e.prototype.arrayBuffer=function(){return this._body instanceof ArrayBuffer?this._body:stringToArrayBuffer(this.text())},e.prototype.blob=function(){if(this._body instanceof Blob)return this._body;if(this._body instanceof ArrayBuffer)return new Blob([this._body]);throw new Error("The request body isn't either a blob or an array buffer")},e}(),Response=function(e){__chunk85590140_js.__extends(t,e);function t(t){var n=e.call(this)||this;return n._body=t.body,n.status=t.status,n.ok=n.status>=200&&n.status<=299,n.statusText=t.statusText,n.headers=t.headers,n.type=t.type,n.url=t.url,n}return t.prototype.toString=function(){return"Response with status: "+this.status+" "+this.statusText+" for URL: "+this.url},t}(Body),_nextRequestId=0,JSONP_HOME="__ng_jsonp__",_jsonpConnections=null;function _getJsonpConnections(){var e="object"==typeof window?window:{};return null===_jsonpConnections&&(_jsonpConnections=e[JSONP_HOME]={}),_jsonpConnections}var BrowserJsonp=function(){function e(){}return e.prototype.build=function(e){var t=document.createElement("script");return t.src=e,t},e.prototype.nextRequestID=function(){return"__req"+_nextRequestId++},e.prototype.requestCallback=function(e){return JSONP_HOME+"."+e+".finished"},e.prototype.exposeConnection=function(e,t){_getJsonpConnections()[e]=t},e.prototype.removeConnection=function(e){_getJsonpConnections()[e]=null},e.prototype.send=function(e){document.body.appendChild(e)},e.prototype.cleanup=function(e){e.parentNode&&e.parentNode.removeChild(e)},e.decorators=[{type:__chunk85590140_js.Injectable}],e.ctorParameters=function(){return[]},e}(),JSONP_ERR_NO_CALLBACK="JSONP injected script did not invoke callback.",JSONP_ERR_WRONG_METHOD="JSONP requests must use GET request method.",JSONPConnection=function(){function e(e,t,n){var r=this;if(this._dom=t,this.baseResponseOptions=n,this._finished=!1,e.method!==RequestMethod.Get)throw new TypeError(JSONP_ERR_WRONG_METHOD);this.request=e,this.response=new __chunk85590140_js.Observable(function(o){r.readyState=ReadyState.Loading;var s=r._id=t.nextRequestID();t.exposeConnection(s,r);var a=t.requestCallback(r._id),i=e.url;i.indexOf("=JSONP_CALLBACK&")>-1?i=i.replace("=JSONP_CALLBACK&","="+a+"&"):i.lastIndexOf("=JSONP_CALLBACK")===i.length-"=JSONP_CALLBACK".length&&(i=i.substring(0,i.length-"=JSONP_CALLBACK".length)+"="+a);var p=r._script=t.build(i),u=function(e){if(r.readyState!==ReadyState.Cancelled){if(r.readyState=ReadyState.Done,t.cleanup(p),!r._finished){var s=new ResponseOptions({body:JSONP_ERR_NO_CALLBACK,type:ResponseType.Error,url:i});return n&&(s=n.merge(s)),void o.error(new Response(s))}var a=new ResponseOptions({body:r._responseData,url:i});r.baseResponseOptions&&(a=r.baseResponseOptions.merge(a)),o.next(new Response(a)),o.complete()}},c=function(e){if(r.readyState!==ReadyState.Cancelled){r.readyState=ReadyState.Done,t.cleanup(p);var s=new ResponseOptions({body:e.message,type:ResponseType.Error});n&&(s=n.merge(s)),o.error(new Response(s))}};return p.addEventListener("load",u),p.addEventListener("error",c),t.send(p),function(){r.readyState=ReadyState.Cancelled,p.removeEventListener("load",u),p.removeEventListener("error",c),r._dom.cleanup(p)}})}return e.prototype.finished=function(e){this._finished=!0,this._dom.removeConnection(this._id),this.readyState!==ReadyState.Cancelled&&(this._responseData=e)},e}(),JSONPBackend=function(e){__chunk85590140_js.__extends(t,e);function t(t,n){var r=e.call(this)||this;return r._browserJSONP=t,r._baseResponseOptions=n,r}return t.prototype.createConnection=function(e){return new JSONPConnection(e,this._browserJSONP,this._baseResponseOptions)},t.decorators=[{type:__chunk85590140_js.Injectable}],t.ctorParameters=function(){return[{type:BrowserJsonp},{type:ResponseOptions}]},t}(ConnectionBackend),XSSI_PREFIX=/^\)\]\}',?\n/,XHRConnection=function(){function e(e,t,n){var r=this;this.request=e,this.response=new __chunk85590140_js.Observable(function(o){var s=t.build();s.open(RequestMethod[e.method].toUpperCase(),e.url),null!=e.withCredentials&&(s.withCredentials=e.withCredentials);var a=function(){var t=1223===s.status?204:s.status,r=null;204!==t&&"string"==typeof(r=void 0===s.response?s.responseText:s.response)&&(r=r.replace(XSSI_PREFIX,"")),0===t&&(t=r?200:0);var a=Headers.fromResponseHeaderString(s.getAllResponseHeaders()),i=getResponseURL(s)||e.url,p=s.statusText||"OK",u=new ResponseOptions({body:r,status:t,headers:a,statusText:p,url:i});null!=n&&(u=n.merge(u));var c=new Response(u);if(c.ok=isSuccess(t),c.ok)return o.next(c),void o.complete();o.error(c)},i=function(e){var t=new ResponseOptions({body:e,type:ResponseType.Error,status:s.status,statusText:s.statusText});null!=n&&(t=n.merge(t)),o.error(new Response(t))};if(r.setDetectedContentType(e,s),null==e.headers&&(e.headers=new Headers),e.headers.has("Accept")||e.headers.append("Accept","application/json, text/plain, */*"),e.headers.forEach(function(e,t){return s.setRequestHeader(t,e.join(","))}),null!=e.responseType&&null!=s.responseType)switch(e.responseType){case ResponseContentType.ArrayBuffer:s.responseType="arraybuffer";break;case ResponseContentType.Json:s.responseType="json";break;case ResponseContentType.Text:s.responseType="text";break;case ResponseContentType.Blob:s.responseType="blob";break;default:throw new Error("The selected responseType is not supported")}return s.addEventListener("load",a),s.addEventListener("error",i),s.send(r.request.getBody()),function(){s.removeEventListener("load",a),s.removeEventListener("error",i),s.abort()}})}return e.prototype.setDetectedContentType=function(e,t){if(null==e.headers||null==e.headers.get("Content-Type"))switch(e.contentType){case ContentType.NONE:break;case ContentType.JSON:t.setRequestHeader("content-type","application/json");break;case ContentType.FORM:t.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=UTF-8");break;case ContentType.TEXT:t.setRequestHeader("content-type","text/plain");break;case ContentType.BLOB:var n=e.blob();n.type&&t.setRequestHeader("content-type",n.type)}},e}(),CookieXSRFStrategy=function(){function e(e,t){void 0===e&&(e="XSRF-TOKEN"),void 0===t&&(t="X-XSRF-TOKEN"),this._cookieName=e,this._headerName=t}return e.prototype.configureRequest=function(e){var t=__chunk85590140_js.getDOM().getCookie(this._cookieName);t&&e.headers.set(this._headerName,t)},e}(),XHRBackend=function(){function e(e,t,n){this._browserXHR=e,this._baseResponseOptions=t,this._xsrfStrategy=n}return e.prototype.createConnection=function(e){return this._xsrfStrategy.configureRequest(e),new XHRConnection(e,this._browserXHR,this._baseResponseOptions)},e.decorators=[{type:__chunk85590140_js.Injectable}],e.ctorParameters=function(){return[{type:BrowserXhr},{type:ResponseOptions},{type:XSRFStrategy}]},e}(),RequestOptions=function(){function e(e){void 0===e&&(e={});var t=e.method,n=e.headers,r=e.body,o=e.url,s=e.search,a=e.params,i=e.withCredentials,p=e.responseType;this.method=null!=t?normalizeMethodName(t):null,this.headers=null!=n?n:null,this.body=null!=r?r:null,this.url=null!=o?o:null,this.params=this._mergeSearchParams(a||s),this.withCredentials=null!=i?i:null,this.responseType=null!=p?p:null}return Object.defineProperty(e.prototype,"search",{get:function(){return this.params},set:function(e){this.params=e},enumerable:!0,configurable:!0}),e.prototype.merge=function(t){return new e({method:t&&null!=t.method?t.method:this.method,headers:t&&null!=t.headers?t.headers:new Headers(this.headers),body:t&&null!=t.body?t.body:this.body,url:t&&null!=t.url?t.url:this.url,params:t&&this._mergeSearchParams(t.params||t.search),withCredentials:t&&null!=t.withCredentials?t.withCredentials:this.withCredentials,responseType:t&&null!=t.responseType?t.responseType:this.responseType})},e.prototype._mergeSearchParams=function(e){return e?e instanceof URLSearchParams?e.clone():"string"==typeof e?new URLSearchParams(e):this._parseParams(e):this.params},e.prototype._parseParams=function(e){var t=this;void 0===e&&(e={});var n=new URLSearchParams;return Object.keys(e).forEach(function(r){var o=e[r];Array.isArray(o)?o.forEach(function(e){return t._appendParam(r,e,n)}):t._appendParam(r,o,n)}),n},e.prototype._appendParam=function(e,t,n){"string"!=typeof t&&(t=JSON.stringify(t)),n.append(e,t)},e}(),BaseRequestOptions=function(e){__chunk85590140_js.__extends(t,e);function t(){return e.call(this,{method:RequestMethod.Get,headers:new Headers})||this}return t.decorators=[{type:__chunk85590140_js.Injectable}],t.ctorParameters=function(){return[]},t}(RequestOptions),Request=function(e){__chunk85590140_js.__extends(t,e);function t(t){var n=e.call(this)||this,r=t.url;n.url=t.url;var o=t.params||t.search;if(o){var s=void 0;if((s="object"!=typeof o||o instanceof URLSearchParams?o.toString():urlEncodeParams(o).toString()).length>0){var a="?";-1!=n.url.indexOf("?")&&(a="&"==n.url[n.url.length-1]?"":"&"),n.url=r+a+s}}return n._body=t.body,n.method=normalizeMethodName(t.method),n.headers=new Headers(t.headers),n.contentType=n.detectContentType(),n.withCredentials=t.withCredentials,n.responseType=t.responseType,n}return t.prototype.detectContentType=function(){switch(this.headers.get("content-type")){case"application/json":return ContentType.JSON;case"application/x-www-form-urlencoded":return ContentType.FORM;case"multipart/form-data":return ContentType.FORM_DATA;case"text/plain":case"text/html":return ContentType.TEXT;case"application/octet-stream":return this._body instanceof ArrayBuffer$1?ContentType.ARRAY_BUFFER:ContentType.BLOB;default:return this.detectContentTypeFromBody()}},t.prototype.detectContentTypeFromBody=function(){return null==this._body?ContentType.NONE:this._body instanceof URLSearchParams?ContentType.FORM:this._body instanceof FormData?ContentType.FORM_DATA:this._body instanceof Blob$1?ContentType.BLOB:this._body instanceof ArrayBuffer$1?ContentType.ARRAY_BUFFER:this._body&&"object"==typeof this._body?ContentType.JSON:ContentType.TEXT},t.prototype.getBody=function(){switch(this.contentType){case ContentType.JSON:case ContentType.FORM:return this.text();case ContentType.FORM_DATA:return this._body;case ContentType.TEXT:return this.text();case ContentType.BLOB:return this.blob();case ContentType.ARRAY_BUFFER:return this.arrayBuffer();default:return null}},t}(Body);function urlEncodeParams(e){var t=new URLSearchParams;return Object.keys(e).forEach(function(n){var r=e[n];r&&Array.isArray(r)?r.forEach(function(e){return t.append(n,e.toString())}):t.append(n,r.toString())}),t}var noop=function(){},w="object"==typeof window?window:noop,FormData=w.FormData||noop,Blob$1=w.Blob||noop,ArrayBuffer$1=w.ArrayBuffer||noop;function httpRequest(e,t){return e.createConnection(t).response}function mergeOptions(e,t,n,r){var o=e;return t?o.merge(new RequestOptions({method:t.method||n,url:t.url||r,search:t.search,params:t.params,headers:t.headers,body:t.body,withCredentials:t.withCredentials,responseType:t.responseType})):o.merge(new RequestOptions({method:n,url:r}))}var Http=function(){function e(e,t){this._backend=e,this._defaultOptions=t}return e.prototype.request=function(e,t){var n;if("string"==typeof e)n=httpRequest(this._backend,new Request(mergeOptions(this._defaultOptions,t,RequestMethod.Get,e)));else{if(!(e instanceof Request))throw new Error("First argument must be a url string or Request instance.");n=httpRequest(this._backend,e)}return n},e.prototype.get=function(e,t){return this.request(new Request(mergeOptions(this._defaultOptions,t,RequestMethod.Get,e)))},e.prototype.post=function(e,t,n){return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({body:t})),n,RequestMethod.Post,e)))},e.prototype.put=function(e,t,n){return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({body:t})),n,RequestMethod.Put,e)))},e.prototype.delete=function(e,t){return this.request(new Request(mergeOptions(this._defaultOptions,t,RequestMethod.Delete,e)))},e.prototype.patch=function(e,t,n){return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({body:t})),n,RequestMethod.Patch,e)))},e.prototype.head=function(e,t){return this.request(new Request(mergeOptions(this._defaultOptions,t,RequestMethod.Head,e)))},e.prototype.options=function(e,t){return this.request(new Request(mergeOptions(this._defaultOptions,t,RequestMethod.Options,e)))},e.decorators=[{type:__chunk85590140_js.Injectable}],e.ctorParameters=function(){return[{type:ConnectionBackend},{type:RequestOptions}]},e}(),Jsonp=function(e){__chunk85590140_js.__extends(t,e);function t(t,n){return e.call(this,t,n)||this}return t.prototype.request=function(e,t){if("string"==typeof e&&(e=new Request(mergeOptions(this._defaultOptions,t,RequestMethod.Get,e))),!(e instanceof Request))throw new Error("First argument must be a url string or Request instance.");if(e.method!==RequestMethod.Get)throw new Error("JSONP requests must use GET request method.");return httpRequest(this._backend,e)},t.decorators=[{type:__chunk85590140_js.Injectable}],t.ctorParameters=function(){return[{type:ConnectionBackend},{type:RequestOptions}]},t}(Http);function _createDefaultCookieXSRFStrategy(){return new CookieXSRFStrategy}function httpFactory(e,t){return new Http(e,t)}var HttpModule=function(){function e(){}return e.decorators=[{type:__chunk85590140_js.NgModule,args:[{providers:[{provide:Http,useFactory:httpFactory,deps:[XHRBackend,RequestOptions]},BrowserXhr,{provide:RequestOptions,useClass:BaseRequestOptions},{provide:ResponseOptions,useClass:BaseResponseOptions},XHRBackend,{provide:XSRFStrategy,useFactory:_createDefaultCookieXSRFStrategy}]}]}],e.ctorParameters=function(){return[]},e}(),VERSION=new __chunk85590140_js.Version("5.2.0");exports.Http=Http,exports.HttpModule=HttpModule,exports.BrowserXhr=BrowserXhr,exports.JSONPBackend=JSONPBackend,exports.JSONPConnection=JSONPConnection,exports.CookieXSRFStrategy=CookieXSRFStrategy,exports.XHRBackend=XHRBackend,exports.XHRConnection=XHRConnection,exports.BaseRequestOptions=BaseRequestOptions,exports.RequestOptions=RequestOptions,exports.BaseResponseOptions=BaseResponseOptions,exports.ResponseOptions=ResponseOptions,exports.ReadyState=ReadyState,exports.RequestMethod=RequestMethod,exports.ResponseContentType=ResponseContentType,exports.ResponseType=ResponseType,exports.Headers=Headers,exports.Jsonp=Jsonp,exports.ConnectionBackend=ConnectionBackend,exports.XSRFStrategy=XSRFStrategy,exports.Request=Request,exports.Response=Response,exports.QueryEncoder=QueryEncoder,exports.URLSearchParams=URLSearchParams,exports.VERSION=VERSION,exports.BrowserJsonp=BrowserJsonp,exports.Body=Body,exports._createDefaultCookieXSRFStrategy=_createDefaultCookieXSRFStrategy,exports.httpFactory=httpFactory;