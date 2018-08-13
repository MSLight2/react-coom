import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OtherDetail extends Component {
  render () {
    let dataInfo = this.props.data;
    let list = [];

    if (dataInfo.length > 0) {
      dataInfo.forEach((item, index) => {
        return list.push(
          <Link to="" key={index}>
            <div className="ohter-group-item">
              <span className="price"><span className="rmb">￥</span>{ item.discount }</span>
              <del>￥{ item.price }</del>
              <span>{ item.title }</span>
            </div>
          </Link>
        );
      });
    }
    
    return (
      <section className="ohter-group">
        <div className="detail-title">其他团购</div>
        { list }
      </section>
    );
  }
}