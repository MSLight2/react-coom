import React, { Component } from 'react';
import DetailHeader from '../cmplt/DetailHeader';
import Loading from '@/components/loading/Loading';
import HomeFooter from '@/views/home/child/Footer';
import './css/merchant.scss';
import fetch from '@/utils/fetch';

export default class Merchant extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      dataList: []
    }
  }

  componentDidMount () {
    this.fetchData();
  }
  
  fetchData () {
    fetch ('/mock/merchant/merchant.json').then((res) => {
      if (res) {
        this.setState({loading: false, ...res});
      }
    })
  }

  handleItemClick (id) {
    this.props.history.push(`/detail/${id}?data-${new Date().getTime()}`);
  }
  // 返回
  goBack = () => {
    this.props.history.goBack();
  }

  render () {
    let { dataList } = this.state;
    let merchantList = [];
    if (dataList.length > 0) {
      dataList.map((item, index) => {
        return merchantList.push(
          <div className="item" key={index}>
            <div className="left-cnt" onClick={ this.handleItemClick.bind(this, item.id) }>
              <p className="title">{ item.title }</p>
              <div className="star-main">
                <span className="star"  style={ {width: `${item.start * 2 * 10}%`} }></span>
              </div>
              <div className="intro">
                <span>{ item.count }</span>
                <span className="time">{ item.time }</span>
              </div>
              <div className="address">{ item.address }</div>
            </div>
            <div className="right-cnt">
              {
                item.distance >= 1000 ? (
                  <div className="distance">&gt;{ item.distance / 1000 }km</div>
                ) : (
                  <div className="distance">&gt;{ item.distance }m</div>
                )
              }
              <div className="phone" data-phone={ item.phone }><i></i></div>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <DetailHeader title={'适用商户'} callback={ this.goBack }></DetailHeader>
        <div className="merchant-list">{ merchantList }</div>
        <HomeFooter/>
        { this.state.loading && <Loading/> }
      </div>
    )
  }
}