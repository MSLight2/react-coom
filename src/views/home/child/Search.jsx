import React, { Component } from 'react';
import Utils from '@/utils/utils';

export default class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchDefault: ['自助餐', '蛋糕', '火锅', '一点点', '喜茶', '点都德', '北京路', '江南西', '正佳广场'],
      searchHistory: []
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearSessionSrotage = this.clearSessionSrotage.bind(this);
    this.searchArr = [];
  }

  componentDidMount () {
    let storageData = Utils.sessionStorage.get('searchHistoryStorage');
    if (storageData) {
      this.setState({searchHistory: Object.assign([], storageData)});
    }
    // 调用focus()会导致多次render
    this.searchElem.focus()
    Utils.addEventHandler(this.searchElem, 'keypress', this.handleKeyPress);
  }

  componentWillUnmount () {
    Utils.removeEventHandler(this.searchElem,'keypress', this.handleKeyPress);
  }

  // 性能优化，减少render次数
  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.searchHistory.length === nextState.searchHistory.length) {
      return false;
    } else {
      return true;
    }
  }

  // 回车事件方法
  handleKeyPress (event) {
    let keyCode = event.keyCode || event.charCode || event.which;
    if (keyCode === 13 && event.target.value) {
      let beforeSearch = Utils.sessionStorage.get('searchHistoryStorage');
      if (beforeSearch) {
        beforeSearch.forEach(item => {
          this.searchArr.push(item);
        });
      }
      this.searchArr.push(event.target.value);
      Utils.sessionStorage.set('searchHistoryStorage', this.searchArr);
      this.props.handleSearchCancel();
    }
  }

  clearSessionSrotage () {
    Utils.sessionStorage.set('searchHistoryStorage', null);
    this.setState({searchHistory: []});
  }

  render () {
    let isShow = this.props.isShow;
    let { searchHistory } = this.state;
    let searchZIndex = -1;
    let isVisible = 'hidden';
    let searchAnim = 'none';
    if (isShow) {
      isVisible = 'visible';
      searchZIndex = 9999;
      searchAnim = 'slideUpSearch 0.3s cubic-bezier(0.35, 0.46, 0.41, 1.03)';
    }
    let showArray = [];
    this.state.searchDefault.map((item, index) => {
      return showArray.push(
        <a href="" key={index}>{ item }</a>
      );
    });
    let historyArr = [];
    this.state.searchHistory.map((item, index) => {
      return historyArr.push(<li key={index}>{ item }</li>);
    });

    return (
      <div className="search-main"
        style={{visibility: isVisible, animation: searchAnim, zIndex: searchZIndex}}>
        <header className="search-top">
          <div className="st-content">
            <input
              type="text"
              name="serchShop"
              className="search-input"
              ref={ (searchElem) => { this.searchElem = searchElem;} }
              placeholder="请输入商会名、地点"/>
          </div>
          <div className="serch-cancle" onClick={ this.props.handleSearchCancel }>取消</div>
        </header>
        <main className="serch-history">
          <div className="cnt">{ showArray }</div>
          { searchHistory.length > 0 && <div className="search-history-title">搜索记录</div> }
        </main>
        {
          searchHistory.length > 0 && 
            <div className="history-cnt">
              <ul className="record">
                { historyArr }
              </ul>
              <div className="clear-btn" onClick={ this.clearSessionSrotage }>清除搜索历史</div>
            </div>
        }
      </div>
    );
  }
}