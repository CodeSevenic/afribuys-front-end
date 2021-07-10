import React from 'react';
import Layout from '../../components/Layout/Layout';
import {
  HeadProductList,
  HomeCarousel,
  Swipe,
  ProductSpace,
} from './HomeComponents';

const HomePage = (props) => {
  return (
    <Layout disableSubHeader>
      <div>
        <div>
          <HeadProductList />
          <HomeCarousel
            banners={[
              {
                src: 'https://res.cloudinary.com/sevenic-technologies/image/upload/v1625912029/carousel-pictures/IC54763_HP_PRINTER_web_banner_1__yy35d2.jpg',
                to: '',
              },
              {
                src: 'https://res.cloudinary.com/sevenic-technologies/image/upload/v1625912029/carousel-pictures/IC52725_Desktop_Web_banner_1240_2_d8cjwg.jpg',
                to: '',
              },
              {
                src: 'https://res.cloudinary.com/sevenic-technologies/image/upload/v1625912029/carousel-pictures/IC55199_-_Huawei_Launch_Web_bann_povjha.jpg',
                to: '',
              },
              {
                src: 'https://res.cloudinary.com/sevenic-technologies/image/upload/v1625912029/carousel-pictures/IC66125_Desktop_Web_banner_1240_lcyoqk.jpg',
                to: '',
              },
            ]}
          />
          <ProductSpace />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
