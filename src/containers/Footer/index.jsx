import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PinterestIcon from '../../icons/pinterest-icon.svg';
import TwitterIcon from '../../icons/twitter-icon.svg';
import FacebookIcon from '../../icons/facebook-round-icon.svg';

function Footer() {
  return (
    <section
      id="footer"
      className="flex min-h-fit flex-col justify-between bg-[#fafafa]"
    >
      <div className="mx-auto px-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="footer_box">
            <HashLink smooth to="/#home" title="home" aria-label="Logo_Brancy">
              <img
                title="Brancy Logo"
                src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
                alt="Brancy logo"
              />
            </HashLink>
            <p className="pr-3 pt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>
          <div className="footer_box">
            <h3 className="pb-5 text-xl font-bold">Information</h3>
            <div className="grid grid-cols-3 gap-5">
              <HashLink
                smooth
                to="/#blogs"
                title="blogs"
                className="footer_logo"
              >
                Blog
              </HashLink>
              <HashLink to="/about" title="about" className="footer_logo">
                About us
              </HashLink>
              <HashLink to="/contact" title="contact" className="footer_logo">
                Contact
              </HashLink>
              {/* /notfound */}
              <HashLink to="/notfound" title="privacy" className="footer_logo">
                Privacy
              </HashLink>
              <HashLink to="/shop" title="shop" className="footer_logo">
                Shop
              </HashLink>
              <HashLink to="/notfound" title="faqs" className="footer_logo">
                FAQs
              </HashLink>
            </div>
          </div>
          <div className="footer_box">
            <h3 className="pb-5 text-xl font-bold">Social Info</h3>
            <div className="flex gap-11 py-5">
              <PinterestIcon width={24} height={24} className="footer_logo" />
              <TwitterIcon width={24} height={24} className="footer_logo" />
              <FacebookIcon width={24} height={24} className="footer_logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex cursor-pointer flex-wrap items-center justify-center border-t-2 py-5">
        © 2024 Brancy. Made By Kunjbihari.
      </div>
    </section>
  );
}

export default Footer;
