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

test('Testing purchase() with no shares bought (step 7) -- success', () => {
    result = portfolio.purchase("SPY", 0);
    expect(result).toBeFalsy(); 
});

test("Testing sell() with too many shares sold (step 8) -- success()", () => {
    result = portfolio.purchase("SPY", 5);
    expect(()=> {portfolio.sell("SPY", 10);}).toThrowError(/Trying to Sell Too Many Shares/)
});

test("Testing sell() with enough shares to sell -- success()", () => {
    portfolio.stocks["SPY"] = 5;
    target = 3;
    
    result = portfolio.sell("SPY", 2);
    expect(result).toBe(target); 
    // result = portfolio.purchase("SPY", 5);
    // expect(result).toBeFalsy();
    // expect(()=> {portfolio.sell("SPY", 2);}).toThrowError(/Trying to Sell Too Many Shares/)
});

test("Testing sell() all shares -- success()", () => {
    portfolio.stocks["SPY"] = 5;
    target = false;
    portfolio.sell("SPY", 5);
    result = portfolio.stocks.hasOwnProperty("SPY")
    expect(result).toBe(target); 
    // result = portfolio.purchase("SPY", 5);
    // expect(result).toBeFalsy();
    // expect(()=> {portfolio.sell("SPY", 2);}).toThrowError(/Trying to Sell Too Many Shares/)
});