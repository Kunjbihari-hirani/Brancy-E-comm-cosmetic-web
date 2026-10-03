/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useCart } from '../../context/CartContext';

export function Order({ amount, data }) {
  const { deleteCart, cart, orderDone } = useCart();
  const navigate = useNavigate();
  const resetAll = () => {
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      deleteCart(element);
      orderDone(element);
    }
  };
  const FinalPrice = amount * 100;
  console.log(FinalPrice);
  useEffect(() => {
    const loadRazorpay = async () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const options = {
          key: 'rzp_test_fLrFVzyKssWB6p',
          amount: `${FinalPrice}`,
          currency: 'INR',
          description: 'Acme Corp',
          prefill: {
            email: 'Kunjbihari2311@gmail.com',
            contact: '+919409378990', // Make sure to keep it as a string
          },
          config: {
            display: {
              blocks: {
                utib: {
                  name: 'Pay using Axis Bank',
                  instruments: [
                    {
                      method: 'card',
                      issuers: ['UTIB'],
                    },
                    {
                      method: 'netbanking',
                      banks: ['UTIB'],
                    },
                  ],
                },
                other: {
                  name: 'Other Payment modes',
                  instruments: [
                    {
                      method: 'card',
                      issuers: ['ICIC'],
                    },
                    {
                      method: 'netbanking',
                    },
                  ],
                },
              },
              hide: [
                {
                  method: 'upi',
                },
              ],
              sequence: ['block.utib', 'block.other'],
              preferences: {
                show_default_blocks: false,
              },
            },
          },
          handler(response) {
            resetAll();

            navigate('/thankyou', {
              state: data,
              response: response.razorpay_payment_id,
            });
            window.location.reload();
            console.log(response);
          },
          modal: {
            ondismiss() {
              if (window.confirm('Are you sure, you want to close the form?')) {
                console.log('Checkout form closed by the user');
              } else {
                alert('Complete the Payment');
              }
            },
          },
        };

        const rzp1 = new window.Razorpay(options);
        document.getElementById('rzp-button1').onclick = function (e) {
          rzp1.open();
          e.preventDefault();
        };
      };
    };

    loadRazorpay();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <div className="grid grid-cols-1 gap-2 xsm:grid-cols-2">
      <button
        className="ml-2 mt-4 rounded-full bg-blue-500 px-10 py-2 text-white hover:bg-blue-900"
        id="rzp-button1"
      >
        Pay now
      </button>
    </div>
  );
}

