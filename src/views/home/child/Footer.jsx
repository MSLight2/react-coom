import React, { Component } from 'react';

export default class HomeFooter extends Component {
  render () {
    return (
      <footer>
        <div className="footer-cnt">
          <a href="">我的</a>
          <em className="line">|</em>
          <a href="">社区论坛</a>
          <em className="line">|</em>
          <a href="">添加商户</a>
          <em className="line">|</em>
          <a href="">意见反馈</a>
          <br/>
          <a href="">美团网</a>
          <em className="line">|</em>
          <a href="">美团下载</a>
          <em className="line">|</em>
          <a href="">结婚</a>
          <em className="line">|</em>
          <a href="">亲子</a>
          <em className="line">|</em>
          <a href="">家族</a>
          <em className="line">|</em>
          <a href="">宴会</a>
          <em className="line">|</em>
          <a href="">教育</a>
          <br/>
          <a href="">电脑</a>
          <em className="line">|</em>
          <a href="">客户端</a>
          <div className="copyright">copyright ©2017 dianping.com</div>
        </div>
      </footer>
    );
  }
}