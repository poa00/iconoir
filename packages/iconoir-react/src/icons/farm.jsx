import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Farm = forwardRef(({ color = 'currentColor', size = 24 }, ref) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 14V17M14 14H18M14 14V8L8 5L2 8V20H5M22 14H18M14 17V20H11M14 17H18M22 17H18M18 14V17M18 17V20M5 20V13H11V20M5 20H11"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
});

Farm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Farm.displayName = 'Farm';

export default Farm;