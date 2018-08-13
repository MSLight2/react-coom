import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Utils from '@/utils/utils';

let startX = 0;		//起始X坐标
let startY = 0;
let endX = 0;			//结束X坐标
let endY = 0;
let hasMoveX = 0;		//已经滚动的宽度
let moveX = 0;			//滚动的宽度
let currentElemIndex = 0;  // 当前滚动的元素索引

/**
 * props->slideClassName：包裹滚动条目的类名
 * props->setIndicator：指示器回调
 */
export default class ScrollSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextIndicator: 0,
      mTranslateX: 0
    }
    this.handleTouchEvent = this.handleTouchEvent.bind(this);
  }

  componentDidMount () {
    this.initReset();
    let touchElem = document.querySelector(`.${this.props.slideClassName}`);
    Utils.addEventHandler(touchElem, 'touchstart', this.handleTouchEvent);
    Utils.addEventHandler(touchElem, 'touchmove', this.handleTouchEvent);
    Utils.addEventHandler(touchElem, 'touchend', this.handleTouchEvent);
  }

  componentWillUnmount () {
    let touchElem = document.querySelector(`.${this.props.slideClassName}`);
    Utils.removeEventHandler(touchElem, 'touchstart', this.handleTouchEvent);
    Utils.removeEventHandler(touchElem, 'touchmove', this.handleTouchEvent);
    Utils.removeEventHandler(touchElem, 'touchend', this.handleTouchEvent);
  }

  // 触摸处理事件
  handleTouchEvent (event) {
    let touchElem = document.querySelector(`.${this.props.slideClassName}`);
    let itemWidth = touchElem.firstChild.offsetWidth;
    //触摸手势
    switch (event.type) {
      case 'touchstart':
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        hasMoveX = currentElemIndex * itemWidth;
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
        if (currentElemIndex === touchElem.childNodes.length - 1 && moveX < 0) {
          if (Math.abs(moveX) > itemWidth / 2) return;
        } else if (currentElemIndex === 0 && moveX > 0) {
          hasMoveX = 0;
          if (Math.abs(moveX) > itemWidth / 2) return;
        }
        this.setState({mTranslateX: -hasMoveX + moveX});
        break;
      case 'touchend':
        // 手指左滑动
        if (moveX < 0) {
          if (currentElemIndex === touchElem.childNodes.length - 1) {
            this.setState({mTranslateX: -itemWidth * currentElemIndex});
            return;
          }
          // 滑动没超过条目的1/5
          if (Math.abs(moveX) < itemWidth / 2) {
            this.setState({mTranslateX: -itemWidth * currentElemIndex});
          } else {
            this.setState({mTranslateX: -itemWidth * (currentElemIndex + 1)});
            currentElemIndex++;
            if (currentElemIndex > touchElem.childElementCount) {
              currentElemIndex = touchElem.childElementCount;
            }
            // 指示器（indicateor）
            let nextIndicatorCopy = this.state.nextIndicator;
            nextIndicatorCopy++;
            if (nextIndicatorCopy > touchElem.childNodes.length - 1) {
              nextIndicatorCopy = touchElem.childNodes.length - 1;
            }
            this.setState({nextIndicator: nextIndicatorCopy});
            this.props.setIndicator(nextIndicatorCopy);
          }
        } else if (moveX > 0) {
          if (currentElemIndex === 0) {
            this.setState({mTranslateX: 0});
            return;
          }
          if (Math.abs(moveX) < itemWidth / 2) {
            this.setState({mTranslateX: -hasMoveX});
          } else {
            this.setState({mTranslateX: -(itemWidth * currentElemIndex - itemWidth)});
            currentElemIndex--;
            if (currentElemIndex < 0) {
              currentElemIndex = 0;
            }
            let nextIndicatorCopy = this.state.nextIndicator;
            nextIndicatorCopy--;
            if (nextIndicatorCopy < 0) {
              nextIndicatorCopy = 0;
            }
            this.setState({nextIndicator: nextIndicatorCopy});
            this.props.setIndicator(nextIndicatorCopy);
          }
        }
        break;
      default:
        break;
    }
    event.stopPropagation();
  }

  // 重置变量
  initReset () {
    startX = 0;
    startY = 0;
    endX = 0;
    endY = 0;
    hasMoveX = 0;
    moveX = 0;
    currentElemIndex = 0;
  }

  render () {
    let {mTranslateX} = this.state;
    return (
      <nav
        className={ this.props.slideClassName }
        style={{transform: `translate3d(${mTranslateX}px,0,0)`}}>
        { this.props.children }
      </nav>
    )
  }
}

ScrollSlide.propTypes = {
  slideClassName: PropTypes.string,
  setIndicator: PropTypes.func
}