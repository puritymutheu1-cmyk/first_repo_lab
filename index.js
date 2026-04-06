// index.test.js

const {
  capitalizeWords,
  filterActiveUsers,
  logAction,
} = require('../index');

describe('capitalizeWords', () => {
  test('capitalizes each word in a sentence', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('javaScript is fun')).toBe('JavaScript Is Fun');
  });

  test('handles empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('handles non-string input', () => {
    expect(capitalizeWords(null)).toBe('');
    expect(capitalizeWords(123)).toBe('');
  });
});

describe('filterActiveUsers', () => {
  const users = [
    { name: 'Alice', isActive: true },
    { name: 'Bob', isActive: false },
    { name: 'Charlie', isActive: true },
  ];

  test('returns only active users', () => {
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', isActive: true },
      { name: 'Charlie', isActive: true },
    ]);
  });

  test('returns empty array when no users are active', () => {
    const inactiveUsers = [
      { name: 'Dan', isActive: false },
      { name: 'Eve', isActive: false },
    ];
    expect(filterActiveUsers(inactiveUsers)).toEqual([]);
  });

  test('returns empty array if input is not an array', () => {
    expect(filterActiveUsers(null)).toEqual([]);
    expect(filterActiveUsers('users')).toEqual([]);
  });
});

describe('logAction', () => {
  test('returns a formatted log string with username and action', () => {
    const result = logAction('login', 'Alice');
    expect(result).toMatch(/^User Alice performed login at \d{4}-\d{2}-\d{2}T/);
  });
});