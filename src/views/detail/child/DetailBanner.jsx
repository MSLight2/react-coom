import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollSlide from '@/components/scrollSlide/ScrollSlide';

export default class DetailBanner extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentIndex: 1
    }
  }

  handleIndicator = (index) => {
    this.setState({currentIndex: index + 1});
  }

  render () {
    let { bannerImg, goodsPriceDetial } = this.props;
    let imgList = [];
    if (bannerImg.imgList) {
      bannerImg.imgList.forEach((item, index) => {
        return imgList.push(
          <div className="item" key={index}>
            <img src={ item } alt="" />
          </div>
        );
      });
    }

    return (
      <section className="banner">
        <div className="cnt">
          <ScrollSlide
            slideClassName="detail-banner"
            setIndicator={this.handleIndicator}>
            { imgList }
          </ScrollSlide>
          <div className="indicator"><span>{ this.state.currentIndex }</span>/{ imgList.length }</div>
          {
            bannerImg.imgDesc && (
              <div className="banner-desc">
                <p className="title">{ bannerImg.imgDesc.title }</p>
                <p className="desc">{ bannerImg.imgDesc.desc }</p>
              </div>
            )
          }
        </div>
        <div className="banner-price">
          <div className="buy">
            <div className="price b-price">
              <span>￥<strong>{ goodsPriceDetial.discount }</strong></span>
              <s className="o-price">￥{ goodsPriceDetial.price }</s>
            </div>
            <Link to="/cart" className="but-btn">立即购买</Link>
          </div>
          {
            goodsPriceDetial.isDailyDisCount && (
              <div className="banner-daliy-discount">
                <span className="ds">立减{ goodsPriceDetial.dailyDisCount }元</span>
                <span className="ds-desc">立减{ goodsPriceDetial.dailyDisCount }元，每人限购{ goodsPriceDetial.limitCount }张</span>
              </div>
            )
          }
          <div className="tip">
            { goodsPriceDetial.isAnyTile && (
              <div className="advantage-item"><i className="right-icon"></i>随时可退</div>
            ) }
            { goodsPriceDetial.beOverdue && (
              <div className="advantage-item"><i className="time-icon"></i>过期自动退</div>
            ) }
          </div>
        </div>
      </section>
    );
  }
}