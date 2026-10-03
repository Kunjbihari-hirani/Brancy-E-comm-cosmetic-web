/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [Products, setProducts] = useState([]);

  const FetchProduct = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:3000/Products');
      const json = await res.json();
      setProducts(json);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    FetchProduct();
  }, []);

  const contextValue = useMemo(
    () => ({
      Products,
    }),
    [Products],
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
