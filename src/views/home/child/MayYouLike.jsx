import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MayYouLike extends Component {
  render () {
    let contentItem = [];
    if (this.props.data) {
      this.props.data.map((item, index) => {
        return contentItem.push(
          <Link to={`/detail/${item.id}?date=${new Date().getTime()}`} key={index}>
            <div className="may-list-item">
              <div className="pic">
                <img src={ item.img } alt="" />
                { item.isNotAppointment && <span className="may-tip">免预约</span> }
              </div>
              <div className="cnt">
                <p className="h-title">{ item.title }</p>
                <p className="h-detail">{ item.detail }</p>
                <div className="may-price">
                  <span className="price">￥{ item.price }</span>
                  { item.isDiscount ? (
                    <span className="may-new">新客减{ item.isDiscountPrice }</span>
                  ) : (
                    <s>￥{ item.discount }</s>
                  ) }
                  <span className="has-sell">已售{ item.sellCount }</span>
                </div>
              </div>
            </div>
        </Link>);
      });
    }
    return (
      <section className="d-may-youlike">
        <div className="title">猜你喜欢</div>
        <div className="may-list">{contentItem}</div>
      </section>
    );
  }
}