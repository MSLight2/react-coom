import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ApplyMerchant extends Component {
  render () {
    let dataInfo = this.props.data
    let starPercent = (dataInfo.star * 10).toFixed(2) + '%';
    return (
      <section className="applay-user">
        <Link to="/merchant">
          <div className="a-top-title">适用商户({ dataInfo.businessCount })
            <i className="goto-icon"></i>
          </div>
        </Link>
        <div className="a-shop-detail">
          <div className="cnt">
            <p className="a-shop-title">{ dataInfo.title }</p>
            <div className="a-star">
              <span className="star"><i className="star-on" style={{width: starPercent}}></i></span>
              { dataInfo.distance > 100 ? (
                <span className="distance">>100km</span>
              ) : (
                <span className="distance">{ dataInfo.distance }km</span>
              ) }
            </div>
          </div>
          <div className="phone"><i className="p-icon"></i></div>
        </div>
        <div className="a-shop-address">
          <div className="address"><i className="address-icon"></i>{ dataInfo.address }</div>
        </div>
      </section>
    );
  }
}