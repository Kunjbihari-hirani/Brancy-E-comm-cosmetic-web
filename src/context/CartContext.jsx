import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import {
  ADD_CART,
  DELETE_CART,
  FAIL,
  LOAD_CART,
  ORDER_CART,
  REQUEST,
  SUCCESS,
  UPDATE_CART,
} from '../constants/actions';
import crudReducer from '../reducers/crudReducer';
import loadingReducer from '../reducers/loadingReducer';
import errorReducer from '../reducers/errorReducer';

const CartContext = createContext();

const cartInitialState = {
  cart: [],
  loading: [],
  error: [],
};

const cartReducer = (
  state,
  { type, payload: { cartPayload, loadingPayload, errorPayload } },
) => ({
  cart: crudReducer(state.cart, { type, payload: cartPayload }),
  loading: loadingReducer(state.loading, { type, payload: loadingPayload }),
  error: errorReducer(state.error, { type, payload: errorPayload }),
});

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);

  const loadCart = useCallback(async () => {
    try {
      dispatch({ type: `${LOAD_CART}_${REQUEST}`, payload: {} });
      const url = 'http://localhost:3000/CartItems';
      const res = await fetch(url);
      const json = await res.json();
      dispatch({
        type: `${LOAD_CART}_${SUCCESS}`,
        payload: {
          cartPayload: json,
        },
      });
    } catch (error) {
      dispatch({
        type: `${LOAD_CART}_${FAIL}`,
        payload: {
          errorPayload: error,
        },
      });
    }
  }, []);

  const addCart = useCallback(async item => {
    try {
      dispatch({ type: `${ADD_CART}_${REQUEST}`, payload: {} });
      const res = await fetch('http://localhost:3000/CartItems', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      dispatch({
        type: `${ADD_CART}_${SUCCESS}`,
        payload: { cartPayload: json },
      });
      console.log(json);
    } catch (error) {
      dispatch({
        type: `${ADD_CART}_${FAIL}`,
        payload: { errorPayload: error },
      });
    }
  }, []);

  const updateCart = useCallback(async item => {
    try {
      dispatch({
        type: `${UPDATE_CART}_${REQUEST}`,
        payload: { loadingPayload: item },
      });
      const res = await fetch(`http://localhost:3000/CartItems/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      dispatch({
        type: `${UPDATE_CART}_${SUCCESS}`,
        payload: { cartPayload: json },
      });
    } catch (error) {
      dispatch({
        type: `${UPDATE_CART}_${FAIL}`,
        payload: { errorPayload: item },
      });
    }
  }, []);

  const deleteCart = useCallback(async item => {
    try {
      dispatch({
        type: `${DELETE_CART}_${REQUEST}`,
        payload: { loadingPayload: item },
      });
      await fetch(`http://localhost:3000/CartItems/${item.id}`, {
        method: 'DELETE',
        body: JSON.stringify(item),
      });
      dispatch({
        type: `${DELETE_CART}_${SUCCESS}`,
        payload: { cartPayload: item },
      });
    } catch (error) {
      dispatch({
        type: `${DELETE_CART}_${FAIL}`,
        payload: { errorPayload: item },
      });
    }
  }, []);

  const orderDone = useCallback(async item => {
    try {
      dispatch({ type: `${ORDER_CART}_${REQUEST}`, payload: {} });
      const res = await fetch(' http://localhost:3000/orders', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      dispatch({
        type: `${ORDER_CART}_${SUCCESS}`,
        payload: { cartPayload: json },
      });
      console.log(json);
    } catch (error) {
      dispatch({
        type: `${ORDER_CART}_${FAIL}`,
        payload: { errorPayload: error },
      });
    }
  }, []);

  useEffect(() => {
    loadCart();
  }, []);

  const value = useMemo(
    () => ({
      ...cartState,
      loadCart,
      addCart,
      updateCart,
      deleteCart,
      orderDone,
    }),
    [cartState, loadCart, addCart, updateCart, deleteCart, orderDone],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
