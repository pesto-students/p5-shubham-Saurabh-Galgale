const all = require('jest-5.4/calculator.js');


test('adds 1 + 2 to equal 3', () => {
    expect(all.add(1, 2)).toBe(3);
});
test('multiply 1 * 2 to equal 2', () => {
    expect(all.multiply(1, 2)).toBe(2);
});
test('subtract 2 - 1 to equal 1', () => {
    expect(all.subtract(2, 1)).toBe(1);
});
test('divide 2 + 2 to equal 1', () => {
    expect(all.divide(2, 2)).toBe(1);
});