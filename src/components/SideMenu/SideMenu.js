import React from 'react';
import { useState } from 'react';
import { IoIosAppstore, IoIosArrowForward, IoIosClock } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import './SideMenu.css';

const SideMenu = () => {
  const category = useSelector((state) => state.category);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.parentId ? (
            <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
            >
              {category.name}
            </a>
          ) : (
            <span>{category.name}</span>
          )}
          {category.children.length > 0 && (
            <ul className="supersubmenu">
              {renderCategories(category.children)}
            </ul>
          )}
        </li>
      );
    }
    return myCategories;
  };

  console.log(renderCategories(category.categories));

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
          <div className="menu_tab">
            <ul className="main-sub">
              <NavItem category="PRO" icon={<IoIosArrowForward />}>
                <DropdownMenu />
              </NavItem>
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

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item" onClick={() => setOpen(!open)}>
      <span>{props.category}</span>
      <a className="Arrow_Forward" href="#">
        {props?.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dyn_dropdown">
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem leftIcon={<IoIosClock />}>My Profile</DropdownItem>
          <DropdownItem leftIcon={<IoIosAppstore />}>Settings</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem leftIcon={<IoIosClock />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<IoIosAppstore />}>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
