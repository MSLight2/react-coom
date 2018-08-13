import React from 'react';
import Loadable from 'react-loadable';
import MyLoading from '@/components/loading/Loading';

const Loading = (props) => {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <MyLoading/>;
  }
}

export const Home = Loadable({
  loader: () => import('@/views/home/Home'),
  loading: Loading
});
export const Detail = Loadable({
  loader: () => import('@/views/detail/Detail'),
  loading: Loading
});
export const Cart = Loadable({
  loader: () => import('@/views/cart/Cart'),
  loading: Loading
});
export const Login = Loadable({
  loader: () => import('@/views/login/Login'),
  loading: Loading
});
export const NameLogin = Loadable({
  loader: () => import('@/views/login/NameLogin'),
  loading: Loading
});
export const Coupon = Loadable({
  loader: () => import('@/views/cart/child/Coupon'),
  loading: Loading
});
export const MoreDisCount = Loadable({
  loader: () => import('@/views/moreDiscount/MoreDiscount'),
  loading: Loading
});
export const Merchant = Loadable({
  loader: () => import('@/views/detail/merchant/Merchant'),
  loading: Loading
});
export const Development = Loadable({
  loader: () => import('@/views/development/Development'),
  loading: Loading
});
