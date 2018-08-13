import React, { Component } from 'react';

export default class HomeNews extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mTimeout: null,
      mTranslateY: 0,
      currentIndex: 0,
      isLast: false
    }
    this.timeoutScroll = this.timeoutScroll.bind(this);
  }

  componentDidMount () {
    let mTimeout = setTimeout(this.timeoutScroll, 3500);
    this.setState({mTimeout: mTimeout});
  }

  componentWillUnmount () {
    if (this.state.mTimeout) {
      clearTimeout(this.state.mTimeout);
    }
  }

  timeoutScroll () {
    let newsCntElem = document.querySelector('.headline-scroll');
    let itemLength = Array.from(newsCntElem.childNodes).length;
    let {mTranslateY, currentIndex, isLast, mTimeout} = this.state;
    mTranslateY += -newsCntElem.firstChild.offsetHeight;
    currentIndex++;
    if (currentIndex > itemLength - 1) {
      currentIndex = 0;
      mTranslateY = 0;
      isLast = true;
    } else {
      isLast = false;
    }
    if (mTimeout) clearTimeout(mTimeout);
    this.setState({
      mTimeout: setTimeout(this.timeoutScroll, 3500),
      mTranslateY: mTranslateY,
      currentIndex: currentIndex,
      isLast: isLast
    });
  }

  render () {
    let { mTranslateY, isLast } = this.state;
    let newsData = this.props.data;
    let newsListArr = [];
    if (newsData.length > 0) {
      newsData.map((item, index) => {
        return newsListArr.push(
          <div className="headline-cnt" key={index}>
            <a href="">
              <span className="headline-text">{ item.title }</span>
            </a>
            <div className="headline-tip">
              <img src={ item.img } alt=""/>
            </div>
          </div>
        );
      })
    }
    return (
      // 点评头条
      <section className="d-headline">
        <div className="headline-img"></div>
        <div
          className="headline-scroll"
          style={{
            transform: `translateY(${mTranslateY}px)`,
            transition: isLast ? 'none' : 'all 1s cubic-bezier(0.08, 0.82, 0.47, 1.01)'
          }}>
          { newsListArr }
        </div>
      </section>
    );
  }
}