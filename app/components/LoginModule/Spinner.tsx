import React from 'react';

const Spinner = () => {
  return (
    <div className='inline-block h-4 w-4 mx-2 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125] text-gray-700 motion-reduce::animate-[spin_1.5s_linear_infinite]'></div>
  );
};

export default Spinner;
