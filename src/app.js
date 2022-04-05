import React from 'react';
import { UserInfo } from './containers/UserInfo';
import { UserMonth } from './containers/UserMonth';
import { UserTransactions } from './containers/UserTransactions';
import { TransactionsProvider } from './provider/transactions';

export const App = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen text-slate-200 bg-slate-700">
      <TransactionsProvider>
        <div className="flex flex-col items-center justify-center h-full w-96">
          <div className="py-4">
            This simple app display a users total transactions
          </div>
          <UserInfo />
          <UserTransactions />
          <UserMonth />
        </div>
      </TransactionsProvider>
    </div>
  );
};
