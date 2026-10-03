import React from 'react';
import clsx from 'clsx';

function Badge({ badge, className }) {
  switch (badge) {
    case 'hot':
      return (
        <p
          className={clsx('badge z-20 bg-[#B30000]', {
            [className]: !!className,
          })}
        >
          {badge}
        </p>
      );
    case 'new':
      return (
        <p
          className={clsx('badge z-20 bg-[#B30000]', {
            [className]: !!className,
          })}
        >
          {badge}
        </p>
      );
    case 'beauty':
      return (
        <p
          className={clsx(
            'badge z-20 bg-[#005180] px-5 py-2 capitalize hover:bg-purple-500',
            {
              [className]: !!className,
            },
          )}
        >
          {badge}
        </p>
      );
    default:
      return null;
  }
}
export default Badge;
