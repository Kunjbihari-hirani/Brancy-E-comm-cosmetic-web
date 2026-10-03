import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { v4 as uuidv4 } from 'uuid';

function ThankyouOrder() {
  const { state, response } = useLocation();
  const oederID = uuidv4();
  console.log(state);
  console.log(response);
  return (
    <section className="h-fit px-container pt-28">
      <HashLink smooth to="/shop">
        &lt; Back to Shoping
      </HashLink>
      {/* <hr className="my-2 size-full h-2" /> */}
      <div className="my-3 h-1 w-full border-b border-black" />
      <div className="py-5 pb-10 text-xl font-bold">
        Your Order ID is : {oederID}
      </div>
      <div className="grid grid-cols-1 gap-2 xsm:grid-cols-2 lg:grid-cols-3">
        <div className="flex w-max flex-1 flex-col">
          <p className="text-medium txt-medium mb-1 font-sans font-bold">
            Shipping Address
          </p>
          <p className="text-medium font-sans font-normal">
            {state.fname} {state.lname}
          </p>
          <p className="text-medium font-sans font-normal">{state.address}</p>
          <p className=" text-medium font-sans font-normal">
            {state.postalcode}, {state.city}
          </p>
          <p className="text-medium font-sans font-normal">IN</p>
        </div>
        <div className="flex w-max flex-1 flex-col">
          <p className="text-medium mb-1 font-sans font-bold">Contact</p>
          <p className="text-medium font-sans font-normal">{state.mobile}</p>
          <p className="text-medium font-sans font-normal">{state.email}</p>
        </div>
        <div className="flex w-max flex-1 flex-col">
          <p className="text-medium mb-1 font-sans font-bold">
            Billing Address
          </p>
          <p className="text-medium font-sans font-normal">
            Billing- and delivery address are the same.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <img
          className="h-80"
          src="https://marketplace.canva.com/EAFXYRRxavk/1/0/1600w/canva-white-minimalist-simple-thank-you-card-l5R96oHsDo8.jpg"
          alt="thank you for order"
        />
      </div>
    </section>
  );
}

export default ThankyouOrder;
