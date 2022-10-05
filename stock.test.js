const myFunctions = require('./stock.js');
var portfolio;

beforeEach(() => {
    portfolio = new myFunctions();
    return portfolio;
});

test('Testing create -- success', () => {
    const target = 0;
    // console.log(len(portfolio.stocks))
    const result = Object.keys(portfolio.stocks).length;
    expect(target).toBe(result);
});

test('Testing isEmpty() -- success', () => {
    const target = 0;
    // console.log(len(portfolio.stocks))
    const result = Object.keys(portfolio.stocks).length;
    expect(target).toBe(result);
});