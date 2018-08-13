import React, { Component } from 'react';
import './development.scss';

export default class Development extends Component {
  render () {
    return (
      <div className="development">
        <div className="header-img">
          <img src={require('@/assets/img/dev.jpg')} alt="超级无敌乖巧"/>
        </div>
        <p className="text">开发中...</p>
        <div className="explain">
          <p><span>name</span>：LOG</p>
          <p><span>email</span>：1841978799@qq.com</p>
          <p><span>github</span>：https://github.com/MSLight2</p>
          <p><span>describe</span>：一个基于react，仿照大众点评开发的单页面应用程序。</p>
        </div>
      </div>
    )
  }
}