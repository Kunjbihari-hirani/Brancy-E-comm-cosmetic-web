import React from 'react';
import Card from '../../components/CategoriesCard';

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

function Categories() {
  return (
    <section className="min-h-fit px-container py-10 md:py-20">
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 xl:grid-cols-6">
        {cards.map(x => (
          <Card
            title={x.title}
            key={x.id}
            name={x.title}
            className={x.className}
            imageUrl={x.imageUrl}
            badge={x.badge}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;
