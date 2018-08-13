import React, { Component } from 'react';
import PhoneLogin from '@/components/PhoneLogin'
import createHistory from "history/createBrowserHistory";
import fetch from '@/utils/fetch';
import { Link } from 'react-router-dom';
import Alert from '@/components/alert/Alert';

export default class Cart extends Component {
  constructor (props) {
    super(props);
    this.state = {
      number: 1,
      phone: '',
      validateCode: '',
      title: '',
      price: '',
      singlePrice: 0,
      codeVal: null,
      phoneNumber: null,
      alertShow: false,
      alertText: ''
    }
    this.history = createHistory();
  }

  componentDidMount () {
    fetch ('/mock/home/cart.json').then((res) => {
      if (res) {
        let data = res.goodsInfo;
        this.setState({title: data.title, price: data.price, singlePrice: data.price});
      }
    })
  }

  addNumber = (e) => {
    let oldNumber = this.state.number;
    let singlePrice = this.state.singlePrice;
    oldNumber++;
    if (oldNumber > 99999) {
      oldNumber = 99999;
      this.setState({number: oldNumber});
      return;
    }
    this.setState({number: oldNumber, price: singlePrice * oldNumber});
  }

  reduceNumber = (e) => {
    let oldNumber = this.state.number;
    let singlePrice = this.state.singlePrice;
    oldNumber--;
    if (oldNumber < 1) {
      return;
    }
    this.setState({number: oldNumber, price: singlePrice * oldNumber});
  }

  numberChange = (e) => {
    let singlePrice = this.state.singlePrice;
    let val = e.target.value;
    if (val <= 0) {
      val = 1;
    }
    this.setState({number: val, price: singlePrice * val});
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

  // 立即登录
  loginNow = () => {
    this.props.history.replace('/login');
  }

  // 提交订单
  submitOrder = () => {
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

  // 返回
  goBack = () => {
    this.history.goBack();
  }

  handleAlertClose (val) {
    this.setState({alertShow: val});
  }

  render () {
    let { number, title, price, alertShow, alertText} = this.state;

    return (
      <div>
        <header className="order-header">
          <div className="back" onClick={ this.goBack }>返回</div>
          <div className="order-text">提交订单</div>
        </header>
        <main>
          <section className="goods-info">
            <div className="title">{ title }</div>
            <div className="count">
              <span className="txt">数量</span>
              <div className="user-input">
                <span onClick={ this.reduceNumber }>—</span>
                <input type="number"
                  name="goodsCount"
                  value={ number }
                  onChange={ this.numberChange }/>
                <span className="add" onClick={ this.addNumber }>+</span>
              </div>
            </div>
            <div className="subtotal">
              <span>小计</span>
              <span className="pri">￥{ price }</span>
            </div>
            <div className="voucher"><Link to="/coupon">现金券/抵用券/优惠码<i></i></Link></div>
          </section>
          <div className="now-login-txt" onClick={ this.loginNow }>立即登录</div>
          <PhoneLogin
            phoneCallback= { this.getPhoneNumber }
            codeCallback={ this.getCodeVal }
            sendCallback={ this.handleSendCode }>
          </PhoneLogin>
          <section className="order-tip">
            <div><i className="icon"></i><span>支持随时退</span></div>
            <div><i className="icon"></i><span>支持过期退</span></div>
          </section>
          <div className="sub-order-btn" onClick={ this.submitOrder }>提交订单</div>
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
    );
  }
}