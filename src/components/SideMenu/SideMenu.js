import React from 'react';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { DropdownMenu } from './SideMenuComponent';
import { CSSTransition } from 'react-transition-group';
import Dropdown from './Dropdown';

import './SideMenu.css';
import { useEffect } from 'react';

const SideMenu = (props) => {
  const category = useSelector((state) => state.category);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <ul className="submenu">
          <li key={category.name}>
            {category.parentId ? (
              <a
                className="super-sub"
                href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
              >
                {category.name}
              </a>
            ) : (
              <div id="main-cat">
                <input type="checkbox" name="" id="A" />
                <label htmlFor="A">
                  {category.name}{' '}
                  <IoIosArrowForward className="Arrow_Forward" />
                </label>
              </div>
            )}
            {category.children.length > 0 &&
              renderCategories(category.children)}
          </li>
        </ul>
      );
    }
    return myCategories;
  };

  const renderTest = () => {
    return (
      <>
        <div className="sidemenu">
          <div className="menu-navigation">
            <ul className="menu-nav-tabs">
              <li>Menu</li>
              <li>Account</li>
            </ul>
          </div>
          <div className="menu_option">
            <Dropdown />
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="back-overlay"></div>
      {renderTest()}
    </div>
  );
};

export default SideMenu;
