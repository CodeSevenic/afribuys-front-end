import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuHeader from '../MenuHeader/MenuHeader';

const Layout = (props) => {
  return (
    <>
      <Header />
      {!props.disableSubHeader && <MenuHeader />}
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