function Checkout() {
  const { cart } = useCart();
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    const data = cart[i];
    sum += data.Quantity * data.price;
  }

  const Total = cart.reduce((p, c) => (p += c.Quantity * c.price), 0);

  const Taxes = Total * 0.18;
  const SubTotal = Total - Taxes;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [OrderPlace, setOrderPlace] = useState([]);
  const [isOrdered, setisOrdered] = useState(false);

  const dataProfile = JSON.parse(localStorage.getItem('user'));

  const onSubmit = data => {
    console.log(data);
    setisOrdered(true);
    setOrderPlace(data);
  };

  return (
    <section className="min-h-fit px-container pb-4 pt-24">
      <HashLink smooth to="/shop">
        &lt; Back to Shoping
      </HashLink>
      {/* <hr className="my-2 size-full h-2" /> */}
      <div class="my-3 h-1 w-full border-b border-black"></div>
      <div className="flex flex-col justify-between gap-5 pt-10 lg:flex-row">
        <div className="lg:w-[55%]">
          <p className="px-2 text-2xl font-medium">Details</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-2 xsm:grid-cols-2"
          >
            <Label htmlFor="fname">
              FirstName
              <span className="text-lg text-red-500">*</span>
              <Input
                {...register('fname', { required: true })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="text"
                name="fname"
                id="fname"
              />
              {errors.fname && (
                <span className="text-red-400">First Name is required</span>
              )}
            </Label>
            <Label htmlFor="lname">
              LastName<span className="text-lg text-red-500">*</span>
              <Input
                {...register('lname', { required: true })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="text"
                name="lname"
                id="lname"
              />
              {errors.lname && (
                <span className="text-red-400">Last Name is required</span>
              )}
            </Label>
            <Label htmlFor="email">
              Email<span className="text-lg text-red-500">*</span>
              <Input
                {...register('email', {
                  required: true,
                  pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{3,4}$/,
                })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="email"
                name="email"
                value={dataProfile?.user?.email}
                id="email"
              />
              {errors.email && (
                <span className="text-red-400">Email is required</span>
              )}
            </Label>
            <Label htmlFor="mobile">
              Mobile No<span className="text-lg text-red-500">*</span>
              <Input
                {...register('mobile', {
                  required: true,
                  pattern: /^([+]\d{2})?\d{10}$/,
                })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="tel"
                name="mobile"
                id="mobile"
              />
              {errors.mobile && (
                <span className="text-red-400">Mobile number is required</span>
              )}
            </Label>
            <Label htmlFor="postalcode">
              Postal Code<span className="text-lg text-red-500">*</span>
              <Input
                {...register('postalcode', {
                  required: true,
                  pattern: /^[0-9]{6}(?:-[0-9]{5})?$/,
                })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="text"
                name="postalcode"
                id="postalcode"
              />
              {errors.postalcode && (
                <span className="text-red-400">This field is required</span>
              )}
            </Label>
            <Label htmlFor="city">
              City<span className="text-lg text-red-500">*</span>
              <Input
                {...register('city', { required: true })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="tel"
                name="city"
                id="city"
              />
              {errors.city && (
                <span className="text-red-400">City is required</span>
              )}
            </Label>
            <Label className="xsm:col-span-2" htmlFor="address">
              Address<span className="text-lg text-red-500">*</span>
              <Input
                {...register('address', { required: true, minLength: 10 })}
                className="shadow-[0px_2px] shadow-[#ff6565] focus:outline-none"
                type="text"
                name="address"
                id="address"
              />
              {errors.address && (
                <span className="text-red-400">Address is required</span>
              )}
            </Label>
            <Button
              type="submit"
              className="ml-2 mt-4 rounded-full bg-[#ff6565] px-10 text-white hover:bg-[#9a3c3c]"
            >
              Place Order
            </Button>
          </form>
          {isOrdered && <Order amount={sum} data={OrderPlace} />}
        </div>
        <div className="pt-5 lg:w-[35%]">
          <p className="px-2 text-2xl font-medium">In Your Cart</p>
          <div class="my-3 h-1 w-full border-b border-black"></div>
          <div className="mb-2 flex justify-between">
            <p>Sub Total</p>
            <span className="">
              &#8377; {SubTotal.toLocaleString('en-IN')}.00
            </span>
          </div>
          <div className="mb-2 flex justify-between">
            <p>Shipping</p>
            <span className="">&#8377; 0.00</span>
          </div>
          <div className="mb-2 flex justify-between">
            <p>Taxes</p>
            <span className="">&#8377; {Taxes.toLocaleString('en-IN')}.00</span>
          </div>
          <div class="my-3 h-1 w-full border-b border-black"></div>
          <div className="mb-2 flex justify-between text-2xl font-bold">
            <p className="">Total</p>
            <span className="">&#8377; {Total.toLocaleString('en-IN')}.00</span>
          </div>
          <div class="my-3 h-1 w-full border-b border-black"></div>
          {cart.map(x => (
            <div className="flex items-center justify-between pb-3">
              <img
                className="aspect-square h-16 rounded-md border border-black"
                src={x.imageUrl}
                alt=""
              />
              <p className="flex-1 pl-2">{x.title}</p>
              <div className="flex flex-col items-end">
                <div className="text-sm">
                  {x.Quantity} x &#8377;{x.price.toLocaleString('en-IN')}.00
                </div>
                <div className="font-bold">
                  &#8377;{(x.price * x.Quantity).toLocaleString('en-IN')}.00
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Checkout;
