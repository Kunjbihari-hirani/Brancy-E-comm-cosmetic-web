import React from 'react';
import DividerCard from '../../components/DividerCard';

const Divider = [
  {
    id: 1,
    title: 'discount img',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/1.webp',
  },
  {
    id: 2,
    title: 'discount img',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/2.webp',
  },
  {
    id: 3,
    title: 'discount img',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/3.webp',
  },
];
function ProductsDivider() {
  return (
    <section id="productdivider" className="min-h-96">
      <div className="mx-auto px-container">
        <div className="grid grid-cols-1 gap-7 pt-10 md:grid-cols-2 lg:grid-cols-3">
          {Divider.map(x => (
            <DividerCard key={x.id} title={x.title} imageUrl={x.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsDivider;
