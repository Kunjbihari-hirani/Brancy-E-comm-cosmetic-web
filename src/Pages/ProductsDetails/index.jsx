import React, { useContext, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { TiStarFullOutline } from 'react-icons/ti';
import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ProductContext from '../../context/ProductContext';
import { useCart } from '../../context/CartContext';

function ProducDetails() {
  const { id } = useParams();

  const { Products } = useContext(ProductContext);
  const { cart, addCart, updateCart } = useCart();

  const [addtocart, setAddtocart] = useState('Add To Cart');

  const handleSubmit = () => {
    setAddtocart('Item Added');
    setTimeout(() => {
      setAddtocart('Add To Cart');
    }, 2000);
  };

  const items = Products.find(x => x.id === id);
  const onAddtoCart = () => {
    handleSubmit();
    const data = cart.find(x => x.id === id);
    if (data) {
      return updateCart({ ...data, Quantity: data.Quantity + 1 });
    }
    return addCart({ ...items, Quantity: 1 });
  };
  return (
    <div className="p-16 px-container ">
      <div className="grid-cols-2 gap-10 rounded-2xl bg-rose-50 p-5 md:grid md:h-[600px]">
        <img
          className="mx-auto rounded-xl xsm:h-[550px]"
          src={items.imageUrl}
          alt="img_logo"
        />
        <div className="flex  flex-1 flex-col justify-evenly lg:mr-16">
          <div>
            <div className="text-3xl font-bold">{items.title}</div>
            <p className="mt-3 line-clamp-3 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              pariatur cupiditate nulla numquam aliquid, nostrum ullam, harum
              praesentium odit quis esse! Animi aspernatur, debitis nihil vitae
              maxime ut a perferendis!
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold">
              &#8377; {items.price.toLocaleString('en-IN')}.00
            </div>
            <div className="my-7 flex">
              <TiStarFullOutline size={30} color="#ff6565" />
              <TiStarFullOutline size={30} color="#ff6565" />
              <TiStarFullOutline size={30} color="#ff6565" />
              <TiStarFullOutline size={30} color="#ff6565" />
              <CiStar size={30} color="#ff6565" />
            </div>
            <div className="flex gap-12">
              <button
                type="button"
                onClick={e => {
                  e.preventDefault();
                  onAddtoCart();
                }}
                className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-full bg-white px-2 py-1 text-sm ring-2 ring-red-400 xsm:px-0 xsm:py-0 xsm:text-[100%]"
              >
                {addtocart}
              </button>
              <HashLink
                className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-full bg-white px-2 py-1 text-sm ring-2 ring-red-400 xsm:px-0 xsm:py-0 xsm:text-[100%]"
                to="/shop"
              >
                Countinue Shoping
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProducDetails;
