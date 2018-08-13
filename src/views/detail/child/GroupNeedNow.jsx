import React, { Component } from 'react';

export default class GroupNeedNow extends Component {
  render () {
    let dataInfo = this.props.data
    let arrList = [];
    // let list = [];
    // if (dataInfo) {
    //   Object.keys(dataInfo).forEach((item, index) => {
    //     if (Object.prototype.toString.call(dataInfo[item]) === '[object Array]') {
    //       dataInfo[item].forEach((arrItem, arrIndex) => {
    //         list.push(<p className="n-time" key={arrIndex}>{arrItem}</p>)
    //       })
    //     } else {
    //       list.push(<p className="n-time" key={index}>dataInfo[item]</p>)
    //     }
    //     return list
    //   });
    // }
    if (dataInfo) {
      dataInfo.businessService.forEach((item, index) => {
        return arrList.push(<p className="n-time" key={index}>{ item }</p>);
      });
    }
    return (
      <section className="group-need-now">
        <div className="detail-title">购买需知<i className="detail-icon announce"></i></div>
        <ul className="need-item">
          <li className="n-item">
            <p className="n-title">有效期</p>
            <p className="n-time">{ dataInfo.dataTime }</p>
          </li>
          <li className="n-item">
            <p className="n-title">除外日期</p>
            <p className="n-time">{ dataInfo.exTime }</p>
          </li>
          <li className="n-item">
            <p className="n-title">使用时间</p>
            <p className="n-time">{ dataInfo.useTime }</p>
          </li>
          <li className="n-item">
            <p className="n-title">预约提醒</p>
            <p className="n-time">{ dataInfo.makeRemind }</p>
          </li>
          <li className="n-item">
            <p className="n-title">规则提醒</p>
            {
              dataInfo.ruleRemind && dataInfo.ruleRemind.map((item, index) => {
                return <p className="n-time" key={index}>{ item }</p>
              })
            }
          </li>
          <li className="n-item">
            <p className="n-title">其他费用</p>
            {
              dataInfo.otherPay && dataInfo.otherPay.map((item, index) => {
                return <p className="n-time" key={index}>{ dataInfo.otherPay }</p>
              })
            }
          </li>
          <li className="n-item">
            <p className="n-title">包间</p>
            <p className="n-time">{ dataInfo.privateRoom ? '有包间' : '店内无包间' }</p>
          </li>
          <li className="n-item">
            <p className="n-title">堂食外带</p>
            <p className="n-time">{ dataInfo.toGo }</p>
          </li>
          <li className="n-item">
            <p className="n-title">温馨提示</p>
            {
              dataInfo.tip && dataInfo.tip.map((item, index) => {
                return <p className="n-time" key={index}>{ item }</p>
              })
            }
          </li>
          <li className="n-item">
            <p className="n-title">商家服务</p>
            { arrList }
          </li>
        </ul>
      </section>
    );
  }
}