import React from 'react';
import Header from '../Header/Header';
import MenuHeader from '../MenuHeader/MenuHeader';
import SideMenu from '../SideMenu/SideMenu';

const Layout = (props) => {
  return (
    <>
      <Header />
      <MenuHeader />
      <SideMenu />
      {props.children}
    </>
  );
};

export default Layout;
