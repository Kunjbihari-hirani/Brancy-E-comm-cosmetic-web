import React from 'react';

function DividerCard({ title, imageUrl }) {
  return (
    <div className="topCard w-full overflow-hidden rounded-xl">
      <img
        className="w-full flex-grow rounded-xl"
        src={imageUrl}
        title={title}
        alt={title}
      />
    </div>
  );
}

export default DividerCard;
