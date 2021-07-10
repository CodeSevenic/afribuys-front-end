import axiosInstance from '../helpers/axios';
import { productConstants } from './constants';

export const getProductBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axiosInstance.get(`/products/${slug}`);
    if (res.status === 200) {
      dispatch({
        type: productConstants.GET_PRODUCTS_BY_SLUG,
        payload: res.data,
      });
    } else {
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
      const res = await axiosInstance.post(`product/getProducts`);
      if (res.status === 200) {
        const { products } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductPage = (payload) => {
  return async (dispatch) => {
    try {
      const { cid, type } = payload.params;
      const res = await axiosInstance.get(`/page/${cid}/${type}`);
      dispatch({ type: productConstants.GET_PRODUCTS_PAGE_REQUEST });

      if (res.status === 200) {
        const { page } = res.data;
        dispatch({
          type: productConstants.GET_PRODUCTS_PAGE_SUCCESS,
          payload: { page },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstants.GET_PRODUCTS_PAGE_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductDetailsById = (payload) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
    let res;
    try {
      const { productId } = payload.params;
      res = await axiosInstance.get(`/product/${productId}`);
      console.log(res);
      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
        payload: { productDetails: res.data.product },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
