import { useSelector } from 'react-redux';
import './HomeComponent.css';
import { IoIosArrowForward, IoMdCart } from 'react-icons/io';
import { useEffect } from 'react';
import { getAllCategory } from './../../actions/categoryAction';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import { getProducts } from '../../actions/productAction';
import { generatePublicUrl } from '../../urlConfig';
import Rating from './../../components/UI/Rating';
import Price from './../../components/UI/Price';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

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

export const ProductSpace = (props) => {
  const all_products = useSelector((state) => state.product.all_products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={'auto'}
      navigation
      centeredSlides={true}
      autoplay={{ delay: 4000, disableOnInteraction: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {all_products.map((product, index) => (
        <SwiperSlide key={index}>
          <div>
            <Link
              to={`/${product.slug}/${product._id}/p`}
              className="productCont"
              key={product._id}
            >
              <div className="productImgContainer">
                <img
                  src={generatePublicUrl(product.productPictures[0].img)}
                  alt="Product"
                />
              </div>
              <div className="productInfo">
                <div style={{ margin: '10px 0' }}>{product.name}</div>
                <div>
                  <Rating value="4.3" />
                  &nbsp;&nbsp;
                  <span
                    style={{
                      color: '#777',
                      fontWeight: '500',
                      fontSize: '12px',
                    }}
                  >
                    (3353)
                  </span>
                </div>
                <Price value={product.price} />
              </div>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
