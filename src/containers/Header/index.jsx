import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '../../icons/Menu.svg';
import BascketIcon from '../../icons/Shoping_basket.svg';
import LockIcon from '../../icons/private-lock-icon.svg';
import TickIcon from '../../icons/green-checkmark-icon.svg';
import ProfileIcon from '../../icons/Profile.svg';
import CloseIcon from '../../icons/close-icon.svg';
import { useCart } from '../../context/CartContext';
import { useLogin } from '../../context/LoginContext';

function Header() {
  const [IsNavopen, setIsNavopen] = useState(false);
  const { user } = useLogin();
  const [IsProfileOpen, setIsProfileOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  const dataProfile = JSON.parse(localStorage.getItem('user'));
  const { cart } = useCart();

  return (
    <header
      id="header"
      className="fixed z-50  flex w-full justify-between gap-10 bg-white px-container py-2"
    >
      <HashLink smooth to="/#home" title="home" aria-label="brancy">
        <img
          title="Brancy logo"
          className="h-12"
          src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
          alt="Brancy logo"
        />
      </HashLink>
      <nav
        className={`absolute left-0 right-0 top-0 mt-14 flex-1 items-center justify-end bg-white md:static md:mt-0 md:flex ${!IsNavopen ? 'hidden' : 'block'}`}
      >
        <ul className="flex flex-col items-center gap-3 py-2 font-medium md:flex-row md:gap-7 md:py-0">
          <li>
            <HashLink
              smooth
              title="home"
              to="/#home"
              onClick={() => setIsNavopen(!IsNavopen)}
              className="nav_link"
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              title="about"
              to="/about"
              onClick={() => setIsNavopen(!IsNavopen)}
              className="nav_link"
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              title="shop"
              to="/shop"
              onClick={() => setIsNavopen(!IsNavopen)}
              className="nav_link"
            >
              Shop
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              title="contact"
              to="/contact"
              onClick={() => setIsNavopen(!IsNavopen)}
              className="nav_link"
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-5 md:px-8">
        <HashLink
          smooth
          to="/cart"
          title="cart"
          onClick={() => setIsNavopen(false)}
          className="nav_link relative"
        >
          <BascketIcon className="cursor-pointer hover:fill-[#ff6565]" />
          <div className="absolute -right-2 -top-1 flex aspect-square w-6 items-center justify-center rounded-full bg-[#ff6565] font-bold text-white">
            {cart.length}
          </div>
        </HashLink>
        <div className="cursor-pointer rounded-full p-1 ring-2 ring-black hover:fill-[#ff6565] hover:ring-[#ff6565]">
          <button
            title="profile_btn"
            onClick={() => setIsProfileOpen(!IsProfileOpen)}
            type="button"
            className="profile_hover relative flex gap-2"
          >
            {user ? (
              <>
                {' '}
                <div className="flex items-center justify-center">
                  <ProfileIcon />
                  <TickIcon className="w-5" />
                </div>
                {IsProfileOpen && (
                  <form className="user_profile absolute right-0 top-12 flex w-60 flex-col items-start gap-2 overflow-hidden rounded-md bg-slate-100 p-2 sm:w-fit md:right-[10%]">
                    <div className="flex w-full justify-end">
                      <CloseIcon
                        onClick={() => setIsProfileOpen(false)}
                        className="hover:fill-black"
                      />
                    </div>
                    <div className="flex gap-2">
                      <span>User:</span> <span>{dataProfile?.user?.name}</span>
                    </div>
                    <div className="flex gap-2">
                      <span>Email:</span>{' '}
                      <span>{dataProfile?.user?.email}</span>
                    </div>
                    <button
                      onClick={() => logout()}
                      type="submit"
                      className="w-full rounded-lg bg-red-500 px-2 py-1 text-white hover:bg-red-700"
                    >
                      Log Out
                    </button>
                  </form>
                )}
              </>
            ) : (
              <HashLink
                smooth
                to="/auth"
                title="auth"
                className="flex items-center justify-center"
              >
                <ProfileIcon />
                <LockIcon className="w-5 fill-green-500" />
              </HashLink>
            )}
          </button>
        </div>
        <MenuIcon
          onClick={() => setIsNavopen(!IsNavopen)}
          className={`flex md:hidden ${IsNavopen ? 'hidden' : 'block'}`}
        />
        <CloseIcon
          onClick={() => setIsNavopen(!IsNavopen)}
          className={`flex md:hidden ${IsNavopen ? 'block' : 'hidden'}`}
        />
      </div>
    </header>
  );
}

export default Header;
