import React, { Component } from 'react';
import './loading.scss';

export default class Loading extends Component {
  render () {
    return (
      <div className="pc-loading">
        <img className="loading-img" src={require('@/assets/img/icon/loading.gif')} alt="加载中"/>
      </div>
    );
  }
}