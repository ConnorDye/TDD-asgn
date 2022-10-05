class Portfolio {
    constructor() {
      this.stocks = {}
    }

    isEmpty() {
        if (Object.keys(this.stocks).length == 0)
            return true;
        else
            return false;
    }

    uniqStocks(){
        return Object.keys(this.stocks).length;
    }

    purchase(ticker, numShares){
        if (this.stocks[ticker] = numShares)
            return true;
        else
            return false;

    }

    numShares(ticker){
        if ( this.stocks.hasOwnProperty(ticker) )
            return this.stocks[ticker];
        else
            return 0;
    }
}

const port = new Portfolio()

module.exports=Portfolio