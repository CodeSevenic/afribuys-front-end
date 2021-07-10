import { useSelector } from 'react-redux';
import './HomeComponent.css';
import { IoIosArrowForward } from 'react-icons/io';
import { useEffect } from 'react';
import { getAllCategory } from './../../actions/categoryAction';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export const HeadProductList = (props) => {
  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <>
          {category && (
            <div className="menuCont" key={category.name}>
              {/* {category.children.length > 0 && (
                <input type="checkbox" name="" id={category.name} />
              )} */}

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
                    <div className="prodImgContainer">
                      <img
                        src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                        alt=""
                      />
                    </div>
                  )}
                  <label htmlFor={category.name} className="labelText">
                    {category.name}
                    {!category.parentId && (
                      <IoIosArrowForward className="arrowIcon" />
                    )}
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

export const HomeCarousel = (props) => {
  return (
    <div>
      <Carousel infiniteLoop={true} autoPlay={true} renderThumbs={() => {}}>
        {props.banners &&
          props.banners.map((banner, index) => (
            <Link key={index} style={{ display: 'block' }} to={banner.to}>
              <img src={banner.src} alt="Banner" />
            </Link>
          ))}
      </Carousel>
    </div>
  );
};

export const Swipe = (props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
