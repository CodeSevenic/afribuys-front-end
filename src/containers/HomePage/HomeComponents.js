import { useSelector } from 'react-redux';
import './HomeComponent.css';

export const HeadProductList = (props) => {
  const category = useSelector((state) => state.category);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <>
          {category && (
            <div className="menuCont" key={category.name}>
              {category.children.length > 0 && (
                <input type="checkbox" name="" id={category.name} />
              )}

              {category.parentId && !category.children.length > 0 ? (
                <a
                  className="labelText"
                  href={`/${category.slug}?cid=${category._id}&type=${category.type}`}
                >
                  {category.name}
                </a>
              ) : (
                <label htmlFor={category.name} className="listItemCont">
                  {!category.parentId && (
                    <img
                      className="prodImgContainer"
                      src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                      alt=""
                    />
                  )}
                  <label htmlFor={category.name} className="labelText">
                    {category.name}
                  </label>
                </label>
              )}
              {category.children.length > 0 && (
                <ul>
                  <li>{renderCategories(category.children)}</li>
                </ul>
              )}
            </div>
          )}
        </>
      );
    }
    return myCategories;
  };

  return (
    <div>
      <div className="headProductList">
        {renderCategories(category.categories)}
        {/* {props.menuList && (
          <ul className="headProductList">
            {props.menuList.map((item, index) => (
              <li key={index}>
                <div className="listItemCont">
                  <div className="prodImgContainer">
                    <img src={`${item.src}`} alt="" />
                  </div>
                  <p className="labelText">{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </div>
  );
};
