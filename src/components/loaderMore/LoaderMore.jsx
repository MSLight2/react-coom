import React, { Component } from 'react';
import './loader.scss';

export default class LoaderMore extends Component {
  render () {
    return (
      <div className="loader">
        <div className="ball-clip-rotate">
          <div></div><span>正在加载...</span>
        </div>
      </div>
    )
  }
}
