const {multiplication} = require('./updateUI.js');

test('multiplies 1 * 2 to equal 2', () => {
    expect(multiplication(1, 2)).toBe(2);
});