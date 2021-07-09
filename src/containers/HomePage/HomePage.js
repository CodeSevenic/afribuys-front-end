import React from 'react';
import Layout from '../../components/Layout/Layout';
import { HeadProductList } from './HomeComponents';

const HomePage = (props) => {
  return (
    <Layout>
      <div>
        <div>
          <HeadProductList />
          {/* <HeadProductList
            menuList={[
              {
                label: 'Home & furniture',
                src: `https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100`,
              },
              {
                label: 'Home & furniture',
                src: `https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100`,
              },
              {
                label: 'Home & furniture',
                src: `/images/1_bedroom_flat_in_johannesburg_central.jpg`,
              },
              {
                label: 'Home & furniture',
                src: `https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100`,
              },
              {
                label: 'Home & furniture',
                src: `https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100`,
              },
            ]}
          /> */}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
