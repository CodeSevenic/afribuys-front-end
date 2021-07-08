export const HeadProductList = (props) => {
  return (
    <div>
      <div>
        {props.menuList && (
          <ul>
            {props.menuList.map((item, index) => (
              <li key={index}>
                <div>
                  <a
                    href={`${item?.href}`}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick && item.onClick();
                      }
                    }}
                  >
                    <div>
                      <img src={`${item.src}`} alt="" />
                    </div>
                    <p>{item.label}</p>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
