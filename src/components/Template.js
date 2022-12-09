import React from 'react';

const Template = ({ children }) => {
  return (
    <div>
      <div>오늘의 할 일</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
