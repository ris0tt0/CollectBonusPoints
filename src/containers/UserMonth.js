import moment from 'moment';
import React, { useContext, useEffect, useMemo } from 'react';
import MonthItem from '../components/MonthItem';
import { TransactionsContext } from '../context/transactions';

const UserMonth = () => {
  const { userId, userMonthsTotal } = useContext(TransactionsContext);

  const monthItems = useMemo(() => {
    if (userMonthsTotal?.entries) {
      return Array.from(userMonthsTotal.entries()).map(
        ([monthInt, total], index) => {
          const d = new Date();
          d.setMonth(monthInt);

          return (
            <MonthItem
              key={index}
              month={moment(d).format('MMMM')}
              total={total}
            />
          );
        }
      );
    }
    return null;
  }, [userMonthsTotal]);

  return (
    <div className="w-full p-2 m-2 border rounded border-slate-900">
      <div className="text-lg">Months and total points for {userId}</div>
      <div>{monthItems}</div>
    </div>
  );
};

export { UserMonth };
