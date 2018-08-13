import React from 'react';
import  * as Components from './AsynComponent.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const routerConfig = (
  <Router>
    <Switch>
      <Route exact path="/" component={Components.Home}/>
      <Route path="/detail/:id" component={Components.Detail}/>
      <Route path="/cart" component={Components.Cart}/>
      <Route path="/login" component={Components.Login}/>
      <Route path="/nameLogin" component={Components.NameLogin}/>
      <Route path="/moreDiscount" component={Components.MoreDisCount}/>
      <Route path="/coupon" component={Components.Coupon}/>
      <Route path="/merchant" component={Components.Merchant}/>
      <Route path="/development" component={Components.Development}/>
      <Route component={Components.Home} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);

export default routerConfig;