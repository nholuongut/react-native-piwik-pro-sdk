import { validateInt, validateVisitorId } from '../../util/validator';
import { validateCustomKeyValue } from '../../util/validator';

describe('#validateInt', () => {
  test('should not throw any exception when called with an integer', () => {
    expect(() => validateInt(1)).not.toThrow();
  });

  test('should throw an error when called with a float', () => {
    expect(() => validateInt(1.1)).toThrow(
      new Error('Parameter must be an integer number')
    );
  });
});

describe('#validateCustomKeyValue', () => {
  test('should not throw any exception when called with positive integers as keys', () => {
    expect(() =>
      validateCustomKeyValue({ 1: 'blue', 3: 'green' })
    ).not.toThrow();
  });

  test('should throw an error when called with a float as a key', () => {
    expect(() => validateCustomKeyValue({ 1.2: 'blue', 3: 'green' })).toThrow(
      new Error('ID (key) must be an integer')
    );
  });

  test('should throw an error when called with a key less than one', () => {
    expect(() => validateCustomKeyValue({ 0: 'blue', 3: 'green' })).toThrow(
      new Error('ID (key) must be an integer greater than 0')
    );
  });

  test('should throw an error when called with a float key less than one', () => {
    expect(() => validateCustomKeyValue({ 1: 'blue', 0.2: 'green' })).toThrow(
      new Error('ID (key) must be an integer')
    );
  });
});

describe('#validateVisitorId', () => {
  test('should not throw any exception when called with proper visitorId', () => {
    const visitorId = '41c90f410ed00000';
    expect(() => validateVisitorId(visitorId)).not.toThrow();
  });

  test('should throw an error when visitorId is too short', () => {
    const visitorId = '41c90f410ed0000';
    expect(() => validateVisitorId(visitorId)).toThrow(
      new Error(
        `Visitor ID ${visitorId} has invalid format. The format must match the regular expression: ^[0-9a-f]{16}$`
      )
    );
  });

  test('should throw an error when visitorId is too long', () => {
    const visitorId = '41c90f410ed000001';
    expect(() => validateVisitorId(visitorId)).toThrow(
      new Error(
        `Visitor ID ${visitorId} has invalid format. The format must match the regular expression: ^[0-9a-f]{16}$`
      )
    );
  });

  test('should throw an error when visitorId contains forbidden characters', () => {
    const visitorId = '41c90f410ed000zs';
    expect(() => validateVisitorId(visitorId)).toThrow(
      new Error(
        `Visitor ID ${visitorId} has invalid format. The format must match the regular expression: ^[0-9a-f]{16}$`
      )
    );
  });
});
