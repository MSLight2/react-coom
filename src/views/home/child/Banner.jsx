import React, { Component } from 'react';
import Utils from '@/utils/utils';

let startX = 0;			//起始X坐标
let startY = 0;
let endX = 0;			//结束X坐标
let endY = 0;
let hasMoveX = 0;		//已经滚动的宽度
let moveX = 0;				//滚动的宽度

export default class HomeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextIndicator: 0,
      mTranslateX: 0
    }
    this.handleTouchEvent = this.handleTouchEvent.bind(this);
  }

  /**
   * 此页的banner滚动代码未替换。
   * 如需替换可以使用：components/scrollSlide/ScrollSlide
   * 详情可参考：views/detail/child/DetailBanner
   */
  componentDidMount () {
    let touchElem = document.querySelector('.nav-main');
    Utils.addEventHandler(touchElem, 'touchstart', this.handleTouchEvent);
    Utils.addEventHandler(touchElem, 'touchmove', this.handleTouchEvent);
    Utils.addEventHandler(touchElem, 'touchend', this.handleTouchEvent);
  }

  componentWillUnmount () {
    let touchElem = document.querySelector('.nav-main');
    Utils.removeEventHandler(touchElem, 'touchstart', this.handleTouchEvent);
    Utils.removeEventHandler(touchElem, 'touchmove', this.handleTouchEvent);
    Utils.removeEventHandler(touchElem, 'touchend', this.handleTouchEvent);
  }

  // 触摸处理事件
  handleTouchEvent (event) {
    let touchElem = document.querySelector('.nav-main');
    let parentAttr = parseInt(event.target.getAttribute('data-item'));
    let itemWidth = touchElem.firstChild.offsetWidth;
    //触摸手势
    switch (event.type) {
      case 'touchstart':
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        hasMoveX = parentAttr * itemWidth;
        break;
      case 'touchmove':
        endX = event.changedTouches[0].clientX;
        endY = event.changedTouches[0].clientY;
        // 防止下滑是会横向滚动
        if (Math.abs(endY - startY) > 20) {
          return;
        }
        moveX = endX - startX;
        // 控制滑动边界
        if (parentAttr === touchElem.childNodes.length - 1 && moveX < 0) {
          if (Math.abs(moveX) > itemWidth / 4) return;
        } else if (parentAttr === 0 && moveX > 0) {
          hasMoveX = 0;
          if (Math.abs(moveX) > itemWidth / 4) return;
        }
        this.setState({mTranslateX: -hasMoveX + moveX});
        break;
      case 'touchend':
        // 手指左滑动
        if (moveX < 0) {
          if (parentAttr === touchElem.childNodes.length - 1) {
            this.setState({mTranslateX: -itemWidth * parentAttr});
            return;
          }
          // 滑动没超过条目的1/5
          if (Math.abs(moveX) < itemWidth / 4) {
            this.setState({mTranslateX: -itemWidth * parentAttr});
          } else {
            this.setState({mTranslateX: -itemWidth * (parentAttr + 1)});
            let nextIndicatorCopy = this.state.nextIndicator;
            nextIndicatorCopy++;
            if (nextIndicatorCopy > touchElem.childNodes.length - 1) {
              nextIndicatorCopy = touchElem.childNodes.length - 1;
            }
            this.setState({nextIndicator: nextIndicatorCopy});
          }
        } else if (moveX > 0) {
          if (parentAttr === 0) {
            this.setState({mTranslateX: 0});
            return;
          }
          if (Math.abs(moveX) < itemWidth / 4) {
            this.setState({mTranslateX: -hasMoveX});
          } else {
            this.setState({mTranslateX: -(itemWidth * parentAttr - itemWidth)});
            let nextIndicatorCopy = this.state.nextIndicator;
            nextIndicatorCopy--;
            if (nextIndicatorCopy < 0) {
              nextIndicatorCopy = 0;
            }
            this.setState({nextIndicator: nextIndicatorCopy});
          }
        }
        break;
      default:
        break;
    }
    event.stopPropagation();
  }

  render () {
    let {nextIndicator, mTranslateX} = this.state;
    let data = this.props.data;
    let bannerListArr = [];
    let dataLength = [];
    if (data.length > 0) {
      data.map((item, index) => {
        dataLength.push(index);
        return bannerListArr.push(
          <div className="nav-items" data-item={index} key={index}>
            {
              item.map((childItem, childIndex) => {
                return (
                  <div className="n-item" key={childIndex}>
                    <img className="img" src={ childItem.img } alt={ item.name }/>
                    <span className="text">{ childItem.name }</span>
                  </div>
                );
              })
            }
          </div>
        );
      });
    }
    return (
      <section className="d-nav">
        <nav
          className="nav-main"
          style={{transform: `translate3d(${mTranslateX}px,0,0)`}}>
          { bannerListArr }
        </nav>
        <div className="indicator">
          <ul className="circles">
            {
              dataLength.length > 0 && (
                dataLength.map((indicator, index) => {
                  return (
                    <li
                      className={nextIndicator === indicator ? 'circle on' : 'circle'}
                      key={index}>
                    </li>
                  )
                })
              )
            }
          </ul>
        </div>
      </section>
    );
  }
}