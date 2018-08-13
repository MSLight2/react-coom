import React, { Component } from 'react';

let classifyArr = [
  {name: '面包甜点', count: 16573 },
  {name: '聚餐宴请', count: 10235 },
  {name: '蛋糕', count: 8826 },
  {name: '粤菜', count: 8226 },
  {name: '火锅', count: 6982 },
  {name: '间餐快餐', count: 6323 },
  {name: '西餐', count: 6005 },
  {name: '小吃', count: 4932 },
  {name: '川菜', count: 4832 },
  {name: '其它美食', count: 3134 },
  {name: '日本料理', count: 2560 },
  {name: '湘菜', count: 2289 },
  {name: '烧烤/烤肉', count: 2285 },
  {name: '咖啡厅', count: 1631 },
  {name: '韩国料理', count: 1121 },
  {name: '甜品', count: 1002 }
]
let businessArr = [
  {name: '天河城/体育中心', count: 8199 },
  {name: '珠江新城', count: 8199 },
  {name: '北京路', count: 4335 },
  {name: '江南大道', count: 4208 },
  {name: '石碑/龙口', count: 3736 },
  {name: '天河北', count: 4760 },
  {name: '客村/赤岗', count: 2469 },
  {name: '中山二三路/东山口', count: 5132 },
  {name: '高德置地/花城汇', count: 1916 },
  {name: '环市东', count: 3059 },
  {name: '车陂/东圃', count: 3891 },
  {name: '工业大道', count: 2296 },
  {name: '中山七八路', count: 4985 },
  {name: '天河公园', count: 3861 },
  {name: '同和/京溪', count: 2943 },
  {name: '江南路', count: 2568 },
  {name: '滨江路', count: 2336 },
  {name: '芳村', count: 3037 },
  {name: '机场路', count: 2277 }
]

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifyShow: false,
      businessShow: false,
      cCurrentIndex: 1,
      bCurrentIndex: 1
    }
    this.handleClassifyClick = this.handleClassifyClick.bind(this);
    this.handleBusinessClick = this.handleBusinessClick.bind(this);
    this.handleHidden = this.handleHidden.bind(this);
  }

  handleClassifyClick() {
    this.setState({classifyShow: true, businessShow: false});
  }

  handleBusinessClick() {
    this.setState({businessShow: true, classifyShow: false});
  }

  handleHidden() {
    this.setState({classifyShow: false, businessShow: false});
  }

  classifyItemClick(index) {
    this.setState({cCurrentIndex: index});
  }

  businessItemClick(index) {
    this.setState({bCurrentIndex: index});
  }
  render () {
    let {classifyShow, businessShow} = this.state;
    let mainHidden = 'hidden'
    let classifyHidden = 'hidden';
    let businessHidden = 'hidden';
    if (classifyShow) {
      classifyHidden = 'visible';
    } else {
      classifyHidden = 'hidden';
    }
    if (businessShow) {
      businessHidden = 'visible';
    } else {
      businessHidden = 'hidden';
    }
    if (classifyShow || businessShow) {
      mainHidden = 'visible';
    } else {
      mainHidden = 'hidden';
    }
    return (
      <div className="list-nav">
        <div className="header">
          <span className="text" onClick={this.handleClassifyClick}>全部分类<i></i></span>
          <span className="line"></span>
          <span className="text" onClick={this.handleBusinessClick}>全部商区<i></i></span>
        </div>
        <div className="select-list" style={{visibility: mainHidden}}>
          <div className="mask" onClick={this.handleHidden}></div>
          <div className="all-classify" style={{visibility: classifyHidden}}>
            <div className="left">
              <ul>
                <li><i className="i-all"></i>全部分类</li>
                <li
                  className={this.state.cCurrentIndex === 1 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 1)}>
                  <i className="i-foot"></i>美食</li>
                <li
                  className={this.state.cCurrentIndex === 2 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 2)}>
                  <i className="i-happy"></i>休闲娱乐</li>
                <li
                  className={this.state.cCurrentIndex === 3 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 3)}>
                  <i className="i-movie"></i>电影</li>
                <li
                  className={this.state.cCurrentIndex === 4 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 4)}>
                  <i className="i-hotel"></i>酒店</li>
                <li
                  className={this.state.cCurrentIndex === 5 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 5)}>
                  <i className="i-beauty"></i>丽人</li>
                <li
                  className={this.state.cCurrentIndex === 6 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 6)}>
                  <i className="i-motion"></i>运动健身</li>
                <li
                  className={this.state.cCurrentIndex === 7 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 7)}>
                  <i className="i-life"></i>生活服务</li>
                <li
                  className={this.state.cCurrentIndex === 8 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 8)}>
                  <i className="i-shopping"></i>购物</li>
                <li
                  className={this.state.cCurrentIndex === 9 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 9)}>
                  <i className="i-marry"></i>结婚</li>
                <li
                  className={this.state.cCurrentIndex === 10 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 10)}>
                  <i className="i-parenting"></i>亲子</li>
                <li
                  className={this.state.cCurrentIndex === 11 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 11)}>
                  <i className="i-study"></i>学习培训</li>
                <li
                  className={this.state.cCurrentIndex === 12 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 12)}>
                  <i className="i-medical"></i>医疗</li>
                <li
                  className={this.state.cCurrentIndex === 13 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 13)}>
                  <i className="i-car"></i>爱车</li>
                <li
                  className={this.state.cCurrentIndex === 14 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 14)}>
                  <i className="i-pet"></i>宠物</li>
                <li
                  className={this.state.cCurrentIndex === 15 ? 'active' : ''}
                  onClick={this.classifyItemClick.bind(this, 15)}>
                  <i className="i-family"></i>家装</li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li><span>全部美食</span><span></span></li>
                <li><span>面包甜点</span><span>16573</span></li>
                <li><span>聚餐宴请</span><span>10235</span></li>
                <li><span>蛋糕</span><span>8826</span></li>
                <li><span>粤菜</span><span>8226</span></li>
                <li><span>火锅</span><span>6982</span></li>
                <li><span>间餐快餐</span><span>6323</span></li>
                <li><span>西餐</span><span>6005</span></li>
                <li><span>小吃</span><span>4932</span></li>
                <li><span>川菜</span><span>4832</span></li>
                <li><span>其它美食</span><span>3134</span></li>
                <li><span>日本料理</span><span>2560</span></li>
                <li><span>湘菜</span><span>2289</span></li>
                <li><span>烧烤/烤肉</span><span>2285</span></li>
                <li><span>咖啡厅</span><span>1631</span></li>
                <li><span>韩国料理</span><span>1121</span></li>
                <li><span>甜品</span><span>1002</span></li>
              </ul>
            </div>
          </div>
          <div className="business-type" style={{visibility: businessHidden}}>
            <div className="tab">
              <span className="active">商区</span>
              <span>地铁沿线</span>
            </div>
            <div className="cnt">
              <div className="left">
                <ul>
                  <li
                    className={this.state.bCurrentIndex === 1 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 1)}>热门商区</li>
                  <li
                    className={this.state.bCurrentIndex === 2 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 2)}>附近</li>
                  <li
                    className={this.state.bCurrentIndex === 3 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 3)}>天河区</li>
                  <li
                    className={this.state.bCurrentIndex === 4 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 4)}>越秀区</li>
                  <li
                    className={this.state.bCurrentIndex === 5 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 5)}>海珠区</li>
                  <li
                    className={this.state.bCurrentIndex === 6 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 6)}>白云区</li>
                  <li
                    className={this.state.bCurrentIndex === 7 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 7)}>番禺区</li>
                  <li
                    className={this.state.bCurrentIndex === 8 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 8)}>荔湾区</li>
                  <li
                    className={this.state.bCurrentIndex === 9 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 9)}>花都区</li>
                  <li
                    className={this.state.bCurrentIndex === 10 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 10)}>黄埔区</li>
                  <li
                    className={this.state.bCurrentIndex === 11 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 11)}>萝岗区</li>
                  <li
                    className={this.state.bCurrentIndex === 12 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 12)}>从化区</li>
                  <li
                    className={this.state.bCurrentIndex === 13 ? 'active' : ''}
                    onClick={this.businessItemClick.bind(this, 13)}>南沙区</li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li className="active"><span>全部商区</span><span></span></li>
                  <li><span>天河城/体育中心</span><span>8199</span></li>
                  <li><span>珠江新城</span><span>9730</span></li>
                  <li><span>北京路</span><span>4335</span></li>
                  <li><span>江南大道</span><span>4208</span></li>
                  <li><span>石碑/龙口</span><span>3736</span></li>
                  <li><span>天河北</span><span>4760</span></li>
                  <li><span>客村/赤岗</span><span>2469</span></li>
                  <li><span>中山二三路/东山口</span><span>5132</span></li>
                  <li><span>高德置地/花城汇</span><span>1916</span></li>
                  <li><span>环市东</span><span>3059</span></li>
                  <li><span>车陂/东圃</span><span>3891</span></li>
                  <li><span>工业大道</span><span>2296</span></li>
                  <li><span>中山七八路</span><span>4985</span></li>
                  <li><span>天河公园</span><span>3861</span></li>
                  <li><span>同和/京溪</span><span>2943</span></li>
                  <li><span>江南路</span><span>2568</span></li>
                  <li><span>滨江路</span><span>2336</span></li>
                  <li><span>芳村</span><span>3037</span></li>
                  <li><span>机场路</span><span>2277</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}