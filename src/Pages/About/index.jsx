import React from 'react';

function About() {
  return (
    <section className="min-h-fit" id="about">
      <div className="hero relative min-h-fit py-5">
        <div className="flex items-center ">
          <div className="mx-10 flex flex-col items-center justify-center px-container md:mx-auto md:flex-row">
            {/* left section About */}
            <div className="mt-14 flex flex-1 flex-col items-center justify-center text-center xsm:relative xsm:mt-48 xsm:text-left md:mt-20">
              <div className="xsm:absolute xsm:-z-10 xsm:mb-48 md:mb-44 lg:mb-64">
                <img
                  className="animation_fade_left w-80 object-contain lg:w-96"
                  src="https://htmldemo.net/brancy/brancy/assets/images/photos/about-title.webp"
                  alt="about"
                  width={180}
                  height={97}
                  title="about"
                />
              </div>
              <h1 className=" text-[5vw] font-bold tracking-wider text-black lg:text-[60px]">
                We, are Brancy
              </h1>
              <div className=" mb-1 underline lg:text-[21px]">
                Best Cosmetic Provider
              </div>
              <div className=" mb-4 lg:text-[21px]">
                Discover the beauty within with Brancy , be Beautiful You.It
                means you can wear the less makeup and let skin SHINE through.
              </div>
            </div>
            {/* right section About */}
            <div className="flex flex-1">
              <img
                src="https://htmldemo.net/brancy/brancy/assets/images/photos/about1.webp"
                alt="image_of_cosmetics"
                title="image_of_cosmetics"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 bg-rose-50  px-5 pb-5 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="mx-5 flex flex-grow flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#ff6565] p-3 lg:mx-auto">
          <img
            className=""
            src="https://htmldemo.net/brancy/brancy/assets/images/icons/funfact1.webp"
            alt="imglogo"
            title="imglogo"
          />
          <hr className="m-5 w-60 self-center border border-[#ff6565]" />
          <div className="text-3xl font-medium">
            <p>5000+</p>
            <p>CLIENTS</p>
          </div>
        </div>
        <div className="mx-5 flex flex-grow flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#ff6565] p-3 lg:mx-auto">
          <img
            src="https://htmldemo.net/brancy/brancy/assets/images/icons/funfact2.webp"
            alt="imglogo"
            title="imglogo"
          />
          <hr className="m-5 w-60 self-center border border-[#ff6565]" />
          <div className="text-3xl font-medium">
            <p>100+</p>
            <p>PROJECTS</p>
          </div>
        </div>
        <div className="mx-5 flex flex-grow flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#ff6565] p-3 lg:mx-auto">
          <img
            src="https://htmldemo.net/brancy/brancy/assets/images/icons/funfact3.webp"
            alt="imglogo"
            title="imglogo"
          />
          <hr className="m-5 w-60 self-center border border-[#ff6565]" />
          <div className="text-3xl font-medium">
            <p>1.5M</p>
            <p>REVENUE</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center pb-10 sm:flex-row">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 pb-5 pt-8 text-3xl font-bold sm:mb-6 md:text-5xl lg:text-6xl">
            Best Cosmetics Provider
          </h2>
          <h3 className="px-5 text-center text-lg xsm:px-20 sm:text-base md:text-lg xl:px-60">
            Your Premier Destination for Beauty Essentials Step into a realm of
            elegance and luxury with our handpicked selection of cosmetics.
            Explore our collection and experienc the difference in quality and
            Sophistication. Elevate your beauty routine with us today.
          </h3>
        </div>
        <div className="mt-20 sm:mb-0 sm:mr-8">
          <img
            title="aboutImg"
            src="https://htmldemo.net/brancy/brancy/assets/images/photos/about2.webp"
            alt="aboutImg"
            // loading="lazy"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 bg-sky-100 px-5 pb-5 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="mx-5 flex flex-grow flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#ff6565] p-3 lg:mx-auto">
          <div className="feature-item flex flex-col items-start justify-center gap-3 ">
            <h3 className=" flex items-center justify-center gap-4 text-xl font-medium">
              <img
                className="h-auto"
                src="https://cosmetic-seven-semicolons.vercel.app/images/feature1.webp"
                width="50"
                height="50"
                alt="Icon"
                title="Icon"
              />
              SUPPORT TEAM
            </h3>
            <h4 className="flex justify-center pl-2 text-base font-normal xl:text-lg">
              Our Support Team is your dedicated ally, ensuring your needs are
              met with care and expertise to ensure quality support.
            </h4>
          </div>
        </div>
        <div className="mx-5 flex flex-grow flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#ff6565] p-3 lg:mx-auto">
          <div className="feature-item flex flex-col items-start justify-center gap-3 ">
            <h3 className=" flex items-center justify-center gap-4 text-xl font-medium">
              <img
                className="h-auto"
                src="https://cosmetic-seven-semicolons.vercel.app/images/feature2.webp"
                width="50"
                height="50"
                alt="Icon"
                title="Icon"
              />
              CERTIFICATION
            </h3>
            <h4 className="flex justify-center pl-2 text-base font-normal xl:text-lg">
              Ensuring Quality and Trust in Every Product. Our commitment to
              excellence guarantees your confidence in our offerings.
            </h4>
          </div>
        </div>
        <div className="mx-5 flex flex-grow flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#ff6565] p-3 lg:mx-auto">
          <div className="feature-item flex flex-col items-start justify-center gap-3 ">
            <h3 className=" flex items-center justify-center gap-4 text-xl font-medium">
              <img
                className="h-auto"
                src="https://cosmetic-seven-semicolons.vercel.app/images/feature3.webp"
                width="50"
                height="50"
                alt="Icon"
                title="Icon"
              />
              NATURAL PRODUCTS
            </h3>
            <h4 className="flex justify-center pl-2 text-base font-normal xl:text-lg">
              Harnessing the Power of Nature for Your Beauty. Discover our range
              crafted with care for a healthier, radiant you.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
