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
    // console.log(len(portfolio.stocks))
    const result = portfolio.isEmpty();
    expect(result).toBeTruthy();
});

test('Testing isEmpty() -- success', () => {
    const result = portfolio.isEmpty();
    expect(result).toBeTruthy();   
});

test('Testing uniqStocks() -- success', () => {
    portfolio.stocks["GME"] = 2;
    portfolio.stocks["SPY"] = 5;
    target = 2;
    result = portfolio.uniqStocks();
    expect(target).toBe(result);
});

test('Testing purchase() -- success', () => {
    result = portfolio.purchase("VDE", 10);
    expect(result).toBeTruthy(); 
});

test('Testing purchase() -- success', () => {
    result = portfolio.purchase(null, null);
    expect(result).toBeFalsy(); 
});

test('Testing numShares() with ticker exist-- success', () => {
    portfolio.stocks["GME"] = 2;
    portfolio.stocks["SPY"] = 5;
    target = 5;
    result = portfolio.numShares("SPY");
    expect(result).toBe(target); 
});

test('Testing numShares() without ticker -- success', () => {
    target = 0;
    result = portfolio.numShares("SPY");
    expect(result).toBe(target); 
});

test('Testing numShares() without ticker -- success', () => {
    target = 0;
    result = portfolio.numShares("SPY");
    expect(result).toBe(target); 
});