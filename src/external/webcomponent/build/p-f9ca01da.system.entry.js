var __awaiter=this&&this.__awaiter||function(e,t,r,i){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function a(e){try{s(i.next(e))}catch(t){n(t)}}function c(e){try{s(i["throw"](e))}catch(t){n(t)}}function s(e){e.done?r(e.value):o(e.value).then(a,c)}s((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,o,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(e){return function(t){return s([e,t])}}function s(a){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,o&&(n=a[0]&2?o["return"]:a[0]?o["throw"]||((n=o["return"])&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;if(o=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){r.label=a[1];break}if(a[0]===6&&r.label<n[1]){r.label=n[1];n=a;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(a);break}if(n[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(c){a=[6,c];o=0}finally{i=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-1e1d63e0.system.js","./p-b0f61c01.system.js","./p-2b72bd04.system.js"],(function(e){"use strict";var t,r,i,o,n,a,c,s;return{setters:[function(e){t=e.r;r=e.c;i=e.h;o=e.g;n=e.H},function(e){a=e.C},function(e){c=e.l;s=e.g}],execute:function(){var l=/iPhone/i;var u=/iPod/i;var f=/iPad/i;var d=/\biOS-universal(?:.+)Mac\b/i;var p=/\bAndroid(?:.+)Mobile\b/i;var g=/Android/i;var h=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;var _=/Silk/i;var v=/Windows Phone/i;var b=/\bWindows(?:.+)ARM\b/i;var y=/BlackBerry/i;var E=/BB10/i;var C=/Opera Mini/i;var w=/\b(CriOS|Chrome)(?:.+)Mobile/i;var k=/Mobile(?:.+)Firefox\b/i;var D=function(e){return typeof e!=="undefined"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints==="number"&&e.maxTouchPoints>1&&typeof MSStream==="undefined"};function N(e){return function(t){return t.test(e)}}function I(e){var t={userAgent:"",platform:"",maxTouchPoints:0};if(!e&&typeof navigator!=="undefined"){t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}}else if(typeof e==="string"){t.userAgent=e}else if(e&&e.userAgent){t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0}}var r=t.userAgent;var i=r.split("[FBAN");if(typeof i[1]!=="undefined"){r=i[0]}i=r.split("Twitter");if(typeof i[1]!=="undefined"){r=i[0]}var o=N(r);var n={apple:{phone:o(l)&&!o(v),ipod:o(u),tablet:!o(l)&&(o(f)||D(t))&&!o(v),universal:o(d),device:(o(l)||o(u)||o(f)||o(d)||D(t))&&!o(v)},amazon:{phone:o(h),tablet:!o(h)&&o(_),device:o(h)||o(_)},android:{phone:!o(v)&&o(h)||!o(v)&&o(p),tablet:!o(v)&&!o(h)&&!o(p)&&(o(_)||o(g)),device:!o(v)&&(o(h)||o(_)||o(p)||o(g))||o(/\bokhttp\b/i)},windows:{phone:o(v),tablet:o(b),device:o(v)||o(b)},other:{blackberry:o(y),blackberry10:o(E),opera:o(C),firefox:o(k),chrome:o(w),device:o(y)||o(E)||o(C)||o(k)||o(w)},any:false,phone:false,tablet:false};n.any=n.apple.device||n.android.device||n.windows.device||n.other.device;n.phone=n.apple.phone||n.android.phone||n.windows.phone;n.tablet=n.apple.tablet||n.android.tablet||n.windows.tablet;return n}var S="127.0.0.1:31337";var m=1e4;var T;(function(e){e["PROVIDERS_ADDED"]="providers:added";e["PROVIDERS_REMOVED"]="providers:removed";e["CLOSE"]="close";e["CONNECTION_PENDING"]="connection:pending";e["CONNECTION_RESOLVED"]="connection:resolved";e["CONNECTION_NOT_SUPPORTED"]="connection:not_supported";e["CONNECTION_REJECTED"]="connection:rejected";e["CHALLENGE_PENDING"]="challenge:pending";e["CHALLENGE_RESOLVED"]="challenge:resolved";e["CHALLENGE_REJECTED"]="challenge:rejected";e["DATA_CERTIFICATES_PENDING"]="data:certificates:pending";e["DATA_CERTIFICATES_RESOLVED"]="data:certificates:resolved";e["DATA_PROVIDERS_PENDING"]="data:providers:pending";e["DATA_PROVIDERS_RESOLVED"]="data:providers:resolved"})(T||(T={}));var A=undefined&&undefined.__classPrivateFieldGet||function(e,t){if(!t.has(e)){throw new TypeError("attempted to get private field on non-instance")}return t.get(e)};var O=undefined&&undefined.__classPrivateFieldSet||function(e,t,r){if(!t.has(e)){throw new TypeError("attempted to set private field on non-instance")}t.set(e,r);return r};var P,R,F,L,x;var V=function(){function e(e){P.set(this,void 0);R.set(this,void 0);F.set(this,I(window.navigator));L.set(this,void 0);x.set(this,"");this.options={logger:function(){},filters:{}};if(e.logger){this.options.logger=e.logger}if(e.filters){this.options.filters=e.filters}}e.prototype.isConnectionSupported=function(){return!A(this,F).phone};e.prototype.getServer=function(){return A(this,P)};e.hasConnection=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:r.trys.push([0,2,,3]);return[4,fetch("https://"+S+"/.well-known/webcrypto-socket")];case 1:e=r.sent();return[2,e.ok];case 2:t=r.sent();return[2,false];case 3:return[2]}}))}))};e.prototype.checkHasConnection=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(r){return[2,new Promise((function(r){var i=function(){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(o){switch(o.label){case 0:return[4,e.hasConnection()];case 1:t=o.sent();if(t){r()}else{O(this,L,window.setTimeout(i,m))}return[2]}}))}))};i()}))]}))}))};e.prototype.tryChallenge=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:return[4,A(this,P).isLoggedIn()];case 1:e=t.sent();if(!e){return[2,A(this,P).challenge()]}return[2,null]}}))}))};e.prototype.login=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,A(this,P).login()];case 1:e.sent();return[2]}}))}))};e.prototype.connect=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;var i=this;return __generator(this,(function(o){switch(o.label){case 0:if(!!A(this,R))return[3,4];o.label=1;case 1:o.trys.push([1,3,,4]);e=O;t=[this,R];return[4,WebcryptoSocket.BrowserStorage.create()];case 2:e.apply(void 0,t.concat([o.sent()]));return[3,4];case 3:r=o.sent();O(this,R,new WebcryptoSocket.MemoryStorage);return[3,4];case 4:return[2,new Promise((function(e,t){if(A(i,P)){e()}O(i,P,new WebcryptoSocket.SocketProvider({storage:A(i,R)}).connect(S).on("error",(function(e){console.log(e);t()})).on("listening",(function(){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(t){e();return[2]}))}))})).on("token",(function(e){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(t){if(e.added.length){this.options.logger(T.PROVIDERS_ADDED,e.added)}if(e.removed.length){this.options.logger(T.PROVIDERS_REMOVED,e.removed)}return[2]}))}))})).on("disconnect",(function(){console.log("disconnect")})).on("close",(function(){i.options.logger(T.CLOSE)})))}))]}}))}))};e.prototype.disconnect=function(){if(A(this,P)){A(this,P).client.close();O(this,P,null)}if(A(this,L)){clearTimeout(A(this,L));O(this,L,null)}};e.prototype.start=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.options.logger(T.CONNECTION_PENDING);if(!this.isConnectionSupported()){this.options.logger(T.CONNECTION_NOT_SUPPORTED);return[2]}return[4,e.hasConnection()];case 1:if(!t.sent()){this.options.logger(T.CONNECTION_REJECTED)}return[4,this.checkHasConnection()];case 2:t.sent();return[4,this.connect()];case 3:t.sent();return[4,this.tryLogin()];case 4:t.sent();return[2]}}))}))};e.prototype.tryLogin=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:return[4,this.tryChallenge()];case 1:e=r.sent();if(!e)return[3,5];O(this,x,e);this.options.logger(T.CHALLENGE_PENDING);r.label=2;case 2:r.trys.push([2,4,,5]);return[4,this.login()];case 3:r.sent();O(this,x,undefined);this.options.logger(T.CHALLENGE_RESOLVED);return[3,5];case 4:t=r.sent();O(this,x,undefined);this.options.logger(T.CHALLENGE_REJECTED);return[2];case 5:this.options.logger(T.CONNECTION_RESOLVED);return[2]}}))}))};e.prototype.getChallenge=function(){return A(this,x)};e.prototype.isProviderValid=function(e){var t=this.options.filters;if(t&&t.onlyRemote&&!e.isRemovable){return false}return true};e.prototype.getProvidersInfo=function(){return __awaiter(this,void 0,void 0,(function(){var e;var t=this;return __generator(this,(function(r){switch(r.label){case 0:return[4,A(this,P).info()];case 1:e=r.sent();return[2,e.providers.filter((function(e){return t.isProviderValid(e)}))]}}))}))};e.prototype.getProviderById=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,i;return __generator(this,(function(o){switch(o.label){case 0:return[4,A(this,P).getCrypto(e)];case 1:t=o.sent();return[4,t.isLoggedIn()];case 2:r=o.sent();if(!!r)return[3,6];o.label=3;case 3:o.trys.push([3,5,,6]);return[4,t.login()];case 4:o.sent();return[3,6];case 5:i=o.sent();return[2,undefined];case 6:return[2,t]}}))}))};e.prototype.certificateFilterAndGetPrivateKeyId=function(e,t,r){var i=this.options.filters;if(!i.expired&&e.notAfter.getTime()<Date.now()){return false}var o=r.filter((function(e){var r=e.split("-");return r[0]==="private"&&r[2]===t.split("-")[2]}))[0];if(!o){return false}if(i.emailMatch&&!e.subjectName.includes(i.emailMatch)){return false}return o};e.prototype.getCertificatesById=function(t){return __awaiter(this,void 0,void 0,(function(){var r,i,o,n,a,c,s,l,u;return __generator(this,(function(f){switch(f.label){case 0:return[4,this.getProviderById(t)];case 1:r=f.sent();if(!r){return[2,undefined]}i=[];return[4,r.keyStorage.keys()];case 2:o=f.sent();return[4,r.certStorage.keys()];case 3:n=f.sent();a=0,c=n;f.label=4;case 4:if(!(a<c.length))return[3,7];s=c[a];if(s.split("-")[0]!=="x509"){return[3,6]}return[4,r.certStorage.getItem(s)];case 5:l=f.sent();u=this.certificateFilterAndGetPrivateKeyId(l,s,o);if(!u){return[3,6]}l.id=s;l.subject=e.getSubjectIssuerValue(l.subjectName);l.issuer=e.getSubjectIssuerValue(l.issuerName);l.privateKeyId=u;i.push(l);f.label=6;case 6:a++;return[3,4];case 7:return[2,i]}}))}))};e.prototype.getCertificateBodyById=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r,i,o;return __generator(this,(function(n){switch(n.label){case 0:return[4,this.getProviderById(e)];case 1:r=n.sent();if(!r){return[2,undefined]}return[4,r.certStorage.getItem(t)];case 2:i=n.sent();return[4,r.certStorage.exportCert("raw",i)];case 3:o=n.sent();return[2,a.ToBase64(o)]}}))}))};e.getSubjectIssuerValue=function(e){var t={};var r=e.split(/, /g);r.forEach((function(e){var r=e.split("=");t[r[0]]=r[1]}));return t};return e}();P=new WeakMap,R=new WeakMap,F=new WeakMap,L=new WeakMap,x=new WeakMap;var G=undefined&&undefined.__classPrivateFieldSet||function(e,t,r){if(!t.has(e)){throw new TypeError("attempted to set private field on non-instance")}t.set(e,r);return r};var B=undefined&&undefined.__classPrivateFieldGet||function(e,t){if(!t.has(e)){throw new TypeError("attempted to get private field on non-instance")}return t.get(e)};var M;var z=function(){function e(e){this.certificates=[];this.providers=[];M.set(this,void 0);G(this,M,new V(e))}e.prototype.start=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,B(this,M).start()];case 1:e.sent();return[2]}}))}))};e.prototype.tryLogin=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,B(this,M).tryLogin()];case 1:e.sent();return[2]}}))}))};e.prototype.getCertificateBodyById=function(e,t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){return[2,B(this,M).getCertificateBodyById(e,t)]}))}))};e.prototype.getServer=function(){return B(this,M).getServer()};e.prototype.getChallenge=function(){return B(this,M).getChallenge()};e.prototype.finish=function(){B(this,M).disconnect();this.certificates=[];this.providers=[]};e.prototype.selectCertificate=function(e){this.certificates=this.certificates.map((function(t){var r=false;if(t.id===e){r=true}Object.assign(t,{selected:r});return t}))};e.prototype.getSelectedCertificate=function(){return this.certificates.find((function(e){return e.selected}))};e.prototype.dataCertificates=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,i;var o;return __generator(this,(function(n){switch(n.label){case 0:this.certificates=[];if(this.providers.length===0){return[2]}B(this,M).options.logger(T.DATA_CERTIFICATES_PENDING);e=0,t=this.providers;n.label=1;case 1:if(!(e<t.length))return[3,4];r=t[e];return[4,B(this,M).getCertificatesById(r.id)];case 2:i=n.sent();if(i){(o=this.certificates).push.apply(o,i)}n.label=3;case 3:e++;return[3,1];case 4:B(this,M).options.logger(T.DATA_CERTIFICATES_RESOLVED);return[2]}}))}))};e.prototype.dataProviders=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:B(this,M).options.logger(T.DATA_PROVIDERS_PENDING);e=this;return[4,B(this,M).getProvidersInfo()];case 1:e.providers=t.sent();B(this,M).options.logger(T.DATA_PROVIDERS_RESOLVED);return[2]}}))}))};return e}();M=new WeakMap;var j="*{-webkit-box-sizing:border-box;box-sizing:border-box}.peculiar_stroke_dark{border-color:#40484f;border-color:rgb(var(--peculiar-color-dark-rgb, 64, 72, 79))}.peculiar_fill_dark{background-color:#40484f;background-color:rgb(var(--peculiar-color-dark-rgb, 64, 72, 79))}.peculiar_color_dark{color:#40484f;color:rgb(var(--peculiar-color-dark-rgb, 64, 72, 79))}.peculiar_stroke_light{border-color:#ffffff;border-color:rgb(var(--peculiar-color-light-rgb, 255, 255, 255))}.peculiar_fill_light{background-color:#ffffff;background-color:rgb(var(--peculiar-color-light-rgb, 255, 255, 255))}.peculiar_color_light{color:#ffffff;color:rgb(var(--peculiar-color-light-rgb, 255, 255, 255))}.peculiar_stroke_grey_1{border-color:#FAF9F9;border-color:rgb(var(--peculiar-color-grey_1-rgb, 250, 249, 249))}.peculiar_fill_grey_1{background-color:#FAF9F9;background-color:rgb(var(--peculiar-color-grey_1-rgb, 250, 249, 249))}.peculiar_color_grey_1{color:#FAF9F9;color:rgb(var(--peculiar-color-grey_1-rgb, 250, 249, 249))}.peculiar_stroke_grey_2{border-color:#EEF4F7;border-color:rgb(var(--peculiar-color-grey_2-rgb, 238, 244, 247))}.peculiar_fill_grey_2{background-color:#EEF4F7;background-color:rgb(var(--peculiar-color-grey_2-rgb, 238, 244, 247))}.peculiar_color_grey_2{color:#EEF4F7;color:rgb(var(--peculiar-color-grey_2-rgb, 238, 244, 247))}.peculiar_stroke_grey_3{border-color:#E1E4E6;border-color:rgb(var(--peculiar-color-grey_3-rgb, 225, 228, 230))}.peculiar_fill_grey_3{background-color:#E1E4E6;background-color:rgb(var(--peculiar-color-grey_3-rgb, 225, 228, 230))}.peculiar_color_grey_3{color:#E1E4E6;color:rgb(var(--peculiar-color-grey_3-rgb, 225, 228, 230))}.peculiar_stroke_grey_4{border-color:#b6c3cc;border-color:rgb(var(--peculiar-color-grey_4-rgb, 182, 195, 204))}.peculiar_fill_grey_4{background-color:#b6c3cc;background-color:rgb(var(--peculiar-color-grey_4-rgb, 182, 195, 204))}.peculiar_color_grey_4{color:#b6c3cc;color:rgb(var(--peculiar-color-grey_4-rgb, 182, 195, 204))}.peculiar_stroke_grey_5{border-color:#6d7d87;border-color:rgb(var(--peculiar-color-grey_5-rgb, 109, 125, 135))}.peculiar_fill_grey_5{background-color:#6d7d87;background-color:rgb(var(--peculiar-color-grey_5-rgb, 109, 125, 135))}.peculiar_color_grey_5{color:#6d7d87;color:rgb(var(--peculiar-color-grey_5-rgb, 109, 125, 135))}.peculiar_stroke_secondary{border-color:#0abe65;border-color:rgb(var(--peculiar-color-secondary-rgb, 10, 190, 101))}.peculiar_fill_secondary{background-color:#0abe65;background-color:rgb(var(--peculiar-color-secondary-rgb, 10, 190, 101))}.peculiar_color_secondary{color:#0abe65;color:rgb(var(--peculiar-color-secondary-rgb, 10, 190, 101))}.peculiar_stroke_primary{border-color:#0680ff;border-color:rgb(var(--peculiar-color-primary-rgb, 6, 128, 255))}.peculiar_fill_primary{background-color:#0680ff;background-color:rgb(var(--peculiar-color-primary-rgb, 6, 128, 255))}.peculiar_color_primary{color:#0680ff;color:rgb(var(--peculiar-color-primary-rgb, 6, 128, 255))}.peculiar_stroke_attention{border-color:#F7A831;border-color:rgb(var(--peculiar-color-attention-rgb, 247, 168, 49))}.peculiar_fill_attention{background-color:#F7A831;background-color:rgb(var(--peculiar-color-attention-rgb, 247, 168, 49))}.peculiar_color_attention{color:#F7A831;color:rgb(var(--peculiar-color-attention-rgb, 247, 168, 49))}.peculiar_h4{font-size:17px;line-height:1.4;font-weight:600;letter-spacing:0.188889px}.peculiar_h6{font-size:15px;line-height:20px;font-weight:600;letter-spacing:0.3px}.peculiar_h7{font-size:14px;line-height:1.35;font-weight:600;letter-spacing:0px}.peculiar_b1{font-size:15px;line-height:1.46;font-weight:400;letter-spacing:0.3px}.peculiar_b3{font-size:13px;line-height:1.5;font-weight:400;letter-spacing:0.03em}.peculiar_c1{font-size:11px;line-height:1.36;font-weight:400;letter-spacing:0.03em}peculiar-fortify-button+peculiar-fortify-button{margin-left:10px}:host{display:block}.container_details{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1}.container_details_header{border-bottom-width:1px;border-bottom-style:solid;padding:10px 100px;position:relative;height:45px}.container_details_button{position:absolute;top:50%;left:8px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.container_details_content{height:calc(100% - 45px);overflow:auto}";var W=undefined&&undefined.__classPrivateFieldGet||function(e,t){if(!t.has(e)){throw new TypeError("attempted to get private field on non-instance")}return t.get(e)};var H=undefined&&undefined.__classPrivateFieldSet||function(e,t,r){if(!t.has(e)){throw new TypeError("attempted to set private field on non-instance")}t.set(e,r);return r};var U;var J=e("peculiar_fortify_certificates",function(){function e(e){var i=this;t(this,e);U.set(this,void 0);this.filters={};this.action=T.CONNECTION_PENDING;this.tick=0;this.onLog=function(e,t){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:if(this.debug){console.log({type:e,body:t})}if(!(e===T.PROVIDERS_ADDED||e===T.PROVIDERS_REMOVED))return[3,2];return[4,W(this,U).dataProviders()];case 1:r.sent();return[2];case 2:this.action=e;if(e===T.CONNECTION_RESOLVED){W(this,U).dataProviders()}if(e===T.DATA_PROVIDERS_RESOLVED){W(this,U).dataCertificates()}return[2]}}))}))};this.onClickCancel=function(){i.cancel.emit()};this.onClickContinue=function(){var e=W(i,U).getSelectedCertificate();if(e){i.continue.emit({certificateId:e.id,providerId:e.providerID,server:W(i,U).getServer(),privateKeyId:e.privateKeyId})}};this.onClickUpdateCertificates=function(){W(i,U).dataCertificates()};this.onClickTryAgain=function(){W(i,U).tryLogin()};this.onClickCloseDetails=function(){i.certificateBase64ForDetails=null};this.onClickCertificate=function(e){W(i,U).selectCertificate(e);i.tick+=1};this.onClickCertificateDetails=function(e,t){W(i,U).getCertificateBodyById(e,t).then((function(e){i.certificateBase64ForDetails=e}))};this.cancel=r(this,"cancel",7);this.continue=r(this,"continue",7)}e.prototype.componentWillLoad=function(){c.setLocale(this.language)};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:H(this,U,new z({logger:this.onLog,filters:this.filters}));return[4,W(this,U).start()];case 1:e.sent();return[2]}}))}))};e.prototype.componentDidUnload=function(){W(this,U).finish()};e.renderConnecting=function(){return i("peculiar-fortify-connecting",null)};e.renderFortifyAuthorization=function(e){return i("peculiar-fortify-authorization",{pin:e})};e.renderFortifyNotDetected=function(){return i("peculiar-fortify-not-detected",null)};e.renderFortifyNotSupported=function(){return i("peculiar-fortify-not-supported",null)};e.prototype.renderChallengeNotApproved=function(){return i("peculiar-fortify-challenge-not-approved",{onCancel:this.onClickCancel,onTryAgain:this.onClickTryAgain})};e.prototype.renderCertificates=function(){var e=this.action===T.DATA_CERTIFICATES_PENDING;var t;if(!e){t=W(this,U).getSelectedCertificate()}return i("peculiar-fortify-certificates-list",{certificates:W(this,U).certificates,onCertificate:this.onClickCertificate,onCertificateDetails:this.onClickCertificateDetails,onUpdate:this.onClickUpdateCertificates,onCancel:this.onClickCancel,onContinue:this.onClickContinue,loading:e,allowContinue:t})};e.prototype.renderProvidersEmpty=function(){return i("peculiar-fortify-providers-empty",{onCancel:this.onClickCancel})};e.prototype.renderUnresolvedStatus=function(){return i("peculiar-fortify-layout",{type:"message",titleValue:"Someting went wrong for status",descriptionValue:this.action})};e.prototype.render=function(){var e=null;switch(this.action){case T.CONNECTION_PENDING:case T.CONNECTION_RESOLVED:case T.DATA_PROVIDERS_PENDING:e=J.renderConnecting();break;case T.CONNECTION_REJECTED:case T.CLOSE:e=J.renderFortifyNotDetected();this.certificateBase64ForDetails=null;break;case T.CONNECTION_NOT_SUPPORTED:e=J.renderFortifyNotSupported();break;case T.CHALLENGE_PENDING:e=J.renderFortifyAuthorization(W(this,U).getChallenge());break;case T.CHALLENGE_REJECTED:e=this.renderChallengeNotApproved();break;case T.DATA_PROVIDERS_RESOLVED:if(W(this,U).providers.length===0){e=this.renderProvidersEmpty()}break;case T.DATA_CERTIFICATES_PENDING:case T.DATA_CERTIFICATES_RESOLVED:e=this.renderCertificates();break;default:e=this.renderUnresolvedStatus()}if(this.action===T.DATA_PROVIDERS_PENDING&&W(this,U).providers.length){e=this.renderCertificates()}return i(n,null,i("peculiar-fortify-layout",null,this.certificateBase64ForDetails&&i("div",{class:"container_details peculiar_fill_light"},i("header",{class:"container_details_header peculiar_stroke_grey_3"},i("peculiar-fortify-typography",{type:"h4",align:"center",ellipsis:true},s("details.title")),i("peculiar-fortify-button",{class:"container_details_button",onClick:this.onClickCloseDetails,"aria-label":"Close details",size:"small"},i("img",{slot:"icon",src:o("../assets/back_icon.svg"),alt:"Back"}),s("actions.back"))),i("div",{class:"container_details_content"},i("peculiar-certificate-viewer",{certificate:this.certificateBase64ForDetails,view:"mobile"}))),e))};Object.defineProperty(e,"assetsDirs",{get:function(){return["../../assets"]},enumerable:true,configurable:true});return e}());U=new WeakMap;J.style=j}}}));