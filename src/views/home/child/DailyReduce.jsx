import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DailyReduce extends Component {
  render () {
    let contentItem = [];
    if (this.props.data) {
      this.props.data.map((item, index) => {
        return contentItem.push(<div className="row-list-item" key={index}>
          <Link to={`/detail/${item.id}`}>
            <div className="pic"><img src={ item.img } alt="" /></div>
            <p className="r-title">{ item.title }</p>
            <div className="r-price">
              <span className="price">￥{ item.price }</span>
              <span className="discount-amount">立减{ item.discount }元</span>
            </div>
          </Link>
        </div>);
      })
    }
    return (
      <section className="d-discount d-daily-diacount">
        <div className="hd-title">
          <span className="h-title"></span>
          <Link to="/moreDiscount"><span className="more-txt">更多优惠</span></Link>
        </div>
        <div className="row-list">{ contentItem }</div>
      </section>
    );
  }
}