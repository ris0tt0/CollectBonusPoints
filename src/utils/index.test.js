import {
  calculatePoints,
  getUsersIdList,
  perUser,
  perUserMonthsTotal,
  perUserTotal,
} from '.';

const transactions = [
  {
    userId: 'jay',
    date: new Date('10/24/2021'),
    dollarAmount: 120,
  },
  {
    userId: 'jay',
    date: new Date('9/24/2021'),
    dollarAmount: 10,
  },
  {
    userId: 'jay1',
    date: new Date('1/20/2021'),
    dollarAmount: 122,
  },
  {
    userId: 'jay1',
    date: new Date('2/4/2021'),
    dollarAmount: 10,
  },
  {
    userId: 'jay2',
    date: new Date('2/4/2021'),
    dollarAmount: 10,
  },
];

describe('calculatePoints', () => {
  test('$120 is 90 points', () => {
    expect(calculatePoints(120)).toBe(90);
  });

  test('$100 is 50 points', () => {
    expect(calculatePoints(100)).toBe(50);
  });

  test('$99 is 49 points', () => {
    expect(calculatePoints(99)).toBe(49);
  });

  test('$50 is 0 points', () => {
    expect(calculatePoints(50)).toBe(0);
  });

  test('$51 is 1 points', () => {
    expect(calculatePoints(51)).toBe(1);
  });

  test('$120 is 90 points', () => {
    expect(calculatePoints(120)).toBe(90);
  });

  test('$101 is 52 points', () => {
    expect(calculatePoints(101)).toBe(52);
  });
});

describe('perUser', () => {
  test('jay user returnd 2 transactions', () => {
    expect(perUser('jay', transactions)).toEqual([
      {
        userId: 'jay',
        date: new Date('10/24/2021'),
        dollarAmount: 120,
      },
      {
        userId: 'jay',
        date: new Date('9/24/2021'),
        dollarAmount: 10,
      },
    ]);
  });
});

describe('perUserTotal', () => {
  test('jay1 has 94 total points', () => {
    expect(perUserTotal('jay1', transactions)).toBe(94);
  });
});

describe('perUserMonthsTotal', () => {
  test('jay has 90 points for oct, 0 points for sept', () => {
    const results = perUserMonthsTotal('jay', transactions);
    expect(results.size).toBe(2);
    expect(results.get(9)).toBe(90);
    expect(results.get(8)).toBe(0);
  });
});

describe('getUsersIdList', () => {
  test('three total users', () => {
    expect(getUsersIdList(transactions)).toEqual(['jay', 'jay1', 'jay2']);
  });
});
