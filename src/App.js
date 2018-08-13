import React, { Component } from 'react';
import '@/assets/css/home.scss';
import '@/assets/css/login.scss';
import '@/assets/css/detail.scss';
import '@/assets/css/cart.scss';
import '@/assets/css/anim.scss';
import route from '@/router/routes';

class App extends Component {
  render() {
    return (
      <div>{route}</div>
    );
  }
}

export default App;
