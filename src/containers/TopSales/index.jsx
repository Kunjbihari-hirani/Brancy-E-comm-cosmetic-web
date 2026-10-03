import React, { useContext } from 'react';
import TopSalesCards from '../../components/TopSalesCards';
import ProductContext from '../../context/ProductContext';


function TopSales() {
  const { Products } = useContext(ProductContext);
  return (
    <section id="topsales" className="min-h-screen">
      <div className="mx-auto px-container">
        <h2 className="pb-6 text-center text-5xl">Top Sales</h2>
        <p className="mx-auto max-w-[800px] text-center xsm:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </p>
        <div className="grid grid-cols-1 gap-7 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {Products.map(x => (
            <TopSalesCards
            title={x.title}
              key={x.id}
              name={x.title}
              imageUrl={x.imageUrl}
              price={x.price}
              className={x.className}
              item={x}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopSales;
