import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuHeader from '../MenuHeader/MenuHeader';
import './Layout.css';

const Layout = (props) => {
  return (
    <>
      <Header />
      {!props.disableSubHeader && <MenuHeader />}
      <main className="mainView">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
