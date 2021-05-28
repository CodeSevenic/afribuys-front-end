import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions/actionsIndex';
import getParams from '../../../utils/getParams';
import './ProductPage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { generatePublicUrl } from '../../../urlConfig';

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;

  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };

    dispatch(getProductPage(payload));
  }, []);

  return (
    <div className="page-content">
      <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => (
            <a
              key={index}
              style={{ display: 'block' }}
              href={banner.navigateTo}
            >
              <img src={generatePublicUrl(banner.img)} alt="Banner" />
            </a>
          ))}
      </Carousel>
      <div className="page-content-cards">
        {page.products &&
          page.products.map((product, index) => (
            <div className="page-card" key={index}>
              <img
                className="page-product-img"
                src={generatePublicUrl(product.img)}
                alt="Product"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
