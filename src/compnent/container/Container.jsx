import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 -mt-10 md:p-16">
      {children}
    </div>
  );
};

export default Container;
