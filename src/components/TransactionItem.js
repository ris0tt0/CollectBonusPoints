import moment from 'moment';
import React, { memo, useMemo } from 'react';
import { calculatePoints } from '../utils';

const TransactionItem = ({ date, dollarAmount }) => {
  const points = useMemo(() => calculatePoints(dollarAmount), [dollarAmount]);
  return (
    <div className="p-1 m-1 border rounded border-slate-800">
      <div>{moment(date).format('MMMM Do YYYY')}</div>
      <div>
        <span className="text-sm">amount spent:</span> ${dollarAmount}
      </div>
      <div>
        <span className="text-sm">total points:</span> {points}
      </div>
    </div>
  );
};

export default memo(TransactionItem);
