/**
 * Calculates the total points based on the dollar amount.
 * for example: A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction.
 * (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
 *
 * @param {int} amount dollar amount.
 * @returns total points
 */
export const calculatePoints = (amount = 0) => {
  let retVal = 0;
  if (amount > 50) {
    if (amount > 100) {
      // single points
      retVal += 50;
      // double points
      retVal += 2 * (amount - 100);
    } else {
      retVal += amount - 50;
    }
  }

  return retVal;
};

/**
 * Creates a list of transactions based on the userId.
 * @param {string} nameId the user id to look up
 * @param {array} transactions an array list of transactions.
 * @returns a list of user transactions
 */
export const perUser = (nameId, transactions) => {
  return transactions.reduce((retVal, transaction) => {
    if (transaction.userId === nameId) {
      retVal.push(transaction);
    }
    return retVal;
  }, []);
};

/**
 * Calculates the total points per user id.
 * @param {string} nameId the user id to look up
 * @param {array} transactions an array list of transactions
 * @returns the total points for a specific user
 */
export const perUserTotal = (nameId, transactions) => {
  return perUser(nameId, transactions).reduce((retVal, transaction) => {
    retVal += calculatePoints(transaction.dollarAmount);

    return retVal;
  }, 0);
};

/**
 * Returns a Map that contains the zero based month number as the key, and the total points as the value.
 * @param {string} nameId the user id to look up
 * @param {array} transactions an array list of transactions
 * @returns Map of month/total points.
 */
export const perUserMonthsTotal = (nameId, transactions) =>
  perUser(nameId, transactions).reduce((retVal, transaction) => {
    if (!retVal.has(transaction.date.getMonth())) {
      retVal.set(transaction.date.getMonth(), 0);
    }
    retVal.set(
      transaction.date.getMonth(),
      retVal.get(transaction.date.getMonth()) +
        calculatePoints(transaction.dollarAmount)
    );

    return retVal;
  }, new Map());

export const getUsersIdList = (transactions) => {
  const userSet = transactions.reduce((retVal, transaction) => {
    retVal.add(transaction.userId);
    return retVal;
  }, new Set());

  return Array.from(userSet).map((id) => id);
};
