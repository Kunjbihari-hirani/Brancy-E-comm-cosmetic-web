import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import Card from '../../components/CategoriesCard';
import TopSalesCards from '../../components/TopSalesCards';
import ProductContext from '../../context/ProductContext';

const cards = [
  {
    id: 1,
    title: 'Hare Care',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp',
    className: 'bg-green-300',
    badge: 'hot',
  },
  {
    id: 2,
    title: 'Skin Care',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/2.webp',
    className: 'bg-yellow-300',
  },
  {
    id: 3,
    title: 'Lip stick',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/3.webp',
    className: 'bg-blue-300',
  },
  {
    id: 4,
    title: 'Face skin',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/4.webp',
    className: 'bg-pink-300',
  },
  {
    id: 5,
    title: 'Blusher',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/5.webp',
    className: 'bg-red-200',
  },
  {
    id: 6,
    title: 'Natural',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/6.webp',
    className: 'bg-yellow-100',
    badge: 'new',
  },
];

function Shop() {
  const { Products } = useContext(ProductContext);

  return (
    <>
      <section className="min-h-fit" id="shop">
        <div className="flex h-60 justify-between bg-[#ffedd5d9] pt-14">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-1 pb-5 text-base md:text-xl">
              {' '}
              <HashLink to="/#home">Home</HashLink>
              <span>&gt;</span>
              <p>Products</p>
            </div>
            <p className="px-container text-xl  font-bold md:text-3xl">
              All Products
            </p>
          </div>
          <img
            className="hidden md:block"
            src="https://ik.imagekit.io/b8au2iwe2/shop_cosmetic_img.webp?updatedAt=1711034154566"
            alt=""
          />
        </div>
      </section>
      <section className="min-h-fit px-container  md:py-20">
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 xl:grid-cols-6">
          {cards.map(x => (
            <Card
              key={x.id}
              name={x.title}
              className={x.className}
              imageUrl={x.imageUrl}
              badge={x.badge}
            />
          ))}
        </div>
      </section>
      <section id="topsales" className="min-h-screen">
        <div className="mx-auto px-container pb-5">
          <div className="grid grid-cols-1 gap-7 pt-10 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {Products.map(x => (
              <TopSalesCards
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
    </>
  );
}

export default Shop;
