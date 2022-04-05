import { isEqual } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TransactionsContext } from '../context/transactions';
import {
  getUsersIdList,
  perUser,
  perUserMonthsTotal,
  perUserTotal,
} from '../utils';

// transaction data that contains a record for a transaction.
// these records contain the user id, the date of the transaction and the
// dollar amount for that transaction.
const transactions = [
  {
    userId: 'jay',
    date: new Date('10/24/2021'),
    dollarAmount: 120,
  },
  {
    userId: 'jay',
    date: new Date('10/24/2021'),
    dollarAmount: 101,
  },
  {
    userId: 'jay',
    date: new Date('10/23/2021'),
    dollarAmount: 51,
  },
  {
    userId: 'jay',
    date: new Date('9/24/2021'),
    dollarAmount: 10,
  },
  {
    userId: 'jay',
    date: new Date('8/24/2021'),
    dollarAmount: 140,
  },
  {
    userId: 'dianne',
    date: new Date('1/22/2021'),
    dollarAmount: 220,
  },
  {
    userId: 'dianne',
    date: new Date('2/24/2021'),
    dollarAmount: 122,
  },
  {
    userId: 'dianne',
    date: new Date('3/2/2021'),
    dollarAmount: 49,
  },
  {
    userId: 'dianne',
    date: new Date('2/4/2021'),
    dollarAmount: 240,
  },
  {
    userId: 'dianne',
    date: new Date('1/1/2021'),
    dollarAmount: 440,
  },
  {
    userId: 'bill',
    date: new Date('4/1/2021'),
    dollarAmount: 50,
  },
  {
    userId: 'bill',
    date: new Date('4/5/2021'),
    dollarAmount: 51,
  },
  {
    userId: 'bill',
    date: new Date('5/1/2021'),
    dollarAmount: 99,
  },
  {
    userId: 'bill',
    date: new Date('6/11/2021'),
    dollarAmount: 101,
  },
];

export const TransactionsProvider = ({ children }) => {
  const dataRef = useRef({});
  const [userId, setUserId] = useState('jay');
  const [data, setData] = useState({ transactions });

  useEffect(() => {
    const userTransactions = perUser(userId, data.transactions);
    const userTotal = perUserTotal(userId, data.transactions);
    const userMonthsTotal = perUserMonthsTotal(userId, data.transactions);
    const usersList = getUsersIdList(data.transactions);

    const retVal = {
      transactions,
      userId,
      userTransactions,
      userTotal,
      userMonthsTotal,
      usersList,
    };

    if (!isEqual(retVal, dataRef.current)) {
      dataRef.current = retVal;
      setData(retVal);
    }
  }, [data, userId]);

  const setUser = useCallback((id) => setUserId(id), [setUserId]);

  return (
    <TransactionsContext.Provider value={{ ...data, setUser }}>
      {children}
    </TransactionsContext.Provider>
  );
};
