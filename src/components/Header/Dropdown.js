import React, { useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';

import './Dropdown.css';

const Dropdown = () => {
  const category = useSelector((state) => state.category);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <>
          {category && (
            <div className="item" key={category.name}>
              {category.children.length > 0 && (
                <input type="checkbox" name="" id={category.name} />
              )}

              {category.parentId && !category.children.length > 0 ? (
                <a
                  href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
                >
                  {category.name}
                </a>
              ) : (
                <label htmlFor={category.name} className="main-select">
                  <img className="arrow" src="images/arrow-down-b.png" alt="" />{' '}
                  <label htmlFor={category.name}>{category.name}</label>
                </label>
              )}
              <ul>
                <li>
                  {category.children.length > 0 &&
                    renderCategories(category.children)}
                </li>
              </ul>
            </div>
          )}
        </>
      );
    }
    return myCategories;
  };
  return renderCategories(category.categories);
};

export default Dropdown;
