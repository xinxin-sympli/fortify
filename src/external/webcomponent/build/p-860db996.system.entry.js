var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function o(e){try{f(r.next(e))}catch(t){a(t)}}function c(e){try{f(r["throw"](e))}catch(t){a(t)}}function f(e){e.done?n(e.value):i(e.value).then(o,c)}f((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(t){return f([e,t])}}function f(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(c){o=[6,c];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-3e023753.system.js","./p-96956c80.system.js","./p-3cd9855f.system.js"],(function(e){"use strict";var t,n,r,i;return{setters:[function(e){t=e.r;n=e.h;r=e.H},function(e){i=e.C},function(){}],execute:function(){function a(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){return t({value:r.result,fileName:e.name,fileSize:e.size,sourceMime:e.type})};r.onerror=function(){return n(r.error)};r.readAsBinaryString(e)}))}function o(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){return t({value:r.result,fileName:e.name,fileSize:e.size,sourceMime:e.type})};r.onerror=function(){return n(r.error)};r.readAsArrayBuffer(e)}))}function c(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){return t({value:r.result,fileName:e.name,fileSize:e.size,sourceMime:e.type})};r.onerror=function(){return n(r.error)};r.readAsDataURL(e)}))}function f(e,t){return new Promise((function(n,r){var i=new FileReader;i.onload=function(){return n({value:i.result,fileName:e.name,fileSize:e.size,sourceMime:e.type})};i.onerror=function(){return r(i.error)};i.readAsText(e,t)}))}var u={readAsBinaryString:a,readAsArrayBuffer:o,readAsDataUrl:c,readAsText:f};function s(){s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return s.apply(this,arguments)}function l(e){return e.charAt(0)==="/"}function d(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1){e[n]=e[r]}e.pop()}function h(e,t){if(t===undefined)t="";var n=e&&e.split("/")||[];var r=t&&t.split("/")||[];var i=e&&l(e);var a=t&&l(t);var o=i||a;if(e&&l(e)){r=n}else if(n.length){r.pop();r=r.concat(n)}if(!r.length)return"/";var c;if(r.length){var f=r[r.length-1];c=f==="."||f===".."||f===""}else{c=false}var u=0;for(var s=r.length;s>=0;s--){var h=r[s];if(h==="."){d(r,s)}else if(h===".."){d(r,s);u++}else if(u){d(r,s);u--}}if(!o)for(;u--;u)r.unshift("..");if(o&&r[0]!==""&&(!r[0]||!l(r[0])))r.unshift("");var p=r.join("/");if(c&&p.substr(-1)!=="/")p+="/";return p}var p="Invariant failed";function v(e,t){if(e){return}{throw new Error(p)}}function w(e){return e.charAt(0)==="/"?e:"/"+e}function y(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function m(e,t){return y(e,t)?e.substr(t.length):e}function g(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function b(e){var t=e||"/";var n="";var r="";var i=t.indexOf("#");if(i!==-1){r=t.substr(i);t=t.substr(0,i)}var a=t.indexOf("?");if(a!==-1){n=t.substr(a);t=t.substr(0,a)}return{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function x(e){var t=e.pathname,n=e.search,r=e.hash;var i=t||"/";if(n&&n!=="?")i+=n.charAt(0)==="?"?n:"?"+n;if(r&&r!=="#")i+=r.charAt(0)==="#"?r:"#"+r;return i}function k(e,t,n,r){var i;if(typeof e==="string"){i=b(e);i.state=t}else{i=s({},e);if(i.pathname===undefined)i.pathname="";if(i.search){if(i.search.charAt(0)!=="?")i.search="?"+i.search}else{i.search=""}if(i.hash){if(i.hash.charAt(0)!=="#")i.hash="#"+i.hash}else{i.hash=""}if(t!==undefined&&i.state===undefined)i.state=t}try{i.pathname=decodeURI(i.pathname)}catch(a){if(a instanceof URIError){throw new URIError('Pathname "'+i.pathname+'" could not be decoded. '+"This is likely caused by an invalid percent-encoding.")}else{throw a}}if(n)i.key=n;if(r){if(!i.pathname){i.pathname=r.pathname}else if(i.pathname.charAt(0)!=="/"){i.pathname=h(i.pathname,r.pathname)}}else{if(!i.pathname){i.pathname="/"}}return i}function _(){var e=null;function t(t){e=t;return function(){if(e===t)e=null}}function n(t,n,r,i){if(e!=null){var a=typeof e==="function"?e(t,n):e;if(typeof a==="string"){if(typeof r==="function"){r(a,i)}else{i(true)}}else{i(a!==false)}}else{i(true)}}var r=[];function i(e){var t=true;function n(){if(t)e.apply(void 0,arguments)}r.push(n);return function(){t=false;r=r.filter((function(e){return e!==n}))}}function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++){t[n]=arguments[n]}r.forEach((function(e){return e.apply(void 0,t)}))}return{setPrompt:t,confirmTransitionTo:n,appendListener:i,notifyListeners:a}}var A=!!(typeof window!=="undefined"&&window.document&&window.document.createElement);function C(e,t){t(window.confirm(e))}function O(){var e=window.navigator.userAgent;if((e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1)return false;return window.history&&"pushState"in window.history}function P(){return window.navigator.userAgent.indexOf("Trident")===-1}function E(e){return e.state===undefined&&navigator.userAgent.indexOf("CriOS")===-1}var S="popstate";var D="hashchange";function T(){try{return window.history.state||{}}catch(e){return{}}}function L(e){if(e===void 0){e={}}!A?v(false):void 0;var t=window.history;var n=O();var r=!P();var i=e,a=i.forceRefresh,o=a===void 0?false:a,c=i.getUserConfirmation,f=c===void 0?C:c,u=i.keyLength,l=u===void 0?6:u;var d=e.basename?g(w(e.basename)):"";function h(e){var t=e||{},n=t.key,r=t.state;var i=window.location,a=i.pathname,o=i.search,c=i.hash;var f=a+o+c;if(d)f=m(f,d);return k(f,r,n)}function p(){return Math.random().toString(36).substr(2,l)}var y=_();function b(e){s(X,e);X.length=t.length;y.notifyListeners(X.location,X.action)}function L(e){if(E(e))return;j(h(e.state))}function R(){j(h(T()))}var z=false;function j(e){if(z){z=false;b()}else{var t="POP";y.confirmTransitionTo(e,t,f,(function(n){if(n){b({action:t,location:e})}else{F(e)}}))}}function F(e){var t=X.location;var n=I.indexOf(t.key);if(n===-1)n=0;var r=I.indexOf(e.key);if(r===-1)r=0;var i=n-r;if(i){z=true;N(i)}}var U=h(T());var I=[U.key];function B(e){return d+x(e)}function M(e,r){var i="PUSH";var a=k(e,r,p(),X.location);y.confirmTransitionTo(a,i,f,(function(e){if(!e)return;var r=B(a);var c=a.key,f=a.state;if(n){t.pushState({key:c,state:f},null,r);if(o){window.location.href=r}else{var u=I.indexOf(X.location.key);var s=I.slice(0,u+1);s.push(a.key);I=s;b({action:i,location:a})}}else{window.location.href=r}}))}function H(e,r){var i="REPLACE";var a=k(e,r,p(),X.location);y.confirmTransitionTo(a,i,f,(function(e){if(!e)return;var r=B(a);var c=a.key,f=a.state;if(n){t.replaceState({key:c,state:f},null,r);if(o){window.location.replace(r)}else{var u=I.indexOf(X.location.key);if(u!==-1)I[u]=a.key;b({action:i,location:a})}}else{window.location.replace(r)}}))}function N(e){t.go(e)}function q(){N(-1)}function G(){N(1)}var W=0;function J(e){W+=e;if(W===1&&e===1){window.addEventListener(S,L);if(r)window.addEventListener(D,R)}else if(W===0){window.removeEventListener(S,L);if(r)window.removeEventListener(D,R)}}var K=false;function Q(e){if(e===void 0){e=false}var t=y.setPrompt(e);if(!K){J(1);K=true}return function(){if(K){K=false;J(-1)}return t()}}function V(e){var t=y.appendListener(e);J(1);return function(){J(-1);t()}}var X={length:t.length,action:"POP",location:U,createHref:B,push:M,replace:H,go:N,goBack:q,goForward:G,block:Q,listen:V};return X}function R(e){if(e===void 0){e=window.location.hash}if(!e.length){return{}}var t=e.replace(/^(#|\?)?\/?/,"").split("&");var n={};for(var r=0;r<t.length;r+=1){var i=t[r].split("=");try{n[i[0]]=i[1]&&decodeURIComponent(i[1])}catch(a){console.warn(a)}}return n}function z(e){var t=[];Object.keys(e).forEach((function(n){if(typeof e[n]==="string"||typeof e[n]==="boolean"||typeof e[n]==="number"){t.push(n+"="+encodeURIComponent(e[n]))}}));return t.join("&")}var j=L();var F=Object.assign(j,{parseHash:R,queryStringify:z});var U=".sc-peculiar-certificate-decoder-h{display:block;width:100%;font-size:0}.input_paste.sc-peculiar-certificate-decoder{min-height:300px;width:100%;border-radius:3px;border-width:1px;border-style:solid;padding:14px;font-size:14px;font-family:monospace;resize:vertical}.controls.sc-peculiar-certificate-decoder{margin-top:10px}.button.sc-peculiar-certificate-decoder:not(:first-child){margin-left:10px}.viewer.sc-peculiar-certificate-decoder{margin-top:64px}.input_file.sc-peculiar-certificate-decoder{opacity:0;width:100%;height:100%;top:0;left:0;display:block;position:absolute}";var I=e("peculiar_certificate_decoder",function(){function e(e){var n=this;t(this,e);this.onClickDecode=function(){var e=n.inputPaste.value;if(e){n.decode(e)}};this.onClickExample=function(){n.decode(n.certificateExample)};this.onClickClear=function(){n.clear()};this.onChangeInputFile=function(e){return __awaiter(n,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){switch(r.label){case 0:t=e.target;if(!t.files)return[3,2];return[4,u.readAsBinaryString(t.files[0])];case 1:n=r.sent();if(typeof n.value==="string"){this.decode(n.value)}t.value="";r.label=2;case 2:return[2]}}))}))};this.onDropFile=function(e){return __awaiter(n,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){switch(r.label){case 0:e.stopPropagation();e.preventDefault();t=e.dataTransfer;if(!t.files)return[3,2];return[4,u.readAsBinaryString(t.files[0])];case 1:n=r.sent();if(typeof n.value==="string"){this.decode(n.value)}r.label=2;case 2:return[2]}}))}))}}e.prototype.componentDidLoad=function(){var e=this;var t=F.parseHash(window.location.search);if(t.cert){setTimeout((function(){return e.decode(t.cert)}),100)}};e.prototype.clear=function(){this.inputPaste.value="";this.certificateDecoded=null;F.replace({search:""})};e.prototype.decode=function(e){try{var t=new i(e,undefined,true);this.certificateDecoded=t;this.inputPaste.value=t.pem;F.replace({search:F.queryStringify({cert:t.base64})})}catch(n){this.certificateDecoded=null;console.error(n);alert("Error decoding certificate. Please use another file")}};e.prototype.render=function(){var e=this;return n(r,null,n("textarea",{placeholder:"Certificate DER or PEM",class:"input_paste peculiar_fill_light peculiar_stroke_grey_3 peculiar_color_dark",ref:function(t){return e.inputPaste=t},onDrop:this.onDropFile}),n("div",{class:"controls"},n("peculiar-button",{fill:"fill",class:"button",onClick:this.onClickDecode},"Decode"),n("peculiar-button",{class:"button"},"Choose file",n("input",{type:"file",class:"input_file",accept:"application/pkix-cert,application/x-x509-ca-cert,application/x-x509-user-cert",onChange:this.onChangeInputFile,value:""})),n("peculiar-button",{class:"button",onClick:this.onClickClear},"Clear"),this.certificateExample&&n("peculiar-button",{class:"button",onClick:this.onClickExample},"Example")),this.certificateDecoded&&n("peculiar-certificate-viewer",{certificate:this.certificateDecoded,class:"viewer",download:true}))};return e}());I.style=U}}}));