const updateUiModule = require('./updateUI.js');
const multiplication = updateUiModule.multiplication;

test('multiplies 1 * 2 to equal 2', () => {
    expect(multiplication(1, 2)).toBe(2);
});