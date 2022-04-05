import React, { useCallback, useContext, useMemo } from 'react';
import { TransactionsContext } from '../context/transactions';

const UserInfo = () => {
  const { userId, usersList, setUser } = useContext(TransactionsContext);
  const options = useMemo(() => {
    if (!usersList) return null;

    return usersList.map((id, index) => (
      <option value={id} key={index}>
        {id}
      </option>
    ));
  }, [usersList]);

  const handleSelect = useCallback(
    (event) => {
      setUser(event.target.value);
    },
    [setUser]
  );

  return (
    <div>
      <span>Select a user: </span>
      <select value={userId} className="text-slate-800" onChange={handleSelect}>
        {options}
      </select>
    </div>
  );
};

export { UserInfo };
