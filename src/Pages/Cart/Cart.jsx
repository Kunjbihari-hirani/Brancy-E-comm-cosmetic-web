import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import PlushIcon from '../../icons/plus-round-icon.svg';
import MinusIcon from '../../icons/minus-round-icon.svg';
import { useCart } from '../../context/CartContext';
import { useLogin } from '../../context/LoginContext';

function Cart() {
  const { cart, deleteCart, updateCart } = useCart();
  const { user } = useLogin();
  const navigate = useNavigate();

  const resetAll = () => {
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      deleteCart(element);
    }
  };

  const onCheckout = () => {
    console.log(user);
    if (!user) {
      navigate('/auth');
    } else {
      navigate('/checkout');
    }
  };

  const QntIncDecre = (increment, id) => {
    const data = cart.find(x => x.id === id);
    if (increment) {
      return updateCart({ ...data, Quantity: data.Quantity + 1 });
    }
    if (data.Quantity === 1) {
      return deleteCart(data);
    }
    return updateCart({ ...data, Quantity: data.Quantity - 1 });
  };
  return (
    <section className="min-h-96 pt-20" id="cart">
      <div className="mx-2 flex flex-col items-center gap-5 px-container">
        {cart?.length > 0 ? (
          <>
            <div className="my-2 flex w-full flex-col justify-between gap-5 md:flex-row">
              <p className="text-3xl font-bold">Shopping Cart</p>
              <div className="flex gap-3">
                <button
                  onClick={onCheckout}
                  className="w-52 flex-1 rounded-full bg-green-500 px-4 py-1 text-white hover:bg-green-700"
                  type="button"
                >
                  Procced to Buy
                </button>
                <button
                  onClick={resetAll}
                  className="w-52 flex-1 rounded-full bg-[#ff6565] px-4 py-1 text-white hover:bg-[#f58787]"
                  type="button"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {cart?.map(x => (
              <div
                className="mx-auto w-full items-center gap-2 rounded-lg bg-slate-500 p-5 font-bold text-black md:flex"
                key={x.id}
              >
                <div className="flex w-full justify-center md:w-fit">
                  <img
                    className="rounded-xl md:aspect-square  md:w-32"
                    src={x.imageUrl}
                    alt="img_logo"
                  />
                </div>

                <div className="flex-1 md:flex md:w-full">
                  <div className="mt-3 flex flex-1 flex-col gap-5 md:ml-5">
                    <p className="text-2xl text-white">{x.title}</p>
                    <div className="flex items-center justify-between gap-5 rounded-lg bg-slate-100 p-2 px-10 text-xl md:w-fit">
                      <button
                        aria-label="button"
                        className=""
                        type="button"
                        onClick={() => QntIncDecre(true, x.id)}
                      >
                        <PlushIcon height={25} className="fill-[#ff6565]" />
                      </button>
                      {x.Quantity}
                      <button
                        aria-label="button"
                        className=""
                        type="button"
                        onClick={() => QntIncDecre(false, x.id)}
                      >
                        <MinusIcon height={25} className="fill-[#ff6565]" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-5 md:ml-5">
                    <p className="text-xl text-white">
                      Price : &#8377; {x.price}.00
                    </p>
                    <button
                      className="rounded-lg bg-slate-200 p-3 hover:bg-[#ff6565] hover:text-white"
                      type="button"
                      onClick={() => deleteCart(x)}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <picture className="flex items-center justify-center">
              <img
                className="max-w-lg"
                src="https://ik.imagekit.io/b8au2iwe2/EmptyCart.jpg?updatedAt=1711033696887"
                alt=""
              />
            </picture>
            <div className="text-5xl font-bold">
              Woops... Your Cart is Empty
            </div>
            <HashLink
              className="py-5 text-2xl text-blue-500 underline"
              to="/shop"
            >
              Countinue Shoping
            </HashLink>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
