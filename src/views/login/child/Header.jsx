import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render () {
    return (
      <header className="login-header">
        <div className="back" onClick={ this.props.back }><i></i></div>
        <div className="title">{ this.props.title }</div>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  back: PropTypes.func
}