import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiConstants } from '../../reducers/UI';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';

import './SideMenu.css';

const SideMenu = (props) => {
  // const [closeSideMenu, setCloseSideMenu] = useState(false);
  const dispatch = useDispatch();
  const closeSideMenu = useSelector((state) => state.ui.closeSideMenu);
  console.log(closeSideMenu);
  const renderTest = () => {
    return (
      <>
        <div
          onClick={() => dispatch({ type: uiConstants.SIDE_MENU_CLOSE })}
          className={closeSideMenu ? 'back-overlay' : 'back-overlay active'}
        ></div>
        <div className="side-menu-container">
          <div className={closeSideMenu ? `sidemenu` : 'sidemenu active'}>
            <div className="menu-navigation">
              <ul className="menu-nav-tabs">
                <li>
                  <>Menu</>
                </li>
                <li>
                  <>Account</>
                </li>
                <div
                  className="close_cont"
                  onClick={() =>
                    dispatch({ type: uiConstants.SIDE_MENU_CLOSE })
                  }
                >
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
