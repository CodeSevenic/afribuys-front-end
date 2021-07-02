import React from 'react';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';

import './SideMenu.css';

const SideMenu = () => {
  const category = useSelector((state) => state.category);
  const [open, setOpen] = useState(false);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name} onClick={() => setOpen(!open)}>
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

  return (
    <div>
      <div className="back-overlay"></div>
      {renderProductCat()}
    </div>
  );
};

export default SideMenu;
