webpackJsonp([4],{103:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"footer-cnt"},c.a.createElement("a",{href:""},"\u6211\u7684"),c.a.createElement("em",{className:"line"},"|"),c.a.createElement("a",{href:""},"\u793e\u533a\u8bba\u575b"),c.a.createElement("em",{className:"line"},"|"),c.a.createElement("a",{href:""},"\u6dfb\u52a0\u5546\u6237"),c.a.createElement("em",{className:"line"},"|"),c.a.createElement("a",{href:""},"\u610f\u89c1\u53cd\u9988"),c.a.createElement("br",null),c.a.createElement("a",{href:""},"\u7f8e\u56e2\u7f51"),c.a.createElement("em",{className:"line"},"|"),c.a.createElement("a",{href:""},"\u7f8e\u56e2\u4e0b\u8f7d"),c.a.createElement("em",{className:"line"},"|"),c.a.createElement("a",{href:""},"\u7ed3\u5a5a"),c.a.createElement("em",{className:"line"},"|"),c.a.createElement("a",{href:""},"\u4eb2\u5b50"),c.a.createElement("em",{className:"line"},"|"),c.a.createElement("a",{href:""},"\u5bb6\u65cf"),c.a.createElement("em",{className:"line"},"|"),c.a.createElement("a",{href:""},"\u5bb4\u4f1a"),c.a.createElement("em",{className:"line"},"|"),c.a.createElement("a",{href:""},"\u6559\u80b2"),c.a.createElement("br",null),c.a.createElement("a",{href:""},"\u7535\u8111"),c.a.createElement("em",{className:"line"},"|"),c.a.createElement("a",{href:""},"\u5ba2\u6237\u7aef"),c.a.createElement("div",{className:"copyright"},"copyright \xa92017 dianping.com")))}}]),t}(i.Component);t.a=s},104:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.callback;return c.a.createElement("header",{className:"sub-toolbar"},c.a.createElement("span",{className:"go-back",onClick:n},"\u8fd4\u56de"),c.a.createElement("span",{className:"title"},t))}}]),t}(i.Component);t.a=s},138:function(e,t,n){var r=n(139);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0;n(5)(r,a);r.locals&&(e.exports=r.locals)},139:function(e,t,n){t=e.exports=n(4)(void 0),t.push([e.i,'@charset "UTF-8";\n/*\u4e3b\u4f53\u80cc\u666f\u8272*/\n.price {\n  color: #f63; }\n\n.discount {\n  color: #999; }\n\ndiv, p {\n  max-height: 999999px;\n  max-width: 999999px; }\n\n/*px \u8f6c rem*/\n.merchant-list {\n  background: #fff; }\n  .merchant-list .item {\n    border-bottom: 1px solid #d4d3d3;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    height: auto; }\n    .merchant-list .item:last-child {\n      border: none; }\n    .merchant-list .item .left-cnt {\n      width: 78%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      margin: 0.33333rem 0 0.2rem 0.26667rem;\n      padding-right: 0.46667rem;\n      border-right: 1px solid #d4d3d3; }\n      .merchant-list .item .left-cnt .title {\n        font-size: 0.42667rem;\n        overflow: hidden;\n        -o-text-overflow: ellipsis;\n           text-overflow: ellipsis;\n        word-break: break-word;\n        -webkit-line-clamp: 2; }\n      .merchant-list .item .left-cnt .star-main {\n        position: relative;\n        width: 1.8rem;\n        height: 0.33333rem;\n        margin: 0.2rem 0 0.13333rem;\n        background: url('+n(22)+") no-repeat;\n        background-size: 1.8rem 0.33333rem; }\n        .merchant-list .item .left-cnt .star-main .star {\n          position: absolute;\n          left: 0;\n          top: 0;\n          width: 80%;\n          height: 100%;\n          background: url("+n(23)+") no-repeat;\n          background-size: auto 0.33333rem; }\n      .merchant-list .item .left-cnt .intro, .merchant-list .item .left-cnt .address {\n        font-size: 0.32rem;\n        color: #666; }\n        .merchant-list .item .left-cnt .intro .time, .merchant-list .item .left-cnt .address .time {\n          margin-left: 0.4rem; }\n      .merchant-list .item .left-cnt .address {\n        width: 100%;\n        -o-text-overflow: ellipsis;\n           text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden; }\n    .merchant-list .item .right-cnt {\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n      .merchant-list .item .right-cnt .distance {\n        text-align: center;\n        font-size: 0.34667rem;\n        margin-top: 10px; }\n      .merchant-list .item .right-cnt .phone {\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: center;\n            justify-content: center; }\n        .merchant-list .item .right-cnt .phone i {\n          -ms-flex-item-align: center;\n              align-self: center;\n          height: 0.72rem;\n          width: 0.72rem;\n          background: url("+n(140)+") no-repeat;\n          background-size: 0.69333rem auto;\n          background-position: 0 -0.01333rem; }\n",""])},140:function(e,t,n){e.exports=n.p+"static/media/comm.3367300d.png"},96:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),l=n(104),s=n(21),m=n(103),f=n(138),u=(n.n(f),n(98)),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.goBack=function(){n.props.history.goBack()},n.state={loading:!1,dataList:[]},n}return o(t,e),p(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;Object(u.a)("/mock/merchant/merchant.json").then(function(t){t&&e.setState(Object.assign({loading:!1},t))})}},{key:"handleItemClick",value:function(e){this.props.history.push("/detail/"+e+"?data-"+(new Date).getTime())}},{key:"render",value:function(){var e=this,t=this.state.dataList,n=[];return t.length>0&&t.map(function(t,r){return n.push(c.a.createElement("div",{className:"item",key:r},c.a.createElement("div",{className:"left-cnt",onClick:e.handleItemClick.bind(e,t.id)},c.a.createElement("p",{className:"title"},t.title),c.a.createElement("div",{className:"star-main"},c.a.createElement("span",{className:"star",style:{width:2*t.start*10+"%"}})),c.a.createElement("div",{className:"intro"},c.a.createElement("span",null,t.count),c.a.createElement("span",{className:"time"},t.time)),c.a.createElement("div",{className:"address"},t.address)),c.a.createElement("div",{className:"right-cnt"},t.distance>=1e3?c.a.createElement("div",{className:"distance"},">",t.distance/1e3,"km"):c.a.createElement("div",{className:"distance"},">",t.distance,"m"),c.a.createElement("div",{className:"phone","data-phone":t.phone},c.a.createElement("i",null)))))}),c.a.createElement("div",null,c.a.createElement(l.a,{title:"\u9002\u7528\u5546\u6237",callback:this.goBack}),c.a.createElement("div",{className:"merchant-list"},n),c.a.createElement(m.a,null),this.state.loading&&c.a.createElement(s.a,null))}}]),t}(i.Component);t.default=h},98:function(e,t,n){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";if("GET"===(n=n.toUpperCase())){var r="";Object.keys(t).forEach(function(e){r+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&"}),r&&(e=e+"?"+r.substring(0,r.lastIndexOf("&")))}var a="";if(window.fetch)a=fetch;else if(window.XMLHttpRequest)a=new XMLHttpRequest;else try{a=new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}if(a!==fetch)return new Promise(function(r,o){var i=null;"POST"===n&&(i=t),a.open(n,e,!0),a.timeout=3e4,a.onload=function(){var e=a.response;"[Object String]"===Object.prototype.toString.call(e)&&(e=r(JSON.parse(e))),r(e)},a.onerror=function(){o("")},a.send(i)});var o={method:n,mode:"cors",credentials:"include",cache:"default",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json, text/javascript","Content-Type":"application/json"}};"POST"===n&&o.defineProperty(o,"body",{value:t});try{return fetch(e,o).then(function(e){return e.ok?e.json():(console.log("%c\u8bf7\u6c42\u7ed3\u679c\u5931\u8d25\uff1ao(\u2565\ufe4f\u2565)o","color: #3da8db;"),"")})}catch(e){throw new Error(e)}}}});
//# sourceMappingURL=4.b92c553a.chunk.js.map