import React from 'react';
import BlogCards from '../../components/BlogCards';

const Blogcards = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/blog/1.webp',
    badge: 'beauty',
  },
  {
    id: 2,
    title: 'Facial Scrub is natural treatment for face.',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/blog/2.webp',
    badge: 'beauty',
  },
  {
    id: 3,
    title: 'Benefit of Hot Ston Spa for your health & life.',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/blog/3.webp',
    badge: 'beauty',
  },
];

function Blogs() {
  return (
    <section className="min-h-fit pt-12" id="blogs">
      <div className="mx-auto px-container">
        <div className="w-full py-3">
          <h2 className="pb-4 text-center text-5xl">Blog Posts</h2>
          <p className="mx-auto max-w-[800px] text-center xsm:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
        <div className="grid grid-cols-1 gap-7 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {Blogcards.map(x => (
            <BlogCards
              title={x.title}
              key={x.id}
              name={x.title}
              imageUrl={x.imageUrl}
              badge={x.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
