import React, { Component } from 'react';

export default class PhoneLogin extends Component {
  constructor (props) {
    super(props);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }

  handlePhoneChange (e) {
    this.props.phoneCallback(e.target.value);
  }

  handleCodeChange (e) {
    this.props.codeCallback(e.target.value);
  }

  render () {
    return (
      <section className="goods-login">
        <div className="now-login">
          <div className="mobile-phone">
            <div className="eara-num">
              <span>86</span>
              <i></i>
            </div>
            <div className="mobile-input">
              <input
                className="phone-number"
                type="number"
                name="mobile"
                autoComplete="off"
                placeholder="请输入手机号"
                ref={ (elem) => { this.phoneEle = elem; } }
                onChange={ this.handlePhoneChange }/>
              <div className="sent-code" onClick={ this.props.sendCallback }>发送验证码</div>
            </div>
          </div>
        </div>
        <div className="ver-code">
          <div className="txt">验证码</div>
          <div className="mobile-code">
            <input
              className="phone-code"
              type="number"
              name="code"
              autoComplete="off"
              placeholder="请输入验证码"
              ref={ (elem) => { this.codeEle = elem; } }
              onChange={ this.handleCodeChange }/>
          </div>
        </div>
      </section>
    );
  }
}