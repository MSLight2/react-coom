import React, { Component } from 'react';
import ItemShop from './child/ItemShop';
import Popup from './child/Popup';
import Loading from '@/components/loading/Loading';
import '@/assets/css/moreDiscount.scss';
import fetch from '@/utils/fetch';

export default class MoreDisCount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      listData: []
    }
  }

  componentDidMount () {
    this.fetchData();
  }

  fetchData () {
    fetch ('/mock/discount/list.json').then((res) => {
      if (res) {
        this.setState({loading: false, ...res});
      }
    })
  }

  render () {
    let { loading, listData } = this.state;
    return (
      <div className="dis-main">
        <Popup></Popup>
        <ItemShop data={ listData } />
        { loading && <Loading/> }
      </div>
    )
  }
}