import React, { Component } from 'react';

export default class DownLoadApp extends Component {
  render () {
    return (
      <section className="d-banner">
        <div className="title">
          <i className="icon"></i>
          <span className="text">吃喝玩乐，找优惠</span>
        </div>
        <div className="btns">
          <a href="" className="btn-openapp">打开大众点评</a>
          <a href="" className="btn-downlaod">下载APP享特价</a>
        </div>
      </section>
    );
  }
}