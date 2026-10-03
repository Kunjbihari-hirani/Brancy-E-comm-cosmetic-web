import React from 'react';
import Badge from '../Badge';

function BlogCards({ title, name, imageUrl, badge }) {
  return (
    <div className="topCard w-full">
      <div className="flex overflow-hidden rounded-xl">
        <img className=" rounded-xl" src={imageUrl} title={title} alt={title} />
      </div>
      <div className="pt-3">
        <div className="relative py-5">
          <Badge badge={badge} className="left-0 w-fit" />
        </div>
        <div className="cursor-pointer pt-5 text-lg hover:text-[#ff6565] xsm:text-xl md:text-2xl">
          {name}
        </div>
        <div className="flex flex-col justify-between gap-1 pt-3 md:flex-row md:pt-5 ">
          <div className="text-sm xsm:text-base">
            BY:
            <span className="cursor-pointer hover:text-[#ff6565]">
              Kunjbihari hirani
            </span>
          </div>
          <div className="text-sm xsm:text-base">FEBRUARY 05, 2023</div>
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
