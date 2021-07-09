import './HomeComponent.css';

export const HeadProductList = (props) => {
  return (
    <div>
      <div>
        {props.menuList && (
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
        )}
      </div>
    </div>
  );
};
