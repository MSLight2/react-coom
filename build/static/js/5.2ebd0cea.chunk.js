webpackJsonp([5],{100:function(e,t,n){var a=n(101);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0};o.transform=void 0;n(5)(a,o);a.locals&&(e.exports=a.locals)},101:function(e,t,n){t=e.exports=n(4)(void 0),t.push([e.i,".alert-main {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10000;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center; }\n  .alert-main .alert-text {\n    -ms-flex-item-align: center;\n        align-self: center;\n    color: #ffffff;\n    background: #000000;\n    max-width: 4.5rem;\n    min-width: 1.0rem;\n    word-wrap: break-word;\n    border-radius: 10px;\n    padding: 22px 20px;\n    font-size: 28px; }\n",""])},105:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),i=n.n(l),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handlePhoneChange=n.handlePhoneChange.bind(n),n.handleCodeChange=n.handleCodeChange.bind(n),n}return r(t,e),c(t,[{key:"handlePhoneChange",value:function(e){this.props.phoneCallback(e.target.value)}},{key:"handleCodeChange",value:function(e){this.props.codeCallback(e.target.value)}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"goods-login"},i.a.createElement("div",{className:"now-login"},i.a.createElement("div",{className:"mobile-phone"},i.a.createElement("div",{className:"eara-num"},i.a.createElement("span",null,"86"),i.a.createElement("i",null)),i.a.createElement("div",{className:"mobile-input"},i.a.createElement("input",{className:"phone-number",type:"number",name:"mobile",autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",ref:function(t){e.phoneEle=t},onChange:this.handlePhoneChange}),i.a.createElement("div",{className:"sent-code",onClick:this.props.sendCallback},"\u53d1\u9001\u9a8c\u8bc1\u7801")))),i.a.createElement("div",{className:"ver-code"},i.a.createElement("div",{className:"txt"},"\u9a8c\u8bc1\u7801"),i.a.createElement("div",{className:"mobile-code"},i.a.createElement("input",{className:"phone-code",type:"number",name:"code",autoComplete:"off",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",ref:function(t){e.codeEle=t},onChange:this.handleCodeChange}))))}}]),t}(l.Component);t.a=s},106:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),i=n.n(l),c=n(1),s=n.n(c),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"login-header"},i.a.createElement("div",{className:"back",onClick:this.props.back},i.a.createElement("i",null)),i.a.createElement("div",{className:"title"},this.props.title))}}]),t}(l.Component);t.a=p,p.propTypes={title:s.a.string,back:s.a.func}},92:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),i=n.n(l),c=n(20),s=n(105),u=n(99),p=n(106),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getPhoneNumber=function(e){n.setState({phoneNumber:e})},n.getCodeVal=function(e){n.setState({codeVal:e})},n.handleSendCode=function(){var e=n.state.phoneNumber;e?/^1[34578][0-9]{9}/g.test(e)?n.setState({alertShow:!0,alertText:"\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f\uff0c\u8bf7\u67e5\u770b\u624b\u673a"}):n.setState({alertShow:!0,alertText:"\u624b\u673a\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e"}):n.setState({alertShow:!0,alertText:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"})},n.goBack=function(){n.props.history.goBack()},n.login=function(){var e=n.state,t=e.phoneNumber,a=e.codeVal;t?/^1[34578][0-9]{9}/g.test(t)?a?6!==a.length?n.setState({alertShow:!0,alertText:"\u9a8c\u8bc1\u7801\u5fc5\u987b\u4e3a6\u4f4d\u6570"}):n.props.history.replace("/home"):n.setState({alertShow:!0,alertText:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}):n.setState({alertShow:!0,alertText:"\u624b\u673a\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e"}):n.setState({alertShow:!0,alertText:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"})},n.state={codeVal:null,phoneNumber:null,alertShow:!1,alertText:""},n}return r(t,e),f(t,[{key:"handleAlertClose",value:function(e){this.setState({alertShow:e})}},{key:"render",value:function(){var e=this.state,t=e.alertShow,n=e.alertText;return i.a.createElement("div",null,i.a.createElement(p.a,{title:"\u624b\u673a\u53f7\u5feb\u6377\u767b\u5f55",back:this.goBack}),i.a.createElement("main",{className:"l-login"},i.a.createElement(s.a,{phoneCallback:this.getPhoneNumber,codeCallback:this.getCodeVal,sendCallback:this.handleSendCode}),i.a.createElement("p",{className:"login-tip"},"\u672a\u6ce8\u518c\u7684\u624b\u673a\u53f7\u7801\u9a8c\u8bc1\u540e\u81ea\u52a8\u521b\u5efa\u70b9\u8bc4\u8d26\u6237"),i.a.createElement("div",{className:"login-btn",onClick:this.login},"\u767b\u5f55"),i.a.createElement("div",{className:"account-login"},i.a.createElement(c.b,{to:"/nameLogin"},"\u8d26\u53f7\u5bc6\u7801\u767b\u5f55")),i.a.createElement("section",{className:"other-login"},i.a.createElement("div",{className:"part-title"},"\u7b2c\u4e09\u65b9\u8d26\u53f7\u767b\u5f55"),i.a.createElement("div",{className:"part-icon"},i.a.createElement("i",null),i.a.createElement("i",null)))),i.a.createElement("p",{className:"foot-tip"},"\u767b\u5f55\u5373\u8868\u793a\u4f60\u540c\u610f\u5927\u4f17\u70b9\u8bc4",i.a.createElement("span",null,"\u300a\u7528\u6237\u4f7f\u7528\u534f\u8bae\u300b")),t&&i.a.createElement(u.a,{text:n,close:this.handleAlertClose.bind(this,!1),isShow:t}))}}]),t}(l.Component);t.default=h},99:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),i=n.n(l),c=n(1),s=n.n(c),u=n(100),p=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),f=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleAlertClose=n.handleAlertClose.bind(n),n.timeOut=null,n}return r(t,e),p(t,[{key:"componentDidMount",value:function(){this.props.isShow&&(this.timeOut=setTimeout(this.handleAlertClose,1500))}},{key:"handleAlertClose",value:function(){this.timeOut&&clearTimeout(this.timeOut),this.props.close(!1)}},{key:"componentWillUnmount",value:function(){this.timeOut&&clearTimeout(this.timeOut)}},{key:"render",value:function(){return i.a.createElement("div",{className:"alert-main",onClick:this.props.close},i.a.createElement("div",{className:"alert-text"},this.props.text))}}]),t}(l.Component);t.a=f,f.propTypes={text:s.a.string,close:s.a.func}}});
//# sourceMappingURL=5.2ebd0cea.chunk.js.map