import React, { useState } from 'react';
import Dropdown from './Dropdown';

import './SideMenu.css';

const SideMenu = (props) => {
  const [sideMenu, setSideMenu] = useState(false);
  const renderTest = () => {
    return (
      <>
        <div className="back-overlay"></div>
        <div className="side-menu-container">
          <div className="sidemenu">
            <div className="menu-navigation">
              <ul className="menu-nav-tabs">
                <li>Menu</li>
                <li>Account</li>
                <div className="close_cont">
                  <img className="close_icon" src="images/close.png" alt="" />
                </div>
              </ul>
            </div>
            <div className="menu_option">
              <Dropdown />
            </div>
          </div>
        </div>
      </>
    );
  };

  return <div>{renderTest()}</div>;
};

export default SideMenu;
