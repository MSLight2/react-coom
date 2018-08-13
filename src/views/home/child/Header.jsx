import React, { Component } from 'react';

export default class HomeHeader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      placeholder: '请输入商户名、地点'
    }
  }

  render () {
    return (
      <header className="toolbar">
        <section className="toolbar-top">
          <span>{ this.props.area }<i className="toolbar-top-icon"></i></span>
          <div className="tb-input">
            <span className="tb-input-icon"></span>
            <div className="tb-input-input" onClick={ this.props.clickSearch }>
              <span className="input-placeholder">{ this.state.placeholder }</span>
            </div>
          </div>
          <i className="tb-user-icon" onClick={ this.props.entoUserCenter }></i>
        </section>
      </header>
    );
  }
}