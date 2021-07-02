import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';

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
            <ul>{renderCategories(category.children)}</ul>
          )}
        </li>
      );
    }
    return myCategories;
  };

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

export default SideMenu;
