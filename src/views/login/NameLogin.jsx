import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './child/Header';
import Alert from '@/components/alert/Alert';

export default class NameLogin extends Component {
  constructor( props) {
    super(props);
    this.state = {
      alertShow: false,
      alertText: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin () {
    let userName = this.UserName.value;
    let pwd = this.pwd.value;
    if (!userName) {
      this.setState({alertShow: true, alertText: '请输入用户名'});
    } else if (!pwd) {
      this.setState({alertShow: true, alertText: '请输入密码'});
    } else if (pwd.length < 6) {
      this.setState({alertShow: true, alertText: '密码长度必须大于6位数'});
    } else {
      this.props.history.replace('/');
    }
  }
  
  goBack = () => {
    this.props.history.goBack();
  }
  
  handleAlertClose (val) {
    this.setState({alertShow: val});
  }

  render () {
    let { alertShow, alertText} = this.state;
    return (
      <div>
        <Header title={'账号密码登录'} back={ this.goBack }></Header>
        <main className="name-login-main">
          <div className="nlm-input">
            <div className="nlm-name">
              <i></i>
              <input
                type="text"
                name="userName"
                placeholder="手机号"
                ref={ (elem) => { this.UserName = elem; } }/>
            </div>
            <div className="nlm-pwd">
              <i></i>
              <input
                type="password"
                name="pwd"
                placeholder="密码"
                ref={ (elem) => {this.pwd = elem; } }/>
            </div>
          </div>
          <div className="nlm-login-btn" onClick={ this.handleLogin }>登录</div>
          <div className="nlm-text">
            <Link to="/">忘记密码？</Link>
          </div>
        </main>
        {
          alertShow &&
          <Alert
            text={ alertText }
            close={ this.handleAlertClose.bind(this, false) }
            isShow={ alertShow }>
          </Alert>
        }
      </div>
    )
  }
}