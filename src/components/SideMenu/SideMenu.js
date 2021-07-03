import React from 'react';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { DropdownMenu } from './SideMenuComponent';
import { CSSTransition } from 'react-transition-group';

import './SideMenu.css';

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
        <>
          <CSSTransition
            in={activeMenu === 'main'}
            unmountOnExit
            timeout={500}
            classNames="menu-primary"
            onEnter={calcHeight}
          >
            <li
              onClick={() => setActiveMenu('main' ? 'sub-main' : 'main')}
              key={category.name}
            >
              {category.parentId ? (
                <a
                  href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
                >
                  {category.name}
                </a>
              ) : (
                <span>{category.name}</span>
              )}
              {category.children.length > 0 &&
                renderCategories(category.children)}
            </li>
          </CSSTransition>
        </>
      );
    }
    return myCategories;
  };

  const renderProductCat = () => {
    return (
      <>
        <div className="sidemenu">
          <div className="menu-navigation">
            <ul className="menu-nav-tabs">
              <li>Menu</li>
              <li>Account</li>
            </ul>
          </div>
          <div className="menu_tab">
            <ul className="main-sub">
              <li className="nav_product">
                <span>Products</span>
                <IoIosArrowForward className="Arrow_Forward" />
                <ul className="submenu">
                  {category.categories.length > 0
                    ? renderCategories(category.categories)
                    : null}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
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
            {!open && (
              <ul className="main-sub">
                <li className="nav-item" onClick={() => setActiveMenu('main')}>
                  <span>Products</span>
                  <IoIosArrowForward className="Arrow_Forward" />
                </li>
              </ul>
            )}
            <ul className="submenu">
              {category.categories.length > 0
                ? renderCategories(category.categories)
                : null}
            </ul>
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
