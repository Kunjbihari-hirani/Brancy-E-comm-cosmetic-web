/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const dataProfile = JSON.parse(localStorage.getItem('user'));

  const onSubmit = data => {
    console.log(data);
    alert('Thank you for Contacting');
    navigate('/');
  };
  return (
    <section className="min-h-fit px-container pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-2">
          <img
            className="overflow-hidden rounded-2xl"
            src="https://htmldemo.net/brancy/brancy/assets/images/photos/contact.webp"
            alt=""
          />
        </div>
        <div>
          <p className="pt-5 text-center text-4xl font-bold underline">
            Get In Touch
          </p>
          <form
            className="space-y-6 pt-5 md:px-16"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name:
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={dataProfile?.user?.name}
                  {...register('name', { required: true, minLength: 3 })}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <p className="text-red-400">Please Enter Valid Name</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={dataProfile?.user?.email}
                  {...register('email', {
                    required: true,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{3,4}$/,
                  })}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-400">Please Enter Valid Email</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message:
              </label>
              <div className="mt-2">
                <input
                  id="message"
                  name="message"
                  type="text"
                  {...register('message', {
                    required: true,
                    minLength: 5,
                  })}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.message && (
                  <p className="text-red-400">Please Enter Message</p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get in Touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
