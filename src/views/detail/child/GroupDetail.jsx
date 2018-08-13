import React, { Component } from 'react';

export default class GroupDetail extends Component {
  render () {
    let dataInfo = this.props.data;
    let itemArr = [];
    if (dataInfo) {
      dataInfo.goodsItem.map((item, index) => {
        return itemArr.push(
          <div className="item" key={index}>
            <span className="name">{ item.title }</span>
            <div className="desc">{ item.count }份&nbsp;&nbsp;&nbsp;&nbsp;{ item.price }元</div>
          </div>
        );
      });
    }

    return (
      <section className="group-detail">
        <div className="detail-title">团购详情<i className="detail-icon"></i></div>
        { dataInfo.typeText && <div className="group-desc">蛋糕</div> }
        <div className="price-detail">
          { itemArr }
        </div>
        <div className="other-detail">
          <div className="max-price">最高价&nbsp;&nbsp;&nbsp;&nbsp;{ dataInfo.maxPrice }元</div>
          <div className="discount-price price">团购价&nbsp;&nbsp;&nbsp;&nbsp;<strong>{ dataInfo.groupPrice }元</strong></div>
          {
            dataInfo.explain && (
              <div className="text">
                <p>{ dataInfo.explain }</p>
              </div>
            )
          }
        </div>
        <div className="more-img">更多图文详情
          <span className="notice">（建议Wifi环境下打开,土豪请随意）<i className="goto-icon"></i></span>
        </div>
      </section>
    );
  }
}