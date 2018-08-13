import React, { Component } from 'react';

export default class DetailHeader extends Component {
  render () {
    let { title, callback } = this.props;
    return (
      <header className="sub-toolbar">
        <span className="go-back" onClick={ callback }>返回</span>
        <span className="title">{ title }</span>
      </header>
    )
  }
}