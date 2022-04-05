import React, { memo } from 'react';

const MonthItem = ({ month, total }) => {
  return (
    <div className="flex justify-between w-full space-x-4">
      <div>{month}</div>
      <div>{total}</div>
    </div>
  );
};

export default memo(MonthItem);
