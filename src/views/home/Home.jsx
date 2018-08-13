import React, { Component } from 'react';
import HomeHeader from './child/Header';
import DownLoadApp from './child/DownLoadApp';
import HomeBanner from './child/Banner';
import HomeNews from './child/HomeNews';
import ActivityPref from './child/ActivityPref';
import SuperBenifit from './child/SuperBenifit';
import DailyReduce from './child/DailyReduce';
import MayYouLike from './child/MayYouLike';
import HomeFooter from './child/Footer';
import Search from './child/Search';
import Loading from '@/components/loading/Loading';
import LoaderMore from '@/components/loaderMore/LoaderMore';
import fetch from '@/utils/fetch';
import Utils from '@/utils/utils';

export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      bannerList: [],
      newsList: [],
      benifitList: [],
      daliyList: [],
      list: [],
      searchShow: false,
      isBottom: false,
      loading: true,
      page: 1
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount () {
    this.fetchData();
    Utils.addEventHandler(window, 'scroll', this.handleScroll, true);
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.state.page === nextState.page) {
      return false;
    } else {
      if (nextState.page < 5) {
        this.setState({isBottom: false});
        Utils.addEventHandler(window, 'scroll', this.handleScroll, true);
      } else {
        this.setState({isBottom: false});
      }
      return true;
    }
  }

  componentWillUnmount () {
    Utils.removeEventHandler(window,'scroll', this.handleScroll, true);
  }

  handleScroll () {
    let elem = document.getElementsByClassName('main')[0];
    let toolbarWidth = document.getElementsByClassName('toolbar')[0].clientHeight;
    let hasScrollTop = elem.scrollTop;
    let moreTop = this.bottomMore.offsetTop + this.bottomMore.clientHeight;
    // 元素到文档顶部的高度要小于滚动的高度加浏览器可视高度
    if (moreTop <= (window.innerHeight + hasScrollTop - toolbarWidth)) {
      this.setState({isBottom: true});
      this.fetchMore()
      Utils.removeEventHandler(window,'scroll', this.handleScroll, true);
    } else {
      this.setState({isBottom: false});
    }
  }

  fetchData () {
    fetch ('/mock/home/home.json').then((res) => {
      if (res) {
        this.setState({loading: false, ...res});
      }
    })
  }

  fetchMore () {
    setTimeout(() => {
      let newAttr = this.state.list;
      let attr = newAttr.slice(0, 8);
      attr.forEach(item => {
        newAttr.push(item);
      })
      this.setState({list: newAttr, page: this.state.page + 1});
    }, 1000)
  }

  onSearchOpen = () => {
    this.setState({searchShow: true});
  }

  onSearchCancel = () => {
    this.setState({searchShow: false});
  }

  // 查看跟多
  checkMore = () => {
    if (this.state.page > 20) {
      return;
    }
    this.setState({isBottom: true});
    this.fetchMore();
  }

  // 进入个人中心
  handleEntoUserCenter = () => {
    this.props.history.push('/login');
  }

  render () {
    let {
      bannerList,
      newsList,
      benifitList,
      daliyList,
      list,
      searchShow,
      isBottom,
      loading
    } = this.state;

    return (
      <div>
        <HomeHeader
          area="广州"
          clickSearch={ this.onSearchOpen }
          entoUserCenter={ this.handleEntoUserCenter}>
        </HomeHeader>
        <main className="main">
          <DownLoadApp></DownLoadApp>
          <HomeBanner data={ bannerList }></HomeBanner>
          <HomeNews data={ newsList }></HomeNews>
          <ActivityPref/>
          <SuperBenifit data={ benifitList }></SuperBenifit>
          <DailyReduce data={ daliyList }></DailyReduce>
          <MayYouLike data={ list }></MayYouLike>
          { isBottom ? <LoaderMore/> : (
            <section
              ref={(moreEle) => { this.bottomMore = moreEle; }}
              className="check-more"
              onClick={ this.checkMore }>查看更多
            </section>
          ) }
          <HomeFooter/>
        </main>
        {
          searchShow && <Search
            isShow={ searchShow }
            handleSearchCancel={ this.onSearchCancel }>
          </Search>
        }
        { loading && <Loading/> }
      </div>
    );
  }
}