import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../context/LoginContext';

function AuthLayout() {
  const { user } = useLogin();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-fit flex-1 flex-col justify-center px-6 py-12 pt-16 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
