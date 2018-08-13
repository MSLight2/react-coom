import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './alert.scss';

export default class Alert extends Component {
  constructor (props) {
    super(props);
    this.handleAlertClose = this.handleAlertClose.bind(this);
    this.timeOut = null;
  }
  
  componentDidMount () {
    if (this.props.isShow) {
      this.timeOut = setTimeout(this.handleAlertClose, 1500);
    }
  }

  handleAlertClose () {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.props.close(false)
  }

  componentWillUnmount () {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
  }

  render () {
    return (
      <div className="alert-main" onClick={ this.props.close }>
        <div className="alert-text">{ this.props.text }</div>
      </div>
    )
  }
}

Alert.propTypes  = {
  text: PropTypes.string,
  close: PropTypes.func
}