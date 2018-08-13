import React, { Component } from 'react';

export default class ItemShop extends Component {
  render () {
    let shopListArr = [];
    let listData = this.props.data;
    if (listData.length > 0) {
      listData.map((item, index) => {
        return shopListArr.push(
          <div className="dis-main-item" key={index}>
            <div className="img-cnt">
              <img src={ item.img } alt=""/>
              { item.isAppointment && <span className="appointment">免预约</span> }
            </div>
            <div className="detail-cnt">
              <p className="title">{ item.title }</p>
              <p className="desc">{ item.desc }</p>
              <div className="dis-btm">
                <span className="price">￥<strong>{ item.disPrice }</strong></span>
                <del className="dis-price">￥{ item.price }</del>
                <span className="selled">已售{ item.sellCount }</span>
              </div>
              {
                item.isAppointment && (
                  <div className="dis-tip">
                    <span className="price dis-tip-btn">新客减{ item.newDisPrice }</span>
                    <span className="price dis-tip-btn">新客减{ item.newDisPrice }</span>
                  </div>
                )
              }
            </div>
          </div>
        );
      });
    }
    return (
      <div className="item-list">{ shopListArr }</div>
    )
  }
}