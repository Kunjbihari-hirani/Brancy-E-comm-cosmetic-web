/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { TiStarFullOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import ExpandIcon from '../../icons/Expand-Icon.svg';
import HeartIcon from '../../icons/Heart-Icon.svg';
import { useCart } from '../../context/CartContext';

function TopSalesCards({ name, title, imageUrl, price, item }) {
  const [addtocart, setAddtocart] = useState('Add To Cart');

  const handleSubmit = () => {
    setAddtocart('Item Added');
    setTimeout(() => {
      setAddtocart('Add To Cart');
    }, 2000);
  };
  const { cart, addCart, updateCart } = useCart();
  const onAddtoCart = item => {
    const data = cart.find(x => x.id === item.id);
    handleSubmit();
    if (data) {
      return updateCart({ ...data, Quantity: data.Quantity + 1 });
    }
    return addCart({ ...item, Quantity: 1 });
  };
  // console.log(cart);

  return (
    <div className="topCard relative w-full">
      <div className="relative flex overflow-hidden rounded-xl">
        <img
          className=" flex-grow rounded-xl"
          src={imageUrl}
          title={title}
          alt={title}
        />
        <div className="addcart_div">
          <form
            onSubmit={e => {
              e.preventDefault();
              return onAddtoCart(item);
            }}
            className="flex w-full items-center gap-5 px-10 lg:px-7"
          >
            <Link to={`/shop/${item.id}`} title={title} className="buttonCarts">
              <ExpandIcon />
            </Link>
            <button
              type="submit"
              className="flex h-10 w-full cursor-pointer items-center justify-center rounded-full bg-white px-2 py-1 text-sm ring-2 ring-red-400 xsm:px-0 xsm:py-0 xsm:text-[100%]"
            >
              {addtocart}
            </button>
            <div className="buttonCarts">
              <HeartIcon />
            </div>
          </form>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-1 sm:gap-3">
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="flex">
            <TiStarFullOutline size={30} color="#ff6565" />
            <TiStarFullOutline size={30} color="#ff6565" />
            <TiStarFullOutline size={30} color="#ff6565" />
            <TiStarFullOutline size={30} color="#ff6565" />
            <CiStar size={30} color="#ff6565" />
          </div>
          <div className="pt-2 text-sm italic text-slate-700 sm:pt-0">
            150 reviews
          </div>
        </div>
        <h3 className="cursor-pointer hover:text-[#ff6565] xsm:text-2xl sm:mt-2">
          {name}
        </h3>
        <div className="">
          <span className="font-medium xsm:text-2xl">
            &#8377; {price.toLocaleString('en-IN')}.00
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopSalesCards;
