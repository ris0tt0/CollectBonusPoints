import React, { useContext, useMemo } from 'react';
import TransactionItem from '../components/TransactionItem';
import { TransactionsContext } from '../context/transactions';

const UserTransactions = () => {
  const { userId, userTransactions } = useContext(TransactionsContext);

  const transactionItems = useMemo(
    () =>
      userTransactions?.map((transaction, index) => (
        <TransactionItem {...transaction} key={index} />
      )),
    [userTransactions]
  );

  return (
    <div className="w-full p-2 m-2 border rounded border-slate-900">
      <div className="text-lg">Transactions for {userId}</div>
      <div>{transactionItems}</div>
    </div>
  );
};

export { UserTransactions };
