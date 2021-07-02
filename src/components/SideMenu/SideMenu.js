import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import './SideMenu.css';

const SideMenu = () => {
  const renderMobileMenu = () => {
    return (
      <>
        <div className="back-overlay"></div>
        <div className="sidemenu">
          <div className="menu-navigation">
            <ul className="menu-nav-tabs">
              <li>Menu</li>
              <li>Account</li>
            </ul>
          </div>
          <div className="menu_tab">
            <ul>
              <li className="nav_product">
                <span>Products</span>
                <IoIosArrowForward className="Arrow_Forward" />
              </li>
              <li className="">
                <span>Brands</span>
              </li>
              <li className="nav_specials">
                <span>Special</span>
                <IoIosArrowForward className="Arrow_Forward" />
              </li>
              <li className="">
                <span>Promotion</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  return <div></div>;
};

export default SideMenu;
