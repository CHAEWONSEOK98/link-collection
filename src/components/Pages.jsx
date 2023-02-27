import React from 'react';

const Pages = ({ id, pageName }) => {
  return (
    <div>
      <span>{pageName}</span>
      <span>{id}</span>
    </div>
  );
};

export default Pages;
