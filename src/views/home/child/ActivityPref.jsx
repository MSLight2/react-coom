import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ActivityPref extends Component {
  render () {
    return (
      <div>
        {/* 打折优惠 */}
				<section className="d-headline2">
					<div className="item">
						<Link to="/development">
							<p className="title">充电狂欢节</p>
							<p className="sub">送无人机</p>
							<img className="pic" src={require('@/assets/img/jd.png')} alt=""/>
						</Link>
					</div>
					<div className="item">
						<Link to="/development">
							<p className="title">美食好店节</p>
							<p className="sub">5折享用</p>
							<img className="pic" src={require('@/assets/img/5per.png')} alt=""/>
						</Link>
					</div>
				</section>
				{/* 送礼、红包 */}
				<section className="d-headline2">
					<div className="item send">
						<Link to="/development">
							<p className="title">豪礼天天送</p>
							<p className="sub">人人有奖领</p>
							<img className="pic" src={require('@/assets/img/pisa.png')} alt=""/>
						</Link>
					</div>
					<div className="item send">
						<Link to="/development">
							<p className="title">1212红包</p>
							<p className="sub">0门槛限时抢</p>
							<img className="pic" src={require('@/assets/img/hongbao.png')} alt=""/>
						</Link>
					</div>
				</section>
      </div>
    );
  }
}