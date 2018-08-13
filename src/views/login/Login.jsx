import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PhoneLogin from '@/components/PhoneLogin';
import Alert from '@/components/alert/Alert';
import Header from'./child/Header';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      codeVal: null,
      phoneNumber: null,
      alertShow: false,
      alertText: ''
    }
  }

  // 获取手机号码
  getPhoneNumber = (val) => {
    this.setState({phoneNumber: val});
  }

  // 获取验证码的值
  getCodeVal = (val) => {
    this.setState({codeVal: val});
  }

  // 发送验证码
  handleSendCode = () => {
    let phoneNumber = this.state.phoneNumber;
    if (!phoneNumber) {
      this.setState({alertShow: true, alertText: '请输入手机号码'});
    } else if (!/^1[34578][0-9]{9}/g.test(phoneNumber)) {
      this.setState({alertShow: true, alertText: '手机号码格式不正确'});
    } else {
      this.setState({alertShow: true, alertText: '验证码发送成功，请查看手机'});
    }
  }

  handleAlertClose (val) {
    this.setState({alertShow: val});
  }

  goBack = () => {
    this.props.history.goBack();
  }

  login = () => {
    let { phoneNumber, codeVal } = this.state;
    if (!phoneNumber) {
      this.setState({alertShow: true, alertText: '请输入手机号码'});
    } else if (!/^1[34578][0-9]{9}/g.test(phoneNumber)) {
      this.setState({alertShow: true, alertText: '手机号码格式不正确'});
    } else if (!codeVal) {
      this.setState({alertShow: true, alertText: '请输入验证码'});
    } else if (codeVal.length !== 6) {
      this.setState({alertShow: true, alertText: '验证码必须为6位数'});
    } else {
      this.props.history.replace('/home');
    }
  }

  render () {
    let { alertShow, alertText} = this.state;
    return (
      <div>
        <Header title={'手机号快捷登录'} back={ this.goBack }></Header>
        <main className="l-login">
          <PhoneLogin
            phoneCallback= { this.getPhoneNumber }
            codeCallback={ this.getCodeVal }
            sendCallback={ this.handleSendCode }>
          </PhoneLogin>
          <p className="login-tip">未注册的手机号码验证后自动创建点评账户</p>
          <div className="login-btn" onClick={ this.login }>登录</div>
          <div className="account-login">
            <Link to="/nameLogin">账号密码登录</Link>
          </div>
          <section className="other-login">
            <div className="part-title">第三方账号登录</div>
            <div className="part-icon">
              <i></i>
              <i></i>
            </div>
          </section>
        </main>
        <p className="foot-tip">登录即表示你同意大众点评<span>《用户使用协议》</span></p>
        {
          alertShow &&
          <Alert
            text={ alertText }
            close={ this.handleAlertClose.bind(this, false) }
            isShow={ alertShow }>
          </Alert>
        }
      </div>
    );
  }
}