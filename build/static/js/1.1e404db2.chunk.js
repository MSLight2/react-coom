webpackJsonp([1],{102:function(e,t,n){"use strict";t.a={addEventHandler:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e&&(e.addEventListener?e.addEventListener(t,n,a):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n)},removeEventHandler:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e&&(e.addEventListener?e.removeEventListener(t,n,a):e.attachEvent?e.detachEvent("on"+t,n):e["on"+t]=null)},sessionStorage:{get:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=sessionStorage.getItem(e);return t?JSON.parse(n):n},set:function(e,t){e&&t?"[object String]"===Object.prototype.toString.call(t)?sessionStorage.setItem(e,t):sessionStorage.setItem(e,JSON.stringify(t)):sessionStorage.setItem(e,null)}}}},103:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"render",value:function(){return i.a.createElement("footer",null,i.a.createElement("div",{className:"footer-cnt"},i.a.createElement("a",{href:""},"\u6211\u7684"),i.a.createElement("em",{className:"line"},"|"),i.a.createElement("a",{href:""},"\u793e\u533a\u8bba\u575b"),i.a.createElement("em",{className:"line"},"|"),i.a.createElement("a",{href:""},"\u6dfb\u52a0\u5546\u6237"),i.a.createElement("em",{className:"line"},"|"),i.a.createElement("a",{href:""},"\u610f\u89c1\u53cd\u9988"),i.a.createElement("br",null),i.a.createElement("a",{href:""},"\u7f8e\u56e2\u7f51"),i.a.createElement("em",{className:"line"},"|"),i.a.createElement("a",{href:""},"\u7f8e\u56e2\u4e0b\u8f7d"),i.a.createElement("em",{className:"line"},"|"),i.a.createElement("a",{href:""},"\u7ed3\u5a5a"),i.a.createElement("em",{className:"line"},"|"),i.a.createElement("a",{href:""},"\u4eb2\u5b50"),i.a.createElement("em",{className:"line"},"|"),i.a.createElement("a",{href:""},"\u5bb6\u65cf"),i.a.createElement("em",{className:"line"},"|"),i.a.createElement("a",{href:""},"\u5bb4\u4f1a"),i.a.createElement("em",{className:"line"},"|"),i.a.createElement("a",{href:""},"\u6559\u80b2"),i.a.createElement("br",null),i.a.createElement("a",{href:""},"\u7535\u8111"),i.a.createElement("em",{className:"line"},"|"),i.a.createElement("a",{href:""},"\u5ba2\u6237\u7aef"),i.a.createElement("div",{className:"copyright"},"copyright \xa92017 dianping.com")))}}]),t}(c.Component);t.a=l},104:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.callback;return i.a.createElement("header",{className:"sub-toolbar"},i.a.createElement("span",{className:"go-back",onClick:n},"\u8fd4\u56de"),i.a.createElement("span",{className:"title"},t))}}]),t}(c.Component);t.a=l},123:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=n(20),l=n(124),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleIndicator=function(e){n.setState({currentIndex:e+1})},n.state={currentIndex:1},n}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.bannerImg,n=e.goodsPriceDetial,a=[];return t.imgList&&t.imgList.forEach(function(e,t){return a.push(i.a.createElement("div",{className:"item",key:t},i.a.createElement("img",{src:e,alt:""})))}),i.a.createElement("section",{className:"banner"},i.a.createElement("div",{className:"cnt"},i.a.createElement(l.a,{slideClassName:"detail-banner",setIndicator:this.handleIndicator},a),i.a.createElement("div",{className:"indicator"},i.a.createElement("span",null,this.state.currentIndex),"/",a.length),t.imgDesc&&i.a.createElement("div",{className:"banner-desc"},i.a.createElement("p",{className:"title"},t.imgDesc.title),i.a.createElement("p",{className:"desc"},t.imgDesc.desc))),i.a.createElement("div",{className:"banner-price"},i.a.createElement("div",{className:"buy"},i.a.createElement("div",{className:"price b-price"},i.a.createElement("span",null,"\uffe5",i.a.createElement("strong",null,n.discount)),i.a.createElement("s",{className:"o-price"},"\uffe5",n.price)),i.a.createElement(s.b,{to:"/cart",className:"but-btn"},"\u7acb\u5373\u8d2d\u4e70")),n.isDailyDisCount&&i.a.createElement("div",{className:"banner-daliy-discount"},i.a.createElement("span",{className:"ds"},"\u7acb\u51cf",n.dailyDisCount,"\u5143"),i.a.createElement("span",{className:"ds-desc"},"\u7acb\u51cf",n.dailyDisCount,"\u5143\uff0c\u6bcf\u4eba\u9650\u8d2d",n.limitCount,"\u5f20")),i.a.createElement("div",{className:"tip"},n.isAnyTile&&i.a.createElement("div",{className:"advantage-item"},i.a.createElement("i",{className:"right-icon"}),"\u968f\u65f6\u53ef\u9000"),n.beOverdue&&i.a.createElement("div",{className:"advantage-item"},i.a.createElement("i",{className:"time-icon"}),"\u8fc7\u671f\u81ea\u52a8\u9000"))))}}]),t}(c.Component);t.a=m},124:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=n(1),l=n.n(s),u=n(102),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=0,f=0,h=0,d=0,E=0,b=0,y=0,v=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={nextIndicator:0,mTranslateX:0},n.handleTouchEvent=n.handleTouchEvent.bind(n),n}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.initReset();var e=document.querySelector("."+this.props.slideClassName);u.a.addEventHandler(e,"touchstart",this.handleTouchEvent),u.a.addEventHandler(e,"touchmove",this.handleTouchEvent),u.a.addEventHandler(e,"touchend",this.handleTouchEvent)}},{key:"componentWillUnmount",value:function(){var e=document.querySelector("."+this.props.slideClassName);u.a.removeEventHandler(e,"touchstart",this.handleTouchEvent),u.a.removeEventHandler(e,"touchmove",this.handleTouchEvent),u.a.removeEventHandler(e,"touchend",this.handleTouchEvent)}},{key:"handleTouchEvent",value:function(e){var t=document.querySelector("."+this.props.slideClassName),n=t.firstChild.offsetWidth;switch(e.type){case"touchstart":p=e.touches[0].clientX,f=e.touches[0].clientY,E=y*n;break;case"touchmove":if(h=e.changedTouches[0].clientX,d=e.changedTouches[0].clientY,Math.abs(d-f)>20)return;if(b=h-p,y===t.childNodes.length-1&&b<0){if(Math.abs(b)>n/2)return}else if(0===y&&b>0&&(E=0,Math.abs(b)>n/2))return;this.setState({mTranslateX:-E+b});break;case"touchend":if(b<0){if(y===t.childNodes.length-1)return void this.setState({mTranslateX:-n*y});if(Math.abs(b)<n/2)this.setState({mTranslateX:-n*y});else{this.setState({mTranslateX:-n*(y+1)}),y++,y>t.childElementCount&&(y=t.childElementCount);var a=this.state.nextIndicator;a++,a>t.childNodes.length-1&&(a=t.childNodes.length-1),this.setState({nextIndicator:a}),this.props.setIndicator(a)}}else if(b>0){if(0===y)return void this.setState({mTranslateX:0});if(Math.abs(b)<n/2)this.setState({mTranslateX:-E});else{this.setState({mTranslateX:-(n*y-n)}),y--,y<0&&(y=0);var r=this.state.nextIndicator;r--,r<0&&(r=0),this.setState({nextIndicator:r}),this.props.setIndicator(r)}}}e.stopPropagation()}},{key:"initReset",value:function(){p=0,f=0,h=0,d=0,E=0,b=0,y=0}},{key:"render",value:function(){var e=this.state.mTranslateX;return i.a.createElement("nav",{className:this.props.slideClassName,style:{transform:"translate3d("+e+"px,0,0)"}},this.props.children)}}]),t}(c.Component);t.a=v,v.propTypes={slideClassName:l.a.string,setIndicator:l.a.func}},125:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=n(20),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e=this.props.data,t=(10*e.star).toFixed(2)+"%";return i.a.createElement("section",{className:"applay-user"},i.a.createElement(s.b,{to:"/merchant"},i.a.createElement("div",{className:"a-top-title"},"\u9002\u7528\u5546\u6237(",e.businessCount,")",i.a.createElement("i",{className:"goto-icon"}))),i.a.createElement("div",{className:"a-shop-detail"},i.a.createElement("div",{className:"cnt"},i.a.createElement("p",{className:"a-shop-title"},e.title),i.a.createElement("div",{className:"a-star"},i.a.createElement("span",{className:"star"},i.a.createElement("i",{className:"star-on",style:{width:t}})),e.distance>100?i.a.createElement("span",{className:"distance"},">100km"):i.a.createElement("span",{className:"distance"},e.distance,"km"))),i.a.createElement("div",{className:"phone"},i.a.createElement("i",{className:"p-icon"}))),i.a.createElement("div",{className:"a-shop-address"},i.a.createElement("div",{className:"address"},i.a.createElement("i",{className:"address-icon"}),e.address)))}}]),t}(c.Component);t.a=u},126:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"render",value:function(){var e=this.props.data,t=[];return e&&e.goodsItem.map(function(e,n){return t.push(i.a.createElement("div",{className:"item",key:n},i.a.createElement("span",{className:"name"},e.title),i.a.createElement("div",{className:"desc"},e.count,"\u4efd\xa0\xa0\xa0\xa0",e.price,"\u5143")))}),i.a.createElement("section",{className:"group-detail"},i.a.createElement("div",{className:"detail-title"},"\u56e2\u8d2d\u8be6\u60c5",i.a.createElement("i",{className:"detail-icon"})),e.typeText&&i.a.createElement("div",{className:"group-desc"},"\u86cb\u7cd5"),i.a.createElement("div",{className:"price-detail"},t),i.a.createElement("div",{className:"other-detail"},i.a.createElement("div",{className:"max-price"},"\u6700\u9ad8\u4ef7\xa0\xa0\xa0\xa0",e.maxPrice,"\u5143"),i.a.createElement("div",{className:"discount-price price"},"\u56e2\u8d2d\u4ef7\xa0\xa0\xa0\xa0",i.a.createElement("strong",null,e.groupPrice,"\u5143")),e.explain&&i.a.createElement("div",{className:"text"},i.a.createElement("p",null,e.explain))),i.a.createElement("div",{className:"more-img"},"\u66f4\u591a\u56fe\u6587\u8be6\u60c5",i.a.createElement("span",{className:"notice"},"\uff08\u5efa\u8baeWifi\u73af\u5883\u4e0b\u6253\u5f00,\u571f\u8c6a\u8bf7\u968f\u610f\uff09",i.a.createElement("i",{className:"goto-icon"}))))}}]),t}(c.Component);t.a=l},127:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"render",value:function(){var e=this.props.data,t=[];return e&&e.businessService.forEach(function(e,n){return t.push(i.a.createElement("p",{className:"n-time",key:n},e))}),i.a.createElement("section",{className:"group-need-now"},i.a.createElement("div",{className:"detail-title"},"\u8d2d\u4e70\u9700\u77e5",i.a.createElement("i",{className:"detail-icon announce"})),i.a.createElement("ul",{className:"need-item"},i.a.createElement("li",{className:"n-item"},i.a.createElement("p",{className:"n-title"},"\u6709\u6548\u671f"),i.a.createElement("p",{className:"n-time"},e.dataTime)),i.a.createElement("li",{className:"n-item"},i.a.createElement("p",{className:"n-title"},"\u9664\u5916\u65e5\u671f"),i.a.createElement("p",{className:"n-time"},e.exTime)),i.a.createElement("li",{className:"n-item"},i.a.createElement("p",{className:"n-title"},"\u4f7f\u7528\u65f6\u95f4"),i.a.createElement("p",{className:"n-time"},e.useTime)),i.a.createElement("li",{className:"n-item"},i.a.createElement("p",{className:"n-title"},"\u9884\u7ea6\u63d0\u9192"),i.a.createElement("p",{className:"n-time"},e.makeRemind)),i.a.createElement("li",{className:"n-item"},i.a.createElement("p",{className:"n-title"},"\u89c4\u5219\u63d0\u9192"),e.ruleRemind&&e.ruleRemind.map(function(e,t){return i.a.createElement("p",{className:"n-time",key:t},e)})),i.a.createElement("li",{className:"n-item"},i.a.createElement("p",{className:"n-title"},"\u5176\u4ed6\u8d39\u7528"),e.otherPay&&e.otherPay.map(function(t,n){return i.a.createElement("p",{className:"n-time",key:n},e.otherPay)})),i.a.createElement("li",{className:"n-item"},i.a.createElement("p",{className:"n-title"},"\u5305\u95f4"),i.a.createElement("p",{className:"n-time"},e.privateRoom?"\u6709\u5305\u95f4":"\u5e97\u5185\u65e0\u5305\u95f4")),i.a.createElement("li",{className:"n-item"},i.a.createElement("p",{className:"n-title"},"\u5802\u98df\u5916\u5e26"),i.a.createElement("p",{className:"n-time"},e.toGo)),i.a.createElement("li",{className:"n-item"},i.a.createElement("p",{className:"n-title"},"\u6e29\u99a8\u63d0\u793a"),e.tip&&e.tip.map(function(e,t){return i.a.createElement("p",{className:"n-time",key:t},e)})),i.a.createElement("li",{className:"n-item"},i.a.createElement("p",{className:"n-title"},"\u5546\u5bb6\u670d\u52a1"),t)))}}]),t}(c.Component);t.a=l},128:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),i=n.n(c),s=n(20),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e=this.props.data,t=[];return e.length>0&&e.forEach(function(e,n){return t.push(i.a.createElement(s.b,{to:"",key:n},i.a.createElement("div",{className:"ohter-group-item"},i.a.createElement("span",{className:"price"},i.a.createElement("span",{className:"rmb"},"\uffe5"),e.discount),i.a.createElement("del",null,"\uffe5",e.price),i.a.createElement("span",null,e.title))))}),i.a.createElement("section",{className:"ohter-group"},i.a.createElement("div",{className:"detail-title"},"\u5176\u4ed6\u56e2\u8d2d"),t)}}]),t}(c.Component);t.a=u},90:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=n.n(c),s=n(20),l=n(104),u=n(123),m=n(125),p=n(126),f=n(127),h=n(128),d=n(103),E=n(21),b=n(98),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.goBack=function(){n.props.history.goBack()},n.state={loading:!0,bannerImg:"",goodsPriceDetial:"",goodsInfo:"",groupGoodsDetail:"",buyNow:"",other:""},n}return o(t,e),y(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.location,a=t.match;n.search?Object(b.a)("/mock/detail/detial"+a.params.id+".json").then(function(t){t&&e.setState(Object.assign({loading:!1},t))}):Object(b.a)("/mock/detail/d"+a.params.id+".json").then(function(t){t&&e.setState(Object.assign({loading:!1},t))})}},{key:"render",value:function(){var e={bannerImg:this.state.bannerImg,goodsPriceDetial:this.state.goodsPriceDetial};return i.a.createElement("div",null,i.a.createElement(l.a,{title:"\u56e2\u8d2d\u8be6\u60c5",callback:this.goBack}),i.a.createElement(u.a,e),i.a.createElement("section",{className:"goods-detail"},i.a.createElement(m.a,{data:this.state.goodsInfo}),i.a.createElement(p.a,{data:this.state.groupGoodsDetail}),i.a.createElement(f.a,{data:this.state.buyNow}),i.a.createElement("section",{className:"btn-buy"},i.a.createElement(s.b,{to:"/cart"},i.a.createElement("span",{className:"buy-now"},"\u7acb\u5373\u8d2d\u4e70"))),i.a.createElement(h.a,{data:this.state.other}),i.a.createElement(d.a,null)),this.state.loading&&i.a.createElement(E.a,null))}}]),t}(c.Component);t.default=v},98:function(e,t,n){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";if("GET"===(n=n.toUpperCase())){var a="";Object.keys(t).forEach(function(e){a+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&"}),a&&(e=e+"?"+a.substring(0,a.lastIndexOf("&")))}var r="";if(window.fetch)r=fetch;else if(window.XMLHttpRequest)r=new XMLHttpRequest;else try{r=new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}if(r!==fetch)return new Promise(function(a,o){var c=null;"POST"===n&&(c=t),r.open(n,e,!0),r.timeout=3e4,r.onload=function(){var e=r.response;"[Object String]"===Object.prototype.toString.call(e)&&(e=a(JSON.parse(e))),a(e)},r.onerror=function(){o("")},r.send(c)});var o={method:n,mode:"cors",credentials:"include",cache:"default",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json, text/javascript","Content-Type":"application/json"}};"POST"===n&&o.defineProperty(o,"body",{value:t});try{return fetch(e,o).then(function(e){return e.ok?e.json():(console.log("%c\u8bf7\u6c42\u7ed3\u679c\u5931\u8d25\uff1ao(\u2565\ufe4f\u2565)o","color: #3da8db;"),"")})}catch(e){throw new Error(e)}}}});
//# sourceMappingURL=1.1e404db2.chunk.js.map