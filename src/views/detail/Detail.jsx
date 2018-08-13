import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DetailHeader from './cmplt/DetailHeader';
import DetailBanner from './child/DetailBanner';
import ApplyMerchant from './child/ApplyMerchant';
import GroupDetail from './child/GroupDetail';
import GroupNeedNow from './child/GroupNeedNow';
import OtherDetail from './child/OtherDetail'
import HomeFooter from '@/views/home/child/Footer';
import Loading from '@/components/loading/Loading';
import fetchData from '@/utils/fetch';

export default class GoodsDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      bannerImg: '',
      goodsPriceDetial: '',
      goodsInfo: '',
      groupGoodsDetail: '',
      buyNow: '',
      other: ''
    }
  }

  componentDidMount () {
    let { location, match } = this.props;
    if (location.search) {
      fetchData (`/mock/detail/detial${match.params.id}.json`).then((res) => {
        if (res) {
          this.setState({loading: false, ...res});
        }
      })
    } else {
      fetchData (`/mock/detail/d${match.params.id}.json`).then((res) => {
        if (res) {
          this.setState({loading: false, ...res});
        }
      })
    }
  }

  // 返回
  goBack = () => {
    this.props.history.goBack();
  }

  render () {
    let bannerData = {
      bannerImg: this.state.bannerImg,
      goodsPriceDetial: this.state.goodsPriceDetial
    }
    return (
      <div>
        <DetailHeader title={'团购详情'} callback={ this.goBack }></DetailHeader>
        <DetailBanner { ...bannerData }></DetailBanner>
        <section className="goods-detail">
          <ApplyMerchant data={ this.state.goodsInfo }></ApplyMerchant>
          <GroupDetail data={ this.state.groupGoodsDetail }></GroupDetail>
          <GroupNeedNow data={ this.state.buyNow }></GroupNeedNow>
          <section className="btn-buy">
            <Link to="/cart"><span className="buy-now">立即购买</span></Link>
          </section>
          <OtherDetail data={ this.state.other }></OtherDetail>
          <HomeFooter/>
        </section>
        { this.state.loading && <Loading/> }
      </div>
    );
  }
}