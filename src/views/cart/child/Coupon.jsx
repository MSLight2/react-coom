import React, { Component } from 'react';
import Alert from '@/components/alert/Alert';

export default class Coupon extends Component {
  constructor (props) {
    super(props);
    this.state = {
      couponCodeShow: false,
      alertShow: false,
      alertText: ''
    }
    this.handleRadioCheck = this.handleRadioCheck.bind(this);
    this.handleUserCode = this.handleUserCode.bind(this);
    this.timeOut = null;
  }

  handleRadioCheck () {
    this.setState({couponCodeShow: !this.state.couponCodeShow});
  }

  handleUserCode () {
    let val = this.codeInput.value;
    if (!val) {
      this.setState({alertShow: true, alertText: '请填写优惠码'});
    } else if (/\D/g.test(val)) {
      this.setState({alertShow: true, alertText: '请输入数字码'});
    } else {
      this.props.history.goBack();
    }
  }

  handleAlertClose (val) {
    this.setState({alertShow: val});
  }

  render () {
    let { couponCodeShow, alertShow, alertText } = this.state;

    return (
      <div className="coupon-main">
        <div className="coupon-tip">抵用券/优惠码/现金券任选一种，支付完成优惠不可退</div>
        <div className="coipon-code">
          <p className="title-txt">优惠码</p>
          <div className="s-radio btm1">
            <span className="txt">使用优惠码</span>
            <span
              className={couponCodeShow ? 'radio active' : 'radio'}
              onClick={ this.handleRadioCheck }>
            </span>
          </div>
          {
            couponCodeShow &&
            <div className="s-radio c999">
              <input
                className="txtInput"
                name="couponCode"
                type="text"
                placeholder="请使用优惠码"
                ref={ (elem) => { this.codeInput = elem; } }/>
              <span className="btn" onClick={ this.handleUserCode }>使用</span>
            </div>
          }
        </div>
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