webpackJsonp([2],{100:function(e,t,n){var o=n(101);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0;n(5)(o,r);o.locals&&(e.exports=o.locals)},101:function(e,t,n){t=e.exports=n(4)(void 0),t.push([e.i,".alert-main {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center; }\n  .alert-main .alert-text {\n    -ms-flex-item-align: center;\n        align-self: center;\n    color: #ffffff;\n    background: #000000;\n    max-width: 4.5rem;\n    min-width: 1.0rem;\n    word-wrap: break-word;\n    border-radius: 10px;\n    padding: 22px 20px;\n    font-size: 28px; }\n",""])},105:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handlePhoneChange=n.handlePhoneChange.bind(n),n.handleCodeChange=n.handleCodeChange.bind(n),n}return a(t,e),s(t,[{key:"handlePhoneChange",value:function(e){this.props.phoneCallback(e.target.value)}},{key:"handleCodeChange",value:function(e){this.props.codeCallback(e.target.value)}},{key:"render",value:function(){var e=this;return c.a.createElement("section",{className:"goods-login"},c.a.createElement("div",{className:"now-login"},c.a.createElement("div",{className:"mobile-phone"},c.a.createElement("div",{className:"eara-num"},c.a.createElement("span",null,"86"),c.a.createElement("i",null)),c.a.createElement("div",{className:"mobile-input"},c.a.createElement("input",{className:"phone-number",type:"number",name:"mobile",autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",ref:function(t){e.phoneEle=t},onChange:this.handlePhoneChange}),c.a.createElement("div",{className:"sent-code",onClick:this.props.sendCallback},"\u53d1\u9001\u9a8c\u8bc1\u7801")))),c.a.createElement("div",{className:"ver-code"},c.a.createElement("div",{className:"txt"},"\u9a8c\u8bc1\u7801"),c.a.createElement("div",{className:"mobile-code"},c.a.createElement("input",{className:"phone-code",type:"number",name:"code",autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",ref:function(t){e.codeEle=t},onChange:this.handleCodeChange}))))}}]),t}(i.Component);t.a=l},129:function(e,t,n){"use strict";n(130)("createBrowserHistory"),e.exports=n(131).createBrowserHistory},130:function(e,t,n){"use strict";var o=function(){};e.exports=function(e){o('Please use `require("history").%s` instead of `require("history/%s")`. Support for the latter will be removed in the next major release.',[e,e])}},131:function(e,t,n){"use strict";e.exports=n(132)},132:function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e){return"/"===e.charAt(0)?e:"/"+e}function i(e){return"/"===e.charAt(0)?e.substr(1):e}function c(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)}function s(e,t){return c(e,t)?e.substr(t.length):e}function l(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function u(e){var t=e||"/",n="",o="",r=t.indexOf("#");-1!==r&&(o=t.substr(r),t=t.substr(0,r));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===o?"":o}}function f(e){var t=e.pathname,n=e.search,o=e.hash,r=t||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:"?"+n),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}function h(e,t,n,o){var a;"string"==typeof e?(a=u(e)).state=t:(void 0===(a=r({},e)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(a.key=n),o?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=T(a.pathname,o.pathname)):a.pathname=o.pathname:a.pathname||(a.pathname="/"),a}function d(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&N(e.state,t.state)}function p(){var e=null,t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,o,r){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof o?o(a,r):r(!0):r(!1!==a)}else r(!0)},appendListener:function(e){function n(){o&&e.apply(void 0,arguments)}var o=!0;return t.push(n),function(){o=!1,t=t.filter(function(e){return e!==n})}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];t.forEach(function(e){return e.apply(void 0,n)})}}}function m(e,t){t(window.confirm(e))}function v(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}function b(){return-1===window.navigator.userAgent.indexOf("Trident")}function g(){return-1===window.navigator.userAgent.indexOf("Firefox")}function w(e){void 0===e.state&&navigator.userAgent.indexOf("CriOS")}function y(){try{return window.history.state||{}}catch(e){return{}}}function E(e){function t(e){var t=e||{},n=t.key,o=t.state,r=window.location,a=r.pathname+r.search+r.hash;return U&&(a=s(a,U)),h(a,o,n)}function n(){return Math.random().toString(36).substr(2,R)}function o(e){r(F,e),F.length=O.length,M.notifyListeners(F.location,F.action)}function i(e){w(e)||u(t(e.state))}function c(){u(t(y()))}function u(e){I?(I=!1,o()):M.confirmTransitionTo(e,"POP",N,function(t){t?o({action:"POP",location:e}):function(e){var t=F.location,n=q.indexOf(t.key);-1===n&&(n=0);var o=q.indexOf(e.key);-1===o&&(o=0);var r=n-o;r&&(I=!0,g(r))}(e)})}function d(e){return U+f(e)}function g(e){O.go(e)}function E(e){1===(X+=e)&&1===e?(window.addEventListener(_,i),x&&window.addEventListener(L,c)):0===X&&(window.removeEventListener(_,i),x&&window.removeEventListener(L,c))}void 0===e&&(e={}),A||j(!1);var O=window.history,P=v(),x=!b(),k=e,C=k.forceRefresh,S=void 0!==C&&C,T=k.getUserConfirmation,N=void 0===T?m:T,H=k.keyLength,R=void 0===H?6:H,U=e.basename?l(a(e.basename)):"",M=p(),I=!1,B=t(y()),q=[B.key],X=0,V=!1,F={length:O.length,action:"POP",location:B,createHref:d,push:function(e,t){var r=h(e,t,n(),F.location);M.confirmTransitionTo(r,"PUSH",N,function(e){if(e){var t=d(r),n=r.key,a=r.state;if(P)if(O.pushState({key:n,state:a},null,t),S)window.location.href=t;else{var i=q.indexOf(F.location.key),c=q.slice(0,-1===i?0:i+1);c.push(r.key),q=c,o({action:"PUSH",location:r})}else window.location.href=t}})},replace:function(e,t){var r="REPLACE",a=h(e,t,n(),F.location);M.confirmTransitionTo(a,r,N,function(e){if(e){var t=d(a),n=a.key,i=a.state;if(P)if(O.replaceState({key:n,state:i},null,t),S)window.location.replace(t);else{var c=q.indexOf(F.location.key);-1!==c&&(q[c]=a.key),o({action:r,location:a})}else window.location.replace(t)}})},go:g,goBack:function(){g(-1)},goForward:function(){g(1)},block:function(e){void 0===e&&(e=!1);var t=M.setPrompt(e);return V||(E(1),V=!0),function(){return V&&(V=!1,E(-1)),t()}},listen:function(e){var t=M.appendListener(e);return E(1),function(){E(-1),t()}}};return F}function O(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function P(e){window.location.hash=e}function x(e){var t=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,0<=t?t:0)+"#"+e)}function k(e){function t(){var e=T(O());return k&&(e=s(e,k)),h(e)}function n(e){r(V,e),V.length=u.length,N.notifyListeners(V.location,V.action)}function o(){var e=O(),o=S(e);if(e!==o)x(o);else{var r=t(),a=V.location;if(!_&&d(a,r))return;if(L===f(r))return;L=null,function(e){_?(_=!1,n()):N.confirmTransitionTo(e,"POP",w,function(t){t?n({action:"POP",location:e}):function(e){var t=V.location,n=B.lastIndexOf(f(t));-1===n&&(n=0);var o=B.lastIndexOf(f(e));-1===o&&(o=0);var r=n-o;r&&(_=!0,i(r))}(e)})}(r)}}function i(e){u.go(e)}function c(e){1===(q+=e)&&1===e?window.addEventListener(H,o):0===q&&window.removeEventListener(H,o)}void 0===e&&(e={}),A||j(!1);var u=window.history,v=(g(),e),b=v.getUserConfirmation,w=void 0===b?m:b,y=v.hashType,E=void 0===y?"slash":y,k=e.basename?l(a(e.basename)):"",C=R[E],S=C.encodePath,T=C.decodePath,N=p(),_=!1,L=null,U=O(),M=S(U);U!==M&&x(M);var I=t(),B=[f(I)],q=0,X=!1,V={length:u.length,action:"POP",location:I,createHref:function(e){return"#"+S(k+f(e))},push:function(e,t){var o=h(e,void 0,void 0,V.location);N.confirmTransitionTo(o,"PUSH",w,function(e){if(e){var t=f(o),r=S(k+t);if(O()!==r){L=t,P(r);var a=B.lastIndexOf(f(V.location)),i=B.slice(0,-1===a?0:a+1);i.push(t),B=i,n({action:"PUSH",location:o})}else n()}})},replace:function(e,t){var o="REPLACE",r=h(e,void 0,void 0,V.location);N.confirmTransitionTo(r,o,w,function(e){if(e){var t=f(r),a=S(k+t);O()!==a&&(L=t,x(a));var i=B.indexOf(f(V.location));-1!==i&&(B[i]=t),n({action:o,location:r})}})},go:i,goBack:function(){i(-1)},goForward:function(){i(1)},block:function(e){void 0===e&&(e=!1);var t=N.setPrompt(e);return X||(c(1),X=!0),function(){return X&&(X=!1,c(-1)),t()}},listen:function(e){var t=N.appendListener(e);return c(1),function(){c(-1),t()}}};return V}function C(e,t,n){return Math.min(Math.max(e,t),n)}function S(e){function t(e){r(y,e),y.length=y.entries.length,v.notifyListeners(y.location,y.action)}function n(){return Math.random().toString(36).substr(2,m)}function o(e){var n=C(y.index+e,0,y.entries.length-1),o=y.entries[n];v.confirmTransitionTo(o,"POP",i,function(e){e?t({action:"POP",location:o,index:n}):t()})}void 0===e&&(e={});var a=e,i=a.getUserConfirmation,c=a.initialEntries,s=void 0===c?["/"]:c,l=a.initialIndex,u=void 0===l?0:l,d=a.keyLength,m=void 0===d?6:d,v=p(),b=C(u,0,s.length-1),g=s.map(function(e){return h(e,void 0,"string"==typeof e?n():e.key||n())}),w=f,y={length:g.length,action:"POP",location:g[b],index:b,entries:g,createHref:w,push:function(e,o){var r=h(e,o,n(),y.location);v.confirmTransitionTo(r,"PUSH",i,function(e){if(e){var n=y.index+1,o=y.entries.slice(0);o.length>n?o.splice(n,o.length-n,r):o.push(r),t({action:"PUSH",location:r,index:n,entries:o})}})},replace:function(e,o){var r="REPLACE",a=h(e,o,n(),y.location);v.confirmTransitionTo(a,r,i,function(e){e&&(y.entries[y.index]=a,t({action:r,location:a}))})},go:o,goBack:function(){o(-1)},goForward:function(){o(1)},canGo:function(e){var t=y.index+e;return 0<=t&&t<y.entries.length},block:function(e){return void 0===e&&(e=!1),v.setPrompt(e)},listen:function(e){return v.appendListener(e)}};return y}Object.defineProperty(t,"__esModule",{value:!0});var T=o(n(24)),N=o(n(25));n(26);var j=o(n(27)),A=!("undefined"==typeof window||!window.document||!window.document.createElement),_="popstate",L="hashchange",H="hashchange",R={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+i(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:i,decodePath:a},slash:{encodePath:a,decodePath:a}};t.createBrowserHistory=E,t.createHashHistory=k,t.createMemoryHistory=S,t.createLocation=h,t.locationsAreEqual=d,t.parsePath=u,t.createPath=f},91:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),s=n(105),l=n(129),u=n.n(l),f=n(98),h=n(20),d=n(99),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.addNumber=function(e){var t=n.state.number,o=n.state.singlePrice;if(++t>99999)return t=99999,void n.setState({number:t});n.setState({number:t,price:o*t})},n.reduceNumber=function(e){var t=n.state.number,o=n.state.singlePrice;--t<1||n.setState({number:t,price:o*t})},n.numberChange=function(e){var t=n.state.singlePrice,o=e.target.value;o<=0&&(o=1),n.setState({number:o,price:t*o})},n.getPhoneNumber=function(e){n.setState({phoneNumber:e})},n.getCodeVal=function(e){n.setState({codeVal:e})},n.handleSendCode=function(){var e=n.state.phoneNumber;e?/^1[34578][0-9]{9}/g.test(e)?n.setState({alertShow:!0,alertText:"\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f\uff0c\u8bf7\u67e5\u770b\u624b\u673a"}):n.setState({alertShow:!0,alertText:"\u624b\u673a\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e"}):n.setState({alertShow:!0,alertText:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"})},n.loginNow=function(){n.props.history.replace("/login")},n.submitOrder=function(){var e=n.state,t=e.phoneNumber,o=e.codeVal;t?/^1[34578][0-9]{9}/g.test(t)?o?6!==o.length?n.setState({alertShow:!0,alertText:"\u9a8c\u8bc1\u7801\u5fc5\u987b\u4e3a6\u4f4d\u6570"}):n.props.history.replace("/home"):n.setState({alertShow:!0,alertText:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}):n.setState({alertShow:!0,alertText:"\u624b\u673a\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e"}):n.setState({alertShow:!0,alertText:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"})},n.goBack=function(){n.history.goBack()},n.state={number:1,phone:"",validateCode:"",title:"",price:"",singlePrice:0,codeVal:null,phoneNumber:null,alertShow:!1,alertText:""},n.history=u()(),n}return a(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this;Object(f.a)("/mock/home/cart.json").then(function(t){if(t){var n=t.goodsInfo;e.setState({title:n.title,price:n.price,singlePrice:n.price})}})}},{key:"handleAlertClose",value:function(e){this.setState({alertShow:e})}},{key:"render",value:function(){var e=this.state,t=e.number,n=e.title,o=e.price,r=e.alertShow,a=e.alertText;return c.a.createElement("div",null,c.a.createElement("header",{className:"order-header"},c.a.createElement("div",{className:"back",onClick:this.goBack},"\u8fd4\u56de"),c.a.createElement("div",{className:"order-text"},"\u63d0\u4ea4\u8ba2\u5355")),c.a.createElement("main",null,c.a.createElement("section",{className:"goods-info"},c.a.createElement("div",{className:"title"},n),c.a.createElement("div",{className:"count"},c.a.createElement("span",{className:"txt"},"\u6570\u91cf"),c.a.createElement("div",{className:"user-input"},c.a.createElement("span",{onClick:this.reduceNumber},"\u2014"),c.a.createElement("input",{type:"number",name:"goodsCount",value:t,onChange:this.numberChange}),c.a.createElement("span",{className:"add",onClick:this.addNumber},"+"))),c.a.createElement("div",{className:"subtotal"},c.a.createElement("span",null,"\u5c0f\u8ba1"),c.a.createElement("span",{className:"pri"},"\uffe5",o)),c.a.createElement("div",{className:"voucher"},c.a.createElement(h.b,{to:"/coupon"},"\u73b0\u91d1\u5238/\u62b5\u7528\u5238/\u4f18\u60e0\u7801",c.a.createElement("i",null)))),c.a.createElement("div",{className:"now-login-txt",onClick:this.loginNow},"\u7acb\u5373\u767b\u5f55"),c.a.createElement(s.a,{phoneCallback:this.getPhoneNumber,codeCallback:this.getCodeVal,sendCallback:this.handleSendCode}),c.a.createElement("section",{className:"order-tip"},c.a.createElement("div",null,c.a.createElement("i",{className:"icon"}),c.a.createElement("span",null,"\u652f\u6301\u968f\u65f6\u9000")),c.a.createElement("div",null,c.a.createElement("i",{className:"icon"}),c.a.createElement("span",null,"\u652f\u6301\u8fc7\u671f\u9000"))),c.a.createElement("div",{className:"sub-order-btn",onClick:this.submitOrder},"\u63d0\u4ea4\u8ba2\u5355")),r&&c.a.createElement(d.a,{text:a,close:this.handleAlertClose.bind(this,!1),isShow:r}))}}]),t}(i.Component);t.default=m},98:function(e,t,n){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";if("GET"===(n=n.toUpperCase())){var o="";Object.keys(t).forEach(function(e){o+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&"}),o&&(e=e+"?"+o.substring(0,o.lastIndexOf("&")))}var r="";if(window.fetch)r=fetch;else if(window.XMLHttpRequest)r=new XMLHttpRequest;else try{r=new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}if(r!==fetch)return new Promise(function(o,a){var i=null;"POST"===n&&(i=t),r.open(n,e,!0),r.timeout=3e4,r.onload=function(){var e=r.response;"[Object String]"===Object.prototype.toString.call(e)&&(e=o(JSON.parse(e))),o(e)},r.onerror=function(){a("")},r.send(i)});var a={method:n,mode:"cors",credentials:"include",cache:"default",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json, text/javascript","Content-Type":"application/json"}};"POST"===n&&a.defineProperty(a,"body",{value:t});try{return fetch(e,a).then(function(e){return e.ok?e.json():(console.log("%c\u8bf7\u6c42\u7ed3\u679c\u5931\u8d25\uff1ao(\u2565\ufe4f\u2565)o","color: #3da8db;"),"")})}catch(e){throw new Error(e)}}},99:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(1),l=n.n(s),u=n(100),f=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),h=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleAlertClose=n.handleAlertClose.bind(n),n.timeOut=null,n}return a(t,e),f(t,[{key:"componentDidMount",value:function(){this.props.isShow&&(this.timeOut=setTimeout(this.handleAlertClose,1500))}},{key:"handleAlertClose",value:function(){this.timeOut&&clearTimeout(this.timeOut),this.props.close(!1)}},{key:"componentWillUnmount",value:function(){this.timeOut&&clearTimeout(this.timeOut)}},{key:"render",value:function(){return c.a.createElement("div",{className:"alert-main",onClick:this.props.close},c.a.createElement("div",{className:"alert-text"},this.props.text))}}]),t}(i.Component);t.a=h,h.propTypes={text:l.a.string,close:l.a.func}}});
//# sourceMappingURL=2.1a7b02a1.chunk.js.map