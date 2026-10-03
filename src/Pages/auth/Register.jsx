/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import { HashLink } from 'react-router-hash-link';
import { useLogin } from '../../context/LoginContext';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { register: regist } = useLogin();

  const onSubmit = data => {
    const { cpassword, ...rest } = data;
    regist(rest);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              {...register('name', {
                required: true,
                pattern: /^[A-Za-z][A-Za-z0-9_]{2,29}$/,
              })}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.name && (
              <p className="text-red-400">Please Enter Valid Name at least 3 character</p>
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
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              {...register('password', {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              })}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.password && (
              <p className="text-red-400">Please Enter Strong Password</p>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="cpassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="cpassword"
              name="cpassword"
              type="password"
              autoComplete="new-password"
              {...register('cpassword', {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              })}
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.cpassword && (
              <p className="text-red-400">
                Please Enter Confirm Strong Password
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>
      <p className="pt-5">
        Already Registered ?{' '}
        <HashLink to="/auth" className="font-bold text-indigo-600">
          Login
        </HashLink>
      </p>
    </>
  );
}

export default Register;
